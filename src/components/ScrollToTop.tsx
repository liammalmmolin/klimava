import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");

      requestAnimationFrame(() => {
        document.getElementById(elementId)?.scrollIntoView({ block: "start" });
      });

      return;
    }

    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location.pathname, location.hash, navigationType]);

  return null;
};

export default ScrollToTop;
