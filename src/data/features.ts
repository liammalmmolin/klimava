import type { ComponentType, SVGProps } from "react";
import {
  Star,
  ShoppingBag01,
  MapPin,
  Star as TrophyStar,
  Users,
} from "react-coolicons";
import { CameraIcon as Camera, ChartBarIcon as ChartBarVertical01, GiftIcon as Gift } from "@/components/icons/StepIcons";
import { BusIcon } from "@/components/icons/BusIcon";

export interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: { sv: string; en: string };
  desc: { sv: string; en: string };
}

export const features: Feature[] = [
  {
    icon: ChartBarVertical01,
    title: { sv: "Samla poäng", en: "Earn points" },
    desc: {
      sv: "Varje klimatsmart val i vardagen – hållbara köp, återvinning, kollektivtrafik, second hand och utmaningar – ger poäng automatiskt när du registrerar det i appen.",
      en: "Every climate-smart choice in everyday life – sustainable purchases, recycling, public transport, second-hand and challenges – earns points automatically when you register it in the app.",
    },
  },
  {
    icon: Camera,
    title: { sv: "Fota kvittot", en: "Scan your receipt" },
    desc: {
      sv: "Ta en bild på matkvittot och skanna sedan streckkoderna på det du vill registrera. Klimava matchar produkterna mot kvittot och hittar hållbara val – godkända produkter ger poäng enligt appens villkor.",
      en: "Take a photo of your grocery receipt, then scan the barcodes of the items you want to register. Klimava matches the products against the receipt and finds sustainable choices – approved products earn points according to the app's terms.",
    },
  },
  {
    icon: MapPin,
    title: { sv: "Återvinningsscanner", en: "Recycling scanner" },
    desc: {
      sv: "GPS känner av när du är inom cirka 100 meter från en återvinningsstation och låser upp scannern, så du kan registrera det du återvinner på plats.",
      en: "GPS detects when you're within about 100 meters of a recycling station and unlocks the scanner, so you can register what you recycle on the spot.",
    },
  },
  {
    icon: ShoppingBag01,
    title: { sv: "Second hand-bonus", en: "Second-hand bonus" },
    desc: {
      sv: "Handlat begagnat? Ladda upp kvittot från köpet och få extra poäng utöver dina vanliga aktiviteter.",
      en: "Bought something second-hand? Upload the receipt and earn extra points on top of your regular activities.",
    },
  },
  {
    icon: BusIcon,
    title: { sv: "Kollektivtrafik med SL", en: "Public transport with SL" },
    desc: {
      sv: "Ladda upp kvittot på din SL-biljett och få poäng för varje hållbar resa du gör med tunnelbana, buss eller pendeltåg.",
      en: "Upload the receipt for your SL ticket and earn points for every sustainable trip you take by metro, bus or commuter train.",
    },
  },
  {
    icon: TrophyStar,
    title: { sv: "Klimatutmaningar", en: "Climate challenges" },
    desc: {
      sv: "Nya utmaningar varje vecka – allt från att handla ekologiskt till att åka kollektivt – ger bonuspoäng utöver det vanliga.",
      en: "New challenges every week – from buying organic to using public transport – earn bonus points on top of the usual.",
    },
  },
  {
    icon: Users,
    title: { sv: "Vänner & topplistor", en: "Friends & leaderboards" },
    desc: {
      sv: "Tävla mot vänner och familj på topplistor. Se vem som samlar flest poäng och motivera varandra till mer hållbara val.",
      en: "Compete against friends and family on leaderboards. See who earns the most points and motivate each other to make more sustainable choices.",
    },
  },
  {
    icon: Gift,
    title: { sv: "Lös in belöningar", en: "Redeem rewards" },
    desc: {
      sv: "Byt poäng mot rabatter, fri frakt, gratis månader och produkter hos våra samarbetspartners – direkt i appen.",
      en: "Exchange points for discounts, free shipping, free months and products from our partners – directly in the app.",
    },
  },
  {
    icon: Star,
    title: { sv: "Se din klimatpåverkan", en: "See your climate impact" },
    desc: {
      sv: "Följ hur mycket CO₂ du sparar genom dina val, samlat i en tydlig överblick över tid.",
      en: "Track how much CO₂ you save through your choices, gathered in a clear overview over time.",
    },
  },
];
