import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PostData {
  [key: string]: {
    title: string;
    date: string;
    summary: string;
    content: string;
    link: string;
  };
}

const POSTS_DATA = {
  szkatulka: {
    "zaufanie-ktore-wiednie": { title: "Zaufanie, które więdnie", date: "29 czerwca 2025", summary: "Esej o kapitale społecznym i erozji zaufania w społeczeństwie", content: "Szczegółowa analiza zjawiska erozji zaufania społecznego w Polsce", link: "https://wbrew.org/kapital-spoleczny-zaufanie/" },
    "total-participation-management": { title: "Total Participation Management (TPM)", date: "29 czerwca 2025", summary: "Zarządzanie pełnią człowieczeństwa w nowoczesnych organizacjach", content: "Kompleksowa analiza nowego modelu zarządzania", link: "https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/" },
    "ekonomiczne-niewolnictwo-xxi-wieku": { title: "Ekonomiczne niewolnictwo XXI wieku", date: "29 czerwca 2025", summary: "Głos prekariatu przeciw outsourcingowi", content: "Dogłębna analiza zjawiska prekariatu", link: "https://wbrew.org/prekariat-vs-outsourcing/" },
    "wzorzec-ktory-marzy": { title: "Wzorzec, który marzy", date: "29 czerwca 2025", summary: "Esej o osobliwości i tożsamości", content: "Analiza wzorców osobowościowych w kontekście współczesnej kultury", link: "https://wbrew.org/wzorzec-osobliwosc-tozsamosc/" },
    "zderegulujmy-rzecznika-msp": { title: "Zderegulujmy Rzecznika MŚP", date: "27 czerwca 2025", summary: "O redukcji fikcji dialogu w administracji", content: "Krytyczna ocena instytucji Rzecznika MŚP", link: "https://wbrew.org/zderegulujmy-rzecznika-msp-zredukujmy-fikcje-dialogu/" },
    // ... continuing with abbreviated data for demo - in production would include all ~120 articles
  },
  szczypta: {
    "wzmacnianie-csr-biznesu": { title: "Wzmacnianie Społecznej Odpowiedzialności Biznesu", date: "30 września 2024", summary: "Strategiczne partnerstwa z interesariuszami", content: "Kompleksowa analiza znaczenia ESG w nowoczesnym biznesie", link: "https://dobrepanstwo.org/wzmacnianie-spolecznej-odpowiedzialnosci-biznesu/" },
  },
  glosy: {
    "policzmy-kosciol-petycja": { title: "Policzmy Kościół - petycja", date: "1 kwietnia 2024", summary: "Petycja o transparentność finansów kościelnych", content: "Obywatelska inicjatywa domagająca się transparentności", link: "https://dobrepanstwo.org/policzmy-kosciol-petycja/" },
  }
};

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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    const firecrawlApiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!firecrawlApiKey) {
      throw new Error('FIRECRAWL_API_KEY not configured');
    }

    const { action = 'status', section, slug } = await req.json().catch(() => ({}));

    if (action === 'start') {
      // Start migration in background
      const backgroundMigration = async () => {
        let totalProcessed = 0;
        let totalSuccess = 0;
        let totalFailed = 0;

        for (const [sectionKey, posts] of Object.entries(POSTS_DATA)) {
          for (const [postSlug, postData] of Object.entries(posts as PostData)) {
            totalProcessed++;
            
            try {
              // Log start
              await supabaseClient.from('migration_log').insert({
                url: postData.link,
                status: 'pending'
              });

              // Crawl content
              const crawlResult = await crawlArticle(postData.link, firecrawlApiKey);
              
              if (!crawlResult.success) {
                await supabaseClient.from('migration_log').update({
                  status: 'failed',
                  error_message: crawlResult.error
                }).eq('url', postData.link);
                totalFailed++;
                continue;
              }

              // Create article
              const articleSlug = createSlug(postData.title);
              const publishedDate = parsePolishDate(postData.date);

              const { data: article, error: articleError } = await supabaseClient
                .from('articles')
                .insert({
                  title: postData.title,
                  slug: articleSlug,
                  summary: postData.summary,
                  content: crawlResult.content,
                  excerpt: postData.summary,
                  published_date: publishedDate,
                  section: sectionKey,
                  original_url: postData.link,
                  author: 'Fundacja Dobre Państwo',
                  meta_description: postData.summary,
                  is_published: true
                })
                .select()
                .single();

              if (articleError) {
                await supabaseClient.from('migration_log').update({
                  status: 'failed',
                  error_message: articleError.message
                }).eq('url', postData.link);
                totalFailed++;
                continue;
              }

              // Update log with success
              await supabaseClient.from('migration_log').update({
                status: 'success',
                article_id: article.id
              }).eq('url', postData.link);

              totalSuccess++;
              console.log(`Migrated: ${postData.title} (${totalProcessed}/${Object.keys(POSTS_DATA).reduce((acc, key) => acc + Object.keys(POSTS_DATA[key as keyof typeof POSTS_DATA]).length, 0)})`);

              // Small delay to avoid rate limiting
              await new Promise(resolve => setTimeout(resolve, 1000));

            } catch (error) {
              console.error(`Failed to migrate ${postData.title}:`, error);
              await supabaseClient.from('migration_log').update({
                status: 'failed',
                error_message: error.message
              }).eq('url', postData.link);
              totalFailed++;
            }
          }
        }

        console.log(`Migration completed: ${totalSuccess} success, ${totalFailed} failed, ${totalProcessed} total`);
      };

      // Start background task
      EdgeRuntime.waitUntil(backgroundMigration());

      return new Response(JSON.stringify({ 
        message: 'Migration started in background',
        totalArticles: Object.keys(POSTS_DATA).reduce((acc, key) => acc + Object.keys(POSTS_DATA[key as keyof typeof POSTS_DATA]).length, 0)
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