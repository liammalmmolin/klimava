import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsKlimavaSection } from "@/components/WhatIsKlimavaSection";
import { HowItWorksStepsSection } from "@/components/HowItWorksStepsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { WhyKlimavaSection } from "@/components/WhyKlimavaSection";
import { ForBusinessSection } from "@/components/ForBusinessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WhatIsKlimavaSection />
        <HowItWorksStepsSection />
        <FeaturesSection />
        <PartnersSection />
        <WhyKlimavaSection />
        <ForBusinessSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
