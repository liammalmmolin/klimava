import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosingQuote } from "@/components/ClosingQuote";
import { StackSection } from "@/components/StackSection";
import { Button } from "@/components/ui/button";
import { Mail } from "react-coolicons";
import { Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/components/ui/sonner";
import { useHeroShrink } from "@/hooks/use-hero-shrink";
import supportHero from "@/assets/support-hero.jpg?format=webp&quality=92";
import klimavaLogo from "@/assets/klimava-logo.jpeg";

const faqs = [
  {
    q: { sv: "Vad är Klimava?", en: "What is Klimava?" },
    a: {
      sv: "Klimava är en gratis livsstilsapp som gör hållbarhet mätbar, motiverande och belönande. Du samlar poäng för klimatsmarta val i vardagen och löser in dem mot riktiga belöningar hos våra samarbetspartners.",
      en: "Klimava is a free lifestyle app that makes sustainability measurable, motivating and rewarding. You earn points for climate-smart choices in everyday life and redeem them for real rewards from our partners.",
    },
  },
  {
    q: { sv: "Hur samlar jag poäng?", en: "How do I earn points?" },
    a: {
      sv: "Fota kvitton på hållbara köp, registrera återvinning på plats, ladda upp din SL-biljett, handla second hand eller delta i veckans klimatutmaningar — varje val ger poäng automatiskt.",
      en: "Photograph receipts for sustainable purchases, register recycling on the spot, upload your SL ticket, shop second-hand or join this week's climate challenge — every choice earns points automatically.",
    },
  },
  {
    q: { sv: "Är Klimava verkligen helt gratis?", en: "Is Klimava really completely free?" },
    a: {
      sv: "Ja, 100%. Ingen prenumeration och inga dolda avgifter. Det kostar ingenting att skapa konto, samla poäng eller lösa in belöningar.",
      en: "Yes, 100%. No subscription and no hidden fees. It costs nothing to create an account, earn points or redeem rewards.",
    },
  },
  {
    q: { sv: "Hur fungerar återvinningsscannern?", en: "How does the recycling scanner work?" },
    a: {
      sv: "GPS känner av när du är cirka 100 meter från en återvinningsstation och låser upp scannern automatiskt, så du kan registrera det du återvinner direkt på plats.",
      en: "GPS detects when you're about 100 meters from a recycling station and unlocks the scanner automatically, so you can register what you recycle right on the spot.",
    },
  },
  {
    q: { sv: "Vilka belöningar kan jag få?", en: "What rewards can I get?" },
    a: {
      sv: "Byt poäng mot rabatter, fri frakt, gratis månader och produkter hos våra samarbetspartners som SL, Tradera, Plick, ACT och fler — direkt i appen.",
      en: "Exchange points for discounts, free shipping, free months and products from partners like SL, Tradera, Plick, ACT and more — directly in the app.",
    },
  },
  {
    q: { sv: "Finns Klimava för Android?", en: "Is Klimava available for Android?" },
    a: {
      sv: "Just nu finns Klimava bara till iPhone via App Store. Vi jobbar på en Android-version — följ oss på Instagram för uppdateringar.",
      en: "Right now Klimava is only available for iPhone via the App Store. We're working on an Android version — follow us on Instagram for updates.",
    },
  },
  {
    q: { sv: "Mitt kvitto scannas inte korrekt, vad gör jag?", en: "My receipt isn't scanning correctly, what do I do?" },
    a: {
      sv: "Se till att kvittot ligger plant, är väl upplyst och att hela kvittot syns i bilden. Fungerar det fortfarande inte, mejla en bild av kvittot till oss så hjälper vi dig manuellt.",
      en: "Make sure the receipt is flat, well lit, and fully visible in the frame. If it still doesn't work, email us a photo of the receipt and we'll process it manually.",
    },
  },
  {
    q: { sv: "Hur tar jag bort mitt konto eller min data?", en: "How do I delete my account or data?" },
    a: {
      sv: "Mejla oss så hjälper vi dig ta bort ditt konto och all tillhörande data inom några dagar.",
      en: "Email us and we'll help you delete your account and all associated data within a few days.",
    },
  },
];

const feedbackCategories = [
  {
    title: { sv: "Beröm", en: "Praise" },
    desc: {
      sv: "Är det något du gillar med appen? Berätta för oss, vi blir glada.",
      en: "Something you like about the app? Tell us, we'd love to hear it.",
    },
  },
  {
    title: { sv: "Förbättringsförslag", en: "Suggestion" },
    desc: {
      sv: "Något vi kan göra bättre i appen eller på hemsidan? Vi lyssnar.",
      en: "Something we could do better in the app or on the site? We're listening.",
    },
  },
  {
    title: { sv: "Rapportera en bugg", en: "Report a bug" },
    desc: {
      sv: "Stötte du på något som inte funkade som det skulle? Berätta så kollar vi på det.",
      en: "Ran into something that didn't work right? Let us know and we'll look into it.",
    },
  },
];

// Local kerning fix: in "förslag" the f's overhang sits too close to the ö's
// dots in Source Serif 4, so the f gets a hair of extra right spacing.
const renderTitle = (title: string) => {
  const idx = title.indexOf("förslag");
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <span className="mr-[0.06em]">f</span>
      {title.slice(idx + 1)}
    </>
  );
};

const FeedbackCard = ({ category }: { category: (typeof feedbackCategories)[number] }) => {
  const { t } = useLanguage();
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    const subject = encodeURIComponent(t(category.title.sv, category.title.en));
    const body = encodeURIComponent(value.trim());
    window.location.href = `mailto:support@klimava.com?subject=${subject}&body=${body}`;
    toast.success(t("Tack för din feedback!", "Thanks for your feedback!"));
    setValue("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "1200px 0px" }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8"
    >
      <h3 className="mb-2 font-heading text-lg font-medium text-foreground">{renderTitle(t(category.title.sv, category.title.en))}</h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{t(category.desc.sv, category.desc.en)}</p>
      <div className="flex items-center gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={t("Skriv ditt meddelande", "Write your message")}
          className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <button
          onClick={handleSend}
          aria-label={t("Skicka", "Send")}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-bg text-primary-foreground transition-transform hover:scale-105"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

const Support = () => {
  const { t } = useLanguage();
  const heroScale = useHeroShrink();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero — pinned card that shrinks as the FAQ card sweeps up over it,
            exactly like the homepage hero */}
        <StackSection z={10} rounded={false} sticky>
          <section className="bg-background px-3 pb-3 pt-3 md:px-4 md:pb-4 md:pt-4">
            <motion.div
              style={{ scale: heroScale }}
              className="relative h-[38rem] max-h-[75vh] min-h-[460px] origin-top overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem]"
            >
              <img width={2400} height={3600} fetchPriority="high" src={supportHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, hsl(var(--foreground)/0.88) 0%, hsl(var(--foreground)/0.45) 45%, hsl(var(--foreground)/0.15) 100%)",
                }}
              />
              {/* Top fade so the logo/CTA stay legible over bright sky/sun-flare */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />

              {/* Logo — anchored to this card's corner, scrolls away with it */}
              <Link to="/" className="absolute left-6 top-6 z-10 flex items-center gap-2.5 sm:left-8 sm:top-8">
                <img width={36} height={36} src={klimavaLogo} alt="Klimava" className="h-9 w-9 rounded-xl ring-1 ring-white/25" />
                <span className="text-lg font-bold text-white">Klimava</span>
              </Link>

              {/* App CTA — anchored to this card's corner, scrolls away with it */}
              <Button
                size="default"
                className="absolute right-6 top-6 z-10 hidden rounded-full lg:inline-flex gradient-bg text-primary-foreground hover:opacity-90 font-medium text-sm px-6 sm:right-8 sm:top-8"
                asChild
              >
                <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                  {t("Skaffa appen", "Get the app")}
                </a>
              </Button>

              <div className="absolute inset-x-0 bottom-0 p-8 text-center sm:p-12 md:p-16">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl"
                >
                  {t("Hur kan vi hjälpa dig?", "How can we help you?")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
                >
                  {t(
                    "Sök bland våra vanligaste frågor eller hör av dig direkt — vi svarar snabbt.",
                    "Browse our most common questions or reach out directly — we reply fast."
                  )}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  <Button size="lg" className="rounded-full gradient-bg text-primary-foreground hover:opacity-90" asChild>
                    <a href="#faq">{t("Vanliga frågor", "FAQ")}</a>
                  </Button>
                  <Button variant="glass" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
                    <a href="#kontakt">{t("Kontakta oss", "Contact us")}</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </section>
          {/* Extra buffer so the pin holds for a moment before the FAQ card sweeps up over it.
              Opaque background — a transparent gap here lets this sticky layer's stale paint
              bleed through wherever a higher layer later has a gap of its own. */}
          <div className="h-[40vh] bg-background" aria-hidden />
        </StackSection>

        {/* FAQ — the card that sweeps up and covers the hero. Every question and answer
            is visible on its own card, fading up into view like the rest of the site. */}
        <StackSection z={20}>
          <section id="faq" className="bg-muted py-20 md:py-28">
            <div className="container mx-auto max-w-5xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "1200px 0px" }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <span className="gradient-text text-sm font-semibold uppercase tracking-wider">
                  {t("Support", "Support")}
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  {t("Vanliga frågor", "Frequently asked questions")}
                </h2>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2">
                {faqs.map((item, i) => (
                  <motion.div
                    key={item.q.sv}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "1200px 0px" }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                    className="rounded-3xl border border-border bg-card p-8 shadow-soft"
                  >
                    <h3 className="mb-2 font-heading text-lg font-medium text-foreground">{t(item.q.sv, item.q.en)}</h3>
                    <p className="leading-relaxed text-muted-foreground">{t(item.a.sv, item.a.en)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </StackSection>

        {/* Feedback + contact — continues flush below the FAQ card, same as how the
            homepage stacks several sections inside one continuous body card */}
        <StackSection z={30} rounded={false}>
          <section className="bg-foreground py-20 md:py-28">
            <div className="container mx-auto max-w-5xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "1200px 0px" }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="font-heading text-3xl font-bold text-background md:text-4xl">
                  {t("Hjälp oss att bli bättre.", "Help us get better.")}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-background/60">
                  {t(
                    "Ditt omdöme, stort som litet, gör Klimava bättre.",
                    "Your feedback, big or small, makes Klimava better."
                  )}
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-3">
                {feedbackCategories.map((category) => (
                  <FeedbackCard key={category.title.sv} category={category} />
                ))}
              </div>
            </div>
          </section>

          <section id="kontakt" className="bg-accent py-20 md:py-28">
            <div className="container mx-auto max-w-2xl px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "1200px 0px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                  {t("Hittade du inte svaret du sökte?", "Didn't find the answer you were looking for?")}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  {t(
                    "Vårt supportteam svarar oftast inom 24 timmar. Mejla oss så hjälper vi dig.",
                    "Our support team usually replies within 24 hours. Email us and we'll help you out."
                  )}
                </p>

                <a
                  href="mailto:support@klimava.com"
                  className="group mx-auto mt-8 flex max-w-sm items-center gap-4 rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-all hover:shadow-elevated"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl gradient-bg transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{t("Användarsupport", "User support")}</h3>
                    <p className="font-medium text-primary">support@klimava.com</p>
                  </div>
                </a>

                <Link to="/kontakt" className="mt-6 inline-block font-semibold text-primary hover:underline">
                  {t("Fler kontaktvägar →", "More ways to reach us →")}
                </Link>
              </motion.div>
            </div>
          </section>
        </StackSection>

        <StackSection z={40} rounded={false}>
          <Footer />
        </StackSection>
        {/* Plain content on the base page background, sitting right below the footer card */}
        <StackSection z={50} rounded={false}>
          <ClosingQuote />
        </StackSection>
      </main>
    </div>
  );
};

export default Support;
