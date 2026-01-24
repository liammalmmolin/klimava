import { motion } from "framer-motion";
import { Camera, BarChart3, Gift, Sparkles } from "lucide-react";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appChallenges from "@/assets/app-challenges.jpeg";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Fota ditt kvitto",
    description:
      "Efter ett köp tar du en bild på kvittot. Vår AI läser av det automatiskt.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Se din klimatpåverkan",
    description:
      "För varje produkt visar vi exakt hur mycket CO₂ du sparar jämfört med andra val.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Samla poäng",
    description:
      "Valde du hållbart? Du får poäng baserat på hur mycket CO₂ du sparat!",
  },
  {
    icon: Gift,
    step: "04",
    title: "Lös in belöningar",
    description:
      "Använd poängen i shoppen för rabatter och erbjudanden från partners.",
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
            Enkelt som 1-2-3-4
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Så funkar Klimava
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ingen krångel – bara fota, samla och vinn. Hållbarhet har aldrig
            varit enklare.
          </p>
        </motion.div>

        {/* Combined: Steps + App Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 h-full border border-border">
                  {/* Step number */}
                  <span className="text-5xl font-bold text-muted/60 absolute top-3 right-4">
                    {step.step}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
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
            {/* Left phone - Onboarding */}
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
                  <img
                    src={appOnboarding}
                    alt="Klimava onboarding"
                    className="rounded-[1.75rem] w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Center phone - Dashboard (main) */}
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
                  <img
                    src={appDashboard}
                    alt="Klimava dashboard"
                    className="rounded-[1.75rem] w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right phone - Challenges */}
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
                  <img
                    src={appChallenges}
                    alt="Klimava utmaningar"
                    className="rounded-[1.75rem] w-full"
                  />
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
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12"
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
