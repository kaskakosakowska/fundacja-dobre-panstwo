import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const GlosyKtoreSlychac = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      id: "straszna-dwukadencyjnosc-petycja",
      title: "Straszna dwukadencyjność - petycja Fundacji Dobre Państwo",
      date: "16 lipca 2024",
      summary: "Petycja dotycząca ograniczenia kadencji parlamentarzystów do maksymalnie dwóch w celu zwiększenia rotacji i świeżości w polityce.",
      content: "Obywatelska inicjatywa mająca na celu wprowadzenie ograniczeń kadencyjnych dla posłów i senatorów. Petycja argumentuje konieczność zwiększenia rotacji kadr politycznych dla zachowania dynamizmu demokracji.",
      link: "https://dobrepanstwo.org/straszna-dwukadencyjnosc-petycja-fundacji-dobre-panstwo/"
    },
    {
      id: "trojka-do-wyboru-petycja",
      title: "Trójka do wyboru - petycja Fundacji Dobre Państwo",
      date: "16 lipca 2024",
      summary: "Petycja w sprawie reformy systemu wyborczego - propozycja wyboru prezydenta z trojga, a nie dwóch kandydatów w drugiej turze.",
      content: "Obywatelska propozycja zmiany ordynacji wyborczej w wyborach prezydenckich. Petycja postuluje umożliwienie wyboru z trzech kandydatów w drugiej turze dla zwiększenia reprezentatywności wyniku.",
      link: "https://dobrepanstwo.org/trojka-do-wyboru-petycja-fundacji-dobre-panstwo/"
    },
    {
      id: "policzmy-kosciol-petycja",
      title: "Policzmy Kościół - petycja",
      date: "1 kwietnia 2024",
      summary: "Petycja o transparentność finansów kościelnych i równe traktowanie wszystkich związków wyznaniowych w Polsce.",
      content: "Obywatelska inicjatywa domagająca się pełnej transparentności finansowej Kościoła Katolickiego oraz równego traktowania wszystkich związków wyznaniowych. Petycja postuluje publikację sprawozdań finansowych i inwentaryzację majątku.",
      link: "https://dobrepanstwo.org/policzmy-kosciol-petycja/"
    },
    {
      id: "koniec-abonamentu-rtv-petycja",
      title: "Koniec abonamentu RTV - petycja", 
      date: "1 kwietnia 2024",
      summary: "Petycja w sprawie likwidacji obowiązkowego abonamentu radiowo-telewizyjnego jako anachronicznej formy finansowania mediów publicznych.",
      content: "Obywatelska inicjatywa dotycząca zniesienia abonamentu RTV. Petycja argumentuje, że obecny system finansowania mediów publicznych jest przestarzały i wymaga gruntownej reformy dostosowanej do cyfrowej rzeczywistości.",
      link: "https://dobrepanstwo.org/koniec-abonamentu-rtv-petycja/"
    },
    {
      id: "gospodynie-miejskie-petycja",
      title: "Gospodynie Miejskie - petycja",
      date: "1 kwietnia 2024", 
      summary: "Petycja w sprawie bezpłatnych toalet w miejscach publicznych jako podstawowej usługi dla mieszkańców miast.",
      content: "Obywatelska inicjatywa domagająca się zapewnienia bezpłatnego dostępu do toalet publicznych. Petycja argumentuje, że jest to podstawowa potrzeba fizjologiczna, która powinna być zaspokajana przez władze miejskie.",
      link: "https://dobrepanstwo.org/gospodynie-miejskie-petycja/"
    },
    {
      id: "konferencja-na-zawolanie-petycja",
      title: "Konferencja na zawołanie - petycja",
      date: "1 kwietnia 2024",
      summary: "Petycja o obowiązkowe regularne konferencje prasowe parlamentarzystów jako element transparentności władzy.",
      content: "Obywatelska propozycja wprowadzenia obowiązku regularnego składania sprawozdań przez parlamentarzystów w formie konferencji prasowych. Petycja ma na celu zwiększenie transparentności działań przedstawicieli narodu.",
      link: "https://dobrepanstwo.org/konferencja-na-zawolanie-petycja/"
    },
    {
      id: "petycja-z-konikiem",
      title: "Petycja z konikiem",
      date: "5 marca 2024",
      summary: "Obywatelska inicjatywa dotycząca poprawy warunków życia zwierząt w miastach i zwiększenia terenów zielonych.",
      content: "Kompleksowa petycja dotycząca poprawy jakości życia w miastach poprzez zwiększenie powierzchni terenów zielonych oraz poprawę warunków życia zwierząt w środowisku miejskim.",
      link: "https://dobrepanstwo.org/petycja-z-konikiem/"
    },
    {
      id: "petycja-kodeks-cywilny",
      title: "Petycja w sprawie zmiany Kodeksu cywilnego",
      date: "1 lutego 2024",
      summary: "Petycja dotycząca modernizacji przepisów Kodeksu cywilnego w zakresie prawa rodzinnego i związków partnerskich.",
      content: "Obywatelska inicjatywa mająca na celu dostosowanie polskiego prawa cywilnego do współczesnych realiów społecznych. Petycja postuluje wprowadzenie nowoczesnych rozwiązań w prawie rodzinnym.",
      link: "https://dobrepanstwo.org/petycja-w-sprawie-zmiany-kodeksu-cywilnego/"
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
          <p className="mt-2 text-lg" style={{ color: '#666666' }}>
            Petycje obywatelskie i inicjatywy społeczne - 66 działań na rzecz lepszego państwa
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#333333' }}>
                Najnowsze petycje i inicjatywy
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
                          Zobacz petycję <ExternalLink className="h-3 w-3" />
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

export default GlosyKtoreSlychac;