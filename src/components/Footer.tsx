import klimavaLogo from "@/assets/klimava-logo.jpeg";
import { Mail } from "react-coolicons";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={klimavaLogo} alt="Klimava" className="h-9 w-9 rounded-xl" />
              <span className="text-xl font-bold">Klimava</span>
            </div>
            <p className="text-background/60 max-w-md leading-relaxed mb-6 text-sm">
              Klimava gör hållbara val enkla, roliga och motiverande. Belöning istället för pekpinnar.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:klimavauf@gmail.com" className="flex items-center gap-2 text-background/60 hover:text-background transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>klimavauf@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/klimava.uf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/60 hover:text-background transition-colors text-sm">
                <Instagram className="w-4 h-4" />
                <span>@klimava.uf</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Appen</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li><a href="/#how-it-works" className="hover:text-background transition-colors">Så funkar det</a></li>
              <li><a href="#download" className="hover:text-background transition-colors">Ladda ner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Företag</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li><a href="mailto:klimavauf@gmail.com" className="hover:text-background transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 mb-6">
          <p className="text-center text-background/40 text-xs mb-2">Grundare</p>
          <p className="text-center text-background/70 font-medium text-sm">
            Dante Rudinsson · Liam Molin · Christian Nordwall · Linus Emmoth
          </p>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-background/40 text-xs">© 2024 Klimava. Alla rättigheter förbehållna.</span>
          <div className="flex items-center gap-6 text-xs text-background/40">
            <a href="#" className="hover:text-background transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-background transition-colors">Användarvillkor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
