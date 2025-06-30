import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/009a872d-aa2c-4401-bef2-f1cf0207ea3e.png" 
              alt="Logo" 
              className="w-64 h-64 object-contain"
            />
          </div>
          <h1 className="text-5xl font-serif font-medium text-center" style={{ color: '#333333' }}>
            Fundacja Dobre Państwo
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Navigation to sections */}
          <section className="py-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/szkatulka-kosztownosci">
                <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity" style={{ backgroundColor: 'transparent' }}>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-lg md:text-xl font-sans font-medium mb-4 min-h-[3rem] flex items-center justify-center" style={{ color: '#333333' }}>
                      Szkatułka kosztowności
                    </h3>
                    <div className="w-12 h-px mx-auto" style={{ backgroundColor: '#E5E5E5' }}></div>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/szczypta-soli">
                <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity" style={{ backgroundColor: 'transparent' }}>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-lg md:text-xl font-sans font-medium mb-4 min-h-[3rem] flex items-center justify-center" style={{ color: '#333333' }}>
                      Szczypta Soli
                    </h3>
                    <div className="w-12 h-px mx-auto" style={{ backgroundColor: '#E5E5E5' }}></div>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/glosy-ktore-slychac">
                <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity" style={{ backgroundColor: 'transparent' }}>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-lg md:text-xl font-sans font-medium mb-4 min-h-[3rem] flex items-center justify-center" style={{ color: '#333333' }}>
                      Głosy które słychać
                    </h3>
                    <div className="w-12 h-px mx-auto" style={{ backgroundColor: '#E5E5E5' }}></div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-sans font-medium mb-6" style={{ color: '#333333' }}>
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
                      className="border-0 shadow-none p-4 text-base font-sans font-medium"
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
                      className="border-0 shadow-none p-4 text-base font-sans font-medium"
                      style={{ 
                        backgroundColor: 'white',
                        color: '#333333'
                      }}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Wiadomość" 
                      className="border-0 shadow-none p-4 text-base font-sans font-medium min-h-[120px]"
                      style={{ 
                        backgroundColor: 'white',
                        color: '#333333'
                      }}
                    />
                  </div>
                  <Button 
                    className="w-full py-3 text-base font-sans font-medium border-0 shadow-none"
                    style={{ 
                      backgroundColor: '#0A2140',
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
                    <h4 className="font-serif font-medium mb-1" style={{ color: '#333333' }}>Email</h4>
                    <p className="font-sans font-medium" style={{ color: '#666666' }}>kontakt@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1" style={{ backgroundColor: '#E5E5E5' }}>
                    <Phone className="h-4 w-4" style={{ color: '#666666' }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium mb-1" style={{ color: '#333333' }}>Telefon</h4>
                    <p className="font-sans font-medium" style={{ color: '#666666' }}>+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1" style={{ backgroundColor: '#E5E5E5' }}>
                    <MapPin className="h-4 w-4" style={{ color: '#666666' }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium mb-1" style={{ color: '#333333' }}>Lokalizacja</h4>
                    <p className="font-sans font-medium" style={{ color: '#666666' }}>Warszawa, Polska</p>
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
          <div className="flex justify-between items-center">
            <p className="text-sm font-sans font-medium" style={{ color: '#666666' }}>
              © 2024 Fundacja Dobre Państwo. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              <Link to="/api-knowledge" className="text-sm font-sans font-medium hover:opacity-70 transition-opacity" style={{ color: '#666666' }}>
                API Knowledge
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
