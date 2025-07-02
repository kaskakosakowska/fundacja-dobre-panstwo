import { Post } from "@/hooks/usePostData";
import tpmImage from "@/assets/images/total-participation-management.webp";

interface ArticleProps {
  post: Post;
}

export const TotalParticipationManagement = ({ post }: ArticleProps) => {
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
};