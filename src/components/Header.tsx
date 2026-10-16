import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { HamburgerLg, CloseLg } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#how-it-works", sv: "Så funkar det", en: "How it works" },
  { href: "/team", sv: "Team", en: "Team" },
  { href: "/support", sv: "Support", en: "Support" },
];

export const Header = ({ className }: { className?: string } = {}) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("fixed inset-x-0 top-[34px] z-50 flex justify-end px-9 sm:top-[42px] sm:px-11 lg:top-6 lg:justify-center lg:px-3", className)}
    >
      {/* Desktop — links float free in the middle, no logo/CTA */}
      <nav className="hidden items-center gap-6 rounded-full border border-white/10 bg-neutral-900/45 px-6 py-3 shadow-elevated backdrop-blur-md lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            {t(link.sv, link.en)}
          </Link>
        ))}
        <LanguageSwitch />
      </nav>

      {/* Mobile/tablet — compact toggle, same floating pill treatment */}
      <div className="relative lg:hidden">
        <Button variant="ghost"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/45 px-4 py-2.5 text-sm font-medium text-white shadow-elevated backdrop-blur-md hover:bg-neutral-900/45 hover:text-white h-auto px-4 py-2.5"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseLg className="w-5 h-5" /> : <HamburgerLg className="w-5 h-5" />}
          {t("Meny", "Menu")}
        </Button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-60 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 shadow-elevated backdrop-blur-md"
            >
              <nav className="flex flex-col gap-1 px-3 py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {t(link.sv, link.en)}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <LanguageSwitch size="lg" />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
