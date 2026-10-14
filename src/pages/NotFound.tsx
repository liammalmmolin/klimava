import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-24">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-5xl font-bold text-foreground">404</h1>
          <p className="mb-6 text-lg text-muted-foreground">
            {t("Hoppsan! Sidan kunde inte hittas.", "Oops! Page not found.")}
          </p>
          <a href="/" className="text-primary font-semibold underline hover:text-primary/90">
            {t("Tillbaka till startsidan", "Return to home")}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
