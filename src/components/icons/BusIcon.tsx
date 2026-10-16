import type { SVGProps } from "react";

/**
 * Filled bus icon matching the react-coolicons visual style
 * (filled shapes, rounded corners, consistent weight) so it renders
 * with the same sharp, even edges as the neighbouring feature icons.
 * Replaces the stroke-based lucide Bus, whose thinner strokes looked
 * jagged next to the filled coolicons at small sizes.
 * Windows and headlights are cut out with evenodd so the icon works
 * on any background color.
 */
export const BusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* Body with window band and headlights cut out */}
    <path
      fillRule="evenodd"
      d="M7.5 2A2.5 2.5 0 0 0 5 4.5V15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4.5A2.5 2.5 0 0 0 16.5 2h-9zM7 5h10v4.5H7V5zm1 6.7a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm8 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"
    />
    {/* Side mirrors */}
    <rect x="3" y="6" width="1.6" height="3.4" rx="0.8" />
    <rect x="19.4" y="6" width="1.6" height="3.4" rx="0.8" />
    {/* Wheels */}
    <rect x="6.5" y="17" width="2.6" height="4" rx="1.3" />
    <rect x="14.9" y="17" width="2.6" height="4" rx="1.3" />
  </svg>
);
