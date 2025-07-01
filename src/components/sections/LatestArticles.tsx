export const LatestArticles = () => {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans font-semibold text-center mb-8" style={{ color: '#333333' }}>
          Najnowsze publikacje
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
              Wzmacnianie Społecznej Odpowiedzialności Biznesu
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>30 września 2024</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              Strategiczne partnerstwa z interesariuszami - nowy projekt OZZS WBREW.
            </p>
            <a href="https://dobrepanstwo.org/wzmacnianie-spolecznej-odpowiedzialnosci-biznesu/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
              Poprawa wskaźników ESG w przestrzeni SOCIAL
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>29 września 2024</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              ESG jest najtańsze w wymiarze społecznym - analiza OZZS WBREW.
            </p>
            <a href="https://wbrew.org/poprawa-wskaznikow-esg-w-przestrzeni-social-jest-najtansza/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
              Zawód Ksiądz – Niebiańska Praca czy Państwowa Fikcja?
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>27 września 2024</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              Analiza statusu prawnego duchownych w systemie państwowym.
            </p>
            <a href="https://dobrepanstwo.org/zawod-ksiadz-niebianska-praca-czy-panstwowa-fikcja/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
              Straszna dwukadencyjność
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>16 lipca 2024</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              Petycja Fundacji Dobre Państwo dotycząca ograniczenia kadencji parlamentarzystów.
            </p>
            <a href="https://dobrepanstwo.org/straszna-dwukadencyjnosc-petycja-fundacji-dobre-panstwo/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm" style={{ color: '#666666' }}>
            Wszystkich publikacji: <strong>400+</strong> | Zobacz więcej w sekcjach tematycznych powyżej
          </p>
          <div className="mt-4 space-x-4">
            <a href="https://dobrepanstwo.org" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              dobrepanstwo.org →
            </a>
            <a href="https://wbrew.org" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              wbrew.org →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};