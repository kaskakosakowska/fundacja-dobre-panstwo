import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const NavigationCards = () => {
  return (
    <section className="py-1">
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <Link to="/szkatulka-kosztownosci">
            <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity h-full" style={{
              backgroundColor: 'transparent'
            }}>
              <CardContent className="p-6 text-center flex flex-col justify-center h-full ml-10">
                <h3 style={{
                  color: '#333333'
                }} className="text-sm font-sans mb-2 min-h-[2.5rem] flex items-center justify-center leading-tight font-semibold text-zinc-700 md:text-xl px-[2px]">
                  Szkatułka kosztowności
                </h3>
                <div className="w-12 h-px mx-auto" style={{
                  backgroundColor: '#E5E5E5'
                }}></div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/szczypta-soli">
            <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity h-full" style={{
              backgroundColor: 'transparent'
            }}>
              <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                <h3 style={{
                  color: '#333333'
                }} className="text-sm font-sans mb-4 min-h-[2.5rem] flex items-center justify-center leading-tight px-2 font-semibold text-zinc-700 md:text-xl">
                  Szczypta Soli
                </h3>
                <div className="w-12 h-px mx-auto" style={{
                  backgroundColor: '#E5E5E5'
                }}></div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/glosy-ktore-slychac">
            <Card className="border-0 shadow-none cursor-pointer hover:opacity-80 transition-opacity h-full" style={{
              backgroundColor: 'transparent'
            }}>
              <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                <h3 style={{
                  color: '#333333'
                }} className="text-sm font-sans mb-2 min-h-[2.5rem] flex items-center justify-center leading-tight px-2 font-semibold text-zinc-700 md:text-xl">
                  Głosy które słychać
                </h3>
                <div className="w-12 h-px mx-auto" style={{
                  backgroundColor: '#E5E5E5'
                }}></div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};