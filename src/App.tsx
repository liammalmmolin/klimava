import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import PageTitle from "./components/PageTitle";
import ImageWarmer from "./components/ImageWarmer";
import Index from "./pages/Index";
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const AboutApp = lazy(() => import("./pages/AboutApp"));
const Partners = lazy(() => import("./pages/Partners"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Recycling = lazy(() => import("./pages/Recycling"));
const Challenges = lazy(() => import("./pages/Challenges"));
const TileDetail = lazy(() => import("./pages/TileDetail"));
const SLPartnership = lazy(() => import("./pages/SLPartnership"));
const Support = lazy(() => import("./pages/Support"));
const Invite = lazy(() => import("./pages/Invite"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
          <ScrollToTop />
          <PageTitle />
          <ImageWarmer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/om-appen" element={<AboutApp />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/integritetspolicy" element={<Privacy />} />
            <Route path="/privacy" element={<Navigate to="/integritetspolicy" replace />} />
            <Route path="/anvandarvillkor" element={<Terms />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/atervinning" element={<Recycling />} />
            <Route path="/klimatpaverkan" element={<TileDetail kind="climate" />} />
            <Route path="/kollektivtrafik" element={<TileDetail kind="transit" />} />
            <Route path="/utmaningar" element={<Challenges />} />
            <Route path="/sl-samarbete" element={<SLPartnership />} />
            <Route path="/support" element={<Support />} />
            <Route path="/invite" element={<Invite />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
      </MotionConfig>
    </LanguageProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
