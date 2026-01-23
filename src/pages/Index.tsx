import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FoundersSection } from "@/components/FoundersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <AppPreviewSection />
        <FeaturesSection />
        <FoundersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
