import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { BackSide, CanvasTexture, Color, Group, LinearFilter, MeshStandardMaterial, SRGBColorSpace } from "three";
import appArtwork from "@/assets/klimava-logo.jpeg";
import { downloadRotationAt, downloadTiltAt, DOWNLOAD_ICON_STILL_ANGLE } from "@/lib/download-icon-motion";
import { createDownloadIconGeometry } from "@/lib/download-icon-geometry";

useTexture.preload(appArtwork);

// Anodized-aluminium grade, compiled once; the source texture stays untouched.
// Body colors shift (in linear space) toward a deeper, cooler Klimava green →
// muted mint/teal. The black K is masked out: it stays matte and non-metallic
// so it contrasts with the metal, with its exact sampled edges.
const anodize: MeshStandardMaterial["onBeforeCompile"] = shader => {
  shader.fragmentShader = `float klimavaMetalMask = 1.0;
  vec3 anodizeDownload(vec3 c) {
    return c * vec3(0.5, 0.82, 1.02);
  }\n${shader.fragmentShader}`
    .replace("#include <map_fragment>", `#include <map_fragment>
      klimavaMetalMask = smoothstep(0.03, 0.12, dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722)));
      diffuseColor.rgb = anodizeDownload(diffuseColor.rgb);`)
    .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(0.82, roughnessFactor, klimavaMetalMask);")
    .replace("#include <metalnessmap_fragment>", "#include <metalnessmap_fragment>\nmetalnessFactor *= klimavaMetalMask;")
    .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance = anodizeDownload(totalEmissiveRadiance);");
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

// Keep only the dark K from the artwork as alpha; its color comes from the material.
const backMark: MeshStandardMaterial["onBeforeCompile"] = shader => {
  shader.fragmentShader = shader.fragmentShader.replace("#include <map_fragment>", `
    vec4 markTexel = texture2D(map, vMapUv);
    float markLum = dot(markTexel.rgb, vec3(0.299, 0.587, 0.114));
    diffuseColor.a *= 1.0 - smoothstep(0.08, 0.2, markLum);`);
};

function Icon({ reducedMotion, onReady }: { reducedMotion: boolean; onReady: () => void }) {
  const group = useRef<Group>(null);
  const tiltGroup = useRef<Group>(null);
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
    if (!group.current || !tiltGroup.current) return;
    const time = performance.now() / 1000;
    group.current.rotation.y = downloadRotationAt(time, reducedMotion);
    const tilt = downloadTiltAt(time, reducedMotion);
    tiltGroup.current!.rotation.x = tilt.x;
    tiltGroup.current!.rotation.z = tilt.z;
  });
  return (
    <group ref={tiltGroup} rotation={[0.3, 0, -0.08]}>
      <group ref={group} rotation-y={DOWNLOAD_ICON_STILL_ANGLE}>
        <mesh geometry={geometry} onAfterRender={() => {
          if (notified.current) return;
          notified.current = true;
          onReady();
        }}>
          {/* Satin anodized aluminium: color comes from tinted reflections of a
              soft studio environment; a whisper of emission keeps dark angles
              readable without any glowing outline. */}
          <meshStandardMaterial attach="material-0" map={artwork} emissiveMap={artwork} emissive={new Color(1, 1, 1)} emissiveIntensity={0.07} roughness={0.42} metalness={0.9} envMapIntensity={1.1} dithering onBeforeCompile={anodize} />
          <meshStandardMaterial attach="material-1" map={body} emissiveMap={body} emissive={new Color(1, 1, 1)} emissiveIntensity={0.07} roughness={0.42} metalness={0.9} envMapIntensity={1.1} dithering onBeforeCompile={anodize} />
        </mesh>
        {/* Back symbol: the original K, upright when seen from behind (the plane
            faces −Z, so its UVs read correctly, never mirrored), in a dark
            satin finish. Only the K's own pixels are kept from the artwork. */}
        <mesh position-z={-0.1851} rotation-y={Math.PI} renderOrder={1}>
          <planeGeometry args={[2.4, 2.4]} />
          <meshStandardMaterial map={artwork} color="#0b0f0e" roughness={0.55} metalness={0.3} envMapIntensity={0.6} transparent depthWrite={false} polygonOffset polygonOffsetFactor={-1} onBeforeCompile={backMark} />
        </mesh>
      </group>
    </group>
  );
}

export default function DownloadIconScene({ active, reducedMotion, onReady, onFailure }: { active: boolean; reducedMotion: boolean; onReady: () => void; onFailure: () => void }) {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 7], zoom: 52.88 }} dpr={[2, 3]} frameloop={active ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        // A lost context falls back to the still artwork once; no restart attempts.
        gl.domElement.addEventListener("webglcontextlost", () => onFailure(), { once: true });
      }}>
      {/* Soft ambient floor: faces turned away keep form and colour readable. */}
      <hemisphereLight args={["#ffffff", "#9fb3aa", 0.35]} />
      {/* Fixed soft key from above-left, slightly in front; weak fill on the shadow side. */}
      <directionalLight position={[-3, 5, 4]} intensity={0.7} />
      <directionalLight position={[4, -1, 3]} intensity={0.18} />
      {/* Faint camera-side fill keeps the black K legible when facing away from the key. */}
      <directionalLight position={[0, 0, 6]} intensity={0.28} />
      <Suspense fallback={null}>
        <Environment resolution={128} frames={1}>
          {/* Dim studio surround: dark angles keep detail instead of going black. */}
          <mesh scale={30}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial side={BackSide} color="#3a4642" />
          </mesh>
          {/* One large soft key above-left, slightly in front — like a big window:
              a broad highlight that sweeps across each face as the icon turns. */}
          <Lightformer form="rect" intensity={2.2} position={[-3, 6, 3]} rotation-x={-Math.PI / 3} scale={[12, 7, 1]} />
          {/* Wide, dim frontal wash so the front face carries a soft sheen instead
              of reading flat, without burning out the artwork. */}
          <Lightformer form="rect" intensity={0.7} position={[0, 1.5, 7]} scale={[10, 8, 1]} />
          <Lightformer intensity={1.1} position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[4, 8, 1]} />
          <Lightformer intensity={0.45} position={[6, 0, -3]} rotation-y={-Math.PI / 2} scale={[4, 8, 1]} />
          <Lightformer intensity={0.35} position={[0, 1, -7]} scale={[8, 6, 1]} />
          {/* Broad tall softboxes front-right and behind-left: as the icon turns
              they sweep wide light/dark bands across both faces, not just edges. */}
          <Lightformer form="rect" intensity={1.0} position={[4, 0.5, 5]} rotation-y={-Math.PI / 5} scale={[3.5, 10, 1]} />
          <Lightformer form="rect" intensity={0.85} position={[-4, 0, -5]} rotation-y={Math.PI * 0.8} scale={[3.5, 10, 1]} />
        </Environment>
        <Icon reducedMotion={reducedMotion} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
