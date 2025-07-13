import { Post } from "@/hooks/usePostData";
import { SzkatulaContent } from "./content/SzkatulaContent";
import { GlosyContent } from "./content/GlosyContent";
import { DefaultContent } from "./content/DefaultContent";
import { Dialog } from "@/components/ui/dialog";
import { useImageManager } from "@/hooks/useImageManager";
import { ImageEditDialog } from "./ImageEditDialog";
import { FeaturedImage } from "./FeaturedImage";

interface PostContentProps {
  post: Post;
  section: string;
  postId: string | undefined;
}

export const PostContent = ({ post, section, postId }: PostContentProps) => {
  const imageManager = useImageManager(post);

  const getFullContent = () => {
    if (section === 'szkatulka') {
      return <SzkatulaContent post={post} postId={postId} />;
    }
    
    if (section === 'glosy') {
      return <GlosyContent post={post} postId={postId} />;
    }

    return <DefaultContent post={post} />;
  };

  return (
    <div className="space-y-6">
      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gray-100"
              style={{ color: '#666666' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Content with potential inline image */}
      <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
        <Dialog open={imageManager.isEditingImage} onOpenChange={imageManager.setIsEditingImage}>
          {/* Featured Image for non-inline positions or placeholder */}
          {!imageManager.currentImageUrl || !imageManager.imagePosition.startsWith('inline') ? (
            <FeaturedImage
              currentImageUrl={imageManager.currentImageUrl}
              postTitle={post.title}
              imagePosition={imageManager.imagePosition}
              getImageClasses={imageManager.getImageClasses}
              openEditDialog={imageManager.openEditDialog}
              handleFileSelect={imageManager.handleFileSelect}
              isUploading={imageManager.isUploading}
            />
          ) : null}

          {/* Content with inline image */}
          <div className="relative">
            {/* Inline image */}
            {imageManager.currentImageUrl && imageManager.imagePosition.startsWith('inline') && (
              <FeaturedImage
                currentImageUrl={imageManager.currentImageUrl}
                postTitle={post.title}
                imagePosition={imageManager.imagePosition}
                getImageClasses={imageManager.getImageClasses}
                openEditDialog={imageManager.openEditDialog}
                handleFileSelect={imageManager.handleFileSelect}
                isUploading={imageManager.isUploading}
                isInline={true}
              />
            )}
            
            {/* Content with clearfix for floated images */}
            <div className="overflow-hidden">
              {getFullContent()}
            </div>
          </div>

          <ImageEditDialog
            isOpen={imageManager.isEditingImage}
            onOpenChange={imageManager.setIsEditingImage}
            currentImageUrl={imageManager.currentImageUrl}
            postTitle={post.title}
            tempImagePosition={imageManager.tempImagePosition}
            setTempImagePosition={imageManager.setTempImagePosition}
            tempImageSize={imageManager.tempImageSize}
            setTempImageSize={imageManager.setTempImageSize}
            saveImageSettings={imageManager.saveImageSettings}
            handleFileSelect={imageManager.handleFileSelect}
            removeImage={imageManager.removeImage}
            isUploading={imageManager.isUploading}
          />
        </Dialog>
      </div>
    </div>
  );
};