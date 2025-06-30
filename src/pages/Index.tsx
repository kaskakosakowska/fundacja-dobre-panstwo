
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return <div className="min-h-screen font-sans flex flex-col" style={{
    backgroundColor: '#F6F4EF'
  }}>
      {/* Header */}
      <header className="py-4 px-6 flex-shrink-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="p-6 rounded-lg backdrop-blur-sm mx-auto relative" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                backgroundImage: `url('/lovable-uploads/5e769d0c-582f-42f5-967c-e935d8314d32.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* Overlay to ensure logo visibility */}
                <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg"></div>
                <img src="/lovable-uploads/33c754c7-fd44-4b02-83a8-2126e21b4c8a.png" alt="Fundacja Dobre Państwo Logo" className="w-72 h-72 object-contain drop-shadow-lg mx-auto relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 flex flex-col justify-center">
        <div className="container mx-auto max-w-6xl">
          
          {/* Navigation to sections */}
          <section className="py-1">
            <div className="flex justify-center items-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                <Link to="/szkatulka-kosztownosci">
                  <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity h-full" style={{
                  backgroundColor: 'transparent'
                }}>
                    <CardContent className="p-6 text-center flex flex-col justify-center h-full ml-10">
                      <h3 style={{
                      color: '#333333'
                    }} className="text-sm font-sans mb-2 min-h-[2.5rem] flex items-center justify-center leading-tight font-semibold text-zinc-700 md:text-xl px-[2px]">
                        Szkatułka kosztowności
                      </h3>
                      <div className="w-12 h-px mx-auto" style={{
                      backgroundColor: '#E5E5E5'
                    }}></div>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/szczypta-soli">
                  <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity h-full" style={{
                  backgroundColor: 'transparent'
                }}>
                    <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                      <h3 style={{
                      color: '#333333'
                    }} className="text-sm font-sans mb-4 min-h-[2.5rem] flex items-center justify-center leading-tight px-2 font-semibold text-zinc-700 md:text-xl">
                        Szczypta Soli
                      </h3>
                      <div className="w-12 h-px mx-auto" style={{
                      backgroundColor: '#E5E5E5'
                    }}></div>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/glosy-ktore-slychac">
                  <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity h-full" style={{
                  backgroundColor: 'transparent'
                }}>
                    <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                      <h3 style={{
                      color: '#333333'
                    }} className="text-sm font-sans mb-2 min-h-[2.5rem] flex items-center justify-center leading-tight px-2 font-semibold text-zinc-700 md:text-xl">
                        Głosy które słychać
                      </h3>
                      <div className="w-12 h-px mx-auto" style={{
                      backgroundColor: '#E5E5E5'
                    }}></div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </section>

          {/* About Foundation Section */}
          <section className="py-8 flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="p-8 md:p-12 rounded-lg backdrop-blur-sm mx-auto" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-justify" style={{
                color: '#333333'
              }}>
                  Fundacja Dobre Państwo działa od 2018 roku jako organizacja non-profit, której misją jest budowanie mostów między obywatelami a instytucjami publicznymi. Wierzymy, że każdy głos ma znaczenie i że prawdziwa demokracja kwitnie wtedy, gdy ludzie aktywnie uczestniczą w życiu społecznym. Nasze działania skupiają się na trzech głównych obszarach: edukacji obywatelskiej, transparentności władzy oraz wspieraniu lokalnych inicjatyw społecznych.
                  
                  W ramach programu "Szkatułka kosztowności" dokumentujemy i analizujemy wydatki publiczne, pomagając obywatelom zrozumieć, jak wykorzystywane są ich podatki. "Szczypta Soli" to nasza inicjatywa fact-checkingowa, która weryfikuje informacje pojawiające się w przestrzeni publicznej. Natomiast "Głosy które słychać" to platforma, gdzie każdy może podzielić się swoimi doświadczeniami z administracją publiczną.
                  
                  Działamy w oparciu o zasady transparentności, bezstronności i konstruktywnego dialogu. Naszym celem nie jest krytyka dla samej krytyki, ale budowanie lepszego, bardziej otwartego i responsywnego państwa dla wszystkich obywateli.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 flex-shrink-0">
        <div className="container mx-auto max-w-6xl">
          <div className="w-full h-px mb-8 mx-auto max-w-4xl" style={{
          backgroundColor: '#E5E5E5'
        }}></div>
          
          {/* Contact Information Container */}
          <div className="mb-8 flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="p-6 rounded-lg backdrop-blur-sm" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{
                    backgroundColor: '#E5E5E5'
                  }}>
                      <Mail className="h-4 w-4" style={{
                      color: '#666666'
                    }} />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-sm" style={{
                      color: '#333333'
                    }}>Email</h4>
                      <p className="font-sans text-sm" style={{
                      color: '#666666'
                    }}>kontakt@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{
                    backgroundColor: '#E5E5E5'
                  }}>
                      <Phone className="h-4 w-4" style={{
                      color: '#666666'
                    }} />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-sm" style={{
                      color: '#333333'
                    }}>Telefon</h4>
                      <p className="font-sans text-sm" style={{
                      color: '#666666'
                    }}>+48 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{
                    backgroundColor: '#E5E5E5'
                  }}>
                      <MapPin className="h-4 w-4" style={{
                      color: '#666666'
                    }} />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-sm" style={{
                      color: '#333333'
                    }}>Lokalizacja</h4>
                      <p className="font-sans text-sm" style={{
                      color: '#666666'
                    }}>Warszawa, Polska</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-4xl mx-auto">
            <p className="text-sm font-sans font-medium text-center" style={{
            color: '#666666'
          }}>
              © 2024 Fundacja Dobre Państwo. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              <Link to="/o-nas" className="text-sm font-sans font-medium hover:opacity-70 transition-opacity" style={{
              color: '#666666'
            }}>
                O nas
              </Link>
              <Link to="/api-knowledge" className="text-sm font-sans font-medium hover:opacity-70 transition-opacity" style={{
              color: '#666666'
            }}>
                API Knowledge
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
