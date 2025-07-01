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

    case 'ekonomiczne-niewolnictwo-xxi-wieku':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Nie ma pracy – jest marka. Nie ma człowieka – jest podwykonawca.
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={ekonomiczneImage} 
              alt="Ekonomiczne niewolnictwo XXI wieku" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            Współczesny outsourcing pracowniczy nie przypomina przenoszenia produkcji sprzed dekady; to ucieczka od pracy, o której ostrzegała Naomi Klein w „No Logo". Korporacje, od Amazona po Zarę, porzuciły odpowiedzialność za zatrudnienie i zamieniły fabryki w globalne cienie, tworząc strefy wolnego handlu oraz cyfrowe platformy, w których pracownik staje się wyłącznie kosztem do zminimalizowania.
          </p>
          <p className="mt-12 mb-6 text-justify">
            Marka zastąpiła człowieka, zysk zastąpił etykę, a wielkie firmy świętują kolejne rekordy zysków dzięki redukcji etatów. Fabryki przeniesiono do Azji lub Ameryki Łacińskiej, lecz prawa pracownicze wywieziono także z Warszawy, Berlina i Paryża.
          </p>
        </div>
      );

    case 'zderegulujmy-rzecznika-msp':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Gadała baba do obrazu, a dziad do niej ani razu.
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={rzecznikImage} 
              alt="Zderegulujmy Rzecznika MŚP" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            Tak można by podsumować dotychczasowe relacje Rzecznika Małych i Średnich Przedsiębiorców z rzeczywistością. Choć powołany 6 marca 2018 roku przez Prawo i Sprawiedliwość dzierżące pełnię władzy politycznej, urząd ten miał być głosem małych i średnich przedsiębiorców, to po siedmiu latach nadal nie wiemy… ilu ich tak naprawdę jest.
          </p>
          <p className="mt-12 mb-6 text-justify">
            Ile przedsiębiorstw z tych małych to samozatrudnieni? Z iloma z nich sektor MŚP współpracuje w modelu B2B? Jakie mają przychody, marże, rentowność? Jakie są realia ich codziennego funkcjonowania? CEDiG milczy, GUS wzrusza ramionami, a Biuro Rzecznika – cóż, zdaje się zadowolone z samego faktu swego istnienia.
          </p>
        </div>
      );

    case 'gdy-ziemia-krzyczy-glosem-ludu':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Prawa ludów rdzennych jako ostatni mur przeciw końcowi świata
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={ziemiaImage} 
              alt="Gdy Ziemia krzyczy głosem ludu" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            W krainie Fosen, gdzie wiatr niegdyś śpiewał tylko w koronach świerków, a renifery przemykały pośród gór w rytmie nieznanym zegarkom inwestorów, dziś toczą się protesty. Nie o wiatraki – lecz o coś znacznie większego: o przyszłość, o sprawiedliwość, o przetrwanie kultury, która nigdy nie zbudowała imperium, ale dała światu lekcję: jak być człowiekiem wobec ziemi, a nie jej panem?
          </p>
          <p className="mt-12 mb-6 text-justify">
            Saamowie protestują nie dlatego, że są przeciwnikami energii odnawialnej. Protestują, bo wiedzą, że nie można niszczyć jednego świata, by zbudować inny, który ma być zielony tylko z wierzchu. Widzieli już tamę w Alcie. Widzieli pałki w Oslo. Widzieli, jak pod pozorem transformacji energetycznej powraca demon kolonizacji – grabież przebrana w zielony PR i wykresy rentowności.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Ziemia należy do przyszłych pokoleń
          </h3>
          <p className="mb-4 text-justify">
            Saamski światopogląd głosi, że ziemia nie należy do nas – my należymy do ziemi. To fundamentalna różnica w myśleniu o własności, rozwoju i odpowiedzialności. Gdy rząd norweski wydaje koncesje na budowę farm wiatrowych na terenach wypasu reniferów, łamie nie tylko międzynarodowe prawo, ale i rdzenną mądrość o równowadze między potrzebami człowieka a prawami natury.
          </p>
          <p className="mb-6 text-justify">
            To, co dzieje się w Fosen, to mikrokosmos globalnej walki o sprawiedliwość klimatyczną. Ci, którzy najmniej przyczynili się do kryzysu klimatycznego, ponoszą jego największe koszty. Ludy rdzenne, stanowiące mniej niż 5% światowej populacji, chronią 80% bioróżnorodności planety. To nie przypadek – to efekt tysięcy lat życia w harmonii z naturą.
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