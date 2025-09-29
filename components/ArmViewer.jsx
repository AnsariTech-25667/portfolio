"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Html } from "@react-three/drei";
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
        <div className="rounded-md bg-transparent text-cyan-200 text-xs px-2 py-1 border border-white/10">
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

  const achievements = [
    { label: "Accuracy Rate", value: "91.78%", color: "text-emerald-300" },
    { label: "Response Time", value: "120ms", color: "text-blue-300" },
    { label: "DOF Control", value: "3-Axis", color: "text-purple-300" },
    { label: "Publication", value: "Scopus", color: "text-yellow-300" }
  ];

  return (
    <article className="group relative">
      {/* Floating Orbs */}
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse delay-300"></div>
      
      {/* Main Card */}
      <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg">
        
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-8">
          <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
            <div className="w-10 h-10 text-white flex items-center justify-center">
              🤖
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
              Interactive 3D Robotic Arm
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-lg">
                🏆 IJISAE Published
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-lg">
                🔬 Research Innovation
              </span>
            </div>
            <p className="text-lg text-neutral-100 dark:text-neutral-100 leading-relaxed drop-shadow-sm">
              3-DOF forward-kinematics demo showcasing AI-powered precision robotic control system. 
              Based on published research achieving 91.78% accuracy with 120ms response time.
            </p>
          </div>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/5 dark:bg-neutral-800/30 rounded-xl p-3 border border-white/10 dark:border-neutral-700/30 hover:scale-105 transition-all duration-300">
                <p className={`text-lg font-bold ${achievement.color} drop-shadow-sm`}>{achievement.value}</p>
                <p className="text-xs font-medium text-neutral-200 dark:text-neutral-200">{achievement.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] mb-8">
          {/* 3D Viewer */}
          <div className="relative">
            <div className="h-[400px] bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-white/10 dark:border-neutral-700/30 overflow-hidden shadow-inner">
              <Canvas camera={{ position: [0.6, 0.5, 0.8], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[2,2,2]} intensity={0.8} />
                
                {/* Base floor plane - completely contained */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
                  <planeGeometry args={[1.0, 1.0]} />
                  <meshStandardMaterial color="#1e293b" />
                </mesh>
                
                {/* Custom grid pattern - CANNOT expand beyond 1x1 meter */}
                {(() => {
                  const gridLines = [];
                  const gridSize = 1.0;
                  const divisions = 10;
                  const step = gridSize / divisions;
                  
                  // Create vertical lines
                  for (let i = 0; i <= divisions; i++) {
                    const x = -gridSize/2 + (i * step);
                    gridLines.push(
                      <Line 
                        key={`v${i}`}
                        points={[[x, 0, -gridSize/2], [x, 0, gridSize/2]]}
                        color="#475569"
                        lineWidth={1}
                      />
                    );
                  }
                  
                  // Create horizontal lines
                  for (let i = 0; i <= divisions; i++) {
                    const z = -gridSize/2 + (i * step);
                    gridLines.push(
                      <Line 
                        key={`h${i}`}
                        points={[[-gridSize/2, 0, z], [gridSize/2, 0, z]]}
                        color="#475569"
                        lineWidth={1}
                      />
                    );
                  }
                  
                  return gridLines;
                })()}
                
                <Arm shoulder={shoulder} elbow={elbow} wrist={wrist} animate={animate} />
                <OrbitControls enablePan enableZoom />
              </Canvas>
            </div>
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-xs text-cyan-200 font-mono">Real-time Forward Kinematics</p>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-6">
            <div className="bg-white/5 dark:bg-neutral-800/30 rounded-2xl p-6 border border-white/10 dark:border-neutral-700/30">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-white drop-shadow-sm">Control Panel</span>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="accent-cyan-400 scale-110"
                    checked={animate}
                    onChange={(e)=>setAnimate(e.target.checked)}
                    aria-label="Toggle auto-rotation"
                  />
                  <span className="text-neutral-200 font-medium">Auto-rotate</span>
                </label>
              </div>

              <div className="space-y-6">
                <Slider label="Shoulder Joint" value={shoulder} setValue={setShoulder} />
                <Slider label="Elbow Joint" value={elbow} setValue={setElbow} />
                <Slider label="Wrist Joint" value={wrist} setValue={setWrist} />
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-white/5 dark:bg-neutral-800/30 rounded-2xl p-6 border border-white/10 dark:border-neutral-700/30">
              <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">Technical Specifications</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-200">Algorithm</span>
                  <span className="text-cyan-300 font-mono">YOLOv4 + IK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-200">Joint Range</span>
                  <span className="text-purple-300 font-mono">±90°</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-200">Precision</span>
                  <span className="text-emerald-300 font-mono">0.1mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-200">Framework</span>
                  <span className="text-blue-300 font-mono">Three.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Paper CTA */}
        <div className="text-center">
          <a
            href="https://ijisae.org/index.php/IJISAE/article/view/6136/4925"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="text-xl" role="img" aria-label="research">📄</span>
            <span className="relative z-10">Read the IJISAE Research Paper</span>
            <span className="text-lg relative z-10" role="img" aria-label="external">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}