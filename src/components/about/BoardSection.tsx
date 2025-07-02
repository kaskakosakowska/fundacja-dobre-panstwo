import { Card, CardContent } from "@/components/ui/card";

export const BoardSection = () => {
  return (
    <section className="py-8">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Board of Directors */}
        <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <CardContent className="p-8">
            <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
              Zarząd
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Prezes Zarządu</h3>
                <p className="font-sans" style={{ color: '#666666' }}>Anna Kowalska</p>
              </div>
              <div>
                <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Wiceprezes Zarządu</h3>
                <p className="font-sans" style={{ color: '#666666' }}>Jan Nowak</p>
              </div>
              <div>
                <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Członek Zarządu</h3>
                <p className="font-sans" style={{ color: '#666666' }}>Maria Wiśniewska</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supervisory Board */}
        <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <CardContent className="p-8">
            <h2 className="text-2xl font-serif font-medium mb-6" style={{ color: '#333333' }}>
              Rada Nadzorcza
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Przewodniczący</h3>
                <p className="font-sans" style={{ color: '#666666' }}>Prof. dr hab. Piotr Zieliński</p>
              </div>
              <div>
                <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Członek</h3>
                <p className="font-sans" style={{ color: '#666666' }}>Dr Katarzyna Lewandowska</p>
              </div>
              <div>
                <h3 className="font-sans font-medium" style={{ color: '#333333' }}>Członek</h3>
                <p className="font-sans" style={{ color: '#666666' }}>Mgr Tomasz Kamiński</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};