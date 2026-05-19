import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseLg } from "react-coolicons";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * NewsBanner – enkel nyhetsbar längst upp på sidan.
 * För att uppdatera nyheten: ändra objektet `news` nedan.
 * - emoji: liten ikon till vänster
 * - sv / en: rubriktext per språk
 * - link: valfri länk; sätt till null om ingen länk ska visas
 */
const news = {
  emoji: "🚆",
  sv: {
    title: "Nyhet:",
    text: "SL har valt att samarbeta med Klimava – snart kan du scanna ditt biljettkvitto från SL-appen och belönas för ditt kollektiva resande.",
    cta: "Läs mer",
  },
  en: {
    title: "News:",
    text: "SL has chosen to partner with Klimava – soon you'll be able to scan your ticket receipt from the SL app and get rewarded for using public transport.",
    cta: "Read more",
  },
  link: "#how-it-works" as string | null,
};

export const NewsBanner = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(true);
  const content = language === "sv" ? news.sv : news.en;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-[60] overflow-hidden"
        >
          <div className="gradient-bg text-primary-foreground">
            <div className="container mx-auto px-6 py-2.5 flex items-center gap-3 text-sm">
              <span className="text-base shrink-0" aria-hidden>{news.emoji}</span>
              <p className="flex-1 leading-snug">
                <span className="font-semibold">{content.title}</span>{" "}
                <span className="opacity-95">{content.text}</span>
                {news.link && (
                  <a
                    href={news.link}
                    className="ml-2 underline underline-offset-2 font-semibold hover:opacity-90 whitespace-nowrap"
                  >
                    {content.cta} →
                  </a>
                )}
              </p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Stäng nyhet"
                className="shrink-0 p-1 rounded-md hover:bg-white/15 transition-colors"
              >
                <CloseLg className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
