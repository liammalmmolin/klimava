import { motion } from "framer-motion";
import { Camera, BarChart3, Gift, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Fota ditt kvitto",
    description:
      "Efter ett köp tar du en bild på kvittot. Vår AI läser av det automatiskt.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Se din klimatpåverkan",
    description:
      "För varje produkt visar vi exakt hur mycket CO₂ du sparar jämfört med andra val.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Samla poäng",
    description:
      "Valde du hållbart? Du får poäng baserat på hur mycket CO₂ du sparat!",
  },
  {
    icon: Gift,
    step: "04",
    title: "Lös in belöningar",
    description:
      "Använd poängen i shoppen för rabatter och erbjudanden från partners.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Enkelt som 1-2-3-4
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Så funkar Klimava
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ingen krångel – bara fota, samla och vinn. Hållbarhet har aldrig
            varit enklare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 h-full border border-border">
                {/* Step number */}
                <span className="text-6xl font-bold text-muted/60 absolute top-4 right-6">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
