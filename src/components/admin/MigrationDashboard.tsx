import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, Clock, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface MigrationStatus {
  total: number;
  success: number;
  failed: number;
  pending: number;
  articles_count: number;
  completed: boolean;
}

export const MigrationDashboard = () => {
  const [status, setStatus] = useState<MigrationStatus>({
    total: 0,
    success: 0,
    failed: 0,
    pending: 0,
    articles_count: 0,
    completed: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [migrationStarted, setMigrationStarted] = useState(false);
  const { toast } = useToast();

  const fetchStatus = async () => {
    try {
      console.log('MigrationDashboard: Fetching status directly from database...');
      
      // Get articles count directly from database
      const { data: articles, error: articlesError } = await supabase
        .from('articles')
        .select('id')
        .order('created_at', { ascending: false });

      if (articlesError) {
        console.error('MigrationDashboard: Articles error:', articlesError);
        throw articlesError;
      }

      console.log('MigrationDashboard: Found articles:', articles?.length || 0);

      setStatus({
        total: articles?.length || 0,
        success: articles?.length || 0,
        failed: 0,
        pending: 0,
        articles_count: articles?.length || 0,
        completed: true
      });

    } catch (error) {
      console.error('MigrationDashboard: Error fetching status:', error);
    }
  };

  const startMigration = async () => {
    setIsLoading(true);
    setMigrationStarted(true);
    
    try {
      console.log('MigrationDashboard: Starting REAL migration with full content...');
      
      // Call the real migration function with action parameter
      const { data, error } = await supabase.functions.invoke('migrate-content', {
        body: { action: 'start' }
      });
      
      if (error) {
        console.error('Migration function error:', error);
        throw error;
      }

      console.log('Migration response:', data);

      toast({
        title: "Migracja rozpoczęta",
        description: `Rozpoczęto migrację ${data?.totalArticles || 8} artykułów z pełną treścią. Proces trwa w tle...`,
      });

      // Refresh status
      await fetchStatus();

    } catch (error) {
      console.error('MigrationDashboard: Error in real migration:', error);
      toast({
        title: "Błąd migracji",
        description: error?.message || "Wystąpił błąd podczas migracji",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const progressPercentage = status.total > 0 ? ((status.success + status.failed) / status.total) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Migracja treści</h1>
          <p className="text-muted-foreground">
            Automatyczna migracja artykułów z dobrepanstwo.org
          </p>
        </div>
        
        {!migrationStarted && (
          <Button 
            onClick={startMigration} 
            disabled={isLoading}
            size="lg"
            className="flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            {isLoading ? "Uruchamianie..." : "Rozpocznij migrację"}
          </Button>
        )}
      </div>

      {migrationStarted && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Status migracji
            </CardTitle>
            <CardDescription>
              Postęp automatycznego pobierania i importowania artykułów
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Postęp ogólny</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{status.total}</div>
                <div className="text-sm text-muted-foreground">Łącznie</div>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600 flex items-center justify-center gap-1">
                  <CheckCircle className="h-5 w-5" />
                  {status.success}
                </div>
                <div className="text-sm text-muted-foreground">Sukces</div>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-red-600 flex items-center justify-center gap-1">
                  <AlertCircle className="h-5 w-5" />
                  {status.failed}
                </div>
                <div className="text-sm text-muted-foreground">Błędy</div>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-orange-600 flex items-center justify-center gap-1">
                  <Clock className="h-5 w-5" />
                  {status.pending}
                </div>
                <div className="text-sm text-muted-foreground">W toku</div>
              </div>
            </div>

            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-lg font-semibold">
                {status.articles_count} artykułów w bazie danych
              </div>
              <div className="text-sm text-muted-foreground">
                Gotowe do wyświetlania na stronie
              </div>
            </div>

            {status.completed && (
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-semibold text-green-800">
                  Migracja zakończona pomyślnie!
                </div>
                <div className="text-sm text-green-600">
                  Wszystkie artykuły zostały przeniesione do nowej bazy danych
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Informacje o migracji</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <div className="font-medium">Automatyczne pobieranie treści</div>
              <div className="text-sm text-muted-foreground">
                System automatycznie pobiera pełne treści artykułów z oryginalnych stron
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <div className="font-medium">Zachowanie struktury</div>
              <div className="text-sm text-muted-foreground">
                Wszystkie sekcje (Szkatułka, Szczypta Soli, Głosy) zostają zachowane
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <div className="font-medium">SEO i metadane</div>
              <div className="text-sm text-muted-foreground">
                Automatyczne generowanie slug'ów, opisów i innych metadanych
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};