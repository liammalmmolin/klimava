// Turn tempo measured from the Gritch reference (one full turn ≈ 9.5 s).
export const DOWNLOAD_ICON_TURN_SECONDS = 9.5;
export const DOWNLOAD_ICON_STILL_ANGLE = -0.32;
const STILL_TILT = { x: 0.2, z: -0.08 };

const phaseAt = (elapsedSeconds: number) =>
  (Math.max(0, elapsedSeconds) % DOWNLOAD_ICON_TURN_SECONDS) * Math.PI * 2 / DOWNLOAD_ICON_TURN_SECONDS;

// Absolute monotonic time keeps the timeline alive while no frames are drawn.
// The reference lingers on the front and back views and sweeps quickly through
// the edge-on views: an eased angle (still exactly one turn per period) does that.
export function downloadRotationAt(elapsedSeconds: number, reducedMotion: boolean) {
  if (reducedMotion) return DOWNLOAD_ICON_STILL_ANGLE;
  const p = phaseAt(elapsedSeconds);
  return DOWNLOAD_ICON_STILL_ANGLE + p - 0.38 * Math.sin(2 * p);
}

// Key orientations from the reference, softened: front still leans back and the
// back view still rolls diagonally, but both are gentler so the icon sits more
// upright. Pure functions of the phase, so the loop closes seamlessly; the
// center never moves.
export function downloadTiltAt(elapsedSeconds: number, reducedMotion: boolean) {
  if (reducedMotion) return STILL_TILT;
  const p = phaseAt(elapsedSeconds);
  const back = (1 - Math.cos(p)) / 2; // 0 at front, 1 at back
  return {
    x: 0.2 - 0.12 * back + 0.05 * Math.sin(p),
    z: -0.08 - 0.18 * back,
  };
}
