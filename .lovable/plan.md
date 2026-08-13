# Snabbare och snyggare klimava.se

Två spår: mätbar prestandaförbättring och en stramare visuell profil. Inget innehåll eller funktionalitet tas bort.

## Vad jag hittade (verifierat i projektet)

- **Bilderna är den största orsaken till långsam laddning.** Flera filer på 0,5–0,9 MB laddas som PNG/JPEG: `contact-bg.png` (873 KB), `liam.png` (879 KB), `app-scanner2.png` (748 KB), `hero-forest-bg.jpeg` (566 KB), `app-challenges.png` (554 KB), `christian.png` (477 KB). Totalt ca 8 MB i `src/assets`.
- **Inga bilder har `loading="lazy"`** – allt under vikningen laddas direkt.
- **Oanvända bilder ligger kvar** i repot (bl.a. `app-scanner.jpg`, `app-shop.jpg`, `app-challenges.jpeg`, `dante.jpg`, `linus.jpg`, `hero-forest-bg.jpeg`, `app-poangshop2/3` beroende på användning) – de bloatar builden.
- **Alla sidor laddas i samma bundle** – SL-sidan, Team, Kontakt m.m. hämtas även när man bara besöker startsidan.
- **Fonten laddas via `@import` i CSS**, vilket blockerar rendering och saknar `preconnect`.
- **Tunga bibliotek i beroendelistan används inte** (recharts, embla-carousel, react-day-picker, input-otp, vaul, cmdk m.fl. via oanvända shadcn-komponenter) – de dras inte in i bundlen om de inte importeras, men de oanvända UI-filerna kan städas bort.
- **favicon.ico är 63 KB.**

## Prestanda – vad jag gör

1. Konverterar alla bilder till WebP i rimliga upplösningar (max ~1200 px bred för mockups, ~1600 px för bakgrunder). Förväntad minskning: 8 MB → under 1 MB.
2. Lägger `loading="lazy"` + `decoding="async"` på allt utom hero-bilden, som får `fetchpriority="high"` och explicita `width`/`height` för att undvika layouthopp.
3. Gör hero-sektionen snabb: animationerna där blir enklare (kort fade utan tunga transformer), resten av sektionerna animeras först när de scrollas in.
4. Route-baserad kodsplittring med `React.lazy` – startsidan laddar bara sin egen kod.
5. Fontladdning flyttas till `<link rel="preconnect">` + `preload` i `index.html`, med bara de vikter som faktiskt används och `display=swap`.
6. Rensar oanvända bildfiler och oanvända shadcn-komponenter, samt tar bort motsvarande paket från `package.json`.
7. Mindre favicon.

## Design – vad jag gör

- **Stramare palett:** en tydlig grön primärfärg med mörk, djupgrön "ink"-ton för text och en varm off-white bakgrund. Färre konkurrerande gradienter; gradienten sparas till enstaka accenter. Kontrast enligt WCAG AA.
- **Typografi:** konsekvent skala (display / h1 / h2 / brödtext / caption), tightare rubriktracking, luftigare radavstånd i brödtext, max ~65 tecken per rad.
- **Ytor:** enhetlig kort-radie och en skuggnivå istället för tre, konsekvent sektionsrytm (samma vertikala padding överallt), tydligare avgränsning mellan sektioner utan hårda färgkanter.
- **Mobil:** kontroll av alla sektioner vid 390 px – rubrikstorlekar, mockup-storlekar, knappar i full bredd, minskad animationsmängd.
- SL-sidans egna mörkblå kampanjprofil behålls som den är.

## Tekniska detaljer

- Bildkonvertering körs i sandboxen (ffmpeg/sharp) och importerna uppdateras till `.webp`.
- `index.css`-tokens uppdateras (HSL), `tailwind.config.ts` får fontstorlek-skalan; komponenter fortsätter använda semantiska tokens.
- Kodsplittring läggs i `src/App.tsx` med `Suspense` och en lätt fallback.
- Efter ändringarna kör jag en produktionsbuild och rapporterar bundle- och bildstorlek före/efter.

## Utanför scope

Innehållsändringar, nya sektioner, backend.
