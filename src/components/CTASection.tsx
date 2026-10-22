import { useInView, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import klimavaIcon from "@/assets/klimava-logo.jpeg";

const DownloadIconScene = lazy(() => import("./DownloadIconScene"));

export const CTASection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const prepared = useInView(sectionRef, { margin: "600px", once: true });
  const visible = useInView(iconRef);
  const reducedMotion = useReducedMotion();
  const [tabVisible, setTabVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  useEffect(() => {
    const update = () => setTabVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return (
    <section ref={sectionRef} id="download" className="download-section relative overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={iconRef} data-animation={visible && tabVisible && !reducedMotion ? "running" : "paused"} className="relative mx-auto mb-4 h-[180px] w-[260px] md:mb-5 md:h-[220px] md:w-[300px]" role="img" aria-label={t("Klimavas appikon", "Klimava app icon")}>
            {!ready && <img src={klimavaIcon} width={132} height={132} loading="lazy" decoding="async" alt="" className="absolute left-1/2 top-1/2 h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-[1.65rem]" />}
            {prepared && <Suspense fallback={null}><DownloadIconScene active={visible && tabVisible && !reducedMotion} onReady={onReady} /></Suspense>}
          </div>

          <h2 className="download-heading text-[37px] md:text-[53px] font-normal tracking-normal leading-[1.12] mb-5">
            {t("Gör hållbara val.", "Make sustainable choices.")}
            <br />
            {t("Få något tillbaka.", "Get something back.")}
          </h2>
          <p className="download-description text-base md:text-lg mb-7 max-w-[330px] md:max-w-[510px] mx-auto leading-relaxed text-balance">
            {t(
              "Samla poäng när du skannar kvitton, återvinner och gör hållbara vardagsval. Byt poängen mot erbjudanden i Klimava.",
              "Collect points when you scan receipts, recycle and make sustainable everyday choices. Exchange your points for offers in Klimava."
            )}
          </p>

          <div className="flex items-center justify-center">
            <Button variant="secondary" size="lg" className="download-button h-11 w-[158px] rounded-full px-3 text-sm font-semibold transition-transform duration-150 active:scale-[0.98] motion-reduce:transform-none" asChild>
              <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                {t("Ladda ner Klimava", "Download Klimava")}
              </a>
            </Button>
          </div>

          <p className="download-description mt-3 text-xs">{t("Gratis att använda", "Free to use")}</p>
        </div>
      </div>
    </section>
  );
};
