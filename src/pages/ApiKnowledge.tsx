
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ApiKnowledge = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
            <span style={{ color: '#666666' }}>Powrót</span>
          </Link>
          <h1 className="text-3xl font-light" style={{ color: '#333333' }}>
            API Knowledge
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6">
        <div className="container mx-auto max-w-4xl">
          <section className="py-16">
            <div className="w-16 h-px mb-8" style={{ backgroundColor: '#E5E5E5' }}></div>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#666666' }}>
              API Knowledge to sekcja poświęcona wiedzy technicznej i interfejsom programistycznym.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
              Znajdziesz tutaj informacje o integracji, dokumentacji oraz najlepszych praktykach w pracy z API.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-px mb-6" style={{ backgroundColor: '#E5E5E5' }}></div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-light" style={{ color: '#666666' }}>
              © 2024 Blog. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              <Link to="/api-knowledge" className="text-sm font-light hover:opacity-70 transition-opacity" style={{ color: '#666666' }}>
                API Knowledge
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApiKnowledge;
