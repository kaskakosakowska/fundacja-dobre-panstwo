
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    },
    {
      id: "4",
      title: "Koszty utrzymania przestrzeni publicznych",
      summary: "Analiza wydatków na utrzymanie parków, placów i innych przestrzeni miejskich...",
      content: "Szczegółowe zestawienie kosztów związanych z utrzymaniem terenów zielonych, konserwacją infrastruktury oraz planami modernizacji."
    },
    {
      id: "5",
      title: "Inwestycje w infrastrukturę cyfrową",
      summary: "Przegląd wydatków na digitalizację miasta i rozwój e-usług dla mieszkańców...",
      content: "Kompleksowa analiza inwestycji w technologie cyfrowe, systemy informatyczne oraz rozwój platform elektronicznych dla mieszkańców."
    },
    {
      id: "6",
      title: "Wydatki na ochronę środowiska",
      summary: "Zestawienie środków przeznaczonych na działania proekologiczne i ochronę klimatu...",
      content: "Szczegółowa analiza wydatków na projekty ekologiczne, odnawialne źródła energii oraz inicjatywy związane z ochroną środowiska naturalnego."
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

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#333333' }}>
                Najnowsze wpisy
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

export default SzkatulaKosztownosci;
