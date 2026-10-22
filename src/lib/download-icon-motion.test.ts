import { describe, expect, it } from "vitest";
import { downloadRotationAt, DOWNLOAD_ICON_STILL_ANGLE, DOWNLOAD_ICON_TURN_SECONDS } from "./download-icon-motion";

describe("download icon motion", () => {
  it("completes one seamless turn in eleven seconds", () => {
    expect(DOWNLOAD_ICON_TURN_SECONDS).toBe(11);
    expect(downloadRotationAt(11)).toBe(downloadRotationAt(0));
    expect(downloadRotationAt(10.999)).toBeCloseTo(DOWNLOAD_ICON_STILL_ANGLE + Math.PI * 2, 2);
  });
  it("catches up to elapsed time after an offscreen pause without restarting", () => {
    expect(downloadRotationAt(27.5)).toBeCloseTo(DOWNLOAD_ICON_STILL_ANGLE + Math.PI);
    expect(downloadRotationAt(28)).toBeGreaterThan(downloadRotationAt(27.5));
  });
  it("keeps a stable still when reduced motion is requested", () => {
    expect(downloadRotationAt(0, true)).toBe(DOWNLOAD_ICON_STILL_ANGLE);
    expect(downloadRotationAt(137, true)).toBe(DOWNLOAD_ICON_STILL_ANGLE);
  });
});