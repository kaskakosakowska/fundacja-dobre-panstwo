import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, Tag } from "lucide-react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleFormData {
  title: string;
  section: "szkatulka" | "szczypta" | "glosy";
  excerpt: string;
  tags: string;
}

interface PreviewHeaderProps {
  data: ArticleFormData;
}

const sectionLabels = {
  szkatulka: "Szkatułka kosztowności",
  szczypta: "Szczypta Soli",
  glosy: "Głosy które słychać"
};

const sectionColors = {
  szkatulka: "bg-blue-100 text-blue-800",
  szczypta: "bg-green-100 text-green-800",
  glosy: "bg-purple-100 text-purple-800"
};

export const PreviewHeader = ({ data }: PreviewHeaderProps) => {
  const tagList = data.tags ? data.tags.split(',').map(tag => tag.trim()).filter(Boolean) : [];

  return (
    <>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          <CardTitle>Podgląd wpisu</CardTitle>
        </div>
        <CardDescription>
          Zobacz jak będzie wyglądać Twój wpis na stronie
        </CardDescription>
      </CardHeader>
      
      {/* Article Header */}
      <div className="px-6 space-y-4">
        <div className="flex items-center gap-3">
          <Badge className={sectionColors[data.section]}>
            {sectionLabels[data.section]}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {new Date().toLocaleDateString('pl-PL')}
          </div>
        </div>
        
        <h1 className="text-3xl font-bold">{data.title || "Tytuł wpisu"}</h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {data.excerpt || "Skrót wpisu zostanie tutaj wyświetlony..."}
        </p>

        {tagList.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {tagList.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </>
  );
};