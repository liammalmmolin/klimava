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
import teamPhoto from "@/assets/team-photo.jpg?format=webp&quality=92";
import posterSet from "@/assets/ad-poster.jpg?w=960;1440;1920&format=webp&quality=88&as=srcset";
import posterSrc from "@/assets/ad-poster.jpg?w=1440&format=webp&quality=88";
import logo from "@/assets/klimava-logo.jpeg";

const steps = [
  { icon: Camera, sv: "Fota kvittot", en: "Photograph the receipt" },
  { icon: BarcodeIcon, sv: "Skanna produkterna", en: "Scan the products" },
  { icon: ChartBarVertical01, sv: "Samla poäng", en: "Earn points" },
  { icon: Gift, sv: "Lös in belöningar", en: "Redeem rewards" },
];

/** Ad film with a branded cover: brand-toned nature photo, logo and a big gradient play button. */
const AdVideo = ({ src }: { src: string }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  // Cover stays until the first frame actually plays, so there's no blank flash.
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number>();

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
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        className="h-full w-full object-cover"
      />
      <AnimatePresence>
        {!playing && (
          <motion.button
            type="button"
            onClick={started ? undefined : play}
            aria-label={t("Spela upp filmen", "Play the film")}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center text-left"
          >
            {/* Still from the film's opening (0.5 s, past the black lead-in) */}
            <img width={1920} height={1080} loading="lazy" decoding="async" src={posterSrc} srcSet={posterSet} sizes="(min-width: 1152px) 1152px, 100vw" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

            {/* Single translucent button: the gradient sits on its own layer so the
                play glyph stays fully opaque while the cover shows through. */}
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-play transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <span className="absolute inset-0 rounded-full gradient-play border border-primary-foreground" />
              <span className="pointer-events-none absolute inset-0 rounded-full play-depth" />
              <Play className="relative ml-[0.08em] h-6 w-6 text-primary-foreground sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </span>

            <span className="absolute bottom-5 left-5 right-5 hidden items-end sm:flex justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
              <span className="flex items-center gap-3 md:gap-4">
                <img width={56} height={56} loading="lazy" decoding="async" src={logo} alt="" className="h-11 w-11 rounded-xl shadow-elevated md:h-14 md:w-14 md:rounded-2xl" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-secondary md:text-xs">
                    {t("Reklamfilm", "Ad film")}
                  </span>
                  <span className="block font-serif text-2xl font-medium leading-tight text-background md:text-4xl">Klimava</span>
                </span>
              </span>
              <span className="rounded-full border border-background/25 bg-foreground/40 px-3 py-1 font-mono text-xs text-background/80 backdrop-blur-sm">
                {t("Spela upp", "Play")}
                {duration ? ` · ${Math.floor(duration / 60)}:${String(Math.round(duration % 60)).padStart(2, "0")}` : ""}
              </span>
            </span>
          </motion.button>
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
            className="mb-3 mt-20 text-center font-mono text-xs uppercase tracking-widest text-secondary md:mt-28"
          >
            {t("Se Klimava i verkligheten", "See Klimava in action")}
          </motion.p>
          <motion.h3
            {...fadeUp}
            className="mx-auto mb-12 min-h-[2.4em] sm:min-h-0 max-w-2xl text-center font-heading text-3xl font-medium text-background md:text-5xl"
          >
            {t("30 sekunder är allt som krävs.", "30 seconds is all it takes.")}
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
              <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-secondary">
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
                  <s.icon className="mb-2 h-5 w-5 text-secondary" />
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
              className="text-lg font-semibold text-secondary hover:underline"
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
