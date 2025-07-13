import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface FeaturedImageProps {
  currentImageUrl: string | null;
  postTitle: string;
  imagePosition: string;
  getImageClasses: () => string;
  handleFileSelect: () => void;
  isUploading: boolean;
  isInline?: boolean;
}

export const FeaturedImage = ({
  currentImageUrl,
  postTitle,
  imagePosition,
  getImageClasses,
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

  // Render image without edit buttons (read-only)
  return (
    <div className={`${isInline ? '' : 'mb-6'}`}>
      <img 
        src={currentImageUrl} 
        alt={postTitle}
        className={getImageClasses()}
        style={isInline ? { display: 'block' } : undefined}
      />
    </div>
  );
};