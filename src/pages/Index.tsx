import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-page)" }}>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
