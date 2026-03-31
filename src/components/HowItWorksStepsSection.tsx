import { motion } from "framer-motion";
import { Leaf, Camera, Gift } from "react-coolicons";

const steps = [
  {
    number: "1",
    icon: Leaf,
    title: "Gör hållbara val",
    description: "Lev som vanligt – men gör smartare val i vardagen.",
  },
  {
    number: "2",
    icon: Camera,
    title: "Samla poäng",
    description: "Fota kvitton, scanna återvinning och delta i utmaningar.",
  },
  {
    number: "3",
    icon: Gift,
    title: "Få belöningar",
    description: "Byt dina poäng mot rabatter och erbjudanden hos våra partners.",
  },
];

export const HowItWorksStepsSection = () => {
  return (
    <section id="how-it-works" className="py-28 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Så funkar <span className="gradient-text">det</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">Steg {step.number}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
