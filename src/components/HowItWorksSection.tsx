import { motion } from "framer-motion";
import { Camera, BarChart3, Gift, Sparkles, ShoppingBag, MapPin, Trophy, Users } from "lucide-react";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appChallenges from "@/assets/app-challenges.jpeg";

const allFeatures = [
  {
    icon: Camera,
    title: "Fota ditt kvitto",
    description: "Ta en bild på kvittot – vår AI läser av det automatiskt.",
  },
  {
    icon: Sparkles,
    title: "Se din klimatpåverkan",
    description: "Vi visar exakt hur mycket CO₂ du sparar per produkt.",
  },
  {
    icon: BarChart3,
    title: "Samla poäng",
    description: "Ju mer hållbart, desto fler poäng får du!",
  },
  {
    icon: Gift,
    title: "Lös in belöningar",
    description: "Byt poäng mot rabatter hos våra partners.",
  },
  {
    icon: ShoppingBag,
    title: "Second hand-bonus",
    description: "Köper du begagnat? Ladda upp kvitton och få extra poäng.",
  },
  {
    icon: MapPin,
    title: "Återvinningsscanner",
    description: "Besök återvinningsstationer och få poäng via GPS.",
  },
  {
    icon: Trophy,
    title: "Klimatutmaningar",
    description: "Delta i veckoutmaningar och vinn bonuspoäng.",
  },
  {
    icon: Users,
    title: "Vänner & topplistor",
    description: "Tävla med vänner och motivera varandra.",
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
            Allt i en app
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Så funkar Klimava
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Fota kvitton, samla poäng och lös in belöningar. Hållbarhet har aldrig varit enklare.
          </p>
        </motion.div>

        {/* Main: Features Grid + App Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* All Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-card transition-all duration-300 h-full border border-border">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden sm:block -mr-8 z-0"
            >
              <div className="relative w-36 md:w-44">
                <div className="absolute inset-0 gradient-bg rounded-[2rem] blur-2xl opacity-30 scale-95" />
                <div className="relative bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appOnboarding} alt="Klimava onboarding" className="rounded-[1.75rem] w-full" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="relative w-48 md:w-56">
                <div className="absolute inset-0 gradient-bg rounded-[2rem] blur-3xl opacity-40 scale-90" />
                <div className="relative bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appDashboard} alt="Klimava dashboard" className="rounded-[1.75rem] w-full" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden sm:block -ml-8 z-0"
            >
              <div className="relative w-36 md:w-44">
                <div className="absolute inset-0 gradient-bg rounded-[2rem] blur-2xl opacity-30 scale-95" />
                <div className="relative bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appChallenges} alt="Klimava utmaningar" className="rounded-[1.75rem] w-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">430+</p>
            <p className="text-sm text-muted-foreground mt-1">Poäng per vecka</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">5+</p>
            <p className="text-sm text-muted-foreground mt-1">Dagliga utmaningar</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">∞</p>
            <p className="text-sm text-muted-foreground mt-1">Hållbara val</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
