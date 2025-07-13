import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleFormData {
  content: string;
  image_position?: string;
  image_size?: string;
}

interface UploadedFiles {
  image?: File;
}

interface ExistingFiles {
  featured_image_url?: string;
  image_position?: string;
  image_size?: string;
}

interface ContentPreviewProps {
  data: ArticleFormData;
  files: UploadedFiles;
  existingFiles?: ExistingFiles;
}

export const ContentPreview = ({ data, files, existingFiles }: ContentPreviewProps) => {
  // DEBUG: Log values to see what's being passed
  console.log("ContentPreview DEBUG:", {
    "data.image_position": data.image_position,
    "data.image_size": data.image_size,
    "files.image": !!files.image,
    "existingFiles?.featured_image_url": existingFiles?.featured_image_url
  });
  
  console.log("ContentPreview FINAL VALUES:", {
    "imagePosition": data.image_position || 'inline-left',
    "imageSize": data.image_size || 'medium',
    "hasImage": !!(files.image || existingFiles?.featured_image_url)
  });

  // Get image source - either new file or existing URL
  const getImageSrc = () => {
    if (files.image) return URL.createObjectURL(files.image);
    if (existingFiles?.featured_image_url) return existingFiles.featured_image_url;
    return null;
  };

  // UŻYWAJ data.image_position i data.image_size ZAWSZE - bez względu na to czy to nowy czy istniejący plik
  const hasImage = files.image || existingFiles?.featured_image_url;
  const imageSrc = getImageSrc();
  const imagePosition = data.image_position || 'inline-left';
  const imageSize = data.image_size || 'medium';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Treść główna</CardTitle>
      </CardHeader>
      <CardContent>
        {data.content ? (
          <div className="prose prose-sm max-w-none">
            {/* Render content with integrated image */}
            {hasImage && imageSrc && imagePosition ? (
              <div className="relative overflow-hidden">
                {/* Inline images that float with content */}
                 {(imagePosition === 'inline-left' || imagePosition === 'inline-right') && (
                   <>
                     <img 
                       src={imageSrc} 
                       alt="Preview"
                       className={`
                         rounded-lg shadow-sm border-4 border-red-500 bg-yellow-300
                         ${imageSize === 'small' ? 'max-w-[200px] border-blue-500' : 
                           imageSize === 'medium' ? 'max-w-[400px] border-green-500' : 
                           imageSize === 'large' ? 'max-w-[600px] border-purple-500' : 
                           imageSize === 'xlarge' ? 'max-w-[800px] border-orange-500' : 'max-w-[400px] border-gray-500'}
                         ${imagePosition === 'inline-left' ? 'float-left mr-4 mb-4 bg-pink-300' : 
                           imagePosition === 'inline-right' ? 'float-right ml-4 mb-4 bg-cyan-300' : 'bg-lime-300'}
                       `}
                       style={{
                         width: imageSize === 'small' ? '200px' : imageSize === 'medium' ? '400px' : '600px',
                         float: imagePosition === 'inline-right' ? 'right' : imagePosition === 'inline-left' ? 'left' : 'none'
                       }}
                     />
                     <div className="text-red-600 font-bold mb-4 clear-both">
                       DEBUG: Position={imagePosition}, Size={imageSize}
                     </div>
                   </>
                 )}
                 
                 {/* Non-inline images (above content) */}
                 {imagePosition && !imagePosition.startsWith('inline') && (
                   <div className="mb-6">
                     <img 
                       src={imageSrc}
                       alt="Preview"
                       className={`
                         rounded-lg shadow-sm
                         ${imageSize === 'small' ? 'max-w-[200px]' : 
                           imageSize === 'medium' ? 'max-w-[400px]' : 
                           imageSize === 'large' ? 'max-w-[600px]' : 
                           imageSize === 'xlarge' ? 'max-w-[800px]' : 'max-w-[400px]'}
                         ${imagePosition === 'left' ? 'mr-auto block' : 
                           imagePosition === 'right' ? 'ml-auto block' : 
                           imagePosition === 'center' ? 'mx-auto block' : 
                           imagePosition === 'full' ? 'w-full max-w-full block' : 'mx-auto block'}
                       `}
                     />
                   </div>
                 )}
                 
                 {/* Content flows around floated image */}
                 <div 
                   className="text-justify"
                   dangerouslySetInnerHTML={{ 
                     __html: data.content.substring(0, 500) + (data.content.length > 500 ? '...' : '')
                   }}
                 />
                 
                 {/* Clear floats after content */}
                 <div className="clear-both"></div>
               </div>
             ) : (
               /* Content without image */
               <div 
                 dangerouslySetInnerHTML={{ 
                   __html: data.content ? data.content.substring(0, 500) + (data.content.length > 500 ? '...' : '') : ''
                 }}
               />
             )}
           </div>
         ) : (
           <p className="text-muted-foreground italic">
             Treść wpisu zostanie tutaj wyświetlona...
           </p>
         )}
       </CardContent>
    </Card>
  );
};