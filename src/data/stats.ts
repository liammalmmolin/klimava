export interface Stat {
  value: string;
  label: { sv: string; en: string };
}

/**
 * TODO: platshållarvärden — ersätt med riktiga siffror innan lansering.
 */
export const stats: Stat[] = [
  { value: "9", label: { sv: "samarbetspartners", en: "partners" } },
  { value: "100%", label: { sv: "gratis att använda", en: "free to use" } },
  { value: "30s", label: { sv: "att komma igång", en: "to get started" } },
  { value: "8", label: { sv: "sätt att samla poäng", en: "ways to earn points" } },
];
