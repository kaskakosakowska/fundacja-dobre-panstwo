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

  // Update states when post changes - watch specific properties
  useEffect(() => {
    const postImagePosition = (post as any).image_position;
    const postImageSize = (post as any).image_size;
    
    console.log('useImageSettings useEffect triggered');
    console.log('Current post:', post);
    console.log('Post image_position:', postImagePosition);
    console.log('Post image_size:', postImageSize);
    console.log('Current imagePosition state:', imagePosition);
    
    // Always update position and size from post data, with fallbacks
    const newPosition = postImagePosition || 'inline-left';
    const newSize = postImageSize || 'medium';
    
    console.log('Setting new position:', newPosition);
    console.log('Setting new size:', newSize);
    
    setImagePosition(newPosition);
    setTempImagePosition(newPosition);
    setImageSize(newSize);
    setTempImageSize(newSize);
  }, [post.id, (post as any).image_position, (post as any).image_size]); // Watch specific properties

  const saveImageSettings = async (onSuccess: () => void) => {
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
      
      // Force refresh by updating the post data in the parent component
      window.location.reload(); // Temporary solution to force refresh
      
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