import slLogo from "@/assets/partners/sl.jpeg";
import traderaLogo from "@/assets/partners/tradera.png";
import plickLogo from "@/assets/partners/plick.jpeg";
import actLogo from "@/assets/partners/act.png";
import swedishNutraLogo from "@/assets/partners/swedish-nutra.jpeg";
import greatEarthLogo from "@/assets/partners/great-earth.jpeg";
import nAppLogo from "@/assets/partners/n-app.png";
import rekoshoppenLogo from "@/assets/partners/rekoshoppen.jpeg";
import storeEndaLogo from "@/assets/partners/store-enda.png";

export interface Partner {
  name: string;
  logo: string;
  desc: { sv: string; en: string };
}

export const partners: Partner[] = [
  { name: "SL", logo: slLogo, desc: { sv: "Stockholms kollektivtrafik", en: "Stockholm public transport" } },
  { name: "Tradera", logo: traderaLogo, desc: { sv: "Sveriges största marknadsplats för second hand", en: "Sweden's largest second-hand marketplace" } },
  { name: "Plick", logo: plickLogo, desc: { sv: "Köp och sälj begagnat mode", en: "Buy and sell second-hand fashion" } },
  { name: "ACT", logo: actLogo, desc: { sv: "Hållbara vardagsprodukter", en: "Sustainable everyday products" } },
  { name: "Swedish Nutra", logo: swedishNutraLogo, desc: { sv: "Naturliga kosttillskott", en: "Natural supplements" } },
  { name: "Great Earth", logo: greatEarthLogo, desc: { sv: "Hälsokost och vitaminer", en: "Health food and vitamins" } },
  { name: "Nextory", logo: nAppLogo, desc: { sv: "Ljudböcker och e-böcker", en: "Audiobooks and e-books" } },
  { name: "Rekoshoppen", logo: rekoshoppenLogo, desc: { sv: "Lokalproducerad mat direkt från bonden", en: "Locally produced food direct from the farmer" } },
  { name: "Store Enda", logo: storeEndaLogo, desc: { sv: "Hållbart mode och accessoarer", en: "Sustainable fashion and accessories" } },
];
