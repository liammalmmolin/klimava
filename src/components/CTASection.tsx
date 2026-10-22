import { useInView, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import klimavaIcon from "@/assets/klimava-logo.jpeg";

const loadDownloadIcon = () => import("./DownloadIconScene");
const DownloadIconScene = lazy(loadDownloadIcon);

export const CTASection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const approaching = useInView(sectionRef, { margin: "2400px", once: true });
  const visible = useInView(iconRef, { margin: "600px" });
  const reducedMotion = useReducedMotion();
  const [tabVisible, setTabVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [prewarmed, setPrewarmed] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  useEffect(() => {
    // Warm the lazy chunk, texture and first GPU frame during idle time, not on arrival.
    const warm = () => { void loadDownloadIcon(); setPrewarmed(true); };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(warm, { timeout: 300 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(warm, 0);
    return () => window.clearTimeout(id);
  }, []);
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
          <div ref={iconRef} data-animation={visible && tabVisible && !reducedMotion ? "running" : "paused"} className="relative mx-auto mb-6 h-[220px] w-[260px] md:mb-8 md:h-[260px] md:w-[300px]" role="img" aria-label={t("Klimavas appikon", "Klimava app icon")}>
            <div aria-hidden="true" className={`download-icon-atmosphere pointer-events-none absolute -left-[15%] -right-[15%] -top-[10%] bottom-[2%] ${visible && tabVisible && !reducedMotion ? "" : "motion-paused"}`}>
              <div className="download-icon-halo absolute inset-0" />
              <div className="download-icon-dust absolute inset-0">
                {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
              </div>
            </div>
            <div className="absolute inset-0">
            {!ready && <img src={klimavaIcon} width={130} height={130} loading="lazy" decoding="async" alt="" className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-[1.62rem]" />}
            {(approaching || prewarmed) && <Suspense fallback={null}><DownloadIconScene active={visible && tabVisible && !reducedMotion} reducedMotion={Boolean(reducedMotion)} onReady={onReady} /></Suspense>}
            </div>
          </div>

          <h2 className="download-heading text-[34px] md:text-5xl font-normal tracking-normal leading-[1.12] mb-5">
            {t("Gör hållbara val.", "Make sustainable choices.")}
            <br />
            {t("Få något tillbaka.", "Get something back.")}
          </h2>
          <p className="download-description text-base md:text-lg mb-7 max-w-[340px] md:max-w-[510px] mx-auto leading-relaxed">
            {t(
              "Samla poäng när du skannar kvitton, återvinner och gör hållbara vardagsval. Byt poängen mot erbjudanden i Klimava.",
              "Collect points when you scan receipts, recycle and make sustainable everyday choices. Exchange your points for offers in Klimava."
            )}
          </p>

          <div className="flex items-center justify-center">
            <Button variant="secondary" size="lg" className="download-button h-12 w-[196px] rounded-full px-4 text-sm font-semibold transition-transform duration-150 active:scale-[0.98] motion-reduce:transform-none" asChild>
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
