import { Header } from "@/components/layout/Header";
import { NavigationCards } from "@/components/layout/NavigationCards";
import { AboutFoundation } from "@/components/sections/AboutFoundation";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { SupportSection } from "@/components/sections/SupportSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col" style={{
      backgroundColor: '#F6F4EF'
    }}>
      <Header />
      
      <main className="flex-1 px-6 flex flex-col justify-center">
        <div className="container mx-auto max-w-6xl">
          <NavigationCards />
          <AboutFoundation />
          <LatestArticles />
          <SupportSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;