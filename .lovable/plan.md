# Stillastående appikon i ”Testa Klimava, det är gratis”

## Ändring
- Behåll appikonens bild, storlek, rundning, skugga och centrerade placering på mobil och dator.
- Ta bort ikonens rotation och 3D-effekter samt den svävande rörelsen i dess omslutande element.
- Gör även sektionens gemensamma innehållsbehållare stillastående: dess nuvarande entréanimation flyttar också ikonen. Eventuella animationer på övrigt innehåll hålls separata från ikonen.
- Lägg partiklar och ljus i ett separat dekorationslager bredvid den statiska ikonen. Behåll partiklarnas blinkande animationer och låt den tidigare svävande rörelsen gälla enbart dekorationslagret.
- Ikonen följer vanlig sidscrollning; ingen låsning mot skärmen införs.

## Tekniska detaljer
Ändringen begränsas till `src/components/CTASection.tsx`. Statiska behållare ersätter de animerade föräldrarna till ikonen. Bilden får inga animerade transformationer, perspektiv eller hovereffekter. Dekorationerna behåller sina befintliga mått, färger och grundplacering men animeras oberoende av bilden.

## Kontroll på mobil och dator
- Kontrollera vid inträde i sektionen och under flera sekunder utan scroll att ikonens position och mått förblir oförändrade.
- Kontrollera även vid pekarinteraktion att ikonen inte roterar, lutar eller skalas.
- Bekräfta att partiklar och ljus fortfarande animeras utan att påverka ikonen.
- Scrolla vidare och tillbaka och bekräfta att ikonen följer sidan normalt.
- Jämför utseende och placering före och efter ändringen på mobil och dator.

Ingen annan sektion, text eller färgpalett ändras.
