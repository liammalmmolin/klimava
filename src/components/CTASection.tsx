import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "react-coolicons";

export const CTASection = () => {
  return (
    <section id="download" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Redo att tjäna på
            <br />
            <span className="gradient-text">hållbara val?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Ladda ner Klimava gratis och börja samla poäng redan idag.
          </p>

          <div className="flex items-center justify-center">
            <Button variant="hero" size="xl">
              Ladda ner appen
              <Phone className="w-5 h-5" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span>✓ Gratis att använda</span>
            <div className="h-4 w-px bg-border" />
            <span>✓ Inga dolda kostnader</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
