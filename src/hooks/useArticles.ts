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

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        let query = supabase
          .from('articles')
          .select('*')
          .eq('is_published', true)
          .order('published_date', { ascending: false });

        if (section) {
          query = query.eq('section', section);
        }

        const { data, error } = await query;

        if (error) throw error;

        setArticles(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Błąd pobierania artykułów');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [section]);

  return { articles, loading, error };
};