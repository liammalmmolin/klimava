import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import slIcon from "@/assets/sl-app-icon.png";
import slTicket from "@/assets/sl-app-ticket.png";

const SLPartnership = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground"
              onClick={() => navigate(-1)}
            >
              ← {t("Tillbaka", "Back")}
            </Button>

            <div className="flex items-center gap-5 mb-8">
              <img
                src={slIcon}
                alt="SL app icon"
                className="w-20 h-20 rounded-2xl shadow-elevated"
              />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t("Nytt samarbete", "New partnership")}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t(
                <>Vi är otroligt glada att kunna säga att vi <span className="gradient-text">samarbetar med SL</span></>,
                <>We are incredibly proud to announce our <span className="gradient-text">partnership with SL</span></>
              )}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {t(
                "Tillsammans med SL tar vi ett stort steg för att göra det enklare – och mer lönsamt – att resa klimatsmart i vardagen.",
                "Together with SL, we are taking a major step to make it easier – and more rewarding – to travel climate-smart every day."
              )}
            </p>

            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                {t("Så funkar SL-appen", "How the SL app works")}
              </h2>
              <div className="grid md:grid-cols-[1fr_220px] gap-8 items-start">
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>{t(
                    "SL-appen är Stockholms officiella app för kollektivtrafik. I appen kan du planera din resa, köpa enkelbiljetter eller periodbiljetter och ladda ditt SL-kort – direkt i mobilen.",
                    "The SL app is Stockholm's official app for public transport. In the app you can plan your trip, buy single tickets or period tickets, and top up your SL card – all from your phone."
                  )}</p>
                  <p>{t(
                    "När du köper en biljett genereras en QR-kod som fungerar som ditt digitala kvitto. Den scannas i spärren när du går ombord på buss, tunnelbana, pendeltåg eller båt.",
                    "When you buy a ticket, a QR code is generated which acts as your digital receipt. You scan it at the gates when boarding a bus, metro, commuter train or boat."
                  )}</p>
                  <p>{t(
                    "Allt sker digitalt – inget papper, inga plastkort och ingen krångel. Det är snabbt, smidigt och redan en del av miljontals stockholmares vardag.",
                    "Everything happens digitally – no paper, no plastic cards and no hassle. It is fast, smooth and already part of millions of Stockholmers' daily lives."
                  )}</p>
                </div>
                <img
                  src={slTicket}
                  alt={t("SL appens biljettkvitto", "SL app ticket receipt")}
                  className="w-full rounded-2xl shadow-elevated"
                />
              </div>
            </section>

            <section className="mb-14 p-8 md:p-10 rounded-3xl gradient-bg text-primary-foreground shadow-elevated">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t(
                  "Klimava + SL = belöning för klimatsmart resande",
                  "Klimava + SL = rewards for climate-smart travel"
                )}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-95">
                {t(
                  "Vi delar samma vision som SL: att uppmuntra fler att välja kollektivtrafiken framför bilen. Varje resa med tunnelbana, buss, pendeltåg eller båt är ett aktivt klimatval – och nu ska det också löna sig.",
                  "We share SL's vision: to encourage more people to choose public transport over the car. Every trip by metro, bus, commuter train or boat is an active climate choice – and now it should pay off too."
                )}
              </p>
            </section>

            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                {t("Så funkar det i Klimava", "How it works in Klimava")}
              </h2>
              <ol className="space-y-5">
                {[
                  {
                    sv: "Köp din biljett som vanligt i SL-appen och påbörja din resa.",
                    en: "Buy your ticket as usual in the SL app and start your trip.",
                  },
                  {
                    sv: "Ta en skärmdump av ditt biljettkvitto (QR-koden) i SL-appen.",
                    en: "Take a screenshot of your ticket receipt (the QR code) in the SL app.",
                  },
                  {
                    sv: "Öppna Klimava, gå till Online kvitto och välj SL bland våra partnerappar.",
                    en: "Open Klimava, go to Online receipt and select SL from our partner apps.",
                  },
                  {
                    sv: "Ladda upp skärmdumpen. Bilden analyseras lokalt på din telefon – inget skickas till en server.",
                    en: "Upload the screenshot. The image is analyzed locally on your phone – nothing is sent to a server.",
                  },
                  {
                    sv: "Klimava bekräftar kvittot och belönar dig med +30 poäng för din kollektivtrafikresa.",
                    en: "Klimava confirms the receipt and rewards you with +30 points for your public transport trip.",
                  },
                  {
                    sv: "Varje skärmdump kan bara användas en gång – så ditt klimatsmarta val räknas alltid på riktigt.",
                    en: "Each screenshot can only be used once – so your climate-smart choice always counts for real.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full gradient-bg text-primary-foreground font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground text-base leading-relaxed pt-1">
                      {t(step.sv, step.en)}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                {t("Varför det spelar roll", "Why it matters")}
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>{t(
                  "Kollektivtrafik är ett av de mest effektiva sätten att minska sitt klimatavtryck i vardagen. En enda tunnelbaneresa istället för bilresa kan spara flera kilo CO₂.",
                  "Public transport is one of the most effective ways to reduce your everyday climate footprint. A single metro trip instead of a car trip can save several kilos of CO₂."
                )}</p>
                <p>{t(
                  "Genom samarbetet med SL kan vi nu lyfta fram, mäta och belöna det valet – och göra det till en självklar del av en hållbar livsstil.",
                  "Through our partnership with SL we can now highlight, measure and reward that choice – and make it a natural part of a sustainable lifestyle."
                )}</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SLPartnership;
