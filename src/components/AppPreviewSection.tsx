import { motion } from "framer-motion";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appChallenges from "@/assets/app-challenges.jpeg";

export const AppPreviewSection = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sneak peek
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Se appen i action
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ren design, smart AI och enkla funktioner. Klimava är byggd för att
            göra hållbarhet till en del av din vardag.
          </p>
        </motion.div>

        {/* Phone Mockups */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          {/* Left phone - Onboarding */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative hidden sm:block"
          >
            <div className="relative w-48 md:w-56 lg:w-64">
              <div className="absolute inset-0 gradient-bg rounded-[2.5rem] blur-2xl opacity-30 scale-95" />
              <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                <img
                  src={appOnboarding}
                  alt="Klimava onboarding"
                  className="rounded-[2rem] w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Center phone - Dashboard (main) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="relative w-64 md:w-72 lg:w-80">
              <div className="absolute inset-0 gradient-bg rounded-[2.5rem] blur-3xl opacity-40 scale-90" />
              <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                <img
                  src={appDashboard}
                  alt="Klimava dashboard"
                  className="rounded-[2rem] w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right phone - Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative hidden sm:block"
          >
            <div className="relative w-48 md:w-56 lg:w-64">
              <div className="absolute inset-0 gradient-bg rounded-[2.5rem] blur-2xl opacity-30 scale-95" />
              <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                <img
                  src={appChallenges}
                  alt="Klimava utmaningar"
                  className="rounded-[2rem] w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature highlights */}
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
