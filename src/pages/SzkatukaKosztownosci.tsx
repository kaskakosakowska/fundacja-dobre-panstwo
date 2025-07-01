import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const SzkatulaKosztownosci = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    // Czerwiec 2025
    { id: "zaufanie-ktore-wiednie", title: "Zaufanie, które więdnie", date: "29 czerwca 2025", summary: "Esej o kapitale społecznym i erozji zaufania w społeczeństwie.", content: "Analiza przyczyn spadku zaufania obywateli do instytucji publicznych.", link: "https://wbrew.org/kapital-spoleczny-zaufanie/" },
    { id: "total-participation-management", title: "Total Participation Management (TPM)", date: "29 czerwca 2025", summary: "Zarządzanie pełnią człowieczeństwa w nowoczesnych organizacjach.", content: "Nowe podejście do zarządzania zasobami ludzkimi.", link: "https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/" },
    { id: "ekonomiczne-niewolnictwo-xxi-wieku", title: "Ekonomiczne niewolnictwo XXI wieku", date: "29 czerwca 2025", summary: "Głos prekariatu przeciw outsourcingowi w nowoczesnej ekonomii.", content: "Krytyczna analiza współczesnych form zatrudnienia.", link: "https://wbrew.org/prekariat-vs-outsourcing/" },
    { id: "wzorzec-ktory-marzy", title: "Wzorzec, który marzy", date: "29 czerwca 2025", summary: "Rozważania o osobliwości i tożsamości we współczesnym świecie.", content: "Filozoficzna analiza wzorców społecznych.", link: "https://wbrew.org/wzorzec-osobliwosc-tozsamosc/" },
    { id: "zderegulujmy-rzecznika-msp", title: "Zderegulujmy Rzecznika MŚP", date: "27 czerwca 2025", summary: "O konieczności redukcji fikcji dialogu w administracji publicznej.", content: "Analiza efektywności instytucji rzecznika.", link: "https://wbrew.org/zderegulujmy-rzecznika-msp-zredukujmy-fikcje-dialogu/" },
    { id: "zanim-kultura-sie-wydarzy", title: "Zanim kultura się wydarzy", date: "21 czerwca 2025", summary: "Trzy przeszkody epistemiczne i manifest kreacyjnej metodologii w kulturze.", content: "Rozważania o przeszkodach w rozwoju kultury współczesnej.", link: "https://dobrepanstwo.org/zanim-kultura-sie-wydarzy/" },
    { id: "czlowiek-ktory-zapomnial-miec-tors", title: "Człowiek, który zapomniał mieć tors", date: "21 czerwca 2025", summary: "Filozoficzne rozważania o cielesności i tożsamości.", content: "Antropologiczna analiza współczesnego człowieka.", link: "https://dobrepanstwo.org/czlowiek-ktory-zapomnial-miec-tors/" },
    { id: "gdy-ziemia-krzyczy-glosem-ludu", title: "Gdy Ziemia krzyczy głosem ludu", date: "21 czerwca 2025", summary: "Prawa ludów rdzennych jako ostatni mur przeciw końcowi świata.", content: "Ekologiczne i społeczne aspekty ochrony środowiska.", link: "https://dobrepanstwo.org/gdy-ziemia-krzyczy-glosem-ludu/" },
    { id: "alt-right-miedzy-memem-a-metapolityka", title: "Zjawisko Alt-Right: między memem a metapolityką", date: "21 czerwca 2025", summary: "Analiza współczesnych ruchów politycznych w erze internetu.", content: "Szczegółowe badanie zjawiska Alt-Right jako nowej formy politycznego aktywizmu.", link: "https://dobrepanstwo.org/zjawisko-alt-right-miedzy-memem-a-metapolityka/" },
    { id: "teoria-chaosu-nauka-zlozonosci", title: "Teoria chaosu – nauka złożoności i efektu motyla", date: "21 czerwca 2025", summary: "Zastosowanie teorii chaosu w analizie zjawisk społecznych i politycznych.", content: "Wprowadzenie do teorii chaosu i jej zastosowań w naukach społecznych.", link: "https://dobrepanstwo.org/teoria-chaosu-nauka-zlozonosci-i-efektu-motyla/" },
    
    // Maj 2025 - kontynuacja czerwcowych dat
    { id: "wszystko-plynie-nieregularnie", title: "Wszystko płynie nieregularnie", date: "11 czerwca 2025", summary: "Rozważania o zmienności w życiu społecznym i politycznym.", content: "Analiza niestabilności współczesnego świata.", link: "https://dobrepanstwo.org/wszystko-plynie-nieregularnie/" },
    { id: "utopia-sznurka-pieczatki", title: "Utopia sznurka, pieczątki i paralizatora", date: "11 czerwca 2025", summary: "Krytyka biurokracji i jej wpływu na społeczeństwo.", content: "Analiza mechanizmów biurokratycznych.", link: "https://dobrepanstwo.org/utopia-sznurka-pieczatki-i-paralizatora/" },
    { id: "czas-giddensa", title: "Czas Giddensa", date: "11 czerwca 2025", summary: "Refleksje nad socjologią Anthony'ego Giddensa.", content: "Analiza teorii społecznej Giddensa.", link: "https://dobrepanstwo.org/czas-giddensa/" },
    { id: "gdy-rynki-zawodza-ludzie-milkna", title: "Gdy rynki zawodzą, a ludzie milkną", date: "11 czerwca 2025", summary: "O kryzysach rynkowych i ich społecznych konsekwencjach.", content: "Analiza wpływu kryzysów na społeczeństwo.", link: "https://dobrepanstwo.org/gdy-rynki-zawodza-a-ludzie-milkna/" },
    { id: "panstwo-nie-wchodzi-do-swiatyni", title: "Państwo nie wchodzi do świątyni, lecz adres jej zna", date: "10 czerwca 2025", summary: "O relacjach między państwem a kościołem w Polsce.", content: "Analiza stosunków państwo-kościół.", link: "https://dobrepanstwo.org/panstwo-nie-wchodzi-do-swiatyni-lecz-adres-jej-zna/" },
    
    // Pozostałe z maja 2025
    { id: "analiza-inwestycji-publicznych", title: "Analiza inwestycji publicznych podnoszących jakość życia", date: "15 maja 2025", summary: "Badanie efektywności wydatków publicznych.", content: "Kompleksowa analiza inwestycji publicznych.", link: "https://dobrepanstwo.org/analiza-inwestycji-publicznych-podnoszacych-jakosc-zycia/" },
    { id: "koniec-praw-poczatek-praw", title: "Koniec praw, początek praw", date: "14 maja 2025", summary: "O przemianach w systemie prawnym.", content: "Analiza ewolucji prawa.", link: "https://dobrepanstwo.org/koniec-praw-poczatek-praw/" },
    { id: "paradygmat-ku-samozatrudnieniu", title: "Paradygmat ku samozatrudnieniu?", date: "13 maja 2025", summary: "Trendy w zatrudnieniu i samozatrudnieniu.", content: "Analiza zmian na rynku pracy.", link: "https://dobrepanstwo.org/paradygmat-ku-samozatrudnieniu/" },
    { id: "na-smyczy-zysku-tancu-wartosci", title: "Na smyczy zysku, czy w tańcu wartości", date: "12 maja 2025", summary: "O konflikcie między zyskiem a wartościami.", content: "Etyczna analiza biznesu.", link: "https://dobrepanstwo.org/na-smyczy-zysku-czy-w-tancu-wartosci/" },
    
    // Seria prekariackiej pracy
    { id: "niewidzialni-przy-stole", title: "Niewidzialni przy stole", date: "10 maja 2025", summary: "Kogo nie ma w dialogu społecznym i dlaczego.", content: "Analiza wykluczenia z debaty publicznej.", link: "https://dobrepanstwo.org/niewidzialni-przy-stole-kogo-nie-ma-w-dialogu-spolecznym-i-dlaczego/" },
    { id: "elastycznosc-bez-zobowiazan", title: "Elastyczność bez zobowiązań", date: "9 maja 2025", summary: "O pozornych wolnościach deregulowanego rynku.", content: "Krytyka elastycznego zatrudnienia.", link: "https://dobrepanstwo.org/elastycznosc-bez-zobowiazan-o-pozornych-wolnosciach-deregulowanego-rynku/" },
    { id: "w-cieniu-zlecenia", title: "W cieniu zlecenia", date: "8 maja 2025", summary: "Państwo i ekonomika umywania rąk.", content: "Analiza umów zlecenia.", link: "https://dobrepanstwo.org/w-cieniu-zlecenia-panstwo-i-ekonomika-umywania-rak/" },
    { id: "nowy-porzadek-feudalny", title: "Nowy porządek feudalny", date: "7 maja 2025", summary: "O degradacji pracy i znikających ludziach.", content: "Krytyka współczesnych stosunków pracy.", link: "https://dobrepanstwo.org/nowy-porzadek-feudalny-o-degradacji-pracy-i-znikajacych-ludziach/" },
    
    // Polityka i demokracja
    { id: "o-sejmu-skrocenie", title: "O Sejmu skrócenie", date: "5 maja 2025", summary: "Propozycja skrócenia kadencji parlamentu.", content: "Argumenty za krótszymi kadencjami.", link: "https://dobrepanstwo.org/o-sejmu-skrocenie/" },
    { id: "dlaczego-tylko-dwie-kadencje", title: "Dlaczego tylko dwie (kadencje)?", date: "4 maja 2025", summary: "O ograniczeniu liczby kadencji parlamentarzystów.", content: "Uzasadnienie limitów kadencyjnych.", link: "https://dobrepanstwo.org/dlaczego-tylko-dwie-kadencje/" },
    { id: "total-recall", title: "Total recall", date: "3 maja 2025", summary: "O mechanizmach odwołania politików.", content: "Propozycje demokratycznej kontroli.", link: "https://dobrepanstwo.org/total-recall/" },
    { id: "wiecej-demokracji-referendalnej", title: "Więcej DEMOkracji (referendalnej)", date: "2 maja 2025", summary: "Argumenty za rozszerzeniem demokracji bezpośredniej.", content: "Analiza referendum jako narzędzia.", link: "https://dobrepanstwo.org/wiecej-demokracji-referendalnej/" },
    { id: "mandat-tuz-za-progiem", title: "Mandat tuż za (p)rogiem", date: "1 maja 2025", summary: "O progach wyborczych i reprezentacji.", content: "Analiza systemu wyborczego.", link: "https://dobrepanstwo.org/mandat-tuz-za-progiem/" }
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
          <p className="mt-2 text-lg" style={{ color: '#666666' }}>
            Najnowsze publikacje (od maja 2025) - analizy polityczne, społeczne i ekonomiczne
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#333333' }}>
                Najnowsze wpisy ({posts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[70vh]">
                <div className="space-y-6 pr-4">
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
                          to={`/szkatulka-kosztownosci/${post.id}`}
                          className="inline-flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                          style={{ color: '#333333' }}
                        >
                          Czytaj pełną wersję <ExternalLink className="h-3 w-3" />
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
                </div>
              </ScrollArea>
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

export default SzkatulaKosztownosci;