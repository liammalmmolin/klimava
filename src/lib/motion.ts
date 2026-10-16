import type { Variants, Transition } from "framer-motion";

/** Finish reveals before content arrives on screen; never replay on return. */
export const revealViewport = { once: true, margin: "2400px 0px", amount: "some" } as const;

/** Shared scroll-reveal: fade up ahead of view, once. Spread as {...fadeUp}. */
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: revealViewport,
  transition: { duration: 0.6 },
} as const;

/** Smaller-offset variant for tighter grids/cards. */
export const fadeUpSm = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: revealViewport,
  transition: { duration: 0.5 },
} as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
