import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MindMap } from "@/components/mindmap/MindMap";
import { Plus, Trash2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MindMapData {
  nodes: any[];
  edges: any[];
}

interface MindMapEditorProps {
  articleId?: string;
  initialTags?: string[];
  initialMindMapData?: MindMapData;
  onSave?: (mindMapData: MindMapData, tags: string[]) => void;
}

export const MindMapEditor = ({ 
  articleId, 
  initialTags = [], 
  initialMindMapData,
  onSave 
}: MindMapEditorProps) => {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [newTag, setNewTag] = useState('');
  const [mindMapData, setMindMapData] = useState<MindMapData | undefined>(initialMindMapData);
  const { toast } = useToast();

  useEffect(() => {
    setTags(initialTags);
    setMindMapData(initialMindMapData);
  }, [initialTags, initialMindMapData]);

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()];
      setTags(updatedTags);
      setNewTag('');
      toast({
        title: "Tag dodany",
        description: `Dodano tag: ${newTag.trim()}`,
      });
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
    toast({
      title: "Tag usunięty",
      description: `Usunięto tag: ${tagToRemove}`,
    });
  };

  const handleMindMapChange = (data: MindMapData) => {
    setMindMapData(data);
  };

  const handleSave = () => {
    if (onSave && mindMapData) {
      onSave(mindMapData, tags);
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
          <div className="border rounded-lg p-4 bg-gray-50">
            {tags.length > 0 ? (
              <MindMap
                data={mindMapData}
                tags={tags}
                readOnly={false}
                onDataChange={handleMindMapChange}
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-muted-foreground">
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
