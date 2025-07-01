import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const SzczyptaSoli = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      id: "wzmacnianie-csr-biznesu",
      title: "Wzmacnianie Społecznej Odpowiedzialności Biznesu",
      date: "30 września 2024",
      summary: "Strategiczne partnerstwa z interesariuszami - nowy projekt OZZS WBREW w zakresie ESG i społecznej odpowiedzialności.",
      content: "Kompleksowa analiza znaczenia ESG w nowoczesnym biznesie. Projekt OZZS WBREW skupia się na budowaniu strategicznych partnerstw między pracodawcami a interesariuszami w celu wzmocnienia społecznej odpowiedzialności biznesu.",
      link: "https://dobrepanstwo.org/wzmacnianie-spolecznej-odpowiedzialnosci-biznesu/"
    },
    {
      id: "poprawa-wskaznikow-esg",
      title: "Poprawa wskaźników ESG w przestrzeni SOCIAL jest najtańsza!",
      date: "29 września 2024",
      summary: "Analiza OZZS WBREW dotycząca najbardziej efektywnych kosztowo sposobów poprawy wskaźników ESG w wymiarze społecznym.",
      content: "Szczegółowe badanie pokazujące, że inwestycje w obszar społeczny ESG przynoszą najlepszy stosunek korzyści do kosztów. Analiza konkretnych działań i ich wpływu na ocenę ESG organizacji.",
      link: "https://wbrew.org/poprawa-wskaznikow-esg-w-przestrzeni-social-jest-najtansza/"
    },
    {
      id: "zawod-ksiadz-praca-czy-fikcja",
      title: "Zawód Ksiądz – Niebiańska Praca czy Państwowa Fikcja?",
      date: "27 września 2024",
      summary: "Fact-check statusu prawnego duchownych w systemie państwowym. Analiza przywileji podatkowych i społecznych księży.",
      content: "Dogłębna weryfikacja statusu prawnego księży w polskim systemie prawnym. Analiza przywilejów podatkowych, ubezpieczeniowych i innych form wsparcia państwowego dla duchowieństwa katolickiego.",
      link: "https://dobrepanstwo.org/zawod-ksiadz-niebianska-praca-czy-panstwowa-fikcja/"
    },
    {
      id: "ludzi-to-obchodzi",
      title: "Ludzi to obchodzi",
      date: "16 września 2024",
      summary: "Weryfikacja twierdzeń polityków o braku zainteresowania obywateli sprawami publicznymi. Fact-check popularnych mitów politycznych.",
      content: "Szczegółowa analiza danych dotyczących zaangażowania obywatelskiego Polaków. Weryfikacja często powtarzanych twierdzeń o apatii społecznej oraz rzeczywistych przyczynach niskiej frekwencji wyborczej.",
      link: "https://dobrepanstwo.org/ludzi-to-obchodzi/"
    },
    {
      id: "nie-kneblujmy-ksiegowych",
      title: "Nie kneblujmy księgowych!",
      date: "22 sierpnia 2024",
      summary: "Fact-check przepisów dotyczących tajemnicy zawodowej księgowych i ich wpływu na transparentność finansów publicznych.",
      content: "Analiza regulacji prawnych dotyczących obowiązków informacyjnych księgowych. Weryfikacja czy obecne przepisy rzeczywiście ograniczają transparentność finansową w sektorze publicznym.",
      link: "https://dobrepanstwo.org/nie-kneblujmy-ksiegowych/"
    },
    {
      id: "bezpieczna-zywnosc",
      title: "Bezpieczna żywność",
      date: "18 lipca 2024",
      summary: "Weryfikacja danych o bezpieczeństwie żywności w Polsce. Analiza skuteczności kontroli jakości i systemów certyfikacji.",
      content: "Kompleksowy przegląd danych dotyczących bezpieczeństwa żywnościowego w Polsce. Weryfikacja informacji o skuteczności kontroli sanitarnych oraz ocena systemów certyfikacji żywności.",
      link: "https://dobrepanstwo.org/bezpieczna-zywnosc/"
    },
    {
      id: "po-co-az-560",
      title: "Po co aż 560? Wystarczy kilkoro, ale umocowanych",
      date: "20 lipca 2024",
      summary: "Fact-check argumentów za zmniejszeniem liczby parlamentarzystów. Analiza efektywności różnych modeli reprezentacji.",
      content: "Szczegółowa analiza porównawcza różnych systemów parlamentarnych pod kątem liczby reprezentantów. Weryfikacja argumentów ekonomicznych i politycznych za redukcją liczby posłów i senatorów.",
      link: "https://dobrepanstwo.org/po-co-az-560-wystarczy-kilkoro-ale-umocowanych/"
    },
    {
      id: "po-co-nam-cisza-wyborcza",
      title: "Po co nam ta cisza (wyborcza)?",
      date: "10 czerwca 2024",
      summary: "Weryfikacja uzasadnień dla utrzymania ciszy wyborczej w erze mediów społecznościowych. Analiza międzynarodowych doświadczeń.",
      content: "Fact-check argumentów za utrzymaniem instytucji ciszy wyborczej. Porównanie z rozwiązaniami w innych krajach demokratycznych oraz analiza wpływu mediów społecznościowych na kampanie wyborcze.",
      link: "https://dobrepanstwo.org/po-co-nam-ta-cisza-wyborcza/"
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
          <p className="mt-2 text-lg" style={{ color: '#666666' }}>
            Fact-checking i weryfikacja informacji w przestrzeni publicznej
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#333333' }}>
                Najnowsze weryfikacje i analizy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <img 
                      src="/lovable-uploads/67187d9c-6fe3-4bda-b537-0eeb08b6d5a7.png" 
                      alt="Logo" 
                      className="w-8 h-8 mt-1 flex-shrink-0 object-contain"
                    />
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-medium mb-2"
                        style={{ color: '#333333' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: '#666666' }}>
                        {post.date}
                      </p>
                      <p className="text-base mb-4 leading-relaxed" style={{ color: '#666666' }}>
                        {post.summary}
                      </p>
                      <div className="flex gap-4 items-center flex-wrap">
                        <Link 
                          to={`/szczypta-soli/${post.id}`}
                          className="inline-flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                          style={{ color: '#333333' }}
                        >
                          Czytaj analizę <ExternalLink className="h-3 w-3" />
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
            © 2024 Fundacja Dobre Państwo. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SzczyptaSoli;