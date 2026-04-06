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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground"
              onClick={() => navigate({ pathname: "/", hash: "#recycling-section" })}
            >
              ← {t("Tillbaka", "Back")}
            </Button>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              {t(
                <>Smart återvinning med <span className="gradient-text">Klimava</span></>,
                <>Smart recycling with <span className="gradient-text">Klimava</span></>
              )}
            </h1>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{t(
                "Klimava gör återvinning enklare, smartare och mer motiverande genom att kombinera GPS teknik med ett belöningssystem.",
                "Klimava makes recycling easier, smarter and more motivating by combining GPS technology with a reward system."
              )}</p>
              <p>{t(
                "När du använder appen känner den automatiskt av när du befinner dig nära en av våra utmarkerade återvinningsstationer. Så fort du kommer inom cirka 100 meter aktiveras en inbyggd scanner i appen.",
                "When you use the app, it automatically detects when you are near one of our marked recycling stations. As soon as you come within about 100 meters, a built-in scanner is activated in the app."
              )}</p>
              <p>{t(
                "På plats kan du enkelt scanna de produkter du vill återvinna. Klimava registrerar att du befinner dig på rätt plats och kopplar dina handlingar till ett faktiskt återvinningstillfälle.",
                "On site, you can easily scan the products you want to recycle. Klimava registers that you are in the right place and links your actions to an actual recycling event."
              )}</p>
              <p>{t(
                "Varje gång du återvinner korrekt och på rätt plats belönas du med poäng. Det gör att återvinning inte bara blir en vana utan något som känns direkt givande.",
                "Every time you recycle correctly and in the right place, you are rewarded with points. This makes recycling not just a habit but something that feels immediately rewarding."
              )}</p>
              <p>{t(
                "Genom att kombinera teknik, platsdata och beteendeförändring vill vi göra det enklare för fler att ta ansvar i vardagen. Med Klimava blir varje återvunnen produkt ett steg mot en mer hållbar livsstil och samtidigt en chans att tjäna belöningar.",
                "By combining technology, location data and behavioral change, we want to make it easier for more people to take responsibility in everyday life. With Klimava, every recycled product becomes a step towards a more sustainable lifestyle and at the same time a chance to earn rewards."
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
