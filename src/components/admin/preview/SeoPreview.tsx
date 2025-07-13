import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleFormData {
  title: string;
  section: "szkatulka" | "szczypta" | "glosy";
  excerpt: string;
  seo_title?: string;
  seo_description?: string;
}

interface SeoPreviewProps {
  data: ArticleFormData;
}

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (match) => {
      const map: { [key: string]: string } = {
        ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z"
      };
      return map[match] || match;
    })
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

export const SeoPreview = ({ data }: SeoPreviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Podgląd SEO</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-blue-600">
              {data.seo_title || data.title || "Tytuł SEO"}
            </p>
            <p className="text-sm text-green-600">
              dobrepanstwo.org/{data.section}/{generateSlug(data.title || "tytul-wpisu")}
            </p>
            <p className="text-sm text-muted-foreground">
              {data.seo_description || data.excerpt || "Meta opis zostanie automatycznie wygenerowany..."}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};