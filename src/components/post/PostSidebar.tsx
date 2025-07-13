import { SidebarCard } from "./SidebarCard";
import { Post } from "@/hooks/usePostData";
import { FileText, Music, Map } from "lucide-react";
import { MindMap } from "@/components/mindmap/MindMap";
import pdfThumbnail from "@/assets/images/pdf-thumbnail.png";

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
              <span className="text-sm font-medium" style={{ color: '#333333' }}>Kliknij aby otworzyć PDF</span>
            </div>
            <div 
              className="relative w-full h-32 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-gray-50 overflow-hidden group"
              onClick={() => window.open(post.pdf_url, '_blank', 'noopener,noreferrer')}
            >
              <img 
                src={pdfThumbnail} 
                alt="PDF Preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  PDF
                </div>
              </div>
            </div>
            <p className="text-xs text-center" style={{ color: '#666666' }}>
              {post.pdf_url.split('/').pop()?.split('%20').join(' ')}
            </p>
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
        {post.tags && post.tags.length > 0 ? (
          <div className="space-y-4">
            {/* Tags Display */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Map className="h-4 w-4" style={{ color: '#666666' }} />
                <span className="text-sm font-medium" style={{ color: '#333333' }}>Tagi</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100"
                    style={{ color: '#666666' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Mind Map */}
            <div className="space-y-2">
              <span className="text-sm font-medium" style={{ color: '#333333' }}>Mapa myśli</span>
              <MindMap
                data={post.mind_map_data}
                tags={post.tags}
                readOnly={true}
              />
            </div>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Map className="h-4 w-4" />
              <span className="text-sm">Mapa pojęć</span>
            </div>
            <p className="text-xs mt-2">Brak tagów dla tego wpisu</p>
          </div>
        )}
      </SidebarCard>
    </div>
  );
};