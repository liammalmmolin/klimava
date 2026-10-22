import { useInView, useReducedMotion } from "framer-motion";
import { Component, lazy, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import klimavaIcon from "@/assets/klimava-logo.jpeg";

const loadDownloadIcon = () => import("./DownloadIconScene");
const DownloadIconScene = lazy(loadDownloadIcon);

// Keeps any 3D load/start failure local to the icon.
class IconBoundary extends Component<{ onError: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

const hasWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

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
  const [failed, setFailed] = useState(() => !hasWebGL());
  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => { setFailed(true); setReady(false); }, []);
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
    <section ref={sectionRef} id="download" className="download-section relative flex min-h-screen min-h-[100lvh] flex-col justify-center py-16 md:py-24">
      <div className="container relative mx-auto w-full px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={iconRef} data-animation={visible && tabVisible && !reducedMotion ? "running" : "paused"} className="relative mx-auto mb-8 h-[220px] w-[260px] md:mb-10 md:h-[260px] md:w-[300px]" role="img" aria-label={t("Klimavas appikon", "Klimava app icon")}>
            <div aria-hidden="true" className="download-icon-atmosphere pointer-events-none absolute -inset-x-[40%] -top-[28%] -bottom-[14%]">
              <div className="download-icon-halo absolute inset-0" />
            </div>
            <div className="absolute inset-0">
            {(!ready || failed) && <img src={klimavaIcon} width={120} height={120} loading="lazy" decoding="async" alt="" className="download-icon-placeholder absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-[1.49rem]" />}
            {!failed && (approaching || prewarmed) && <IconBoundary onError={onFailure}><Suspense fallback={null}><DownloadIconScene active={visible && tabVisible && !reducedMotion} reducedMotion={Boolean(reducedMotion)} onReady={onReady} onFailure={onFailure} /></Suspense></IconBoundary>}
            </div>
          </div>

          <h2 className="download-heading text-[34px] md:text-5xl font-normal tracking-normal leading-[1.12] mb-6">
            {t("Gör hållbara val.", "Make sustainable choices.")}
            <br />
            {t("Få något tillbaka.", "Get something back.")}
          </h2>
          <p className="download-description text-base md:text-lg mb-9 max-w-[340px] md:max-w-[510px] mx-auto leading-relaxed">
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
