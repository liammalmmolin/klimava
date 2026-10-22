export const DOWNLOAD_ICON_TURN_SECONDS = 11;
export const DOWNLOAD_ICON_STILL_ANGLE = -0.32;

// Absolute monotonic time keeps the timeline alive while no frames are drawn.
// Never clamp elapsed time: missed frames must not slow this decorative turn.
export function downloadRotationAt(elapsedSeconds: number, reducedMotion: boolean) {
  if (reducedMotion) return DOWNLOAD_ICON_STILL_ANGLE;
  return DOWNLOAD_ICON_STILL_ANGLE + (Math.max(0, elapsedSeconds) % DOWNLOAD_ICON_TURN_SECONDS) * Math.PI * 2 / DOWNLOAD_ICON_TURN_SECONDS;
}