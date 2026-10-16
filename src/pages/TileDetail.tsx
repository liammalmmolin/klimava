import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CONTENT = {
  climate: {
    sv: { lead: "Klimatpåverkan –", accent: "Vardagsval som räknas.", body: "Små förändringar i vardagen kan göra skillnad. I Klimava kan du delta i klimatutmaningar, göra hållbara val och följa din klimatpåverkan. Samla poäng för godkända aktiviteter och använd dem till belöningar." },
    en: { lead: "Climate impact –", accent: "Everyday choices that count.", body: "Small changes in everyday life can make a difference. In Klimava you can join climate challenges, make sustainable choices and track your climate impact. Earn points for approved activities and use them for rewards." },
  },
  transit: {
    sv: { lead: "Kollektivtrafik –", accent: "Belöning för kollektivresor.", body: "Låt dina kollektivresor ge något tillbaka. Registrera din SL-biljett i Klimava och få poäng enligt biljettens poängvillkor. Poängen kan du använda till belöningar i appen." },
    en: { lead: "Public transport –", accent: "Rewards for public transport.", body: "Let your public transport trips give something back. Register your SL ticket in Klimava and earn points according to the ticket's points terms. You can use the points for rewards in the app." },
  },
} as const;

const TileDetail = ({ kind }: { kind: keyof typeof CONTENT }) => {
  const { language, t } = useLanguage() as ReturnType<typeof useLanguage> & { language: "sv" | "en" };
  const navigate = useNavigate();
  const c = CONTENT[kind][language === "en" ? "en" : "sv"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Button variant="ghost" className="mb-8 text-muted-foreground" onClick={() => navigate(-1)}>
              ← {t("Tillbaka", "Back")}
            </Button>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              {c.lead} <span className="gradient-text">{c.accent}</span>
            </h1>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{c.body}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TileDetail;
