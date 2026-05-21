import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { ArrowRightMd, Check, Camera, Phone, Leaf, Lock } from "react-coolicons";
import { Upload, Zap } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.jpeg";
import slIcon from "@/assets/sl-app-icon.png";
import slTicket from "@/assets/sl-app-ticket.png";

// SL-inspirerade färger (mörkblå + cyan accent) kombinerat med Klimavas gröna
const SL_NAVY = "#20252c";
const SL_BLUE = "#0089cf";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const SLPartnership = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          {/* Background gradient + subtle grid */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(1000px 500px at 80% -10%, ${SL_BLUE}22, transparent 60%), radial-gradient(800px 400px at 0% 10%, hsl(var(--primary) / 0.18), transparent 60%), linear-gradient(180deg, #fff 0%, #f6f9fc 100%)`,
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(32,37,44,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,37,44,0.06) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
            }}
          />

          <div className="container mx-auto px-6 pt-28 md:pt-36 pb-20 md:pb-28">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-7"
                style={{ background: `${SL_BLUE}15`, color: SL_NAVY }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: SL_BLUE }}
                />
                {t("Nytt samarbete", "New partnership")}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]"
                style={{ color: SL_NAVY }}
              >
                KLIMAVA <span style={{ color: SL_BLUE }}>×</span> SL
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl md:text-2xl font-medium mb-5"
                style={{ color: SL_NAVY }}
              >
                {t("Belöning för klimatsmart resande.", "Rewards for climate-smart travel.")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                {t(
                  "Vi är otroligt glada över att tillsammans med SL göra det enklare och mer motiverande att resa hållbart i vardagen.",
                  "We are incredibly proud to work with SL to make it easier and more motivating to travel sustainably every day."
                )}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <Button
                  size="xl"
                  className="rounded-full text-white hover:opacity-90 px-8 shadow-lg"
                  style={{ background: SL_NAVY }}
                  asChild
                >
                  <a href="#sa-funkar-det">
                    {t("Läs hur det fungerar", "See how it works")}
                    <ArrowRightMd className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>

              {/* App mockups */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-16 md:mt-20 flex items-end justify-center gap-4 md:gap-10"
              >
                <div className="relative w-40 md:w-56 -rotate-6 origin-bottom-right">
                  <div className="absolute -inset-6 rounded-[3rem] blur-2xl opacity-40" style={{ background: SL_BLUE }} />
                  <div className="relative rounded-[2rem] p-1.5 shadow-elevated" style={{ background: SL_NAVY }}>
                    <img src={slTicket} alt="SL app" className="rounded-[1.7rem] w-full" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-md" style={{ background: SL_BLUE }}>
                    SL
                  </div>
                </div>
                <div className="relative w-48 md:w-64 rotate-3 origin-bottom-left">
                  <div className="absolute -inset-6 rounded-[3rem] blur-2xl opacity-50 bg-primary" />
                  <div className="relative bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                    <img src={appDashboard} alt="Klimava app" className="rounded-[1.7rem] w-full" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold gradient-bg text-primary-foreground shadow-md">
                    KLIMAVA
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 – Om SL-appen */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
              <motion.div {...fadeUp}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <img src={slIcon} alt="SL" className="w-10 h-10 rounded-xl shadow-soft" />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: SL_BLUE }}>
                    SL-appen
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: SL_NAVY }}>
                  {t("Så fungerar SL-appen", "How the SL app works")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t(
                    "SL-appen är Stockholms officiella app för kollektivtrafik där användare kan planera resor, köpa biljetter och resa helt digitalt.",
                    "The SL app is Stockholm's official app for public transport — plan trips, buy tickets and travel entirely digitally."
                  )}
                </p>

                <ul className="space-y-3">
                  {[
                    t("Digital biljett", "Digital ticket"),
                    t("Snabb och smidig resa", "Fast and seamless travel"),
                    t("Miljontals användare i Stockholm", "Millions of users in Stockholm"),
                    t("Helt mobilbaserat", "Entirely mobile-based"),
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${SL_BLUE}18`, color: SL_BLUE }}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-base font-medium" style={{ color: SL_NAVY }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
                <div
                  className="absolute -inset-10 rounded-[3rem] blur-3xl opacity-30 -z-10"
                  style={{ background: `linear-gradient(135deg, ${SL_BLUE}, ${SL_NAVY})` }}
                />
                <div className="relative mx-auto w-64 md:w-72 rounded-[2.2rem] p-1.5 shadow-elevated" style={{ background: SL_NAVY }}>
                  <img src={slTicket} alt={t("SL biljett", "SL ticket")} className="rounded-[1.9rem] w-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 – Klimava + SL stats */}
        <section className="py-24 md:py-32" style={{ background: "#f6f9fc" }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5" style={{ color: SL_NAVY }}>
                {t(
                  <>Klimava + SL = <span className="gradient-text">Belöning för klimatsmart resande</span></>,
                  <>Klimava + SL = <span className="gradient-text">Rewards for climate-smart travel</span></>
                )}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  "Varje resa med tunnelbana, buss, pendeltåg eller båt är ett aktivt klimatval. Nu kan användare dessutom bli belönade för det.",
                  "Every trip by metro, bus, commuter train or boat is an active climate choice. Now users get rewarded for it too."
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: <Leaf className="w-6 h-6" />, value: "+30", label: t("Klimava-poäng / resa", "Klimava points / trip"), accent: "primary" },
                { icon: <Phone className="w-6 h-6" />, value: "100%", label: t("Digitalt", "Digital"), accent: "sl" },
                { icon: <Lock className="w-6 h-6" />, value: t("Lokal", "Local"), label: t("Bildanalys på telefonen", "Image analysis on device"), accent: "sl" },
                { icon: <Lightning className="w-6 h-6" />, value: "0", label: t("Servrar används", "Servers used"), accent: "primary" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={
                      stat.accent === "sl"
                        ? { background: `${SL_BLUE}18`, color: SL_BLUE }
                        : { background: "hsl(var(--primary) / 0.18)", color: "hsl(var(--secondary))" }
                    }
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1.5" style={{ color: SL_NAVY }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 – Så fungerar det (timeline) */}
        <section id="sa-funkar-det" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: SL_BLUE }}>
                {t("Steg för steg", "Step by step")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4" style={{ color: SL_NAVY }}>
                {t("Så fungerar det", "How it works")}
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div
                aria-hidden
                className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
                style={{ background: `linear-gradient(180deg, ${SL_BLUE}, hsl(var(--primary)))` }}
              />

              <div className="space-y-8 md:space-y-12">
                {[
                  { icon: <Phone className="w-5 h-5" />, sv: "Köp biljett i SL-appen", en: "Buy a ticket in the SL app" },
                  { icon: <Camera className="w-5 h-5" />, sv: "Ta screenshot på QR-koden", en: "Take a screenshot of the QR code" },
                  { icon: <Phone className="w-5 h-5" />, sv: "Öppna Klimava och välj Onlinekvitto", en: "Open Klimava and choose Online receipt" },
                  { icon: <Upload className="w-5 h-5" />, sv: "Ladda upp bilden", en: "Upload the image" },
                  { icon: <Check className="w-5 h-5" />, sv: "Klimava verifierar resan", en: "Klimava verifies the trip" },
                  { icon: <Leaf className="w-5 h-5" />, sv: "Få +30 poäng", en: "Get +30 points" },
                ].map((step, i) => {
                  const left = i % 2 === 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className={`relative flex md:items-center gap-5 md:gap-0 ${
                        left ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="md:w-1/2 md:px-8 pl-14 md:pl-8">
                        <div className={`bg-white rounded-2xl p-5 md:p-6 shadow-soft border border-border/60 hover:shadow-card transition-shadow ${left ? "md:text-right" : "md:text-left"}`}>
                          <div className="text-xs font-semibold mb-1.5" style={{ color: SL_BLUE }}>
                            {t("Steg", "Step")} {i + 1}
                          </div>
                          <div className="text-lg font-semibold" style={{ color: SL_NAVY }}>
                            {t(step.sv, step.en)}
                          </div>
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-5 md:top-1/2 md:-translate-y-1/2">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white"
                          style={{ background: i < 3 ? SL_NAVY : "hsl(var(--secondary))" }}
                        >
                          {step.icon}
                        </div>
                      </div>

                      <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              {...fadeUp}
              className="mt-14 p-5 md:p-6 rounded-2xl flex items-start gap-4 max-w-2xl mx-auto"
              style={{ background: `${SL_BLUE}10`, border: `1px solid ${SL_BLUE}30` }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white" style={{ background: SL_NAVY }}>
                <Lock className="w-4 h-4" />
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: SL_NAVY }}>
                <span className="font-semibold">{t("Privat by design. ", "Private by design. ")}</span>
                {t(
                  "All bildanalys sker direkt på användarens telefon. Ingen data skickas till externa servrar.",
                  "All image analysis happens directly on the user's phone. No data is sent to external servers."
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 – Varför det spelar roll */}
        <section className="py-24 md:py-32" style={{ background: SL_NAVY }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div {...fadeUp}>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: SL_BLUE }}>
                  {t("Klimatpåverkan", "Climate impact")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6 text-white">
                  {t("Varför kollektivtrafik spelar roll", "Why public transport matters")}
                </h2>
                <p className="text-base md:text-lg text-white/75 leading-relaxed">
                  {t(
                    "Kollektivtrafik är ett av de mest effektiva sätten att minska sitt klimatavtryck i vardagen. Genom samarbetet med SL vill Klimava göra hållbara resor mer synliga, mätbara och belönande.",
                    "Public transport is one of the most effective ways to reduce your everyday climate footprint. Through our partnership with SL, Klimava makes sustainable travel more visible, measurable and rewarding."
                  )}
                </p>
              </motion.div>

              <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="grid grid-cols-2 gap-4">
                {[
                  { value: "-95%", label: t("CO₂ vs bil per personkm", "CO₂ vs car per person-km"), big: true },
                  { value: "≈2.4 kg", label: t("CO₂ sparas per bilresa", "CO₂ saved per car trip") },
                  { value: "1M+", label: t("Resor varje dag", "Trips every day") },
                  { value: "30+", label: t("Poäng per resa", "Points per trip") },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-3xl p-6 backdrop-blur-sm border border-white/10 ${s.big ? "col-span-2" : ""}`}
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div className={`font-bold text-white mb-1.5 ${s.big ? "text-5xl md:text-6xl" : "text-3xl"}`}>
                      {s.value}
                    </div>
                    <div className="text-sm text-white/60">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 md:py-36 bg-white relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(600px 300px at 50% 0%, ${SL_BLUE}18, transparent 70%), radial-gradient(600px 300px at 50% 100%, hsl(var(--primary) / 0.18), transparent 70%)`,
            }}
          />
          <motion.div {...fadeUp} className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight" style={{ color: SL_NAVY }}>
              {t("Framtidens hållbara resande börjar här.", "The future of sustainable travel starts here.")}
            </h2>
            <Button
              size="xl"
              className="rounded-full text-white hover:opacity-90 px-10 shadow-lg"
              style={{ background: SL_NAVY }}
              asChild
            >
              <a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer">
                <Apple className="w-5 h-5" />
                {t("Ladda ner Klimava", "Download Klimava")}
              </a>
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SLPartnership;
