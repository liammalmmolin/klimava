import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { Color, ExtrudeGeometry, Group, Path, Shape, ShapeGeometry, SRGBColorSpace } from "three";
import originalArtwork from "@/assets/klimava-logo.jpeg";
import { downloadRotationAt, DOWNLOAD_ICON_STILL_ANGLE } from "@/lib/download-icon-motion";

useTexture.preload(originalArtwork);

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

type Palette = { glass: string; back: string; edge: string; symbol: string; light: string; reflection: string; surface: string };

function Icon({ reducedMotion, startedAt, palette, onReady }: { reducedMotion: boolean; startedAt: number; palette: Palette; onReady: () => void }) {
  const group = useRef<Group>(null);
  const renderedFrames = useRef(0);
  const invalidate = useThree(state => state.invalidate);
  const artwork = useTexture(originalArtwork);
  artwork.colorSpace = SRGBColorSpace;
  const { body, rim, face } = useMemo(() => {
    const body = new ExtrudeGeometry(roundedShape(2.06, 0.43), { depth: 0.24, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 3, curveSegments: 20, steps: 1 });
    body.translate(0, 0, -0.12);
    const ring = roundedShape(2.28, 0.5);
    ring.holes.push(new Path(roundedShape(2.09, 0.44).getPoints(32).reverse()));
    const rim = new ExtrudeGeometry(ring, { depth: 0.36, bevelEnabled: true, bevelSize: 0.035, bevelThickness: 0.045, bevelSegments: 5, curveSegments: 20, steps: 1 });
    rim.translate(0, 0, -0.18);
    const face = new ShapeGeometry(roundedShape(2.05, 0.43), 20);
    const positions = face.getAttribute("position");
    const uv = face.getAttribute("uv");
    // Retain the previous K plane's exact 2.22-unit graphic scale; clip only
    // the artwork background to the existing inset face, not the symbol.
    for (let i = 0; i < positions.count; i++) {
      uv.setXY(i, positions.getX(i) / 2.22 + 0.5, positions.getY(i) / 2.22 + 0.5);
    }
    return { body, rim, face };
  }, []);
  useEffect(() => { invalidate(); }, [invalidate]);
  useEffect(() => () => { body.dispose(); rim.dispose(); face.dispose(); }, [body, rim, face]);
  useEffect(() => { invalidate(); }, [reducedMotion, invalidate]);
  useFrame(({ gl }) => {
    if (!group.current) return;
    // Keep the fallback until an actual frame exists, also in demand mode.
    if (renderedFrames.current < 3) {
      renderedFrames.current += 1;
      if (renderedFrames.current === 3) onReady();
      else invalidate();
    }
    group.current.rotation.y = downloadRotationAt((performance.now() - startedAt) / 1000, reducedMotion);
    // Non-reactive observability; no component updates on animation frames.
    gl.domElement.dataset.rotation = String(group.current.rotation.y);
  });
  return (
    <group rotation={[0.12, 0, -0.1]}>
      <group ref={group} rotation-y={DOWNLOAD_ICON_STILL_ANGLE}>
        <mesh geometry={body}>
          <meshPhysicalMaterial color={palette.glass} metalness={0.3} roughness={0.12} clearcoat={1} clearcoatRoughness={0.06} envMapIntensity={1.4} />
        </mesh>
        <mesh geometry={rim}>
          <meshPhysicalMaterial color={palette.edge} metalness={0} roughness={0.07} transmission={0.8} thickness={0.42} ior={1.48} attenuationColor={palette.reflection} attenuationDistance={2.5} clearcoat={1} clearcoatRoughness={0.05} envMapIntensity={2} />
        </mesh>
        <mesh position-z={-0.15} rotation-y={Math.PI}>
          <shapeGeometry args={[roundedShape(2.05, 0.43), 20]} />
          <meshPhysicalMaterial color={palette.back} metalness={0.5} roughness={0.22} clearcoat={1} envMapIntensity={0.75} />
        </mesh>
        {[1, -1].map(side => (
          <mesh key={side} geometry={face} position-z={side * 0.156} rotation-y={side === 1 ? 0 : Math.PI}>
            <meshBasicMaterial map={artwork} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function DownloadIconScene({ active, reducedMotion, startedAt, onReady }: { active: boolean; reducedMotion: boolean; startedAt: number; onReady: () => void }) {
  const [palette, setPalette] = useState<Palette>();
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const token = (name: string) => {
      const [hue, saturation, lightness] = styles.getPropertyValue(name).trim().split(/\s+/).map(value => Number.parseFloat(value));
      return new Color().setHSL(hue / 360, saturation / 100, lightness / 100, SRGBColorSpace).getStyle();
    };
    setPalette({ glass: token("--download-icon-glass"), back: token("--download-icon-back"), edge: token("--download-icon-edge"), symbol: token("--download-icon-symbol"), light: token("--download-heading"), reflection: token("--brand-highlight"), surface: token("--download-surface") });
  }, []);
  if (!palette) return null;
  return (
    <Canvas orthographic camera={{ position: [0, 0, 7], zoom: 58 }} dpr={[1, 1.5]} frameloop={active ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power", toneMappingExposure: 0.9 }}>
      <color attach="background" args={[palette.surface]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 5]} intensity={1.3} color={palette.light} />
      <Suspense fallback={null}>
        <Environment resolution={128}>
          <Lightformer intensity={6} color={palette.light} position={[-3, 2, 4]} rotation={[0, Math.PI, -0.3]} scale={[0.55, 5, 1]} />
          <Lightformer intensity={5} color={palette.reflection} position={[0, 0.8, 4]} rotation-y={Math.PI} scale={[5, 0.65, 1]} />
          <Lightformer intensity={2} color={palette.reflection} position={[3, 1, -2]} rotation-y={-Math.PI / 2} scale={[0.5, 4, 1]} />
          <Lightformer intensity={2.5} color={palette.light} position={[0, 4, 1]} rotation-x={Math.PI / 2} scale={[4, 0.3, 1]} />
          <Lightformer intensity={2} color={palette.light} position={[1, -2, -4]} scale={[0.25, 3, 1]} />
        </Environment>
        <Icon reducedMotion={reducedMotion} startedAt={startedAt} palette={palette} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}