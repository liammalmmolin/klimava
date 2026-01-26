import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Apple, PlayCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(150 20% 16%) 0%, hsl(155 25% 12%) 50%, hsl(160 30% 10%) 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Redo att börja tjäna på
            <br />
            <span className="gradient-text">hållbara val?</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Ladda ner Klimava gratis och börja samla poäng redan idag.
            Varje litet val gör skillnad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Apple className="w-5 h-5" />
              App Store
            </Button>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <PlayCircle className="w-5 h-5" />
              Google Play
            </Button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>Gratis att använda</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span>Inga dolda kostnader</span>
            <div className="h-4 w-px bg-white/20" />
            <span>GDPR-säker</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
