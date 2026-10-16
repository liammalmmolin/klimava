export interface Stat {
  value: string;
  valueEn?: string;
  label: { sv: string; en: string };
}

/**
 * TODO: platshållarvärden — ersätt med riktiga siffror innan lansering.
 */
export const stats: Stat[] = [
  { value: "9", label: { sv: "samarbetspartners", en: "partners" } },
  { value: "100%", label: { sv: "gratis att använda", en: "free to use" } },
  { value: "30s", label: { sv: "att komma igång", en: "to get started" } },
  // The website feature list is not a verified count of earning activities.
  { value: "Samla poäng", label: { sv: "för hållbara val.", en: "for sustainable choices." }, valueEn: "Earn points" },
];
