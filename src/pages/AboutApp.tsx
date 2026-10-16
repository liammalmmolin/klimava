import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { features } from "@/data/features";
import { fadeUp } from "@/lib/motion";
import { AppShowcaseCarousel } from "@/components/AppShowcaseCarousel";

const AboutApp = () => {
  const { t } = useLanguage();

  const specs = [
    { label: t("Kategori", "Category"), value: t("Livsstil", "Lifestyle") },
    { label: t("Pris", "Price"), value: t("Gratis", "Free") },
    { label: t("Betyg", "Rating"), value: "5.0 ★" },
    { label: t("Storlek", "Size"), value: "67.8 MB" },
    { label: t("Kräver", "Requires"), value: "iOS 15.1+" },
    { label: t("Åldersgräns", "Age rating"), value: "4+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {t("Om appen", "About the app")}
            </span>
            <h1 className="text-[2rem] leading-tight sm:text-4xl md:text-6xl font-bold text-foreground mt-3">
              {t(
                <>Allt du behöver <span className="gradient-text">veta.</span></>,
                <>Everything you <span className="gradient-text">need to know.</span></>
              )}
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              {t(
                "Klimava är en gratis livsstilsapp som gör hållbara val i vardagen mätbara, roliga och belönande.",
                "Klimava is a free lifestyle app that makes everyday sustainable choices measurable, fun and rewarding."
              )}
            </p>
            <div className="flex justify-center mt-8">
              <Button variant="hero" size="xl" asChild>
                <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                  <Apple className="w-5 h-5" />
                  {t("Hämta i App Store", "Download on the App Store")}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Screenshot gallery */}
          <motion.div {...fadeUp}>
            <AppShowcaseCarousel />
          </motion.div>

          {/* Feature grid */}
          <motion.div {...fadeUp} className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground max-w-md">
              {t(
                <>Nio sätt att <span className="gradient-text">samla poäng.</span></>,
                <>Nine ways to <span className="gradient-text">earn points.</span></>
              )}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-28 border border-border">
            {features.map((f, i) => (
              <motion.div
                key={f.title.sv}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="bg-card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-medium text-foreground mb-2">{t(f.title.sv, f.title.en)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(f.desc.sv, f.desc.en)}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech deep-dive */}
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-12 mb-28">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                {t(
                  <>Så läser vi av <span className="gradient-text">kvittot.</span></>,
                  <>How we read your <span className="gradient-text">receipt.</span></>
                )}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t(
                  "Efter att du har handlat i matbutiken öppnar du appen och tar en bild på kvittot.",
                  "After shopping at the grocery store, you open the app and take a photo of the receipt."
                )}</p>
                <p>{t(
                  "Vår OCR-teknik läser av kvittot och identifierar vilka produkter du köpt. Sedan scannar du streckkoden på det du vill registrera.",
                  "Our OCR technology reads the receipt and identifies which products you bought. Then you scan the barcode of what you want to register."
                )}</p>
                <p>{t(
                  "Klimava matchar de scannade produkterna mot kvittot för att bekräfta köpet, och jämför dem mot vår databas med över 400 000 livsmedelsprodukter för att hitta hållbara val.",
                  "Klimava matches the scanned products against the receipt to confirm the purchase, and compares them against our database of over 400,000 food products to find sustainable choices."
                )}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                {t(
                  <>Återvinning med <span className="gradient-text">GPS</span></>,
                  <>Recycling with <span className="gradient-text">GPS</span></>
                )}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t(
                  "Klimava känner av när du är nära en av våra utmarkerade återvinningsstationer och låser upp scannern automatiskt.",
                  "Klimava detects when you're near one of our marked recycling stations and unlocks the scanner automatically."
                )}</p>
                <p>{t(
                  "På plats scannar du det du återvinner, och Klimava kopplar handlingen till en faktisk plats – inte bara ett klick i appen.",
                  "On site, you scan what you recycle, and Klimava ties the action to an actual location – not just a tap in the app."
                )}</p>
              </div>
              <Link
                to="/atervinning"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-4"
              >
                {t("Läs mer om återvinning", "Read more about recycling")} →
              </Link>
            </div>
          </motion.div>

          {/* Spec sheet */}
          <motion.div {...fadeUp} className="border border-border rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/40">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t("Från App Store", "From the App Store")}
              </span>
            </div>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
              {specs.map((s) => (
                <div key={s.label} className="bg-card p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                  <dd className="font-serif text-lg text-foreground mt-1">{s.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutApp;
