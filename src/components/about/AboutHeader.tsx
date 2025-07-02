import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutHeader = () => {
  return (
    <header className="py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <Link to="/" className="mr-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2 hover:bg-white/50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex justify-center flex-1">
            <img 
              src="/lovable-uploads/009a872d-aa2c-4401-bef2-f1cf0207ea3e.png" 
              alt="Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl font-serif font-medium text-center mb-4" style={{ color: '#333333' }}>
          O Fundacji Dobre Państwo
        </h1>
        <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#E5E5E5' }}></div>
      </div>
    </header>
  );
};