import { ParsedPost } from './types.ts';
import { categorizePost } from './utils.ts';

export function parseWordPressXML(xmlContent: string): ParsedPost[] {
  const posts: ParsedPost[] = [];
  
  try {
    console.log('XML content length:', xmlContent.length);
    console.log('XML preview:', xmlContent.substring(0, 1000));
    
    // Look for all possible post structures
    const itemTest = xmlContent.match(/<item>/g);
    const wpPostTest = xmlContent.match(/<wp:post>/g);
    const entryTest = xmlContent.match(/<entry>/g);
    
    console.log('Structure analysis:', {
      itemCount: itemTest?.length || 0,
      wpPostCount: wpPostTest?.length || 0,
      entryCount: entryTest?.length || 0
    });
    
    // Find all possible post containers
    let allItems: string[] = [];
    
    // Try <item> tags first (standard RSS/WordPress export)
    const items = xmlContent.match(/<item[\s\S]*?<\/item>/g);
    if (items) {
      allItems = allItems.concat(items);
      console.log('Found <item> tags:', items.length);
    }
    
    // Try <wp:post> elements (extended WordPress export)
    const wpPosts = xmlContent.match(/<wp:post[\s\S]*?<\/wp:post>/g);
    if (wpPosts) {
      allItems = allItems.concat(wpPosts);
      console.log('Found <wp:post> tags:', wpPosts.length);
    }
    
    // Try <entry> elements (Atom format)
    const entries = xmlContent.match(/<entry[\s\S]*?<\/entry>/g);
    if (entries) {
      allItems = allItems.concat(entries);
      console.log('Found <entry> tags:', entries.length);
    }
    
    if (allItems.length === 0) {
      console.log('No recognizable post elements found. Showing sample structure:');
      const sampleContent = xmlContent.substring(1000, 5000);
      console.log('Sample content:', sampleContent);
      return posts;
    }
    
    console.log('Processing', allItems.length, 'total elements...');
    
    for (let i = 0; i < allItems.length; i++) {
      const post = parsePostItem(allItems[i], i + 1, allItems.length);
      if (post) {
        posts.push(post);
        console.log('Added post:', post.title);
      }
    }
    
  } catch (error) {
    console.error('Error parsing XML:', error);
  }
  
  console.log('Total posts parsed:', posts.length);
  return posts;
}

function parsePostItem(itemContent: string, index: number, total: number): ParsedPost | null {
  console.log(`Processing item ${index}/${total}, length:`, itemContent.length);
  
  // First check if this is actually a blog post
  const statusMatch = itemContent.match(/<wp:status>(.*?)<\/wp:status>/);
  const typeMatch = itemContent.match(/<wp:post_type>(.*?)<\/wp:post_type>/);
  
  console.log('Item type check:', { 
    status: statusMatch?.[1], 
    type: typeMatch?.[1] 
  });
  
  // Only process actual blog posts, skip categories, tags, comments, attachments, etc.
  if (typeMatch && typeMatch[1] !== 'post') {
    console.log(`Skipping - not a post, type: ${typeMatch[1]}`);
    return null;
  }
  
  // Only process published posts and drafts, skip trash, auto-draft, etc.
  if (statusMatch && !['publish', 'draft'].includes(statusMatch[1])) {
    console.log(`Skipping - status: ${statusMatch[1]}`);
    return null;
  }
  
  const { title, content, excerpt } = extractContent(itemContent);
  const publishedDate = extractPublishedDate(itemContent);
  const author = extractAuthor(itemContent);
  const { featuredImage, attachments } = extractMedia(itemContent);
  
  console.log('Extracted data:', { 
    title: title.substring(0, 50), 
    content: content.substring(0, 100), 
    status: statusMatch?.[1], 
    type: typeMatch?.[1],
    hasContent: !!content,
    hasTitle: !!title
  });
  
  // Additional quality validation
  if (!title || title.length < 5) {
    console.log('Skipping - title too short or missing:', title);
    return null;
  }
  
  // Skip if title is just numbers or common non-content patterns
  if (/^\d+$/.test(title) || title.toLowerCase().includes('auto-draft') || title.toLowerCase().includes('revision')) {
    console.log('Skipping - invalid title pattern:', title);
    return null;
  }
  
  const finalContent = content || excerpt || title;
  
  // Skip if content is too short or empty
  if (!finalContent || finalContent.length < 50) {
    console.log('Skipping - content too short:', title);
    return null;
  }
  
  const section = categorizePost(title, finalContent, publishedDate);
  
  return {
    title,
    content: finalContent,
    excerpt: excerpt || finalContent.substring(0, 200) + '...',
    publishedDate,
    author,
    featuredImage,
    attachments,
    section
  };
}

function extractContent(itemContent: string): { title: string; content: string; excerpt: string } {
  const titlePatterns = [
    // WordPress specific patterns first
    /<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/,
    /<title><!\[CDATA\[(.*?)\]\]><\/title>/,
    /<title>(.*?)<\/title>/
  ];
  
  const contentPatterns = [
    /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/,
    /<encoded><!\[CDATA\[([\s\S]*?)\]\]><\/encoded>/,
    /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/,
    /<content>([\s\S]*?)<\/content>/
  ];
  
  const excerptPatterns = [
    /<excerpt:encoded><!\[CDATA\[(.*?)\]\]><\/excerpt:encoded>/,
    /<excerpt><!\[CDATA\[(.*?)\]\]><\/excerpt>/,
    /<wp:post_excerpt><!\[CDATA\[(.*?)\]\]><\/wp:post_excerpt>/
  ];
  
  let title = '';
  let content = '';
  let excerpt = '';
  
  // Try different title patterns
  for (const titlePattern of titlePatterns) {
    const match = itemContent.match(titlePattern);
    if (match && match[1]) {
      const candidateTitle = match[1].trim();
      // Skip if title is just a number or too short
      if (candidateTitle.length > 3 && !/^\d+$/.test(candidateTitle)) {
        title = candidateTitle;
        break;
      }
    }
  }
  
  // Try different content patterns
  for (const contentPattern of contentPatterns) {
    const match = itemContent.match(contentPattern);
    if (match && match[1]) {
      content = match[1].trim();
      break;
    }
  }
  
  // Try different excerpt patterns
  for (const excerptPattern of excerptPatterns) {
    const match = itemContent.match(excerptPattern);
    if (match && match[1]) {
      excerpt = match[1].trim();
      break;
    }
  }
  
  return { title, content, excerpt };
}

function extractPublishedDate(itemContent: string): string {
  const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/) || 
                      itemContent.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/);
  
  return pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : '';
}

function extractAuthor(itemContent: string): string {
  const authorMatch = itemContent.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/) ||
                     itemContent.match(/<wp:post_author_display_name><!\[CDATA\[(.*?)\]\]><\/wp:post_author_display_name>/);
  
  return authorMatch ? authorMatch[1] : 'Fundacja Dobre Państwo';
}

function extractMedia(itemContent: string): { featuredImage?: string; attachments: string[] } {
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
  while ((imgMatch = imgPattern.exec(itemContent)) !== null) {
    if (!featuredImage) {
      featuredImage = imgMatch[1];
    }
    if (!attachments.includes(imgMatch[1])) {
      attachments.push(imgMatch[1]);
    }
  }
  
  return { featuredImage, attachments };
}