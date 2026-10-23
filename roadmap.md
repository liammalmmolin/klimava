# Contour-cut desktop decals
- [x] Replace rectangular plates with single unioned Raleway-outline SVG silhouettes; retain real text, colors, typography and animation.
- [x] Offset only the first decal upward by 12 CSS pixels without changing sibling layout.
- [ ] Verify contour alignment, spacing and animated/settled states in Chromium/WebKit at multiple desktop widths; preserve mobile and badge.

# Desktop App Store badge and clean decal plates
- [x] Replace only the homepage desktop top-right gradient CTA with localized official Apple SVG badges and the unchanged app link.
- [x] Replace glyph halos with one clean CSS plate per animated decal; retain original spring, delays, order, tilts, colors and aurora picture markup unchanged.
- [x] Verify Swedish/English badges and settled decal close-ups in Chromium and WebKit at 1024/1280/1920 widths at DPR2; mobile 402×725 DPR3 retains hidden decorations and unchanged hero layout. No page exceptions; build OK and ten existing regression tests pass.
- [ ] Native Safari/Chrome hardware and exact mid-entry visual inspection — native browsers unavailable; automated timing captures landed before or after the visible entry and cannot establish every intermediate frame. Mobile page-level overflow measured 436px at 402px; new desktop-only layers are hidden and this unrelated layout was left untouched.

# Desktop rendering quality correction
- [x] Correct height-limited desktop cover selection: 1280×1800 DPR1 now loads 3600 rather than 1600; wide Retina uses the 4672 native crop. No crop, colour, filter, mobile-source or sticker changes.
- [x] Desktop poster now uses a lossless 1920×1080 decoded frame (16 KB), with mobile variants unchanged. Reviewed SVG play control and sticker entry/settled close-ups, reload and back navigation; retained existing design.
- [x] Audit every route in Chromium at 1280 DPR2 and 1920 DPR3, plus homepage at 2560 DPR2 and mobile 402 DPR3. Reviewed screenshot overview and details; no page exceptions, build OK and ten existing tests pass.
- [ ] Native-density replacements for source-limited team photo (1560×1170), scanner (510×1050), SL ticket (459×998), support hero (2400×3600 portrait), contact background (956×944) and selected tile photos — higher-resolution identical originals unavailable; do not fabricate detail, alter layout or upscale.
- [ ] Actual film playback verification — Chromium capture reports media error 4 for the unchanged original H.264/AAC film; no film request occurs before click, original file downloads and decodes with ffmpeg, but browser playback remains unverified.

# Targeted desktop decoration, wordmark and feature grid
- [x] Remove the entire desktop hero sticker group in both languages, including halo and animation effects; preserve the aurora and other content.
- [x] Enlarge only the initial K in the hero wordmark by 10% on the same baseline with inherited typeface, weight and colour; other wordmarks and app artwork remain untouched.
- [x] Change the existing nine About app features to three desktop columns; retain order, content, shared dividers and mobile layout in both languages.
- [x] Verify Chromium at 1024px and 1440px: nine equal-width tiles in 3–3–3 in Swedish and English, continuous dividers, no overflow; 402px retains nine single-column tiles. Hero wordmark K is 19.8px versus 18px remaining letters, decorations absent, screenshots reviewed, no page errors and build OK.

# Download icon saturation and seamless atmosphere
- [x] Reduce only icon artwork saturation by approximately 10% through a once-compiled diffuse/emissive chroma adjustment; preserve black K, alpha and all geometry/motion/render quality.
- [x] Fade exact preceding background (140 20% 96%) into dark within existing empty padding above content with no layout changes; center and broaden halo/dust area with fully transparent outer falloff.
- [x] Verify Chromium mobile 402×725 DPR3 and desktop 1280×1800, WebKit mobile, retained canvas on three rapid scroll returns and pixel-identical reduced motion; four existing motion tests pass, build OK, no runtime errors. Screenshots confirm fade remains above icon and centered halo does not reach heading.
- [ ] Physical iPhone Safari smoothness — real hardware unavailable.

# Download icon third 8% reduction
- [x] Reduce only the rendered icon by a further 8% through orthographic zoom (57.48 → 52.88, ratio 0.92) and scale the temporary placeholder proportionally (130px/1.62rem → 120px/1.49rem); geometry, materials, anisotropy, DPR, rotation timing, halo, dust and reserved layout untouched.
- [x] Verify Chromium 402×725 DPR3, 1280×1800 and reduced-motion 402×725 DPR3: measured visible icon height 148.0px → 136.7px mobile and 137.0px desktop (ratio 0.92), horizontal centre offset within ±0.3px, container 260×220 / 300×260, halo gradient string, twelve dust points with unchanged durations, heading, 196×48 button and body copy unchanged, canvas prepared before scroll, reduced motion pixel-identical with static 0.24 dust, no page exceptions, four motion tests pass and build OK.
- [ ] Physical iPhone Safari smoothness — real hardware unavailable.

# Download icon further 8% reduction
- [x] Reduce only the rendered icon by a further 8% through orthographic zoom (62.48 → 57.48, ratio 0.92) and scale the temporary placeholder proportionally (141px/1.76rem → 130px/1.62rem); geometry, materials, anisotropy, DPR, rotation timing, halo, dust and reserved layout untouched.
- [x] Verify Chromium 402×725 DPR3 and WebKit 402×725 DPR3: measured visible icon height 160.7px → 148.0px (ratio 0.921), width varies 77–145px across a turn purely with rotation angle, horizontal centre offset stays within ±0.7px, container 260×220 / halo 338×237.6 / twelve dust points / heading and 196×48 button unchanged, canvas prepared before scroll and retained after three rapid return trips, reduced motion pixel-identical with static 0.24 dust, no page exceptions, four motion tests pass and build OK.
- [ ] Physical iPhone Safari smoothness — real hardware unavailable.

# Download icon size and reference atmosphere
- [x] Reduce only the rendered icon by 12% through orthographic zoom (71 → 62.48), matching the temporary fallback and preserving reserved layout, geometry, materials, sharpness and continuous rotation.
- [x] Inspect the supplied 13.52-second Gritch recording at 3s and 7s; strengthen the compact green/turquoise illuminated area and twelve irregular tiny opacity-only dust points. Explicit gradient radii reach full transparency before the local layer boundaries; heading area remains untouched, no filters or GPU particles added.
- [x] Verify Chromium 402×725 DPR3 and 1280×1800, WebKit 402×725 DPR3, three rapid return trips and static reduced motion. Canvas prepared before scrolling and retained, unchanged text/button, no page exceptions, four motion tests pass and build OK. Screenshots reviewed; WebKit software capture cannot establish physical Safari animation smoothness.
- [ ] Physical iPhone Safari smoothness — real hardware unavailable.

# Download icon sharpness and local light dust
- [x] Increase hardware-capped anisotropy to 16 and retain antialiasing/native 3x mobile rendering, with a 2x minimum on low-density screens; original remains 659×656 (no higher-resolution identical artwork found), geometry/materials/rotation unchanged, no sharpening filters.
- [x] Add a faint tokenized filter-free local glow and eight tiny irregular opacity-only dust points with independent slow timings; prepared initially, paused offscreen/hidden and static for reduced-motion.
- [x] Inspect Chromium mobile rotation/front/sides across a full turn on 402×725 and 1280×1800; prepared first frame before scroll, retained canvas across three rapid returns, reduced-motion screenshots identical, WebKit renders correctly, no runtime errors, 10 regression tests pass and build OK.
- [ ] Physical iPhone hardware smoothness — real device unavailable; WebKit software rendering cannot verify actual Safari animation performance.

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
- [x] Separate heading gradients from small accent details: headings use turquoise→green with a lighter green finish, numbered circles and the "Så funkar det" badge use a darker turquoise→green transition, while small camera/scanner/stack/gift icons, section labels and the "Skaffa Klimava" link use the muted turquoise-green from "SE KLIMAVA I VERKLIGHETEN" through a dedicated .small-accent utility.
- [x] Verify Chromium and WebKit on 402×725 and 1280×1800: headings match turquoise→light green, badges/circles match darker turquoise→green, small icons and link render rgb(144,198,191) in normal/hover/press, download section unchanged, video deferred, no runtime errors, build OK.
- [ ] Physical iPhone Safari check of the recoloured headings and small accents — real hardware unavailable.

# Video tile poster swap
- [x] Replace the poster with a sharp frame from the new video's opening where the Klimava logo appears, extracted directly from the video file at 1s and served as optimised 640/1280/1920 WebP variants through CDN pointers; keep rounded corners, cover fit, play button, "Så använder du Klimava" title, video source and playback behaviour, and leave other texts, colours, animations and the rest of the site unchanged.
- [x] Verify Chromium and WebKit on 402×725 and 1280×1800: poster loaded at 1920×1080 with cover fit and preserved radius, no .mp4 request before click, video source assigned on click with audio retained, one circle and one path in the play button, four motion tests pass and build OK.
- [ ] Physical iPhone Safari playback and fullscreen check — real device unavailable.

# Video section text and label colour
- [x] Remove "Tryck på play och ta en titt!" and the empty space it left, so the heading reads only "Videon nedan visar hur Klimava kan användas i din vardag." with a natural gap to the video.
- [x] Give the small uppercase section labels one shared, slightly muted turquoise-green Klimava tone (solid, no gradient) through shared .section-label / .section-label-on-dark utilities, adjusted for light and dark backgrounds, while preserving their font, size, weight, letter-spacing, capitals and animations.
- [x] Keep large gradient headings, buttons, icons, logos and other texts at their current colours, and preserve all earlier effects and performance improvements.
- [x] Verify Chromium and WebKit on 402×725 and 1280×1800: heading shows only the first sentence, gap to the video is 48px, both labels share hsl(172 32% 67%) with no gradient, video stays deferred, build OK.
- [ ] Physical iPhone Safari check of the label tone and spacing — real hardware unavailable.

# Play button simplification
- [x] Remove the white play triangle from the centre of the video tile's play button and keep only the outer white circular contour, with a fully transparent interior so the video frame shows through, preserving the circle's size, stroke thickness and placement.
- [x] Keep the whole area inside clickable so it still starts the video, and change nothing else.
- [x] Verify Chromium and WebKit on 402×725 and 1280×1800: one circle and zero triangle paths, circle 58px mobile and 86px desktop, interior transparent, click still starts playback, no .mp4 request before click, four motion tests pass and build OK.
- [ ] Physical iPhone Safari playback check — real device unavailable.

# Privacy policy 404 and draft review
- [x] Route both /privacy and /privacy/ to /integritetspolicy with a replace navigation so the App Store link no longer shows a 404.
- [x] Identify the unconfirmed details that keep the policy a draft and present the questions together without inventing any information.
- [x] Verify both URLs in Chromium and WebKit on 402×725 and 1280×1800: both land on the privacy policy page, homepage design, animations and performance improvements unchanged, build OK.
- [ ] Confirm the twelve outstanding policy details with the founders before the draft marker can be removed — waiting on answers from the user.

# Support page copy
- [x] Change the support page intro to "Läs våra vanligaste frågor eller hör av dig direkt — vi svarar snabbt." as a text-only change, keeping the design and all other content.
- [x] Verify in Chromium on 402×725: the new Swedish intro renders in place and the English text is unchanged, build OK.

# Om appen SL description
- [x] Replace the "Kollektivtrafik med SL" description on the Om appen page with the supplied wording, keeping the heading, icon and design.
- [x] Verify in Chromium on 402×725: the new Swedish and English descriptions render in place, build OK.
