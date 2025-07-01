
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const PostTemplate = () => {
  const { postId } = useParams();
  const location = useLocation();
  
  // Determine section from current path
  const getSection = () => {
    if (location.pathname.includes('szkatulka-kosztownosci')) return 'szkatulka';
    if (location.pathname.includes('szczypta-soli')) return 'szczypta';
    if (location.pathname.includes('glosy-ktore-slychac')) return 'glosy';
    return 'default';
  };

  const section = getSection();

  // Real data for posts from each section
  const getPostData = () => {
    const posts = {
      szkatulka: {
        "zaufanie-ktore-wiednie": { title: "Zaufanie, które więdnie", date: "29 czerwca 2025", summary: "Esej o kapitale społecznym i erozji zaufania w społeczeństwie. Analiza przyczyn spadku zaufania obywateli do instytucji publicznych.", content: "Szczegółowa analiza zjawiska erozji zaufania społecznego w Polsce. Badanie przyczyn spadku wiarygodności instytucji publicznych oraz wpływu tego zjawiska na funkcjonowanie demokratycznego społeczeństwa.", link: "https://wbrew.org/kapital-spoleczny-zaufanie/" },
        "total-participation-management": { title: "Total Participation Management (TPM)", date: "29 czerwca 2025", summary: "Zarządzanie pełnią człowieczeństwa w nowoczesnych organizacjach. Nowe podejście do zarządzania zasobami ludzkimi.", content: "Kompleksowa analiza nowego modelu zarządzania, który uwzględnia pełny potencjał pracowników. Rozważania o humanizacji środowiska pracy i wpływie na produktywność organizacji.", link: "https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/" },
        "ekonomiczne-niewolnictwo-xxi-wieku": { title: "Ekonomiczne niewolnictwo XXI wieku", date: "29 czerwca 2025", summary: "Głos prekariatu przeciw outsourcingowi w nowoczesnej ekonomii. Krytyczna analiza współczesnych form zatrudnienia.", content: "Dogłębna analiza zjawiska prekariatu we współczesnej gospodarce. Badanie wpływu outsourcingu na prawa pracownicze oraz propozycje reform systemu zatrudnienia.", link: "https://wbrew.org/prekariat-vs-outsourcing/" },
        "zderegulujmy-rzecznika-msp": { title: "Zderegulujmy Rzecznika MŚP", date: "27 czerwca 2025", summary: "O konieczności redukcji fikcji dialogu w administracji publicznej. Analiza efektywności instytucji rzecznika.", content: "Krytyczna ocena funkcjonowania instytucji Rzecznika Małych i Średnich Przedsiębiorców. Analiza skuteczności działań oraz propozycje reform strukturalnych.", link: "https://wbrew.org/zderegulujmy-rzecznika-msp-zredukujmy-fikcje-dialogu/" },
        "zanim-kultura-sie-wydarzy": { title: "Zanim kultura się wydarzy", date: "21 czerwca 2025", summary: "Trzy przeszkody epistemiczne i manifest kreacyjnej metodologii w kulturze współczesnej.", content: "Rozważania o przeszkodach w rozwoju kultury współczesnej oraz propozycje nowych metodologii twórczych. Analiza filozoficzna procesów kulturowych.", link: "https://dobrepanstwo.org/zanim-kultura-sie-wydarzy/" },
        "gdy-ziemia-krzyczy-glosem-ludu": { title: "Gdy Ziemia krzyczy głosem ludu", date: "21 czerwca 2025", summary: "Prawa ludów rdzennych jako ostatni mur przeciw końcowi świata. Ekologiczne i społeczne aspekty ochrony środowiska.", content: "Analiza znaczenia praw ludów rdzennych w kontekście kryzysu klimatycznego. Badanie relacji między sprawiedliwością społeczną a ochroną środowiska.", link: "https://dobrepanstwo.org/gdy-ziemia-krzyczy-glosem-ludu/" },
        "alt-right-miedzy-memem-a-metapolityka": { title: "Zjawisko Alt-Right: między memem a metapolityką", date: "21 czerwca 2025", summary: "Analiza współczesnych ruchów politycznych w erze internetu i mediów społecznościowych.", content: "Szczegółowe badanie zjawiska Alt-Right jako nowej formy politycznego aktywizmu. Analiza wpływu memów i kultury internetowej na współczesną politykę.", link: "https://dobrepanstwo.org/zjawisko-alt-right-miedzy-memem-a-metapolityka/" },
        "teoria-chaosu-nauka-zlozonosci": { title: "Teoria chaosu – nauka złożoności i efektu motyla", date: "21 czerwca 2025", summary: "Zastosowanie teorii chaosu w analizie zjawisk społecznych i politycznych.", content: "Wprowadzenie do teorii chaosu i jej zastosowań w naukach społecznych. Analiza efektu motyla w kontekście przemian politycznych i społecznych.", link: "https://dobrepanstwo.org/teoria-chaosu-nauka-zlozonosci-i-efektu-motyla/" }
      },
      szczypta: {
        "wzmacnianie-csr-biznesu": { title: "Wzmacnianie Społecznej Odpowiedzialności Biznesu", date: "30 września 2024", summary: "Strategiczne partnerstwa z interesariuszami - nowy projekt OZZS WBREW w zakresie ESG i społecznej odpowiedzialności.", content: "Kompleksowa analiza znaczenia ESG w nowoczesnym biznesie. Projekt OZZS WBREW skupia się na budowaniu strategicznych partnerstw między pracodawcami a interesariuszami w celu wzmocnienia społecznej odpowiedzialności biznesu.", link: "https://dobrepanstwo.org/wzmacnianie-spolecznej-odpowiedzialnosci-biznesu/" },
        "poprawa-wskaznikow-esg": { title: "Poprawa wskaźników ESG w przestrzeni SOCIAL jest najtańsza!", date: "29 września 2024", summary: "Analiza OZZS WBREW dotycząca najbardziej efektywnych kosztowo sposobów poprawy wskaźników ESG w wymiarze społecznym.", content: "Szczegółowe badanie pokazujące, że inwestycje w obszar społeczny ESG przynoszą najlepszy stosunek korzyści do kosztów. Analiza konkretnych działań i ich wpływu na ocenę ESG organizacji.", link: "https://wbrew.org/poprawa-wskaznikow-esg-w-przestrzeni-social-jest-najtansza/" },
        "zawod-ksiadz-praca-czy-fikcja": { title: "Zawód Ksiądz – Niebiańska Praca czy Państwowa Fikcja?", date: "27 września 2024", summary: "Fact-check statusu prawnego duchownych w systemie państwowym. Analiza przywileji podatkowych i społecznych księży.", content: "Dogłębna weryfikacja statusu prawnego księży w polskim systemie prawnym. Analiza przywilejów podatkowych, ubezpieczeniowych i innych form wsparcia państwowego dla duchowieństwa katolickiego.", link: "https://dobrepanstwo.org/zawod-ksiadz-niebianska-praca-czy-panstwowa-fikcja/" },
        "ludzi-to-obchodzi": { title: "Ludzi to obchodzi", date: "16 września 2024", summary: "Weryfikacja twierdzeń polityków o braku zainteresowania obywateli sprawami publicznymi. Fact-check popularnych mitów politycznych.", content: "Szczegółowa analiza danych dotyczących zaangażowania obywatelskiego Polaków. Weryfikacja często powtarzanych twierdzeń o apatii społecznej oraz rzeczywistych przyczynach niskiej frekwencji wyborczej.", link: "https://dobrepanstwo.org/ludzi-to-obchodzi/" },
        "nie-kneblujmy-ksiegowych": { title: "Nie kneblujmy księgowych!", date: "22 sierpnia 2024", summary: "Fact-check przepisów dotyczących tajemnicy zawodowej księgowych i ich wpływu na transparentność finansów publicznych.", content: "Analiza regulacji prawnych dotyczących obowiązków informacyjnych księgowych. Weryfikacja czy obecne przepisy rzeczywiście ograniczają transparentność finansową w sektorze publicznym.", link: "https://dobrepanstwo.org/nie-kneblujmy-ksiegowych/" },
        "bezpieczna-zywnosc": { title: "Bezpieczna żywność", date: "18 lipca 2024", summary: "Weryfikacja danych o bezpieczeństwie żywności w Polsce. Analiza skuteczności kontroli jakości i systemów certyfikacji.", content: "Kompleksowy przegląd danych dotyczących bezpieczeństwa żywnościowego w Polsce. Weryfikacja informacji o skuteczności kontroli sanitarnych oraz ocena systemów certyfikacji żywności.", link: "https://dobrepanstwo.org/bezpieczna-zywnosc/" },
        "po-co-az-560": { title: "Po co aż 560? Wystarczy kilkoro, ale umocowanych", date: "20 lipca 2024", summary: "Fact-check argumentów za zmniejszeniem liczby parlamentarzystów. Analiza efektywności różnych modeli reprezentacji.", content: "Szczegółowa analiza porównawcza różnych systemów parlamentarnych pod kątem liczby reprezentantów. Weryfikacja argumentów ekonomicznych i politycznych za redukcją liczby posłów i senatorów.", link: "https://dobrepanstwo.org/po-co-az-560-wystarczy-kilkoro-ale-umocowanych/" },
        "po-co-nam-cisza-wyborcza": { title: "Po co nam ta cisza (wyborcza)?", date: "10 czerwca 2024", summary: "Weryfikacja uzasadnień dla utrzymania ciszy wyborczej w erze mediów społecznościowych. Analiza międzynarodowych doświadczeń.", content: "Fact-check argumentów za utrzymaniem instytucji ciszy wyborczej. Porównanie z rozwiązaniami w innych krajach demokratycznych oraz analiza wpływu mediów społecznościowych na kampanie wyborcze.", link: "https://dobrepanstwo.org/po-co-nam-ta-cisza-wyborcza/" }
      },
      glosy: {
        "straszna-dwukadencyjnosc-petycja": { title: "Straszna dwukadencyjność - petycja Fundacji Dobre Państwo", date: "16 lipca 2024", summary: "Petycja dotycząca ograniczenia kadencji parlamentarzystów do maksymalnie dwóch w celu zwiększenia rotacji i świeżości w polityce.", content: "Obywatelska inicjatywa mająca na celu wprowadzenie ograniczeń kadencyjnych dla posłów i senatorów. Petycja argumentuje konieczność zwiększenia rotacji kadr politycznych dla zachowania dynamizmu demokracji.", link: "https://dobrepanstwo.org/straszna-dwukadencyjnosc-petycja-fundacji-dobre-panstwo/" },
        "trojka-do-wyboru-petycja": { title: "Trójka do wyboru - petycja Fundacji Dobre Państwo", date: "16 lipca 2024", summary: "Petycja w sprawie reformy systemu wyborczego - propozycja wyboru prezydenta z trojga, a nie dwóch kandydatów w drugiej turze.", content: "Obywatelska propozycja zmiany ordynacji wyborczej w wyborach prezydenckich. Petycja postuluje umożliwienie wyboru z trzech kandydatów w drugiej turze dla zwiększenia reprezentatywności wyniku.", link: "https://dobrepanstwo.org/trojka-do-wyboru-petycja-fundacji-dobre-panstwo/" },
        "policzmy-kosciol-petycja": { title: "Policzmy Kościół - petycja", date: "1 kwietnia 2024", summary: "Petycja o transparentność finansów kościelnych i równe traktowanie wszystkich związków wyznaniowych w Polsce.", content: "Obywatelska inicjatywa domagająca się pełnej transparentności finansowej Kościoła Katolickiego oraz równego traktowania wszystkich związków wyznaniowych. Petycja postuluje publikację sprawozdań finansowych i inwentaryzację majątku.", link: "https://dobrepanstwo.org/policzmy-kosciol-petycja/" },
        "koniec-abonamentu-rtv-petycja": { title: "Koniec abonamentu RTV - petycja", date: "1 kwietnia 2024", summary: "Petycja w sprawie likwidacji obowiązkowego abonamentu radiowo-telewizyjnego jako anachronicznej formy finansowania mediów publicznych.", content: "Obywatelska inicjatywa dotycząca zniesienia abonamentu RTV. Petycja argumentuje, że obecny system finansowania mediów publicznych jest przestarzały i wymaga gruntownej reformy dostosowanej do cyfrowej rzeczywistości.", link: "https://dobrepanstwo.org/koniec-abonamentu-rtv-petycja/" },
        "gospodynie-miejskie-petycja": { title: "Gospodynie Miejskie - petycja", date: "1 kwietnia 2024", summary: "Petycja w sprawie bezpłatnych toalet w miejscach publicznych jako podstawowej usługi dla mieszkańców miast.", content: "Obywatelska inicjatywa domagająca się zapewnienia bezpłatnego dostępu do toalet publicznych. Petycja argumentuje, że jest to podstawowa potrzeba fizjologiczna, która powinna być zaspokajana przez władze miejskie.", link: "https://dobrepanstwo.org/gospodynie-miejskie-petycja/" },
        "konferencja-na-zawolanie-petycja": { title: "Konferencja na zawołanie - petycja", date: "1 kwietnia 2024", summary: "Petycja o obowiązkowe regularne konferencje prasowe parlamentarzystów jako element transparentności władzy.", content: "Obywatelska propozycja wprowadzenia obowiązku regularnego składania sprawozdań przez parlamentarzystów w formie konferencji prasowych. Petycja ma na celu zwiększenie transparentności działań przedstawicieli narodu.", link: "https://dobrepanstwo.org/konferencja-na-zawolanie-petycja/" },
        "petycja-z-konikiem": { title: "Petycja z konikiem", date: "5 marca 2024", summary: "Obywatelska inicjatywa dotycząca poprawy warunków życia zwierząt w miastach i zwiększenia terenów zielonych.", content: "Kompleksowa petycja dotycząca poprawy jakości życia w miastach poprzez zwiększenie powierzchni terenów zielonych oraz poprawę warunków życia zwierząt w środowisku miejskim.", link: "https://dobrepanstwo.org/petycja-z-konikiem/" },
        "petycja-kodeks-cywilny": { title: "Petycja w sprawie zmiany Kodeksu cywilnego", date: "1 lutego 2024", summary: "Petycja dotycząca modernizacji przepisów Kodeksu cywilnego w zakresie prawa rodzinnego i związków partnerskich.", content: "Obywatelska inicjatywa mająca na celu dostosowanie polskiego prawa cywilnego do współczesnych realiów społecznych. Petycja postuluje wprowadzenie nowoczesnych rozwiązań w prawie rodzinnym.", link: "https://dobrepanstwo.org/petycja-w-sprawie-zmiany-kodeksu-cywilnego/" }
      }
    };

    return posts[section]?.[postId] || { title: "Wpis nie znaleziony", content: "Nie udało się odnaleźć tego wpisu." };
  };

  // Determine section from current path
  const getBackPath = () => {
    switch(section) {
      case 'szkatulka': return '/szkatulka-kosztownosci';
      case 'szczypta': return '/szczypta-soli';
      case 'glosy': return '/glosy-ktore-slychac';
      default: return '/';
    }
  };

  const post = getPostData();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-6 mb-4">
            <Link to={getBackPath()} className="inline-flex items-center hover:opacity-70 transition-opacity">
              <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
              <span style={{ color: '#666666' }}>Powrót</span>
            </Link>
            <Link to="/" className="inline-flex items-center hover:opacity-70 transition-opacity">
              <Home className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
              <span style={{ color: '#666666' }}>Strona główna</span>
            </Link>
          </div>
          <h1 className="text-3xl font-light" style={{ color: '#333333' }}>
            {post.title}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Post Container */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '678px' }}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4" style={{ color: '#333333' }}>
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  <ScrollArea className="h-full max-h-[550px] pr-4">
                    <div className="relative">
                      {/* Image in top right corner */}
                      <img 
                        src="/lovable-uploads/a247c62f-0c85-460a-8ed0-b9c0be25623f.png" 
                        alt="Post image" 
                        className="float-right ml-6 mb-4 w-48 h-32 object-cover rounded-lg shadow-md"
                      />
                      
                      {/* Post content */}
                      <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
                        {postId === 'zaufanie-ktore-wiednie' && section === 'szkatulka' ? (
                          <div className="prose prose-lg max-w-none">
                            <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
                              O kapitale społecznym i zdradzie wspólnoty
                            </h2>
                            
                            <p className="mb-4">
                              W społeczeństwach pozbawionych zaufania nie ma niczego stabilnego. Ani polityki, ani deliberacji, ani nawet dobrego sąsiedztwa. Kapitał społeczny, choć brzmi jak ekonomiczny żargon wciśnięty w ramy kultury, jest jednym z najważniejszych wskaźników zdrowia społecznego. To zasób niewidzialny, lecz wszechobecny – konstytuuje to, co wspólne, pozwala działać razem, uczy współodpowiedzialności.
                            </p>
                            
                            <p className="mb-6">
                              Gdy słabnie, rozpada się nie tylko więź międzyludzka, ale i sama zdolność do życia zbiorowego. A tam, gdzie życie zbiorowe zamiera, polityka zamienia się w zarządzanie nieufnością.
                            </p>
                            
                            <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
                              Między mostem a fortyfikacją – natura kapitału społecznego
                            </h3>
                            
                            <p className="mb-4">
                              Kapitał społeczny to sieć wzajemnych powiązań, norm, wzorców współpracy i, przede wszystkim, zaufania – zarówno wobec znanych, jak i nieznajomych. Można powiedzieć: to metafizyczna infrastruktura nowoczesności, bez której żadna wspólnota nie utrzyma się dłużej niż do najbliższego kryzysu.
                            </p>
                            
                            <p className="mb-6">
                              W teorii socjologicznej wyróżnia się dwa podstawowe typy kapitału społecznego: <strong>spajający</strong> (bonding) i <strong>łączący</strong> (bridging). Pierwszy działa jak fortyfikacja – tworzy silne, homogeniczne więzi wewnątrz grupy, podtrzymuje lojalność i tożsamość. Drugi – to most, konstrukcja łącząca różne grupy, otwarta i inkluzywna. Oba typy są potrzebne, lecz ich równowaga decyduje o zdolności wspólnoty do adaptacji i dialogu.
                            </p>
                            
                            <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
                              Od teorii do praktyki – jak polityka wysysa zaufanie
                            </h3>
                            
                            <p className="mb-4">
                              Pojęcie kapitału społecznego sięga Pierre'a Bourdieu (zasób dominacji przez sieci relacji) i Jamesa Colemana (narzędzie efektywności współdziałania). Robert D. Putnam połączył te wątki, ukazując wpływ jakości sieci relacji na kondycję demokracji.
                            </p>
                            
                            <p className="mb-6">
                              Relacja między kapitałem społecznym a polityką jest dialektyczna. Zaufanie umożliwia skuteczne rządzenie, obniżając koszty wprowadzania polityk publicznych. Politycy zaś mogą wzmacniać lub niszczyć tego rodzaju kapitał: akcje budujące inkluzywność wspólnoty skutkują wzrostem zaufania, działania partykularne i kampanie marketingowe – jego erozją.
                            </p>
                            
                            <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
                              Zaufanie i jego epistemologia – socjologia na polu minowym
                            </h3>
                            
                            <p className="mb-4">
                              Badanie kapitału społecznego wymaga wielopoziomowej metodologii. Operuje on na poziomie mikro (relacje interpersonalne), mezo (organizacje lokalne) i makro (kultura polityczna). Główne wskaźniki to poziom zaufania, uczestnictwa obywatelskiego oraz gęstość sieci stowarzyszeń.
                            </p>
                            
                            <p className="mb-6">
                              Kluczowe rozróżnienie to <strong>zaufanie zagęszczone</strong> (thick trust) – oparte na bliskich relacjach, oraz <strong>zaufanie rozproszone</strong> (thin trust) – wobec nieznajomych i instytucji. Nowoczesne społeczeństwo bez zaufania rozproszonego nie istnieje – traci wsparcie deliberacji i staje się mozaiką atomizowanych jednostek.
                            </p>
                            
                            <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
                              Gdy obywatel znika – polityka staje się folwarkiem
                            </h3>
                            
                            <p className="mb-6">
                              Kapitał społeczny obniża koszty transakcji społecznych: tam, gdzie wspólnota ufa sobie nawzajem, prawo działa z mniejszym przymusem, podatki płaci się chętniej, a obywatele angażują się w życie publiczne. W sytuacji deficytu zaufania państwo zastępuje delikatne mechanizmy kontroli twardymi regulacjami, a polityka przeobraża się w zarządzanie podziałami.
                            </p>
                            
                            <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
                              Nieufność jako domyślny tryb istnienia
                            </h3>
                            
                            <p className="mb-4">
                              Kapitał społeczny działa jak kolagen w ciele społecznym – gdy go brakuje, tkanka się rozpada. Społeczeństwa wysokiego zaufania są odporne i twórcze, te niskiego – łatwe do zmanipulowania i podzielone. Bez świadomego budowania więzi przekraczających granice grupowe, demokracja zamiera jako żywy organizm, stając się jedynie maską instytucji.
                            </p>
                            
                            <p className="mb-4">
                              Odbudowa kapitału społecznego to wyzwanie zarówno teoretyczne, jak i praktyczne. Wymaga polityków, którzy będą inwestować w kapitał łączący, świadomych socjologów i obywateli gotowych przekroczyć własne enklawy tożsamościowe. Inaczej samo życie zbiorowe zamieni się w samotną grę w kręgle – bez kręgielni i kul.
                            </p>
                          </div>
                        ) : (
                          <div className="prose prose-lg max-w-none">
                            <p className="mb-6 text-lg font-medium" style={{ color: '#666666' }}>
                              {post.summary}
                            </p>
                            <p className="mb-4">
                              {post.content}
                            </p>
                            <p className="mb-4">
                              Ten artykuł stanowi część naszej analizy współczesnych wyzwań społecznych i politycznych. 
                              Fundacja Dobre Państwo konsekwentnie bada i opisuje zjawiska wpływające na jakość demokracji 
                              oraz funkcjonowanie instytucji publicznych w Polsce.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Containers */}
            <div className="space-y-6">
              {/* PDF Embedder Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '210px' }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center" style={{ color: '#333333' }}>
                    <img 
                      src="/lovable-uploads/ae91d7af-623f-450d-a983-ade57324b3db.png" 
                      alt="bullet point" 
                      className="w-4 h-4 mr-2"
                    />
                    Pełna treść PDF
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">PDF Embedder</p>
                    <p className="text-xs mt-2">Tutaj zostanie umieszczony embedder PDF-a z pełną treścią wpisu</p>
                  </div>
                </CardContent>
              </Card>

              {/* Audio Version Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '210px' }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center" style={{ color: '#333333' }}>
                    <img 
                      src="/lovable-uploads/ae91d7af-623f-450d-a983-ade57324b3db.png" 
                      alt="bullet point" 
                      className="w-4 h-4 mr-2"
                    />
                    Wersja audio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">Audio Player</p>
                    <p className="text-xs mt-2">Wersja audio PDF-a</p>
                  </div>
                </CardContent>
              </Card>

              {/* Mind Map Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '210px' }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center" style={{ color: '#333333' }}>
                    <img 
                      src="/lovable-uploads/ae91d7af-623f-450d-a983-ade57324b3db.png" 
                      alt="bullet point" 
                      className="w-4 h-4 mr-2"
                    />
                    Mapa pojęć
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">Mind Map</p>
                    <p className="text-xs mt-2">Interaktywna mapa pojęć związanych z wpisem</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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

export default PostTemplate;
