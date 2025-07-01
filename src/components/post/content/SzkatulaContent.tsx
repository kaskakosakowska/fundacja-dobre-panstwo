import { Post } from "@/hooks/usePostData";
import zaufanieImage from "@/assets/images/zaufanie-ktore-wiednie.webp";
import tpmImage from "@/assets/images/total-participation-management.webp";
import ekonomiczneImage from "@/assets/images/ekonomiczne-niewolnictwo.webp";
import rzecznikImage from "@/assets/images/zderegulujmy-rzecznika.png";
import ziemiaImage from "@/assets/images/gdy-ziemia-krzyczy.png";

interface SzkatulaContentProps {
  post: Post;
  postId: string | undefined;
}

export const SzkatulaContent = ({ post, postId }: SzkatulaContentProps) => {
  switch (postId) {
    case 'zaufanie-ktore-wiednie':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O kapitale społecznym i zdradzie wspólnoty
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={zaufanieImage} 
              alt="Kapitał społeczny i zaufanie" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            W społeczeństwach pozbawionych zaufania nie ma niczego stabilnego. Ani polityki, ani deliberacji, ani nawet dobrego sąsiedztwa. Kapitał społeczny, choć brzmi jak ekonomiczny żargon wciśnięty w ramy kultury, jest jednym z najważniejszych wskaźników zdrowia społecznego. To zasób niewidzialny, lecz wszechobecny – konstytuuje to, co wspólne, pozwala działać razem, uczy współodpowiedzialności.
          </p>
          <p className="mt-12 mb-6 text-justify">
            Gdy słabnie, rozpada się nie tylko więź międzyludzka, ale i sama zdolność do życia zbiorowego. A tam, gdzie życie zbiorowe zamiera, polityka zamienia się w zarządzanie nieufnością.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Między mostem a fortyfikacją – natura kapitału społecznego
          </h3>
          <p className="mb-4 text-justify">
            Kapitał społeczny to sieć wzajemnych powiązań, norm, wzorców współpracy i, przede wszystkim, zaufania – zarówno wobec znanych, jak i nieznajomych. Można powiedzieć: to metafizyczna infrastruktura nowoczesności, bez której żadna wspólnota nie utrzyma się dłużej niż do najbliższego kryzysu.
          </p>
          <p className="mb-6 text-justify">
            W teorii socjologicznej wyróżnia się dwa podstawowe typy kapitału społecznego: <strong>spajający</strong> (bonding) i <strong>łączący</strong> (bridging). Pierwszy działa jak fortyfikacja – tworzy silne, homogeniczne więzi wewnątrz grupy, podtrzymuje lojalność i tożsamość. Drugi – to most, konstrukcja łącząca różne grupy, otwarta i inkluzywna. Oba typy są potrzebne, lecz ich równowaga decyduje o zdolności wspólnoty do adaptacji i dialogu.
          </p>
        </div>
      );

    case 'total-participation-management':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Filozoficzne korzenie TPM
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={tpmImage} 
              alt="Total Participation Management" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            Total Participation Management wyrasta z personalizmu Emmanuela Mouniera, Karola Wojtyły i Jacques'a Maritaina, dla których osoba ludzka jest celem samym w sobie. W duchu dialogicznej antropologii Martina Bubera uczestnictwo stanowi warunek realizacji ludzkiej wolności, a nie jedynie technikę zarządzania.
          </p>
          <p className="mt-12 mb-6 text-justify">
            TPM czerpie również z krytyki alienacji pracy u Karola Marksa oraz z koncepcji <em>learning organization</em> Petera Senge'a, podkreślając, że wiedza rodzi się w relacji, nie w izolacji.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Ekonomiczne inspiracje
          </h3>
          <p className="mb-6">
            Koncepcja łączy teorię dóbr wspólnych Elinor Ostrom, ekonomikę możliwości Amartyi Sena i myśl Josepha Schumpetera o endogenicznej innowacji. TPM odrzuca redukowanie pracy do kosztu, wpisując się w postgrowth economics i ekonomię partycypacyjną, gdzie wartość powstaje dzięki współodpowiedzialności i sensowi działania.
          </p>
        </div>
      );

    case 'wzorzec-ktory-marzy':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O osobliwości i tożsamości we współczesnym świecie
          </h2>
          <p className="mb-4 text-justify">
            Wzorzec nie jest już dziś tym, czym był wczoraj. W świecie, gdzie wszystko staje się płynne, zmienne i nieprzewidywalne, pytanie o to, co stanowi wzorzec, nabiera szczególnej wagi. Czy można mówić o wzorcu w epoce, która celebruje różnorodność i odrzuca uniwersalia?
          </p>
          <p className="mb-6 text-justify">
            Współczesny wzorzec to paradoks: ma być jednocześnie unikalny i uniwersalny, osobliwy i powszechny, autentyczny i atrakcyjny dla mas. To wzorzec, który marzy o byciu wzorcem, ale boi się własnej normatywności.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Tożsamość jako projekt
          </h3>
          <p className="mb-6 text-justify">
            W epoce tożsamości projektowanych, konstruowanych i rekonstruowanych, wzorzec przestaje być zewnętrznym punktem odniesienia, a staje się wewnętrznym kompasem. Już nie naśladujemy wzorców – tworzymy je. Każdy jest swoim własnym wzorcem, swoją własną marką, swoim własnym projektem tożsamościowym.
          </p>
        </div>
      );

    case 'zanim-kultura-sie-wydarzy':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Trzy przeszkody epistemiczne w kulturze
          </h2>
          <p className="mb-4 text-justify">
            Zanim kultura się wydarzy, musi przejść przez trzy fundamentalne przeszkody epistemiczne, które określają możliwości i granice jej zaistnienia. Te przeszkody to nie tylko teoretyczne bariery, lecz konkretne mechanizmy, które decydują o tym, jakie formy kulturowe mogą się rozwinąć, a jakie skazane są na marginalizację lub zapomnienie.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Pierwsza przeszkoda: Legitymizacja
          </h3>
          <p className="mb-4 text-justify">
            Każde zjawisko kulturowe musi najpierw uzyskać społeczne uznanie za "kulturę". To proces legitymizacji, który decyduje o tym, co liczy się jako wartościowe, a co pozostaje w sferze rozrywki, folkloru lub subkultury.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Druga przeszkoda: Instytucjonalizacja
          </h3>
          <p className="mb-4 text-justify">
            Kultura potrzebuje struktur, które umożliwią jej reprodukcję i przekaz. Instytucje kulturalne, system edukacji, media – to kanały, przez które kultura się rozprzestrzenia lub... ginie.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Trzecia przeszkoda: Komercjalizacja
          </h3>
          <p className="mb-6 text-justify">
            Współczesna kultura musi zmierzyć się z logiką rynku. Pytanie brzmi: czy może zachować swoją autonomię, czy zostanie zredukowana do produktu konsumpcyjnego?
          </p>
        </div>
      );

    case 'czlowiek-ktory-zapomnial-miec-tors':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O kondycji człowieka współczesnego
          </h2>
          <p className="mb-4 text-justify">
            Człowiek współczesny to człowiek, który zapomniał mieć tors. Nie w sensie anatomicznym – jego klatka piersiowa nadal łączy głowę z biodrami – lecz w sensie egzystencjalnym. Tors to centrum, punkt ciężkości, miejsce, gdzie mieszka oddech, serce, intuicja. To tam, gdzie ciało staje się czymś więcej niż sumą organów.
          </p>
          <p className="mb-6 text-justify">
            Współczesna kultura przeniosła ciężar ludzkiego doświadczenia do głowy i do ekranów. Myślimy, że jesteśmy tym, co myślimy, i tym, co widzimy na monitorach. Zapomnieliśmy, że jesteśmy też tym, co czujemy w brzuchu, co podpowiada nam instynkt, co objawia się w rytmie oddechu.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Antropologia cyfrowa
          </h3>
          <p className="mb-4 text-justify">
            W epoce cyfrowej człowiek staje się interfejsem między światem fizycznym a cyfrowym. Jego ciało zostaje zredukowane do rąk poruszających myszkę i oczu śledzących ekran. Tors – centrum ciała i emocji – zostaje wykluczony z tego nowego sposobu bycia.
          </p>
          <p className="mb-6 text-justify">
            Pytanie brzmi: czy możemy odzyskać tors, nie rezygnując z dobrodziejstw cyfrowego świata? Czy istnieje droga powrotu do pełnej cielesności w epoce wirtualnej rzeczywistości?
          </p>
        </div>
      );

    case 'kryzys-kompetencji':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Niekompetencja jako strategia polityczna
          </h2>
          <p className="mb-4 text-justify">
            W nowoczesnej polityce niekompetencja przestała być wadą – stała się strategią. Politycy celowo demonstrują brak wiedzy, by uniknąć odpowiedzialności za niepopularne decyzje. "Nie wiedziałem" brzmi lepiej niż "świadomie zignorowałem".
          </p>
          <p className="mb-6 text-justify">
            Ten mechanizm działa dwutorowo: z jednej strony tworzy alibi dla błędów w zarządzaniu, z drugiej strony buduje pozorną bliskość z wyborcami, którzy "też nie są ekspertami". Kryzys kompetencji to nie przypadek, lecz przemyślana strategia polityczna degradacji standardów publicznego zarządzania.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Ekspertyza jako zagrożenie
          </h3>
          <p className="mb-4 text-justify">
            Współczesny populizm przekształcił kompetencję w podejrzaną kategorię. Ekspert to już nie autorytet, lecz przedstawiciel "elit", które są oderwane od "prawdziwego życia". Ta retoryka pozwala politykom ignorować niewygodne fakty i rekomendacje specjalistów.
          </p>
          <p className="mb-6 text-justify">
            Efekt jest dramatyczny: decyzje publiczne podejmowane są na podstawie intuicji, ideologii lub kalkulacji politycznej, a nie na podstawie wiedzy i analizy. Społeczeństwo płaci cenę za tę strategiczną niekompetencję.
          </p>
        </div>
      );

    case 'panstwo-jako-program':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Algorytmizacja życia publicznego
          </h2>
          <p className="mb-4 text-justify">
            Współczesne państwo coraz bardziej przypomina wielki program komputerowy, w którym obywatele stają się użytkownikami, a administracja – zestawem algorytmów. E-usługi, cyfryzacja procesów i automatyzacja decyzji administracyjnych to pozornie neutralne narzędzia modernizacji.
          </p>
          <p className="mb-6 text-justify">
            Jednak za fasadą efektywności kryje się fundamentalna zmiana w relacji państwo-obywatel. Zamiast dialogu mamy interfejs, zamiast dyskrecjonalności urzędniczej – sztywną logikę algorytmu. Państwo-program nie zna wyjątków, nie rozumie kontekstu, nie bierze pod uwagę ludzkich dramatów. Jest sprawne, ale nie jest mądre.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Biurokracja 2.0
          </h3>
          <p className="mb-4 text-justify">
            Algorytmiczna administracja tworzy nową formę biurokracji – bardziej sprawną, ale również bardziej nieludzką. Decyzje podejmowane są szybko i "obiektywnie", ale tracą wymiar etyczny i społeczny.
          </p>
          <p className="mb-6 text-justify">
            Obywatel staje się zbiorem danych, a jego potrzeby i problemy – parametrami w systemie. To fundamentalna degradacja idei obywatelskości i demokracji.
          </p>
        </div>
      );

    case 'kultura-jako-substancja':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Kultura nie jest ozdobą, lecz fundamentem
          </h2>
          <p className="mb-4 text-justify">
            W dobie instrumentalizacji wszystkiego kultura często jest traktowana jako ozdoba, dodatek do "prawdziwych" spraw gospodarczych i politycznych. To błąd – kultura to nie ornament na torcie cywilizacji, lecz jej fundament. To ona określa, jak myślimy o sprawiedliwości, władzy, wspólnocie.
          </p>
          <p className="mb-6 text-justify">
            Gdy traktujemy kulturę jak dodatek, degradujemy ją do rozrywki i konsumpcji. Tymczasem kultura to żywa tkanina sensów, która umożliwia społeczeństwu rozumienie samego siebie. Bez kultury jako substancji wspólnoty nie ma demokracji deliberacyjnej, nie ma również zrównoważonego rozwoju.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Kultura a polityka
          </h3>
          <p className="mb-4 text-justify">
            Polityka bez kultury to technika zarządzania. Kultura bez polityki to estetyczny eskapizm. Obie potrzebują siebie nawzajem, by tworzyć przestrzeń dla pełnego rozwoju człowieka i wspólnoty.
          </p>
          <p className="mb-6 text-justify">
            Dlatego inwestycje w kulturę to nie luksus, lecz konieczność. To inwestycje w jakość myślenia, wrażliwość, zdolność do dialogu i krytycznego namysłu. To fundament każdej żywotnej demokracji.
          </p>
        </div>
      );

    case 'zjawisko-alt-right':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Między memem a metapolityką
          </h2>
          <p className="mb-4 text-justify">
            Alt-Right to zjawisko, które wymyka się tradycyjnym kategoriom politycznym. To ruch, który narodził się w internetowych otchłaniach, żywi się memami i ironia, ale prowadzi do realnych konsekwencji politycznych. To polityka post-ideologiczna, która paradoksalnie jest głęboko ideologiczna.
          </p>
          <p className="mb-6 text-justify">
            W sercu Alt-Right leży przekonanie, że tradycyjna polityka to teatr, a prawdziwa władza realizuje się przez kulturę. Stąd fascynacja metapolityką - strategią zmiany społecznej przez przemianę kulturową, która ma poprzedzać i umożliwić przemianę polityczną.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Mem jako broń polityczna
          </h3>
          <p className="mb-6 text-justify">
            Alt-Right odkryła potencjał memów jako narzędzi politycznych. Mem to nie tylko żart - to skondensowana forma kulturowej inżynierii, która może wpływać na sposób myślenia i postrzegania rzeczywistości. Przez ironie i prowokację Alt-Right udało się przeniknąć do mainstreamu i wpłynąć na dyskurs publiczny.
          </p>
        </div>
      );

    case 'zbiorowe-zaprogramowanie-umyslu':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O wymiarach kultury narodowej według Hofstede
          </h2>
          <p className="mb-4 text-justify">
            Geert Hofstede rewolucjonizował nasze rozumienie różnic kulturowych, wprowadzając koncepcję "zbiorowego zaprogramowania umysłu". Według niego, kultura narodowa to mentalne oprogramowanie, które różnicuje grupy i społeczeństwa.
          </p>
          <p className="mb-6 text-justify">
            Hofstede wyróżnił sześć wymiarów kultury: dystans władzy, unikanie niepewności, indywidualizm vs kolektywizm, męskość vs kobiecość, orientacja długoterminowa oraz pobłażliwość. Te wymiary wyjaśniają, dlaczego różne społeczeństwa funkcjonują inaczej.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Kulturowa mapa świata
          </h3>
          <p className="mb-6 text-justify">
            Teoria Hofstede tworzy kulturową mapę świata, która pomaga zrozumieć różnice w zarządzaniu, polityce, edukacji czy relacjach międzyludzkich. To narzędzie, które umożliwia świadome nawigowanie w zglobalizowanym świecie.
          </p>
        </div>
      );

    case 'miedzy-echem-a-zwierciadlem':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Esej o percepcji i rzeczywistości
          </h2>
          <p className="mb-4 text-justify">
            Między echem a zwierciadłem rozgrywa się dramat ludzkiej percepcji. Echo to dźwięk, który powraca do nas zniekształcony przez przestrzeń i czas. Zwierciadło to obraz, który odbija się w nas, ale odwrócony i pozbawiony głębi. Obie metafory mówią o tym samym: o niemożliwości bezpośredniego dostępu do rzeczywistości.
          </p>
          <p className="mb-6 text-justify">
            Człowiek skazany jest na pośrednictwo swoich zmysłów, języka, kultury. Nie doświadczamy świata bezpośrednio - doświadczamy jego interpretacji, przekładów, reprezentacji. Pytanie brzmi: czy w tej grze odbić i ech możemy się jeszcze przybliżyć do prawdy?
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Epistemologia cienia
          </h3>
          <p className="mb-6 text-justify">
            Platońska jaskinia nadal jest aktualną metaforą ludzkiej kondycji. Widzimy cienie na ścianie i bierzemy je za rzeczywistość. Ale czy wyjście z jaskini oznacza dotarcie do prawdy, czy tylko zamianę jednych cieni na inne, bardziej wyrafinowane?
          </p>
        </div>
      );

    case 'dlug-jako-przemoc-uswiecona':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Krytyka współczesnego systemu finansowego
          </h2>
          <p className="mb-4 text-justify">
            Dług w współczesnym kapitalizmie to nie tylko relacja ekonomiczna - to forma społecznej kontroli. David Graeber pokazał, że dług zawsze był narzędziem władzy, sposobem na podporządkowanie jednych ludzi drugim. Dzisiejszy system finansowy doprowadził tę logikę do perfekcji.
          </p>
          <p className="mb-6 text-justify">
            Współczesny dług to przemoc uświęcona przez ekonomię. To przyszłość sprzedana na rzecz teraźniejszości, przyszłe pokolenia obciążone decyzjami dzisiejszych. To mechanizm, który przekształca wolnych ludzi w dłużników - a więc w nowoczesnych niewolników.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Moralna ekonomia długu
          </h3>
          <p className="mb-6 text-justify">
            Dług niesie ze sobą moralny ciężar. "Oddać dług" to imperatyw etyczny, który przekształca relacje społeczne w relacje ekonomiczne. Ale czy każdy dług rzeczywiście powinien być spłacony? Historia pokazuje, że jubileuszowe umorzenie długów było stałym elementem starożytnych cywilizacji.
          </p>
        </div>
      );

    case 'wszystko-plynie-nieregularnie':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Esej o niestabilności współczesnego świata
          </h2>
          <p className="mb-4 text-justify">
            "Panta rhei" - wszystko płynie, mawiał Heraklit. Ale współczesne "wszystko płynie" ma inny charakter niż starożytna mądrość o zmienności. Dzisiejsze płynięcie jest nieregularne, chaotyczne, nieprzewidywalne. To nie majestatyczny nurt rzeki, lecz turbulencje dzikiego strumienia.
          </p>
          <p className="mb-6 text-justify">
            Nieregularność stała się normą. W ekonomii, polityce, kulturze, technologii - wszędzie dominuje logika przyspieszenia, przerwania, dyskontinuacji. Stabilność jest dziś luksusem, który mogą sobie pozwolić tylko nieliczni.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Życie w turbulencjach
          </h3>
          <p className="mb-6 text-justify">
            Jak żyć w świecie, który nieustannie się zmienia? Jak planować przyszłość, gdy jedyną stałą jest zmiana? Współczesny człowiek musi nauczyć się nawigować w turbulencjach, znajdować stabilność w niestabilności, tworzyć sens w chaosie.
          </p>
        </div>
      );

    case 'utopia-sznurka-pieczatki':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Krytyka biurokratyzacji
          </h2>
          <p className="mb-4 text-justify">
            Utopia sznurka i pieczątki to marzenie o świecie, w którym wszystko można uporządkować, skatalogować, urzędowo załatwić. To wiara w zbawczą moc procedur, formularzy, pieczątek i sznurków biurokratycznych. To świat, w którym życie zostaje zredukowane do administracji.
          </p>
          <p className="mb-6 text-justify">
            Biurokracja obiecuje racjonalność, efektywność, sprawiedliwość. W praktyce często prowadzi do absurdu, paraliżu, dehumanizacji. Sznurek, który miał porządkować, kończy się duszeniem. Pieczątka, która miała potwierdzać, kończy się negowaniem.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Paralizator jako metafora
          </h3>
          <p className="mb-6 text-justify">
            Paralizator w tytule to nie tylko broń - to metafora biurokratycznego systemu, który poraża inicjatywę, kreatywność, spontaniczność. System, który miał służyć człowiekowi, kończy go unieruchamiając.
          </p>
        </div>
      );

    case 'czas-giddensa':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O teorii strukturacji Anthony'ego Giddensa
          </h2>
          <p className="mb-4 text-justify">
            Anthony Giddens stworzył jedną z najważniejszych teorii społecznych XX wieku - teorię strukturacji. To próba przezwyciężenia klasycznego dualizmu między strukturą społeczną a działaniem jednostki. Giddens pokazuje, że struktura i sprawczość (agency) to nie przeciwieństwa, lecz dwa aspekty tej samej rzeczywistości społecznej.
          </p>
          <p className="mb-6 text-justify">
            Według Giddensa, struktury społeczne istnieją tylko w praktykach społecznych. Są one jednocześnie medium i rezultatem działań, które organizują. Ludzie w swoich działaniach odtwarzają struktury, ale mogą je też zmieniać. To dialektyka reprodukcji i transformacji.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Nowoczesność i refleksyjność
          </h3>
          <p className="mb-4 text-justify">
            Giddens analizuje również specyfikę nowoczesności. Jego zdaniem, cechą charakterystyczną nowoczesnych społeczeństw jest refleksyjność - ciągłe monitorowanie i rewidowanie praktyk społecznych w świetle napływających informacji.
          </p>
          <p className="mb-6 text-justify">
            Nowoczesność to nie tylko sekularyzacja i industrializacja, lecz przede wszystkim nowy typ stosunku do tradycji, autorytetu i wiedzy. To społeczeństwo, które nieustannie kwestionuje samo siebie.
          </p>
        </div>
      );

    case 'gdy-rynki-zawodza-ludzie-milkna':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O kryzysach ekonomicznych i społecznych
          </h2>
          <p className="mb-4 text-justify">
            Kiedy rynki zawodzą, a ludzie milkną, społeczeństwo wchodzi w stan zawieszenia. To moment, gdy ekonomiczne kategorie przestają wystarczać do opisu rzeczywistości, a polityczne instytucje okazują się bezradne wobec problemów, których nie potrafią ani zrozumieć, ani rozwiązać.
          </p>
          <p className="mb-6 text-justify">
            Kryzys ekonomiczny to nie tylko spadek PKB czy wzrost bezrobocia. To kryzys sensów, wartości, zaufania. Gdy zawodzą mechanizmy rynkowe, na które społeczeństwo postawiło swoje nadzieje, rodzi się głębokie poczucie dezorientacji i bezsilności.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Milczenie jako opór
          </h3>
          <p className="mb-4 text-justify">
            Milczenie ludzi w obliczu kryzysu to nie tylko bierność. To często forma oporu wobec systemu, który przestał być wiarygodny. To wyrażenie braku zaufania do oficjalnych narracji i propozycji rozwiązań.
          </p>
          <p className="mb-6 text-justify">
            Jednak milczenie ma swoją cenę. Gdy obywatele wycofują się z życia publicznego, przestrzeń polityczna zostaje zdominowana przez tych, którzy krzyczą najgłośniej - często populistów i demagogów.
          </p>
        </div>
      );

    case 'panstwo-nie-wchodzi-do-swiatyni':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O relacjach państwo-kościół w Polsce
          </h2>
          <p className="mb-4 text-justify">
            "Państwo nie wchodzi do świątyni, lecz adres jej zna" - ta parafraza znanego powiedzenia dobrze oddaje polską specyfikę relacji między władzą świecką a duchowną. Formalnie mamy rozdział kościoła od państwa, faktycznie - skomplikowany splot powiązań, wpływów i uzależnień.
          </p>
          <p className="mb-6 text-justify">
            Polski model to nie teokracja, ale też nie laicyzm francuskiego typu. To system, w którym kościół zachowuje znaczące wpływy na politykę, edukację, kulturę, nie ponosząc przy tym pełnej odpowiedzialności za swoje publiczne działania.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Adres znany
          </h3>
          <p className="mb-4 text-justify">
            "Adres znany" oznacza, że państwo bardzo dobrze wie, gdzie szukać kościoła, gdy potrzebuje jego wsparcia. Kościół zaś wie, gdzie szukać państwa, gdy potrzebuje jego protekcji. To układ korzystny dla obu stron, ale niekoniecznie dla społeczeństwa.
          </p>
          <p className="mb-6 text-justify">
            Prawdziwy rozdział oznaczałby, że państwo i kościół działają w swoich sferach kompetencji, nie wtrącając się w sprawy drugiej strony. W Polsce jesteśmy od tego ideału daleko.
          </p>
        </div>
      );

    case 'analiza-inwestycji-publicznych':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Badanie efektywności wydatków publicznych
          </h2>
          <p className="mb-4 text-justify">
            Analiza inwestycji publicznych podnoszących jakość życia obywateli to kluczowe narzędzie oceny efektywności państwa. Nie wystarczy wydawać pieniądze podatników - trzeba wydawać je mądrze, z korzyścią dla społeczeństwa i gospodarki.
          </p>
          <p className="mb-6 text-justify">
            Każda inwestycja publiczna powinna być poddana rygorystycznej analizie kosztów i korzyści. Nie tylko finansowych, ale też społecznych, środowiskowych, długoterminowych. To podstawa odpowiedzialnego zarządzania zasobami publicznymi.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Kryteria oceny inwestycji
          </h3>
          <p className="mb-4 text-justify">
            Dobra inwestycja publiczna to taka, która: zwiększa produktywność gospodarki, poprawia jakość życia obywateli, jest zrównoważona środowiskowo, ma pozytywny bilans kosztów i korzyści oraz jest realizowana transparentnie i zgodnie z prawem.
          </p>
          <p className="mb-6 text-justify">
            Niestety, w Polsce wiele inwestycji publicznych nie spełnia tych kryteriów. Są to często projekty prestiżowe, polityczne, bez rzetelnej analizy ekonomicznej i społecznej. To marnotrawstwo środków publicznych.
          </p>
        </div>
      );

    case 'koniec-praw-poczatek-praw':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O przemianach w systemie prawnym
          </h2>
          <p className="mb-4 text-justify">
            "Koniec praw, początek praw" - ten paradoks oddaje stan współczesnego systemu prawnego. Z jednej strony mamy inflację prawa, nieustanne tworzenie nowych regulacji, z drugiej - erozję tradycyjnych zasad prawnych i zaufania do systemu sprawiedliwości.
          </p>
          <p className="mb-6 text-justify">
            Prawo przestaje być stabilnym punktem odniesienia, a staje się instrumentem doraźnej polityki. To niebezpieczna tendencja, która podważa podstawy państwa prawa i demokratycznego ładu konstytucyjnego.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Inflacja prawa vs stabilność systemu
          </h3>
          <p className="mb-4 text-justify">
            Współczesne państwo produkuje prawo w tempie przemysłowym. Setki ustaw, tysięce rozporządzeń, niekończące się nowelizacje. Obywatel nie jest w stanie nadążyć za zmianami, prawnik gubią się w gąszczu przepisów.
          </p>
          <p className="mb-6 text-justify">
            To prowadzi do paradoksu: im więcej prawa, tym mniej pewności prawnej. Im więcej regulacji, tym większy chaos. Potrzebujemy nie więcej prawa, lecz lepszego prawa - prostego, zrozumiałego, stabilnego.
          </p>
        </div>
      );

    case 'paradygmat-ku-samozatrudnieniu':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Trendy w zatrudnieniu i samozatrudnieniu
          </h2>
          <p className="mb-4 text-justify">
            Czy obserwujemy paradygmat ku samozatrudnieniu? Statystyki wskazują na rosnący udział samozatrudnionych w strukturze rynku pracy. To jednak nie zawsze oznacza wzrost przedsiębiorczości - często to efekt ucieczki pracodawców od kosztów pracy.
          </p>
          <p className="mb-6 text-justify">
            Samozatrudnienie może być drogą do wolności ekonomicznej, ale może też być formą ukrytego zatrudnienia - gdy pracodawca zmusza pracownika do założenia działalności gospodarczej, by uniknąć obciążeń socjalnych.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Prawdziwa przedsiębiorczość vs pozorne samozatrudnienie
          </h3>
          <p className="mb-4 text-justify">
            Prawdziwy przedsiębiorca podejmuje ryzyko gospodarcze, ma swobodę organizacji pracy, decyduje o strategii biznesu. Pozorny samozatrudniony pracuje na zasadach podobnych do umowy o pracę, ale bez gwarancji socjalnych.
          </p>
          <p className="mb-6 text-justify">
            Państwo powinno wspierać prawdziwą przedsiębiorczość, ale jednocześnie chronić pracowników przed nadużyciami. To wymaga przemyślanej polityki prawnej i podatkowej.
          </p>
        </div>
      );

    case 'na-smyczy-zysku-tancu-wartosci':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O konflikcie między zyskiem a wartościami
          </h2>
          <p className="mb-4 text-justify">
            "Na smyczy zysku, czy w tańcu wartości?" - to fundamentalne pytanie o naturę współczesnego biznesu. Czy przedsiębiorstwa są skazane na bezwzględną pogoni za zyskiem, czy mogą łączyć sukces ekonomiczny z odpowiedzialnością społeczną?
          </p>
          <p className="mb-6 text-justify">
            Tradycyjny model kapitalizmu kładł nacisk na maksymalizację zysku dla akcjonariuszy. Nowy model - capitalism stakeholderowy - uwzględnia interesy wszystkich zainteresowanych: pracowników, klientów, społeczności, środowiska.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Biznes odpowiedzialny społecznie
          </h3>
          <p className="mb-4 text-justify">
            Biznes odpowiedzialny społecznie to nie filantropia ani marketing. To fundamentalna zmiana sposobu myślenia o roli przedsiębiorstwa w społeczeństwie. Firmy, które ignorują tę zmianę, mogą stracić zaufanie klientów i pracowników.
          </p>
          <p className="mb-6 text-justify">
            Pytanie brzmi: czy można być profitable i purpose-driven jednocześnie? Coraz więcej przykładów wskazuje, że tak - ale wymaga to zmiany kultury organizacyjnej i długoterminowego myślenia.
          </p>
        </div>
      );

    case 'niewidzialni-przy-stole':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Kogo nie ma w dialogu społecznym i dlaczego
          </h2>
          <p className="mb-4 text-justify">
            Dialog społeczny w Polsce to często monolog establishmentu. Przy stole zasiadają ci sami przedstawiciele tych samych organizacji, podczas gdy miliony ludzi pozostają bez głosu. Niewidzialni przy stole to prekariat, pracownicy platform, samozatrudnieni, bezrobotni długoterminowi.
          </p>
          <p className="mb-6 text-justify">
            To ludzie, których praca jest niestabilna, których reprezentacja jest słaba lub nie istnieje, których głos nie dociera do decydentów. To oni ponoszą największe koszty zmian gospodarczych, ale nie mają wpływu na ich kształt.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Kryzys reprezentacji
          </h3>
          <p className="mb-4 text-justify">
            Tradycyjne związki zawodowe reprezentują coraz mniejszą część pracowników. Organizacje pracodawców skupiają się na interesach największych firm. Politycy myślą kategoriami cykli wyborczych. Kto reprezentuje tych, którzy nie mieszczą się w tych schematach?
          </p>
          <p className="mb-6 text-justify">
            Potrzebujemy nowych form reprezentacji, nowych mechanizmów włączania wykluczonych głosów w proces decyzyjny. Bez tego dialog społeczny pozostanie pustą formalnością.
          </p>
        </div>
      );

    case 'elastycznosc-bez-zobowiazan':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            O pozornych wolnościach deregulowanego rynku
          </h2>
          <p className="mb-4 text-justify">
            "Elastyczność bez zobowiązań" - to hasło nowej ekonomii, która obiecuje wolność, ale dostarcza niepewność. Elastyczny rynek pracy miał uwolnić potencjał gospodarczy. W praktyce często oznacza transfer ryzyka z pracodawców na pracowników.
          </p>
          <p className="mb-6 text-justify">
            Elastyczność dla kapitału oznacza możliwość szybkiego dostosowania kosztów pracy do koniunktury. Dla pracowników oznacza niepewność zatrudnienia, dochodów, przyszłości. To asymetria, która narusza społeczną legitymizację gospodarki rynkowej.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Flexicurity - model skandynawski
          </h3>
          <p className="mb-4 text-justify">
            Kraje skandynawskie pokazują, że można połączyć elastyczność rynku pracy z bezpieczeństwem socjalnym pracowników. Model flexicurity zakłada: elastyczne zatrudnienie, hojne zasiłki dla bezrobotnych, intensywne szkolenia zawodowe.
          </p>
          <p className="mb-6 text-justify">
            To wymaga jednak silnego państwa socjalnego i wysokich podatków. Czy Polska jest gotowa na taką transformację? To pytanie o model społeczno-gospodarczy, jaki chcemy budować.
          </p>
        </div>
      );

    default:
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            {post.title}
          </h2>
          <p className="mb-6 text-lg font-medium" style={{ color: '#666666' }}>
            {post.summary}
          </p>
          <p className="mb-4 text-justify">
            {post.content}
          </p>
          <p className="mb-4 text-justify">
            Ten artykuł stanowi część naszej systematycznej analizy współczesnych wyzwań społecznych, politycznych i ekonomicznych. Fundacja Dobre Państwo konsekwentnie bada i opisuje zjawiska wpływające na jakość demokracji oraz funkcjonowanie instytucji publicznych w Polsce.
          </p>
          <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <p className="text-sm font-medium mb-2" style={{ color: '#333333' }}>
              Źródło i pełna wersja artykułu:
            </p>
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: '#333333' }}
            >
              {post.link}
            </a>
          </div>
        </div>
      );
  }
};