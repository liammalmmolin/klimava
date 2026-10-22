import { BufferGeometry, Float32BufferAttribute, Shape, ShapeGeometry } from "three";

// A single closed surface. Analytic normals make the flat face tangent to the
// quarter-circle edge and straight side, without a second mesh or raised rim.
export function createDownloadIconGeometry() {
  const half = 1.2;
  const corner = 0.56;
  const bevel = 0.13;
  const sideHalfDepth = 0.055;
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
  const positions: number[] = [], normals: number[] = [], uv: number[] = [], indices: number[] = [];
  const vertex = (x: number, y: number, z: number, nx: number, ny: number, nz: number) => {
    const index = positions.length / 3;
    positions.push(x, y, z); normals.push(nx, ny, nz);
    // The same XY projection everywhere: boundary colors never reset at an edge.
    uv.push(x / (half * 2) + 0.5, y / (half * 2) + 0.5);
    return index;
  };
  const ringCount = 34;
  for (let ring = 0; ring < ringCount; ring++) {
    const front = ring <= 16;
    const angle = front ? ring / 16 * Math.PI / 2 : (ring - 17) / 16 * Math.PI / 2;
    const inset = front ? bevel * (1 - Math.sin(angle)) : bevel * (1 - Math.cos(angle));
    const z = front ? sideHalfDepth + bevel * Math.cos(angle) : -sideHalfDepth - bevel * Math.sin(angle);
    const radial = front ? Math.sin(angle) : Math.cos(angle);
    const normalZ = front ? Math.cos(angle) : -Math.sin(angle);
    for (const p of points) vertex(p.x - p.nx * inset, p.y - p.ny * inset, z, p.nx * radial, p.ny * radial, normalZ);
  }
  const count = points.length;
  for (let ring = 0; ring < ringCount - 1; ring++) {
    for (let i = 0; i < count; i++) {
      const a = ring * count + i, b = ring * count + (i + 1) % count;
      const c = a + count, d = b + count;
      indices.push(a, c, b, b, c, d);
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
      indices.push(a, side === 1 ? b : c, side === 1 ? c : b);
    }
  }
  caps.dispose();
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("normal", new Float32BufferAttribute(normals, 3));
  geometry.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices);
  geometry.computeBoundingSphere();
  return geometry;
}