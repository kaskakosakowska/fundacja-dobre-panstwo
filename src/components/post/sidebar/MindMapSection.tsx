import { SidebarCard } from "../SidebarCard";
import { Post } from "@/hooks/usePostData";
import { Map, Edit } from "lucide-react";
import { MindMap } from "@/components/mindmap";
import { MindMapEditor } from "@/components/admin/MindMapEditor";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MindMapSectionProps {
  post: Post;
  onRefreshPost?: () => void;
}

export const MindMapSection = ({ post, onRefreshPost }: MindMapSectionProps) => {
  const [isMindMapOpen, setIsMindMapOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [currentMindMapData, setCurrentMindMapData] = useState(post.mind_map_data);
  const [currentTags, setCurrentTags] = useState(post.tags || []);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkPermissions = async () => {
      // TYMCZASOWO: pozwolić wszystkim na edycję Mind Map
      setCanEdit(true);
      
      /* ORYGINALNY KOD - wymaga uwierzytelnienia:
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', session.user.id)
          .single();
        
        setCanEdit(profile?.role === 'super_admin' || profile?.role === 'editor');
      }
      */
    };
    
    checkPermissions();
  }, []);

  // Update local state when post changes
  useEffect(() => {
    setCurrentMindMapData(post.mind_map_data);
    setCurrentTags(post.tags || []);
  }, [post.mind_map_data, post.tags]);

  const handleMindMapSave = async (mindMapData: any, tags: string[]) => {
    setIsLoading(true);
    try {
      console.log('Zapisuję Mind Map dla artykułu:', post.id, 'dane:', mindMapData, 'tagi:', tags);
      
      const { data, error } = await supabase
        .from('articles')
        .update({
          mind_map_data: mindMapData,
          tags: tags,
          updated_at: new Date().toISOString()
        })
        .eq('id', post.id)
        .select();

      if (error) {
        console.error('Błąd zapisywania Mind Map:', error);
        throw error;
      }
      
      console.log('Mind Map zapisana pomyślnie:', data);

      // Update local state immediately
      setCurrentMindMapData(mindMapData);
      setCurrentTags(tags);
      setIsEditing(false);

      toast({
        title: "Mapa myśli zaktualizowana",
        description: "Zmiany zostały pomyślnie zapisane.",
      });

      // Force refresh of post data
      if (onRefreshPost) {
        setTimeout(() => {
          onRefreshPost();
        }, 100); // Small delay to ensure database update is complete
      }

    } catch (error: any) {
      toast({
        title: "Błąd zapisywania",
        description: error.message || "Nie udało się zapisać zmian.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SidebarCard title="Mapa pojęć">
      {currentTags && currentTags.length > 0 ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Map className="h-4 w-4" style={{ color: '#666666' }} />
            <span className="text-sm font-medium" style={{ color: '#333333' }}>Kliknij aby otworzyć mapę</span>
          </div>
          <div 
            className="relative w-full h-12 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-gray-50 overflow-hidden group"
            onClick={() => setIsMindMapOpen(true)}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
              <div className="text-center">
                <Map className="h-6 w-6 mx-auto mb-1 text-blue-500" />
                <div className="text-xs text-gray-600">Mind Map</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
          </div>
          
          <Dialog open={isMindMapOpen} onOpenChange={setIsMindMapOpen}>
            <DialogContent className="max-w-6xl max-h-[90vh]">
              <DialogHeader>
                <DialogTitle>
                  <span>Mapa pojęć</span>
                </DialogTitle>
              </DialogHeader>
              <div className="h-[400px] w-full">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="animate-spin h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600">Zapisywanie...</p>
                    </div>
                  </div>
                ) : isEditing ? (
                  <MindMapEditor
                    articleId={post.id}
                    initialTags={currentTags}
                    initialMindMapData={currentMindMapData}
                    onSave={handleMindMapSave}
                  />
                ) : (
                  <MindMap
                    data={currentMindMapData}
                    tags={currentTags}
                    readOnly={true}
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
          <p className="text-xs text-center truncate px-2" style={{ color: '#666666' }}>
            Mapa pojęć artykułu
          </p>
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
  );
};