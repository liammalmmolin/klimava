import { motion } from "framer-motion";
import { Camera, BarChart3, Gift, Sparkles, ShoppingBag, MapPin, Trophy, Users } from "lucide-react";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appChallenges from "@/assets/app-challenges.jpeg";

const allFeatures = [
  {
    icon: BarChart3,
    title: "Samla poäng",
    description: "Gör klimatsmarta val i vardagen och samla poäng genom att handla hållbart, återvinna och delta i utmaningar.",
  },
  {
    icon: Gift,
    title: "Lös in belöningar",
    description: "Byt dina poäng mot rabatter och erbjudanden hos våra samarbetspartners direkt i appen.",
  },
  {
    icon: Camera,
    title: "Fota ditt kvitto",
    description: "Ta en bild på kvittot och scanna det med vår AI-drivna scanner. Den identifierar produkterna, matchar dem mot vårt system och ger dig poäng för dina hållbara köp.",
  },
  {
    icon: MapPin,
    title: "Återvinningsscanner",
    description: "Besök återvinningsstationer och scanna via GPS direkt i appen för att få poäng när du återvinner.",
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
    description: "Följ hur mycket CO₂ du sparar genom dina val och få en tydlig överblick över din positiva klimatpåverkan.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(160 10% 50% / 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block gradient-bg text-primary-foreground font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            Allt i en app
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 leading-tight">
            Så funkar <span className="gradient-text">Klimava</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Fota kvitton, samla poäng och lös in belöningar. Hållbarhet har aldrig varit enklare.
          </p>
        </motion.div>

        {/* Main: Features Grid + App Preview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* All Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative"
              >
                <div className="absolute inset-0 gradient-bg rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl scale-90" />
                <div className="relative bg-muted/50 rounded-2xl p-6 shadow-none hover:shadow-soft transition-all duration-500 h-full border border-border/50 hover:border-primary/30 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-secondary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
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
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Decorative elements */}
            <div className="absolute w-72 h-72 gradient-bg rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute w-48 h-48 bg-secondary/30 rounded-full blur-2xl opacity-30 translate-x-20 -translate-y-10 -z-10" />
            
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden sm:block -mr-6 z-0"
            >
              <div className="relative w-36 md:w-44 hover:rotate-[-4deg] transition-transform duration-500">
                <div className="absolute inset-0 gradient-bg rounded-[2rem] blur-2xl opacity-40 scale-95" />
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
              <div className="relative w-52 md:w-64 hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 gradient-bg rounded-[2.5rem] blur-3xl opacity-50 scale-90" />
                <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-elevated ring-1 ring-white/10">
                  <img src={appDashboard} alt="Klimava dashboard" className="rounded-[2rem] w-full" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden sm:block -ml-6 z-0"
            >
              <div className="relative w-36 md:w-44 hover:rotate-[4deg] transition-transform duration-500">
                <div className="absolute inset-0 gradient-bg rounded-[2rem] blur-2xl opacity-40 scale-95" />
                <div className="relative bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appChallenges} alt="Klimava utmaningar" className="rounded-[1.75rem] w-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Founders Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 gradient-bg rounded-3xl opacity-5" />
          <div className="relative bg-muted/60 border border-border/50 rounded-3xl p-8 md:p-12 text-center">
            <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto mb-6">
              "Vi tror på belöning istället för pekpinnar. Klimava ska göra det lätt och roligt att leva hållbart – varje dag, ett val i taget."
            </blockquote>
            <p className="text-muted-foreground font-medium">— Grundarna av Klimava</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
