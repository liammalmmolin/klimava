# Seamless refined download icon
- [x] Replace separate face/rim layers with one closed analytically smoothed surface and continuous original-artwork UVs across faces, rounded shoulders and sides. No vector original found; retain the exact K from the 659×656 original raster rather than redrawing or claiming vector quality.
- [x] Increase antialiased rendering to native 3x mobile density (780×660 canvas), use anisotropic sampling and dithering, restrained satin shading, continuous gentle floating and initial idle prewarming; section layout/text/button remain unchanged.
- [x] Inspect front and both sides across a full Chromium turn on 402×725 and 1280×1800; prepared first frame before scroll, retained canvas across three rapid returns, reduced-motion screenshots identical, WebKit renders correctly, no runtime errors, 10 regression tests pass and build OK.
- [ ] Physical iPhone hardware smoothness — real device unavailable; WebKit software rendering cannot verify actual Safari animation performance.

# Original-color continuous download icon
- [x] Restore original green–mint app artwork and black K without changing the body/rim geometry, thickness, corners, tilt, K proportions or section. Fixed CSS HSL percentage parsing that had turned lit materials white; original sRGB artwork is unaffected by lighting/tone mapping.
- [x] Idle-prewarm lazy resources and first rendered frame; retain Canvas/textures, resume rendering 600px ahead, use continuous absolute monotonic-time 11-second positive rotation across offscreen/tab pauses, and keep reduced-motion still with no per-frame React updates. Rounded opaque unlit artwork replaces transparent lit mask faces; local reflections render once and side lighting is restrained.
- [x] Verified prepared Canvas/no placeholder before scroll, retained Canvas on three rapid return trips, sustained Chromium rotation screenshots at 402×725 and 1280×1800, stable reduced-motion screenshots, correct button link, no runtime errors, nine regression tests and build OK. WebKit verifies prepared resources and return states; software-WebGL capture remains frozen between continuous frames.
- [ ] Confirm visible continuous animation and smoothness in physical iPhone Safari — real device unavailable; software WebKit cannot establish hardware smoothness.

# Targeted gradient and small-accent correction
- [x] Separate turquoise-to-light-green heading and filled-element gradients from muted solid small-icon/link/label colors, preserving the approved download section.
- [x] Verify in Chromium/WebKit at 402×725 and 1280×1800: matching turquoise→light-green headings, darker turquoise→green badge/circles, muted small icons and link normal/hover/press, unchanged download colors and deferred video; screenshots reviewed, no runtime errors, build OK. Physical iPhone not tested.

# Download section redesign
- [x] Rebuild only the download composition and bilingual copy using the supplied Gritch recording; warm-white normal Source Serif 4 heading, compact 196×48px exact-reference button, no glow/particles/trust badges.
- [x] Add a beveled volumetric clear-coated K icon, original K alpha-mask extracted without redrawing, local reflections, lazy-loaded and paused offscreen/hidden tabs, reserved space and reduced-motion still. No separately supplied 3D resource needed.
- [x] Verify 402×725 and 1280×1800 Chromium/WebKit layouts, rapid scrolling and keyboard App Store opening; 9 tests pass, build OK, no page errors. Chromium screenshots confirm rotation; WebKit frame instrumentation confirms advancing rotation at ~16ms intervals but its software-WebGL screenshots remain frozen, so visible Safari animation and physical iPhone smoothness are unverified. Reduced-motion screenshot remains still. Adjacent footer and quote unchanged.
- [ ] Confirm actual iPhone Safari animation and scroll smoothness — requires a physical device unavailable in this sandbox.

# Site-wide UI accent color
- [x] Replace former lime tokens/stops/states with the exact existing section-label reference HSL 172 32% 67% (computed RGB 144,198,191), leaving media/logo files untouched.
- [x] Verify 14 pages in Chromium/WebKit at 402×725 and 1280×1800; link normal/hover/press, four step icons, three trust icons and shared gradients use the new color, no runtime errors, deferred video loading retained, build OK. Reference contrast is 7.65:1 on dark petrol but 1.76:1 on the light background: exact pale gradient endpoints cannot guarantee accessible contrast there; no darker substitute introduced against the exact-color request. Physical iPhone not tested. Existing mobile overflow on SL page left outside this color-only scope.

# Video introduction and section labels
- [x] Remove the play invitation in both languages and unused heading min-height/mobile break, keeping the first sentence, typography and natural 48px video gap.
- [x] Apply shared solid muted turquoise-green surface-specific color tokens to the two matching lime homepage labels only; Chromium/WebKit verified at 402×725 and 1280×1800, unchanged 12px IBM Plex Mono/weight/uppercase/tracking, unchanged gradient headings and lime icons, deferred video source intact, no overflow/runtime errors, build OK. Physical iPhone not tested.

# Updated homepage film
- [x] Replace the film with the supplied original MP4 (1920×1080, 30fps, 27.57s, 14.7MB, H.264/AAC, unchanged bytes) and responsive sharp 6-second stills; reference-size SVG (13.5% of frame width), translucent gray fill/thin light contour/white triangle, lower-left title, existing frame and headings retained. Chromium/WebKit screenshots verified at 402×725 and 1280×1800; build OK; six existing regression tests pass.
- [x] Verify zero media requests before click in Chromium/WebKit, source assignment on click, original audible audio track via FFmpeg and CDN HTTP 206 byte-range support. No autoplay, no muted audio, native controls and playsInline retained; no additional scrolling effects or layout changes.
- [ ] Actual playback, audible output and fullscreen on desktop/iPhone Safari — sandbox Chromium lacks H.264 decoding (error 4), WebKit crashes decoding it; requires a supported browser/physical device unavailable here. Cover dismissal on actual playing remains unverified for the same reason.

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
- [x] Paint only "Tryck på play och ta en titt!" with the shared turquoise→lime gradient (span.gradient-text-on-dark, byte-identical computed background-image to "Få något tillbaka." at rgb(38,193,217) → rgb(141,210,75)); font, size, weight, tracking and placement unchanged, remaining heading text still rgb(243,247,244); verified in Chromium/WebKit mobile and desktop, build OK.

