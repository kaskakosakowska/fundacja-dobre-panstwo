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
        // CZERWIEC 2025 - wszystkie posty
        "zaufanie-ktore-wiednie": { title: "Zaufanie, które więdnie", date: "29 czerwca 2025", summary: "Esej o kapitale społecznym i erozji zaufania w społeczeństwie", content: "Szczegółowa analiza zjawiska erozji zaufania społecznego w Polsce", link: "https://wbrew.org/kapital-spoleczny-zaufanie/" },
        "total-participation-management": { title: "Total Participation Management (TPM)", date: "29 czerwca 2025", summary: "Zarządzanie pełnią człowieczeństwa w nowoczesnych organizacjach", content: "Kompleksowa analiza nowego modelu zarządzania", link: "https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/" },
        "ekonomiczne-niewolnictwo-xxi-wieku": { title: "Ekonomiczne niewolnictwo XXI wieku", date: "29 czerwca 2025", summary: "Głos prekariatu przeciw outsourcingowi", content: "Dogłębna analiza zjawiska prekariatu", link: "https://wbrew.org/prekariat-vs-outsourcing/" },
        "wzorzec-ktory-marzy": { title: "Wzorzec, który marzy", date: "29 czerwca 2025", summary: "Esej o osobliwości i tożsamości", content: "Analiza wzorców osobowościowych w kontekście współczesnej kultury", link: "https://wbrew.org/wzorzec-osobliwosc-tozsamosc/" },
        "zderegulujmy-rzecznika-msp": { title: "Zderegulujmy Rzecznika MŚP", date: "27 czerwca 2025", summary: "O redukcji fikcji dialogu w administracji", content: "Krytyczna ocena instytucji Rzecznika MŚP", link: "https://wbrew.org/zderegulujmy-rzecznika-msp-zredukujmy-fikcje-dialogu/" },
        "zanim-kultura-sie-wydarzy": { title: "Zanim kultura się wydarzy", date: "21 czerwca 2025", summary: "Trzy przeszkody epistemiczne w kulturze", content: "Rozważania o przeszkodach w rozwoju kultury współczesnej", link: "https://dobrepanstwo.org/zanim-kultura-sie-wydarzy/" },
        "czlowiek-ktory-zapomnial-miec-tors": { title: "Człowiek, który zapomniał mieć tors", date: "21 czerwca 2025", summary: "Esej o kondycji człowieka współczesnego", content: "Refleksje nad współczesną kondycją ludzką", link: "https://dobrepanstwo.org/czlowiek-ktory-zapomnial-miec-tors/" },
        "gdy-ziemia-krzyczy-glosem-ludu": { title: "Gdy Ziemia krzyczy głosem ludu", date: "21 czerwca 2025", summary: "Prawa ludów rdzennych a ochrona środowiska", content: "Analiza znaczenia praw ludów rdzennych", link: "https://dobrepanstwo.org/gdy-ziemia-krzyczy-glosem-ludu/" },
        "zjawisko-alt-right": { title: "Zjawisko Alt-Right: między memem a metapolityką", date: "21 czerwca 2025", summary: "Analiza ruchów politycznych w erze internetu", content: "Szczegółowe badanie zjawiska Alt-Right", link: "https://dobrepanstwo.org/zjawisko-alt-right-miedzy-memem-a-metapolityka/" },
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
        
        // MAJ 2025 - wszystkie ~80 postów
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
        "teoria-interfejsu-percepcji": { title: "Teoria Interfejsu Percepcji", date: "28 maja 2025", summary: "O naturze ludzkiej percepcji", content: "Wprowadzenie do teorii percepcji", link: "https://dobrepanstwo.org/teoria-interfejsu-percepcji/" },
        "analiza-inwestycji-publicznych": { title: "Analiza inwestycji publicznych podnoszących jakość życia", date: "24 maja 2025", summary: "O efektywności inwestycji publicznych", content: "Badanie wpływu inwestycji publicznych", link: "https://dobrepanstwo.org/analiza-inwestycji-publicznych-podnoszacych-jakosc-zycia/" },
        "koniec-praw-poczatek-praw": { title: "Koniec praw, początek praw", date: "24 maja 2025", summary: "O przemianach w systemie prawnym", content: "Analiza transformacji systemu prawnego", link: "https://dobrepanstwo.org/koniec-praw-poczatek-praw/" },
        "paradygmat-ku-samozatrudnieniu": { title: "Paradygmat ku samozatrudnieniu?", date: "24 maja 2025", summary: "O trendach w rynku pracy", content: "Analiza przesunięcia ku samozatrudnieniu", link: "https://dobrepanstwo.org/paradygmat-ku-samozatrudnieniu/" },
        "na-smyczy-zysku-tancu-wartosci": { title: "Na smyczy zysku, czy w tańcu wartości", date: "24 maja 2025", summary: "O dylematach współczesnego biznesu", content: "Rozważania o konflikcie zysk vs wartości", link: "https://dobrepanstwo.org/na-smyczy-zysku-czy-w-tancu-wartosci/" },
        "struktury-ramy-oczekiwania-tabu": { title: "Struktury, ramy, oczekiwania, tabu", date: "24 maja 2025", summary: "O społecznych ramach zachowań", content: "Analiza społecznych struktur", link: "https://dobrepanstwo.org/struktury-ramy-oczekiwania-tabu/" },
        "wspolczesna-teologia-biznesu": { title: "Współczesna teologia biznesu", date: "24 maja 2025", summary: "O duchowych aspektach ekonomii", content: "Rozważania o etycznych wymiarach gospodarki", link: "https://dobrepanstwo.org/wspolczesna-teologia-biznesu/" },
        "w-strone-antropologii-interesow": { title: "W stronę antropologii interesów", date: "24 maja 2025", summary: "O ludzkich motywacjach", content: "Antropologiczna analiza motywacji", link: "https://dobrepanstwo.org/w-strone-antropologii-interesow/" },
        "zaufanie-czas-normy-relacyjne": { title: "Zaufanie, czas i normy relacyjne", date: "24 maja 2025", summary: "O podstawach relacji społecznych", content: "Analiza fundamentów zaufania", link: "https://dobrepanstwo.org/zaufanie-czas-i-normy-relacyjne/" },
        "wspolnie-wiecej-niz-dlon-palcow": { title: "Wspólnie to więcej niż dłoń ma palców", date: "24 maja 2025", summary: "O sile współpracy", content: "Rozważania o znaczeniu współpracy", link: "https://dobrepanstwo.org/wspolnie-to-wiecej-niz-dlon-ma-palcow/" },
        "analiza-modeli-biznesowych": { title: "Analiza modeli biznesowych — współcześnie", date: "24 maja 2025", summary: "O ewolucji biznesu", content: "Przegląd współczesnych modeli biznesowych", link: "https://dobrepanstwo.org/analiza-modeli-biznesowych-wspolczesnie/" },
        "zaufanie-po-polsku": { title: "Zaufanie po polsku, czyli jak przestałem się bać i pokochałem państwo (ale tylko na chwilę)", date: "24 maja 2025", summary: "O polskim kapitale społecznym", content: "Ironiczna analiza zaufania w Polsce", link: "https://dobrepanstwo.org/zaufanie-po-polsku-czyli-jak-przestalem-sie-bac-i-pokochalem-panstwo-ale-tylko-na-chwile/" },
        "ludzka-nie-ludzka-rzeczywistosc": { title: "Ludzka-nie-ludzka rzeczywistość", date: "24 maja 2025", summary: "O naturze rzeczywistości", content: "Filozoficzne rozważania o granicy ludzkiego", link: "https://dobrepanstwo.org/ludzka-nie-ludzka-rzeczywistosc/" },
        "dlaczego-istnieja-politycy": { title: "Dlaczego istnieją politycy i jaką rolę odgrywają w społeczeństwie?", date: "24 maja 2025", summary: "O naturze polityki", content: "Analiza roli polityków w demokracji", link: "https://dobrepanstwo.org/dlaczego-istnieja-politycy-i-jaka-role-odgrywaja-w-spoleczenstwie/" },
        "etyka-globalnego-interesu-cz2": { title: "Etyka globalnego interesu. Cz. 2", date: "24 maja 2025", summary: "Kontynuacja rozważań etycznych", content: "Druga część analizy etyki globalizacji", link: "https://dobrepanstwo.org/etyka-globalnego-interesu-cz-2/" },
        "etyka-globalnego-interesu-cz1": { title: "Etyka globalnego interesu. Cz. 1", date: "24 maja 2025", summary: "O etyce w czasach globalizacji", content: "Pierwsza część analizy etycznych wyzwań", link: "https://dobrepanstwo.org/etyka-globalnego-interesu-cz-1/" },
        "o-strukturze-relacji-dystynkcji": { title: "O strukturze, relacji i dystynkcji.", date: "18 maja 2025", summary: "Filozofia struktury społecznej", content: "Teoretyczna analiza struktur społecznych", link: "https://dobrepanstwo.org/o-strukturze-relacji-i-dystynkcji/" },
        "dlaczego-wladza-oszukuje-suwerena": { title: "Dlaczego władza oszukuje suwerena?", date: "18 maja 2025", summary: "O manipulacji politycznej", content: "Analiza mechanizmów dezinformacji", link: "https://dobrepanstwo.org/dlaczego-wladza-oszukuje-suwerena/" },
        "czas-osobisty-fundament-dobra": { title: "Czas osobisty, czyli powiastka o niewidzialnym fundamencie dobra wspólnego.", date: "18 maja 2025", summary: "O czasie jako wartości", content: "Rozważania o roli czasu osobistego", link: "https://dobrepanstwo.org/czas-osobisty-czyli-powiastka-o-niewidzialnym-fundamencie-dobra-wspolnego/" },
        "krolestwo-stolca-roboty-glupiego": { title: "Królestwo Stolca i Roboty Głupiego, czyli jak politycy uprawiają turpistyczną alchemię z ludzkiego sensu", date: "18 maja 2025", summary: "Krytyka polityki", content: "Satyryczna analiza współczesnej polityki", link: "https://dobrepanstwo.org/krolestwo-stolca-i-roboty-glupiego-czyli-jak-politycy-uprawiaja-turpistyczna-alchemie-z-ludzkiego-sensu/" },
        "demokracja-po-trzeciej-transformacji": { title: "Demokracja po Trzeciej Transformacji", date: "18 maja 2025", summary: "O przyszłości demokracji", content: "Analiza przemian demokratycznych", link: "https://dobrepanstwo.org/demokracja-po-trzeciej-transformacji/" },
        "charakter-spoleczny-wzorzec-psychiczny": { title: "Charakter społeczny jako wzorzec psychiczny ładu, czyli od tradycji do radaru.", date: "18 maja 2025", summary: "O charakterze narodowym", content: "Socjologiczna analiza charakteru społecznego", link: "https://dobrepanstwo.org/charakter-spoleczny-jako-wzorzec-psychiczny-ladu-czyli-od-tradycji-do-radaru/" },
        "gdy-maszyny-snia-o-czlowieku": { title: "Gdy maszyny śnią o człowieku", date: "13 maja 2025", summary: "O relacji człowiek-maszyna", content: "Filozoficzne rozważania o przyszłości AI", link: "https://dobrepanstwo.org/gdy-maszyny-snia-o-czlowieku/" },
        "obserwator-ograniczenie-warunek": { title: "Obserwator jako ograniczenie i warunek poznania", date: "13 maja 2025", summary: "Epistemologia obserwacji", content: "Filozoficzna analiza roli obserwatora", link: "https://dobrepanstwo.org/obserwator-jako-ograniczenie-i-warunek-poznania/" },
        "transgresje-formy-wladzy-wspolnoty": { title: "Transgresje formy, władzy i wspólnoty w epoce cyfrowej. O adaptacji.", date: "13 maja 2025", summary: "O zmianach w erze cyfrowej", content: "Analiza przemian społecznych", link: "https://dobrepanstwo.org/transgresje-formy-wladzy-i-wspolnoty-w-epoce-cyfrowej-o-adaptacji/" },
        "miedzy-perswazja-manipulacja": { title: "Między perswazją a manipulacją, między człowieczeństwem a automatyzmem.", date: "13 maja 2025", summary: "O granicy perswazji", content: "Analiza różnicy perswazja vs manipulacja", link: "https://dobrepanstwo.org/miedzy-perswazja-a-manipulacja-miedzy-czlowieczenstwem-a-automatyzmem/" },
        "ostatni-czlowiek-patrzy-w-gore": { title: "Ostatni człowiek patrzy w górę.", date: "9 maja 2025", summary: "O przyszłości człowieczeństwa", content: "Rozważania o kondycji człowieka w erze AI", link: "https://dobrepanstwo.org/ostatni-czlowiek-patrzy-w-gore/" },
        "wieczyste-wspomnienie-wieksze-glowy": { title: "Wieczyste wspomnienie i większe głowy", date: "9 maja 2025", summary: "O pamięci i inteligencji", content: "Analiza znaczenia pamięci i inteligencji", link: "https://dobrepanstwo.org/wieczyste-wspomnienie-i-wieksze-glowy/" },
        "zaposredniczone-ja-medytacja": { title: "Zapośredniczone JA - medytacja o człowieku w epoce cyfrowych mirakli", date: "9 maja 2025", summary: "O tożsamości cyfrowej", content: "Filozoficzna medytacja o kondycji człowieka", link: "https://dobrepanstwo.org/zaposredniczone-ja-medytacja-o-czlowieku-w-epoce-cyfrowych-mirakli/" },
        "nieobliczalny-promien-swiadomosci": { title: "Nieobliczalny Promień Świadomości", date: "9 maja 2025", summary: "O naturze świadomości", content: "Filozoficzne rozważania o świadomości", link: "https://dobrepanstwo.org/nieobliczalny-promien-swiadomosci/" },
        "niewidzialni-przy-stole": { title: "Niewidzialni przy stole. Kogo nie ma w dialogu społecznym i dlaczego", date: "4 maja 2025", summary: "O wykluczeniu z dialogu", content: "Analiza grup wykluczonych z debaty", link: "https://dobrepanstwo.org/niewidzialni-przy-stole-kogo-nie-ma-w-dialogu-spolecznym-i-dlaczego/" },
        "elastycznosc-bez-zobowiazan": { title: "Elastyczność bez zobowiązań. O pozornych wolnościach deregulowanego rynku", date: "4 maja 2025", summary: "Krytyka elastycznego rynku pracy", content: "Analiza konsekwencji deregulacji", link: "https://dobrepanstwo.org/elastycznosc-bez-zobowiazan-o-pozornych-wolnosciach-deregulowanego-rynku/" },
        "w-cieniu-zlecenia": { title: "W cieniu zlecenia. Państwo i ekonomika umywania rąk", date: "4 maja 2025", summary: "O odpowiedzialności państwa", content: "Krytyka mechanizmów umywania rąk", link: "https://dobrepanstwo.org/w-cieniu-zlecenia-panstwo-i-ekonomika-umywania-rak/" },
        "prawo-ktore-nie-dziala": { title: "Prawo, które nie działa, bo nie rozumie, co się dzieje. O widmowości norm i rzeczywistości pracy poza systemem", date: "4 maja 2025", summary: "O nieadekwatności prawa", content: "Analiza rozbieżności prawo vs rzeczywistość", link: "https://dobrepanstwo.org/prawo-ktore-nie-dziala-bo-nie-rozumie-co-sie-dzieje-o-widmowosci-norm-i-rzeczywistosci-pracy-poza-systemem/" },
        "o-martwej-maszynerii": { title: "O martwej maszynerii. Jak prawo pracy rozmija się z rzeczywistością", date: "4 maja 2025", summary: "O dysfunkcjach prawa pracy", content: "Krytyczna analiza polskiego prawa pracy", link: "https://dobrepanstwo.org/o-martwej-maszynerii-jak-prawo-pracy-rozmija-sie-z-rzeczywistoscia/" },
        "poza-radarem": { title: "Poza radarem. O prawie, które nie widzi ludzi pracy", date: "4 maja 2025", summary: "O niewidzialności prekariatu", content: "Analiza problemów prawnych", link: "https://dobrepanstwo.org/poza-radarem-o-prawie-ktore-nie-widzi-ludzi-pracy/" },
        "nowy-porzadek-feudalny": { title: "Nowy porządek feudalny. O degradacji pracy i znikających ludziach", date: "4 maja 2025", summary: "O neofeudalizmie", content: "Analiza współczesnych form eksploatacji", link: "https://dobrepanstwo.org/nowy-porzadek-feudalny-o-degradacji-pracy-i-znikajacych-ludziach/" },
        "nietypowosc-jako-mit": { title: "Nietypowość jako mit. O nowej pracy i słowniku udawanej wolności", date: "4 maja 2025", summary: "Demistyfikacja elastycznej pracy", content: "Krytyczna analiza retoryki elastyczności", link: "https://dobrepanstwo.org/nietypowosc-jako-mit-o-nowej-pracy-i-slowniku-udawanej-wolnosci/" }
      },
      szczypta: {
        "wzmacnianie-csr-biznesu": { title: "Wzmacnianie Społecznej Odpowiedzialności Biznesu", date: "30 września 2024", summary: "Strategiczne partnerstwa z interesariuszami", content: "Kompleksowa analiza znaczenia ESG w nowoczesnym biznesie", link: "https://dobrepanstwo.org/wzmacnianie-spolecznej-odpowiedzialnosci-biznesu/" },
        "poprawa-wskaznikow-esg": { title: "Poprawa wskaźników ESG w przestrzeni SOCIAL jest najtańsza!", date: "29 września 2024", summary: "Analiza OZZS WBREW dotycząca ESG", content: "Szczegółowe badanie najefektywniejszych inwestycji ESG", link: "https://wbrew.org/poprawa-wskaznikow-esg-w-przestrzeni-social-jest-najtansza/" },
        "zawod-ksiadz-praca-czy-fikcja": { title: "Zawód Ksiądz – Niebiańska Praca czy Państwowa Fikcja?", date: "27 września 2024", summary: "Fact-check statusu prawnego duchownych", content: "Dogłębna weryfikacja statusu prawnego księży", link: "https://dobrepanstwo.org/zawod-ksiadz-niebianska-praca-czy-panstwowa-fikcja/" },
        "ludzi-to-obchodzi": { title: "Ludzi to obchodzi", date: "16 września 2024", summary: "Weryfikacja twierdzeń o braku zainteresowania obywateli", content: "Szczegółowa analiza zaangażowania obywatelskiego", link: "https://dobrepanstwo.org/ludzi-to-obchodzi/" },
        "nie-kneblujmy-ksiegowych": { title: "Nie kneblujmy księgowych!", date: "22 sierpnia 2024", summary: "Fact-check przepisów o tajemnicy zawodowej księgowych", content: "Analiza regulacji prawnych księgowych", link: "https://dobrepanstwo.org/nie-kneblujmy-ksiegowych/" },
        "bezpieczna-zywnosc": { title: "Bezpieczna żywność", date: "18 lipca 2024", summary: "Weryfikacja danych o bezpieczeństwie żywności", content: "Kompleksowy przegląd bezpieczeństwa żywnościowego", link: "https://dobrepanstwo.org/bezpieczna-zywnosc/" },
        "po-co-az-560": { title: "Po co aż 560? Wystarczy kilkoro, ale umocowanych", date: "20 lipca 2024", summary: "Fact-check argumentów za zmniejszeniem liczby parlamentarzystów", content: "Szczegółowa analiza porównawcza systemów parlamentarnych", link: "https://dobrepanstwo.org/po-co-az-560-wystarczy-kilkoro-ale-umocowanych/" },
        "po-co-nam-cisza-wyborcza": { title: "Po co nam ta cisza (wyborcza)?", date: "10 czerwca 2024", summary: "Weryfikacja uzasadnień dla ciszy wyborczej", content: "Fact-check argumentów za utrzymaniem ciszy wyborczej", link: "https://dobrepanstwo.org/po-co-nam-ta-cisza-wyborcza/" }
      },
      glosy: {
        "straszna-dwukadencyjnosc-petycja": { title: "Straszna dwukadencyjność - petycja Fundacji Dobre Państwo", date: "16 lipca 2024", summary: "Petycja dotycząca ograniczenia kadencji parlamentarzystów", content: "Obywatelska inicjatywa mająca na celu wprowadzenie ograniczeń kadencyjnych", link: "https://dobrepanstwo.org/straszna-dwukadencyjnosc-petycja-fundacji-dobre-panstwo/" },
        "trojka-do-wyboru-petycja": { title: "Trójka do wyboru - petycja Fundacji Dobre Państwo", date: "16 lipca 2024", summary: "Petycja w sprawie reformy systemu wyborczego", content: "Obywatelska propozycja zmiany ordynacji wyborczej", link: "https://dobrepanstwo.org/trojka-do-wyboru-petycja-fundacji-dobre-panstwo/" },
        "policzmy-kosciol-petycja": { title: "Policzmy Kościół - petycja", date: "1 kwietnia 2024", summary: "Petycja o transparentność finansów kościelnych", content: "Obywatelska inicjatywa domagająca się transparentności", link: "https://dobrepanstwo.org/policzmy-kosciol-petycja/" },
        "koniec-abonamentu-rtv-petycja": { title: "Koniec abonamentu RTV - petycja", date: "1 kwietnia 2024", summary: "Petycja w sprawie likwidacji abonamentu RTV", content: "Obywatelska inicjatywa dotycząca zniesienia abonamentu", link: "https://dobrepanstwo.org/koniec-abonamentu-rtv-petycja/" },
        "gospodynie-miejskie-petycja": { title: "Gospodynie Miejskie - petycja", date: "1 kwietnia 2024", summary: "Petycja w sprawie bezpłatnych toalet publicznych", content: "Obywatelska inicjatywa o dostępie do toalet", link: "https://dobrepanstwo.org/gospodynie-miejskie-petycja/" },
        "konferencja-na-zawolanie-petycja": { title: "Konferencja na zawołanie - petycja", date: "1 kwietnia 2024", summary: "Petycja o obowiązkowe konferencje parlamentarzystów", content: "Obywatelska propozycja zwiększenia transparentności", link: "https://dobrepanstwo.org/konferencja-na-zawolanie-petycja/" },
        "petycja-z-konikiem": { title: "Petycja z konikiem", date: "5 marca 2024", summary: "Obywatelska inicjatywa dotycząca terenów zielonych", content: "Kompleksowa petycja o poprawę jakości życia w miastach", link: "https://dobrepanstwo.org/petycja-z-konikiem/" },
        "petycja-kodeks-cywilny": { title: "Petycja w sprawie zmiany Kodeksu cywilnego", date: "1 lutego 2024", summary: "Petycja dotycząca modernizacji prawa cywilnego", content: "Obywatelska inicjatywa dostosowania prawa", link: "https://dobrepanstwo.org/petycja-w-sprawie-zmiany-kodeksu-cywilnego/" }
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