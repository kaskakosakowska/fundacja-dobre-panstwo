
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ONas = () => {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center mb-8">
            <Link to="/" className="mr-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="p-2 hover:bg-white/50"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex justify-center flex-1">
              <img 
                src="/lovable-uploads/009a872d-aa2c-4401-bef2-f1cf0207ea3e.png" 
                alt="Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-serif font-medium text-center mb-4" style={{ color: '#333333' }}>
            O Fundacji Dobre Państwo
          </h1>
          <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#E5E5E5' }}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-4xl">
          
          {/* Statutory Information */}
          <section className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Basic Information */}
              <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
                    Dane podstawowe
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Pełna nazwa:</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>Fundacja Dobre Państwo</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>KRS:</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>0000123456</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>NIP:</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>123-456-78-90</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>REGON:</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>123456789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address and Contact */}
              <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
                    Adres i kontakt
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Adres siedziby:</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>
                        ul. Przykładowa 123<br />
                        00-001 Warszawa<br />
                        Polska
                      </p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Email:</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>kontakt@example.com</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Telefon:</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>+48 123 456 789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mission and Goals */}
          <section className="py-8">
            <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
                  Misja i cele statutowe
                </h2>
                <div className="prose max-w-none">
                  <p className="text-base font-sans leading-relaxed mb-4" style={{ color: '#333333' }}>
                    Fundacja Dobre Państwo została powołana w celu wspierania rozwoju społeczeństwa obywatelskiego 
                    i wzmacniania demokracji w Polsce. Nasze działania koncentrują się na:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: '#666666' }}>
                    <li>Promocji transparentności i odpowiedzialności władz publicznych</li>
                    <li>Edukacji obywatelskiej i podnoszeniu świadomości społecznej</li>
                    <li>Wspieraniu inicjatyw oddolnych i partycypacji społecznej</li>
                    <li>Monitorowaniu wydatków publicznych i jakości usług publicznych</li>
                    <li>Weryfikacji informacji w przestrzeni publicznej (fact-checking)</li>
                    <li>Budowaniu platformy dialogu między obywatelami a instytucjami</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Board and Management */}
          <section className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Board of Directors */}
              <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
                    Zarząd
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Prezes Zarządu</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>Anna Kowalska</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Wiceprezes Zarządu</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>Jan Nowak</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Członek Zarządu</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>Maria Wiśniewska</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Supervisory Board */}
              <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
                    Rada Nadzorcza
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Przewodniczący</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>Prof. dr hab. Piotr Zieliński</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Członek</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>Dr Katarzyna Lewandowska</p>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Członek</h3>
                      <p className="font-sans" style={{ color: '#666666' }}>Mgr Tomasz Kamiński</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Legal Information */}
          <section className="py-8">
            <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
                  Informacje prawne
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Data założenia:</h3>
                    <p className="font-sans" style={{ color: '#666666' }}>15 marca 2018 roku</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Sąd rejestrowy:</h3>
                    <p className="font-sans" style={{ color: '#666666' }}>
                      Sąd Rejonowy dla m.st. Warszawy w Warszawie, 
                      XII Wydział Gospodarczy Krajowego Rejestru Sądowego
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Status organizacji pożytku publicznego:</h3>
                    <p className="font-sans" style={{ color: '#666666' }}>Tak, od 2019 roku</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 mt-8">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-px mb-6" style={{ backgroundColor: '#E5E5E5' }}></div>
          <div className="text-center">
            <p className="text-sm font-sans font-medium" style={{ color: '#666666' }}>
              © 2024 Fundacja Dobre Państwo. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ONas;
