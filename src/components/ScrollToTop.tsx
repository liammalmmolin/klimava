import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // POP = back/forward – let browser restore scroll naturally
    if (navigationType === "POP") {
      return;
    }

    if (hash) {
      const elementId = hash.replace("#", "");
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ block: "start" });
      }, 50);
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollToTop;
