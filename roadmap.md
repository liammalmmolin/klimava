# Remaining contrast, metadata and mobile review
- [x] Use the approved light turquoise/lime heading gradient for the forest hero.
- [ ] Give the six requested pages unique descriptions, preserving titles and one description tag.
- [ ] Verify mobile/desktop contrast, direct loads/reloads/navigation, cold/warm rapid scrolling and carousel gestures in Chromium/WebKit.

# Performance review

- [x] Measure first loads and interactions across every route.
- [x] Stabilize image/font loading and preserve image quality.
- [x] Reduce scroll/render/event overhead and navigation reloads.
- [x] Verify mobile, desktop, WebKit and delayed connections; report limitations.
Verification limits: physical iPhone testing unavailable; sandbox Chromium lacks H.264 playback and WebKit crashes decoding this MP4, so actual video playback remains unverified. Production timing was not measured.

# Scroll jank pass (fast scrolling, iPhone/Safari)
- [x] Reveal animations start at viewport edge (no blank gaps on fast scroll).
- [x] Decorative loops on compositor (CSS) and paused off-screen (team float, CTA particles, marquee, video ping).
- [x] Hero card: composited scale layer, hidden once fully covered.
- [x] Lazy images fetched + decoded ~1 viewport ahead, site-wide.
- [x] Drop invisible backdrop blurs; replace SL hero blob filter with equivalent gradient.
- [x] Measure before/after mobile + desktop (Chromium + WebKit).
- [ ] Header pill backdrop blur — needs user approval (visible change).

# Published tile images
- [x] Diagnose unavailable image URLs on the public website: klimava.se returns 404 for Lovable-relative media paths; the same files return valid WebP/200 on klimava.lovable.app.
- [x] Restore the three uploaded photos without changing their appearance using absolute media-host URLs for every src/srcSet/source.
- [x] Verify first visits and reloads on mobile (402px, 3x density) and desktop (1280px) in Chromium/WebKit with real remote image requests; all three photos decode, screenshots match, no JS errors, four URL regression tests pass.
Publication limit: corrected code verified locally against live image files; klimava.se needs its next GitHub Pages deployment before the live page can be rechecked. No physical iPhone tested.

# Early content preparation
- [x] Start all scroll reveals 2400px ahead in both directions and remove unnecessary grid/badge delays; cap word stagger at 150ms, preserving effects and geometry.
- [x] Prepare responsive images two viewport heights earlier in both scroll directions without per-scroll React updates.
- [x] Test rapid scrolling down/up across 12 routes with fresh contexts and cached reloads, mobile 402x725 and desktop 1280x900, Chromium and WebKit. No runtime errors; seven regression tests pass. Screenshots confirm unchanged tile design. Remaining low-opacity detections on about-app include intentionally faded carousel sides; no guarantee for arbitrary instant jumps or unbounded network delays. No physical iPhone tested.

# Feature wording
- [x] Replace the app-page heading without changing feature cards.
- [x] Remove the unverified earning-activity count; website descriptions are not current app confirmation, so use the requested number-free message.
- [x] Verify both changed sections in Chromium at 402px and 1280px; headings and number-free message fit, feature cards retained, seven existing regression tests pass and build OK.
