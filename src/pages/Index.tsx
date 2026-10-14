import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksBlock } from "@/components/HowItWorksBlock";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ClosingQuote } from "@/components/ClosingQuote";
import { StackSection } from "@/components/StackSection";
import { useHeroShrink } from "@/hooks/use-hero-shrink";
import { Navigate, useSearchParams } from "react-router-dom";

const Index = () => {
  const heroScale = useHeroShrink();
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <StackSection z={10} rounded={false} sticky>
          <HeroSection scale={heroScale} />
          {/* Extra buffer so the pin holds for a moment before the next card sweeps up over it.
              Opaque background — a transparent gap here lets this sticky layer's stale paint
              bleed through wherever a higher layer later has a gap of its own. */}
          <div className="h-[40vh] bg-background" aria-hidden />
        </StackSection>
        <StackSection z={20}>
          <HowItWorksBlock />
        </StackSection>
        <StackSection z={30} rounded={false}>
          <PartnersSection />
          <HowItWorksSection />
          <CTASection />
        </StackSection>
        <StackSection z={40} rounded={false}>
          <Footer />
        </StackSection>
        {/* Plain content on the base page background, sitting right below the footer card */}
        <StackSection z={50} rounded={false}>
          <ClosingQuote />
        </StackSection>
      </main>
    </div>
  );
};

export default Index;
