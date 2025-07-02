import { Post } from "@/hooks/usePostData";

interface ArticleProps {
  post: Post;
}

export const WzorzecKtoryMarzy = ({ post }: ArticleProps) => {
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
};