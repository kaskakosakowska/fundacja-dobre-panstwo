import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Music, Image, Eye, Calendar, Tag } from "lucide-react";

interface ArticleFormData {
  title: string;
  section: "szkatulka" | "szczypta" | "glosy";
  content: string;
  excerpt: string;
  tags: string;
  seo_title?: string;
  seo_description?: string;
  image_position?: string;
  image_size?: string;
}

interface UploadedFiles {
  pdf?: File;
  audio?: File;
  image?: File;
}

interface ArticlePreviewProps {
  data: ArticleFormData;
  files: UploadedFiles;
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

export const ArticlePreview = ({ data, files }: ArticlePreviewProps) => {
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

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const tagList = data.tags ? data.tags.split(',').map(tag => tag.trim()).filter(Boolean) : [];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            <CardTitle>Podgląd wpisu</CardTitle>
          </div>
          <CardDescription>
            Zobacz jak będzie wyglądać Twój wpis na stronie
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Header Section */}
          <div className="space-y-4">
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

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content with integrated image */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Treść główna</CardTitle>
                </CardHeader>
                <CardContent>
                  {data.content ? (
                    <div className="prose prose-sm max-w-none">
                      {/* Render content with integrated image */}
                      {files.image && data.image_position && (
                        <div className="relative overflow-hidden">
                          {/* Inline images that float with content */}
                          {(data.image_position === 'inline-left' || data.image_position === 'inline-right') && (
                            <img 
                              src={URL.createObjectURL(files.image)} 
                              alt="Preview"
                              className={`
                                rounded-lg shadow-sm
                                ${data.image_size === 'small' ? 'max-w-[200px]' : 
                                  data.image_size === 'medium' ? 'max-w-[400px]' : 
                                  data.image_size === 'large' ? 'max-w-[600px]' : 
                                  data.image_size === 'xlarge' ? 'max-w-[800px]' : 'max-w-[400px]'}
                                ${data.image_position === 'inline-left' ? 'float-left mr-4 mb-4' : 
                                  data.image_position === 'inline-right' ? 'float-right ml-4 mb-4' : ''}
                              `}
                            />
                          )}
                          
                          {/* Non-inline images (above content) */}
                          {!data.image_position.startsWith('inline') && (
                            <div className="mb-6">
                              <img 
                                src={URL.createObjectURL(files.image)} 
                                alt="Preview"
                                className={`
                                  rounded-lg shadow-sm
                                  ${data.image_size === 'small' ? 'max-w-[200px]' : 
                                    data.image_size === 'medium' ? 'max-w-[400px]' : 
                                    data.image_size === 'large' ? 'max-w-[600px]' : 
                                    data.image_size === 'xlarge' ? 'max-w-[800px]' : 'max-w-[400px]'}
                                  ${data.image_position === 'left' ? 'mr-auto block' : 
                                    data.image_position === 'right' ? 'ml-auto block' : 
                                    data.image_position === 'center' ? 'mx-auto block' : 
                                    data.image_position === 'full' ? 'w-full max-w-full block' : 'mx-auto block'}
                                `}
                              />
                            </div>
                          )}
                          
                          {/* Content flows around floated image */}
                          <div 
                            className="text-justify"
                            dangerouslySetInnerHTML={{ 
                              __html: data.content.substring(0, 500) + (data.content.length > 500 ? '...' : '')
                            }}
                          />
                          
                          {/* Clear floats after content */}
                          <div className="clear-both"></div>
                        </div>
                      )}
                      
                      {/* Content without image */}
                      {(!files.image || !data.image_position) && (
                        <div 
                          dangerouslySetInnerHTML={{ 
                            __html: data.content.substring(0, 500) + (data.content.length > 500 ? '...' : '')
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground italic">
                      Treść wpisu zostanie tutaj wyświetlona...
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Files */}
            <div className="space-y-4">
              {/* PDF Preview */}
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-4 w-4" />
                  <span className="font-medium text-sm">Plik PDF</span>
                </div>
                {files.pdf ? (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{files.pdf.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(files.pdf.size)}
                    </p>
                    <div className="h-32 bg-muted rounded border-2 border-dashed flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">PDF Embedder</span>
                    </div>
                  </div>
                ) : (
                  <div className="h-32 bg-muted/50 rounded border-2 border-dashed flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Brak pliku PDF</span>
                  </div>
                )}
              </Card>

              {/* Audio Preview */}
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="h-4 w-4" />
                  <span className="font-medium text-sm">Audio</span>
                </div>
                {files.audio ? (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{files.audio.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(files.audio.size)}
                    </p>
                    <div className="h-16 bg-muted rounded border-2 border-dashed flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Audio Player</span>
                    </div>
                  </div>
                ) : (
                  <div className="h-16 bg-muted/50 rounded border-2 border-dashed flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Brak pliku audio</span>
                  </div>
                )}
              </Card>

              {/* Image Preview - Shows position and size settings */}
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Image className="h-4 w-4" />
                  <span className="font-medium text-sm">Obrazek</span>
                </div>
                {files.image ? (
                  <div className="space-y-3">
                    <p className="text-sm font-medium">{files.image.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(files.image.size)}
                    </p>
                    
                    {/* Show image settings */}
                    <div className="space-y-2 p-3 bg-muted/50 rounded">
                      <div className="text-xs">
                        <span className="font-medium">Pozycja:</span> {
                          data.image_position === 'inline-left' ? 'W tekście po lewej' :
                          data.image_position === 'inline-right' ? 'W tekście po prawej' :
                          data.image_position === 'left' ? 'Po lewej' :
                          data.image_position === 'right' ? 'Po prawej' :
                          data.image_position === 'center' ? 'Na środku' :
                          data.image_position === 'full' ? 'Pełna szerokość' : 'Nie ustawiono'
                        }
                      </div>
                      <div className="text-xs">
                        <span className="font-medium">Wielkość:</span> {
                          data.image_size === 'small' ? 'Mała' :
                          data.image_size === 'medium' ? 'Średnia' :
                          data.image_size === 'large' ? 'Duża' :
                          data.image_size === 'xlarge' ? 'Bardzo duża' : 'Nie ustawiono'
                        }
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground italic">
                      Obrazek jest zintegrowany z treścią artykułu po lewej stronie
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-muted/50 rounded border-2 border-dashed flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Brak obrazka</span>
                  </div>
                )}
              </Card>
            </div>
          </div>

          {/* SEO Preview */}
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
        </CardContent>
      </Card>
    </div>
  );
};