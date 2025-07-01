export const Header = () => {
  return (
    <header className="py-4 px-6 flex-shrink-0">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }} className="p-4 rounded-lg backdrop-blur-sm mx-auto relative px-[10px]">
              <img 
                src="/lovable-uploads/67187d9c-6fe3-4bda-b537-0eeb08b6d5a7.png" 
                alt="Fundacja Dobre Państwo Logo" 
                className="w-96 h-96 object-contain drop-shadow-lg mx-auto relative z-10" 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};