import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import appChallengesScreen from "@/assets/app-challenges.png";

const Challenges = () => {
  const { t } = useLanguage();

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
            <Link to="/#how-it-works">
              <Button variant="ghost" className="mb-8 text-muted-foreground">
                ← {t("Tillbaka", "Back")}
              </Button>
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              {t(
                <>Utmaningar & <span className="gradient-text">topplistor</span></>,
                <>Challenges & <span className="gradient-text">leaderboards</span></>
              )}
            </h1>

            <div className="flex justify-center mb-12">
              <div className="w-48 md:w-56">
                <div className="bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                  <img src={appChallengesScreen} alt={t("Klimava utmaningar", "Klimava challenges")} className="rounded-[2rem] w-full" />
                </div>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{t(
                "Klimava gör hållbarhet till en social upplevelse. Delta i veckovisa klimatutmaningar och samla bonuspoäng genom enkla, klimatsmarta handlingar i vardagen.",
                "Klimava turns sustainability into a social experience. Join weekly climate challenges and earn bonus points through simple, climate-smart actions in everyday life."
              )}</p>
              <p>{t(
                "Tävla mot dina vänner och familj på topplistor – vem samlar flest Klimava-poäng? Vem lever mest hållbart? Motivera varandra att göra bättre val varje dag.",
                "Compete against your friends and family on leaderboards – who earns the most Klimava points? Who lives most sustainably? Motivate each other to make better choices every day."
              )}</p>
              <p>{t(
                "Utmaningarna varierar från vecka till vecka och kan handla om allt från att handla ekologiskt, använda kollektivtrafiken, återvinna eller köpa second hand. Varje utmaning ger dig chansen att samla extra poäng utöver dina vanliga aktiviteter.",
                "The challenges vary from week to week and can range from buying organic, using public transport, recycling or buying second-hand. Each challenge gives you the chance to earn extra points on top of your regular activities."
              )}</p>
              <p>{t(
                "Genom att kombinera tävlingsmoment med hållbara val skapar vi en positiv spiral där du och dina vänner pushar varandra till en grönare livsstil – samtidigt som ni har kul.",
                "By combining competitive elements with sustainable choices, we create a positive spiral where you and your friends push each other towards a greener lifestyle – while having fun."
              )}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Challenges;
