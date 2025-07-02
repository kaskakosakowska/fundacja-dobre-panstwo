import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ParsedPost {
  title: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  author: string;
  featuredImage?: string;
  attachments: string[];
  section: 'szkatulka' | 'glosy' | 'szczypta';
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (char) => {
      const polishMap: { [key: string]: string } = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 
        'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
      };
      return polishMap[char] || char;
    })
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function categorizePost(title: string, content: string, publishedDate: string): 'szkatulka' | 'glosy' | 'szczypta' {
  // Głosy - wszystkie wpisy ze słowem "petycja" w tytule lub treści
  if (title.toLowerCase().includes('petycja') || content.toLowerCase().includes('petycja')) {
    return 'glosy';
  }
  
  // Szkatułka - wpisy powstałe po 1 maja 2025r
  const postDate = new Date(publishedDate);
  const cutoffDate = new Date('2025-05-01');
  if (postDate > cutoffDate) {
    return 'szkatulka';
  }
  
  // Szczypta - pozostałe wpisy
  return 'szczypta';
}

function parseWordPressXML(xmlContent: string): ParsedPost[] {
  const posts: ParsedPost[] = [];
  
  try {
    // Extract posts using regex patterns
    const itemPattern = /<item>([\s\S]*?)<\/item>/g;
    let itemMatch;
    
    while ((itemMatch = itemPattern.exec(xmlContent)) !== null) {
      const itemContent = itemMatch[1];
      
      // Extract basic fields
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
      const excerptMatch = itemContent.match(/<excerpt:encoded><!\[CDATA\[(.*?)\]\]><\/excerpt:encoded>/);
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const authorMatch = itemContent.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/);
      const statusMatch = itemContent.match(/<wp:status>(.*?)<\/wp:status>/);
      const typeMatch = itemContent.match(/<wp:post_type>(.*?)<\/wp:post_type>/);
      
      // Only process published posts and pages
      if (statusMatch && !['publish', 'draft', 'private'].includes(statusMatch[1])) continue;
      if (typeMatch && !['post', 'page'].includes(typeMatch[1])) continue;
      
      const title = titleMatch ? titleMatch[1] : '';
      const content = contentMatch ? contentMatch[1] : '';
      const excerpt = excerptMatch ? excerptMatch[1] : '';
      const publishedDate = pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : '';
      const author = authorMatch ? authorMatch[1] : 'Fundacja Dobre Państwo';
      
      if (!title || !content) continue;
      
      // Extract attachments and featured image
      const attachments: string[] = [];
      let featuredImage: string | undefined;
      
      // Look for wp:attachment_url
      const attachmentPattern = /<wp:attachment_url>(.*?)<\/wp:attachment_url>/g;
      let attachmentMatch;
      while ((attachmentMatch = attachmentPattern.exec(itemContent)) !== null) {
        attachments.push(attachmentMatch[1]);
      }
      
      // Look for featured image in post meta
      const metaPattern = /<wp:postmeta>([\s\S]*?)<\/wp:postmeta>/g;
      let metaMatch;
      while ((metaMatch = metaPattern.exec(itemContent)) !== null) {
        const metaContent = metaMatch[1];
        const keyMatch = metaContent.match(/<wp:meta_key><!\[CDATA\[(.*?)\]\]><\/wp:meta_key>/);
        const valueMatch = metaContent.match(/<wp:meta_value><!\[CDATA\[(.*?)\]\]><\/wp:meta_value>/);
        
        if (keyMatch && valueMatch && keyMatch[1] === '_thumbnail_id') {
          // This would need additional processing to get the actual image URL
          // For now, we'll extract images from content
        }
      }
      
      // Extract images from content
      const imgPattern = /<img[^>]+src="([^"]+)"/g;
      let imgMatch;
      while ((imgMatch = imgPattern.exec(content)) !== null) {
        if (!featuredImage) {
          featuredImage = imgMatch[1];
        }
        if (!attachments.includes(imgMatch[1])) {
          attachments.push(imgMatch[1]);
        }
      }
      
      const section = categorizePost(title, content, publishedDate);
      
      posts.push({
        title,
        content,
        excerpt: excerpt || content.substring(0, 200) + '...',
        publishedDate,
        author,
        featuredImage,
        attachments,
        section
      });
    }
  } catch (error) {
    console.error('Error parsing XML:', error);
  }
  
  return posts;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('process-xml-import: Function called');
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    const { action = 'status', fileName } = await req.json().catch(() => ({}));
    console.log('process-xml-import: Action requested:', action, 'fileName:', fileName);

    if (action === 'process' && fileName) {
      console.log('process-xml-import: Processing XML file:', fileName);
      
      // Download XML file from storage
      const { data: fileData, error: downloadError } = await supabaseClient.storage
        .from('documents')
        .download(fileName);

      if (downloadError) {
        throw new Error(`Failed to download file: ${downloadError.message}`);
      }

      // Convert blob to text
      const xmlContent = await fileData.text();
      console.log('process-xml-import: XML content length:', xmlContent.length);
      
      // Parse XML and extract posts
      const posts = parseWordPressXML(xmlContent);
      console.log('process-xml-import: Parsed posts:', posts.length);
      
      let processed = 0;
      let errors = 0;
      
      for (const post of posts) {
        try {
          const slug = createSlug(post.title);
          
          // Check if article already exists
          const { data: existingArticle } = await supabaseClient
            .from('articles')
            .select('id')
            .eq('slug', slug)
            .single();

          const articleData = {
            title: post.title,
            slug,
            summary: post.excerpt,
            content: post.content,
            excerpt: post.excerpt,
            published_date: post.publishedDate,
            section: post.section,
            author: post.author,
            featured_image_url: post.featuredImage,
            meta_description: post.excerpt,
            is_published: true
          };

          if (existingArticle) {
            // Update existing article
            const { error: updateError } = await supabaseClient
              .from('articles')
              .update(articleData)
              .eq('slug', slug);

            if (updateError) {
              console.error(`Failed to update article ${slug}:`, updateError);
              errors++;
              continue;
            }
          } else {
            // Insert new article
            const { error: insertError } = await supabaseClient
              .from('articles')
              .insert(articleData);

            if (insertError) {
              console.error(`Failed to insert article ${slug}:`, insertError);
              errors++;
              continue;
            }
          }
          
          processed++;
          console.log(`Processed article: ${post.title} -> ${post.section}`);
          
        } catch (error) {
          console.error(`Error processing post ${post.title}:`, error);
          errors++;
        }
      }

      console.log(`process-xml-import: Completed - Processed: ${processed}, Errors: ${errors}`);

      return new Response(JSON.stringify({ 
        message: 'XML processing completed',
        totalPosts: posts.length,
        processed,
        errors,
        categorization: {
          szkatulka: posts.filter(p => p.section === 'szkatulka').length,
          glosy: posts.filter(p => p.section === 'glosy').length,
          szczypta: posts.filter(p => p.section === 'szczypta').length
        }
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'status') {
      // Get available XML files
      const { data: files } = await supabaseClient.storage
        .from('documents')
        .list('xml');

      return new Response(JSON.stringify({
        availableFiles: files?.map(f => f.name) || [],
        message: 'Ready to process XML files'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in process-xml-import function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});