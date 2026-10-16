import type { SVGProps } from "react";

/**
 * Filled bus icon matching the react-coolicons visual style
 * (filled shapes, rounded corners, consistent weight) so it renders
 * with the same sharp, even edges as the neighbouring feature icons.
 * Replaces the stroke-based lucide Bus, whose thinner strokes looked
 * jagged next to the filled coolicons at small sizes.
 */
export const BusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* Body */}
    <path d="M5 3.5A2.5 2.5 0 0 1 7.5 2h9A2.5 2.5 0 0 1 19 4.5V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3.5zM7 5v4.5h10V5H7z" />
    {/* Windows cutout via evenodd would complicate; use simple shapes */}
    {/* Side mirrors */}
    <rect x="3" y="6" width="1.6" height="3.4" rx="0.8" />
    <rect x="19.4" y="6" width="1.6" height="3.4" rx="0.8" />
    {/* Headlights */}
    <circle cx="8" cy="13.4" r="1.3" fill="hsl(var(--card))" />
    <circle cx="16" cy="13.4" r="1.3" fill="hsl(var(--card))" />
    {/* Wheels */}
    <rect x="6.5" y="17" width="2.6" height="4" rx="1.3" />
    <rect x="14.9" y="17" width="2.6" height="4" rx="1.3" />
  </svg>
);
