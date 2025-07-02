import { Post } from "@/hooks/usePostData";
import zaufanieImage from "@/assets/images/zaufanie-ktore-wiednie.webp";

interface ArticleProps {
  post: Post;
}

export const ZaufanieKtoreWiednie = ({ post }: ArticleProps) => {
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
};