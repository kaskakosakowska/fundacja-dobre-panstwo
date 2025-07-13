import { useState, useEffect } from "react";
import { useArticles } from "@/hooks/useArticles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ArticlesListProps {
  onEditArticle: (articleId: string) => void;
}

export const ArticlesList = ({ onEditArticle }: ArticlesListProps) => {
  const { articles, loading, error, refetch } = useArticles();
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getSectionLabel = (section: string) => {
    switch (section) {
      case 'szkatulka': return 'Szkatułka kosztowności';
      case 'szczypta': return 'Szczypta Soli';
      case 'glosy': return 'Głosy które słychać';
      default: return section;
    }
  };

  const handleDelete = async (articleId: string, title: string) => {
    if (!confirm(`Czy na pewno chcesz usunąć artykuł "${title}"?`)) {
      return;
    }

    console.log('ArticlesList: Starting delete for article:', articleId);

    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleId);

      console.log('ArticlesList: Delete query result:', { error });

      if (error) throw error;

      console.log('ArticlesList: Delete successful, calling refetch...');

      toast({
        title: "Artykuł usunięty",
        description: "Artykuł został pomyślnie usunięty.",
      });

      // Refresh list without reloading page
      refetch();
      
      console.log('ArticlesList: Refetch called');
    } catch (error: any) {
      console.error('ArticlesList: Delete error:', error);
      toast({
        title: "Błąd",
        description: error.message || "Nie udało się usunąć artykułu.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Opublikowane artykuły</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Ładowanie artykułów...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Opublikowane artykuły</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">Błąd: {error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Opublikowane artykuły ({articles.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {articles.length === 0 ? (
          <p className="text-center text-gray-500">Brak opublikowanych artykułów.</p>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{article.title}</h3>
                  <Badge variant="outline">{getSectionLabel(article.section)}</Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">
                  {formatDate(article.published_date)} | {article.author || 'Brak autora'}
                </p>
                
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {article.summary}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    type="button"
                    onClick={() => onEditArticle(article.id)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edytuj
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(article.id, article.title)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Usuń
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a 
                      href={`/${article.section === 'szkatulka' ? 'szkatulka-kosztownosci' : 
                              article.section === 'szczypta' ? 'szczypta-soli' : 
                              'glosy-ktore-slychac'}/${article.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Zobacz
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};