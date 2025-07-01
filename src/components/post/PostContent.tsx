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
  // Pełne treści artykułów z sekcji Szkatułka Kosztowności
  const getFullContent = () => {
    if (section !== 'szkatulka') {
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
    }

    // Pełne treści dla artykułów z Szkatułki Kosztowności
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
            <p className="mb-4 text-justify">
              Publikacja ta została przygotowana w ramach projektu badawczego mającego na celu pogłębienie zrozumienia mechanizmów społecznych i politycznych kształtujących współczesną rzeczywistość. Analizy te służą wypracowaniu konstruktywnych propozycji reform i zmian systemowych.
            </p>
            <p className="mb-4 text-justify">
              Fundacja zachęca do aktywnego uczestnictwa w debacie publicznej oraz do zgłaszania własnych obserwacji i propozycji dotyczących poruszanych w artykule kwestii. Tylko poprzez wspólny wysiłek intelektualny możliwe jest wypracowanie skutecznych rozwiązań stojących przed nami wyzwań.
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

  return (
    <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
      {getFullContent()}
    </div>
  );
};