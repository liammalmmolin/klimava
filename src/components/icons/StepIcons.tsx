import type { SVGProps } from "react";

/**
 * Clean stroke icons replacing react-coolicons Camera, Gift and
 * ChartBarVertical01. The originals are drawn as many overlapping open
 * sub-paths (tiny segments, duplicated round caps at T-junctions), which
 * anti-alias twice and leave small bumps at small sizes. These redraw the
 * same motifs as closed shapes with one 2px stroke and round joins.
 */
export const strokeBase = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  ...props,
});

export const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...strokeBase(props)}>
    <path d="M6 7h2.5l1.2-2.1A2 2 0 0 1 11.4 4h1.2a2 2 0 0 1 1.7.9L15.5 7H18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const GiftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...strokeBase(props)}>
    <rect x="3" y="8" width="18" height="12" rx="3" />
    <path d="M3 14h18M12 8v12" />
    <path d="M12 8c0-2.8-1.1-5-2.5-5S7 4.1 7 5.5 8.1 8 9.5 8H12Zm0 0c0-2.8 1.1-5 2.5-5S17 4.1 17 5.5 15.9 8 14.5 8H12Z" />
  </svg>
);

export const ChartBarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...strokeBase(props)}>
    <path d="M3 20v-7.5A1.5 1.5 0 0 1 4.5 11H9V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8h4.5A1.5 1.5 0 0 1 21 9.5V20H3Z" />
    <path d="M9 11v9M15 8v12" />
  </svg>
);

/** Scanner: corner brackets + bars, same 2px stroke as the other icons. */
export const ScanIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...strokeBase(props)}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="M7.5 8v8M10.5 8v8M13.5 8v8M16.5 8v8" />
  </svg>
);
