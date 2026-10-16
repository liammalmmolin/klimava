import { useEffect } from "react";

/**
 * Site-wide: starts fetching and decoding `loading="lazy"` images about one
 * viewport before they scroll into view. Safari's native lazy threshold is
 * very close to the viewport, so fast scrolling otherwise reveals images that
 * are still downloading/decoding. Only nearby images are warmed — never the
 * whole page at once.
 */
const ImageWarmer = () => {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new WeakSet<HTMLImageElement>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const img = entry.target as HTMLImageElement;
          io.unobserve(img);
          img.loading = "eager";
          // Decode off the main thread so the first painted frame isn't stalled.
          if (typeof img.decode === "function") img.decode().catch(() => {});
        }
      },
      { rootMargin: "100% 0px 100% 0px" },
    );

    const watch = (root: ParentNode) => {
      root.querySelectorAll?.<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
        if (seen.has(img)) return;
        seen.add(img);
        io.observe(img);
      });
    };

    watch(document);
    const mo = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          const el = node as Element;
          if (el.tagName === "IMG" && el.getAttribute("loading") === "lazy") {
            const img = el as HTMLImageElement;
            if (!seen.has(img)) { seen.add(img); io.observe(img); }
          } else if (el.firstElementChild) {
            watch(el);
          }
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
};

export default ImageWarmer;
