import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, File, X, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const FileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      for (const file of files) {
        // Sprawdź czy to plik XML
        if (!file.name.toLowerCase().endsWith('.xml')) {
          toast({
            title: "Błąd",
            description: "Można przesyłać tylko pliki XML",
            variant: "destructive"
          });
          continue;
        }

        const fileName = `xml/${Date.now()}-${file.name}`;

        const { data, error } = await supabase.storage
          .from('documents')
          .upload(fileName, file);

        if (error) {
          console.error('Upload error:', error);
          toast({
            title: "Błąd przesyłania",
            description: `Nie udało się przesłać pliku ${file.name}`,
            variant: "destructive"
          });
        } else {
          toast({
            title: "Sukces",
            description: `Plik ${file.name} został przesłany`,
          });
          
          // Dodaj do listy przesłanych plików
          setUploadedFiles(prev => [...prev, {
            name: file.name,
            path: data.path,
            size: file.size,
            uploadedAt: new Date()
          }]);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Błąd",
        description: "Wystąpił nieoczekiwany błąd",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDownload = async (filePath: string, fileName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('documents')
        .download(filePath);

      if (error) {
        toast({
          title: "Błąd pobierania",
          description: "Nie udało się pobrać pliku",
          variant: "destructive"
        });
        return;
      }

      // Utwórz link do pobierania
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Błąd",
        description: "Wystąpił błąd podczas pobierania",
        variant: "destructive"
      });
    }
  };

  const handleRemove = async (filePath: string, index: number) => {
    try {
      const { error } = await supabase.storage
        .from('documents')
        .remove([filePath]);

      if (error) {
        toast({
          title: "Błąd usuwania",
          description: "Nie udało się usunąć pliku",
          variant: "destructive"
        });
        return;
      }

      setUploadedFiles(prev => prev.filter((_, i) => i !== index));
      toast({
        title: "Sukces",
        description: "Plik został usunięty",
      });
    } catch (error) {
      console.error('Remove error:', error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Przesyłanie plików XML
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-medium mb-2">Przeciągnij i upuść pliki XML</p>
            <p className="text-sm text-gray-500 mb-4">lub kliknij aby wybrać pliki</p>
            
            <input
              ref={fileInputRef}
              type="file"
              accept=".xml"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
            
            <Button 
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="mb-2"
            >
              {uploading ? 'Przesyłanie...' : 'Wybierz pliki XML'}
            </Button>
            
            <p className="text-xs text-gray-400">
              Obsługiwane formaty: .xml
            </p>
          </div>
        </CardContent>
      </Card>

      {uploadedFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Przesłane pliki</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <File className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB • 
                        {file.uploadedAt.toLocaleString('pl-PL')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(file.path, file.name)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleRemove(file.path, index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};