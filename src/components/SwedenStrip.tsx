import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import consumption480 from "@/assets/sweden-upload-consumption-480.webp.asset.json";
import consumption960 from "@/assets/sweden-upload-consumption-960.webp.asset.json";
import consumption1920 from "@/assets/sweden-upload-consumption-1920.webp.asset.json";
import subway480 from "@/assets/sweden-upload-subway-480.webp.asset.json";
import subway960 from "@/assets/sweden-upload-subway-960.webp.asset.json";
import subway1480 from "@/assets/sweden-upload-subway-1480.webp.asset.json";
import recyclingMobile from "@/assets/sweden-upload-recycling-mobile.webp.asset.json";
import recyclingDesktop from "@/assets/sweden-upload-recycling-desktop.webp.asset.json";

export const SwedenStrip = () => {
  const { t } = useLanguage();

  const tiles = [
    {
      photo: consumption1920.url,
      srcSet: `${consumption480.url} 480w, ${consumption960.url} 960w, ${consumption1920.url} 1920w`,
      sizes: "(min-width: 768px) 64vw, calc(100vw - 48px)",
      width: 1920,
      height: 1280,
      objectPosition: "52% 65%",
      desktopPhoto: undefined,
      eyebrow: t("Klimatpåverkan", "Climate impact"),
      title: t("Vardagsval som räknas", "Everyday choices that count"),
      to: null as string | null,
      featured: false,
    },
    {
      photo: subway1480.url,
      srcSet: `${subway480.url} 480w, ${subway960.url} 960w, ${subway1480.url} 1480w`,
      sizes: "(min-width: 768px) 64vw, calc(100vw - 48px)",
      width: 1480,
      height: 980,
      objectPosition: "43% 55%",
      desktopPhoto: undefined,
      eyebrow: t("SL · Störst samarbetspartner", "SL · Largest partner"),
      title: t("Belöning för kollektivresor", "Rewards for public transport"),
      to: null,
      featured: true,
    },
    {
      photo: recyclingMobile.url,
      srcSet: `${recyclingMobile.url} 643w`,
      sizes: "(min-width: 768px) 34vw, calc(100vw - 48px)",
      width: 643,
      height: 402,
      objectPosition: "center",
      desktopPhoto: recyclingDesktop.url,
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
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative aspect-[16/10] overflow-hidden md:aspect-[4/5] rounded-xl bg-secondary ${
                  tile.featured ? "ring-2 ring-primary shadow-elevated" : ""
                }`}
              >
                <picture>
                  {tile.desktopPhoto && (
                    <source media="(min-width: 768px)" srcSet={tile.desktopPhoto} />
                  )}
                  <img
                  width={tile.width} height={tile.height}
                  src={tile.photo}
                  srcSet={tile.srcSet}
                  sizes={tile.sizes}
                  loading="lazy"
                  decoding="async"
                  alt={tile.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${tile.desktopPhoto ? "" : "group-hover:scale-105"}`}
                  style={{ objectPosition: tile.objectPosition }}
                />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/70">
                    {tile.eyebrow}
                  </span>
                  <h3 className="text-lg font-heading font-medium text-white mt-1 leading-snug">
                    {tile.title}.
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
