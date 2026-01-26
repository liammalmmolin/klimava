import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Smartphone, Star } from "lucide-react";
import heroForestBg from "@/assets/hero-forest-bg.jpeg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Forest background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroForestBg})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Subtle gradient overlay for brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-elevated border border-white/20 rounded-full px-4 py-2 mb-8"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Gör hållbara val.{" "}
            <span className="gradient-text drop-shadow-none">Få poäng.</span>
            <br />
            Påverka på riktigt.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md"
          >
            Klimava gör hållbarhet mätbar, motiverande och belönande. Ett klimatsmart val i taget.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="shadow-elevated">
              Ladda ner appen
              <Smartphone className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <a href="#how-it-works">
                Så funkar Klimava
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-elevated">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
