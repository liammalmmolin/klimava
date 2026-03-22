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

const marqueePartners = [...partners, ...partners];

export const PartnersSection = () => {
  return (
    <section className="py-12 overflow-hidden bg-white border-t border-border/30">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium text-muted-foreground"
        >
          Belöningar från fantastiska varumärken.
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {marqueePartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-10 shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
