import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "@/components/icons";
import { CameraIcon as Camera, GiftIcon as Gift, ChartBarIcon as ChartBarVertical01, ScanIcon as BarcodeIcon } from "@/components/icons/StepIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import { stats } from "@/data/stats";
import { AD_VIDEO_SRC } from "@/data/media";
import { fadeUp, revealViewport } from "@/lib/motion";
import { SwedenStrip } from "@/components/SwedenStrip";
import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/asset-url";
import teamPhoto from "@/assets/team-photo.jpg?format=webp&quality=92";
import poster640 from "@/assets/videos/klimava-how-to-v2-poster-640.webp.asset.json";
import poster1280 from "@/assets/videos/klimava-how-to-v2-poster-1280.webp.asset.json";
import poster1920 from "@/assets/videos/klimava-how-to-v2-poster-1920.webp.asset.json";
import posterOriginal from "@/assets/videos/klimava-how-to-v2-poster-original-lossless.webp.asset.json";

const posterSrc = assetUrl(poster1280);
const posterSet = `${assetUrl(poster640)} 640w, ${posterSrc} 1280w, ${assetUrl(poster1920)} 1920w`;

const steps = [
  { icon: Camera, sv: "Fota kvittot", en: "Photograph the receipt" },
  { icon: BarcodeIcon, sv: "Skanna produkterna", en: "Scan the products" },
  { icon: ChartBarVertical01, sv: "Samla poäng", en: "Earn points" },
  { icon: Gift, sv: "Lös in belöningar", en: "Redeem rewards" },
];

/** Original film is fetched only after a press; the cover clears on actual playback. */
const AdVideo = ({ src }: { src: string }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  // Cover stays until the first frame actually plays, so there's no blank flash.
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setStarted(true);
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.src = src;
    void video.play().catch(() => { setStarted(false); setPlaying(false); });
  };

  return (
    <>
      <video
        ref={videoRef}
        controls={started}
        playsInline
        preload="none"
        onPlaying={() => setPlaying(true)}
        className="h-full w-full object-contain"
      />
      <AnimatePresence>
        {!playing && (
          <Button asChild variant="ghost" className="h-full w-full rounded-none p-0 bg-transparent hover:bg-transparent whitespace-normal [&_svg]:size-full focus-visible:ring-inset">
          <motion.button
            type="button"
            onClick={started ? undefined : play}
            aria-label={t("Spela upp filmen", "Play the film")}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center text-left"
          >
            {/* Sharp, border-free logo frame from the original film (1 second). */}
            <picture>
              {/* The film itself is 1920×1080: keep its exact decoded pixels
                  on desktop instead of recompressing or artificially enlarging. */}
              <source media="(min-width: 768px)" srcSet={assetUrl(posterOriginal)} />
              <img width={1920} height={1080} loading="lazy" decoding="async" src={posterSrc} srcSet={posterSet} sizes="(min-width: 1152px) 1152px, 100vw" alt="" className="absolute inset-0 h-full w-full object-cover" />
            </picture>
            <div className="video-cover-shade absolute inset-0" />

            <span className="relative flex w-[13.5%] aspect-square items-center justify-center transition-transform duration-150 ease-out group-hover:scale-[1.03] group-active:scale-[0.96] group-active:duration-75 motion-reduce:transition-none">
              <svg viewBox="0 0 100 100" aria-hidden="true" className="relative h-full w-full text-primary-foreground">
                <circle cx="50" cy="50" r="49" className="video-play-disc" strokeWidth="1.5" />
                <path d="M45 38.5 L62 50 L45 61.5 Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </span>

            <span className="absolute bottom-[12%] left-[7%] right-[7%] text-left font-sans text-base font-medium leading-snug text-primary-foreground sm:text-xl md:text-3xl">
              {t("Så använder du Klimava", "How to use Klimava")}
            </span>
          </motion.button>
          </Button>
        )}
      </AnimatePresence>
    </>
  );
};

export const HowItWorksBlock = () => {
  const { t, language } = useLanguage();
  const teamRef = useRef<HTMLDivElement>(null);
  const teamVisible = useInView(teamRef, { margin: "150px" });

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
            className="max-w-2xl font-heading text-4xl font-medium leading-[1.1] text-background md:text-6xl"
          >
            {t("Gör klimatsmarta val.", "Make climate-smart choices.")}
            <br />
            <span className="gradient-text-on-dark">{t("Få något tillbaka.", "Get something back.")}</span>
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
            className="mb-3 mt-20 text-center font-mono text-xs uppercase tracking-widest section-label section-label-on-dark md:mt-28"
          >
            {t("Se Klimava i verkligheten", "See Klimava in action")}
          </motion.p>
          <motion.h3
            {...fadeUp}
            className="mx-auto mb-12 max-w-2xl text-balance text-center font-heading text-3xl font-medium text-background md:max-w-3xl md:text-5xl"
          >
            {t(
              "Videon nedan visar hur Klimava kan användas i din vardag.",
              "The film below shows how Klimava can be used in your everyday life."
            )}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.4 }}
            id="reklamfilm"
            className="gradient-bg relative mx-auto w-full max-w-6xl aspect-video overflow-hidden rounded-3xl shadow-elevated"
          >
            {AD_VIDEO_SRC ? (
              <AdVideo src={AD_VIDEO_SRC} />
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
              <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest section-label section-label-on-dark">
                {t("Om oss", "About us")}
              </span>
              <h3 className="mb-4 font-heading text-3xl font-medium leading-tight text-background md:text-4xl">
                {t(
                  <>Från UF-företag</>,
                  "From a Young Enterprise project"
                )}
                <br />
                <span className="gradient-text-on-dark">{t("till aktiebolag.", "to a limited company.")}</span>
              </h3>
              <p className="text-base leading-relaxed text-background/60">
                {t(
                  "Klimava föddes som ett UF-projekt med en enkel tanke: hållbara val ska kännas självklara. Nu fortsätter vi på riktigt – som ett äkta företag.",
                  "Klimava was born as a Young Enterprise project with one simple idea: sustainable choices should feel obvious. Now we're continuing for real – as an actual company."
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.4 }}
            >
              <div
                ref={teamRef}
                className={`animate-float-y overflow-hidden rounded-[1.75rem] shadow-elevated ${teamVisible ? "" : "motion-paused"}`}
              >
                <img
                  width={1560} height={1170} loading="lazy" decoding="async"
                  src={teamPhoto}
                  alt={t("Klimava-teamet", "The Klimava team")}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* 3 steps */}
          <motion.div
            {...fadeUp}
            className="mt-20 grid gap-8 border-t border-background/10 pt-14 sm:grid-cols-2 lg:grid-cols-4 md:mt-28"
          >
            {steps.map((s, i) => (
              <div key={s.sv} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-bg font-mono text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <s.icon className="mb-2 h-5 w-5 small-accent" />
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ duration: 0.4}}
                className="text-center"
              >
                <div className={`font-serif font-semibold text-background ${s.valueEn ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"}`}>{t(s.value, s.valueEn ?? s.value)}</div>
                <div className="mt-1.5 text-xs text-background/60 md:text-sm">{t(s.label.sv, s.label.en)}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:mt-28">
            <a
              href="https://apps.apple.com/se/app/klimava/id6760266069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold small-accent hover:underline"
              style={{ fontVariantLigatures: "none" }}
            >
              {language === "sv" ? (
                <>Ska<span>f</span><span className="ml-[0.02em]">f</span>a Klimava →</>
              ) : (
                t("", "Get Klimava →")
              )}
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
