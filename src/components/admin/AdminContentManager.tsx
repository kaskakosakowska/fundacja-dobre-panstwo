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
  image_position?: string;
  image_size?: string;
}

interface UploadedFiles {
  pdf?: File;
  audio?: File;
  image?: File;
  image_position?: string;
  image_size?: string;
}

export const AdminContentManager = () => {
  const [currentStep, setCurrentStep] = useState("basics");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({});
  const [imageSettings, setImageSettings] = useState({ position: 'inline-left', size: 'medium' });
  const [mindMapData, setMindMapData] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [editingArticleData, setEditingArticleData] = useState<any>(null);
  const [userSession, setUserSession] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const { toast } = useToast();

  // Debug authentication on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        console.log('AdminContentManager: Auth session check:', { session, sessionError });
        setUserSession(session);
        
        if (session?.user?.id) {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', session.user.id)
            .single();
          
          console.log('AdminContentManager: User profile check:', { profile, profileError });
          setUserRole(profile?.role || null);
        } else {
          console.log('AdminContentManager: No authenticated user');
          setUserRole(null);
        }
      } catch (error) {
        console.error('AdminContentManager: Auth check failed:', error);
      }
    };
    
    checkAuth();
  }, []);
  
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
    
    // Synchronizuj pozycję i rozmiar obrazka z formularzem
    if (files.image_position) {
      form.setValue("image_position", files.image_position);
    }
    if (files.image_size) {
      form.setValue("image_size", files.image_size);
    }
  };

  const updateImageSettings = (position: string, size: string) => {
    console.log("updateImageSettings CALLED:", { position, size });
    setImageSettings({ position, size });
    form.setValue('image_position', position);
    form.setValue('image_size', size);
  };

  const handleMindMapSave = async (data: any, tags: string[]) => {
    console.log('AdminContentManager: handleMindMapSave called with data:', data, 'tags:', tags);
    setMindMapData(data);
    form.setValue("tags", tags.join(", "));
    
    // KRYTYCZNE: Zapisz natychmiast do bazy danych jeśli edytujemy istniejący artykuł
    if (editingArticleId && data) {
      try {
        console.log('Zapisuję Mind Map do bazy danych dla artykułu:', editingArticleId);
        const { error } = await supabase
          .from('articles')
          .update({
            mind_map_data: data,
            tags: tags,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingArticleId);

        if (error) {
          console.error('Błąd zapisywania Mind Map w CMS:', error);
          toast({
            title: "Błąd zapisywania",
            description: "Nie udało się zapisać Mind Mapy: " + error.message,
            variant: "destructive",
          });
        } else {
          console.log('Mind Map zapisana pomyślnie w CMS');
          toast({
            title: "Zapisano",
            description: "Mind Mapa została zapisana.",
          });
        }
      } catch (error: any) {
        console.error('Wyjątek podczas zapisywania Mind Map:', error);
        toast({
          title: "Błąd",
          description: "Wystąpił błąd podczas zapisywania.",
          variant: "destructive",
        });
      }
    }
  };

  const handleTagsChange = (tags: string[]) => {
    console.log('AdminContentManager: handleTagsChange called with tags:', tags);
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
          image_position: uploadedFiles.image_position || 'inline-left',
          image_size: uploadedFiles.image_size || 'medium',
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
    console.log("handleEditArticle called with articleId:", articleId);
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
      form.setValue('image_position', article.image_position || 'inline-left');
      form.setValue('image_size', article.image_size || 'medium');
      
      // Set uploaded files data to preserve image settings
      setUploadedFiles({
        image_position: article.image_position || 'inline-left',
        image_size: article.image_size || 'medium',
      });

      // Store article data for existing files
      setEditingArticleData(article);

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

    console.log("updateArticle: Starting update for article:", editingArticleId);
    console.log("updateArticle: Form data received:", data);
    
    setIsPublishing(true);
    
    try {
      // Only generate new slug if title changed
      const originalTitle = editingArticleData?.title || '';
      const slug = data.title !== originalTitle ? generateSlug(data.title) : editingArticleData?.slug;
      
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
        ...(data.title !== originalTitle && { slug }), // Only update slug if title changed
        section: data.section,
        content: data.content,
        excerpt: data.excerpt,
        summary: data.excerpt,
        tags: data.tags.split(",").map(tag => tag.trim()).filter(Boolean),
        mind_map_data: mindMapData || null,
        image_position: data.image_position || 'inline-left',
        image_size: data.image_size || 'medium',
        seo_title: data.seo_title || null,
        seo_description: data.seo_description || null,
        updated_at: new Date().toISOString(),
      };

      // Only update file URLs if new files were uploaded
      if (pdfUrl) updateData.pdf_url = pdfUrl;
      if (audioUrl) updateData.audio_url = audioUrl;
      if (imageUrl) updateData.featured_image_url = imageUrl;

      console.log("updateArticle: About to update database with:", updateData);
      console.log("updateArticle: User session:", userSession);
      console.log("updateArticle: User role:", userRole);

      const { error } = await supabase
        .from("articles")
        .update(updateData)
        .eq('id', editingArticleId);

      if (error) {
        console.error('updateArticle: Database error:', error);
        console.error('updateArticle: Error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        });
        throw error;
      }

      console.log("updateArticle: Database update successful!");
      
      toast({
        title: "Artykuł zaktualizowany!",
        description: "Artykuł został pomyślnie zaktualizowany.",
      });

      // Refresh the editing data with updated values
      setEditingArticleData(prev => ({
        ...prev,
        ...updateData,
        mind_map_data: mindMapData
      }));

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
    console.log("onSubmit called. editingArticleId:", editingArticleId);
    if (editingArticleId) {
      console.log("Calling updateArticle");
      updateArticle(data);
    } else {
      console.log("Calling publishArticle");
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
              <Tabs value={currentStep} onValueChange={(newStep) => {
                console.log("Tab changed to:", newStep, "editingArticleId:", editingArticleId);
                setCurrentStep(newStep);
              }}>
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
                  {(() => {
                    const currentTags = form.getValues("tags").split(",").map(t => t.trim()).filter(Boolean);
                    console.log('=== ADMIN DEBUG - Renderowanie MindMapEditor ===');
                    console.log('editingArticleId:', editingArticleId);
                    console.log('currentTags:', currentTags);
                    console.log('mindMapData:', mindMapData);
                    console.log('=== END ADMIN DEBUG ===');
                    
                    return (
                      <MindMapEditor
                        articleId={editingArticleId || undefined}
                        initialTags={currentTags}
                        initialMindMapData={mindMapData}
                        onSave={handleMindMapSave}
                        onTagsChange={handleTagsChange}
                      />
                    );
                  })()}
                  
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
                  <FileUpload 
                    onFilesUploaded={handleFileUpload}
                    onImageSettingsUpdate={updateImageSettings}
                    existingFiles={editingArticleData ? {
                      pdf_url: editingArticleData.pdf_url,
                      audio_url: editingArticleData.audio_url,
                      featured_image_url: editingArticleData.featured_image_url,
                      image_position: editingArticleData.image_position,
                      image_size: editingArticleData.image_size
                    } : undefined}
                  />
                  
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
                    data={{
                      ...form.getValues(),
                      image_position: imageSettings.position,
                      image_size: imageSettings.size
                    }}
                    files={uploadedFiles}
                    existingFiles={editingArticleData ? {
                      pdf_url: editingArticleData.pdf_url,
                      audio_url: editingArticleData.audio_url,
                      featured_image_url: editingArticleData.featured_image_url,
                      image_position: imageSettings.position,
                      image_size: imageSettings.size
                    } : undefined}
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