
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SzkatulaKosztownosci from "./pages/SzkatulaKosztownosci";
import SzczyptaSoli from "./pages/SzczyptaSoli";
import GlosyKtoreSlychac from "./pages/GlosyKtoreSlychac";
import ApiKnowledge from "./pages/ApiKnowledge";
import ONas from "./pages/ONas";
import PostTemplate from "./pages/PostTemplate";
import AdminDashboard from "./pages/AdminDashboard";
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
          <Route path="/szkatulka-kosztownosci" element={<SzkatulaKosztownosci />} />
          <Route path="/szczypta-soli" element={<SzczyptaSoli />} />
          <Route path="/glosy-ktore-slychac" element={<GlosyKtoreSlychac />} />
          <Route path="/api-knowledge" element={<ApiKnowledge />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/post-template" element={<PostTemplate />} />
          
          {/* Routes for individual posts */}
          <Route path="/szkatulka-kosztownosci/:postId" element={<PostTemplate />} />
          <Route path="/szczypta-soli/:postId" element={<PostTemplate />} />
          <Route path="/glosy-ktore-slychac/:postId" element={<PostTemplate />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
