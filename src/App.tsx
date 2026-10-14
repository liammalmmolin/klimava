import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import AboutApp from "./pages/AboutApp";
import Partners from "./pages/Partners";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Recycling from "./pages/Recycling";
import Challenges from "./pages/Challenges";
import SLPartnership from "./pages/SLPartnership";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/om-appen" element={<AboutApp />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/integritetspolicy" element={<Privacy />} />
            <Route path="/anvandarvillkor" element={<Terms />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/atervinning" element={<Recycling />} />
            <Route path="/utmaningar" element={<Challenges />} />
            <Route path="/sl-samarbete" element={<SLPartnership />} />
            <Route path="/support" element={<Support />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
