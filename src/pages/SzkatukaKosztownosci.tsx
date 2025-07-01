import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const SzkatulaKosztownosci = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      id: "zaufanie-ktore-wiednie",
      title: "Zaufanie, które więdnie",
      date: "29 czerwca 2025",
      summary: "Esej o kapitale społecznym i erozji zaufania w społeczeństwie. Analiza przyczyn spadku zaufania obywateli do instytucji publicznych.",
      content: "Szczegółowa analiza zjawiska erozji zaufania społecznego w Polsce. Badanie przyczyn spadku wiarygodności instytucji publicznych oraz wpływu tego zjawiska na funkcjonowanie demokratycznego społeczeństwa.",
      link: "https://wbrew.org/kapital-spoleczny-zaufanie/"
    },
    {
      id: "total-participation-management",
      title: "Total Participation Management (TPM)",
      date: "29 czerwca 2025",
      summary: "Zarządzanie pełnią człowieczeństwa w nowoczesnych organizacjach. Nowe podejście do zarządzania zasobami ludzkimi.",
      content: "Kompleksowa analiza nowego modelu zarządzania, który uwzględnia pełny potencjał pracowników. Rozważania o humanizacji środowiska pracy i wpływie na produktywność organizacji.",
      link: "https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/"
    },
    {
      id: "ekonomiczne-niewolnictwo-xxi-wieku",
      title: "Ekonomiczne niewolnictwo XXI wieku",
      date: "29 czerwca 2025", 
      summary: "Głos prekariatu przeciw outsourcingowi w nowoczesnej ekonomii. Krytyczna analiza współczesnych form zatrudnienia.",
      content: "Dogłębna analiza zjawiska prekariatu we współczesnej gospodarce. Badanie wpływu outsourcingu na prawa pracownicze oraz propozycje reform systemu zatrudnienia.",
      link: "https://wbrew.org/prekariat-vs-outsourcing/"
    },
    {
      id: "zderegulujmy-rzecznika-msp",
      title: "Zderegulujmy Rzecznika MŚP",
      date: "27 czerwca 2025",
      summary: "O konieczności redukcji fikcji dialogu w administracji publicznej. Analiza efektywności instytucji rzecznika.",
      content: "Krytyczna ocena funkcjonowania instytucji Rzecznika Małych i Średnich Przedsiębiorców. Analiza skuteczności działań oraz propozycje reform strukturalnych.",
      link: "https://wbrew.org/zderegulujmy-rzecznika-msp-zredukujmy-fikcje-dialogu/"
    },
    {
      id: "zanim-kultura-sie-wydarzy",
      title: "Zanim kultura się wydarzy",
      date: "21 czerwca 2025",
      summary: "Trzy przeszkody epistemiczne i manifest kreacyjnej metodologii w kulturze współczesnej.",
      content: "Rozważania o przeszkodach w rozwoju kultury współczesnej oraz propozycje nowych metodologii twórczych. Analiza filozoficzna procesów kulturowych.",
      link: "https://dobrepanstwo.org/zanim-kultura-sie-wydarzy/"
    },
    {
      id: "gdy-ziemia-krzyczy-glosem-ludu",
      title: "Gdy Ziemia krzyczy głosem ludu",
      date: "21 czerwca 2025",
      summary: "Prawa ludów rdzennych jako ostatni mur przeciw końcowi świata. Ekologiczne i społeczne aspekty ochrony środowiska.",
      content: "Analiza znaczenia praw ludów rdzennych w kontekście kryzysu klimatycznego. Badanie relacji między sprawiedliwością społeczną a ochroną środowiska.",
      link: "https://dobrepanstwo.org/gdy-ziemia-krzyczy-glosem-ludu/"
    },
    {
      id: "alt-right-miedzy-memem-a-metapolityka",
      title: "Zjawisko Alt-Right: między memem a metapolityką",
      date: "21 czerwca 2025",
      summary: "Analiza współczesnych ruchów politycznych w erze internetu i mediów społecznościowych.",
      content: "Szczegółowe badanie zjawiska Alt-Right jako nowej formy politycznego aktywizmu. Analiza wpływu memów i kultury internetowej na współczesną politykę.",
      link: "https://dobrepanstwo.org/zjawisko-alt-right-miedzy-memem-a-metapolityka/"
    },
    {
      id: "teoria-chaosu-nauka-zlozonosci",
      title: "Teoria chaosu – nauka złożoności i efektu motyla",
      date: "21 czerwca 2025",
      summary: "Zastosowanie teorii chaosu w analizie zjawisk społecznych i politycznych.",
      content: "Wprowadzenie do teorii chaosu i jej zastosowań w naukach społecznych. Analiza efektu motyla w kontekście przemian politycznych i społecznych.",
      link: "https://dobrepanstwo.org/teoria-chaosu-nauka-zlozonosci-i-efektu-motyla/"
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
                Najnowsze wpisy
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
                        <a 
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                          style={{ color: '#333333' }}
                        >
                          Czytaj pełną wersję <ExternalLink className="h-3 w-3" />
                        </a>
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

export default SzkatulaKosztownosci;