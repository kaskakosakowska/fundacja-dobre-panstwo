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