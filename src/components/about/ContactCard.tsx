import { Card, CardContent } from "@/components/ui/card";

export const ContactCard = () => {
  return (
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
  );
};