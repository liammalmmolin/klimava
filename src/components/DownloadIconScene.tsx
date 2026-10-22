import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { Color, Group, SRGBColorSpace } from "three";
import appArtwork from "@/assets/klimava-logo.jpeg";
import { downloadFloatAt, downloadRotationAt, DOWNLOAD_ICON_STILL_ANGLE } from "@/lib/download-icon-motion";
import { createDownloadIconGeometry } from "@/lib/download-icon-geometry";

useTexture.preload(appArtwork);

function Icon({ reducedMotion, onReady }: { reducedMotion: boolean; onReady: () => void }) {
  const group = useRef<Group>(null);
  const notified = useRef(false);
  const gl = useThree(state => state.gl);
  const artwork = useTexture(appArtwork);
  const geometry = useMemo(createDownloadIconGeometry, []);
  useEffect(() => {
    artwork.colorSpace = SRGBColorSpace;
    artwork.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy());
    artwork.needsUpdate = true;
  }, [artwork, gl]);
  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame(() => {
    if (!group.current) return;
    const time = performance.now() / 1000;
    group.current.rotation.y = downloadRotationAt(time, reducedMotion);
    group.current.position.y = downloadFloatAt(time, reducedMotion);
  });
  return (
    <group rotation={[0.12, 0, -0.1]}>
      <group ref={group} rotation-y={DOWNLOAD_ICON_STILL_ANGLE}>
        <mesh geometry={geometry} onAfterRender={() => {
          if (notified.current) return;
          notified.current = true;
          onReady();
        }}>
          {/* One continuous original-artwork UV field, including both curved
              shoulders and sides. Emission protects the app colors, while
              broad diffuse lighting supplies restrained, seamless depth. */}
          <meshStandardMaterial map={artwork} emissiveMap={artwork} emissive={new Color(1, 1, 1)} emissiveIntensity={0.55} roughness={0.68} metalness={0} envMapIntensity={0.22} toneMapped={false} dithering />
        </mesh>
      </group>
    </group>
  );
}

export default function DownloadIconScene({ active, reducedMotion, onReady }: { active: boolean; reducedMotion: boolean; onReady: () => void }) {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 7], zoom: 71 }} dpr={[1, 3]} frameloop={active ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[-3, 5, 6]} intensity={0.65} />
      <Suspense fallback={null}>
        <Environment resolution={64} frames={1}>
          <Lightformer intensity={0.65} position={[-3, 4, 5]} rotation-y={Math.PI} scale={[5, 6, 1]} />
          <Lightformer intensity={0.4} position={[4, 1, -3]} rotation-y={-Math.PI / 2} scale={[4, 6, 1]} />
        </Environment>
        <Icon reducedMotion={reducedMotion} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
