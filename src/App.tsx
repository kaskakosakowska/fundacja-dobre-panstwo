
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SzkatukaKosztownosci from "./pages/SzkatukaKosztownosci";
import SzczyptaSoli from "./pages/SzczyptaSoli";
import GlosyKtoreSlychac from "./pages/GlosyKtoreSlychac";
import ApiKnowledge from "./pages/ApiKnowledge";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/szkatulka-kosztownosci" element={<SzkatukaKosztownosci />} />
          <Route path="/szczypta-soli" element={<SzczyptaSoli />} />
          <Route path="/glosy-ktore-slychac" element={<GlosyKtoreSlychac />} />
          <Route path="/api-knowledge" element={<ApiKnowledge />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
