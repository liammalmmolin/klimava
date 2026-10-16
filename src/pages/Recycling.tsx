import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Recycling = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground"
              onClick={() => navigate(-1)}
            >
              ← {t("Tillbaka", "Back")}
            </Button>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              {t(
                <>Smart återvinning med <span className="gradient-text">Klimava.</span></>,
                <>Smart recycling with <span className="gradient-text">Klimava.</span></>
              )}
            </h1>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{t(
                "Klimava hittar automatiskt återvinningsstationer nära dig. När du är inom cirka 100 meter aktiveras appens scanner. Scanna dina produkter på plats, så registreras återvinningen och du får poäng att använda till belöningar.",
                "Klimava automatically finds recycling stations near you. When you come within about 100 meters, the app's scanner is activated. Scan your products on site, your recycling is registered and you earn points to use for rewards."
              )}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recycling;
