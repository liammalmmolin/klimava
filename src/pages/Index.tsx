import { Header } from "@/components/Header";
import { NewsBanner } from "@/components/NewsBanner";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navigate, useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  // Invite links point at "/" (not "/invite") specifically so they get a
  // real HTTP 200 + this page's existing Open Graph image/title when
  // shared in chat apps — GitHub Pages returns 404 (no link preview) for
  // any other path. Once here, hand off to the actual invite page.
  if (code) {
    return <Navigate to={`/invite?code=${encodeURIComponent(code)}`} replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <NewsBanner />
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
