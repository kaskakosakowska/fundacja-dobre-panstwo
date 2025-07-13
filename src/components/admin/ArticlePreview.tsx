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

interface ArticlePreviewProps {
  data: ArticleFormData;
  files: UploadedFiles;
}

export const ArticlePreview = ({ data, files }: ArticlePreviewProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <PreviewHeader data={data} />
        
        <CardContent className="space-y-6">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content with integrated image */}
            <div className="lg:col-span-2">
              <ContentPreview data={data} files={files} />
            </div>

            {/* Right Column - Files */}
            <div className="space-y-4">
              <FilePreviewCard 
                type="pdf" 
                file={files.pdf} 
              />
              
              <FilePreviewCard 
                type="audio" 
                file={files.audio} 
              />
              
              <FilePreviewCard 
                type="image" 
                file={files.image}
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