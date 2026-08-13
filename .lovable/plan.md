# Ny färgpalett och bakgrunder för klimava.se

Vald riktning: **Petrol & Lime**, **organiska vågformer** som bakgrund, **mjuk rytm** mellan sektioner.

## Färgpalett och roller

| Roll | Färg | Används till |
|---|---|---|
| Primär | Petrol `#12707F` | Knappar, länkar, aktiva states |
| Primär mörk | Djup petrol `#0B2B33` | Rubriker, mörka ytor, footer |
| Sekundär / accent | Lime `#8CD24A` | Highlights, ikoner, badges, gradientslut |
| Bakgrund | Off-white `#F4F7F5` | Sidbakgrund |
| Yta | Vit `#FFFFFF` | Kort och paneler |
| Text | Djup petrol / dämpad grågrön | Brödtext och sekundärtext |
| Success / poäng | Klar lime-grön (mörkare variant för text) | Poängvärden, CO2-siffror, "gratis"-märken |

Alla värden läggs som HSL-tokens i `index.css` och som semantiska namn i `tailwind.config.ts`. Kontrasten kontrolleras mot WCAG AA – lime används aldrig som textfärg mot ljus bakgrund, bara som yta eller mot mörk petrol. Mörkt läge får samma roller med omvända ytor.

Nya gradienttokens: petrol → lime för accenter, samt en mycket ljus off-white → svag mintton för sektionsbakgrunder.

## Bakgrunder

- **Hero:** ljus off-white med en mjuk petrol/lime-glöd bakom mockupen och ett organiskt vågskikt i botten som leder ner till nästa sektion. Ren CSS + inline-SVG, inga bildfiler, inga tunga animationer – hero renderas snabbt.
- **Sektionsövergångar:** böljande SVG-kurvor mellan alla huvudsektioner på startsidan, i toner som ligger nära varandra (mjuk rytm) – ingen helmörk sektion.
- **Tonade band:** varannan sektion får en aning svalare mintton så rytmen syns utan hårda kanter.
- **Footer:** enda djupt petrolfärgade ytan, med en vågform mot sektionen ovanför.
- SL-sidans egna mörkblå kampanjprofil lämnas orörd.

## Filer som ändras

- `src/index.css` – nya färgtokens, gradient- och skuggtokens, hjälpklasser för vågor/blobbar.
- `src/tailwind.config.ts` – uppdaterade `klimava`-färger och eventuella nya semantiska namn.
- Ny `src/components/SectionWave.tsx` – återanvändbar vågform (riktning, färg, höjd som props).
- `HeroSection`, `PartnersSection`, `HowItWorksSection`, `CTASection`, `Footer`, `Header`, `NewsBanner` – byter hårdkodade `bg-white`/gamla klasser mot de nya tokens och lägger in vågorna.
- `Contact`, `Team`, `Recycling`, `Challenges` – följer med den nya paletten.

## Tekniska detaljer

- Vågorna renderas som inline-SVG med `preserveAspectRatio="none"`, dekorativa (`aria-hidden`), utan extra nätverksanrop.
- Inga hårdkodade färgklasser i komponenterna – allt via semantiska tokens.
- Jag kontrollerar resultatet på både desktop och mobil (390 px) innan jag rapporterar klart.

## Utanför scope

Textinnehåll, nya sektioner, bildoptimering/prestanda (det ligger i den separata prestandaplanen).
