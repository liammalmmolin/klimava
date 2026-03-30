import { motion } from "framer-motion";
import { Camera, BarChart3, Gift, Sparkles, ShoppingBag, MapPin, Trophy, Users } from "lucide-react";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appShop from "@/assets/app-shop.jpg";
import appChallengesScreen from "@/assets/app-challenges.png";

const allFeatures = [
  {
    icon: BarChart3,
    title: "Samla poäng",
    description: "Gör klimatsmarta val i vardagen och samla poäng genom att handla hållbart, återvinna, åka kollektivt, handla secondhand och delta i utmaningar.",
  },
  {
    icon: Gift,
    title: "Lös in belöningar",
    description: "Byt dina poäng mot rabatter och erbjudanden hos våra samarbetspartners direkt i appen.",
  },
  {
    icon: Camera,
    title: "Fota ditt kvitto",
    description: "Ta en bild på kvittot och scanna det med vår AI-drivna scanner. Den identifierar produkterna och ger dig poäng.",
  },
  {
    icon: MapPin,
    title: "Återvinningsscanner",
    description: "Besök återvinningsstationer och scanna via GPS direkt i appen för att få poäng.",
  },
  {
    icon: ShoppingBag,
    title: "Second hand-bonus",
    description: "Handlar du begagnat? Ladda upp ditt kvitto från second hand-köp och få extra poäng.",
  },
  {
    icon: Trophy,
    title: "Klimatutmaningar",
    description: "Delta i veckovisa klimatutmaningar och samla bonuspoäng genom enkla, klimatsmarta handlingar.",
  },
  {
    icon: Users,
    title: "Vänner & topplistor",
    description: "Tävla mot vänner, klättra på topplistor och motivera varandra till mer hållbara val.",
  },
  {
    icon: Sparkles,
    title: "Se din klimatpåverkan",
    description: "Följ hur mycket CO₂ du sparar genom dina val och få en tydlig överblick.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header - Stepler style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Så funkar <span className="gradient-text">Klimava</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Fota kvitton, samla poäng och lös in belöningar. Hållbarhet har aldrig varit enklare.
          </p>
        </motion.div>

        {/* Feature highlight with phone - side by side like Stepler */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Left: Phone mockups */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-72 h-72 bg-primary/8 rounded-full blur-3xl -z-10" />
            
            <div className="relative flex items-end gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden sm:block w-36 md:w-44"
              >
                <div className="bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appOnboarding} alt="Klimava onboarding" className="rounded-[1.75rem] w-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-48 md:w-56"
              >
                <div className="bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                  <img src={appDashboard} alt="Klimava dashboard" className="rounded-[2rem] w-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden sm:block w-36 md:w-44"
              >
                <div className="bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appDashboard} alt="Klimava utmaningar" className="rounded-[1.75rem] w-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Key features list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Gör dina hållbara val till{" "}
              <span className="gradient-text">belöningar</span>.
            </h3>
            <ul className="space-y-4 mt-8">
              {allFeatures.slice(0, 3).map((feature, i) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-lg">{feature.description}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="inline-block mt-8 text-primary font-semibold hover:underline text-lg"
            >
              Skaffa Klimava →
            </a>
          </motion.div>
        </div>

        {/* Feature section 1: Shop screenshot + features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-56 md:w-64">
              <div className="bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                <img src={appShop} alt="Klimava poängshop" className="rounded-[2rem] w-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Poängshop & <span className="gradient-text">belöningar</span>
            </h3>
            <div className="space-y-5">
              {allFeatures.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature section 2: Challenges screenshot + features (reversed) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:order-2 flex justify-center"
          >
            <div className="w-56 md:w-64">
              <div className="bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                <img src={appChallengesScreen} alt="Klimava utmaningar" className="rounded-[2rem] w-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Utmaningar & <span className="gradient-text">topplistor</span>
            </h3>
            <div className="space-y-5">
              {allFeatures.slice(4).map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Founders Quote - clean */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto mb-6">
            "Vi tror på belöning istället för pekpinnar. Klimava ska göra det lätt och roligt att leva hållbart – varje dag, ett val i taget."
          </blockquote>
          <p className="text-muted-foreground font-medium">— Grundarna av Klimava</p>
        </motion.div>
      </div>
    </section>
  );
};
