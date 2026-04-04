import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import klimavaLogo from "@/assets/klimava-logo.jpeg";
import { Button } from "@/components/ui/button";
import { HamburgerLg, CloseLg } from "react-coolicons";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={klimavaLogo} alt="Klimava" className="h-9 w-9 rounded-xl" />
          <span className="text-xl font-bold text-foreground">Klimava</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#how-it-works" className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm">
            {t("Så funkar det", "How it works")}
          </a>
          <a href="/team" className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm">
            Team
          </a>
          <a href="/kontakt" className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm">
            {t("Kontakt", "Contact")}
          </a>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLanguage("sv")}
              className={`text-lg leading-none p-1 rounded transition-opacity ${language === "sv" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              aria-label="Svenska"
            >
              🇸🇪
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-lg leading-none p-1 rounded transition-opacity ${language === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              aria-label="English"
            >
              🇬🇧
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Button size="default" className="hidden sm:flex rounded-full gradient-bg text-primary-foreground hover:opacity-90 font-medium text-sm px-6">
            Skaffa appen
          </Button>

          <Button size="sm" className="md:hidden rounded-full gradient-bg text-primary-foreground hover:opacity-90 font-medium text-xs px-4">
            Skaffa appen
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseLg className="w-6 h-6 text-foreground" /> : <HamburgerLg className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-border/50 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a href="/#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2">
                Så funkar det
              </a>
              <a href="/team" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2">
                Team
              </a>
              <a href="/kontakt" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2">
                Kontakt
              </a>
              <Button size="default" className="mt-2 rounded-full gradient-bg text-primary-foreground hover:opacity-90 w-full">
                Skaffa appen
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
