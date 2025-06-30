
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const PostTemplate = () => {
  const { postId } = useParams();
  const location = useLocation();
  
  // Determine section from current path
  const getSection = () => {
    if (location.pathname.includes('szkatulka-kosztownosci')) return 'szkatulka';
    if (location.pathname.includes('szczypta-soli')) return 'szczypta';
    if (location.pathname.includes('glosy-ktore-slychac')) return 'glosy';
    return 'default';
  };

  const section = getSection();

  // Mock data for posts - in real app this would come from API/database
  const getPostData = () => {
    const posts = {
      szkatulka: {
        "1": { title: "Analiza budżetu miasta na 2024", content: "Szczegółowa analiza wydatków budżetowych miasta na rok 2024 rok. Tutaj znajdzie się rozszerzona analiza wszystkich pozycji budżetowych, z uwzględnieniem porównań z poprzednimi latami oraz rekomendacji na przyszłość." },
        "2": { title: "Wydatki na transport publiczny", content: "Szczegółowa analiza wydatków na transport publiczny, obejmująca koszty operacyjne, inwestycje w nowy tabor oraz plany rozwoju sieci komunikacyjnej." },
        "3": { title: "Dotacje dla organizacji pozarządowych", content: "Kompletne zestawienie wszystkich dotacji przyznanych organizacjom pozarządowym, z podziałem na kategorie działalności i analizą efektywności wykorzystania środków." },
        "4": { title: "Koszty utrzymania przestrzeni publicznych", content: "Szczegółowe zestawienie kosztów związanych z utrzymaniem terenów zielonych, konserwacją infrastruktury oraz planami modernizacji." },
        "5": { title: "Inwestycje w infrastrukturę cyfrową", content: "Kompleksowa analiza inwestycji w technologie cyfrowe, systemy informatyczne oraz rozwój platform elektronicznych dla mieszkańców." },
        "6": { title: "Wydatki na ochronę środowiska", content: "Szczegółowa analiza wydatków na projekty ekologiczne, odnawialne źródła energii oraz inicjatywy związane z ochroną środowiska naturalnego." }
      },
      szczypta: {
        "1": { title: "Weryfikacja danych o nowych inwestycjach", content: "Szczegółowa analiza wszystkich dostępnych dokumentów i oświadczeń dotyczących nowych inwestycji. Weryfikacja faktów, porównanie z oficjalnymi dokumentami planistycznymi oraz ocena realności przedstawionych planów." },
        "2": { title: "Fact-check: statystyki bezrobocia", content: "Dogłębna weryfikacja oficjalnych statystyk bezrobocia z uwzględnieniem metodologii liczenia, porównań z danymi GUS oraz analizy trendów w perspektywie długoterminowej." },
        "3": { title: "Sprawdzamy: koszty organizacji wydarzeń miejskich", content: "Kompleksowa analiza kosztów organizacji wydarzeń miejskich, porównanie z cenami rynkowymi usług eventowych oraz ocena efektywności wykorzystania środków publicznych." },
        "4": { title: "Mit czy prawda: efektywność programów społecznych", content: "Szczegółowe badanie efektywności programów społecznych z wykorzystaniem dostępnych danych statystycznych, wywiadów z beneficjentami oraz analizy porównawczej z innymi miastami." },
        "5": { title: "Weryfikacja planów komunikacyjnych", content: "Analiza planów rozwoju komunikacji publicznej, weryfikacja deklarowanych terminów realizacji oraz ocena realności przedstawionych rozwiązań transportowych." },
        "6": { title: "Fact-check: dane o jakości powietrza", content: "Szczegółowa analiza danych o jakości powietrza z różnych źródeł, weryfikacja skuteczności działań antysmogowych oraz porównanie z normami krajowymi i europejskimi." }
      },
      glosy: {
        "1": { title: "Mieszkańcy o nowym parku miejskim", content: "Kompleksowy przegląd opinii mieszkańców na temat nowego parku miejskiego. Ankiety, wywiady i obserwacje dotyczące funkcjonalności, estetyki i wpływu na jakość życia w dzielnicy." },
        "2": { title: "Głosy przedsiębiorców o nowych regulacjach", content: "Szczegółowe relacje przedsiębiorców o wpływie nowych regulacji na prowadzenie działalności gospodarczej, wyzwaniach związanych z ich wdrożeniem oraz propozycjach ulepszeń." },
        "3": { title: "Rodzice o zmianach w szkołach", content: "Szeroki przegląd opinii rodziców dotyczących zmian w systemie edukacji, ich wpływu na codzienne funkcjonowanie szkół oraz skutków dla rozwoju dzieci." },
        "4": { title: "Seniorzy o dostępności usług publicznych", content: "Dogłębna analiza doświadczeń seniorów w kontakcie z administracją publiczną, identyfikacja barier oraz propozycje rozwiązań poprawiających dostępność usług." },
        "5": { title: "Młodzież o przestrzeni publicznej", content: "Kompleksowy przegląd potrzeb młodzieży dotyczących zagospodarowania przestrzeni publicznej, propozycje nowych rozwiązań oraz ocena istniejącej infrastruktury rekreacyjnej." },
        "6": { title: "Mieszkańcy o komunikacji publicznej", content: "Szczegółowe relacje pasażerów komunikacji publicznej dotyczące jakości usług, punktualności, czystości oraz propozycji usprawnień w organizacji transportu miejskiego." }
      }
    };

    return posts[section]?.[postId] || { title: "Wpis nie znaleziony", content: "Nie udało się odnaleźć tego wpisu." };
  };

  // Determine section from current path
  const getBackPath = () => {
    switch(section) {
      case 'szkatulka': return '/szkatulka-kosztownosci';
      case 'szczypta': return '/szczypta-soli';
      case 'glosy': return '/glosy-ktore-slychac';
      default: return '/';
    }
  };

  const post = getPostData();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-6 mb-4">
            <Link to={getBackPath()} className="inline-flex items-center hover:opacity-70 transition-opacity">
              <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
              <span style={{ color: '#666666' }}>Powrót</span>
            </Link>
            <Link to="/" className="inline-flex items-center hover:opacity-70 transition-opacity">
              <Home className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
              <span style={{ color: '#666666' }}>Strona główna</span>
            </Link>
          </div>
          <h1 className="text-3xl font-light" style={{ color: '#333333' }}>
            {post.title}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Post Container */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '678px' }}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4" style={{ color: '#333333' }}>
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  <ScrollArea className="h-full max-h-[550px] pr-4">
                    <div className="relative">
                      {/* Image in top right corner */}
                      <img 
                        src="/lovable-uploads/a247c62f-0c85-460a-8ed0-b9c0be25623f.png" 
                        alt="Post image" 
                        className="float-right ml-6 mb-4 w-48 h-32 object-cover rounded-lg shadow-md"
                      />
                      
                      {/* Post content */}
                      <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
                        <p className="mb-4">
                          {post.content}
                        </p>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mb-4">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="mb-4">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <p className="mb-4">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className="mb-4">
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Containers */}
            <div className="space-y-6">
              {/* PDF Embedder Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '210px' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#333333' }}>
                    Pełna treść PDF
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">PDF Embedder</p>
                    <p className="text-xs mt-2">Tutaj zostanie umieszczony embedder PDF-a z pełną treścią wpisu</p>
                  </div>
                </CardContent>
              </Card>

              {/* Audio Version Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '210px' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#333333' }}>
                    Wersja audio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">Audio Player</p>
                    <p className="text-xs mt-2">Wersja audio PDF-a</p>
                  </div>
                </CardContent>
              </Card>

              {/* Mind Map Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '210px' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#333333' }}>
                    Mapa pojęć
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">Mind Map</p>
                    <p className="text-xs mt-2">Interaktywna mapa pojęć związanych z wpisem</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full h-px mb-6" style={{ backgroundColor: '#E5E5E5' }}></div>
          <p className="text-center text-sm font-light" style={{ color: '#666666' }}>
            © 2024 Portfolio. Stworzone z myślą o prostocie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PostTemplate;
