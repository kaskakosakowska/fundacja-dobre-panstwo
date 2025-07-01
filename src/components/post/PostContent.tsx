import { Post } from "@/hooks/usePostData";
import zaufanieImage from "@/assets/images/zaufanie-ktore-wiednie.webp";
import tpmImage from "@/assets/images/total-participation-management.webp";

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
          
          <p className="mt-6 mb-6 text-justify">
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
              className="float-right ml-6 mb-4 w-32 h-32 object-cover rounded-lg shadow-md"
            />
            Total Participation Management wyrasta z personalizmu Emmanuela Mouniera, Karola Wojtyły i Jacques'a Maritaina, dla których osoba ludzka jest celem samym w sobie. W duchu dialogicznej antropologii Martina Bubera uczestnictwo stanowi warunek realizacji ludzkiej wolności, a nie jedynie technikę zarządzania.
          </p>
          
          <p className="mb-6">
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