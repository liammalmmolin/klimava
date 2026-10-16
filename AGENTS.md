# Project rules

- In the download section, keep the app icon stationary and particles in a sibling layer; render the glow as a static, filter-free radial gradient that becomes transparent before its bounds to avoid Safari blur-compositing rectangles.
- Keep localized capital-letter refinements in UngForetagande as original-font vector overlays over real text; this preserves inherited typography, glyph advances and accessible spelling without changing surrounding letters.
- App screenshot carousel: Embla alone owns translation; apply progress-driven scale/opacity directly to inner visuals without CSS transitions or per-frame React state, keeping outer slide geometry stable to avoid competing animations.
- Optimize bundled originals using vite-imagetools high-quality variants; reserve image geometry and keep responsive high-density variants so load savings never rely on reduced sharpness.
- Uploaded tile photographs use high-quality CDN WebP variants without upscaling, resolved through src/lib/asset-url.ts against the published Lovable media host because external GitHub Pages hosting does not serve /__l5e routes; for an all-subjects landscape image in a portrait tile, extend only empty background to preserve every subject's proportions and visibility.
- Serve the existing typefaces locally through src/fonts.css to remove third-party font request chains without changing typography.
- Secondary pages load lazily; internal links use React Router and scroll restoration commits after page content, retaining exact history positions without sessionStorage writes on every scroll.
- Run endless decorative loops as CSS keyframes (compositor thread) paused off-screen via `.motion-paused` and disabled for reduced-motion; never add another transform driver to a scroll-linked or carousel position.
- Scroll reveals trigger at the viewport edge (no negative margins) so fast scrolling never shows blank content; the pinned hero is composited and hidden once fully covered.
- A global ImageWarmer fetches and decodes `loading="lazy"` images about one viewport ahead, because Safari's native lazy threshold is too close for fast scrolling.
- Prefer filter-free gradients over `filter: blur` glows and drop `backdrop-filter` where the backdrop is a solid color; both are costly while scrolling in Safari.
