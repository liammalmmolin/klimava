import { useEffect } from "react";

/**
 * Site-wide: starts fetching and decoding `loading="lazy"` images about
 * two viewports before they scroll into view. Safari's native lazy threshold is
 * very close to the viewport, so fast scrolling otherwise reveals images that
 * are still downloading/decoding. Only nearby images are warmed — never the
 * whole page at once.
 */
const ImageWarmer = () => {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new WeakSet<HTMLImageElement>();

    const prepare: IntersectionObserverCallback = (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const img = entry.target as HTMLImageElement;
          observer.unobserve(img);
          img.loading = "eager";
          // Decode off the main thread so the first painted frame isn't stalled.
          if (typeof img.decode === "function") img.decode().catch(() => {});
        }
      };
    // IntersectionObserver percentage margins are based on WIDTH, not height.
    // Use actual viewport height so portrait phones get the same head start.
    const pending = new Set<HTMLImageElement>();
    const createObserver = () => new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) pending.delete(entry.target as HTMLImageElement);
      }
      prepare(entries, observer);
    }, { rootMargin: `${Math.ceil(window.innerHeight * 2)}px 0px` });
    let io = createObserver();
    const observe = (img: HTMLImageElement) => {
      if (seen.has(img)) return;
      seen.add(img);
      pending.add(img);
      io.observe(img);
    };
    const resize = () => {
      io.disconnect();
      io = createObserver();
      pending.forEach((img) => io.observe(img));
    };
    window.addEventListener("resize", resize, { passive: true });

    const watch = (root: ParentNode) => {
      root.querySelectorAll?.<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
        observe(img);
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
            observe(img);
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
      pending.clear();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return null;
};

export default ImageWarmer;
