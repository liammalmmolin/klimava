# Performance review

- [x] Measure first loads and interactions across every route.
- [x] Stabilize image/font loading and preserve image quality.
- [x] Reduce scroll/render/event overhead and navigation reloads.
- [x] Verify mobile, desktop, WebKit and delayed connections; report limitations.
Verification limits: physical iPhone testing unavailable; sandbox Chromium lacks H.264 playback and WebKit crashes decoding this MP4, so actual video playback remains unverified. Production timing was not measured.

# Scroll jank pass (fast scrolling, iPhone/Safari)
- [ ] Reveal animations start at viewport edge (no blank gaps on fast scroll).
- [ ] Decorative loops on compositor (CSS) and paused off-screen (team float, CTA particles, marquee, video ping).
- [ ] Hero card: composited scale layer, hidden once fully covered.
- [ ] Lazy images fetched + decoded ~1 viewport ahead, site-wide.
- [ ] Drop invisible backdrop blurs; replace SL hero blob filter with equivalent gradient.
- [ ] Measure before/after mobile + desktop (Chromium + WebKit).
- [ ] Header pill backdrop blur — needs user approval (visible change).
