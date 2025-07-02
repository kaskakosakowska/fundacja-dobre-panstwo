
import { AboutHeader } from "@/components/about/AboutHeader";
import { BasicInfoCard } from "@/components/about/BasicInfoCard";
import { ContactCard } from "@/components/about/ContactCard";
import { MissionSection } from "@/components/about/MissionSection";
import { BoardSection } from "@/components/about/BoardSection";
import { LegalInfoSection } from "@/components/about/LegalInfoSection";
import { FileManagementSection } from "@/components/about/FileManagementSection";
import { AboutFooter } from "@/components/about/AboutFooter";

const ONas = () => {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F6F4EF' }}>
      <AboutHeader />

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-4xl">
          
          {/* Statutory Information */}
          <section className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <BasicInfoCard />
              <ContactCard />
            </div>
          </section>

          <MissionSection />
          <BoardSection />
          <LegalInfoSection />
          <FileManagementSection />
        </div>
      </main>

      <AboutFooter />
    </div>
  );
};

export default ONas;
