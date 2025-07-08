import { SidebarCard } from "./SidebarCard";
import { Post } from "@/hooks/usePostData";
import { FileText, Music, Map } from "lucide-react";

interface PostSidebarProps {
  post: Post;
}

export const PostSidebar = ({ post }: PostSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* PDF Embedder Container */}
      <SidebarCard title="Pełna treść PDF">
        {post.pdf_url ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4" style={{ color: '#666666' }} />
              <span className="text-sm font-medium" style={{ color: '#333333' }}>Pobierz PDF</span>
            </div>
            <iframe
              src={post.pdf_url}
              className="w-full h-48 border rounded-lg"
              title="PDF Preview"
            />
            <a
              href={post.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
              style={{ color: '#333333' }}
            >
              Otwórz w nowej karcie
            </a>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
            <p className="text-sm">PDF Embedder</p>
            <p className="text-xs mt-2">Brak pliku PDF dla tego wpisu</p>
          </div>
        )}
      </SidebarCard>

      {/* Audio Version Container */}
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

      {/* Mind Map Container */}
      <SidebarCard title="Mapa pojęć">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Map className="h-4 w-4" />
            <span className="text-sm">Mind Map</span>
          </div>
          <p className="text-xs mt-2">Interaktywna mapa pojęć związanych z wpisem</p>
        </div>
      </SidebarCard>
    </div>
  );
};