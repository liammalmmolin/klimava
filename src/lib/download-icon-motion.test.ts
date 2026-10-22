import { describe, expect, it } from "vitest";
import { downloadRotationAt, downloadTiltAt, DOWNLOAD_ICON_STILL_ANGLE, DOWNLOAD_ICON_TURN_SECONDS } from "./download-icon-motion";

describe("download icon motion", () => {
  it("completes one seamless turn in 9.5 seconds", () => {
    expect(DOWNLOAD_ICON_TURN_SECONDS).toBe(9.5);
    expect(downloadRotationAt(9.5, false)).toBeCloseTo(DOWNLOAD_ICON_STILL_ANGLE);
    expect(downloadRotationAt(9.5 / 2, false)).toBeCloseTo(DOWNLOAD_ICON_STILL_ANGLE + Math.PI);
    // Lingers on front/back: slower near the front than through the edge.
    expect(downloadRotationAt(0.2, false) - downloadRotationAt(0, false)).toBeLessThan(downloadRotationAt(2.575, false) - downloadRotationAt(2.375, false));
  });
  it("catches up after offscreen time without restarting", () => {
    expect(downloadRotationAt(4.75, false)).toBeCloseTo(downloadRotationAt(23.75, false));
  });
  it("tilt loops seamlessly with the turn", () => {
    const a = downloadTiltAt(1.3, false), b = downloadTiltAt(1.3 + 9.5, false);
    expect(a.x).toBeCloseTo(b.x);
    expect(a.z).toBeCloseTo(b.z);
  });
  it("remains still for reduced motion regardless of elapsed time", () => {
    expect(downloadRotationAt(137, true)).toBe(DOWNLOAD_ICON_STILL_ANGLE);
    expect(downloadTiltAt(137, true)).toEqual(downloadTiltAt(0, true));
  });
});
