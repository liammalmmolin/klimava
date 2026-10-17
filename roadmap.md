# Remaining contrast, metadata and mobile review
- [x] Replace the hero with the supplied David Becker 4672×7008 original, store CDN original and sharp responsive crops, verify loaded filter-free full-opacity images and readable unchanged layout in Chromium/WebKit at 402×725, 1280×1800 and 1920×1080; build OK. Physical iPhone not tested.
- [x] Give the hero heading line "Stor påverkan." the exact same gradient as "Få något tillbaka." (135deg, rgb(38,193,217) → rgb(141,210,75)), keeping font, weight, size, tracking, placement and effects unchanged; verified byte-identical computed background-image on mobile 402×725 and desktop 1280×1800, build OK. Legibility noted to the user: the lime end sits against bright green aurora and dark branches.
- [x] Give the six requested pages unique descriptions, preserving titles and one description tag; use Helmet for titles too to avoid the observed title-reset race.
- [x] Verify mobile/desktop contrast, direct loads/reloads/navigation, first/return rapid scrolling and carousel gestures in Chromium/WebKit. Seven existing tests pass, images load, no runtime errors, mobile CLS 0. Chromium remains smooth; WebKit has reproducible frame pauses (including on cached returns). Removing header blur experimentally did not eliminate them, so no approved visual effects were removed without a proven cause.
- [ ] Physical iPhone/Safari profiling and confirmation of remaining WebKit pauses — requires a real device, unavailable here. Browser descriptions update after JavaScript; static non-JavaScript crawlers still see the homepage fallback.

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

# Play button finish
- [x] Remove the filled play triangle from the video tile's button, keeping only the white outline circle at unchanged size (58px mobile, 86px desktop), 3.5 stroke and centred placement, with a fully transparent interior; verified circle-only SVG (1 child, 0 paths) in Chromium mobile/desktop and WebKit mobile, centre click still runs play(), build OK. Real playback still unverified: sandbox Chromium lacks H.264 and WebKit crashes decoding this MP4.

# Video intro copy
- [x] First pass replaced the wrong line (the small green label); corrected: label restored to "Se Klimava i verkligheten" (IBM Plex Mono 12px uppercase, 1.2px tracking, secondary green, centred, fadeUp) and the white heading (Source Serif 4 500, 30px mobile / 48px desktop, text-background, centred, fadeUp) now carries the supplied two-sentence copy.
- [x] Tune the white heading's line breaks only: text-balance plus max-w-3xl at md and a mobile-only sentence break; verified 4 lines mobile (last line the whole second sentence, no orphans, same 144px block height) and 3 balanced lines desktop in Chromium and WebKit at 402x725 and 1280x1800, build OK. The fixed header pill passing over the heading mid-scroll is pre-existing site behaviour, not a regression.

