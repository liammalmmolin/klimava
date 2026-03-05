import { motion } from "framer-motion";

import slLogo from "@/assets/partners/sl.jpeg";
import traderaLogo from "@/assets/partners/tradera.png";
import plickLogo from "@/assets/partners/plick.jpeg";
import actLogo from "@/assets/partners/act.png";
import swedishNutraLogo from "@/assets/partners/swedish-nutra.jpeg";
import greatEarthLogo from "@/assets/partners/great-earth.jpeg";
import nAppLogo from "@/assets/partners/n-app.png";
import rekoshoppenLogo from "@/assets/partners/rekoshoppen.jpeg";
import storeEndaLogo from "@/assets/partners/store-enda.png";

// SL, Tradera, Plick first so they appear most often
const partners = [
  { name: "SL", logo: slLogo },
  { name: "Tradera", logo: traderaLogo },
  { name: "Plick", logo: plickLogo },
  { name: "ACT", logo: actLogo },
  { name: "Swedish Nutra", logo: swedishNutraLogo },
  { name: "Great Earth", logo: greatEarthLogo },
  { name: "N", logo: nAppLogo },
  { name: "Rekoshoppen", logo: rekoshoppenLogo },
  { name: "Store Enda", logo: storeEndaLogo },
];

// Duplicate for seamless loop
const marqueePartners = [...partners, ...partners];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Klimava
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Samarbetspartners
          </h3>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {marqueePartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-8 shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-xl transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
