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
      const { data, error } = await supabase.functions.invoke('migrate-content', {
        body: { action: 'status' }
      });

      if (error) throw error;
      setStatus(data);
    } catch (error) {
      console.error('Error fetching migration status:', error);
    }
  };

  const startMigration = async () => {
    setIsLoading(true);
    setMigrationStarted(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('migrate-content', {
        body: { action: 'start' }
      });

      if (error) throw error;

      toast({
        title: "Migracja rozpoczęta",
        description: `Pobieranie ${data.totalArticles} artykułów w tle...`,
      });

      // Start polling for status
      const interval = setInterval(async () => {
        await fetchStatus();
        if (status.completed) {
          clearInterval(interval);
          toast({
            title: "Migracja zakończona",
            description: `${status.success} artykułów zmigrowanych pomyślnie`,
          });
        }
      }, 5000);

    } catch (error) {
      console.error('Error starting migration:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się rozpocząć migracji",
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