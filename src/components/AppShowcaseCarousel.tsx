import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appScanner from "@/assets/app-scanner2.png";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appPoangshop from "@/assets/app-poangshop2.jpg";
import appChallenges from "@/assets/app-challenges.png";

const slides = [
  { img: appOnboarding, width: 720, height: 1560, sv: "Kom igång på sekunder", en: "Get started in seconds" },
  { img: appScanner, width: 510, height: 1050, sv: "Skanna kvitton", en: "Scan receipts" },
  { img: appDashboard, width: 720, height: 1560, sv: "Följ din påverkan", en: "Track your impact" },
  { img: appPoangshop, width: 885, height: 1920, sv: "Byt poäng mot rabatter", en: "Swap points for discounts" },
  { img: appChallenges, width: 885, height: 1920, sv: "Utmaningar & belöningar", en: "Challenges & rewards" },
];

// How far a slide's snap point is from the current scroll position, mapped to 0–1,
// used to scale/fade neighboring cards so the centered one reads as the "long card".
const TWEEN_FACTOR = 1.4;

export const AppShowcaseCarousel = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: false, containScroll: false });
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = emblaApi.scrollProgress();
    const snaps = emblaApi.scrollSnapList();
    snaps.forEach((snap, i) => {
      const node = visualRefs.current[i];
      if (!node) return;
      const proximity = 1 - Math.min(Math.abs(snap - progress) * TWEEN_FACTOR, 1);
      // Embla owns horizontal movement. Only the inner visual scales, directly
      // from that same frame's position, with no second CSS/React animation.
      node.style.transform = `scale(${0.8 + proximity * 0.2})`;
      node.style.opacity = `${0.45 + proximity * 0.55}`;
    });
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    onSelect();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onScroll, onSelect]);

  return (
    <div className="mb-24 md:mb-28">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((s, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-[62%] px-3 sm:basis-[38%] md:basis-[26%]"
              >
                <div ref={(node) => { visualRefs.current[i] = node; }} className="origin-center will-change-transform">
                <div className="rounded-[1.75rem] bg-card p-1.5 shadow-elevated">
                  <img src={s.img} alt={t(s.sv, s.en)} width={s.width} height={s.height} draggable={false} className="block w-full rounded-[1.4rem] select-none" />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-foreground/80">{t(s.sv, s.en)}</p>
                </div>
              </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon"
          type="button"
          aria-label={t("Föregående", "Previous")}
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/40 hover:text-foreground disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <Button variant="ghost" size="icon"
              key={i}
              type="button"
              aria-label={`${t("Gå till", "Go to")} ${i + 1}`}
              aria-current={i === selectedIndex ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 p-0 rounded-full transition-all hover:bg-muted-foreground/30 ${
                i === selectedIndex ? "w-6 gradient-bg" : "w-1.5 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
        <Button variant="ghost" size="icon"
          type="button"
          aria-label={t("Nästa", "Next")}
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/40 hover:text-foreground disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
