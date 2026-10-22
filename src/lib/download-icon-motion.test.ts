import { describe, expect, it } from "vitest";
import { advanceDownloadRotation, DOWNLOAD_ICON_TURN_SECONDS } from "./download-icon-motion";

describe("download icon motion", () => {
  it("completes one seamless turn in eleven seconds", () => {
    expect(DOWNLOAD_ICON_TURN_SECONDS).toBe(11);
    let angle = 0;
    for (let i = 0; i < 220; i++) angle = advanceDownloadRotation(angle, 0.05, true);
    expect(Math.min(angle, Math.abs(Math.PI * 2 - angle))).toBeLessThan(0.000001);
  });
  it("holds its angle offscreen and for reduced motion", () => {
    expect(advanceDownloadRotation(0.32, 0.05, false)).toBe(0.32);
  });
});