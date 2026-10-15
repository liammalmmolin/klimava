import { createContext, useContext, useState, useMemo, ReactNode } from "react";

type Language = "sv" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: {
    (sv: string, en: string): string;
    (sv: ReactNode, en: ReactNode): ReactNode;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sv");

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: ((sv: ReactNode, en: ReactNode) => (language === "sv" ? sv : en)) as LanguageContextType["t"],
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
