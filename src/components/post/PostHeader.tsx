import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Post } from "@/hooks/usePostData";

interface PostHeaderProps {
  post: Post;
  getBackPath: () => string;
}

export const PostHeader = ({ post, getBackPath }: PostHeaderProps) => {
  return (
    <header className="py-8 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-6 mb-4">
          <Link to={getBackPath()} className="inline-flex items-center hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
            <span style={{ color: '#666666' }}>Powrót</span>
          </Link>
          <Link to="/" className="inline-flex items-center hover:opacity-70 transition-opacity">
            <Home className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
            <span style={{ color: '#666666' }}>Strona główna</span>
          </Link>
        </div>
        <h1 className="text-3xl font-light" style={{ color: '#333333' }}>
          {post.title}
        </h1>
      </div>
    </header>
  );
};