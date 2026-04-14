import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import teamPhoto from "@/assets/team-photo.jpg";
import dantePhoto from "@/assets/dante-new.png";
import linusPhoto from "@/assets/linus-new.png";
import christianPhoto from "@/assets/christian.png";
import liamPhoto from "@/assets/liam.png";

const Team = () => {
  const { t } = useLanguage();

  const founders = [
    { name: "Dante Rudinsson", roleSv: "Verkställande Direktör", roleEn: "CEO", initials: "DR", photo: dantePhoto },
    { name: "Liam Molin", roleSv: "Produktutvecklare", roleEn: "Product Developer", initials: "LM", photo: null },
    { name: "Christian Nordwall", roleSv: "Marknadsföringsansvarig", roleEn: "Marketing Manager", initials: "CN", photo: null },
    { name: "Linus Emmoth", roleSv: "Ekonomiansvarig", roleEn: "Finance Manager", initials: "LE", photo: linusPhoto },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {t("Möt", "Meet the")} <span className="gradient-text">{t("teamet", "team")}</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              {t(
                "Fyra unga entreprenörer och grundare med en gemensam vision – att göra hållbara val enkla och motiverande för alla.",
                "Four young entrepreneurs and founders with a shared vision – to make sustainable choices easy and motivating for everyone."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-elevated"
          >
            <img
              src={teamPhoto}
              alt={t("Klimava-teamet på UF Awards 2026", "The Klimava team at UF Awards 2026")}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden gradient-bg flex items-center justify-center shadow-card">
                  {founder.photo ? (
                    <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="text-2xl font-bold text-primary-foreground">
                      {founder.initials}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{founder.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{t(founder.roleSv, founder.roleEn)}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t("Grundare", "Founder")}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 max-w-3xl mx-auto text-center"
          >
            <div className="border border-border/50 rounded-3xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic">
                {t(
                  "\"Vi tror på belöning istället för pekpinnar. Klimava ska göra det lätt och roligt att leva hållbart – varje dag, ett val i taget.\"",
                  "\"We believe in rewards instead of finger-wagging. Klimava should make it easy and fun to live sustainably – every day, one choice at a time.\""
                )}
              </blockquote>
              <p className="text-muted-foreground font-medium mt-6">
                {t("— Grundarna av Klimava", "— The founders of Klimava")}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
