import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TITLES: Record<string, string> = {
  "/": "Klimava – Hållbara val som belönar dig",
  "/om-appen": "Om appen – Klimava",
  "/support": "Support och vanliga frågor – Klimava",
  "/partners": "Våra partners – Klimava",
  "/team": "Möt teamet – Klimava",
  "/klimatpaverkan": "Delta i klimatutmaningar, gör hållbara vardagsval och följ din klimatpåverkan med Klimava. Samla poäng och lös in belöningar.",
  "/kollektivtrafik": "Registrera din SL-biljett i Klimava och få poäng enligt biljettens poängvillkor. Använd poängen till belöningar i appen.",
  "/kontakt": "Kontakta oss – Klimava",
  "/integritetspolicy": "Integritetspolicy – Klimava",
  "/anvandarvillkor": "Användarvillkor – Klimava",
  "/atervinning": "Återvinning – Klimava",
  "/klimatpaverkan": "Klimatpåverkan – Klimava",
  "/kollektivtrafik": "Kollektivtrafik – Klimava",
  "/utmaningar": "Utmaningar – Klimava",
  "/sl-samarbete": "SL-samarbete – Klimava",
  "/invite": "Bjud in vänner – Klimava",
};

const DESCRIPTIONS: Record<string, string> = {
  "/": "Gör hållbara val med Klimava. Skanna kvitton och produkter, samla poäng för godkända aktiviteter och lös in belöningar.",
  "/om-appen": "Upptäck Klimavas funktioner: skanna kvitton och produkter, återvinn, delta i utmaningar och följ din klimatpåverkan.",
  "/partners": "Möt Klimavas partners och upptäck företagen bakom belöningarna samt vårt samarbete med SL för kollektivresor.",
  "/kontakt": "Kontakta Klimava. Välj användarsupport för frågor om appen eller företagskontakt för partnerskap och samarbeten.",
  "/support": "Få hjälp med Klimava och hitta svar om kvittoskanning, poäng, belöningar och ditt konto. Kontakta användarsupport vid behov.",
  "/team": "Möt teamet bakom Klimava: Linus, Dante, Christian och Liam. Lär känna grundarna och deras roller i företaget.",
  "/klimatpaverkan": "Delta i klimatutmaningar, gör hållbara vardagsval och följ din klimatpåverkan med Klimava. Samla poäng och lös in belöningar.",
  "/kollektivtrafik": "Registrera din SL-biljett i Klimava och få poäng enligt biljettens poängvillkor. Använd poängen till belöningar i appen.",
};

const PageTitle = () => {
  const { pathname } = useLocation();

  return (
    <Helmet>
      <title>{TITLES[pathname] ?? "Sidan hittades inte – Klimava"}</title>
      <meta name="description" content={DESCRIPTIONS[pathname] ?? DESCRIPTIONS["/"]} />
    </Helmet>
  );
};

export default PageTitle;
