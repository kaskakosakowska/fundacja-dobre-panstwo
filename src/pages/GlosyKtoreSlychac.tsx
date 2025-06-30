
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const GlosyKtoreSlychac = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      id: "1",
      title: "Mieszkańcy o nowym parku miejskim",
      summary: "Zbieramy opinie mieszkańców na temat nowo otwartego parku w centrum miasta...",
      content: "Kompleksowy przegląd opinii mieszkańców na temat nowego parku miejskiego. Ankiety, wywiady i obserwacje dotyczące funkcjonalności, estetyki i wpływu na jakość życia w dzielnicy."
    },
    {
      id: "2", 
      title: "Głosy przedsiębiorców o nowych regulacjach",
      summary: "Lokalni przedsiębiorcy dzielą się swoimi doświadczeniami z nowymi przepisami...",
      content: "Szczegółowe relacje przedsiębiorców o wpływie nowych regulacji na prowadzenie działalności gospodarczej, wyzwaniach związanych z ich wdrożeniem oraz propozycjach ulepszeń."
    },
    {
      id: "3",
      title: "Rodzice o zmianach w szkołach",
      summary: "Opinie rodziców na temat wprowadzonych reform edukacyjnych i ich wpływu na dzieci...",
      content: "Szeroki przegląd opinii rodziców dotyczących zmian w systemie edukacji, ich wpływu na codzienne funkcjonowanie szkół oraz skutków dla rozwoju dzieci."
    },
    {
      id: "4",
      title: "Seniorzy o dostępności usług publicznych",
      summary: "Starsi mieszkańcy dzielą się swoimi doświadczeniami z korzystania z urzędów i instytucji...",
      content: "Dogłębna analiza doświadczeń seniorów w kontakcie z administracją publiczną, identyfikacja barier oraz propozycje rozwiązań poprawiających dostępność usług."
    },
    {
      id: "5",
      title: "Młodzież o przestrzeni publicznej",
      summary: "Nastolatkowie i młodzi dorośli opowiadają o swoich potrzebach w przestrzeni miejskiej...",
      content: "Kompleksowy przegląd potrzeb młodzieży dotyczących zagospodarowania przestrzeni publicznej, propozycje nowych rozwiązań oraz ocena istniejącej infrastruktury rekreacyjnej."
    },
    {
      id: "6",
      title: "Mieszkańcy o komunikacji publicznej",
      summary: "Codzienni użytkownicy transportu publicznego dzielą się swoimi obserwacjami...",
      content: "Szczegółowe relacje pasażerów komunikacji publicznej dotyczące jakości usług, punktualności, czystości oraz propozycji usprawnień w organizacji transportu miejskiego."
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
            Głosy, które słychać
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#333333' }}>
                Najnowsze relacje
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <img 
                      src="/lovable-uploads/a247c62f-0c85-460a-8ed0-b9c0be25623f.png" 
                      alt="Logo" 
                      className="w-5 h-5 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-medium mb-3 cursor-pointer hover:opacity-70 transition-opacity"
                        style={{ color: '#333333' }}
                        onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                      >
                        {post.title}
                      </h3>
                      <p className="text-base mb-3 leading-relaxed" style={{ color: '#666666' }}>
                        {post.summary}
                      </p>
                      {selectedPost === post.id && (
                        <div className="mt-4 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                          <p className="text-base leading-relaxed" style={{ color: '#333333' }}>
                            {post.content}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
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

export default GlosyKtoreSlychac;
