# Project rules

- In the download section, the app icon may float vertically (translateY only) but must never rotate, tilt, scale, skew or otherwise distort; keep glow and particles animating in a sibling decoration layer so they cannot move or distort the icon.
- Keep localized capital-letter refinements in UngForetagande as original-font vector overlays over real text; this preserves inherited typography, glyph advances and accessible spelling without changing surrounding letters.
- App screenshot carousel: Embla alone owns translation; apply progress-driven scale/opacity directly to inner visuals without CSS transitions or per-frame React state, keeping outer slide geometry stable to avoid competing animations.
- Optimize bundled originals using vite-imagetools high-quality variants; reserve image geometry and keep responsive high-density variants so load savings never rely on reduced sharpness.
- Serve the existing typefaces locally through src/fonts.css to remove third-party font request chains without changing typography.
- Secondary pages load lazily; internal links use React Router and scroll restoration commits after page content, retaining exact history positions without sessionStorage writes on every scroll.
- Gate continuous decorative motion near the viewport and respect reduced-motion; never add another transform driver to a scroll-linked or carousel position.
