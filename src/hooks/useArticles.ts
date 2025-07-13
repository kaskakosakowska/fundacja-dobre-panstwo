import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  published_date: string;
  section: 'szkatulka' | 'szczypta' | 'glosy';
  author: string;
  featured_image_url?: string;
  original_url?: string;
}

export const useArticles = (section?: 'szkatulka' | 'szczypta' | 'glosy') => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('useArticles: Fetching articles...');
      
      let query = supabase
        .from('articles')
        .select('*')
        .eq('is_published', true)
        .order('published_date', { ascending: false })
        .order('created_at', { ascending: false });

      if (section) {
        query = query.eq('section', section);
      }

      const { data, error } = await query;
      console.log('useArticles: Query result:', { data: data?.length, error });

      if (error) throw error;

      setArticles(data || []);
      console.log('useArticles: Articles updated, count:', data?.length || 0);
    } catch (err) {
      console.error('useArticles: Error fetching articles:', err);
      setError(err instanceof Error ? err.message : 'Błąd pobierania artykułów');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [section]);

  const refetch = () => {
    setLoading(true);
    fetchArticles();
  };

  return { articles, loading, error, refetch };
};