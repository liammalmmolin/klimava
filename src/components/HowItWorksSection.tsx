import { revealViewport } from "@/lib/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Star as TrophyStar, ArrowRightMd } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";

const teasers = [
  {
    icon: MapPin,
    to: "/atervinning",
    title: { sv: "Återvinning som belönar dig.", en: "Recycling that rewards you." },
    desc: {
      sv: "GPS känner av när du är på en återvinningsstation och låser upp scannern direkt.",
      en: "GPS detects when you're at a recycling station and unlocks the scanner instantly.",
    },
  },
  {
    icon: TrophyStar,
    to: "/utmaningar",
    title: { sv: "Utmaningar & topplistor", en: "Challenges & leaderboards" },
    desc: {
      sv: "Tävla mot vänner i veckovisa klimatutmaningar och samla bonuspoäng.",
      en: "Compete with friends in weekly climate challenges and earn bonus points.",
    },
  },
];

export const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {teasers.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.5}}
            >
              <Link
                to={item.to}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-elevated"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 font-heading text-xl font-medium text-foreground">
                  {t(item.title.sv, item.title.en)}
                </h3>
                <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">{t(item.desc.sv, item.desc.en)}</p>
                <span className="inline-flex items-center gap-1.5 font-semibold text-primary group-hover:underline">
                  {t("Läs mer", "Read more")}
                  <ArrowRightMd className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
