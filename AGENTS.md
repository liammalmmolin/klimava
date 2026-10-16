# Project rules

- In the download section, keep the app icon stationary and particles in a sibling layer; render the glow as a static, filter-free radial gradient that becomes transparent before its bounds to avoid Safari blur-compositing rectangles.
- Keep localized capital-letter refinements in UngForetagande as original-font vector overlays over real text; this preserves inherited typography, glyph advances and accessible spelling without changing surrounding letters.
- App screenshot carousel: Embla alone owns translation; apply progress-driven scale/opacity directly to inner visuals without CSS transitions or per-frame React state, keeping outer slide geometry stable to avoid competing animations.
- Optimize bundled originals using vite-imagetools high-quality variants; reserve image geometry and keep responsive high-density variants so load savings never rely on reduced sharpness.
- Uploaded tile photographs use high-quality CDN WebP variants without upscaling, resolved through src/lib/asset-url.ts against the published Lovable media host because external GitHub Pages hosting does not serve /__l5e routes; for an all-subjects landscape image in a portrait tile, extend only empty background to preserve every subject's proportions and visibility.
- Serve the existing typefaces locally through src/fonts.css to remove third-party font request chains without changing typography.
- Secondary pages load lazily; internal links use React Router and scroll restoration commits after page content, retaining exact history positions without sessionStorage writes on every scroll.
- Route titles and descriptions are managed centrally by react-helmet-async in PageTitle with one root provider and a managed static homepage description fallback, preventing duplicate descriptions and competing title writes during navigation.
- Run endless decorative loops as CSS keyframes (compositor thread) paused off-screen via `.motion-paused` and disabled for reduced-motion; never add another transform driver to a scroll-linked or carousel position.
- All scroll reveals share revealViewport's positive two-way head start and avoid cumulative grid delays; this prepares content before fast scrolling exposes it, without changing animation geometry. The pinned hero remains composited and hidden once fully covered.
- A global ImageWarmer fetches and decodes `loading="lazy"` images two viewport heights ahead in both directions, with pixel margins recalculated on resize; IntersectionObserver percentage margins use width and under-prepare portrait phones.
- Prefer filter-free gradients over `filter: blur` glows and drop `backdrop-filter` where the backdrop is a solid color; both are costly while scrolling in Safari.
- Import line icons from src/components/icons (never react-coolicons directly); icons whose source uses overlapping sub-paths are redrawn there as closed shapes with one 2px round stroke so edges stay clean at small sizes.
