import klimavaLogo from "@/assets/klimava-logo.jpeg";
import { Mail } from "@/components/icons";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden rounded-b-[1.75rem] bg-foreground px-6 py-16 text-background md:rounded-b-[2.25rem] md:px-14 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={klimavaLogo} width={36} height={36} loading="lazy" decoding="async" alt="Klimava" className="h-9 w-9 rounded-xl" />
              <span className="text-xl font-bold">Klimava</span>
            </div>
            <p className="text-background/75 max-w-md leading-relaxed mb-6 text-sm">
              {t(
                "Klimava gör hållbara val enkla, roliga och motiverande. Belöning istället för pekpinnar.",
                "Klimava makes sustainable choices easy, fun and motivating. Rewards instead of finger-wagging."
              )}
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:klimavauf@gmail.com" className="flex items-center gap-2 text-background/75 hover:text-background transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>klimavauf@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/klimava.uf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/75 hover:text-background transition-colors text-sm">
                <Instagram className="w-4 h-4" />
                <span>@klimava.uf</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("Appen", "The App")}</h4>
            <ul className="space-y-3 text-background/75 text-sm">
              <li><Link to="/om-appen" className="hover:text-background transition-colors">{t("Om appen", "About the app")}</Link></li>
              <li><Link to="/support" className="hover:text-background transition-colors">{t("Support", "Support")}</Link></li>
              <li><Link to="/partners" className="hover:text-background transition-colors">{t("Partners", "Partners")}</Link></li>
              <li><a href="https://apps.apple.com/se/app/klimava/id6760266069" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">{t("Ladda ner", "Download")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("Företag", "Company")}</h4>
            <ul className="space-y-3 text-background/75 text-sm">
              <li><Link to="/team" className="hover:text-background transition-colors">Team</Link></li>
              <li><Link to="/kontakt" className="hover:text-background transition-colors">{t("Kontakt", "Contact")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 mb-6">
          <p className="text-center text-background/70 text-xs mb-2">{t("Grundare", "Founders")}</p>
          <p className="text-center text-background/70 font-medium text-sm">
            Dante Rudinsson · Liam Molin · Christian Nordwall · Linus Emmoth
          </p>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-background/70 text-xs">{t(`© ${new Date().getFullYear()} Klimava. Alla rättigheter förbehållna.`, `© ${new Date().getFullYear()} Klimava. All rights reserved.`)}</span>
          <div className="flex items-center gap-6 text-xs text-background/70">
            <Link to="/integritetspolicy" className="hover:text-background transition-colors">{t("Integritetspolicy", "Privacy Policy")}</Link>
            <Link to="/anvandarvillkor" className="hover:text-background transition-colors">{t("Användarvillkor", "Terms of Service")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
