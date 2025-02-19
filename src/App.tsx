import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nyirfacukor from "./pages/Nyirfacukor";
import Rolunk from "./pages/Rolunk";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/printify-landing-portal/"}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projektek/nyirfacukor" element={<Nyirfacukor />} />
          <Route path="/rolunk" element={<Rolunk />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
