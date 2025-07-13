import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Post } from "@/hooks/usePostData";

export const useImageUpload = (post: Post) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = async (file: File, onSuccess: (url: string) => void) => {
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

      onSuccess(publicUrl);
      
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

  const handleFileSelect = (onSuccess: (url: string) => void) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        handleImageUpload(file, onSuccess);
      }
    };
    input.click();
  };

  const removeImage = async (onSuccess: () => void) => {
    if (!post.id) return;
    
    setIsUploading(true);
    try {
      const { error } = await supabase
        .from('articles')
        .update({ featured_image_url: null })
        .eq('id', post.id);

      if (error) throw error;

      onSuccess();
      
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

  return {
    isUploading,
    handleFileSelect,
    removeImage,
  };
};