import { motion } from "framer-motion";

export const WhyKlimavaSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Varför <span className="gradient-text">Klimava?</span>
          </h2>
          <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic mb-4">
            "Vi tror på belöning istället för pekpinnar."
          </blockquote>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Klimava gör det enkelt, roligt och motiverande att leva hållbart – varje dag, ett val i taget.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
