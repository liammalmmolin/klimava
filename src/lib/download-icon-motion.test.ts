import { describe, expect, it } from "vitest";
import { downloadRotationAt, DOWNLOAD_ICON_STILL_ANGLE, DOWNLOAD_ICON_TURN_SECONDS } from "./download-icon-motion";

describe("download icon motion", () => {
  it("completes one seamless turn in eleven seconds", () => {
    expect(DOWNLOAD_ICON_TURN_SECONDS).toBe(11);
    expect(downloadRotationAt(11, false)).toBe(DOWNLOAD_ICON_STILL_ANGLE);
    expect(downloadRotationAt(2.75, false)).toBeCloseTo(DOWNLOAD_ICON_STILL_ANGLE + Math.PI / 2);
  });
  it("catches up after offscreen time without restarting or slowing on missed frames", () => {
    expect(downloadRotationAt(27.5, false)).toBeCloseTo(DOWNLOAD_ICON_STILL_ANGLE + Math.PI);
    expect(downloadRotationAt(5.5, false)).toBe(downloadRotationAt(27.5, false));
    expect(downloadRotationAt(4.5, false) - downloadRotationAt(4, false)).toBeCloseTo(Math.PI / 11);
  });
  it("remains still for reduced motion regardless of elapsed time", () => {
    expect(downloadRotationAt(0, true)).toBe(DOWNLOAD_ICON_STILL_ANGLE);
    expect(downloadRotationAt(137, true)).toBe(DOWNLOAD_ICON_STILL_ANGLE);
  });
});