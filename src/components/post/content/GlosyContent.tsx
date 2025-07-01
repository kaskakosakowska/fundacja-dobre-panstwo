import { Post } from "@/hooks/usePostData";
import petycjaDwukadencyjnoscImage from "@/assets/images/petycja-dwukadencyjnosc.webp";
import trojkaDoWyboruImage from "@/assets/images/trojka-do-wyboru.webp";
import policzkyKosciolImage from "@/assets/images/policzmy-kosciol.webp";
import abonamentRtvImage from "@/assets/images/abonament-rtv.webp";

interface GlosyContentProps {
  post: Post;
  postId: string | undefined;
}

export const GlosyContent = ({ post, postId }: GlosyContentProps) => {
  switch (postId) {
    case 'straszna-dwukadencyjnosc-petycja':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Petycja w sprawie wprowadzenia dwukadencyjności
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={petycjaDwukadencyjnoscImage} 
              alt="Petycja dwukadencyjność" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            Fundacja Dobre Państwo zwraca się z petycją o wprowadzenie ograniczenia liczby kadencji pełnionych przez jedną osobę w organach przedstawicielskich. Postulujemy, aby jedna osoba mogła pełnić mandat w Sejmie, Senacie, sejmiku wojewódzkim, radzie powiatu lub gminy maksymalnie przez dwie kadencje.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Uzasadnienie postulatu
          </h3>
          <p className="mb-4 text-justify">
            Ograniczenie kadencyjności służy demokratyzacji życia politycznego i przeciwdziałaniu powstawaniu kastowości w polityce. Rotacja kadr politycznych zapewnia:
          </p>
          <ul className="mb-6 ml-6">
            <li className="mb-2">Dopływ świeżych pomysłów i perspektyw</li>
            <li className="mb-2">Ograniczenie wpływów grup nacisku</li>
            <li className="mb-2">Zwiększenie reprezentatywności organów władzy</li>
            <li className="mb-2">Wzmocnienie więzi między wyborcami a przedstawicielami</li>
          </ul>
          <p className="mb-6 text-justify">
            Dwukadencyjność to rozwiązanie sprawdzone w wielu krajach demokratycznych i stanowi naturalną granicę między służbą publiczną a karierą polityczną.
          </p>
        </div>
      );

    case 'koniec-abonamentu-rtv-petycja':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Petycja o zniesienie abonamentu RTV
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={abonamentRtvImage} 
              alt="Abonament RTV" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            Opłata abonamentowa za możliwość oglądania publicznej telewizji i słuchania radia jest archaizmem z czasów PRLu. W erze cyfrowej, gdy treści medialne są dostępne na wielu platformach, utrzymywanie przymusowej opłaty za posiadanie odbiornika jest anachronizmem.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Argumenty za zniesieniem abonamentu
          </h3>
          <p className="mb-4 text-justify">
            Media publiczne powinny być finansowane z budżetu państwa w sposób transparentny, a nie poprzez ukryty podatek nakładany na obywateli posiadających odbiorniki. Obecny system:
          </p>
          <ul className="mb-6 ml-6">
            <li className="mb-2">Jest niesprawiedliwy - dotyka osoby niezależnie od korzystania z mediów publicznych</li>
            <li className="mb-2">Generuje wysokie koszty administracyjne</li>
            <li className="mb-2">Prowadzi do sporów i konfliktów z obywatelami</li>
            <li className="mb-2">Nie odpowiada współczesnym realiom medialnym</li>
          </ul>
          <p className="mb-6 text-justify">
            Finansowanie mediów publicznych z budżetu państwa zapewniłoby większą przejrzystość i demokratyczną kontrolę nad wydatkami na cele medialne.
          </p>
        </div>
      );

    case 'policzmy-kosciol-petycja':
      return (
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#333333' }}>
            Petycja o rejestr nieruchomości kościelnych
          </h2>
          <p className="mb-4 text-justify">
            <img 
              src={policzkyKosciolImage} 
              alt="Policzmy Kościół" 
              className="float-right ml-6 mb-6 w-48 h-48 object-cover rounded-lg shadow-md"
            />
            Fundacja Dobre Państwo postuluje utworzenie publicznego rejestru nieruchomości należących do kościołów i związków wyznaniowych. Transparentność w zakresie majątku instytucji korzystających z przywilejów podatkowych jest podstawą demokratycznego państwa prawa.
          </p>
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#333333' }}>
            Dlaczego potrzebujemy rejestru?
          </h3>
          <p className="mb-4 text-justify">
            Instytucje religijne w Polsce korzystają z licznych ulg podatkowych i zwolnień. W zamian za te przywileje społeczeństwo ma prawo wiedzieć:
          </p>
          <ul className="mb-6 ml-6">
            <li className="mb-2">Jaką wartość ma majątek korzystający ze zwolnień</li>
            <li className="mb-2">Czy ulgi są wykorzystywane zgodnie z przeznaczeniem</li>
            <li className="mb-2">Jak duży jest koszt alternatywny dla budżetu publicznego</li>
            <li className="mb-2">Czy system jest sprawiedliwy wobec innych organizacji</li>
          </ul>
          <p className="mb-6 text-justify">
            Rejestr powinien zawierać informacje o lokalizacji, powierzchni, wartości i sposobie wykorzystania nieruchomości kościelnych. To podstawowy standard przejrzystości w demokratycznym państwie.
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
            Ta petycja stanowi część naszych działań na rzecz zwiększenia transparentności i demokratycznej kontroli nad instytucjami publicznymi. Fundacja Dobre Państwo konsekwentnie dąży do wzmocnienia mechanizmów obywatelskiego wpływu na funkcjonowanie państwa.
          </p>
          <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <p className="text-sm font-medium mb-2" style={{ color: '#333333' }}>
              Źródło i pełna wersja petycji:
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