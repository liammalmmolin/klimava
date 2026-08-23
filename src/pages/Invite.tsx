import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Apple, Gift } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Fill in once the app is live on Google Play — leave empty to hide the button.
const PLAY_STORE_URL = "";
const APP_STORE_URL = "https://apps.apple.com/se/app/klimava/id6760266069";

const Invite = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code")?.toUpperCase() ?? null;

  // Opens the app directly if it's already installed. If it isn't, this link
  // does nothing on its own — the buttons below (App/Play Store) are the
  // fallback until Universal Links are wired up for deferred deep linking.
  const appLink = code ? `klimava://onboarding?code=${code}` : "klimava://onboarding";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 shadow-elevated">
              <Gift className="w-8 h-8 text-primary-foreground" />
            </div>

            <span className="gradient-text font-semibold text-sm uppercase tracking-wider">
              {t("Du är inbjuden", "You're invited")}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              {t("Gå med i Klimava", "Join Klimava")}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {code
                ? t(
                    "Använd koden nedan när du skapar ditt konto, så får ni båda bonuspoäng direkt.",
                    "Use the code below when you create your account, and you'll both get bonus points right away."
                  )
                : t(
                    "Skapa ett konto och börja samla poäng för dina hållbara val.",
                    "Create an account and start earning points for your sustainable choices."
                  )}
            </p>

            {code && (
              <div className="inline-flex items-center gap-3 bg-muted rounded-2xl px-6 py-4 mb-8 border border-border">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t("Kod", "Code")}
                </span>
                <span className="text-2xl font-bold tracking-[0.2em] text-foreground">
                  {code}
                </span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <a href={appLink}>{t("Öppna i appen", "Open in app")}</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              {t("Har du inte appen än?", "Don't have the app yet?")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-3">
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Apple className="w-5 h-5" />
                  App Store
                </a>
              </Button>
              {PLAY_STORE_URL && (
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                    Google Play
                  </a>
                </Button>
              )}
            </div>

            {code && (
              <p className="text-xs text-muted-foreground mt-8">
                {t(
                  "Laddar du ner appen först gäller koden ändå — ange den bara när du skapar kontot.",
                  "If you download the app first, the code still works — just enter it when you create your account."
                )}
              </p>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Invite;
