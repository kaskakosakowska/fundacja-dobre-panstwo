import { useParams, useLocation } from "react-router-dom";

export interface Post {
  title: string;
  date: string;
  summary: string;
  content: string;
  link: string;
}

export const usePostData = () => {
  const { postId } = useParams();
  const location = useLocation();
  
  const getSection = () => {
    if (location.pathname.includes('szkatulka-kosztownosci')) return 'szkatulka';
    if (location.pathname.includes('szczypta-soli')) return 'szczypta';
    if (location.pathname.includes('glosy-ktore-slychac')) return 'glosy';
    return 'default';
  };

  const section = getSection();

  const getPostData = (): Post => {
    const posts = {
      szkatulka: {
        // Posty po 1 maja 2025 - SZKATUŁKA KOSZTOWNOŚCI (około 100 postów)
        "zaufanie-ktore-wiednie": { title: "Zaufanie, które więdnie", date: "29 czerwca 2025", summary: "Esej o kapitale społecznym i erozji zaufania w społeczeństwie", content: "Szczegółowa analiza zjawiska erozji zaufania społecznego w Polsce", link: "https://wbrew.org/kapital-spoleczny-zaufanie/" },
        "total-participation-management": { title: "Total Participation Management (TPM)", date: "29 czerwca 2025", summary: "Zarządzanie pełnią człowieczeństwa w nowoczesnych organizacjach", content: "Kompleksowa analiza nowego modelu zarządzania", link: "https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/" },
        "ekonomiczne-niewolnictwo-xxi-wieku": { title: "Ekonomiczne niewolnictwo XXI wieku", date: "29 czerwca 2025", summary: "Głos prekariatu przeciw outsourcingowi", content: "Dogłębna analiza zjawiska prekariatu", link: "https://wbrew.org/prekariat-vs-outsourcing/" },
        "wzorzec-ktory-marzy": { title: "Wzorzec, który marzy", date: "29 czerwca 2025", summary: "Esej o osobliwości i tożsamości", content: "Analiza wzorców osobowościowych", link: "https://wbrew.org/wzorzec-osobliwosc-tozsamosc/" },
        "zderegulujmy-rzecznika-msp": { title: "Zderegulujmy Rzecznika MŚP", date: "27 czerwca 2025", summary: "O redukcji fikcji dialogu w administracji", content: "Krytyczna ocena instytucji Rzecznika MŚP", link: "https://wbrew.org/zderegulujmy-rzecznika-msp-zredukujmy-fikcje-dialogu/" },
        "zanim-kultura-sie-wydarzy": { title: "Zanim kultura się wydarzy", date: "21 czerwca 2025", summary: "Trzy przeszkody epistemiczne w kulturze", content: "Rozważania o przeszkodach w rozwoju kultury", link: "https://dobrepanstwo.org/zanim-kultura-sie-wydarzy/" },
        "czlowiek-ktory-zapomnial-miec-tors": { title: "Człowiek, który zapomniał mieć tors", date: "21 czerwca 2025", summary: "Esej o kondycji człowieka współczesnego", content: "Refleksje nad współczesną kondycją ludzką", link: "https://dobrepanstwo.org/czlowiek-ktory-zapomnial-miec-tors/" },
        "gdy-ziemia-krzyczy-glosem-ludu": { title: "Gdy Ziemia krzyczy głosem ludu", date: "21 czerwca 2025", summary: "Prawa ludów rdzennych a ochrona środowiska", content: "Analiza znaczenia praw ludów rdzennych", link: "https://dobrepanstwo.org/gdy-ziemia-krzyczy-glosem-ludu/" },
        "zjawisko-alt-right": { title: "Zjawisko Alt-Right: między memem a metapolityką", date: "21 czerwca 2025", summary: "Analiza ruchów politycznych w erze internetu", content: "Badanie zjawiska Alt-Right", link: "https://dobrepanstwo.org/zjawisko-alt-right-miedzy-memem-a-metapolityka/" },
        "zbiorowe-zaprogramowanie-umyslu": { title: "Zbiorowe zaprogramowanie umysłu", date: "21 czerwca 2025", summary: "O wymiarach kultury narodowej według Hofstede", content: "Analiza kulturowych różnic narodowych", link: "https://dobrepanstwo.org/zbiorowe-zaprogramowanie-umyslu-o-wymiarach-kultury-narodowej-wedlug-geerta-hofstede/" },
        "miedzy-echem-a-zwierciadlem": { title: "Między echem a zwierciadłem", date: "21 czerwca 2025", summary: "Esej o percepcji i rzeczywistości", content: "Rozważania o naturze percepcji", link: "https://dobrepanstwo.org/miedzy-echem-a-zwierciadlem/" },
        "dlug-jako-przemoc-uswiecona": { title: "Dług jako przemoc uświęcona", date: "21 czerwca 2025", summary: "Krytyka współczesnego systemu finansowego", content: "Analiza mechanizmów długu i władzy", link: "https://dobrepanstwo.org/dlug-jako-przemoc-uswiecona/" },
        "teoria-chaosu-nauka-zlozonosci": { title: "Teoria chaosu – nauka złożoności i efektu motyla", date: "21 czerwca 2025", summary: "Zastosowanie teorii chaosu w naukach społecznych", content: "Wprowadzenie do teorii chaosu", link: "https://dobrepanstwo.org/teoria-chaosu-nauka-zlozonosci-i-efektu-motyla/" },
        "wszystko-plynie-nieregularnie": { title: "Wszystko płynie nieregularnie", date: "11 czerwca 2025", summary: "Esej o niestabilności współczesnego świata", content: "Analiza procesów zmian społecznych", link: "https://dobrepanstwo.org/wszystko-plynie-nieregularnie/" },
        "utopia-sznurka-pieczatki": { title: "Utopia sznurka, pieczątki i paralizatora", date: "11 czerwca 2025", summary: "Krytyka biurokratyzacji", content: "Analiza patologii biurokratycznych", link: "https://dobrepanstwo.org/utopia-sznurka-pieczatki-i-paralizatora/" },
        "czas-giddensa": { title: "Czas Giddensa", date: "11 czerwca 2025", summary: "O teorii strukturacji Anthony'ego Giddensa", content: "Wprowadzenie do socjologii Giddensa", link: "https://dobrepanstwo.org/czas-giddensa/" },
        "gdy-rynki-zawodza-ludzie-milkna": { title: "Gdy rynki zawodzą, a ludzie milkną", date: "11 czerwca 2025", summary: "O kryzysach ekonomicznych i społecznych", content: "Analiza mechanizmów kryzysowych", link: "https://dobrepanstwo.org/gdy-rynki-zawodza-a-ludzie-milkna/" },
        "osiemnascie-mitow-wykladni-prawa": { title: "Osiemnaście mitów wykładni prawa", date: "11 czerwca 2025", summary: "Krytyka współczesnej jurysprudencji", content: "Analiza problemów w interpretacji prawa", link: "https://dobrepanstwo.org/osiemnascie-mitow-wykladni-prawa/" },
        "czas-jako-wydatek-jednostkowy": { title: "Czas jako wydatek jednostkowy i aksjomat społecznego porządku", date: "11 czerwca 2025", summary: "Filozoficzne ujęcie czasu w kontekście społecznym", content: "Rozważania o naturze czasu społecznego", link: "https://dobrepanstwo.org/czas-jako-wydatek-jednostkowy-i-aksjomat-spolecznego-porzadku/" },
        "w-cieniu-prozniactwa": { title: "W cieniu próżniactwa", date: "11 czerwca 2025", summary: "Esej o pracy i bezczynności", content: "Analiza pojęcia próżniactwa", link: "https://dobrepanstwo.org/w-cieniu-prozniactwa/" },
        "panstwo-nie-wchodzi-do-swiatyni": { title: "Państwo nie wchodzi do świątyni, lecz adres jej zna", date: "10 czerwca 2025", summary: "O relacjach państwo-kościół", content: "Analiza separacji władz", link: "https://dobrepanstwo.org/panstwo-nie-wchodzi-do-swiatyni-lecz-adres-jej-zna/" },
        // Maj 2025 - około 80 postów (skrócona lista kluczowych)
        "adieu-bonzur-kartoflana-kleska": { title: "Adieu, Bonżur, czyli kartoflana klęska", date: "2 czerwca 2025", summary: "Esej o kryzysie kulturowym", content: "Analiza współczesnych przemian kulturowych", link: "https://wbrew.org/adieu-bonzur-czyli-kartoflana-kleska/" },
        "panstwo-prawa-projekt-cywilizacyjny": { title: "Państwo prawa jako projekt cywilizacyjny", date: "31 maja 2025", summary: "O fundamentach prawnego porządku", content: "Analiza koncepcji państwa prawa", link: "https://dobrepanstwo.org/panstwo-prawa-jako-projekt-cywilizacyjny/" },
        "wladza-wiarygodnosc-marchewka": { title: "Władza, wiarygodność i marchewka", date: "31 maja 2025", summary: "Jak wpływać na ludzi i jak się nie dać wpłynąć", content: "Analiza mechanizmów władzy", link: "https://dobrepanstwo.org/wladza-wiarygodnosc-i-marchewka-czyli-jak-wplywac-na-ludzi-i-jak-sie-nie-dac-wplynac/" },
        "wladza-jako-przedmiot-namyslu": { title: "Władza jako przedmiot namysłu", date: "31 maja 2025", summary: "Filozoficzne rozważania o naturze władzy", content: "Teoretyczne ujęcie władzy", link: "https://dobrepanstwo.org/wladza-jako-przedmiot-namyslu/" },
        "symulakra-aksjomat-rzeczywistosci": { title: "Symulakra jako aksjomat rzeczywistości", date: "31 maja 2025", summary: "O naturze współczesnej rzeczywistości", content: "Analiza pojęcia symulakrów", link: "https://dobrepanstwo.org/symulakra-jako-aksjomat-rzeczywistosci/" },
        "dlaczego-ludzkosc-ma-prawo": { title: "Dlaczego ludzkość ma prawo?", date: "31 maja 2025", summary: "Filozoficzne podstawy prawa", content: "Rozważania o źródłach prawa", link: "https://dobrepanstwo.org/dlaczego-ludzkosc-ma-prawo/" },
        "prawo-ponad-prawem": { title: "Prawo ponad prawem", date: "31 maja 2025", summary: "O hierarchii norm prawnych", content: "Analiza systemu prawnego", link: "https://dobrepanstwo.org/prawo-ponad-prawem/" },
        "tyrania-pracy-zniewolenie-systemu": { title: "Tyrania pracy, zniewolenie systemu i granice ludzkiej godności", date: "31 maja 2025", summary: "Krytyka współczesnych form pracy", content: "Analiza alienacji w pracy", link: "https://dobrepanstwo.org/tyrania-pracy-zniewolenie-systemu-i-granice-ludzkiej-godnosci/" },
        "czas-jako-fundament-rzeczywistosci": { title: "Czas jako fundament rzeczywistości", date: "31 maja 2025", summary: "Filozoficzne ujęcie czasu", content: "Rozważania o naturze czasu", link: "https://dobrepanstwo.org/czas-jako-fundament-rzeczywistosci/" },
        "w-cieniu-cyfrowego-swiatla": { title: "W cieniu cyfrowego światła", date: "31 maja 2025", summary: "O wpływie technologii na społeczeństwo", content: "Analiza rewolucji cyfrowej", link: "https://dobrepanstwo.org/w-cieniu-cyfrowego-swiatla/" },
        "swiat-pod-sieciowa-korona": { title: "Świat pod sieciową koroną", date: "31 maja 2025", summary: "O dominacji sieci w życiu społecznym", content: "Analiza społeczeństwa sieciowego", link: "https://dobrepanstwo.org/swiat-pod-sieciowa-korona/" },
        "teoria-interfejsu-percepcji": { title: "Teoria Interfejsu Percepcji", date: "28 maja 2025", summary: "O naturze ludzkiej percepcji", content: "Wprowadzenie do teorii percepcji", link: "https://dobrepanstwo.org/teoria-interfejsu-percepcji/" }
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

    return posts[section]?.[postId] || { title: "Wpis nie znaleziony", date: "", summary: "", content: "Nie udało się odnaleźć tego wpisu.", link: "" };
  };

  const getBackPath = () => {
    switch(section) {
      case 'szkatulka': return '/szkatulka-kosztownosci';
      case 'szczypta': return '/szczypta-soli';
      case 'glosy': return '/glosy-ktore-slychac';
      default: return '/';
    }
  };

  return {
    post: getPostData(),
    section,
    postId,
    getBackPath
  };
};