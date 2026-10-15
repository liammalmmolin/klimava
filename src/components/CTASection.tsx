import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Check, Lock } from "react-coolicons";
import { Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import klimavaIcon from "@/assets/klimava-logo.jpeg";

// Fixed scatter of sparkle dots around the icon — computed once, not randomized per render.
const glitterDots = [
  { top: "6%", left: "18%", size: 4, duration: 2.2, delay: 0 },
  { top: "12%", left: "82%", size: 3, duration: 1.8, delay: 0.4 },
  { top: "28%", left: "4%", size: 3, duration: 2.6, delay: 0.9 },
  { top: "22%", left: "94%", size: 4, duration: 2, delay: 0.2 },
  { top: "50%", left: "0%", size: 2, duration: 1.6, delay: 1.2 },
  { top: "48%", left: "98%", size: 3, duration: 2.4, delay: 0.6 },
  { top: "74%", left: "8%", size: 3, duration: 2, delay: 1.5 },
  { top: "78%", left: "90%", size: 2, duration: 1.9, delay: 0.3 },
  { top: "92%", left: "30%", size: 4, duration: 2.3, delay: 1 },
  { top: "90%", left: "68%", size: 3, duration: 1.7, delay: 0.7 },
];

export const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="relative overflow-hidden bg-foreground py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Static icon; only the sibling decoration layer moves. */}
          <div className="relative mx-auto mb-8 flex h-52 w-52 items-center justify-center md:h-64 md:w-64">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0"
              aria-hidden
            >
            {/* Glow */}
            <div
              className="absolute inset-0 scale-110 rounded-full opacity-90 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--secondary)/0.75), hsl(var(--primary)/0.55) 55%, transparent 75%)",
              }}
              aria-hidden
            />

            {/* Glitter dots */}
            {glitterDots.map((d, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-primary-foreground"
                style={{ top: d.top, left: d.left, width: d.size, height: d.size }}
                animate={{ opacity: [0.1, 1, 0.1], scale: [0.5, 1.3, 0.5] }}
                transition={{ duration: d.duration, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
                aria-hidden
              />
            ))}
            </motion.div>

            <div
              className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] shadow-elevated md:h-40 md:w-40"
            >
              <img src={klimavaIcon} alt="Klimava" className="h-full w-full object-cover" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-background mb-6">
            {t("Testa Klimava, det är", "Try Klimava, it's")}
            <br />
            <span className="gradient-text">{t("gratis", "free")}</span>
          </h2>
          <p className="text-lg text-background/60 mb-10 max-w-xl mx-auto leading-relaxed">
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
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-3.5 py-1.5 text-xs font-medium text-background backdrop-blur-sm">
              <Phone className="h-3.5 w-3.5 text-secondary" />
              {t("Gratis att använda", "Free to use")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-3.5 py-1.5 text-xs font-medium text-background backdrop-blur-sm">
              <Check className="h-3.5 w-3.5 text-secondary" />
              {t("Inga dolda kostnader", "No hidden costs")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-3.5 py-1.5 text-xs font-medium text-background backdrop-blur-sm">
              <Lock className="h-3.5 w-3.5 text-secondary" />
              {t("GDPR-säker", "GDPR compliant")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
