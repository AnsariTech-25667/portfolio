"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid, Line, Html } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// Segment lengths in meters (adjust sensibly)
const L1 = 0.30; // shoulder->elbow
const L2 = 0.22; // elbow->wrist
const L3 = 0.12; // wrist->gripper

function deg2rad(d){ return (d*Math.PI)/180; }

function Arm({ shoulder, elbow, wrist, animate }) {
  // Forward kinematics in the XZ plane, elevation by Y
  // Base at (0,0,0). Shoulder rotates around Y (yaw), raises in XZ via rotation around X.
  // For simplicity: shoulder pitch only (about Z->X plane), then elbow pitch, then wrist pitch.
  const group = useRef();

  // compute joint positions in local space
  const { p1, p2, p3 } = useMemo(() => {
    const th1 = deg2rad(shoulder);
    const th2 = deg2rad(elbow);
    const th3 = deg2rad(wrist);
    // Arm in XZ plane: we'll interpret "pitch" as rotation around the Z->X plane mapping to Y up.
    const x1 = L1 * Math.cos(th1);
    const y1 = L1 * Math.sin(th1);
    const x2 = x1 + L2 * Math.cos(th1 + th2);
    const y2 = y1 + L2 * Math.sin(th1 + th2);
    const x3 = x2 + L3 * Math.cos(th1 + th2 + th3);
    const y3 = y2 + L3 * Math.sin(th1 + th2 + th3);
    // Map to 3D: use (x, y, z) = (x, y, 0)
    return {
      p1: [x1, y1, 0],
      p2: [x2, y2, 0],
      p3: [x3, y3, 0],
    };
  }, [shoulder, elbow, wrist]);

  useFrame((_, dt) => {
    if (!animate || !group.current) return;
    group.current.rotation.y += dt * 0.2;
  });

  return (
    <group ref={group}>
      {/* Links */}
      <Line points={[[0,0,0], p1]} color="#60a5fa" lineWidth={2} />
      <Line points={[p1, p2]} color="#a78bfa" lineWidth={2} />
      <Line points={[p2, p3]} color="#22d3ee" lineWidth={2} />
      {/* Joints */}
      <mesh position={[0,0,0]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={p1}>
        <sphereGeometry args={[0.018, 16, 16]} />
        <meshStandardMaterial color="#c4b5fd" />
      </mesh>
      <mesh position={p2}>
        <sphereGeometry args={[0.016, 16, 16]} />
        <meshStandardMaterial color="#67e8f9" />
      </mesh>
      {/* End effector */}
      <mesh position={p3}>
        <boxGeometry args={[0.03, 0.03, 0.03]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.35}/>
      </mesh>
      {/* Labels */}
      <Html position={p3} center style={{ pointerEvents: "none" }}>
        <div className="rounded-md bg-black/60 text-cyan-200 text-xs px-2 py-1 border border-white/10">
          End-Effector
        </div>
      </Html>
    </group>
  );
}

function Slider({ label, value, setValue }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-neutral-300">{label}</span>
        <span className="text-sm font-mono text-cyan-200">{value}°</span>
      </div>
      <input
        type="range"
        min={-90}
        max={90}
        step={1}
        value={value}
        onChange={(e)=>setValue(parseInt(e.target.value,10))}
        aria-label={`${label} angle`}
        className="w-full accent-cyan-400"
      />
    </div>
  );
}

export default function ArmViewer() {
  const [shoulder, setShoulder] = useState(25);
  const [elbow, setElbow] = useState(35);
  const [wrist, setWrist] = useState(-10);
  const [animate, setAnimate] = useState(true);
  const reduced = typeof window !== "undefined"
    && window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) setAnimate(false);
  }, [reduced]);

  return (
    <Card as="article" title="Interactive 3D Robotic Arm" className="w-full">
      <h3 className="text-xl font-bold text-slate-100 mb-2">Interactive 3D Robotic Arm</h3>
      <p className="text-sm text-slate-300/85 mb-6">
        3-DoF forward-kinematics demo inspired by the IJISAE paper. Adjust shoulder, elbow, and wrist to visualize pose and end-effector.
      </p>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] mb-6">
        <div className="h-[320px] bg-slate-800/30 rounded-lg border border-slate-600/20">
          <Canvas camera={{ position: [0.6, 0.5, 0.8], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2,2,2]} intensity={0.8} />
            <Grid args={[10,10]} cellSize={0.2} cellThickness={0.5} sectionColor={"#0ea5e9"} infiniteGrid />
            <Arm shoulder={shoulder} elbow={elbow} wrist={wrist} animate={animate} />
            <OrbitControls enablePan enableZoom />
          </Canvas>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">Auto-rotate</span>
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="accent-cyan-400"
                checked={animate}
                onChange={(e)=>setAnimate(e.target.checked)}
                aria-label="Toggle auto-rotation"
              />
              <span className="text-slate-300">{animate ? "On" : "Off"}</span>
            </label>
          </div>

          <Slider label="Shoulder" value={shoulder} setValue={setShoulder} />
          <Slider label="Elbow" value={elbow} setValue={setElbow} />
          <Slider label="Wrist" value={wrist} setValue={setWrist} />

          <Button
            variant="primary"
            href="https://ijisae.org/index.php/IJISAE/article/view/6136/4925"
            iconRight={<span aria-hidden>↗</span>}
          >
            Read the IJISAE Paper
          </Button>
        </div>
      </div>
    </Card>
  );
}