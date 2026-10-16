import type { Variants, Transition } from "framer-motion";

/** Start reveals just before content enters (both directions) so the short fade is seen but never leaves gaps; play once. */
export const revealViewport = { once: true, margin: "80px 0px 80px 0px", amount: "some" } as const;

const ease = [0.22, 1, 0.36, 1] as const;

/** Shared scroll-reveal: fade up ahead of view, once. Spread as {...fadeUp}. */
export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: revealViewport,
  transition: { duration: 0.42, ease },
} as const;

/** Smaller-offset variant for tighter grids/cards. */
export const fadeUpSm = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: revealViewport,
  transition: { duration: 0.38, ease },
} as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease } },
};

/** Spring hover-lift used on phone mockups / cards. */
export const cardHoverSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 18,
};

export const cardHover = {
  whileHover: { y: -10, scale: 1.03 },
  transition: cardHoverSpring,
} as const;
