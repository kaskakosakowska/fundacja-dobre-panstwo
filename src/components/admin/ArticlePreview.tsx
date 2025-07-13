import { Card, CardContent } from "@/components/ui/card";
import { PreviewHeader } from "./preview/PreviewHeader";
import { ContentPreview } from "./preview/ContentPreview";
import { FilePreviewCard } from "./preview/FilePreviewCard";
import { SeoPreview } from "./preview/SeoPreview";

interface ArticleFormData {
  title: string;
  section: "szkatulka" | "szczypta" | "glosy";
  content: string;
  excerpt: string;
  tags: string;
  seo_title?: string;
  seo_description?: string;
  image_position?: string;
  image_size?: string;
}

interface UploadedFiles {
  pdf?: File;
  audio?: File;
  image?: File;
}

interface ExistingFiles {
  pdf_url?: string;
  audio_url?: string;
  featured_image_url?: string;
  image_position?: string;
  image_size?: string;
}

interface ArticlePreviewProps {
  data: ArticleFormData;
  files: UploadedFiles;
  existingFiles?: ExistingFiles;
}

export const ArticlePreview = ({ data, files, existingFiles }: ArticlePreviewProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <PreviewHeader data={data} />
        
        <CardContent className="space-y-6">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content with integrated image */}
            <div className="lg:col-span-2">
              <ContentPreview 
                data={data} 
                files={files} 
                existingFiles={existingFiles}
              />
            </div>

            {/* Right Column - Files */}
            <div className="space-y-4">
              <FilePreviewCard 
                type="pdf" 
                file={files.pdf}
                existingUrl={existingFiles?.pdf_url}
              />
              
              <FilePreviewCard 
                type="audio" 
                file={files.audio}
                existingUrl={existingFiles?.audio_url}
              />
              
              <FilePreviewCard 
                type="image" 
                file={files.image}
                existingUrl={existingFiles?.featured_image_url}
                imagePosition={data.image_position}
                imageSize={data.image_size}
              />
            </div>
          </div>

          {/* SEO Preview */}
          <SeoPreview data={data} />
        </CardContent>
      </Card>
    </div>
  );
};