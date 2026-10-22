import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { Color, ExtrudeGeometry, Group, Path, Shape, ShapeGeometry, SRGBColorSpace } from "three";
import appArtwork from "@/assets/klimava-logo.jpeg";
import { downloadRotationAt, DOWNLOAD_ICON_STILL_ANGLE } from "@/lib/download-icon-motion";

useTexture.preload(appArtwork);

function roundedShape(size: number, radius: number) {
  const s = size / 2;
  const path = new Shape();
  path.moveTo(-s + radius, -s);
  path.lineTo(s - radius, -s);
  path.quadraticCurveTo(s, -s, s, -s + radius);
  path.lineTo(s, s - radius);
  path.quadraticCurveTo(s, s, s - radius, s);
  path.lineTo(-s + radius, s);
  path.quadraticCurveTo(-s, s, -s, s - radius);
  path.lineTo(-s, -s + radius);
  path.quadraticCurveTo(-s, -s, -s + radius, -s);
  return path;
}

type Palette = { glass: string; edge: string; symbol: string; light: string; reflection: string };

function Icon({ reducedMotion, palette, onReady }: { reducedMotion: boolean; palette: Palette; onReady: () => void }) {
  const group = useRef<Group>(null);
  const notified = useRef(false);
  const artwork = useTexture(appArtwork);
  artwork.colorSpace = SRGBColorSpace;
  const { body, rim, face } = useMemo(() => {
    const body = new ExtrudeGeometry(roundedShape(2.28, 0.5), { depth: 0.23, bevelEnabled: true, bevelSize: 0.065, bevelThickness: 0.065, bevelSegments: 4, curveSegments: 16, steps: 1 });
    body.translate(0, 0, -0.115);
    const ring = roundedShape(2.3, 0.5);
    ring.holes.push(new Path(roundedShape(2.13, 0.43).getPoints(24).reverse()));
    const rim = new ExtrudeGeometry(ring, { depth: 0.24, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 3, curveSegments: 16, steps: 1 });
    rim.translate(0, 0, -0.12);
    // Same face extent and K proportions as the previous full-image alpha mask.
    const face = new ShapeGeometry(roundedShape(2.22, 0.47), 16);
    const uv = face.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 2.22 + 0.5, uv.getY(i) / 2.22 + 0.5);
    return { body, rim, face };
  }, []);
  useEffect(() => () => { body.dispose(); rim.dispose(); face.dispose(); }, [body, rim, face]);
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = downloadRotationAt(performance.now() / 1000, reducedMotion);
  });
  return (
    <group rotation={[0.12, 0, -0.1]}>
      <group ref={group} rotation-y={DOWNLOAD_ICON_STILL_ANGLE}>
        <mesh geometry={body}>
          <meshPhysicalMaterial color={palette.glass} metalness={0.12} roughness={0.24} clearcoat={1} clearcoatRoughness={0.16} envMapIntensity={0.8} />
        </mesh>
        <mesh geometry={rim}>
          <meshPhysicalMaterial color={palette.edge} metalness={0.3} roughness={0.2} clearcoat={1} envMapIntensity={1} />
        </mesh>
        {[1, -1].map(side => (
          <mesh key={side} geometry={face} position-z={side * 0.184} rotation-y={side === 1 ? 0 : Math.PI} onAfterRender={() => {
            if (notified.current) return;
            notified.current = true;
            onReady();
          }}>
            {/* Unlit sRGB artwork prevents lighting/tone mapping from bleaching the original colors or black K. */}
            <meshBasicMaterial map={artwork} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function DownloadIconScene({ active, reducedMotion, onReady }: { active: boolean; reducedMotion: boolean; onReady: () => void }) {
  const [palette, setPalette] = useState<Palette>();
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const token = (name: string) => {
      const [hue, saturation, lightness] = styles.getPropertyValue(name).trim().split(/\s+/).map(Number);
      return new Color().setHSL(hue / 360, saturation / 100, lightness / 100, SRGBColorSpace).getStyle();
    };
    setPalette({ glass: token("--download-icon-glass"), edge: token("--download-icon-edge"), symbol: token("--download-heading"), light: token("--download-heading"), reflection: token("--brand-highlight") });
  }, []);
  if (!palette) return null;
  return (
    <Canvas orthographic camera={{ position: [0, 0, 7], zoom: 71 }} dpr={[1, 1.5]} frameloop={active ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 5]} intensity={1.2} color={palette.light} />
      <Suspense fallback={null}>
        <Environment resolution={128} frames={1}>
          <Lightformer intensity={2} color={palette.light} position={[-3, 3, 4]} rotation={[0, Math.PI, -0.35]} scale={[3, 5, 1]} />
          <Lightformer intensity={1} color={palette.reflection} position={[3, 1, -2]} rotation-y={-Math.PI / 2} scale={[2, 4, 1]} />
          <Lightformer intensity={0.8} color={palette.light} position={[0, -3, 3]} rotation-y={Math.PI} scale={[5, 0.6, 1]} />
        </Environment>
        <Icon reducedMotion={reducedMotion} palette={palette} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}