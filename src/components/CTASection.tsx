import { revealViewport } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Check, Lock } from "@/components/icons";
import { Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import klimavaIcon from "@/assets/klimava-logo.jpeg";

// Irregular scatter (no ring): mixed distances from the icon — some hugging its
// edge, some far out in the glow — clustered unevenly, never evenly spaced.
// Each dot keeps a fixed position; only opacity/scale and a tiny drift loop.
const glitterDots = [
  { top: "14%", left: "18%", size: 3, duration: 2.7, delay: 0, peak: 0.9, dx: "2px", dy: "-3px" },
  { top: "-6%", left: "47%", size: 2, duration: 3.4, delay: 1.3, peak: 0.55, dx: "-2px", dy: "2px" },
  { top: "19%", left: "80%", size: 4, duration: 2.1, delay: 0.6, peak: 1, dx: "2px", dy: "3px" },
  { top: "2%", left: "71%", size: 2, duration: 3.1, delay: 2.2, peak: 0.6, dx: "-2px", dy: "-2px" },
  { top: "38%", left: "-9%", size: 3, duration: 2.9, delay: 1.7, peak: 0.7, dx: "-3px", dy: "2px" },
  { top: "47%", left: "17%", size: 2, duration: 2.4, delay: 0.3, peak: 0.85, dx: "2px", dy: "-2px" },
  { top: "61%", left: "103%", size: 2, duration: 3.6, delay: 2.6, peak: 0.5, dx: "3px", dy: "-2px" },
  { top: "34%", left: "84%", size: 3, duration: 2.2, delay: 1, peak: 0.95, dx: "-2px", dy: "3px" },
  { top: "81%", left: "21%", size: 4, duration: 2.6, delay: 2, peak: 1, dx: "-3px", dy: "2px" },
  { top: "108%", left: "58%", size: 2, duration: 3.2, delay: 0.8, peak: 0.6, dx: "2px", dy: "2px" },
  { top: "77%", left: "79%", size: 3, duration: 1.9, delay: 1.5, peak: 0.8, dx: "3px", dy: "-3px" },
];

export const CTASection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useInView(sectionRef, { margin: "150px" });

  return (
    <section ref={sectionRef} id="download" className="relative overflow-hidden bg-foreground py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Static, filter-free glow avoids Safari's rectangular blur-compositing edges. */}
          <div className="relative mx-auto mb-8 flex h-52 w-52 items-center justify-center md:h-64 md:w-64">
            <div
              className="download-glow pointer-events-none absolute -inset-20 rounded-full"
              aria-hidden
            />
            {/* Icon + particles share one float layer: same speed, amplitude and timing.
                CSS loops on the compositor, paused off-screen, disabled for reduced motion. */}
            <div
              className={`animate-float-y absolute inset-0 flex items-center justify-center ${visible ? "" : "motion-paused"}`}
              style={{ "--float-distance": "-14px", "--float-duration": "3.4s" } as CSSProperties}
            >
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                {glitterDots.map((d, i) => (
                  <span
                    key={i}
                    className="animate-glitter absolute rounded-full bg-primary-foreground"
                    style={{
                      top: d.top, left: d.left, width: d.size, height: d.size,
                      "--glitter-duration": `${d.duration}s`, "--glitter-delay": `${d.delay}s`, "--glitter-peak": d.peak,
                      "--drift-x": d.dx, "--drift-y": d.dy,
                    } as CSSProperties}
                    aria-hidden
                  />
                ))}
              </div>
              <div className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] shadow-elevated md:h-40 md:w-40">
                <img src={klimavaIcon} width={160} height={160} loading="lazy" decoding="async" alt="Klimava" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-background mb-6">
            {t("Testa Klimava, det är", "Try Klimava, it's")}
            <br />
            <span className="gradient-text-on-dark">{t("gratis.", "free.")}</span>
          </h2>
          <p className="text-lg text-background/60 mb-10 max-w-xl mx-auto leading-relaxed">
            {t(
              "Appen är ny och vi bygger vidare på den varje vecka. Har du tankar eller idéer? Hör av dig – vi läser allt.",
              "The app is new and we keep improving it every week. Got thoughts or ideas? Get in touch – we read everything."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                <Apple className="w-5 h-5" />
                App Store
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={revealViewport}
            transition={{ duration: 0.6}}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-3.5 py-1.5 text-xs font-medium text-background">
              <Phone className="h-3.5 w-3.5 text-secondary" />
              {t("Gratis att använda", "Free to use")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-3.5 py-1.5 text-xs font-medium text-background">
              <Check className="h-3.5 w-3.5 text-secondary" />
              {t("Inga dolda kostnader", "No hidden costs")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-3.5 py-1.5 text-xs font-medium text-background">
              <Lock className="h-3.5 w-3.5 text-secondary" />
              {t("GDPR-säker", "GDPR compliant")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
