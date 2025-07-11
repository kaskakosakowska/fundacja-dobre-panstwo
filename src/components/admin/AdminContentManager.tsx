import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FileUpload } from "./FileUpload";
import { ArticlePreview } from "./ArticlePreview";
import { ArticlesList } from "./ArticlesList";
import { MindMapEditor } from "./MindMapEditor";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, Eye, Send, List, Edit, Map } from "lucide-react";

interface ArticleFormData {
  title: string;
  section: "szkatulka" | "szczypta" | "glosy";
  content: string;
  excerpt: string;
  tags: string;
  seo_title?: string;
  seo_description?: string;
}

interface UploadedFiles {
  pdf?: File;
  audio?: File;
  image?: File;
}

export const AdminContentManager = () => {
  const [currentStep, setCurrentStep] = useState("basics");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({});
  const [mindMapData, setMindMapData] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const { toast } = useToast();
  
  const form = useForm<ArticleFormData>({
    defaultValues: {
      title: "",
      section: "szkatulka",
      content: "",
      excerpt: "",
      tags: "",
      seo_title: "",
      seo_description: "",
    },
  });

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

  const extractTags = (content: string) => {
    // Simple tag extraction - looking for common Polish political/economic terms
    const keywords = ["państwo", "polityka", "gospodarka", "demokracja", "reforma", "społeczeństwo"];
    const foundTags = keywords.filter(keyword => 
      content.toLowerCase().includes(keyword)
    );
    return foundTags.join(", ");
  };

  const generateMetaDescription = (content: string) => {
    const plainText = content.replace(/<[^>]+>/g, "");
    return plainText.substring(0, 157) + "...";
  };

  const uploadFile = async (file: File, bucket: string, path: string) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);
    
    if (error) throw error;
    
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);
    
    return publicUrl;
  };

  const handleFileUpload = (files: UploadedFiles) => {
    setUploadedFiles(files);
  };

  const handleMindMapSave = (data: any, tags: string[]) => {
    setMindMapData(data);
    form.setValue("tags", tags.join(", "));
  };

  const handleAutoGenerate = () => {
    const title = form.getValues("title");
    const content = form.getValues("content");
    
    if (title && !form.getValues("seo_title")) {
      form.setValue("seo_title", title);
    }
    
    if (content) {
      if (!form.getValues("seo_description")) {
        form.setValue("seo_description", generateMetaDescription(content));
      }
      
      if (!form.getValues("tags")) {
        form.setValue("tags", extractTags(content));
      }
      
      if (!form.getValues("excerpt")) {
        form.setValue("excerpt", generateMetaDescription(content));
      }
    }

    toast({
      title: "Automatyczne wypełnienie",
      description: "Pola zostały automatycznie wypełnione na podstawie treści.",
    });
  };

  const publishArticle = async (data: ArticleFormData) => {
    setIsPublishing(true);
    
    try {
      const slug = generateSlug(data.title);
      let pdfUrl = "";
      let audioUrl = "";
      let imageUrl = "";

      // Upload files if they exist
      if (uploadedFiles.pdf) {
        pdfUrl = await uploadFile(uploadedFiles.pdf, "articles-pdfs", `${slug}/${uploadedFiles.pdf.name}`);
      }
      
      if (uploadedFiles.audio) {
        audioUrl = await uploadFile(uploadedFiles.audio, "articles-audio", `${slug}/${uploadedFiles.audio.name}`);
      }
      
      if (uploadedFiles.image) {
        imageUrl = await uploadFile(uploadedFiles.image, "articles-images", `${slug}/${uploadedFiles.image.name}`);
      }

      // Create article
      const { data: result, error } = await supabase
        .from("articles")
        .insert({
          title: data.title,
          slug,
          section: data.section,
          content: data.content,
          excerpt: data.excerpt,
          summary: data.excerpt,
          tags: data.tags.split(",").map(tag => tag.trim()).filter(Boolean),
          pdf_url: pdfUrl || null,
          audio_url: audioUrl || null,
          featured_image_url: imageUrl || null,
          mind_map_data: mindMapData || null,
          seo_title: data.seo_title || null,
          seo_description: data.seo_description || null,
          published_date: new Date().toISOString().split('T')[0],
          is_published: true,
        })
        .select();

      if (error) {
        console.error('Publication error:', error);
        throw error;
      }

      console.log('Article published successfully:', result);

      toast({
        title: "Wpis opublikowany!",
        description: "Nowy wpis został pomyślnie dodany do strony.",
      });

      // Reset form
      form.reset();
      setUploadedFiles({});
      setMindMapData(null);
      setCurrentStep("basics");

    } catch (error: any) {
      toast({
        title: "Błąd publikacji",
        description: error.message || "Wystąpił błąd podczas publikowania wpisu.",
        variant: "destructive",
      });
    } finally {
      setIsPublishing(false);
    }
  };

  const handleEditArticle = async (articleId: string) => {
    try {
      const { data: article, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', articleId)
        .single();

      if (error) throw error;

      // Populate form with article data
      form.setValue('title', article.title);
      form.setValue('section', article.section as 'szkatulka' | 'szczypta' | 'glosy');
      form.setValue('content', article.content || '');
      form.setValue('excerpt', article.excerpt || '');
      form.setValue('tags', article.tags?.join(', ') || '');
      form.setValue('seo_title', article.seo_title || '');
      form.setValue('seo_description', article.seo_description || '');
      
      setMindMapData(article.mind_map_data);

      setEditingArticleId(articleId);
      setCurrentStep('basics');

      toast({
        title: "Artykuł załadowany",
        description: "Możesz teraz edytować artykuł.",
      });
    } catch (error: any) {
      toast({
        title: "Błąd",
        description: error.message || "Nie udało się załadować artykułu.",
        variant: "destructive",
      });
    }
  };

  const updateArticle = async (data: ArticleFormData) => {
    if (!editingArticleId) return;

    setIsPublishing(true);
    
    try {
      const slug = generateSlug(data.title);
      let pdfUrl = "";
      let audioUrl = "";
      let imageUrl = "";

      // Upload files if they exist
      if (uploadedFiles.pdf) {
        pdfUrl = await uploadFile(uploadedFiles.pdf, "articles-pdfs", `${slug}/${uploadedFiles.pdf.name}`);
      }
      
      if (uploadedFiles.audio) {
        audioUrl = await uploadFile(uploadedFiles.audio, "articles-audio", `${slug}/${uploadedFiles.audio.name}`);
      }
      
      if (uploadedFiles.image) {
        imageUrl = await uploadFile(uploadedFiles.image, "articles-images", `${slug}/${uploadedFiles.image.name}`);
      }

      // Update article
      const updateData: any = {
        title: data.title,
        slug,
        section: data.section,
        content: data.content,
        excerpt: data.excerpt,
        summary: data.excerpt,
        tags: data.tags.split(",").map(tag => tag.trim()).filter(Boolean),
        mind_map_data: mindMapData || null,
        seo_title: data.seo_title || null,
        seo_description: data.seo_description || null,
        updated_at: new Date().toISOString(),
      };

      // Only update file URLs if new files were uploaded
      if (pdfUrl) updateData.pdf_url = pdfUrl;
      if (audioUrl) updateData.audio_url = audioUrl;
      if (imageUrl) updateData.featured_image_url = imageUrl;

      const { error } = await supabase
        .from("articles")
        .update(updateData)
        .eq('id', editingArticleId);

      if (error) {
        console.error('Update error:', error);
        throw error;
      }

      toast({
        title: "Artykuł zaktualizowany!",
        description: "Artykuł został pomyślnie zaktualizowany.",
      });

      // Reset form
      form.reset();
      setUploadedFiles({});
      setMindMapData(null);
      setEditingArticleId(null);
      setCurrentStep("basics");

    } catch (error: any) {
      toast({
        title: "Błąd aktualizacji",
        description: error.message || "Wystąpił błąd podczas aktualizowania artykułu.",
        variant: "destructive",
      });
    } finally {
      setIsPublishing(false);
    }
  };

  const onSubmit = (data: ArticleFormData) => {
    if (editingArticleId) {
      updateArticle(data);
    } else {
      publishArticle(data);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {editingArticleId ? <Edit className="h-6 w-6" /> : <Upload className="h-6 w-6" />}
            {editingArticleId ? 'Edycja artykułu' : 'System Zarządzania Treścią'}
          </CardTitle>
          <CardDescription>
            {editingArticleId ? 'Edytuj istniejący artykuł' : 'Prosty formularz do dodawania nowych wpisów - "na przycisk"'}
          </CardDescription>
          {editingArticleId && (
            <Button 
              variant="outline" 
              onClick={() => {
                setEditingArticleId(null);
                form.reset();
                setUploadedFiles({});
                setMindMapData(null);
                setCurrentStep("basics");
              }}
            >
              Anuluj edycję
            </Button>
          )}
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Tabs value={currentStep} onValueChange={setCurrentStep}>
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="list">Lista</TabsTrigger>
                  <TabsTrigger value="basics">Podstawy</TabsTrigger>
                  <TabsTrigger value="content">Treść</TabsTrigger>
                  <TabsTrigger value="mindmap">Mapa myśli</TabsTrigger>
                  <TabsTrigger value="files">Pliki</TabsTrigger>
                  <TabsTrigger value="preview">Podgląd</TabsTrigger>
                </TabsList>

                <TabsContent value="list" className="space-y-4">
                  <ArticlesList onEditArticle={handleEditArticle} />
                  
                  <div className="flex justify-end">
                    <Button type="button" onClick={() => setCurrentStep("basics")}>
                      Dodaj nowy artykuł →
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="basics" className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tytuł wpisu</FormLabel>
                        <FormControl>
                          <Input placeholder="Wprowadź tytuł wpisu..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="section"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sekcja</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Wybierz sekcję" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="szkatulka">Szkatułka kosztowności</SelectItem>
                            <SelectItem value="szczypta">Szczypta Soli</SelectItem>
                            <SelectItem value="glosy">Głosy które słychać</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep("list")}>
                      ← Lista
                    </Button>
                    <Button 
                      type="button" 
                      onClick={() => setCurrentStep("content")}
                      disabled={!form.getValues("title")}
                    >
                      Dalej →
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="content" className="space-y-4">
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Treść wpisu (HTML/Markdown)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Wklej zoptymalizowaną treść wpisu..."
                            rows={15}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Skrót wpisu</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Krótki opis wpisu..." rows={3} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tags"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tagi (oddzielone przecinkami)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="polityka, gospodarka, demokracja..." rows={3} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handleAutoGenerate}>
                      🤖 Auto-uzupełnij
                    </Button>
                    <div className="space-x-2">
                      <Button type="button" variant="outline" onClick={() => setCurrentStep("basics")}>
                        ← Wstecz
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setCurrentStep("mindmap")}
                        disabled={!form.getValues("content")}
                      >
                        Dalej →
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="mindmap" className="space-y-4">
                  <MindMapEditor
                    articleId={editingArticleId || undefined}
                    initialTags={form.getValues("tags").split(",").map(t => t.trim()).filter(Boolean)}
                    initialMindMapData={mindMapData}
                    onSave={handleMindMapSave}
                  />
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep("content")}>
                      ← Wstecz
                    </Button>
                    <Button type="button" onClick={() => setCurrentStep("files")}>
                      Dalej →
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="files" className="space-y-4">
                  <FileUpload onFilesUploaded={handleFileUpload} />
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep("mindmap")}>
                      ← Wstecz
                    </Button>
                    <Button type="button" onClick={() => setCurrentStep("preview")}>
                      Podgląd →
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="preview" className="space-y-4">
                  <ArticlePreview 
                    data={form.getValues()} 
                    files={uploadedFiles}
                  />
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep("files")}>
                      ← Wstecz
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isPublishing}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isPublishing ? (
                        "Publikowanie..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {editingArticleId ? 'Zaktualizuj artykuł' : 'Publikuj wpis'}
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};