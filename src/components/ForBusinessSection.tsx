import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, ChartBarVertical01, Leaf } from "react-coolicons";
import { Link } from "react-router-dom";

const benefits = [
  { icon: Users, text: "Nå engagerade och medvetna användare" },
  { icon: ChartBarVertical01, text: "Driv trafik och försäljning via belöningar" },
  { icon: Leaf, text: "Stärk ert varumärke inom hållbarhet" },
];

export const ForBusinessSection = () => {
  return (
    <section className="py-28 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            För företag & <span className="gradient-text">partners</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Vill du nå en klimatsmart målgrupp?
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-4 mb-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-background border border-border/40 rounded-2xl p-5"
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <benefit.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Kontakta oss för samarbeten</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
