import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Post } from "@/hooks/usePostData";

export const useImageManager = (post: Post) => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(post.featured_image_url);
  const [imagePosition, setImagePosition] = useState('center');
  const [imageSize, setImageSize] = useState('medium');
  const [tempImagePosition, setTempImagePosition] = useState('center');
  const [tempImageSize, setTempImageSize] = useState('medium');
  const { toast } = useToast();

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

  const getImageClasses = () => {
    let classes = "rounded-lg shadow-sm ";
    
    // Size classes
    switch (imageSize) {
      case 'small':
        classes += "max-w-[200px] ";
        break;
      case 'medium':
        classes += "max-w-[400px] ";
        break;
      case 'large':
        classes += "max-w-[600px] ";
        break;
      case 'xlarge':
        classes += "max-w-[800px] ";
        break;
      default:
        classes += "max-w-[400px] ";
    }
    
    // Position classes
    console.log('Image position:', imagePosition, 'Image size:', imageSize);
    switch (imagePosition) {
      case 'inline-left':
        classes += "float-left mr-4 mb-4";
        break;
      case 'inline-right':
        classes += "float-right ml-4 mb-4";
        break;
      case 'left':
        classes += "mr-auto block";
        break;
      case 'right':
        classes += "ml-auto block";
        break;
      case 'center':
        classes += "mx-auto block";
        break;
      case 'full':
        classes += "w-full max-w-full block";
        break;
      default:
        classes += "mx-auto block";
    }
    
    console.log('Generated image classes:', classes);
    return classes;
  };

  const saveImageSettings = () => {
    setImagePosition(tempImagePosition);
    setImageSize(tempImageSize);
    setIsEditingImage(false);
    
    toast({
      title: "Ustawienia zapisane",
      description: "Zmiany w układzie obrazka zostały zastosowane.",
    });
  };

  const openEditDialog = () => {
    setTempImagePosition(imagePosition);
    setTempImageSize(imageSize);
    setIsEditingImage(true);
  };

  return {
    isEditingImage,
    setIsEditingImage,
    isUploading,
    currentImageUrl,
    imagePosition,
    imageSize,
    tempImagePosition,
    setTempImagePosition,
    tempImageSize,
    setTempImageSize,
    handleFileSelect,
    removeImage,
    getImageClasses,
    saveImageSettings,
    openEditDialog,
  };
};