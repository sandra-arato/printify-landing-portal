import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nyirfacukor from "./pages/Nyirfacukor";
import Rolunk from "./pages/Rolunk";
import Portfolio from "./pages/Portfolio";
import ISB from "./pages/ISB";
import Oltokozpont from "./pages/Oltokozpont";
import Lurdy from "./pages/Lurdy";
import Jelolestechnika from "./pages/Jelolestechnika";
import Cirkusz from "./pages/Cirkusz";
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projektek/nyirfacukor" element={<Nyirfacukor />} />
            <Route path="/projektek/international-school-of-budapest" element={<ISB />} />
            <Route path="/projektek/oltokozpont" element={<Oltokozpont />} />
            <Route path="/projektek/lurdy-haz" element={<Lurdy />} />
            <Route path="/projektek/jelolestechnika" element={<Jelolestechnika />} />
            <Route path="/projektek/budapesti-nagycirkusz" element={<Cirkusz />} />
            <Route path="/rolunk" element={<Rolunk />} />
            <Route path="/referenciak" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
