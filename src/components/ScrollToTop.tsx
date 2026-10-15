import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { parseScrollPositions, type ScrollPositions } from "@/lib/scroll-positions";

const SCROLL_KEY = "klimava-scroll-positions";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef<ScrollPositions | null>(null);

  useLayoutEffect(() => {
    if (!positions.current) {
      try {
        positions.current = parseScrollPositions(sessionStorage.getItem(SCROLL_KEY));
      } catch {
        positions.current = {};
      }
    }
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const saved = navigationType === "POP" ? positions.current[key] : undefined;
    let restoring = saved !== undefined || Boolean(hash);
    let lastY = saved ?? window.scrollY;
    const restore = () => {
      if (!restoring) return;
      if (saved !== undefined) {
        window.scrollTo({ top: saved, left: 0, behavior: "instant" });
        lastY = window.scrollY;
        restoring = document.documentElement.scrollHeight - window.innerHeight < saved;
      } else if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ block: "start", behavior: "instant" });
          lastY = window.scrollY;
          restoring = false;
        }
      }
    };
    if (restoring) restore();
    else if (navigationType !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      lastY = 0;
    }
    const observer = new ResizeObserver(restore);
    observer.observe(document.body);
    const trackScroll = () => { if (!restoring) lastY = window.scrollY; };
    const stopRestoring = () => { restoring = false; };
    const persist = () => {
      if (!positions.current) return;
      positions.current[key] = lastY;
      try { sessionStorage.setItem(SCROLL_KEY, JSON.stringify(positions.current)); } catch { /* Private browsing/storage limits. */ }
    };
    window.addEventListener("scroll", trackScroll, { passive: true });
    window.addEventListener("wheel", stopRestoring, { passive: true });
    window.addEventListener("touchstart", stopRestoring, { passive: true });
    window.addEventListener("pagehide", persist);
    return () => {
      persist();
      observer.disconnect();
      window.removeEventListener("scroll", trackScroll);
      window.removeEventListener("wheel", stopRestoring);
      window.removeEventListener("touchstart", stopRestoring);
      window.removeEventListener("pagehide", persist);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [pathname, hash, navigationType, key]);

  return null;
};

export default ScrollToTop;
