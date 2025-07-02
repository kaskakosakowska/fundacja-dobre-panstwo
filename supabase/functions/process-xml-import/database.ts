import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';
import { ParsedPost, ProcessingStats } from './types.ts';
import { createSlug } from './utils.ts';

export async function savePostsToDatabase(
  posts: ParsedPost[], 
  supabaseClient: ReturnType<typeof createClient>
): Promise<ProcessingStats> {
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

  return { processed, errors };
}