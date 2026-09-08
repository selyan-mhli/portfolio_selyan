"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Float } from "@react-three/drei";

// Evaluee une fois cote client. Coupe la rotation continue et le flottement,
// garde le suivi de la souris (qui repond a une action, pas a une horloge).
const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type State = {
  x: number;
  y: number;
  rx: number;
  ry: number;
  scale: number;
  distort: number;
  speed: number;
};

const waypoints: State[] = [
  // hero — big central blob
  { x: 0, y: -0.1, rx: 0.1, ry: 0, scale: 1.65, distort: 0.42, speed: 1.6 },
  // about — shifted right, smaller, calmer
  { x: 2.4, y: 0.2, rx: 0.3, ry: 0.8, scale: 1.1, distort: 0.3, speed: 1.2 },
  // projects — left, more distorted
  { x: -2.3, y: 0.3, rx: -0.2, ry: -1.0, scale: 1.25, distort: 0.55, speed: 2.2 },
  // stack — right, smaller, stable
  { x: 2.3, y: -0.2, rx: 0.5, ry: 1.4, scale: 0.95, distort: 0.28, speed: 1.0 },
  // contact — center, big, dramatic
  { x: 0, y: 0, rx: 0, ry: Math.PI, scale: 1.5, distort: 0.5, speed: 2.5 },
];

function Blob({
  target,
  mouse,
}: {
  target: React.MutableRefObject<State>;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<any>(null);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    const k = Math.min(1, dt * 3);
    // position with parallax
    const px = target.current.x + mouse.current.x * 0.6;
    const py = target.current.y + mouse.current.y * 0.4;
    g.position.x += (px - g.position.x) * k;
    g.position.y += (py - g.position.y) * k;

    // rotation — l'increment continu est la part qui tourne sans fin ; sous
    // prefers-reduced-motion on ne garde que le rattrapage vers la cible.
    const spin = REDUCED_MOTION ? 0 : 1;
    g.rotation.x += dt * 0.15 * spin + (target.current.rx - g.rotation.x) * 0.03;
    g.rotation.y += dt * 0.12 * spin + (target.current.ry - g.rotation.y) * 0.03;

    // scale
    const s = target.current.scale;
    g.scale.x += (s - g.scale.x) * k;
    g.scale.y = g.scale.x;
    g.scale.z = g.scale.x;

    // distort
    if (mat.current) {
      mat.current.distort += (target.current.distort - mat.current.distort) * k;
      mat.current.speed += (target.current.speed - mat.current.speed) * k;
    }
  });

  return (
    <Float
      speed={REDUCED_MOTION ? 0 : 1.2}
      rotationIntensity={REDUCED_MOTION ? 0 : 0.3}
      floatIntensity={REDUCED_MOTION ? 0 : 0.6}
    >
      <group ref={group}>
        {/* Inner core — lime glow */}
        <mesh>
          <icosahedronGeometry args={[0.85, 6]} />
          <meshStandardMaterial
            color="#D4FF00"
            emissive="#D4FF00"
            emissiveIntensity={0.8}
            toneMapped={false}
          />
        </mesh>
        {/* Outer glass shell */}
        <mesh>
          <icosahedronGeometry args={[1.2, 32]} />
          <MeshDistortMaterial
            ref={mat}
            color="#ffffff"
            transmission={1}
            thickness={1.4}
            roughness={0.08}
            metalness={0}
            ior={1.5}
            distort={0.4}
            speed={1.6}
            clearcoat={1}
            clearcoatRoughness={0.05}
            transparent
            opacity={0.9}
            envMapIntensity={1.4}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function PersistentScene() {
  const target = useRef<State>({
    x: 0,
    y: 0,
    rx: -2,
    ry: 4,
    scale: 0.01,
    distort: 0.1,
    speed: 0.5,
  });
  const mouse = useRef({ x: 0, y: 0 });
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5]);

  useEffect(() => {
    // Intro
    gsap.to(target.current, {
      ...waypoints[0],
      duration: 2.4,
      ease: "expo.out",
      delay: 0.15,
    });

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setDpr(mobile ? [1, 1] : [1, 1.75]);

    const ids = ["hero", "about", "projects", "stack", "contact"];
    const triggers: ScrollTrigger[] = [];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const wp = waypoints[i] ?? waypoints[waypoints.length - 1];
      const t = ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(target.current, { ...wp, duration: 1.6, ease: "power3.out" }),
        onEnterBack: () =>
          gsap.to(target.current, { ...wp, duration: 1.6, ease: "power3.out" }),
      });
      triggers.push(t);
    });

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Radial gradient backdrop */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 45%, rgba(212,255,0,0.08), transparent 65%), radial-gradient(70% 60% at 80% 90%, rgba(120,160,255,0.06), transparent 70%), #000",
        }}
      />
      {/* Grain */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.9'/></svg>\")",
        }}
      />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Canvas dpr={dpr} camera={{ position: [0, 0, 5], fov: 40 }} gl={{ antialias: true }}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 4, 5]} intensity={1.2} color="#D4FF00" />
          <directionalLight position={[-3, -2, -3]} intensity={0.5} color="#88a8ff" />
          <Environment preset="city" />
          <Blob target={target} mouse={mouse} />
        </Canvas>
      </div>
    </>
  );
}
