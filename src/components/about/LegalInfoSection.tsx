import { Card, CardContent } from "@/components/ui/card";

export const LegalInfoSection = () => {
  return (
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
  );
};