import { motion } from "framer-motion";
import { Camera, MapPin, Star, ChartBarVertical01 } from "react-coolicons";

const features = [
  {
    icon: Camera,
    title: "AI-kvittoscanner",
    description: "Ta en bild på ditt kvitto – vår AI identifierar produkter och ger dig poäng.",
  },
  {
    icon: MapPin,
    title: "Återvinningsscanner",
    description: "Besök återvinningsstationer och få poäng via GPS.",
  },
  {
    icon: Star,
    title: "Utmaningar & topplistor",
    description: "Tävla mot vänner och motivera varandra.",
  },
  {
    icon: ChartBarVertical01,
    title: "Klimatpåverkan",
    description: "Se hur mycket CO₂ du sparar genom dina val.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            <span className="gradient-text">Funktioner</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-muted/40 border border-border/40 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
