import { Card, CardContent } from "@/components/ui/card";

export const MissionSection = () => {
  return (
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
  );
};