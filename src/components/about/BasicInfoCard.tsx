import { Card, CardContent } from "@/components/ui/card";

export const BasicInfoCard = () => {
  return (
    <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <CardContent className="p-8">
        <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
          Dane podstawowe
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>Pełna nazwa:</h3>
            <p className="font-sans" style={{ color: '#666666' }}>Fundacja Dobre Państwo</p>
          </div>
          <div>
            <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>KRS:</h3>
            <p className="font-sans" style={{ color: '#666666' }}>0000123456</p>
          </div>
          <div>
            <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>NIP:</h3>
            <p className="font-sans" style={{ color: '#666666' }}>123-456-78-90</p>
          </div>
          <div>
            <h3 className="font-sans font-medium mb-2" style={{ color: '#333333' }}>REGON:</h3>
            <p className="font-sans" style={{ color: '#666666' }}>123456789</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};