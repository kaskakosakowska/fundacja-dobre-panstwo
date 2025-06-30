
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PostTemplate = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Header */}
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center mb-4 hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
            <span style={{ color: '#666666' }}>Powrót</span>
          </Link>
          <h1 className="text-3xl font-light" style={{ color: '#333333' }}>
            Tytuł wpisu
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Post Container */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg h-fit" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4" style={{ color: '#333333' }}>
                    Główna treść wpisu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Image in top right corner */}
                    <img 
                      src="/lovable-uploads/a247c62f-0c85-460a-8ed0-b9c0be25623f.png" 
                      alt="Post image" 
                      className="float-right ml-6 mb-4 w-48 h-32 object-cover rounded-lg shadow-md"
                    />
                    
                    {/* Post content */}
                    <div className="text-base leading-relaxed" style={{ color: '#333333' }}>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p className="mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p className="mb-4">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p className="mb-4">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Containers */}
            <div className="space-y-6">
              {/* PDF Embedder Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#333333' }}>
                    Pełna treść PDF
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">PDF Embedder</p>
                    <p className="text-xs mt-2">Tutaj zostanie umieszczony embedder PDF-a z pełną treścią wpisu</p>
                  </div>
                </CardContent>
              </Card>

              {/* Audio Version Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#333333' }}>
                    Wersja audio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">Audio Player</p>
                    <p className="text-xs mt-2">Wersja audio PDF-a</p>
                  </div>
                </CardContent>
              </Card>

              {/* Mind Map Container */}
              <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: '#333333' }}>
                    Mapa pojęć
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" style={{ color: '#666666' }}>
                    <p className="text-sm">Mind Map</p>
                    <p className="text-xs mt-2">Interaktywna mapa pojęć związanych z wpisem</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full h-px mb-6" style={{ backgroundColor: '#E5E5E5' }}></div>
          <p className="text-center text-sm font-light" style={{ color: '#666666' }}>
            © 2024 Portfolio. Stworzone z myślą o prostocie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PostTemplate;
