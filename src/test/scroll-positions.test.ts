import { describe, expect, it } from "vitest";
import { parseScrollPositions } from "@/lib/scroll-positions";

describe("navigation scroll positions", () => {
  it("preserves the exact saved frame position, including fractional pixels", () => {
    expect(parseScrollPositions('{"previous":2437.5}').previous).toBe(2437.5);
  });
  it("recovers safely from unavailable or corrupt session data", () => {
    expect(parseScrollPositions("broken")).toEqual({});
    expect(parseScrollPositions(null)).toEqual({});
    expect(parseScrollPositions('{"valid":128,"bad":-4,"text":"80"}')).toEqual({ valid: 128 });
  });
});