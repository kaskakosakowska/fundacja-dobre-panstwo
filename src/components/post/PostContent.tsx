import { Post } from "@/hooks/usePostData";
import { SzkatulaContent } from "./content/SzkatulaContent";
import { GlosyContent } from "./content/GlosyContent";
import { DefaultContent } from "./content/DefaultContent";
import { useImageStyles } from "@/hooks/useImageStyles";
import { FeaturedImage } from "./FeaturedImage";


interface PostContentProps {
  post: Post;
  section: string;
  postId: string | undefined;
}

export const PostContent = ({ post, section, postId }: PostContentProps) => {
  const imagePosition = post.image_position || 'inline-left';
  const imageSize = post.image_size || 'medium';
  const isInline = imagePosition.startsWith('inline');
  
  const getImageClasses = () => {
    const sizeClass = imageSize === 'small' ? 'w-48' : imageSize === 'large' ? 'w-96' : 'w-64';
    
    if (imagePosition === 'inline-left') {
      return `${sizeClass} float-left mr-4 mb-4 rounded-lg shadow-sm`;
    }
    
    if (imagePosition === 'inline-right') {
      return `${sizeClass} float-right ml-4 mb-4 rounded-lg shadow-sm`;
    }
    
    return `w-full max-w-2xl mx-auto rounded-lg shadow-sm`;
  };

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
        {/* Non-inline images (above content) */}
        {post.featured_image_url && !isInline && (
          <FeaturedImage
            currentImageUrl={post.featured_image_url}
            postTitle={post.title}
            imagePosition={post.image_position || 'inline-left'}
            getImageClasses={getImageClasses}
            handleFileSelect={() => {}}
            isUploading={false}
          />
        )}

        {/* Content with inline image flow */}
        <div className="relative overflow-hidden">
          {/* Inline image that floats with content */}
          {post.featured_image_url && isInline && (
            <FeaturedImage
              currentImageUrl={post.featured_image_url}
              postTitle={post.title}
              imagePosition={post.image_position || 'inline-left'}
              getImageClasses={getImageClasses}
              handleFileSelect={() => {}}
              isUploading={false}
              isInline={true}
            />
          )}
          
          {/* Content flows around floated image */}
          <div className="text-justify">
            {getFullContent()}
          </div>
          
          {/* Clear floats after content */}
          <div className="clear-both"></div>
        </div>
      </div>
    </div>
  );
};