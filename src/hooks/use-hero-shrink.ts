import { useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

/**
 * Drives the subtle shrink on a pinned hero card as the next card climbs up and
 * covers it — see StackSection's `sticky` prop for the pin itself. The hero's
 * sticky box is one viewport tall plus a 40vh buffer, so the pin holds for 0.4*vh
 * of scroll before the next card starts sweeping over it; that climb then takes
 * another full viewport height. Driving the shrink off raw page scrollY (rather
 * than measuring the sticky element itself, which Framer Motion can't track
 * reliably once it's mid-stick) lets it track that reveal window exactly, so the
 * hero visibly gives ground at the same rate the next card advances over it.
 */
export const useHeroShrink = () => {
  const [viewportHeight, setViewportHeight] = useState(() => document.documentElement.clientHeight);
  useEffect(() => {
    let width = window.innerWidth;
    const updateHeight = () => {
      // Safari's toolbar changes height while scrolling; do not remap the
      // animation mid-swipe. Orientation/actual width changes still update it.
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      setViewportHeight(document.documentElement.clientHeight);
    };
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollY } = useScroll();
  return useTransform(scrollY, [viewportHeight * 0.4, viewportHeight * 1.4], [1, 0.95], {
    clamp: true,
  });
};
