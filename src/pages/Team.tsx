import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import teamPhoto from "@/assets/team-photo.jpg";

const founders = [
  { name: "Dante Rudinsson", role: "Vice Direktör", initials: "DR" },
  { name: "Liam Molin", role: "Produktutvecklare", initials: "LM" },
  { name: "Christian Nordwall", role: "Marknadsföringsansvarig", initials: "CN" },
  { name: "Linus Emmoth", role: "Ekonomiansvarig", initials: "LE" },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Möt <span className="gradient-text">teamet</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Fyra unga entreprenörer och grundare med en gemensam vision – att göra hållbara val enkla och motiverande för alla.
            </p>
          </motion.div>

          {/* Group photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-elevated"
          >
            <img
              src={teamPhoto}
              alt="Klimava-teamet på UF Awards 2026"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Individual founders */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center shadow-card">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {founder.initials}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{founder.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{founder.role}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Grundare</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 max-w-3xl mx-auto text-center"
          >
            <div className="border border-border/50 rounded-3xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic">
                "Vi tror på belöning istället för pekpinnar. Klimava ska göra det lätt och roligt att leva hållbart – varje dag, ett val i taget."
              </blockquote>
              <p className="text-muted-foreground font-medium mt-6">— Grundarna av Klimava</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
