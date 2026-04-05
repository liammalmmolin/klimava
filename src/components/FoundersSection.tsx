import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const founders = [
  { name: "Dante Rudinsson", roleSv: "Grundare", roleEn: "Founder", initials: "DR" },
  { name: "Liam Molin", roleSv: "Grundare", roleEn: "Founder", initials: "LM" },
  { name: "Christian Nordwall", roleSv: "Grundare", roleEn: "Founder", initials: "CN" },
  { name: "Linus Emmoth", roleSv: "Grundare", roleEn: "Founder", initials: "LE" },
];

export const FoundersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="founders" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("Teamet bakom Klimava", "The team behind Klimava")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            {t("Möt grundarna", "Meet the founders")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {t(
              "Fyra unga entreprenörer med en gemensam vision – att göra hållbara val enkla och motiverande för alla.",
              "Four young entrepreneurs with a shared vision – to make sustainable choices easy and motivating for everyone."
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center shadow-card group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {founder.initials}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{founder.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(founder.roleSv, founder.roleEn)}
                </p>
                <div className="flex items-center justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <p className="text-lg text-foreground leading-relaxed">
              {t(
                "\"Vi tror på belöning istället för pekpinnar. Klimava ska göra det lätt och roligt att leva hållbart – varje dag, ett val i taget.\"",
                "\"We believe in rewards instead of finger-wagging. Klimava should make it easy and fun to live sustainably – every day, one choice at a time.\""
              )}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {t("— Grundarna av Klimava", "— The founders of Klimava")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
