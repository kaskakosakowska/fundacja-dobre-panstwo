import { Post } from "@/hooks/usePostData";

interface DefaultContentProps {
  post: Post;
}

export const DefaultContent = ({ post }: DefaultContentProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="mb-6 text-lg font-medium" style={{ color: '#666666' }}>
        {post.summary}
      </p>
      <p className="mb-4">
        {post.content}
      </p>
      <p className="mb-4">
        Ten artykuł stanowi część naszej analizy współczesnych wyzwań społecznych i politycznych. 
        Fundacja Dobre Państwo konsekwentnie bada i opisuje zjawiska wpływające na jakość demokracji 
        oraz funkcjonowanie instytucji publicznych w Polsce.
      </p>
    </div>
  );
};