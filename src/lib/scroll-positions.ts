export type ScrollPositions = Record<string, number>;

export const parseScrollPositions = (raw: string | null): ScrollPositions => {
  try {
    const value: unknown = JSON.parse(raw || "{}");
    if (!value || typeof value !== "object" || Array.isArray(value)) return {};
    return Object.fromEntries(Object.entries(value).filter(([, y]) =>
      typeof y === "number" && Number.isFinite(y) && y >= 0));
  } catch {
    return {};
  }
};