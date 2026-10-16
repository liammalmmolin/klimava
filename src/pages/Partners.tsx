import { revealViewport } from "@/lib/motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightMd } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { partners } from "@/data/partners";

const Partners = () => {
  const { t, language } = useLanguage();
  const sl = partners.find((p) => p.name === "SL");
  const otherPartners = partners.filter((p) => p.name !== "SL");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {t("Samarbeten", "Partnerships")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3">
              {t(
                <>Våra <span className="gradient-text">partners</span></>,
                <>Our <span className="gradient-text">partners</span></>
              )}
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              {t(
                "Dina Klimava-poäng blir riktiga rabatter, fri frakt och exklusiva erbjudanden hos de här samarbetspartnerna – direkt i appen.",
                "Your Klimava points become real discounts, free shipping and exclusive offers from these partners – directly in the app."
              )}
            </p>
          </motion.div>

          {sl && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto mb-12"
            >
              <Link
                to="/sl-samarbete"
                className="group flex flex-col sm:flex-row items-center gap-6 rounded-3xl border-2 border-primary/40 bg-card p-8 shadow-card transition-all hover:shadow-elevated hover:border-primary"
              >
                <img width={80} height={80} decoding="async" src={sl.logo} alt="SL" className="w-20 h-20 rounded-2xl object-cover shrink-0" />
                <div className="flex-1 text-center sm:text-left">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {t("Störst samarbetspartner", "Largest partner")}
                  </span>
                  <h2 className="text-2xl font-heading font-medium text-foreground mt-1">SL</h2>
                  <p className="text-muted-foreground mt-1">{language === "sv" ? sl.desc.sv : sl.desc.en}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold shrink-0 group-hover:underline">
                  {t("Läs om SL-samarbetet", "Read about the SL partnership")}
                  <ArrowRightMd className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {otherPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ duration: 0.4}}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card"
              >
                <img
                  src={p.logo}
                  width={56} height={56} loading="lazy" decoding="async"
                  alt={p.name}
                  className="w-14 h-14 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-heading font-medium text-foreground truncate">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {language === "sv" ? p.desc.sv : p.desc.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto text-center border border-border rounded-2xl p-8"
          >
            <h2 className="text-xl font-heading font-medium text-foreground mb-2">
              {t("Vill ditt företag bli partner?", "Want your business to become a partner?")}
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              {t(
                "Nå miljömedvetna konsumenter och stärk ditt varumärke genom att erbjuda belöningar till Klimavas användare.",
                "Reach eco-conscious consumers and strengthen your brand by offering rewards to Klimava's users."
              )}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-soft hover:shadow-card hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t("Bli partner", "Become a partner")} →
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
