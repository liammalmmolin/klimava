import { BufferGeometry, Float32BufferAttribute, Shape, ShapeGeometry } from "three";

// A single closed surface. Analytic normals make the flat face tangent to the
// quarter-circle edge and straight side, without a second mesh or raised rim.
export function createDownloadIconGeometry() {
  const half = 1.2;
  const corner = 0.56;
  // Same overall thickness as before, but a tight radius and a straight,
  // precise side band read as machined rather than inflated.
  const bevel = 0.05;
  const sideHalfDepth = 0.135;
  const segments = 32;
  const points: { x: number; y: number; nx: number; ny: number }[] = [];
  for (let quadrant = 0; quadrant < 4; quadrant++) {
    const a = quadrant * Math.PI / 2;
    const cx = Math.cos(a + Math.PI / 4) > 0 ? half - corner : -half + corner;
    const cy = Math.sin(a + Math.PI / 4) > 0 ? half - corner : -half + corner;
    for (let i = 0; i <= segments; i++) {
      const angle = a + i / segments * Math.PI / 2;
      const nx = Math.cos(angle), ny = Math.sin(angle);
      points.push({ x: cx + corner * nx, y: cy + corner * ny, nx, ny });
    }
  }
  const positions: number[] = [], normals: number[] = [], uv: number[] = [], indices: number[] = [], frontIndices: number[] = [];
  const vertex = (x: number, y: number, z: number, nx: number, ny: number, nz: number) => {
    const index = positions.length / 3;
    positions.push(x, y, z); normals.push(nx, ny, nz);
    // The same XY projection everywhere: boundary colors never reset at an edge.
    uv.push(x / (half * 2) + 0.5, y / (half * 2) + 0.5);
    return index;
  };
  // Edge profile: a narrow, even 45° chamfer softened by two tiny fillets, so
  // the face→side transition catches a crisp band of light instead of reading
  // as a puffy round. Normal tilt per arc position, integrated into positions.
  const tiltAt = (t: number) => {
    const q = Math.PI / 4;
    if (t < 0.22) return q * (t / 0.22);
    if (t > 0.78) return q + q * ((t - 0.78) / 0.22);
    return q;
  };
  const steps = 16;
  const profile: { r: number; z: number; tilt: number }[] = [{ r: 0, z: 0, tilt: 0 }];
  for (let i = 1; i <= steps; i++) {
    const sub = 24;
    let { r, z } = profile[i - 1];
    for (let s = 0; s < sub; s++) {
      const th = tiltAt((i - 1 + (s + 0.5) / sub) / steps);
      r += Math.cos(th); z += Math.sin(th);
    }
    profile.push({ r, z, tilt: tiltAt(i / steps) });
  }
  const end = profile[steps];
  const norm = profile.map(p => ({ r: p.r / end.r * bevel, z: p.z / end.z * bevel, tilt: p.tilt }));
  const ringCount = 34;
  for (let ring = 0; ring < ringCount; ring++) {
    const front = ring <= 16;
    // Back mirrors the front profile (side → back face).
    const p = front ? norm[ring] : norm[16 - (ring - 17)];
    const inset = bevel - p.r;
    const z = front ? sideHalfDepth + bevel - p.z : -(sideHalfDepth + bevel - p.z);
    const radial = Math.sin(p.tilt);
    const normalZ = (front ? 1 : -1) * Math.cos(p.tilt);
    for (const pt of points) vertex(pt.x - pt.nx * inset, pt.y - pt.ny * inset, z, pt.nx * radial, pt.ny * radial, normalZ);
  }
  const count = points.length;
  for (let ring = 0; ring < ringCount - 1; ring++) {
    for (let i = 0; i < count; i++) {
      const a = ring * count + i, b = ring * count + (i + 1) % count;
      const c = a + count, d = b + count;
      (ring < 16 ? frontIndices : indices).push(a, c, b, b, c, d);
    }
  }
  const shape = new Shape();
  points.forEach((p, i) => {
    const x = p.x - bevel * p.nx, y = p.y - bevel * p.ny;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  });
  shape.closePath();
  const caps = new ShapeGeometry(shape);
  const capPosition = caps.getAttribute("position");
  const capIndex = caps.getIndex();
  for (const side of [1, -1]) {
    const offset = positions.length / 3;
    for (let i = 0; i < capPosition.count; i++) vertex(capPosition.getX(i), capPosition.getY(i), side * (sideHalfDepth + bevel), 0, 0, side);
    if (capIndex) for (let i = 0; i < capIndex.count; i += 3) {
      const a = offset + capIndex.getX(i), b = offset + capIndex.getX(i + 1), c = offset + capIndex.getX(i + 2);
      (side === 1 ? frontIndices : indices).push(a, side === 1 ? b : c, side === 1 ? c : b);
    }
  }
  caps.dispose();
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("normal", new Float32BufferAttribute(normals, 3));
  geometry.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  // Group 0: front face + front edge radius (original artwork).
  // Group 1: side band and back (artwork-free body gradient, never a mirrored K).
  geometry.setIndex([...frontIndices, ...indices]);
  geometry.addGroup(0, frontIndices.length, 0);
  geometry.addGroup(frontIndices.length, indices.length, 1);
  geometry.computeBoundingSphere();
  return geometry;
}