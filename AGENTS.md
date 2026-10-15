# Project rules

- In the download section, the app icon may float vertically (translateY only) but must never rotate, tilt, scale, skew or otherwise distort; keep glow and particles animating in a sibling decoration layer so they cannot move or distort the icon.
- Keep localized capital-letter refinements in UngForetagande as original-font vector overlays over real text; this preserves inherited typography, glyph advances and accessible spelling without changing surrounding letters.
- App screenshot carousel: Embla alone owns translation; apply progress-driven scale/opacity directly to inner visuals without CSS transitions or per-frame React state, keeping outer slide geometry stable to avoid competing animations.
