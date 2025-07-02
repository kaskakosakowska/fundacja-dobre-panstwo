import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

import { parseWordPressXML } from './xml-parser.ts';
import { savePostsToDatabase } from './database.ts';
import { ProcessingResult } from './types.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
      return await processXMLFile(supabaseClient, fileName);
    }

    if (action === 'status') {
      return await getStatus(supabaseClient);
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

async function processXMLFile(
  supabaseClient: ReturnType<typeof createClient>, 
  fileName: string
): Promise<Response> {
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
  
  // Save posts to database
  const { processed, errors } = await savePostsToDatabase(posts, supabaseClient);

  console.log(`process-xml-import: Completed - Processed: ${processed}, Errors: ${errors}`);

  const result: ProcessingResult = { 
    message: 'XML processing completed',
    totalPosts: posts.length,
    processed,
    errors,
    categorization: {
      szkatulka: posts.filter(p => p.section === 'szkatulka').length,
      glosy: posts.filter(p => p.section === 'glosy').length,
      szczypta: posts.filter(p => p.section === 'szczypta').length
    }
  };

  return new Response(JSON.stringify(result), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

async function getStatus(supabaseClient: ReturnType<typeof createClient>): Promise<Response> {
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