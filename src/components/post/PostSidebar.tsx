import { SidebarCard } from "./SidebarCard";

export const PostSidebar = () => {
  return (
    <div className="space-y-6">
      {/* PDF Embedder Container */}
      <SidebarCard title="Pełna treść PDF">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
          <p className="text-sm">PDF Embedder</p>
          <p className="text-xs mt-2">Tutaj zostanie umieszczony embedder PDF-a z pełną treścią wpisu</p>
        </div>
      </SidebarCard>

      {/* Audio Version Container */}
      <SidebarCard title="Wersja audio">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center" style={{ color: '#666666' }}>
          <p className="text-sm">Audio Player</p>
          <p className="text-xs mt-2">Wersja audio PDF-a</p>
        </div>
      </SidebarCard>

      {/* Mind Map Container */}
      <SidebarCard title="Mapa pojęć">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
          <p className="text-sm">Mind Map</p>
          <p className="text-xs mt-2">Interaktywna mapa pojęć związanych z wpisem</p>
        </div>
      </SidebarCard>
    </div>
  );
};