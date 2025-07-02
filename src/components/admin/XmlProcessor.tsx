import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Play, BarChart3 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const XmlProcessor = () => {
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const checkStatus = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('process-xml-import', {
        body: { action: 'status' }
      });

      if (error) throw error;
      setStatus(data);
      
      toast({
        title: "Status sprawdzony",
        description: `Dostępne pliki: ${data.availableFiles?.length || 0}`,
      });
    } catch (error) {
      console.error('Error checking status:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się sprawdzić statusu",
        variant: "destructive"
      });
    }
  };

  const processXml = async (fileName: string) => {
    setProcessing(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('process-xml-import', {
        body: { 
          action: 'process',
          fileName: `xml/${fileName}`
        }
      });

      if (error) throw error;
      
      setResult(data);
      toast({
        title: "Sukces!",
        description: `Przetworzono ${data.processed} wpisów`,
      });
      
    } catch (error) {
      console.error('Error processing XML:', error);
      toast({
        title: "Błąd przetwarzania",
        description: "Nie udało się przetworzyć pliku XML",
        variant: "destructive"
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Przetwarzanie XML WordPress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={checkStatus} variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Sprawdź status
            </Button>
          </div>

          {status && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Dostępne pliki XML:</h3>
              {status.availableFiles?.length > 0 ? (
                <div className="space-y-2">
                  {status.availableFiles.map((fileName: string) => (
                    <div key={fileName} className="flex items-center justify-between p-2 bg-white rounded border">
                      <span className="text-sm font-mono">{fileName}</span>
                      <Button 
                        size="sm" 
                        onClick={() => processXml(fileName)}
                        disabled={processing}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        {processing ? 'Przetwarzanie...' : 'Przetwórz'}
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Brak dostępnych plików XML</p>
              )}
            </div>
          )}

          {result && (
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium mb-2">Wyniki przetwarzania:</h3>
              <div className="space-y-1 text-sm">
                <p>Łączna liczba wpisów: {result.totalPosts}</p>
                <p>Przetworzono: {result.processed}</p>
                <p>Błędy: {result.errors}</p>
                {result.categorization && (
                  <div className="mt-3">
                    <p className="font-medium">Kategoryzacja:</p>
                    <ul className="ml-4 space-y-1">
                      <li>Szkatułka: {result.categorization.szkatulka} wpisów</li>
                      <li>Głosy: {result.categorization.glosy} wpisów</li>
                      <li>Szczypta: {result.categorization.szczypta} wpisów</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};