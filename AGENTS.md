# Project rules

- In the download section, keep the app icon stationary and particles in a sibling layer; render the glow as a static, filter-free radial gradient that becomes transparent before its bounds to avoid Safari blur-compositing rectangles.
- Keep localized capital-letter refinements in UngForetagande as original-font vector overlays over real text; this preserves inherited typography, glyph advances and accessible spelling without changing surrounding letters.
- App screenshot carousel: Embla alone owns translation; apply progress-driven scale/opacity directly to inner visuals without CSS transitions or per-frame React state, keeping outer slide geometry stable to avoid competing animations.
- Optimize bundled originals using vite-imagetools high-quality variants; reserve image geometry and keep responsive high-density variants so load savings never rely on reduced sharpness.
- Uploaded tile photographs use high-quality CDN WebP variants without upscaling; for an all-subjects landscape image in a portrait tile, extend only empty background to preserve every subject's proportions and visibility.
- Serve the existing typefaces locally through src/fonts.css to remove third-party font request chains without changing typography.
- Secondary pages load lazily; internal links use React Router and scroll restoration commits after page content, retaining exact history positions without sessionStorage writes on every scroll.
- Gate continuous decorative motion near the viewport and respect reduced-motion; never add another transform driver to a scroll-linked or carousel position.
