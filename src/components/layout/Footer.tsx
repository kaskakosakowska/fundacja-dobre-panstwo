import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 flex-shrink-0">
      <div className="container mx-auto max-w-6xl">
        <div className="w-full h-px mb-8 mx-auto max-w-4xl" style={{
          backgroundColor: '#E5E5E5'
        }}></div>
        
        {/* Contact Information Container */}
        <div className="mb-8 flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="p-6 rounded-lg backdrop-blur-sm" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{
                    backgroundColor: '#E5E5E5'
                  }}>
                    <Mail className="h-4 w-4" style={{
                      color: '#666666'
                    }} />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-sm" style={{
                      color: '#333333'
                    }}>Email</h4>
                    <p className="font-sans text-sm" style={{
                      color: '#666666'
                    }}>fundacja@dobrepanstwo.org</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{
                    backgroundColor: '#E5E5E5'
                  }}>
                    <Phone className="h-4 w-4" style={{
                      color: '#666666'
                    }} />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-sm" style={{
                      color: '#333333'
                    }}>Telefon</h4>
                    <p className="font-sans text-sm" style={{
                      color: '#666666'
                    }}>+48 501 010101</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{
                    backgroundColor: '#E5E5E5'
                  }}>
                    <MapPin className="h-4 w-4" style={{
                      color: '#666666'
                    }} />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-sm" style={{
                      color: '#333333'
                    }}>Lokalizacja</h4>
                    <p className="font-sans text-sm" style={{
                      color: '#666666'
                    }}>Żbikowa 14, 61-065 Poznań</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-4xl mx-auto">
          <p className="text-sm font-sans font-medium text-center" style={{
            color: '#666666'
          }}>
            © 2024 Fundacja Dobre Państwo. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
            <Link to="/o-nas" className="text-sm font-sans font-medium hover:opacity-70 transition-opacity" style={{
              color: '#666666'
            }}>
              O nas
            </Link>
            <Link to="/api-knowledge" className="text-sm font-sans font-medium hover:opacity-70 transition-opacity" style={{
              color: '#666666'
            }}>
              API Knowledge
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};