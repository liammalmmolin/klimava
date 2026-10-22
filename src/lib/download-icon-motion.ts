export const DOWNLOAD_ICON_TURN_SECONDS = 11;
export const DOWNLOAD_ICON_STILL_ANGLE = -0.32;

export function downloadRotationAt(elapsedSeconds: number, reducedMotion = false) {
  if (reducedMotion) return DOWNLOAD_ICON_STILL_ANGLE;
  return DOWNLOAD_ICON_STILL_ANGLE + (Math.max(0, elapsedSeconds) % DOWNLOAD_ICON_TURN_SECONDS) * Math.PI * 2 / DOWNLOAD_ICON_TURN_SECONDS;
}