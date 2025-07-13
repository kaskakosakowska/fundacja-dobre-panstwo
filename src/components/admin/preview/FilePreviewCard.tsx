import { Card } from "@/components/ui/card";
import { FileText, Music, Image } from "lucide-react";

interface FilePreviewCardProps {
  type: 'pdf' | 'audio' | 'image';
  file?: File;
  imagePosition?: string;
  imageSize?: string;
}

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const getIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return FileText;
    case 'audio':
      return Music;
    case 'image':
      return Image;
    default:
      return FileText;
  }
};

const getLabel = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'Plik PDF';
    case 'audio':
      return 'Audio';
    case 'image':
      return 'Obrazek';
    default:
      return 'Plik';
  }
};

const getEmptyMessage = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'Brak pliku PDF';
    case 'audio':
      return 'Brak pliku audio';
    case 'image':
      return 'Brak obrazka';
    default:
      return 'Brak pliku';
  }
};

const getPlaceholderHeight = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'h-32';
    case 'audio':
      return 'h-16';
    case 'image':
      return 'aspect-video';
    default:
      return 'h-32';
  }
};

export const FilePreviewCard = ({ type, file, imagePosition, imageSize }: FilePreviewCardProps) => {
  const Icon = getIcon(type);
  const label = getLabel(type);
  const emptyMessage = getEmptyMessage(type);
  const placeholderHeight = getPlaceholderHeight(type);

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-4 w-4" />
        <span className="font-medium text-sm">{label}</span>
      </div>
      
      {file ? (
        <div className="space-y-2">
          <p className="text-sm font-medium">{file.name}</p>
          <p className="text-xs text-muted-foreground">
            {formatFileSize(file.size)}
          </p>
          
          {type === 'image' && imagePosition && imageSize && (
            <div className="space-y-2 p-3 bg-muted/50 rounded">
              <div className="text-xs">
                <span className="font-medium">Pozycja:</span> {
                  imagePosition === 'inline-left' ? 'W tekście po lewej' :
                  imagePosition === 'inline-right' ? 'W tekście po prawej' :
                  imagePosition === 'left' ? 'Po lewej' :
                  imagePosition === 'right' ? 'Po prawej' :
                  imagePosition === 'center' ? 'Na środku' :
                  imagePosition === 'full' ? 'Pełna szerokość' : 'Nie ustawiono'
                }
              </div>
              <div className="text-xs">
                <span className="font-medium">Wielkość:</span> {
                  imageSize === 'small' ? 'Mała' :
                  imageSize === 'medium' ? 'Średnia' :
                  imageSize === 'large' ? 'Duża' :
                  imageSize === 'xlarge' ? 'Bardzo duża' : 'Nie ustawiono'
                }
              </div>
            </div>
          )}
          
          {type === 'image' && (
            <div className="text-xs text-muted-foreground italic">
              Obrazek jest zintegrowany z treścią artykułu po lewej stronie
            </div>
          )}
          
          <div className={`${placeholderHeight} bg-muted rounded border-2 border-dashed flex items-center justify-center`}>
            <span className="text-sm text-muted-foreground">
              {type === 'pdf' ? 'PDF Embedder' : 
               type === 'audio' ? 'Audio Player' : 
               'Image Preview'}
            </span>
          </div>
        </div>
      ) : (
        <div className={`${placeholderHeight} bg-muted/50 rounded border-2 border-dashed flex items-center justify-center`}>
          <span className="text-sm text-muted-foreground">{emptyMessage}</span>
        </div>
      )}
    </Card>
  );
};