import dantePhoto from "@/assets/dante-new.png";
import liamPhoto from "@/assets/liam.png";
import christianPhoto from "@/assets/christian.png";
import linusPhoto from "@/assets/linus-new.png";

export interface Founder {
  name: string;
  role: { sv: string; en: string };
  photo: string;
  objectPosition: string;
}

export const founders: Founder[] = [
  {
    name: "Dante Rudinsson",
    role: { sv: "Verkställande Direktör", en: "CEO" },
    photo: dantePhoto,
    objectPosition: "center 20%",
  },
  {
    name: "Liam Molin",
    role: { sv: "Produktutvecklare", en: "Product Developer" },
    photo: liamPhoto,
    objectPosition: "center 20%",
  },
  {
    name: "Christian Nordwall",
    role: { sv: "Marknadsföringsansvarig", en: "Marketing Manager" },
    photo: christianPhoto,
    objectPosition: "center 20%",
  },
  {
    name: "Linus Emmoth",
    role: { sv: "Ekonomiansvarig", en: "Finance Manager" },
    photo: linusPhoto,
    objectPosition: "center 15%",
  },
];
