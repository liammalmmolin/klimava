import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const TITLES: Record<string, { sv: string; en: string }> = {
  "/": { sv: "Klimava – Hållbara val som belönar dig", en: "Klimava – Sustainable choices that reward you" },
  "/om-appen": { sv: "Om appen – Klimava", en: "About the app – Klimava" },
  "/support": { sv: "Support och vanliga frågor – Klimava", en: "Support and FAQ – Klimava" },
  "/partners": { sv: "Våra partners – Klimava", en: "Our partners – Klimava" },
  "/team": { sv: "Möt teamet – Klimava", en: "Meet the team – Klimava" },
  "/klimatpaverkan": { sv: "Klimatpåverkan – Klimava", en: "Climate impact – Klimava" },
  "/kollektivtrafik": { sv: "Kollektivtrafik – Klimava", en: "Public transport – Klimava" },
  "/kontakt": { sv: "Kontakta oss – Klimava", en: "Contact us – Klimava" },
  "/integritetspolicy": { sv: "Integritetspolicy – Klimava", en: "Privacy policy – Klimava" },
  "/anvandarvillkor": { sv: "Användarvillkor – Klimava", en: "Terms of use – Klimava" },
  "/atervinning": { sv: "Återvinning – Klimava", en: "Recycling – Klimava" },
  "/utmaningar": { sv: "Utmaningar – Klimava", en: "Challenges – Klimava" },
  "/sl-samarbete": { sv: "SL-samarbete – Klimava", en: "SL partnership – Klimava" },
  "/invite": { sv: "Bjud in vänner – Klimava", en: "Invite friends – Klimava" },
};

const DESCRIPTIONS: Record<string, { sv: string; en: string }> = {
  "/": {
    sv: "Gör hållbara val med Klimava. Skanna kvitton och produkter, samla poäng för godkända aktiviteter och lös in belöningar.",
    en: "Make sustainable choices with Klimava. Scan receipts and products, earn points for approved activities and redeem rewards.",
  },
  "/om-appen": {
    sv: "Upptäck Klimavas funktioner: skanna kvitton och produkter, återvinn, delta i utmaningar och följ din klimatpåverkan.",
    en: "Discover Klimava's features: scan receipts and products, recycle, join challenges and track your climate impact.",
  },
  "/partners": {
    sv: "Möt Klimavas partners och upptäck företagen bakom belöningarna samt vårt samarbete med SL för kollektivresor.",
    en: "Meet Klimava's partners and discover the companies behind the rewards, plus our partnership with SL for public transport.",
  },
  "/kontakt": {
    sv: "Kontakta Klimava. Välj användarsupport för frågor om appen eller företagskontakt för partnerskap och samarbeten.",
    en: "Contact Klimava. Choose user support for questions about the app or business contact for partnerships and collaborations.",
  },
  "/support": {
    sv: "Få hjälp med Klimava och hitta svar om kvittoskanning, poäng, belöningar och ditt konto. Kontakta användarsupport vid behov.",
    en: "Get help with Klimava and find answers about receipt scanning, points, rewards and your account. Contact user support if needed.",
  },
  "/team": {
    sv: "Möt teamet bakom Klimava: Linus, Dante, Christian och Liam. Lär känna grundarna och deras roller i företaget.",
    en: "Meet the team behind Klimava: Linus, Dante, Christian and Liam. Get to know the founders and their roles in the company.",
  },
  "/klimatpaverkan": {
    sv: "Delta i klimatutmaningar, gör hållbara vardagsval och följ din klimatpåverkan med Klimava. Samla poäng och lös in belöningar.",
    en: "Join climate challenges, make sustainable everyday choices and track your climate impact with Klimava. Earn points and redeem rewards.",
  },
  "/kollektivtrafik": {
    sv: "Registrera din SL-biljett i Klimava och få poäng enligt biljettens poängvillkor. Använd poängen till belöningar i appen.",
    en: "Register your SL ticket in Klimava and earn points according to the ticket's terms. Use the points for rewards in the app.",
  },
};

const PageTitle = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  return (
    <Helmet>
      <title>{TITLES[pathname]?.[language] ?? (language === "sv" ? "Sidan hittades inte – Klimava" : "Page not found – Klimava")}</title>
      <meta name="description" content={(DESCRIPTIONS[pathname] ?? DESCRIPTIONS["/"])[language]} />
    </Helmet>
  );
};

export default PageTitle;
