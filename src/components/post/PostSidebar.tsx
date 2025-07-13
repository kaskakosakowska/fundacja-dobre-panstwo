import { Post } from "@/hooks/usePostData";
import { PdfSection } from "./sidebar/PdfSection";
import { AudioSection } from "./sidebar/AudioSection";
import { MindMapSection } from "./sidebar/MindMapSection";

interface PostSidebarProps {
  post: Post;
  onRefreshPost?: () => void;
}

export const PostSidebar = ({ post, onRefreshPost }: PostSidebarProps) => {
  return (
    <div className="space-y-6">
      <PdfSection post={post} />
      <AudioSection post={post} />
      <MindMapSection post={post} onRefreshPost={onRefreshPost} />
    </div>
  );
};