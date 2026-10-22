export const DOWNLOAD_ICON_TURN_SECONDS = 11;
export const DOWNLOAD_ICON_STILL_ANGLE = -0.32;

export function advanceDownloadRotation(angle: number, delta: number, active: boolean) {
  if (!active) return angle;
  return (angle + Math.min(Math.max(delta, 0), 0.05) * Math.PI * 2 / DOWNLOAD_ICON_TURN_SECONDS) % (Math.PI * 2);
}