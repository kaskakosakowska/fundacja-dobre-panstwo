
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const SzczyptaSoli = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      id: "1",
      title: "Weryfikacja danych o nowych inwestycjach",
      summary: "Sprawdziliśmy doniesienia medialne o planowanych inwestycjach infrastrukturalnych w regionie...",
      content: "Szczegółowa analiza wszystkich dostępnych dokumentów i oświadczeń dotyczących nowych inwestycji. Weryfikacja faktów, porównanie z oficjalnymi dokumentami planistycznymi oraz ocena realności przedstawionych planów."
    },
    {
      id: "2", 
      title: "Fact-check: statystyki bezrobocia",
      summary: "Analiza najnowszych danych o poziomie bezrobocia przedstawionych przez lokalne władze...",
      content: "Dogłębna weryfikacja oficjalnych statystyk bezrobocia z uwzględnieniem metodologii liczenia, porównań z danymi GUS oraz analizy trendów w perspektywie długoterminowej."
    },
    {
      id: "3",
      title: "Sprawdzamy: koszty organizacji wydarzeń miejskich",
      summary: "Weryfikacja informacji o wydatkach na organizację festiwali i imprez kulturalnych...",
      content: "Kompleksowa analiza kosztów organizacji wydarzeń miejskich, porównanie z cenami rynkowymi usług eventowych oraz ocena efektywności wykorzystania środków publicznych."
    },
    {
      id: "4",
      title: "Mit czy prawda: efektywność programów społecznych",
      summary: "Analiza skuteczności miejskich programów pomocowych i ich wpływu na lokalną społeczność...",
      content: "Szczegółowe badanie efektywności programów społecznych z wykorzystaniem dostępnych danych statystycznych, wywiadów z beneficjentami oraz analizy porównawczej z innymi miastami."
    },
    {
      id: "5",
      title: "Weryfikacja planów komunikacyjnych",
      summary: "Sprawdzenie faktów dotyczących nowych tras autobusowych i zmian w komunikacji publicznej...",
      content: "Analiza planów rozwoju komunikacji publicznej, weryfikacja deklarowanych terminów realizacji oraz ocena realności przedstawionych rozwiązań transportowych."
    },
    {
      id: "6",
      title: "Fact-check: dane o jakości powietrza",
      summary: "Weryfikacja informacji o poziomie zanieczyszczeń i działaniach proekologicznych miasta...",
      content: "Szczegółowa analiza danych o jakości powietrza z różnych źródeł, weryfikacja skuteczności działań antysmogowych oraz porównanie z normami krajowymi i europejskimi."
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
            Szczypta Soli
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#333333' }}>
                Najnowsze weryfikacje
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
                      <Link to={`/szczypta-soli/${post.id}`}>
                        <h3 
                          className="text-xl font-medium mb-3 cursor-pointer hover:opacity-70 transition-opacity"
                          style={{ color: '#333333' }}
                        >
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-base mb-3 leading-relaxed" style={{ color: '#666666' }}>
                        {post.summary}
                      </p>
                      <div className="flex gap-4 items-center">
                        <Link 
                          to={`/szczypta-soli/${post.id}`}
                          className="text-sm hover:opacity-70 transition-opacity"
                          style={{ color: '#666666' }}
                        >
                          Czytaj więcej →
                        </Link>
                        <button
                          className="text-sm hover:opacity-70 transition-opacity"
                          style={{ color: '#666666' }}
                          onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                        >
                          {selectedPost === post.id ? 'Zwiń podgląd' : 'Podgląd'}
                        </button>
                      </div>
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

export default SzczyptaSoli;
