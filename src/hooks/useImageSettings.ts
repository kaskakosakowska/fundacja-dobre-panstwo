import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Post } from "@/hooks/usePostData";

export const useImageSettings = (post: Post) => {
  const [imagePosition, setImagePosition] = useState('inline-left');
  const [imageSize, setImageSize] = useState('medium');
  const [tempImagePosition, setTempImagePosition] = useState('inline-left');
  const [tempImageSize, setTempImageSize] = useState('medium');
  const { toast } = useToast();

  // Initialize and update from post data
  useEffect(() => {
    if (post && post.id) {
      const postPosition = post.image_position || 'inline-left';
      const postSize = post.image_size || 'medium';
      
      setImagePosition(postPosition);
      setTempImagePosition(postPosition);
      setImageSize(postSize);
      setTempImageSize(postSize);
    }
  }, [post.id, post.image_position, post.image_size]);

  const saveImageSettings = async (onSuccess: () => void, refreshPost?: () => Promise<void>) => {
    if (!post.id) return;
    
    try {
      // Save to database
      const { error } = await supabase
        .from('articles')
        .update({ 
          image_position: tempImagePosition,
          image_size: tempImageSize
        })
        .eq('id', post.id);

      if (error) throw error;
      
      // Update local state immediately
      setImagePosition(tempImagePosition);
      setImageSize(tempImageSize);
      
      // Refresh post data if function provided
      if (refreshPost) {
        await refreshPost();
      }
      
      onSuccess();
      
      toast({
        title: "Ustawienia zapisane",
        description: "Zmiany w układzie obrazka zostały zastosowane.",
      });
    } catch (error: any) {
      console.error('Error saving image settings:', error);
      toast({
        title: "Błąd zapisu",
        description: error.message || "Nie udało się zapisać ustawień obrazka.",
        variant: "destructive",
      });
    }
  };

  const openEditDialog = (onOpen: () => void) => {
    setTempImagePosition(imagePosition);
    setTempImageSize(imageSize);
    onOpen();
  };

  return {
    imagePosition,
    imageSize,
    tempImagePosition,
    setTempImagePosition,
    tempImageSize,
    setTempImageSize,
    saveImageSettings,
    openEditDialog,
  };
};