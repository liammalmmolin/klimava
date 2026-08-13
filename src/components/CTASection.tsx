import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "react-coolicons";
import { Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t("Testa Klimava, det är", "Try Klimava, it's")}
            <br />
            <span className="gradient-text">{t("gratis", "free")}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            {t(
              "Appen är ny och vi bygger vidare på den varje vecka. Har du tankar eller idéer? Hör av dig – vi läser allt.",
              "The app is new and we keep improving it every week. Got thoughts or ideas? Get in touch – we read everything."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                <Apple className="w-5 h-5" />
                App Store
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{t("Gratis att använda", "Free to use")}</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>{t("Inga dolda kostnader", "No hidden costs")}</span>
            <div className="h-4 w-px bg-border" />
            <span>{t("GDPR-säker", "GDPR compliant")}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
