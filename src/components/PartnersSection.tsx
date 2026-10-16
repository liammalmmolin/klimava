import { revealViewport } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { partners } from "@/data/partners";

const marqueePartners = [...partners, ...partners];

export const PartnersSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  // Pause the endless marquee while it is off-screen.
  const visible = useInView(sectionRef, { margin: "150px" });

  return (
    <section ref={sectionRef} className="py-12 overflow-hidden bg-background border-y border-border/40">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium text-muted-foreground"
        >
          {t("Klimavas fantastiska samarbetspartners.", "Klimava's amazing partners.")}{" "}
          <Link to="/partners" className="text-primary font-semibold hover:underline">
            {t("Se alla →", "See all →")}
          </Link>
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className={`flex animate-marquee w-max ${visible ? "" : "motion-paused"}`}>
          {marqueePartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="mx-10 h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border/60 shadow-soft md:h-[4.5rem] md:w-[4.5rem]"
            >
              <img
                src={partner.logo}
                width={72} height={72} loading="lazy" decoding="async"
                alt={partner.name}
                className="h-full w-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
