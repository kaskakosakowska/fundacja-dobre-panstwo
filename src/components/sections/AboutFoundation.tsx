import { Link } from "react-router-dom";

export const AboutFoundation = () => {
  return (
    <section className="py-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="p-8 md:p-12 rounded-lg backdrop-blur-sm mx-auto" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}>
          <p className="text-lg md:text-xl font-sans leading-relaxed text-justify" style={{
            color: '#333333'
          }}>
            Fundacja Dobre Państwo narodziła się z potrzeby radykalnych zmian w polskim systemie politycznym, społecznym i gospodarczym. Naszym celem jest przywrócenie obywatelom realnej kontroli nad demokratycznymi procesami oraz budowanie lepszego jutra dla wszystkich Polaków.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-sans font-semibold" style={{ color: '#333333' }}>
                Nasze główne obszary działania:
              </h3>
              
              {/* Tymczasowy przycisk do CMS */}
              <Link 
                to="/admin" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                🔧 Admin CMS
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <h4 className="font-semibold text-base" style={{ color: '#333333' }}>Szkatułka kosztowności</h4>
                <p className="text-sm mt-2" style={{ color: '#666666' }}>Dokumentujemy i analizujemy wydatki publiczne, kontrolując jak wykorzystywane są podatki obywateli.</p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <h4 className="font-semibold text-base" style={{ color: '#333333' }}>Szczypta Soli</h4>
                <p className="text-sm mt-2" style={{ color: '#666666' }}>Inicjatywa fact-checkingowa weryfikująca informacje w przestrzeni publicznej.</p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <h4 className="font-semibold text-base" style={{ color: '#333333' }}>Głosy które słychać</h4>
                <p className="text-sm mt-2" style={{ color: '#666666' }}>Platforma dla obywateli do dzielenia się doświadczeniami z administracją publiczną.</p>
              </div>
            </div>
            
            <p className="text-base md:text-lg font-sans leading-relaxed text-justify mt-6" style={{
              color: '#333333'
            }}>
              <strong>Historia działalności:</strong> Fundacja powstała w czerwcu 2021 roku, wraz z założeniem OZZS "wBREw" - związku zawodowego samozatrudnionych. Od listopada 2023 do września 2024 zainicjowaliśmy aż <strong>66 oddolnych inicjatyw społecznych</strong> w formie petycji i lobbingu. Zabiegamy o skrócenie X kadencji Sejmu i przedterminowe wybory parlamentarne.
            </p>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <h4 className="font-semibold text-base mb-3" style={{ color: '#333333' }}>Nasze najważniejsze osiągnięcia:</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#666666' }}>
                <li>• <strong>400+ publikacji</strong> na tematykę społeczno-polityczną (2021-2025)</li>
                <li>• <strong>Wystąpienie na Forum ONZ</strong> o Prawach Człowieka (2021)</li>
                <li>• <strong>Współpraca z instytucjami akademickimi</strong> i organizacjami branżowymi</li>
                <li>• <strong>Rozwój tematyki ESG</strong> i zrównoważonego rozwoju</li>
                <li>• <strong>Obrona praw samozatrudnionych</strong> przez OZZS "wBREw"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};