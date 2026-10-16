import { revealViewport } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Check, Lock } from "react-coolicons";
import { Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import klimavaIcon from "@/assets/klimava-logo.jpeg";

// Organic scatter of sparkle dots around the icon — irregular distances, no perfect circle.
// Each dot has a small individual drift (dx/dy) on top of the shared float.
const glitterDots = [
  { top: "9%", left: "22%", size: 4, duration: 2.2, delay: 0, dx: "3px", dy: "-4px" },
  { top: "4%", left: "61%", size: 3, duration: 1.8, delay: 0.4, dx: "-3px", dy: "3px" },
  { top: "16%", left: "88%", size: 3, duration: 2.6, delay: 0.9, dx: "2px", dy: "4px" },
  { top: "31%", left: "3%", size: 3, duration: 2, delay: 0.2, dx: "-4px", dy: "-2px" },
  { top: "44%", left: "93%", size: 4, duration: 2.4, delay: 1.2, dx: "3px", dy: "2px" },
  { top: "57%", left: "1%", size: 2, duration: 1.6, delay: 0.6, dx: "2px", dy: "-3px" },
  { top: "71%", left: "11%", size: 3, duration: 2, delay: 1.5, dx: "-2px", dy: "4px" },
  { top: "83%", left: "86%", size: 2, duration: 1.9, delay: 0.3, dx: "4px", dy: "-2px" },
  { top: "93%", left: "38%", size: 4, duration: 2.3, delay: 1, dx: "-3px", dy: "-3px" },
  { top: "88%", left: "64%", size: 3, duration: 1.7, delay: 0.7, dx: "2px", dy: "3px" },
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
              className="download-glow pointer-events-none absolute -inset-12 rounded-full"
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
                      "--glitter-duration": `${d.duration}s`, "--glitter-delay": `${d.delay}s`,
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
