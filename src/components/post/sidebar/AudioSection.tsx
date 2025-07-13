import { SidebarCard } from "../SidebarCard";
import { Post } from "@/hooks/usePostData";
import { Music } from "lucide-react";

interface AudioSectionProps {
  post: Post;
}

export const AudioSection = ({ post }: AudioSectionProps) => {
  return (
    <SidebarCard title="Wersja audio">
      {post.audio_url ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Music className="h-4 w-4" style={{ color: '#666666' }} />
            <span className="text-sm font-medium" style={{ color: '#333333' }}>Odtwórz audio</span>
          </div>
          <audio
            controls
            className="w-full"
            preload="metadata"
          >
            <source src={post.audio_url} type="audio/mpeg" />
            <source src={post.audio_url} type="audio/wav" />
            <source src={post.audio_url} type="audio/ogg" />
            Twoja przeglądarka nie obsługuje odtwarzacza audio.
          </audio>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center" style={{ color: '#666666' }}>
          <p className="text-sm">Audio Player</p>
          <p className="text-xs mt-2">Brak pliku audio dla tego wpisu</p>
        </div>
      )}
    </SidebarCard>
  );
};