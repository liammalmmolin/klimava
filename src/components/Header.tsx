import { motion } from "framer-motion";
import klimavaLogo from "@/assets/klimava-logo.jpeg";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={klimavaLogo}
            alt="Klimava"
            className="h-10 w-10 rounded-xl"
          />
          <span className="text-xl font-bold text-foreground">Klimava</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Så funkar det
          </a>
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Funktioner
          </a>
          <a
            href="#download"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Ladda ner
          </a>
        </nav>

        <Button variant="hero" size="default">
          Ladda ner appen
        </Button>
      </div>
    </motion.header>
  );
};
