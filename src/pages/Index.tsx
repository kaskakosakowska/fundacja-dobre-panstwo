
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-light text-center" style={{ color: '#333333' }}>
            Portfolio
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Section 1: Welcome */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-light mb-6" style={{ color: '#333333' }}>
              Witaj
            </h2>
            <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: '#E5E5E5' }}></div>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Tworzymy proste, jasne i czytelne rozwiązania. 
              Każdy projekt to połączenie funkcjonalności z minimalistycznym designem.
            </p>
          </section>

          {/* Section 2: About */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light mb-6" style={{ color: '#333333' }}>
                O projekcie
              </h2>
              <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: '#E5E5E5' }}></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#666666' }}>
                  Skupiam się na tworzeniu rozwiązań, które są intuicyjne i przyjazne użytkownikowi. 
                  Prostota w designie to klucz do skutecznej komunikacji.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: '#E5E5E5' }}></div>
                    <span style={{ color: '#666666' }}>Czytelny design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: '#E5E5E5' }}></div>
                    <span style={{ color: '#666666' }}>Funkcjonalność</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: '#E5E5E5' }}></div>
                    <span style={{ color: '#666666' }}>Prostota</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Card className="border-0 shadow-none" style={{ backgroundColor: 'transparent' }}>
                  <CardContent className="p-8">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#E5E5E5' }}>
                      <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#666666' }}></div>
                    </div>
                    <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>
                      Minimalizm
                    </h3>
                    <p className="text-sm" style={{ color: '#666666' }}>
                      Każdy element ma swoje miejsce i znaczenie
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 3: Contact */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light mb-6" style={{ color: '#333333' }}>
                Kontakt
              </h2>
              <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: '#E5E5E5' }}></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              <div>
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Imię" 
                      className="border-0 shadow-none p-4 text-base"
                      style={{ 
                        backgroundColor: 'white',
                        color: '#333333'
                      }}
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Email" 
                      type="email" 
                      className="border-0 shadow-none p-4 text-base"
                      style={{ 
                        backgroundColor: 'white',
                        color: '#333333'
                      }}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Wiadomość" 
                      className="border-0 shadow-none p-4 text-base min-h-[120px]"
                      style={{ 
                        backgroundColor: 'white',
                        color: '#333333'
                      }}
                    />
                  </div>
                  <Button 
                    className="w-full py-3 text-base font-light border-0 shadow-none"
                    style={{ 
                      backgroundColor: '#333333',
                      color: '#F6F4EF'
                    }}
                  >
                    Wyślij
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1" style={{ backgroundColor: '#E5E5E5' }}>
                    <Mail className="h-4 w-4" style={{ color: '#666666' }} />
                  </div>
                  <div>
                    <h4 className="font-light mb-1" style={{ color: '#333333' }}>Email</h4>
                    <p style={{ color: '#666666' }}>kontakt@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1" style={{ backgroundColor: '#E5E5E5' }}>
                    <Phone className="h-4 w-4" style={{ color: '#666666' }} />
                  </div>
                  <div>
                    <h4 className="font-light mb-1" style={{ color: '#333333' }}>Telefon</h4>
                    <p style={{ color: '#666666' }}>+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1" style={{ backgroundColor: '#E5E5E5' }}>
                    <MapPin className="h-4 w-4" style={{ color: '#666666' }} />
                  </div>
                  <div>
                    <h4 className="font-light mb-1" style={{ color: '#333333' }}>Lokalizacja</h4>
                    <p style={{ color: '#666666' }}>Warszawa, Polska</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-px mb-6" style={{ backgroundColor: '#E5E5E5' }}></div>
          <p className="text-center text-sm font-light" style={{ color: '#666666' }}>
            © 2024 Portfolio. Stworzone z myślą o prostocie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
