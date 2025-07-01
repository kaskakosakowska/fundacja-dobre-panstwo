

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
              <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }} className="p-4 rounded-lg backdrop-blur-sm mx-auto relative px-[10px]">
                <img src="/lovable-uploads/67187d9c-6fe3-4bda-b537-0eeb08b6d5a7.png" alt="Fundacja Dobre Państwo Logo" className="w-96 h-96 object-contain drop-shadow-lg mx-auto relative z-10" />
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
                  Fundacja Dobre Państwo narodziła się z potrzeby radykalnych zmian w polskim systemie politycznym, społecznym i gospodarczym. Naszym celem jest przywrócenie obywatelom realnej kontroli nad demokratycznymi procesami oraz budowanie lepszego jutra dla wszystkich Polaków.
                </p>
                
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-sans font-semibold" style={{ color: '#333333' }}>
                    Nasze główne obszary działania:
                  </h3>
                  
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
                    Od listopada 2023 do września 2024 zainicjowaliśmy aż <strong>66 oddolnych inicjatyw społecznych</strong>, które zostały przedłożone władzy w formie petycji i lobbingu. Zabiegamy o skrócenie X kadencji Sejmu i przedterminowe wybory parlamentarne.
                  </p>
                </div>
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
                    }}>fundacja@dobrepanstwo.org</p>
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
                    }}>+48 501 010101</p>
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
                    }}>Żbikowa 14, 61-065 Poznań</p>
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

