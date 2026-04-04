import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightMd } from "react-coolicons";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appStoreBadge from "@/assets/app-store-badge.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading - Stepler style: large, dark, clean */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Gör hållbara val och få belöningar
          </motion.h1>

          {/* Subtitle - gray, relaxed */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Klimava gör hållbarhet mätbar, motiverande och belönande. Samla poäng genom klimatsmarta val och lös in dem mot riktiga belöningar.
          </motion.p>

          {/* App Store style buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl">
              Ladda ner appen
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#how-it-works">
                Så funkar Klimava
                <ArrowRightMd className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Phone mockup - centered, large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="relative w-64 md:w-72 lg:w-80">
              <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                <img
                  src={appDashboard}
                  alt="Klimava app"
                  className="rounded-[2rem] w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
