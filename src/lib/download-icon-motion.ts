// Turn tempo measured from the Gritch reference (edge-on every ~4.75 s).
export const DOWNLOAD_ICON_TURN_SECONDS = 9.5;
export const DOWNLOAD_ICON_STILL_ANGLE = -0.32;
const BASE_TILT_X = 0.14;
const BASE_TILT_Z = -0.1;

const phaseAt = (elapsedSeconds: number) =>
  (Math.max(0, elapsedSeconds) % DOWNLOAD_ICON_TURN_SECONDS) * Math.PI * 2 / DOWNLOAD_ICON_TURN_SECONDS;

// Absolute monotonic time keeps the timeline alive while no frames are drawn.
// Never clamp elapsed time: missed frames must not slow this decorative turn.
export function downloadRotationAt(elapsedSeconds: number, reducedMotion: boolean) {
  if (reducedMotion) return DOWNLOAD_ICON_STILL_ANGLE;
  return DOWNLOAD_ICON_STILL_ANGLE + phaseAt(elapsedSeconds);
}

// Subtle tilt that changes with the turn angle (front, edge and back read with
// different leans, as in the reference). Pure functions of the turn phase, so
// the loop closes seamlessly. The icon stays centered: no vertical travel.
export function downloadTiltAt(elapsedSeconds: number, reducedMotion: boolean) {
  if (reducedMotion) return { x: BASE_TILT_X, z: BASE_TILT_Z };
  const phase = phaseAt(elapsedSeconds);
  return { x: BASE_TILT_X + 0.07 * Math.sin(phase * 2), z: BASE_TILT_Z + 0.06 * Math.sin(phase) };
}
