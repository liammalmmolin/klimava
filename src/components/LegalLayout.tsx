import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface LegalLayoutProps {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  children: ReactNode;
}

export const LegalLayout = ({ eyebrow, title, updated, children }: LegalLayoutProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest section-label">{eyebrow}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">{title}</h1>
            <p className="font-mono text-xs text-muted-foreground mt-4">
              {t("Senast uppdaterad", "Last updated")}: {updated}
            </p>
            <div className="mt-4 text-xs text-muted-foreground border border-border rounded-lg px-4 py-3 bg-muted/40">
              {t(
                "Det här är ett utkast som beskriver hur Klimava faktiskt fungerar idag. Sidan bör läsas igenom juridiskt innan den används som bindande villkor.",
                "This is a draft describing how Klimava actually works today. The page should be reviewed by a lawyer before being treated as binding terms."
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-2xl mx-auto space-y-10 text-muted-foreground leading-relaxed [&_h2]:font-heading [&_h2]:font-medium [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:mb-3 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-primary [&_a]:font-medium [&_a]:hover:underline"
          >
            {children}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
