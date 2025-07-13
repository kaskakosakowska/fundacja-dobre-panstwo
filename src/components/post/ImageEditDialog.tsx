import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface ImageEditDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentImageUrl: string | null;
  postTitle: string;
  tempImagePosition: string;
  setTempImagePosition: (position: string) => void;
  tempImageSize: string;
  setTempImageSize: (size: string) => void;
  saveImageSettings: () => void;
  handleFileSelect: () => void;
  removeImage: () => void;
  isUploading: boolean;
}

export const ImageEditDialog = ({
  isOpen,
  onOpenChange,
  currentImageUrl,
  postTitle,
  tempImagePosition,
  setTempImagePosition,
  tempImageSize,
  setTempImageSize,
  saveImageSettings,
  handleFileSelect,
  removeImage,
  isUploading,
}: ImageEditDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edytuj obrazek główny</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {currentImageUrl && (
            <div className="text-center">
              <img 
                src={currentImageUrl} 
                alt={postTitle}
                className="w-full max-w-sm mx-auto rounded-lg shadow-sm mb-4"
              />
            </div>
          )}
          
          {/* Image Layout Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="position">Położenie obrazka</Label>
              <Select value={tempImagePosition} onValueChange={setTempImagePosition}>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz położenie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inline-left">W tekście po lewej</SelectItem>
                  <SelectItem value="inline-right">W tekście po prawej</SelectItem>
                  <SelectItem value="left">Po lewej</SelectItem>
                  <SelectItem value="center">Wyśrodkowany</SelectItem>
                  <SelectItem value="right">Po prawej</SelectItem>
                  <SelectItem value="full">Pełna szerokość</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="size">Wielkość obrazka</Label>
              <Select value={tempImageSize} onValueChange={setTempImageSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz wielkość" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Mały (200px)</SelectItem>
                  <SelectItem value="medium">Średni (400px)</SelectItem>
                  <SelectItem value="large">Duży (600px)</SelectItem>
                  <SelectItem value="xlarge">Bardzo duży (800px)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-2 mb-4">
            <Button 
              onClick={saveImageSettings}
              disabled={isUploading}
              className="flex-1"
              variant="default"
            >
              Zapisz zmiany
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleFileSelect}
              disabled={isUploading}
              className="flex-1"
              variant="outline"
            >
              <Upload className="h-4 w-4 mr-2" />
              {isUploading ? 'Ładowanie...' : 'Zmień obrazek'}
            </Button>
            <Button 
              variant="destructive"
              onClick={removeImage}
              disabled={isUploading}
            >
              <X className="h-4 w-4 mr-2" />
              Usuń
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};