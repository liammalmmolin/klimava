import { SplitReveal } from "@/components/SplitReveal";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Sits directly on the plain page background (no card, no rounded edges) —
 * revealed once the footer card has scrolled away above it.
 */
export const ClosingQuote = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background px-6 py-24 text-center md:py-32">
      <blockquote className="mx-auto max-w-2xl font-quote text-2xl font-medium italic leading-tight text-foreground md:text-4xl">
        <SplitReveal
          text={t(
            "Vi tror på belöning istället för pekpinnar. Klimava ska göra det lätt och roligt att leva hållbart – varje dag, ett val i taget.",
            "We believe in rewards instead of finger-wagging. Klimava should make it easy and fun to live sustainably – every day, one choice at a time."
          )}
        />
      </blockquote>
      <p className="mt-6 font-sans text-base font-medium not-italic text-muted-foreground md:text-lg">
        {t("— Grundarna av Klimava", "— The founders of Klimava")}
      </p>
    </section>
  );
};
