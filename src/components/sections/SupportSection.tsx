export const SupportSection = () => {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="text-2xl md:text-3xl font-sans font-semibold mb-4" style={{ color: '#333333' }}>
            Wspieraj nasze działania
          </h2>
          <p className="text-lg mb-6" style={{ color: '#666666' }}>
            Każda wpłata, nawet najmniejsza, przybliża nas do celu budowania lepszego państwa.
          </p>
          <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <p className="font-medium text-lg" style={{ color: '#333333' }}>
              PKO BP: <strong>06 1020 1169 0000 8802 0794 5530</strong>
            </p>
            <p className="text-sm mt-2" style={{ color: '#666666' }}>
              Fundacja Dobre Państwo - działalność statutowa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};