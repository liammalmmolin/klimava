import { motion } from "framer-motion";
import { Camera, ChartBarVertical01, Gift, Star, ShoppingBag01, MapPin, Star as TrophyStar, Users } from "react-coolicons";
import appOnboarding from "@/assets/app-onboarding.jpeg";
import appDashboard from "@/assets/app-dashboard.jpeg";
import appChallengesScreen from "@/assets/app-challenges.png";
import appScanner from "@/assets/app-scanner2.png";
import appPoangshop2 from "@/assets/app-poangshop2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorksSection = () => {
  const { t } = useLanguage();

  const allFeatures = [
    {
      icon: ChartBarVertical01,
      title: t("Samla poäng", "Earn points"),
      description: t(
        "Gör klimatsmarta val i vardagen och samla poäng genom att handla hållbart, återvinna, åka kollektivt, handla secondhand och delta i utmaningar.",
        "Make climate-smart choices in everyday life and earn points by shopping sustainably, recycling, using public transport, buying second-hand and joining challenges."
      ),
    },
    {
      icon: Gift,
      title: t("Lös in belöningar", "Redeem rewards"),
      description: t(
        "Byt dina poäng mot rabatter och erbjudanden hos våra samarbetspartners direkt i appen.",
        "Exchange your points for discounts and offers from our partners directly in the app."
      ),
    },
    {
      icon: Camera,
      title: t("Fota ditt kvitto", "Scan your receipt"),
      description: t(
        "Ta en bild på kvittot och scanna det med vår AI-drivna scanner. Den identifierar produkterna och ger dig poäng.",
        "Take a photo of your receipt and scan it with our AI-powered scanner. It identifies the products and awards you points."
      ),
    },
    {
      icon: MapPin,
      title: t("Återvinningsscanner", "Recycling scanner"),
      description: t(
        "Besök återvinningsstationer och scanna via GPS direkt i appen för att få poäng.",
        "Visit recycling stations and scan via GPS directly in the app to earn points."
      ),
    },
    {
      icon: ShoppingBag01,
      title: t("Second hand-bonus", "Second-hand bonus"),
      description: t(
        "Handlar du begagnat? Ladda upp ditt kvitto från second hand-köp och få extra poäng.",
        "Shopping second-hand? Upload your receipt and earn extra points."
      ),
    },
    {
      icon: TrophyStar,
      title: t("Klimatutmaningar", "Climate challenges"),
      description: t(
        "Delta i veckovisa klimatutmaningar och samla bonuspoäng genom enkla, klimatsmarta handlingar.",
        "Join weekly climate challenges and earn bonus points through simple, climate-smart actions."
      ),
    },
    {
      icon: Users,
      title: t("Vänner & topplistor", "Friends & leaderboards"),
      description: t(
        "Tävla mot vänner, klättra på topplistor och motivera varandra till mer hållbara val.",
        "Compete with friends, climb leaderboards and motivate each other to make more sustainable choices."
      ),
    },
    {
      icon: Star,
      title: t("Se din klimatpåverkan", "See your climate impact"),
      description: t(
        "Följ hur mycket CO₂ du sparar genom dina val och få en tydlig överblick.",
        "Track how much CO₂ you save through your choices and get a clear overview."
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {t("Så funkar", "How")} <span className="gradient-text">Klimava</span> {t("", "works")}
          </h2>
          <ul className="text-muted-foreground mt-8 max-w-2xl mx-auto text-base leading-relaxed text-left space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>{t(
                "Gör klimatsmarta val i vardagen och samla poäng genom att handla hållbart, återvinna, åka kollektivt, köpa second hand och delta i utmaningar.",
                "Make climate-smart choices in everyday life and earn points by shopping sustainably, recycling, using public transport, buying second-hand and joining challenges."
              )}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>{t(
                "Använd dina poäng för att få rabatter och exklusiva erbjudanden hos våra samarbetspartners – direkt i appen.",
                "Use your points to get discounts and exclusive offers from our partners – directly in the app."
              )}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>{t(
                "Följ din klimatpåverkan i appen – vi samlar din data och visar hur mycket koldioxid du sparar genom dina val.",
                "Track your climate impact in the app – we collect your data and show how much CO₂ you save through your choices."
              )}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>{t(
                "Tävla mot familj och vänner i topplistor – vem samlar flest Klimava-poäng och vem är mest hållbar?",
                "Compete against family and friends on leaderboards – who earns the most Klimava points and who is the most sustainable?"
              )}</span>
            </li>
          </ul>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-72 h-72 bg-primary/8 rounded-full blur-3xl -z-10" />
            <div className="relative flex items-end gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden sm:block w-36 md:w-44"
              >
                <div className="bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appDashboard} alt="Klimava dashboard" className="rounded-[1.75rem] w-full" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-48 md:w-56"
              >
                <div className="bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                  <img src={appOnboarding} alt="Klimava onboarding" className="rounded-[2rem] w-full" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden sm:block w-36 md:w-44"
              >
                <div className="bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                  <img src={appPoangshop2} alt={t("Klimava poängshop", "Klimava points shop")} className="rounded-[1.75rem] w-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t(
                <>Gör dina hållbara val till{" "}<span className="gradient-text">belöningar</span>.</>,
                <>Turn your sustainable choices into{" "}<span className="gradient-text">rewards</span>.</>
              )}
            </h3>
            <ul className="space-y-4 mt-8">
              {allFeatures.slice(0, 3).map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-lg">{feature.description}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="inline-block mt-8 text-primary font-semibold hover:underline text-lg"
            >
              {t("Skaffa Klimava →", "Get Klimava →")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-28"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t(
              <>Huvudfunktion – <span className="gradient-text">Så fungerar det</span></>,
              <>Main feature – <span className="gradient-text">How it works</span></>
            )}
          </h3>
          <div className="flex gap-4 justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-40 sm:w-48"
            >
              <div className="bg-foreground rounded-[2rem] p-1.5 shadow-elevated">
                <img src={appScanner} alt="Klimava scanner" className="rounded-[1.75rem] w-full" />
              </div>
            </motion.div>
          </div>
          <div className="space-y-6 text-muted-foreground text-base leading-relaxed max-w-3xl">
            <p>{t(
              "Efter att du har handlat i matbutiken öppnar du appen och tar en bild på ditt kvitto.",
              "After shopping at the grocery store, you open the app and take a photo of your receipt."
            )}</p>
            <p>{t(
              "Vår OCR-teknik läser av kvittot och identifierar vilka produkter du har köpt. Därefter scannar du streckkoden på de produkter du vill registrera direkt i appen.",
              "Our OCR technology reads the receipt and identifies which products you bought. Then you scan the barcode of the products you want to register directly in the app."
            )}</p>
            <p>{t(
              "Klimava matchar först de scannade produkterna med ditt kvitto för att bekräfta köpet, och jämför dem sedan med vår databas med över 320 000 livsmedelsprodukter.",
              "Klimava first matches the scanned products with your receipt to confirm the purchase, then compares them with our database of over 320,000 food products."
            )}</p>
            <p>{t(
              "Vi identifierar hållbara val – som ekologiska och miljömärkta produkter – och ger dig poäng för varje produkt som uppfyller våra kriterier.",
              "We identify sustainable choices – such as organic and eco-labelled products – and award you points for every product that meets our criteria."
            )}</p>
            <p>{t(
              "Ju fler klimatsmarta val du gör, desto fler poäng samlar du – som du sedan kan använda till belöningar i appen.",
              "The more climate-smart choices you make, the more points you earn – which you can then use for rewards in the app."
            )}</p>
          </div>
        </motion.div>

        {/* Återvinning section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-28"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t(
              <>Återvinning som <span className="gradient-text">belönar dig</span></>,
              <>Recycling that <span className="gradient-text">rewards you</span></>
            )}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-6">
            {t(
              "Klimava använder GPS för att känna av när du är nära en återvinningsstation. När du är på plats låses vår scanner upp så att du kan registrera det du återvinner och få poäng direkt.",
              "Klimava uses GPS to detect when you are near a recycling station. When you arrive, our scanner unlocks so you can register what you recycle and earn points instantly."
            )}
          </p>
          <Link
            to="/atervinning"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-soft hover:shadow-card hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {t("Läs mer", "Read more")} →
          </Link>
        </motion.div>

        {/* Utmaningar & topplistor section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t(
              <>Utmaningar & <span className="gradient-text">topplistor</span></>,
              <>Challenges & <span className="gradient-text">leaderboards</span></>
            )}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-6">
            {t(
              "Tävla mot vänner och familj i veckovisa klimatutmaningar. Samla bonuspoäng, klättra på topplistor och motivera varandra till mer hållbara val – varje dag.",
              "Compete against friends and family in weekly climate challenges. Earn bonus points, climb leaderboards and motivate each other to make more sustainable choices – every day."
            )}
          </p>
          <Link
            to="/utmaningar"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-soft hover:shadow-card hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {t("Läs mer", "Read more")} →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic max-w-3xl mx-auto mb-6">
            {t(
              "\"Vi tror på belöning istället för pekpinnar. Klimava ska göra det lätt och roligt att leva hållbart – varje dag, ett val i taget.\"",
              "\"We believe in rewards instead of finger-wagging. Klimava should make it easy and fun to live sustainably – every day, one choice at a time.\""
            )}
          </blockquote>
          <p className="text-muted-foreground font-medium">
            {t("— Grundarna av Klimava", "— The founders of Klimava")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
