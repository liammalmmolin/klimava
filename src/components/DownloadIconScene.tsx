import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { Color, ExtrudeGeometry, Group, Path, Shape, SRGBColorSpace } from "three";
import kMask from "@/assets/klimava-k-mask.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import { advanceDownloadRotation, DOWNLOAD_ICON_STILL_ANGLE } from "@/lib/download-icon-motion";

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

function Icon({ active, palette, onReady }: { active: boolean; palette: Palette; onReady: () => void }) {
  const group = useRef<Group>(null);
  const angle = useRef(DOWNLOAD_ICON_STILL_ANGLE);
  const mask = useTexture(assetUrl(kMask));
  mask.colorSpace = SRGBColorSpace;
  const { body, rim } = useMemo(() => {
    const body = new ExtrudeGeometry(roundedShape(2.28, 0.5), { depth: 0.23, bevelEnabled: true, bevelSize: 0.065, bevelThickness: 0.065, bevelSegments: 4, curveSegments: 16, steps: 1 });
    body.translate(0, 0, -0.115);
    const ring = roundedShape(2.3, 0.5);
    ring.holes.push(new Path(roundedShape(2.13, 0.43).getPoints(24).reverse()));
    const rim = new ExtrudeGeometry(ring, { depth: 0.24, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 3, curveSegments: 16, steps: 1 });
    rim.translate(0, 0, -0.12);
    return { body, rim };
  }, []);
  useEffect(() => { onReady(); }, [onReady]);
  useEffect(() => () => { body.dispose(); rim.dispose(); }, [body, rim]);
  useFrame((_, delta) => {
    if (!group.current) return;
    angle.current = advanceDownloadRotation(angle.current, delta, active);
    group.current.rotation.y = angle.current;
  });
  return (
    <group rotation={[0.12, 0, -0.1]}>
      <group ref={group} rotation-y={DOWNLOAD_ICON_STILL_ANGLE}>
        <mesh geometry={body}>
          <meshPhysicalMaterial color={palette.glass} metalness={0.35} roughness={0.12} clearcoat={1} clearcoatRoughness={0.07} envMapIntensity={2.5} />
        </mesh>
        <mesh geometry={rim}>
          <meshPhysicalMaterial color={palette.edge} metalness={0.55} roughness={0.1} clearcoat={1} envMapIntensity={2.5} />
        </mesh>
        {[1, -1].map(side => (
          <mesh key={side} position-z={side * 0.184} rotation-y={side === 1 ? 0 : Math.PI}>
            <planeGeometry args={[2.22, 2.22]} />
            <meshStandardMaterial map={mask} transparent alphaTest={0.08} color={palette.symbol} metalness={0.15} roughness={0.22} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function DownloadIconScene({ active, onReady }: { active: boolean; onReady: () => void }) {
  const [palette, setPalette] = useState<Palette>();
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const token = (name: string) => new Color(`hsl(${styles.getPropertyValue(name).trim().split(/\s+/).join(", ").replace(/, (\d+(?:\.\d+)?), (\d+(?:\.\d+)?)$/, ", $1%, $2%")})`).getStyle();
    setPalette({ glass: token("--download-icon-glass"), edge: token("--download-icon-edge"), symbol: token("--download-heading"), light: token("--download-heading"), reflection: token("--brand-highlight") });
  }, []);
  if (!palette) return null;
  return (
    <Canvas orthographic camera={{ position: [0, 0, 7], zoom: 71 }} dpr={[1, 1.5]} frameloop={active ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 5]} intensity={3} color={palette.light} />
      <Suspense fallback={null}>
        <Environment resolution={128}>
          <Lightformer intensity={5} color={palette.light} position={[-3, 3, 4]} scale={[3, 5, 1]} />
          <Lightformer intensity={2} color={palette.reflection} position={[3, 1, -2]} rotation-y={-Math.PI / 2} scale={[2, 4, 1]} />
          <Lightformer intensity={1.5} color={palette.light} position={[0, -3, 3]} scale={[5, 0.6, 1]} />
        </Environment>
        <Icon active={active} palette={palette} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}