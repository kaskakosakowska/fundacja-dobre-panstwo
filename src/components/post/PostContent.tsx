import { Post } from "@/hooks/usePostData";
import { SzkatulaContent } from "./content/SzkatulaContent";
import { GlosyContent } from "./content/GlosyContent";
import { DefaultContent } from "./content/DefaultContent";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Edit3, Upload, X } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PostContentProps {
  post: Post;
  section: string;
  postId: string | undefined;
}

export const PostContent = ({ post, section, postId }: PostContentProps) => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(post.featured_image_url);
  const { toast } = useToast();

  const getFullContent = () => {
    if (section === 'szkatulka') {
      return <SzkatulaContent post={post} postId={postId} />;
    }
    
    if (section === 'glosy') {
      return <GlosyContent post={post} postId={postId} />;
    }

    return <DefaultContent post={post} />;
  };

  const handleImageUpload = async (file: File) => {
    if (!post.id) return;
    
    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${post.slug || post.id}/featured-image.${fileExt}`;
      
      // Upload to storage
      const { data, error: uploadError } = await supabase.storage
        .from('articles-images')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('articles-images')
        .getPublicUrl(data.path);

      // Update article record
      const { error: updateError } = await supabase
        .from('articles')
        .update({ featured_image_url: publicUrl })
        .eq('id', post.id);

      if (updateError) throw updateError;

      setCurrentImageUrl(publicUrl);
      setIsEditingImage(false);
      
      toast({
        title: "Obrazek zaktualizowany",
        description: "Nowy obrazek został pomyślnie zapisany.",
      });
    } catch (error: any) {
      toast({
        title: "Błąd uploadu",
        description: error.message || "Nie udało się zaktualizować obrazka.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        handleImageUpload(file);
      }
    };
    input.click();
  };

  const removeImage = async () => {
    if (!post.id) return;
    
    setIsUploading(true);
    try {
      const { error } = await supabase
        .from('articles')
        .update({ featured_image_url: null })
        .eq('id', post.id);

      if (error) throw error;

      setCurrentImageUrl(null);
      setIsEditingImage(false);
      
      toast({
        title: "Obrazek usunięty",
        description: "Obrazek został usunięty z wpisu.",
      });
    } catch (error: any) {
      toast({
        title: "Błąd",
        description: error.message || "Nie udało się usunąć obrazka.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Featured Image */}
      <div className="mb-6 relative group">
        {currentImageUrl ? (
          <>
            <img 
              src={currentImageUrl} 
              alt={post.title}
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Dialog open={isEditingImage} onOpenChange={setIsEditingImage}>
                <DialogTrigger asChild>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edytuj obrazek główny</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="text-center">
                      <img 
                        src={currentImageUrl} 
                        alt={post.title}
                        className="w-full max-w-sm mx-auto rounded-lg shadow-sm mb-4"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleFileSelect}
                        disabled={isUploading}
                        className="flex-1"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {isUploading ? 'Ładowanie...' : 'Zmień obrazek'}
                      </Button>
                      <Button 
                        variant="destructive"
                        onClick={removeImage}
                        disabled={isUploading}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Usuń
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center max-w-md mx-auto">
            <p className="text-sm text-gray-500 mb-4">Brak obrazka głównego</p>
            <Button onClick={handleFileSelect} disabled={isUploading}>
              <Upload className="h-4 w-4 mr-2" />
              {isUploading ? 'Ładowanie...' : 'Dodaj obrazek'}
            </Button>
          </div>
        )}
      </div>
      
      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gray-100"
              style={{ color: '#666666' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Content */}
      <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
        {getFullContent()}
      </div>
    </div>
  );
};