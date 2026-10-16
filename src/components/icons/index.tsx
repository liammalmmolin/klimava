import type { SVGProps } from "react";
import { CameraIcon, GiftIcon, ChartBarIcon, ScanIcon, strokeBase } from "./StepIcons";

/**
 * Shared line icons for the whole site. Icons whose react-coolicons source
 * is a single clean path are re-exported; those drawn as overlapping open
 * sub-paths or redundant squircle points (Lock, Leaf, ShoppingBag, Mail) are
 * redrawn as closed shapes with the same 2px round stroke.
 */
export {
  ArrowRightMd, Check, Phone, HamburgerLg, CloseLg, MapPin, Star, Play, Users,
} from "react-coolicons";
export { CameraIcon as Camera, GiftIcon as Gift, ChartBarIcon as ChartBarVertical01, ScanIcon };

type P = SVGProps<SVGSVGElement>;

export const Lock = (p: P) => (
  <svg {...strokeBase(p)}>
    <rect x="4" y="9" width="16" height="12" rx="3" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </svg>
);

export const Leaf = (p: P) => (
  <svg {...strokeBase(p)}>
    <path d="M6.8 17.1C4 10 8.2 4.4 18.8 5.1 19.6 15.7 14 20 6.8 17.1Z" />
    <path d="M5 19 11 13" />
  </svg>
);

export const ShoppingBag01 = (p: P) => (
  <svg {...strokeBase(p)}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M9 8a3 3 0 0 0 6 0" />
  </svg>
);

export const Mail = (p: P) => (
  <svg {...strokeBase(p)}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
