import { Header } from "@/components/Header";
import { FoundersSection } from "@/components/FoundersSection";
import { Footer } from "@/components/Footer";

const Founders = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-page)" }}>
      <Header />
      <main className="pt-16">
        <FoundersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Founders;
