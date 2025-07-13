export const useImageStyles = () => {
  const getImageClasses = (imagePosition: string, imageSize: string) => {
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

  return {
    getImageClasses,
  };
};