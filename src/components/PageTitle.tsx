import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITLES: Record<string, string> = {
  "/": "Klimava – Hållbara val som belönar dig",
  "/om-appen": "Om appen – Klimava",
  "/support": "Support och vanliga frågor – Klimava",
  "/partners": "Våra partners – Klimava",
  "/team": "Möt teamet – Klimava",
  "/kontakt": "Kontakta oss – Klimava",
  "/integritetspolicy": "Integritetspolicy – Klimava",
  "/anvandarvillkor": "Användarvillkor – Klimava",
  "/atervinning": "Återvinning – Klimava",
  "/utmaningar": "Utmaningar – Klimava",
  "/sl-samarbete": "SL-samarbete – Klimava",
  "/invite": "Bjud in vänner – Klimava",
};

const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] ?? "Sidan hittades inte – Klimava";
  }, [pathname]);

  return null;
};

export default PageTitle;
