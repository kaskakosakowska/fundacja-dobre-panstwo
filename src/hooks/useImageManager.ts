import { useState, useEffect } from "react";
import { Post } from "@/hooks/usePostData";
import { useImageUpload } from "./useImageUpload";
import { useImageSettings } from "./useImageSettings";
import { useImageStyles } from "./useImageStyles";

export const useImageManager = (post: Post) => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);

  // Use specialized hooks
  const imageUpload = useImageUpload(post);
  const imageSettings = useImageSettings(post);
  const imageStyles = useImageStyles();

  // Update currentImageUrl when post changes
  useEffect(() => {
    console.log('useImageManager useEffect - post.featured_image_url:', post.featured_image_url);
    setCurrentImageUrl(post.featured_image_url || null);
  }, [post.featured_image_url]);

  // Wrapper functions to maintain the same API
  const handleFileSelect = () => {
    imageUpload.handleFileSelect((url: string) => {
      setCurrentImageUrl(url);
      setIsEditingImage(false);
    });
  };

  const removeImage = async () => {
    await imageUpload.removeImage(() => {
      setCurrentImageUrl(null);
      setIsEditingImage(false);
    });
  };

  const saveImageSettings = async () => {
    await imageSettings.saveImageSettings(() => {
      setIsEditingImage(false);
    });
  };

  const openEditDialog = () => {
    imageSettings.openEditDialog(() => {
      setIsEditingImage(true);
    });
  };

  const getImageClasses = () => {
    return imageStyles.getImageClasses(imageSettings.imagePosition, imageSettings.imageSize);
  };

  return {
    isEditingImage,
    setIsEditingImage,
    isUploading: imageUpload.isUploading,
    currentImageUrl,
    imagePosition: imageSettings.imagePosition,
    imageSize: imageSettings.imageSize,
    tempImagePosition: imageSettings.tempImagePosition,
    setTempImagePosition: imageSettings.setTempImagePosition,
    tempImageSize: imageSettings.tempImageSize,
    setTempImageSize: imageSettings.setTempImageSize,
    handleFileSelect,
    removeImage,
    getImageClasses,
    saveImageSettings,
    openEditDialog,
  };
};