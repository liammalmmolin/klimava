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
              className={`w-6 h-6 rounded-full overflow-hidden transition-opacity ${language === "sv" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-80"}`}
              aria-label="Svenska"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <clipPath id="circSvD"><circle cx="50" cy="50" r="50"/></clipPath>
                <g clipPath="url(#circSvD)">
                  <rect width="100" height="100" fill="#006AA7"/>
                  <rect x="30" width="15" height="100" fill="#FECC02"/>
                  <rect y="37.5" width="100" height="25" fill="#FECC02"/>
                </g>
              </svg>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`w-6 h-6 rounded-full overflow-hidden transition-opacity ${language === "en" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-80"}`}
              aria-label="English"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <clipPath id="circEnD"><circle cx="50" cy="50" r="50"/></clipPath>
                <g clipPath="url(#circEnD)">
                  <rect width="100" height="100" fill="#00247D"/>
                  <path d="M0,0 L100,100 M100,0 L0,100" stroke="#fff" strokeWidth="15"/>
                  <path d="M0,0 L100,100 M100,0 L0,100" stroke="#CF142B" strokeWidth="10"/>
                  <rect x="40" width="20" height="100" fill="#fff"/>
                  <rect y="35" width="100" height="30" fill="#fff"/>
                  <rect x="43" width="14" height="100" fill="#CF142B"/>
                  <rect y="38" width="100" height="24" fill="#CF142B"/>
                </g>
              </svg>
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Button size="default" className="hidden sm:flex rounded-full gradient-bg text-primary-foreground hover:opacity-90 font-medium text-sm px-6" asChild>
            <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
              {t("Skaffa appen", "Get the app")}
            </a>
          </Button>

          <Button size="sm" className="md:hidden rounded-full gradient-bg text-primary-foreground hover:opacity-90 font-medium text-xs px-4" asChild>
            <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
              {t("Skaffa appen", "Get the app")}
            </a>
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
                {t("Så funkar det", "How it works")}
              </a>
              <a href="/team" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2">
                Team
              </a>
              <a href="/kontakt" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2">
                {t("Kontakt", "Contact")}
              </a>
              <div className="flex items-center gap-2 py-2">
                <button
                  onClick={() => setLanguage("sv")}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === "sv" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-80"}`}
                  aria-label="Svenska"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <clipPath id="circSvM"><circle cx="50" cy="50" r="50"/></clipPath>
                    <g clipPath="url(#circSvM)">
                      <rect width="100" height="100" fill="#006AA7"/>
                      <rect x="30" width="15" height="100" fill="#FECC02"/>
                      <rect y="37.5" width="100" height="25" fill="#FECC02"/>
                    </g>
                  </svg>
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`w-8 h-8 rounded-full overflow-hidden transition-opacity ${language === "en" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-80"}`}
                  aria-label="English"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <clipPath id="circEnM"><circle cx="50" cy="50" r="50"/></clipPath>
                    <g clipPath="url(#circEnM)">
                      <rect width="100" height="100" fill="#00247D"/>
                      <path d="M0,0 L100,100 M100,0 L0,100" stroke="#fff" strokeWidth="15"/>
                      <path d="M0,0 L100,100 M100,0 L0,100" stroke="#CF142B" strokeWidth="10"/>
                      <rect x="40" width="20" height="100" fill="#fff"/>
                      <rect y="35" width="100" height="30" fill="#fff"/>
                      <rect x="43" width="14" height="100" fill="#CF142B"/>
                      <rect y="38" width="100" height="24" fill="#CF142B"/>
                    </g>
                  </svg>
                </button>
              </div>
              <Button size="default" className="mt-2 rounded-full gradient-bg text-primary-foreground hover:opacity-90 w-full" asChild>
                <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                  {t("Skaffa appen", "Get the app")}
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
