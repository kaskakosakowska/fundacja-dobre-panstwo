import { Post } from "@/hooks/usePostData";

interface PostContentProps {
  post: Post;
  section: string;
  postId: string | undefined;
}

export const PostContent = ({ post, section, postId }: PostContentProps) => {
  return (
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
  );
};