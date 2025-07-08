import { Post } from "@/hooks/usePostData";
import { SzkatulaContent } from "./content/SzkatulaContent";
import { GlosyContent } from "./content/GlosyContent";
import { DefaultContent } from "./content/DefaultContent";

interface PostContentProps {
  post: Post;
  section: string;
  postId: string | undefined;
}

export const PostContent = ({ post, section, postId }: PostContentProps) => {
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
      {/* Featured Image */}
      {post.featured_image_url && (
        <div className="mb-6">
          <img 
            src={post.featured_image_url} 
            alt={post.title}
            className="w-full max-w-md mx-auto rounded-lg shadow-sm"
          />
        </div>
      )}
      
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
      
      {/* Content */}
      <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
        {getFullContent()}
      </div>
    </div>
  );
};