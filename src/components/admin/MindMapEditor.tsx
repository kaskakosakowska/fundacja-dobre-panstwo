import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MindMap, MindMapData } from "@/components/mindmap";
import { createTagNodes } from "@/components/mindmap/node-factory";
import { createTagEdges } from "@/components/mindmap/edge-factory";
import { Plus, Trash2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


interface MindMapEditorProps {
  articleId?: string;
  initialTags?: string[];
  initialMindMapData?: MindMapData;
  onSave?: (mindMapData: MindMapData, tags: string[]) => void;
  onTagsChange?: (tags: string[]) => void;
}

export const MindMapEditor = ({ 
  articleId, 
  initialTags = [], 
  initialMindMapData,
  onSave,
  onTagsChange 
}: MindMapEditorProps) => {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [newTag, setNewTag] = useState('');
  const [mindMapData, setMindMapData] = useState<MindMapData | undefined>(initialMindMapData);
  const { toast } = useToast();

  useEffect(() => {
    console.log('MindMapEditor: Updating with initialTags:', initialTags, 'initialMindMapData:', initialMindMapData);
    setTags(initialTags || []);
    setMindMapData(initialMindMapData);
  }, [initialTags, initialMindMapData]);

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()];
      console.log('MindMapEditor: Adding tag, new tags:', updatedTags);
      setTags(updatedTags);
      setNewTag('');
      
      // Create new mind map data immediately instead of resetting
      const newMindMapData = { 
        nodes: createTagNodes(updatedTags), 
        edges: createTagEdges(updatedTags) 
      };
      setMindMapData(newMindMapData);
      
      // Notify parent about tag changes
      if (onTagsChange) {
        onTagsChange(updatedTags);
      }
      
      toast({
        title: "Tag dodany",
        description: `Dodano tag: ${newTag.trim()}`,
      });
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    console.log('MindMapEditor: Removing tag, new tags:', updatedTags);
    setTags(updatedTags);
    
    // Create new mind map data immediately instead of resetting
    const newMindMapData = updatedTags.length > 0 ? { 
      nodes: createTagNodes(updatedTags), 
      edges: createTagEdges(updatedTags) 
    } : undefined;
    setMindMapData(newMindMapData);
    
    // Notify parent about tag changes
    if (onTagsChange) {
      onTagsChange(updatedTags);
    }
    
    toast({
      title: "Tag usunięty",
      description: `Usunięto tag: ${tagToRemove}`,
    });
  };

  const handleMindMapChange = (data: MindMapData) => {
    console.log('=== MindMapEditor: handleMindMapChange CALLED ===');
    console.log('New data:', data);
    console.log('Current mindMapData:', mindMapData);
    setMindMapData(data);
    console.log('=== MindMapEditor: handleMindMapChange COMPLETE ===');
  };

  const handleSave = () => {
    if (onSave) {
      console.log('MindMapEditor: Saving with mindMapData:', mindMapData, 'tags:', tags);
      // If no mind map data, create basic structure from tags
      const dataToSave = mindMapData || { 
        nodes: createTagNodes(tags), 
        edges: createTagEdges(tags) 
      };
      onSave(dataToSave, tags);
      toast({
        title: "Zapisano",
        description: "Mapa myśli i tagi zostały zapisane.",
      });
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTag();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Edytor mapy myśli</span>
          {articleId && <span className="text-sm text-muted-foreground">({articleId})</span>}
        </CardTitle>
        <CardDescription>
          Dodaj tagi i edytuj mapę myśli dla tego artykułu
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Tag Management */}
        <div className="space-y-4">
          <Label className="text-base font-medium">Tagi/Kategorie</Label>
          
          {/* Add New Tag */}
          <div className="flex gap-2">
            <Input
              placeholder="Dodaj nowy tag..."
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={addTag} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Existing Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  <span>{tag}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTag(tag)}
                    className="h-auto p-0 hover:bg-transparent"
                  >
                    <Trash2 className="h-3 w-3 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mind Map */}
        <div className="space-y-4">
          <Label className="text-base font-medium">Mapa myśli</Label>
          <div className="border rounded-lg bg-white" style={{ height: "400px", position: "relative" }}>
            {tags.length > 0 ? (
              <div className="w-full h-full" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
                <MindMap
                  key={`mindmap-${tags.join('-')}-${mindMapData ? 'data' : 'notags'}`}
                  data={mindMapData}
                  tags={tags}
                  readOnly={false}
                  onDataChange={handleMindMapChange}
                />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <p>Dodaj tagi, aby zobaczyć mapę myśli</p>
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Zapisz mapę myśli
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
