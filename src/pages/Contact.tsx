import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail } from "react-coolicons";
import { Instagram, Music2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import contactBg from "@/assets/contact-bg.png";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "linear-gradient(180deg, hsl(160 30% 12%) 0%, hsl(158 28% 16%) 30%, hsl(155 25% 20%) 60%, hsl(150 25% 97%) 100%)" 
        }} 
      />
      <Header />
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="gradient-text font-semibold text-sm uppercase tracking-wider">
              {t("Samarbeta med oss", "Partner with us")}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3">
              {t("Kontakta oss", "Contact us")}
            </h1>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              {t(
                "Vill du nå miljömedvetna konsumenter och stärka ditt varumärke? Bli partner med Klimava och erbjud exklusiva belöningar till våra användare.",
                "Want to reach eco-conscious consumers and strengthen your brand? Partner with Klimava and offer exclusive rewards to our users."
              )}
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Partner / företag – primär */}
            <motion.a
              href="mailto:klimavauf@gmail.com"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-elevated hover:bg-white/15 transition-all duration-300 border border-white/20 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">
                    {t("Företag & partnerskap", "Business & partnerships")}
                  </h3>
                  <p className="text-white/90 font-medium">klimavauf@gmail.com</p>
                </div>
              </div>
              <p className="text-white/60 text-sm ml-[4.5rem]">
                {t(
                  "För samarbeten, partnerförfrågningar och affärsmöjligheter.",
                  "For collaborations, partnership inquiries and business opportunities."
                )}
              </p>
            </motion.a>

            {/* Support – sekundär */}
            <motion.a
              href="mailto:support@klimava.com"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-elevated hover:bg-white/15 transition-all duration-300 border border-white/20 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">
                    {t("Användarsupport", "User support")}
                  </h3>
                  <p className="text-white/90 font-medium">support@klimava.com</p>
                </div>
              </div>
              <p className="text-white/60 text-sm ml-[4.5rem]">
                {t(
                  "Behöver du hjälp med appen? Kontakta vår support.",
                  "Need help with the app? Contact our support team."
                )}
              </p>
            </motion.a>

            {/* Sociala medier – kompakt rad */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3 pt-2"
            >
              <a
                href="https://www.instagram.com/klimava.uf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/8 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10 hover:bg-white/12 transition-all duration-300 group flex-1"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">@klimava.uf</span>
              </a>
              <div className="flex items-center gap-2.5 bg-white/5 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10 opacity-50 flex-1">
                <Music2 className="w-5 h-5 text-white/50" />
                <span className="text-white/50 text-sm font-medium">{t("Kommer snart", "Coming soon")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
