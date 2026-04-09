

## Plan: Uppdatera kontaktsidans rubrik och byt flagg-emojis till cirkulära SVG-ikoner

### 1. Kontaktsidan – Ändra rubrik
**Fil:** `src/pages/Contact.tsx`
- Rad 32: Byt `"Bli partner"` → `"Kontakta oss"` och `"Become a partner"` → `"Contact us"`

### 2. Flaggikoner – Byt från emojis till cirkulära SVG-ikoner
Bilden visar cirkulära flaggikoner (Union Jack och Sveriges flagga) istället för emojis. Ändringen görs i **`src/components/Header.tsx`** på alla fyra ställen (desktop nav + mobil meny).

Skapar en liten komponent eller inline SVG för varje flagga:
- **Union Jack**: Cirkulär SVG med brittiska flaggans design
- **Svenska flaggan**: Cirkulär SVG med blå bakgrund och gult kors

Ersätter emoji-tecknen `🇸🇪` och `🇬🇧` med dessa SVG-cirklar (ca 24px desktop, 28px mobil), och behåller befintlig opacity-logik för aktiv/inaktiv.

### Filer som ändras
| Fil | Ändring |
|---|---|
| `src/pages/Contact.tsx` | Rubrik "Bli partner" → "Kontakta oss" |
| `src/components/Header.tsx` | Alla 4 flagg-emojis → cirkulära SVG-flaggikoner |

