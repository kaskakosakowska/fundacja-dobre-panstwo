import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleFormData {
  content: string;
  image_position?: string;
  image_size?: string;
}

interface UploadedFiles {
  image?: File;
}

interface ContentPreviewProps {
  data: ArticleFormData;
  files: UploadedFiles;
}

export const ContentPreview = ({ data, files }: ContentPreviewProps) => {
  // Debug logs
  console.log('ContentPreview - data:', data);
  console.log('ContentPreview - files:', files);
  console.log('ContentPreview - image_position:', data.image_position);
  console.log('ContentPreview - image_size:', data.image_size);
  console.log('ContentPreview - has image file:', !!files.image);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Treść główna</CardTitle>
      </CardHeader>
      <CardContent>
        {data.content ? (
          <div className="prose prose-sm max-w-none">
            {/* Render content with integrated image */}
            {files.image && data.image_position ? (
              <div className="relative overflow-hidden">
                {/* Inline images that float with content */}
                {(data.image_position === 'inline-left' || data.image_position === 'inline-right') && (
                  <img 
                    src={URL.createObjectURL(files.image)} 
                    alt="Preview"
                    className={`
                      rounded-lg shadow-sm
                      ${data.image_size === 'small' ? 'max-w-[200px]' : 
                        data.image_size === 'medium' ? 'max-w-[400px]' : 
                        data.image_size === 'large' ? 'max-w-[600px]' : 
                        data.image_size === 'xlarge' ? 'max-w-[800px]' : 'max-w-[400px]'}
                      ${data.image_position === 'inline-left' ? 'float-left mr-4 mb-4' : 
                        data.image_position === 'inline-right' ? 'float-right ml-4 mb-4' : ''}
                    `}
                  />
                )}
                
                {/* Non-inline images (above content) */}
                {data.image_position && !data.image_position.startsWith('inline') && (
                  <div className="mb-6">
                    <img 
                      src={URL.createObjectURL(files.image)} 
                      alt="Preview"
                      className={`
                        rounded-lg shadow-sm
                        ${data.image_size === 'small' ? 'max-w-[200px]' : 
                          data.image_size === 'medium' ? 'max-w-[400px]' : 
                          data.image_size === 'large' ? 'max-w-[600px]' : 
                          data.image_size === 'xlarge' ? 'max-w-[800px]' : 'max-w-[400px]'}
                        ${data.image_position === 'left' ? 'mr-auto block' : 
                          data.image_position === 'right' ? 'ml-auto block' : 
                          data.image_position === 'center' ? 'mx-auto block' : 
                          data.image_position === 'full' ? 'w-full max-w-full block' : 'mx-auto block'}
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