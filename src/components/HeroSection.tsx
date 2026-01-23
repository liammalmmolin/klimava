import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Smartphone, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-card shadow-soft border border-border rounded-full px-4 py-2 mb-8"
          >
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Nytt i Sverige – hållbarhet som lönar sig
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Gör hållbara val.{" "}
            <span className="gradient-text">Få poäng.</span>
            <br />
            Påverka på riktigt.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Klimava belönar dig för klimatsmarta beslut i vardagen. Fota kvitton, 
            samla poäng och lös in mot riktiga belöningar.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl">
              Ladda ner appen
              <Smartphone className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Så funkar Klimava
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.9 av 5 i betyg
              </span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">320 000+</span>{" "}
              produkter i databasen
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
