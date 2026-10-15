import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { founders } from "@/data/founders";
import teamPhoto from "@/assets/team-photo.jpg?format=webp&quality=92";

const Team = () => {
  const { t } = useLanguage();

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
              width={1560} height={1170} fetchPriority="high"
              alt={t("Klimava-teamet på UF Awards 2026", "The Klimava team at UF Awards 2026")}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-10 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full overflow-hidden gradient-bg flex items-center justify-center shadow-card">
                  <img
                    src={founder.photo}
                    width={112} height={112} loading="lazy" decoding="async"
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: founder.objectPosition }}
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">{founder.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t("Grundare", "Founder")}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
