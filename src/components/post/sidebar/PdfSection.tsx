import { SidebarCard } from "../SidebarCard";
import { Post } from "@/hooks/usePostData";
import { FileText } from "lucide-react";
import pdfThumbnail from "@/assets/images/pdf-thumbnail.png";

interface PdfSectionProps {
  post: Post;
}

export const PdfSection = ({ post }: PdfSectionProps) => {
  return (
    <SidebarCard title="Pełna treść PDF">
      {post.pdf_url ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-4 w-4" style={{ color: '#666666' }} />
            <span className="text-sm font-medium" style={{ color: '#333333' }}>Kliknij aby otworzyć PDF</span>
          </div>
          <div 
            className="relative w-full h-12 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-gray-50 overflow-hidden group"
            onClick={() => window.open(post.pdf_url, '_blank', 'noopener,noreferrer')}
          >
            <img 
              src={pdfThumbnail} 
              alt="PDF Preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
              <div className="bg-red-600 text-white px-1.5 py-0.5 rounded text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                PDF
              </div>
            </div>
          </div>
          <p className="text-xs text-center truncate px-2" style={{ color: '#666666' }}>
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
  );
};