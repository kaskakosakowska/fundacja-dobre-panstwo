
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Volume2, Map } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SzkatulaKosztownosci = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      id: "1",
      title: "Analiza budżetu miasta na 2024",
      summary: "Szczegółowa analiza wydatków budżetowych miasta na rok 2024, ze szczególnym uwzględnieniem inwestycji infrastrukturalnych...",
      content: "Pełna treść analizy budżetu miasta na 2024 rok. Tutaj znajdzie się rozszerzona analiza wszystkich pozycji budżetowych, z uwzględnieniem porównań z poprzednimi latami oraz rekomendacji na przyszłość."
    },
    {
      id: "2", 
      title: "Wydatki na transport publiczny",
      summary: "Przegląd kosztów związanych z funkcjonowaniem komunikacji publicznej w naszym mieście...",
      content: "Szczegółowa analiza wydatków na transport publiczny, obejmująca koszty operacyjne, inwestycje w nowy tabor oraz plany rozwoju sieci komunikacyjnej."
    },
    {
      id: "3",
      title: "Dotacje dla organizacji pozarządowych",
      summary: "Zestawienie dotacji przyznanych organizacjom non-profit w ostatnim kwartale...",
      content: "Kompletne zestawienie wszystkich dotacji przyznanych organizacjom pozarządowym, z podziałem na kategorie działalności i analizą efektywności wykorzystania środków."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
            <span style={{ color: '#666666' }}>Powrót</span>
          </Link>
          <h1 className="text-3xl font-light" style={{ color: '#333333' }}>
            Szkatułka Kosztowności
          </h1>
        </div>
      </header>

      {/* Main Content with Resizable Layout */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <ResizablePanelGroup direction="horizontal" className="min-h-[600px] rounded-lg border">
            
            {/* Main Content Panel - Posts */}
            <ResizablePanel defaultSize={60} minSize={40}>
              <Card className="h-full border-0 shadow-none" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <CardHeader>
                  <CardTitle className="text-xl" style={{ color: '#333333' }}>
                    Najnowsze wpisy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="border-b pb-4 last:border-b-0">
                      <h3 
                        className="text-lg font-medium mb-2 cursor-pointer hover:opacity-70 transition-opacity"
                        style={{ color: '#333333' }}
                        onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm mb-2" style={{ color: '#666666' }}>
                        {post.summary}
                      </p>
                      {selectedPost === post.id && (
                        <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                          <p className="text-sm leading-relaxed" style={{ color: '#333333' }}>
                            {post.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Right Side Panel Group */}
            <ResizablePanel defaultSize={40} minSize={30}>
              <ResizablePanelGroup direction="vertical">
                
                {/* PDF Embedder Panel */}
                <ResizablePanel defaultSize={33} minSize={20}>
                  <Card className="h-full border-0 shadow-none m-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center" style={{ color: '#333333' }}>
                        <FileText className="h-4 w-4 mr-2" />
                        Dokumenty PDF
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" style={{ color: '#666666' }} />
                        <p className="text-sm" style={{ color: '#666666' }}>
                          Tutaj będzie embedder PDF
                        </p>
                        <Button variant="outline" className="mt-2" size="sm">
                          Wybierz dokument
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ResizablePanel>

                <ResizableHandle withHandle />

                {/* Text-to-Speech Panel */}
                <ResizablePanel defaultSize={33} minSize={20}>
                  <Card className="h-full border-0 shadow-none m-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center" style={{ color: '#333333' }}>
                        <Volume2 className="h-4 w-4 mr-2" />
                        Narracja (TTS)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-4">
                        <Volume2 className="h-8 w-8 mx-auto mb-3 opacity-50" style={{ color: '#666666' }} />
                        <p className="text-xs mb-3" style={{ color: '#666666' }}>
                          Odsłuchaj wybrany wpis
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          Odtwórz narrację
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ResizablePanel>

                <ResizableHandle withHandle />

                {/* Concept Map Panel */}
                <ResizablePanel defaultSize={34} minSize={20}>
                  <Card className="h-full border-0 shadow-none m-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center" style={{ color: '#333333' }}>
                        <Map className="h-4 w-4 mr-2" />
                        Mapa pojęć
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-4">
                        <Map className="h-8 w-8 mx-auto mb-3 opacity-50" style={{ color: '#666666' }} />
                        <p className="text-xs mb-3" style={{ color: '#666666' }}>
                          Wizualizacja powiązań
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          Pokaż mapę
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ResizablePanel>

              </ResizablePanelGroup>
            </ResizablePanel>

          </ResizablePanelGroup>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full h-px mb-6" style={{ backgroundColor: '#E5E5E5' }}></div>
          <p className="text-center text-sm font-light" style={{ color: '#666666' }}>
            © 2024 Portfolio. Stworzone z myślą o prostocie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SzkatulaKosztownosci;
