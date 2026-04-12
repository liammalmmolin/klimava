import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const SCROLL_KEY = "klimava-scroll-positions";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  // Save scroll position on every scroll
  useEffect(() => {
    const saveScroll = () => {
      const positions = JSON.parse(sessionStorage.getItem(SCROLL_KEY) || "{}");
      positions[key] = window.scrollY;
      sessionStorage.setItem(SCROLL_KEY, JSON.stringify(positions));
    };

    window.addEventListener("scroll", saveScroll, { passive: true });
    return () => window.removeEventListener("scroll", saveScroll);
  }, [key]);

  useEffect(() => {
    // POP = back/forward – restore saved scroll position
    if (navigationType === "POP") {
      const positions = JSON.parse(sessionStorage.getItem(SCROLL_KEY) || "{}");
      const saved = positions[key];
      if (saved !== undefined) {
        setTimeout(() => window.scrollTo(0, saved), 50);
      }
      return;
    }

    if (hash) {
      const elementId = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ block: "start" });
      }, 50);
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash, navigationType, key]);

  return null;
};

export default ScrollToTop;
