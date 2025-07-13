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
      const postPosition = (post as any).image_position || 'inline-left';
      const postSize = (post as any).image_size || 'medium';
      
      console.log('useImageSettings: Updating from post data', {
        postId: post.id,
        postPosition,
        postSize,
        currentPosition: imagePosition
      });
      
      setImagePosition(postPosition);
      setTempImagePosition(postPosition);
      setImageSize(postSize);
      setTempImageSize(postSize);
    }
  }, [post.id, (post as any).image_position, (post as any).image_size]);

  const saveImageSettings = async (onSuccess: () => void, refreshPost?: () => Promise<void>) => {
    if (!post.id) return;
    
    try {
      console.log('Saving image settings:', { 
        position: tempImagePosition, 
        size: tempImageSize,
        postId: post.id 
      });
      
      // Save to database
      const { error } = await supabase
        .from('articles')
        .update({ 
          image_position: tempImagePosition,
          image_size: tempImageSize
        })
        .eq('id', post.id);

      if (error) throw error;

      console.log('Image settings saved successfully');
      
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