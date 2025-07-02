import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Articles to migrate with full content extraction
const ARTICLES_TO_MIGRATE = [
  {
    title: "Zaufanie, które więdnie",
    url: "https://wbrew.org/kapital-spoleczny-zaufanie/",
    section: "szkatulka",
    published_date: "2025-06-29"
  },
  {
    title: "Total Participation Management (TPM)",
    url: "https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/",
    section: "szkatulka", 
    published_date: "2025-06-29"
  },
  {
    title: "Ekonomiczne niewolnictwo XXI wieku",
    url: "https://wbrew.org/prekariat-vs-outsourcing/",
    section: "szkatulka",
    published_date: "2025-06-29"
  },
  {
    title: "Wzmacnianie Społecznej Odpowiedzialności Biznesu",
    url: "https://dobrepanstwo.org/wzmacnianie-spolecznej-odpowiedzialnosci-biznesu/",
    section: "szczypta",
    published_date: "2024-09-30"
  },
  {
    title: "Gdy Ziemia krzyczy głosem ludu",
    url: "https://dobrepanstwo.org/gdy-ziemia-krzyczy-glosem-ludu/",
    section: "szczypta",
    published_date: "2025-06-21"
  },
  {
    title: "Zawód Ksiądz – Niebiańska Praca czy Państwowa Fikcja?",
    url: "https://dobrepanstwo.org/zawod-ksiadz-niebianska-praca-czy-panstwowa-fikcja/",
    section: "szczypta",
    published_date: "2024-09-27"
  },
  {
    title: "Straszna dwukadencyjność",
    url: "https://dobrepanstwo.org/straszna-dwukadencyjnosc-petycja-fundacji-dobre-panstwo/",
    section: "glosy",
    published_date: "2024-07-16"
  },
  {
    title: "Policzmy mienie Kościoła!",
    url: "https://dobrepanstwo.org/policzmy-mienie-kosciola/",
    section: "glosy", 
    published_date: "2024-06-01"
  }
];

async function crawlArticle(url: string, firecrawlApiKey: string) {
  try {
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${firecrawlApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        formats: ['markdown', 'html'],
        extractorOptions: {
          mode: 'markdown'
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Firecrawl API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      content: data.data?.markdown || data.data?.content || '',
      html: data.data?.html || '',
      metadata: data.data?.metadata || {}
    };
  } catch (error) {
    console.error('Error crawling article:', error);
    return {
      success: false,
      error: error.message
    };
  }
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

function parsePolishDate(dateStr: string): string {
  const monthMap: { [key: string]: string } = {
    'stycznia': '01', 'lutego': '02', 'marca': '03', 'kwietnia': '04',
    'maja': '05', 'czerwca': '06', 'lipca': '07', 'sierpnia': '08',
    'września': '09', 'października': '10', 'listopada': '11', 'grudnia': '12'
  };
  
  const match = dateStr.match(/(\d+)\s+(\w+)\s+(\d{4})/);
  if (match) {
    const [, day, month, year] = match;
    const monthNum = monthMap[month.toLowerCase()] || '01';
    return `${year}-${monthNum}-${day.padStart(2, '0')}`;
  }
  
  return new Date().toISOString().split('T')[0];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('migrate-content: Function called');
    
    // Create Supabase client (without requiring auth for testing)
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY');
    console.log('migrate-content: Firecrawl API key configured:', !!firecrawlApiKey);
    
    if (!firecrawlApiKey) {
      throw new Error('FIRECRAWL_API_KEY not configured');
    }

    const { action = 'status' } = await req.json().catch(() => ({}));
    console.log('migrate-content: Action requested:', action);

    if (action === 'start') {
      console.log('migrate-content: Starting direct migration...');
      
      let totalProcessed = 0;
      let totalSuccess = 0;
      let totalFailed = 0;
      const totalArticles = ARTICLES_TO_MIGRATE.length;
      
      console.log(`migrate-content: Processing ${totalArticles} articles with full content`);

      for (const article of ARTICLES_TO_MIGRATE) {
        totalProcessed++;
        console.log(`migrate-content: Processing ${article.title} (${totalProcessed}/${totalArticles})`);
        
        try {
          // Log start
          await supabaseClient.from('migration_log').insert({
            url: article.url,
            status: 'pending'
          });

          // Crawl content
          console.log(`migrate-content: Crawling ${article.url}`);
          const crawlResult = await crawlArticle(article.url, firecrawlApiKey);
          
          if (!crawlResult.success) {
            console.error(`migrate-content: Crawl failed for ${article.url}:`, crawlResult.error);
            await supabaseClient.from('migration_log').update({
              status: 'failed',
              error_message: crawlResult.error
            }).eq('url', article.url);
            totalFailed++;
            continue;
          }

          // Create slug and summary from content
          const articleSlug = createSlug(article.title);
          const content = crawlResult.content || 'Treść artykułu zostanie uzupełniona.';
          const summary = content.substring(0, 200).replace(/#+\s*/g, '') + '...';

          console.log(`migrate-content: Inserting article ${articleSlug}`);
          
          // Check if article exists
          const { data: existingArticle } = await supabaseClient
            .from('articles')
            .select('id')
            .eq('slug', articleSlug)
            .single();

          if (existingArticle) {
            // Update existing article
            const { error: updateError } = await supabaseClient
              .from('articles')
              .update({
                title: article.title,
                summary: summary,
                content: content,
                excerpt: summary,
                published_date: article.published_date,
                section: article.section,
                original_url: article.url,
                author: 'Fundacja Dobre Państwo',
                meta_description: summary,
                is_published: true
              })
              .eq('slug', articleSlug);

            if (updateError) {
              console.error(`migrate-content: Article update failed for ${articleSlug}:`, updateError);
              await supabaseClient.from('migration_log').update({
                status: 'failed',
                error_message: updateError.message
              }).eq('url', article.url);
              totalFailed++;
              continue;
            }

            console.log(`migrate-content: Updated existing article ${article.title}`);
          } else {
            // Insert new article
            const { data: newArticle, error: insertError } = await supabaseClient
              .from('articles')
              .insert({
                title: article.title,
                slug: articleSlug,
                summary: summary,
                content: content,
                excerpt: summary,
                published_date: article.published_date,
                section: article.section,
                original_url: article.url,
                author: 'Fundacja Dobre Państwo',
                meta_description: summary,
                is_published: true
              })
              .select()
              .single();

            if (insertError) {
              console.error(`migrate-content: Article insert failed for ${articleSlug}:`, insertError);
              await supabaseClient.from('migration_log').update({
                status: 'failed',
                error_message: insertError.message
              }).eq('url', article.url);
              totalFailed++;
              continue;
            }

            console.log(`migrate-content: Inserted new article ${article.title}`);
          }

          // Update log with success
          await supabaseClient.from('migration_log').update({
            status: 'success'
          }).eq('url', article.url);

          totalSuccess++;
          console.log(`migrate-content: Successfully migrated ${article.title} (${totalSuccess}/${totalArticles})`);

        } catch (error) {
          console.error(`migrate-content: Failed to migrate ${article.title}:`, error);
          await supabaseClient.from('migration_log').update({
            status: 'failed',
            error_message: error.message
          }).eq('url', article.url);
          totalFailed++;
        }
      }

      console.log(`migrate-content: Migration completed - Success: ${totalSuccess}, Failed: ${totalFailed}, Total: ${totalProcessed}`);

      return new Response(JSON.stringify({ 
        message: 'Migration completed',
        totalArticles: ARTICLES_TO_MIGRATE.length,
        success: totalSuccess,
        failed: totalFailed
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'status') {
      // Get migration status
      const { data: logs } = await supabaseClient
        .from('migration_log')
        .select('status')
        .order('created_at', { ascending: false });

      const { data: articles } = await supabaseClient
        .from('articles')
        .select('id')
        .order('created_at', { ascending: false });

      const success = logs?.filter(log => log.status === 'success').length || 0;
      const failed = logs?.filter(log => log.status === 'failed').length || 0;
      const pending = logs?.filter(log => log.status === 'pending').length || 0;
      const total = logs?.length || 0;

      return new Response(JSON.stringify({
        total,
        success,
        failed,
        pending,
        articles_count: articles?.length || 0,
        completed: pending === 0 && total > 0
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in migrate-content function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});