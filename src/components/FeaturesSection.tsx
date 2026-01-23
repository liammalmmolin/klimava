import { motion } from "framer-motion";
import {
  Receipt,
  ShoppingBag,
  MapPin,
  Trophy,
  Users,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Kvittoscanning",
    description:
      "AI läser ditt kvitto och matchat produkter mot klimatdata. Automatiskt och snabbt.",
    color: "from-primary to-secondary",
  },
  {
    icon: ShoppingBag,
    title: "Second hand-bonus",
    description:
      "Köper du begagnat? Ladda upp digitala kvitton och få extra poäng.",
    color: "from-secondary to-primary",
  },
  {
    icon: MapPin,
    title: "Återvinningsscanner",
    description:
      "Besök återvinningsstationer och få poäng via GPS-baserad verifiering.",
    color: "from-primary to-secondary",
  },
  {
    icon: Trophy,
    title: "Klimatutmaningar",
    description:
      "Delta i veckoutmaningar och tävla om bonuspoäng och specialpriser.",
    color: "from-secondary to-primary",
  },
  {
    icon: Users,
    title: "Vänner & topplistor",
    description:
      "Bjud in vänner, jämför era poäng och motivera varandra till bättre val.",
    color: "from-primary to-secondary",
  },
  {
    icon: Gift,
    title: "Poängshop",
    description:
      "Lös in poäng mot rabatter och erbjudanden från våra hållbara partners.",
    color: "from-secondary to-primary",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Allt i en app
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Fler sätt att tjäna poäng
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Klimava är inte bara för matkvitton. Samla poäng på flera
            hållbara sätt i vardagen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 h-full border border-border overflow-hidden">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="relative w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
