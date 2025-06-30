
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin, Code, Palette, Zap } from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">
                Strona główna
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">
                O mnie
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 transition-colors">
                Usługi
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Witaj na mojej
              <span className="text-blue-600 block">stronie</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tworzymy proste, jasne i czytelne rozwiązania, które pomagają Ci osiągnąć Twoje cele w cyfrowym świecie.
            </p>
            <Button 
              onClick={() => scrollToSection('about')} 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              Poznaj mnie <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">O mnie</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Jestem pasjonatem tworzenia prostych i funkcjonalnych rozwiązań. 
              Wierzę, że najlepsze projekty to te, które są intuicyjne i przyjazne użytkownikowi.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Moja filozofia</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Każdy projekt traktuję jako wyzwanie, gdzie prostota spotyka się z funkcjonalnością. 
                Skupiam się na tworzeniu rozwiązań, które nie tylko wyglądają dobrze, ale przede wszystkim działają intuicyjnie.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Czytelny i przejrzysty design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Responsywność na wszystkich urządzeniach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-slate-700">Optymalizacja wydajności</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-16 w-16 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Czysty kod</h4>
                <p className="text-slate-600">
                  Piszę kod, który jest nie tylko funkcjonalny, ale także czytelny i łatwy w utrzymaniu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Moje usługi</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Oferuję kompleksowe rozwiązania dostosowane do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Rozwój stron</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed">
                  Tworzę nowoczesne, responsywne strony internetowe z naciskiem na prostotę i funkcjonalność
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Design UI/UX</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed">
                  Projektuję intuicyjne interfejsy użytkownika, które łączą estetykę z użytecznością
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Optymalizacja</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed">
                  Optymalizuję wydajność i szybkość działania, zapewniając płynne doświadczenie użytkownika
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skontaktuj się</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Masz projekt w głowie? Porozmawiajmy o tym, jak możemy go razem zrealizować.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Napisz do mnie</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Twoje imię" className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                </div>
                <div>
                  <Textarea placeholder="Twoja wiadomość..." className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-h-[120px]" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Dane kontaktowe</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Email</h4>
                    <p className="text-slate-600">kontakt@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Telefon</h4>
                    <p className="text-slate-600">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Lokalizacja</h4>
                    <p className="text-slate-600">Warszawa, Polska</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Portfolio. Stworzone z pasją do prostego designu.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
