
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Trash2, RotateCw, Move } from "lucide-react";

interface EditableImage {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

interface EditableImageContainerProps {
  initialImages: EditableImage[];
}

const EditableImageContainer: React.FC<EditableImageContainerProps> = ({ initialImages }) => {
  const [images, setImages] = useState<EditableImage[]>(initialImages);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const duplicateImage = (imageId: string) => {
    const imageToDuplicate = images.find(img => img.id === imageId);
    if (imageToDuplicate) {
      const newImage: EditableImage = {
        ...imageToDuplicate,
        id: `${imageId}-copy-${Date.now()}`,
        x: imageToDuplicate.x + 20,
        y: imageToDuplicate.y + 20,
      };
      setImages([...images, newImage]);
    }
  };

  const deleteImage = (imageId: string) => {
    setImages(images.filter(img => img.id !== imageId));
    if (selectedImageId === imageId) {
      setSelectedImageId(null);
    }
  };

  const rotateImage = (imageId: string) => {
    setImages(images.map(img => 
      img.id === imageId 
        ? { ...img, rotation: (img.rotation + 45) % 360 }
        : img
    ));
  };

  const handleMouseDown = (e: React.MouseEvent, imageId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setSelectedImageId(imageId);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && selectedImageId) {
      const containerRect = e.currentTarget.getBoundingClientRect();
      const newX = e.clientX - containerRect.left - dragOffset.x;
      const newY = e.clientY - containerRect.top - dragOffset.y;
      
      setImages(images.map(img => 
        img.id === selectedImageId 
          ? { ...img, x: newX, y: newY }
          : img
      ));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="relative w-full h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`absolute cursor-move ${selectedImageId === image.id ? 'ring-2 ring-blue-500' : ''}`}
          style={{
            left: `${image.x}px`,
            top: `${image.y}px`,
            transform: `rotate(${image.rotation}deg) scale(${image.scale})`,
          }}
          onMouseDown={(e) => handleMouseDown(e, image.id)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-16 h-16 object-contain pointer-events-none"
            draggable={false}
          />
          
          {selectedImageId === image.id && (
            <div className="absolute -top-8 -left-2 flex gap-1 bg-white rounded shadow-lg p-1">
              <Button
                size="sm"
                variant="outline"
                className="h-6 w-6 p-0"
                onClick={() => duplicateImage(image.id)}
              >
                <Copy className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-6 w-6 p-0"
                onClick={() => rotateImage(image.id)}
              >
                <RotateCw className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-6 w-6 p-0"
                onClick={() => deleteImage(image.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      ))}
      
      {images.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <Move className="h-8 w-8 mx-auto mb-2" />
            <p>Kliknij na obrazek, aby go zaznaczyć i edytować</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableImageContainer;
