import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import consumption800 from "@/assets/sweden-consumption-800.webp";
import consumption1600 from "@/assets/sweden-consumption-1600.webp";
import subway800 from "@/assets/sweden-subway-800.webp";
import subway1600 from "@/assets/sweden-subway-1600.webp";
import recycling800 from "@/assets/sweden-recycling-800.webp";
import recycling1600 from "@/assets/sweden-recycling-1600.webp";

const srcSet = (small: string, large: string) => `${small} 800w, ${large} 1600w`;

export const SwedenStrip = () => {
  const { t } = useLanguage();

  const tiles = [
    {
      photo: consumption1600,
      srcSet: srcSet(consumption800, consumption1600),
      objectPosition: "center",
      eyebrow: t("Klimatpåverkan", "Climate impact"),
      title: t("Vardagsval som räknas", "Everyday choices that count"),
      to: null as string | null,
      featured: false,
    },
    {
      photo: subway1600,
      srcSet: srcSet(subway800, subway1600),
      objectPosition: "center",
      eyebrow: t("SL · Störst samarbetspartner", "SL · Largest partner"),
      title: t("Belöning för kollektivresor", "Rewards for public transport"),
      to: null,
      featured: true,
    },
    {
      photo: recycling1600,
      srcSet: srcSet(recycling800, recycling1600),
      objectPosition: "left center",
      eyebrow: t("Återvinning", "Recycling"),
      title: t("Poäng vid varje station", "Points at every station"),
      to: "/atervinning",
      featured: false,
    },
  ];

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-widest text-primary/80 mb-8"
        >
          {t("Klimava i Sverige", "Klimava in Sweden")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4">
          {tiles.map((tile, i) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative aspect-[16/10] overflow-hidden md:aspect-[4/5] rounded-xl bg-secondary ${
                  tile.featured ? "ring-2 ring-primary shadow-elevated" : ""
                }`}
              >
                <img
                  src={tile.photo}
                  srcSet={tile.srcSet}
                  sizes="(min-width: 768px) 34vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: tile.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/70">
                    {tile.eyebrow}
                  </span>
                  <h3 className="text-lg font-heading font-medium text-white mt-1 leading-snug">
                    {tile.title}
                  </h3>
                </div>
              </motion.div>
            );

            return tile.to ? (
              <Link key={tile.title} to={tile.to} className="block">
                {content}
              </Link>
            ) : (
              <div key={tile.title}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
