import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Edit3, Upload } from "lucide-react";

interface FeaturedImageProps {
  currentImageUrl: string | null;
  postTitle: string;
  imagePosition: string;
  getImageClasses: () => string;
  openEditDialog: () => void;
  handleFileSelect: () => void;
  isUploading: boolean;
  isInline?: boolean;
}

export const FeaturedImage = ({
  currentImageUrl,
  postTitle,
  imagePosition,
  getImageClasses,
  openEditDialog,
  handleFileSelect,
  isUploading,
  isInline = false,
}: FeaturedImageProps) => {
  // Show placeholder when no image and not inline
  if (!currentImageUrl && !isInline) {
    return (
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center max-w-md mx-auto mb-6">
        <p className="text-sm text-gray-500 mb-4">Brak obrazka głównego</p>
        <Button onClick={handleFileSelect} disabled={isUploading}>
          <Upload className="h-4 w-4 mr-2" />
          {isUploading ? 'Ładowanie...' : 'Dodaj obrazek'}
        </Button>
      </div>
    );
  }

  // Don't render anything if no image and inline mode
  if (!currentImageUrl) {
    return null;
  }

  // Render image with edit button
  return (
    <div className={`relative group ${isInline ? '' : 'mb-6'}`}>
      <img 
        src={currentImageUrl} 
        alt={postTitle}
        className={getImageClasses()}
        style={isInline ? { display: 'block' } : undefined}
      />
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <DialogTrigger asChild>
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0" onClick={openEditDialog}>
            <Edit3 className="h-4 w-4" />
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
};