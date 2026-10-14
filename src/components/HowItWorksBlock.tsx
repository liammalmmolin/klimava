import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Camera, Gift, ChartBarVertical01 } from "react-coolicons";
import { useLanguage } from "@/contexts/LanguageContext";
import { stats } from "@/data/stats";
import { AD_VIDEO_SRC } from "@/data/media";
import { fadeUp } from "@/lib/motion";
import { SwedenStrip } from "@/components/SwedenStrip";
import teamPhoto from "@/assets/team-photo.jpg";

const steps = [
  { icon: Camera, sv: "Fota kvittot", en: "Scan your receipt" },
  { icon: ChartBarVertical01, sv: "Samla poäng", en: "Earn points" },
  { icon: Gift, sv: "Lös in belöningar", en: "Redeem rewards" },
];

export const HowItWorksBlock = () => {
  const { t } = useLanguage();

  return (
    <>
      <section id="how-it-works" className="bg-foreground py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.span
            {...fadeUp}
            className="mb-6 inline-flex items-center rounded-full gradient-bg px-4 py-1.5 text-xs font-semibold text-primary-foreground"
          >
            {t("Så funkar det", "How it works")}
          </motion.span>
          <motion.h2
            {...fadeUp}
            className="max-w-2xl font-serif text-4xl font-medium leading-[1.1] text-background md:text-6xl"
          >
            {t("Gör klimatsmarta val.", "Make climate-smart choices.")}
            <br />
            <span className="gradient-text">{t("Få något tillbaka.", "Get something back.")}</span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-background/60 md:text-lg"
          >
            {t(
              "Skanna kvitton, återvinn, åk kollektivt eller köp second hand – samla poäng och byt dem mot riktiga rabatter hos våra partners.",
              "Scan receipts, recycle, take public transport or buy second-hand – earn points and swap them for real discounts with our partners."
            )}
          </motion.p>

          {/* Inline video */}
          <motion.p
            {...fadeUp}
            className="mb-3 mt-20 text-center font-mono text-xs uppercase tracking-widest text-primary md:mt-28"
          >
            {t("Se Klimava i verkligheten", "See Klimava in action")}
          </motion.p>
          <motion.h3
            {...fadeUp}
            className="mx-auto mb-12 max-w-2xl text-center font-serif text-3xl font-medium text-background md:text-5xl"
          >
            {t("30 sekunder är allt som krävs.", "30 seconds is all it takes.")}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            id="reklamfilm"
            className="gradient-bg relative mx-auto w-full max-w-6xl aspect-video overflow-hidden rounded-3xl shadow-elevated"
          >
            {AD_VIDEO_SRC ? (
              <video src={AD_VIDEO_SRC} controls className="h-full w-full" />
            ) : (
              <>
                <div className="flex h-full w-full items-center justify-center px-6">
                  <span className="font-serif text-6xl font-bold text-primary-foreground sm:text-7xl md:text-8xl">
                    Klimava
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={t("Spela upp filmen", "Play the film")}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/80 text-background shadow-elevated backdrop-blur-sm transition hover:scale-105 md:h-20 md:w-20"
                >
                  <Play className="h-6 w-6 md:h-7 md:w-7" />
                </button>
                <span className="absolute bottom-6 left-6 text-sm font-medium text-primary-foreground/80 md:bottom-8 md:left-8">
                  {t("Filmen kommer inom kort", "The film is coming soon")}
                </span>
              </>
            )}
          </motion.div>

          {/* About us teaser */}
          <div className="mt-20 grid items-center gap-10 border-t border-background/10 pt-14 md:mt-28 md:grid-cols-2 md:gap-16">
            <motion.div {...fadeUp}>
              <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-primary">
                {t("Om oss", "About us")}
              </span>
              <h3 className="mb-4 font-serif text-3xl font-medium leading-tight text-background md:text-4xl">
                {t("Från tävla i Ungföretagande", "From competing in Young Enterprise")}
                <br />
                <span className="gradient-text">{t("till aktiebolag.", "to a limited company.")}</span>
              </h3>
              <p className="text-base leading-relaxed text-background/60">
                {t(
                  "Klimava föddes som ett UF-projekt med en enkel tanke: hållbara val ska kännas självklara. Nu fortsätter vi på riktigt – som ett äkta företag.",
                  "Klimava was born as a Young Enterprise project with one simple idea: sustainable choices should feel obvious. Now we're continuing for real – as an actual company."
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="overflow-hidden rounded-[1.75rem] shadow-elevated"
              >
                <img
                  src={teamPhoto}
                  alt={t("Klimava-teamet", "The Klimava team")}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* 3 steps */}
          <motion.div
            {...fadeUp}
            className="mt-20 grid gap-8 border-t border-background/10 pt-14 sm:grid-cols-3 md:mt-28"
          >
            {steps.map((s, i) => (
              <div key={s.sv} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-bg font-mono text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <s.icon className="mb-2 h-5 w-5 text-primary" />
                  <p className="font-serif text-lg font-medium text-background">{t(s.sv, s.en)}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-10 border-t border-background/10 pt-14 md:grid-cols-4 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.value + s.label.sv}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-serif text-4xl font-semibold text-background md:text-5xl">{s.value}</div>
                <div className="mt-1.5 text-xs text-background/60 md:text-sm">{t(s.label.sv, s.label.en)}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:mt-28">
            <a
              href="https://apps.apple.com/se/app/klimava/id6760266069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-primary hover:underline"
            >
              {t("Skaffa Klimava →", "Get Klimava →")}
            </a>
            <Link to="/om-appen" className="font-medium text-background/60 hover:text-background hover:underline">
              {t("Se alla funktioner i detalj →", "See all features in detail →")}
            </Link>
          </motion.div>
        </div>
      </section>

      <SwedenStrip />
    </>
  );
};
