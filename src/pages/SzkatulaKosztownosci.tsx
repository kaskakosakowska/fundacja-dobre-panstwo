import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useArticles } from "@/hooks/useArticles";

const SzkatulaKosztownosci = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const { articles, loading, error } = useArticles('szkatulka');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F6F4EF' }}>
        <p style={{ color: '#666666' }}>Ładowanie artykułów...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F6F4EF' }}>
        <p style={{ color: '#666666' }}>Błąd: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
            <span style={{ color: '#666666' }}>Powrót</span>
          </Link>
          <h1 className="text-3xl font-light" style={{ color: '#333333' }}>
            Szkatułka Kosztowności
          </h1>
          <p className="mt-2 text-lg" style={{ color: '#666666' }}>
            Publikacje powstałe po 1 maja 2025 - analizy polityczne, społeczne i ekonomiczne
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#333333' }}>
                Najnowsze wpisy ({articles.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {articles.length === 0 ? (
                <p className="text-center text-lg" style={{ color: '#666666' }}>
                  Brak artykułów w tej sekcji.
                </p>
              ) : (
                <ScrollArea className="h-[70vh]">
                  <div className="space-y-6 pr-4">
                    {articles.map((article) => (
                      <div key={article.id} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start gap-3">
                          <img 
                            src="/lovable-uploads/67187d9c-6fe3-4bda-b537-0eeb08b6d5a7.png" 
                            alt="Logo" 
                            className="w-8 h-8 mt-1 flex-shrink-0 object-contain"
                          />
                          <div className="flex-1">
                            <h3 
                              className="text-xl font-medium mb-2"
                              style={{ color: '#333333' }}
                            >
                              {article.title}
                            </h3>
                            <p className="text-sm mb-3" style={{ color: '#666666' }}>
                              {formatDate(article.published_date)} | {article.author}
                            </p>
                            <p className="text-base mb-4 leading-relaxed" style={{ color: '#666666' }}>
                              {article.summary}
                            </p>
                            <div className="flex gap-4 items-center flex-wrap">
                              <Link 
                                to={`/szkatulka-kosztownosci/${article.slug}`}
                                className="inline-flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                                style={{ color: '#333333' }}
                              >
                                Czytaj pełną wersję <ExternalLink className="h-3 w-3" />
                              </Link>
                              <button
                                className="text-sm hover:opacity-70 transition-opacity"
                                style={{ color: '#666666' }}
                                onClick={() => setSelectedPost(selectedPost === article.id ? null : article.id)}
                              >
                                {selectedPost === article.id ? 'Zwiń podgląd' : 'Podgląd'}
                              </button>
                              {article.original_url && (
                                <a 
                                  href={article.original_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm hover:opacity-70 transition-opacity"
                                  style={{ color: '#666666' }}
                                >
                                  Oryginał
                                </a>
                              )}
                            </div>
                            {selectedPost === article.id && (
                              <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                                <div 
                                  className="text-base leading-relaxed prose max-w-none"
                                  style={{ color: '#333333' }}
                                  dangerouslySetInnerHTML={{ __html: article.content.substring(0, 500) + '...' }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full h-px mb-6" style={{ backgroundColor: '#E5E5E5' }}></div>
          <p className="text-center text-sm font-light" style={{ color: '#666666' }}>
            © 2024 Fundacja Dobre Państwo. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SzkatulaKosztownosci;