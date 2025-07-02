import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  published_date: string;
  section: 'szkatulka' | 'szczypta' | 'glosy';
}

export const LatestArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('id, title, slug, summary, published_date, section')
          .eq('is_published', true)
          .order('published_date', { ascending: false })
          .limit(4);

        if (error) {
          console.error('Error fetching articles:', error);
        } else {
          setArticles(data || []);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getSectionPath = (section: string) => {
    switch (section) {
      case 'szkatulka': return '/szkatulka-kosztownosci';
      case 'szczypta': return '/szczypta-soli';
      case 'glosy': return '/glosy-ktore-slychac';
      default: return '/';
    }
  };

  console.log('LatestArticles: loading =', loading, 'articles count =', articles.length);
  
  if (loading) {
    return (
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-center mb-8" style={{ color: '#333333' }}>
            Najnowsze publikacje (Loading...)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-lg animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-3 w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans font-semibold text-center mb-8" style={{ color: '#333333' }}>
          Najnowsze publikacje
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => {
            console.log('LatestArticles: Rendering article:', article.title);
            return (
              <div key={article.id} className="p-6 rounded-lg border border-red-500" style={{ backgroundColor: 'red', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', minHeight: '200px' }}>
                <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
                  {article.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#666666' }}>
                  {formatDate(article.published_date)}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
                  {article.summary}
                </p>
                <Link 
                  to={`${getSectionPath(article.section)}/${article.slug}`}
                  className="text-sm font-medium hover:opacity-70 transition-opacity" 
                  style={{ color: '#333333' }}
                >
                  Czytaj więcej →
                </Link>
              </div>
            );
          })}
        </div>
        
        {articles.length === 0 && !loading && (
          <div className="text-center py-8">
            <p className="text-lg" style={{ color: '#666666' }}>
              Brak artykułów do wyświetlenia
            </p>
          </div>
        )}
        
        <div className="text-center mt-8">
          <p className="text-sm" style={{ color: '#666666' }}>
            Wszystkich publikacji: <strong>{articles.length}+</strong> | Zobacz więcej w sekcjach tematycznych powyżej
          </p>
          <div className="mt-4 space-x-4">
            <a href="https://dobrepanstwo.org" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              dobrepanstwo.org →
            </a>
            <a href="https://wbrew.org" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              wbrew.org →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};