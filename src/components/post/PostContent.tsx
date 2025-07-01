import { Post } from "@/hooks/usePostData";
import zaufanieImage from "@/assets/images/zaufanie-ktore-wiednie.webp";
import tpmImage from "@/assets/images/total-participation-management.webp";
import ekonomiczneImage from "@/assets/images/ekonomiczne-niewolnictwo.webp";
import rzecznikImage from "@/assets/images/zderegulujmy-rzecznika.png";
import ziemiaImage from "@/assets/images/gdy-ziemia-krzyczy.png";

interface PostContentProps {
  post: Post;
  section: string;
  postId: string | undefined;
}

export const PostContent = ({ post, section, postId }: PostContentProps) => {
  const renderFullContent = () => {
    // Szkatułka kosztowności - po 1 maja 2025
    if (postId === 'zaufanie-ktore-wiednie' && section === 'szkatulka') {
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
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Od teorii do praktyki – jak polityka wysysa zaufanie
          </h3>
          
          <p className="mb-4 text-justify">
            Pojęcie kapitału społecznego sięga Pierre'a Bourdieu (zasób dominacji przez sieci relacji) i Jamesa Colemana (narzędzie efektywności współdziałania). Robert D. Putnam połączył te wątki, ukazując wpływ jakości sieci relacji na kondycję demokracji.
          </p>
          
          <p className="mb-6 text-justify">
            Relacja między kapitałem społecznym a polityką jest dialektyczna. Zaufanie umożliwia skuteczne rządzenie, obniżając koszty wprowadzania polityk publicznych. Politycy zaś mogą wzmacniać lub niszczyć tego rodzaju kapitał: akcje budujące inkluzywność wspólnoty skutkują wzrostem zaufania, działania partykularne i kampanie marketingowe – jego erozją.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Zaufanie i jego epistemologia – socjologia na polu minowym
          </h3>
          
          <p className="mb-4 text-justify">
            Badanie kapitału społecznego wymaga wielopoziomowej metodologii. Operuje on na poziomie mikro (relacje interpersonalne), mezo (organizacje lokalne) i makro (kultura polityczna). Główne wskaźniki to poziom zaufania, uczestnictwa obywatelskiego oraz gęstość sieci stowarzyszeń.
          </p>
          
          <p className="mb-6 text-justify">
            Kluczowe rozróżnienie to <strong>zaufanie zagęszczone</strong> (thick trust) – oparte na bliskich relacjach, oraz <strong>zaufanie rozproszone</strong> (thin trust) – wobec nieznajomych i instytucji. Nowoczesne społeczeństwo bez zaufania rozproszonego nie istnieje – traci wsparcie deliberacji i staje się mozaiką atomizowanych jednostek.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Gdy obywatel znika – polityka staje się folwarkiem
          </h3>
          
          <p className="mb-6 text-justify">
            Kapitał społeczny obniża koszty transakcji społecznych: tam, gdzie wspólnota ufa sobie nawzajem, prawo działa z mniejszym przymusem, podatki płaci się chętniej, a obywatele angażują się w życie publiczne. W sytuacji deficytu zaufania państwo zastępuje delikatne mechanizmy kontroli twardymi regulacjami, a polityka przeobraża się w zarządzanie podziałami.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Nieufność jako domyślny tryb istnienia
          </h3>
          
          <p className="mb-4 text-justify">
            Kapitał społeczny działa jak kolagen w ciele społecznym – gdy go brakuje, tkanka się rozpada. Społeczeństwa wysokiego zaufania są odporne i twórcze, te niskiego – łatwe do zmanipulowania i podzielone. Bez świadomego budowania więzi przekraczających granice grupowe, demokracja zamiera jako żywy organizm, stając się jedynie maską instytucji.
          </p>
          
          <p className="mb-4 text-justify">
            Odbudowa kapitału społecznego to wyzwanie zarówno teoretyczne, jak i praktyczne. Wymaga polityków, którzy będą inwestować w kapitał łączący, świadomych socjologów i obywateli gotowych przekroczyć własne enklawy tożsamościowe. Inaczej samo życie zbiorowe zamieni się w samotną grę w kręgle – bez kręgielni i kul.
          </p>
        </div>
      );
    }

    if (postId === 'total-participation-management' && section === 'szkatulka') {
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
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Zasady operacyjne w organizacjach TPM
          </h3>
          
          <p className="mb-6">
            Pełna transparentność danych finansowych buduje zaufanie; partycypacyjny proces podejmowania decyzji zastępuje model <em>top-down</em>; kolektywne wynagrodzenia i udział w zyskach wzmacniają poczucie współwłasności; ocena 4π obejmuje kontekst zawodowy i społeczny, czyniąc informację zwrotną źródłem sensu; rytuały refleksyjne, takie jak cotygodniowe „młyny", utrzymują organizację w stanie ciągłego uczenia się.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            TPM a HRM i NPM – kluczowe różnice
          </h3>
          
          <p className="mb-6">
            Human Resource Management postrzega pracownika jako zasób podlegający kontroli, a New Public Management mierzy efektywność przez wskaźniki. TPM natomiast stawia pytanie o głębokość uczestnictwa, odwraca hierarchię cel–środek: efektywność jest tu skutkiem ubocznym godności i sensu, nie odwrotnie.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Przykłady wdrożeń w Europie
          </h3>
          
          <p className="mb-6">
            W Polsce sztandarowym przykładem jest zakład produkcyjny Marco z Gliwic, gdzie transparentne płace i wspólne planowanie strategiczne przełożyły się na minimalną rotację. W Niemczech idee TPM realizuje WL Gore (Gore-Tex) poprzez płaską strukturę i szeroką partycypację, a we Francji – przedsiębiorstwo Chronoflex, które po restrukturyzacji oparło kulturę organizacyjną na kolektywnym podejmowaniu decyzji.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Dlaczego TPM zyskuje na znaczeniu
          </h3>
          
          <p className="mb-4">
            Era pracy wiedzy, automatyzacji i niestabilnych rynków wymaga modeli wzmacniających autonomię i kreatywność. TPM odpowiada na te wyzwania, integrując etykę z ekonomią i dowodząc, że firma może być zarówno rentowna, jak i humanistyczna.
          </p>
        </div>
      );
    }
    
    if (postId === 'ekonomiczne-niewolnictwo-xxi-wieku' && section === 'szkatulka') {
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
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Outsourcing jako rytuał wykluczenia
          </h3>
          
          <p className="mb-6 text-justify">
            Umowy śmieciowe, samozatrudnienie i „permatemps" budują nową klasę – <strong>prekariat</strong> – której egzystencja jest z definicji tymczasowa, choć praca nigdy się nie kończy. To ekonomiczne niewolnictwo XXI wieku, gdzie wolność to tylko hasło marketingowe.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            EPZ bez granic – globalizacja przemocy
          </h3>
          
          <p className="mb-6 text-justify">
            Cavite na Filipinach, Dhaka w Bangladeszu, Bhiwandi w Indiach to nie wyjątki, lecz laboratoria systemowej brutalizacji pracy. Niskie płace, wymuszone nadgodziny, zakaz związków zawodowych i toksyczne warunki produkcji to codzienność. Ten model przeniknął do gospodarki cyfrowej: aplikacje śledzą kurierów jak GPS, a algorytmy zamykają dostęp do zleceń jednym kliknięciem.
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Politycy – wspólnicy wyzysku
          </h3>
          
          <p className="mb-4 text-justify">
            Elity rządowe karmią się retoryką „konkurencyjności" i „elastyczności", głosując za deregulacją, która de facto oznacza brak urlopu, brak emerytury i bezkarność pracodawcy. Gdy parlament świętuje wskaźniki wzrostu, ktoś właśnie traci prawo do przerwy.
          </p>
        </div>
      );
    }

    if (postId === 'zderegulujmy-rzecznika-msp' && section === 'szkatulka') {
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
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Synekury i symbolika
          </h3>
          
          <p className="mb-6 text-justify">
            Rzecznik MŚP był od początku tworem politycznym. Instytucją powołaną nie z potrzeby, lecz z kalkulacji. Miała być pomostem między władzą a przedsiębiorcami – stała się atrapą pomostu. Zajmuje się pozorami dialogu, wydaje 18 milionów złotych rocznie i – jak na klasyczną synekurę przystało – trwa, niepokojona przez nikogo.
          </p>
          
          <p className="mb-4 text-justify">
            Tymczasem urząd ten powiela kompetencje, które już funkcjonują w strukturze państwa. W samym Ministerstwie Rozwoju i Technologii działa Departament MŚP. Jest Rada Małych i Średnich Przedsiębiorców przy Rzeczniku MŚP, jest i Rada Naukowa przy Rzeczniku MŚP. Jest kilka ciał kolegialnych i społecznych współtworzonych przez przedsiębiorców.
          </p>
        </div>
      );
    }

    if (postId === 'gdy-ziemia-krzyczy-glosem-ludu' && section === 'szkatulka') {
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
            Zapomnienie przebrane za postęp
          </h3>
          
          <p className="mb-6 text-justify">
            <strong>Ella Marie Hætta Isaksen</strong>, ikona nowego pokolenia saamskich aktywistek, mówi jasno: „Nie jesteśmy przeciwko energii odnawialnej. Jesteśmy przeciwko zapomnieniu. Nasza ziemia ma pamięć. A my jesteśmy jej głosem."
          </p>
          
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Prawa ludów rdzennych – nie przywilej, lecz ratunek
          </h3>
          
          <p className="mb-4 text-justify">
            To nie jest sprawa etnograficzna. To nie jest folklor. <strong>Prawa ludów rdzennych to dziś ostatnia linia obrony przed samobójczą logiką cywilizacji ekstrakcji</strong>. Ludy rdzenne – Saamowie, U'wa, Ogoni, Heiltsukowie – nie zniszczyli żadnego kontynentu. Nie zostawili za sobą martwych oceanów. Ich styl życia to antyteza wzrostu opartego na eksploatacji.
          </p>
        </div>
      );
    }
    
    // Domyślny fallback dla artykułów bez pełnej treści
    return (
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
    );
  };

  return (
    <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
      {renderFullContent()}
    </div>
  );
};