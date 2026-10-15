import { motion, type MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Play } from "react-coolicons";
import appStoreBadge from "@/assets/app-store-badge.png?format=webp&quality=92";
import forestPhoto from "@/assets/sweden-forest.jpg?format=webp&quality=88";
import forestSources from "@/assets/sweden-forest.jpg?w=800;1600;2400&format=webp&quality=88&as=srcset";
import klimavaLogo from "@/assets/klimava-logo.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const stickerData = [
  { sv: "Skanna & tjäna!", en: "Scan & earn!", rotate: -4, halo: "#ffffff", color: "hsl(var(--foreground))" },
  { sv: "Byt mot rabatter!", en: "Swap for discounts!", rotate: 3, halo: "hsl(var(--foreground))", color: "#ffffff" },
  { sv: "100% gratis!", en: "100% free!", rotate: -2, halo: "hsl(var(--secondary))", color: "hsl(var(--foreground))" },
];

// Layers many small same-color text-shadows in a ring around the glyphs so the
// highlight hugs each letter's silhouette (a "marker stroke") instead of sitting
// behind the text as a plain rectangle.
const stickerHalo = (color: string) => {
  const layers: string[] = [];
  const angleSteps = 16;
  const ringSteps = 5;
  for (let a = 0; a < angleSteps; a++) {
    const angle = (a / angleSteps) * Math.PI * 2;
    for (let r = 1; r <= ringSteps; r++) {
      const x = (Math.cos(angle) * r * 0.045).toFixed(3);
      const y = (Math.sin(angle) * r * 0.045).toFixed(3);
      layers.push(`${x}em ${y}em 0 ${color}`);
    }
  }
  return layers.join(", ");
};

const stickers = stickerData.map((s) => ({ ...s, shadow: stickerHalo(s.halo) }));

interface HeroSectionProps {
  /** Scroll-linked scale (1 → smaller) so the card shrinks as the next section peels over it. */
  scale?: MotionValue<number>;
}

export const HeroSection = ({ scale }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-background px-3 pb-3 pt-3 md:px-4 md:pb-4 md:pt-4">
      <motion.div
        style={{ scale }}
        className="relative h-[calc(100vh-1.5rem)] min-h-[640px] origin-top overflow-hidden rounded-[1.75rem] md:h-[calc(100vh-2rem)] md:rounded-[2.25rem]">
        <img src={forestPhoto} srcSet={forestSources} sizes="100vw" width={2400} height={1800} fetchPriority="high" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, hsl(var(--foreground)/0.85) 0%, hsl(var(--foreground)/0.35) 45%, hsl(var(--foreground)/0.15) 100%)",
          }}
        />
        {/* Top fade so the logo/CTA stay legible over bright sky/sun-flare */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />

        {/* Logo — anchored to this card's corner, scrolls away with it */}
        <Link to="/" className="absolute left-6 top-6 z-10 flex items-center gap-2.5 sm:left-8 sm:top-8">
          <img src={klimavaLogo} alt="Klimava" className="h-9 w-9 rounded-xl ring-1 ring-white/25" />
          <span className="text-lg font-bold text-white">Klimava</span>
        </Link>

        {/* App CTA — anchored to this card's corner, scrolls away with it */}
        <Button
          size="default"
          className="absolute right-6 top-6 z-10 hidden rounded-full lg:inline-flex gradient-bg text-primary-foreground hover:opacity-90 font-medium text-sm px-6 sm:right-8 sm:top-8"
          asChild
        >
          <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
            {t("Skaffa appen", "Get the app")}
          </a>
        </Button>

        {/* Sticker tags — marker-highlight halo that hugs the letterforms, à la Gritch */}
        <div className="absolute right-[4%] top-[38%] hidden flex-col items-end gap-4 md:flex">
          {stickers.map((s, i) => (
            <motion.span
              key={s.sv}
              initial={{ opacity: 0, scale: 0.6, rotate: s.rotate * 2 }}
              animate={{ opacity: 1, scale: 1, rotate: s.rotate }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12, type: "spring", stiffness: 220, damping: 16 }}
              whileHover={{ rotate: 0, scale: 1.06 }}
              className="font-serif text-3xl italic font-bold leading-none lg:text-4xl"
              style={{
                color: s.color,
                textShadow: s.shadow,
                filter: "drop-shadow(0 4px 6px hsl(0 0% 0% / 0.35))",
              }}
            >
              {t(s.sv, s.en)}
            </motion.span>
          ))}
        </div>

        {/* Content — bottom-left, everything fits within the card */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-14">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl"
            >
              {t("Små handlingar.", "Small actions.")}
              <br />
              <span className="gradient-text">{t("Stor påverkan.", "Big impact.")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg"
            >
              {t(
                "Klimava gör hållbarhet mätbar, motiverande och belönande. Helt gratis.",
                "Klimava makes sustainability measurable, motivating and rewarding. Completely free."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt={t("Hämta i App Store", "Download on App Store")} className="h-12 w-[150px] object-cover sm:h-14 sm:w-[168px]" />
              </a>
              <Button variant="glass" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
                <a href="#reklamfilm">
                  <Play className="h-5 w-5" />
                  {t("Se filmen", "Watch the film")}
                </a>
              </Button>
              <span className="flex items-center gap-1.5 font-mono text-xs text-white/70">
                <span className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </span>
                {t("5.0 på App Store", "5.0 on the App Store")}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
