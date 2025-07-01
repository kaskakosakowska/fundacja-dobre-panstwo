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
              Zaufanie, które więdnie
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>29 czerwca 2025</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              Esej o kapitale społecznym i erozji zaufania w społeczeństwie.
            </p>
            <a href="https://wbrew.org/kapital-spoleczny-zaufanie/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
              Total Participation Management (TPM)
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>29 czerwca 2025</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              Zarządzanie pełnią człowieczeństwa w nowoczesnych organizacjach.
            </p>
            <a href="https://wbrew.org/total-participation-management-tpm-zarzadzanie-pelnia-czlowieczenstwa/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
              Ekonomiczne niewolnictwo XXI wieku
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>29 czerwca 2025</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              Głos prekariatu przeciw outsourcingowi w nowoczesnej ekonomii.
            </p>
            <a href="https://wbrew.org/prekariat-vs-outsourcing/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#333333' }}>
              Zderegulujmy Rzecznika MŚP
            </h3>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>27 czerwca 2025</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>
              O konieczności redukcji fikcji dialogu w administracji publicznej.
            </p>
            <a href="https://wbrew.org/zderegulujmy-rzecznika-msp-zredukujmy-fikcje-dialogu/" target="_blank" rel="noopener noreferrer" 
               className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#333333' }}>
              Czytaj więcej →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm" style={{ color: '#666666' }}>
            Wszystkich publikacji: <strong>200+</strong> | Zobacz więcej w sekcjach tematycznych powyżej
          </p>
        </div>
      </div>
    </section>
  );
};