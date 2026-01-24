import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import klimavaLogo from "@/assets/klimava-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src={klimavaLogo}
            alt="Klimava"
            className="h-10 w-10 rounded-xl"
          />
          <span className="text-xl font-bold text-foreground">Klimava</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#how-it-works"
            className="text-foreground/80 hover:text-primary font-medium transition-colors"
          >
            Så funkar det
          </a>
          <a
            href="/#features"
            className="text-foreground/80 hover:text-primary font-medium transition-colors"
          >
            Funktioner
          </a>
          <a
            href="/grundare"
            className="text-foreground/80 hover:text-primary font-medium transition-colors"
          >
            Om oss
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="hero" size="default" className="hidden sm:flex">
            Ladda ner appen
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a
                href="/#how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
              >
                Så funkar det
              </a>
              <a
                href="/#features"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
              >
                Funktioner
              </a>
              <a
                href="/grundare"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
              >
                Om oss
              </a>
              <Button variant="hero" size="default" className="mt-2">
                Ladda ner appen
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
