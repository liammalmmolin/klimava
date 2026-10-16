import type { SVGProps } from "react";

/**
 * Filled barcode icon matching the react-coolicons visual style
 * (filled shapes, rounded corners, consistent weight) so it renders
 * with the same sharp, even edges as the neighbouring icons.
 * Replaces the stroke-based lucide ScanBarcode, whose thinner strokes
 * looked jagged next to the filled coolicons at small sizes.
 */
export const BarcodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* Corner brackets */}
    <path d="M3 2h4v2H5v2H3V2zm18 0h-4v2h2v2h2V2zM3 22h4v-2H5v-2H3v4zm18 0h-4v-2h2v-2h2v4z" />
    {/* Bars */}
    <rect x="6" y="7" width="1.8" height="10" rx="0.9" />
    <rect x="9.2" y="7" width="1.2" height="10" rx="0.6" />
    <rect x="11.8" y="7" width="2" height="10" rx="1" />
    <rect x="15.2" y="7" width="1.2" height="10" rx="0.6" />
    <rect x="17.4" y="7" width="1.6" height="10" rx="0.8" />
  </svg>
);
