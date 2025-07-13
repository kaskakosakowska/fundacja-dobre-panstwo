import { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FileText, Music, Image, Upload, X, CheckCircle } from "lucide-react";

interface UploadedFiles {
  pdf?: File;
  audio?: File;
  image?: File;
  image_position?: string;
  image_size?: string;
}

interface ExistingFiles {
  pdf_url?: string;
  audio_url?: string;
  featured_image_url?: string;
  image_position?: string;
  image_size?: string;
}

interface FileUploadProps {
  onFilesUploaded: (files: UploadedFiles) => void;
  onImageSettingsUpdate?: (position: string, size: string) => void;
  existingFiles?: ExistingFiles;
}

export const FileUpload = ({ onFilesUploaded, onImageSettingsUpdate, existingFiles }: FileUploadProps) => {
  const [files, setFiles] = useState<UploadedFiles>({});
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [errors, setErrors] = useState<string[]>([]);
  const [imagePosition, setImagePosition] = useState(existingFiles?.image_position || "inline-left");
  const [imageSize, setImageSize] = useState(existingFiles?.image_size || "medium");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Initialize with existing files
  useEffect(() => {
    if (existingFiles) {
      const newFiles: UploadedFiles = {
        image_position: existingFiles.image_position || "inline-left",
        image_size: existingFiles.image_size || "medium"
      };
      setFiles(newFiles);
      onFilesUploaded(newFiles);
    }
  }, [existingFiles, onFilesUploaded]);

  // Helper function to get existing file URL
  const getExistingFileUrl = (type: 'pdf' | 'audio' | 'image') => {
    if (!existingFiles) return null;
    switch (type) {
      case 'pdf': return existingFiles.pdf_url;
      case 'audio': return existingFiles.audio_url;
      case 'image': return existingFiles.featured_image_url;
      default: return null;
    }
  };

  // Helper function to get file name from URL
  const getFileNameFromUrl = (url: string) => {
    return url.split('/').pop() || 'Istniejący plik';
  };

  const validateFile = (file: File, type: 'pdf' | 'audio' | 'image') => {
    const validTypes = {
      pdf: ['application/pdf'],
      audio: ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg'],
      image: ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    };

    const maxSizes = {
      pdf: 10 * 1024 * 1024, // 10MB
      audio: 50 * 1024 * 1024, // 50MB
      image: 5 * 1024 * 1024 // 5MB
    };

    if (!validTypes[type].includes(file.type)) {
      return `Niepoprawny format pliku ${type.toUpperCase()}`;
    }

    if (file.size > maxSizes[type]) {
      return `Plik ${type.toUpperCase()} jest za duży (max ${Math.round(maxSizes[type] / (1024 * 1024))}MB)`;
    }

    return null;
  };

  const handleFileSelect = useCallback((type: 'pdf' | 'audio' | 'image') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'pdf' ? '.pdf' : 
                   type === 'audio' ? '.mp3,.wav,.ogg' : 
                   '.jpg,.jpeg,.png,.webp,.gif';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const error = validateFile(file, type);
      if (error) {
        setErrors(prev => [...prev, error]);
        return;
      }

      // Clear previous errors for this file type
      setErrors(prev => prev.filter(err => !err.includes(type.toUpperCase())));

      // Simulate upload progress
      setUploadProgress(prev => ({ ...prev, [type]: 0 }));
      
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[type] || 0;
          if (currentProgress >= 100) {
            clearInterval(progressInterval);
            return prev;
          }
          return { ...prev, [type]: currentProgress + 10 };
        });
      }, 100);

      setTimeout(() => {
        const newFiles = { 
          ...files, 
          [type]: file,
          image_position: imagePosition,
          image_size: imageSize
        };
        setFiles(newFiles);
        onFilesUploaded(newFiles);
        setUploadProgress(prev => ({ ...prev, [type]: 100 }));
      }, 1200);
    };

    input.click();
  }, [files, onFilesUploaded, imagePosition, imageSize]);

  const removeFile = (type: 'pdf' | 'audio' | 'image') => {
    const newFiles = { ...files };
    delete newFiles[type];
    setFiles(newFiles);
    onFilesUploaded(newFiles);
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[type];
      return newProgress;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const FileUploadCard = ({ 
    type, 
    icon: Icon, 
    title, 
    description 
  }: { 
    type: 'pdf' | 'audio' | 'image';
    icon: any;
    title: string;
    description: string;
  }) => (
    <Card className="relative">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Icon className="h-4 w-4" />
          {title}
        </CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        {files[type] || getExistingFileUrl(type) ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-md">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-sm font-medium">
                    {files[type] ? files[type]!.name : getFileNameFromUrl(getExistingFileUrl(type)!)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {files[type] ? formatFileSize(files[type]!.size) : 'Istniejący plik'}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {getExistingFileUrl(type) && !files[type] && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(getExistingFileUrl(type)!, '_blank')}
                    title="Zobacz plik"
                  >
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleFileSelect(type)}
                  title={files[type] ? "Zmień plik" : "Zastąp plik"}
                >
                  <Upload className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(type)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {uploadProgress[type] !== undefined && uploadProgress[type] < 100 && (
              <Progress value={uploadProgress[type]} className="h-2" />
            )}
            
            {uploadProgress[type] === 100 && (
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <CheckCircle className="h-4 w-4" />
                Plik załadowany pomyślnie
              </div>
            )}
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => handleFileSelect(type)}
          >
            <Upload className="h-4 w-4 mr-2" />
            Wybierz plik
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FileUploadCard
          type="pdf"
          icon={FileText}
          title="Plik PDF"
          description="Pełna wersja wpisu (max 10MB)"
        />
        
        <FileUploadCard
          type="audio"
          icon={Music}
          title="Plik Audio"
          description="Wersja mówiona (max 50MB)"
        />
        
        <FileUploadCard
          type="image"
          icon={Image}
          title="Obrazek główny"
          description="Grafika do wpisu (max 5MB)"
        />
      </div>

      {/* Image configuration section */}
      {(files.image || getExistingFileUrl('image')) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Konfiguracja obrazka</CardTitle>
            <CardDescription className="text-xs">Ustaw pozycję i wielkość obrazka w artykule</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="image-position" className="text-sm">Pozycja</Label>
                <Select value={imagePosition} onValueChange={(value) => {
                  console.log("Position changed from", imagePosition, "to", value);
                  setImagePosition(value);
                  setHasUnsavedChanges(true);
                  console.log("setHasUnsavedChanges(true) called");
                }}>
                  <SelectTrigger id="image-position">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inline-left">W tekście po lewej</SelectItem>
                    <SelectItem value="inline-right">W tekście po prawej</SelectItem>
                    <SelectItem value="above">Nad tekstem</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image-size" className="text-sm">Wielkość</Label>
                <Select value={imageSize} onValueChange={(value) => {
                  console.log("Size changed from", imageSize, "to", value);
                  setImageSize(value);
                  setHasUnsavedChanges(true);
                  console.log("setHasUnsavedChanges(true) called for size");
                }}>
                  <SelectTrigger id="image-size">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Mały</SelectItem>
                    <SelectItem value="medium">Średni</SelectItem>
                    <SelectItem value="large">Duży</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Debug info */}
            <div className="text-red-600 text-sm">
              DEBUG: hasUnsavedChanges={hasUnsavedChanges ? 'TRUE' : 'FALSE'}, 
              position={imagePosition}, size={imageSize}
            </div>
            
            {/* Przycisk zachowaj zmiany */}
            {hasUnsavedChanges && (
              <div className="pt-4 border-t">
                 <Button 
                   onClick={() => {
                     console.log("ZACHOWAJ ZMIANY CLICKED:", { imagePosition, imageSize });
                     const newFiles = { 
                       ...files, 
                       image_position: imagePosition,
                       image_size: imageSize
                     };
                     setFiles(newFiles);
                     onFilesUploaded(newFiles);
                     // Update main form as well
                     console.log("onImageSettingsUpdate exists:", !!onImageSettingsUpdate);
                     if (onImageSettingsUpdate) {
                       console.log("CALLING onImageSettingsUpdate:", imagePosition, imageSize);
                       onImageSettingsUpdate(imagePosition, imageSize);
                     }
                     setHasUnsavedChanges(false);
                   }}
                  className="w-full"
                  variant="default"
                >
                  Zachowaj zmiany
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {errors.length > 0 && (
        <Alert variant="destructive">
          <AlertDescription>
            <ul className="list-disc list-inside space-y-1">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      <div className="text-center text-sm text-muted-foreground">
        <p>💡 Wszystkie pliki są opcjonalne - możesz dodać je później</p>
      </div>
    </div>
  );
};