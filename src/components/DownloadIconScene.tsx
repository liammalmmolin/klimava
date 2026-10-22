import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { CanvasTexture, Color, Group, LinearFilter, MeshStandardMaterial, SRGBColorSpace } from "three";
import appArtwork from "@/assets/klimava-logo.jpeg";
import { downloadFloatAt, downloadRotationAt, DOWNLOAD_ICON_STILL_ANGLE } from "@/lib/download-icon-motion";
import { createDownloadIconGeometry } from "@/lib/download-icon-geometry";

useTexture.preload(appArtwork);

// Reduce chroma on both artwork contributions, never alpha or sampling quality.
// The original texture stays untouched; the adjustment is compiled once.
const muteArtwork: MeshStandardMaterial["onBeforeCompile"] = shader => {
  shader.fragmentShader = `vec3 muteDownloadChroma(vec3 color) {
    float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
    return mix(vec3(luminance), color, 0.9);
  }\n${shader.fragmentShader}`
    .replace("#include <map_fragment>", "#include <map_fragment>\ndiffuseColor.rgb = muteDownloadChroma(diffuseColor.rgb);")
    .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance = muteDownloadChroma(totalEmissiveRadiance);");
};

// The app icon's own background gradient, measured from the original artwork
// (K excluded) on a 5×5 grid and bilinearly upsampled. Sides and back share the
// front's XY projection, so colors run continuously without a mirrored logo.
const BODY_GRID = [
  ["#a5d96b", "#b1db6f", "#bede73", "#c9e078", "#b8e08f"],
  ["#b1db6f", "#c1db7e", "#c1de74", "#c5e081", "#b2e095"],
  ["#bede73", "#cddf79", "#cae077", "#bae08b", "#abe09d"],
  ["#c9e077", "#c5e080", "#bfe089", "#ade09c", "#a0dfac"],
  ["#b9e08f", "#b2e096", "#ace09d", "#9ddfaf", "#94dfbe"],
];
function createBodyTexture() {
  const grid = document.createElement("canvas");
  grid.width = grid.height = 5;
  const g = grid.getContext("2d")!;
  BODY_GRID.forEach((row, y) => row.forEach((c, x) => { g.fillStyle = c; g.fillRect(x, y, 1, 1); }));
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  // Sample pixel centers so the edges hold the measured edge colors.
  ctx.drawImage(grid, 0.5, 0.5, 4, 4, 0, 0, 256, 256);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

function Icon({ reducedMotion, onReady }: { reducedMotion: boolean; onReady: () => void }) {
  const group = useRef<Group>(null);
  const notified = useRef(false);
  const gl = useThree(state => state.gl);
  const artwork = useTexture(appArtwork);
  const geometry = useMemo(createDownloadIconGeometry, []);
  const body = useMemo(createBodyTexture, []);
  useEffect(() => () => body.dispose(), [body]);
  useEffect(() => {
    artwork.colorSpace = SRGBColorSpace;
    // Preserve fine diagonal K strokes at grazing angles with hardware sampling,
    // not a sharpening pass that could introduce outlines or alter the artwork.
    artwork.anisotropy = Math.min(16, gl.capabilities.getMaxAnisotropy());
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
          {/* Satin finish: moderate emission keeps the app colors exact while a
              fixed key light and soft environment model the form; the tight
              edge radius catches a fine highlight without any outline. */}
          <meshStandardMaterial attach="material-0" map={artwork} emissiveMap={artwork} emissive={new Color(1, 1, 1)} emissiveIntensity={0.32} roughness={0.58} metalness={0} envMapIntensity={0.45} toneMapped={false} dithering onBeforeCompile={muteArtwork} />
          <meshStandardMaterial attach="material-1" map={body} emissiveMap={body} emissive={new Color(1, 1, 1)} emissiveIntensity={0.32} roughness={0.58} metalness={0} envMapIntensity={0.45} toneMapped={false} dithering onBeforeCompile={muteArtwork} />
        </mesh>
      </group>
    </group>
  );
}

export default function DownloadIconScene({ active, reducedMotion, onReady }: { active: boolean; reducedMotion: boolean; onReady: () => void }) {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 7], zoom: 52.88 }} dpr={[2, 3]} frameloop={active ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
      {/* Sky/ground ambient lifts edge radii facing away from the key, so colors
          continue over the edge without dark bands. */}
      <hemisphereLight args={["#ffffff", "#cfd8d2", 0.46]} />
      {/* One fixed soft key light: the rotating form shifts naturally through it. */}
      <directionalLight position={[-3, 4, 6]} intensity={0.95} />
      {/* Weak fill lifts the shadow side so the profile stays readable. */}
      <directionalLight position={[4, -1, 2]} intensity={0.26} />
      <Suspense fallback={null}>
        <Environment resolution={64} frames={1}>
          <Lightformer intensity={0.8} position={[-3, 4, 5]} rotation-y={Math.PI} scale={[5, 6, 1]} />
          <Lightformer intensity={0.4} position={[4, 1, -3]} rotation-y={-Math.PI / 2} scale={[4, 6, 1]} />
        </Environment>
        <Icon reducedMotion={reducedMotion} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
