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

  // Update states when post changes
  useEffect(() => {
    console.log('useImageSettings useEffect - post:', post);
    console.log('useImageSettings useEffect - post.image_position:', (post as any).image_position);
    console.log('useImageSettings useEffect - post.image_size:', (post as any).image_size);
    
    // Always update position and size from post data, with fallbacks
    const newPosition = (post as any).image_position || 'inline-left';
    const newSize = (post as any).image_size || 'medium';
    
    console.log('useImageSettings useEffect - setting position to:', newPosition);
    console.log('useImageSettings useEffect - setting size to:', newSize);
    
    setImagePosition(newPosition);
    setTempImagePosition(newPosition);
    setImageSize(newSize);
    setTempImageSize(newSize);
  }, [post]);

  const saveImageSettings = async (onSuccess: () => void) => {
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

      // Update local state
      setImagePosition(tempImagePosition);
      setImageSize(tempImageSize);
      onSuccess();
      
      toast({
        title: "Ustawienia zapisane",
        description: "Zmiany w układzie obrazka zostały zastosowane.",
      });
    } catch (error: any) {
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