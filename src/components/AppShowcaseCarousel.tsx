import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appScanner from "@/assets/app-scanner2.png";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appPoangshop from "@/assets/app-poangshop2.jpg";
import appChallenges from "@/assets/app-challenges.png";

const slides = [
  { img: appOnboarding, sv: "Kom igång på sekunder", en: "Get started in seconds" },
  { img: appScanner, sv: "Skanna kvitton", en: "Scan receipts" },
  { img: appDashboard, sv: "Följ din påverkan", en: "Track your impact" },
  { img: appPoangshop, sv: "Byt poäng mot rabatter", en: "Swap points for discounts" },
  { img: appChallenges, sv: "Utmaningar & belöningar", en: "Challenges & rewards" },
];

// How far a slide's snap point is from the current scroll position, mapped to 0–1,
// used to scale/fade neighboring cards so the centered one reads as the "long card".
const TWEEN_FACTOR = 1.4;

export const AppShowcaseCarousel = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: false, containScroll: "trimSnaps" });
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = emblaApi.scrollProgress();
    const snaps = emblaApi.scrollSnapList();
    setTweenValues(snaps.map((snap) => 1 - Math.min(Math.abs(snap - progress) * TWEEN_FACTOR, 1)));
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    onSelect();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onScroll, onSelect]);

  return (
    <div className="mb-24 md:mb-28">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((s, i) => {
            const t2 = tweenValues[i] ?? 0;
            const scale = 0.8 + t2 * 0.2;
            const opacity = 0.45 + t2 * 0.55;
            return (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-[62%] px-3 sm:basis-[38%] md:basis-[26%]"
                style={{ transform: `scale(${scale})`, opacity, transition: "transform 0.15s ease-out, opacity 0.15s ease-out" }}
              >
                <div className="rounded-[1.75rem] bg-card p-1.5 shadow-elevated">
                  <img src={s.img} alt={t(s.sv, s.en)} className="w-full rounded-[1.4rem]" />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-foreground/80">{t(s.sv, s.en)}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label={t("Föregående", "Previous")}
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!emblaApi?.canScrollPrev()}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/40 hover:text-foreground disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${t("Gå till", "Go to")} ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === selectedIndex ? "w-6 gradient-bg" : "w-1.5 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={t("Nästa", "Next")}
          onClick={() => emblaApi?.scrollNext()}
          disabled={!emblaApi?.canScrollNext()}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/40 hover:text-foreground disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
