import klimavaLogo from "@/assets/klimava-logo.jpeg";
import { Leaf, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={klimavaLogo}
                alt="Klimava"
                className="h-10 w-10 rounded-xl"
              />
              <span className="text-xl font-bold">Klimava</span>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              Klimava gör hållbara val enkla, roliga och motiverande. Belöning
              istället för pekpinnar – hållbarhet ska kännas vardaglig.
            </p>
            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:klimavauf@gmail.com" 
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>klimavauf@gmail.com</span>
              </a>
              <a 
                href="https://www.instagram.com/klimava.uf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@klimava.uf</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Appen</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="/#how-it-works" className="hover:text-background transition-colors">
                  Så funkar det
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-background transition-colors">
                  Funktioner
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-background transition-colors">
                  Ladda ner
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Företag</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="/grundare" className="hover:text-background transition-colors">
                  Om oss
                </a>
              </li>
              <li>
                <a href="mailto:klimavauf@gmail.com" className="hover:text-background transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-background/60 text-sm">
            <Leaf className="w-4 h-4" />
            <span>© 2024 Klimava. Alla rättigheter förbehållna.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">
              Integritetspolicy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Användarvillkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
