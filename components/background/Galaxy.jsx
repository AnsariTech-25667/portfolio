"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function AnimatedStars() {
  const group = useRef(null);
  useFrame(({ clock }) => { 
    if (group.current) group.current.rotation.y = clock.getElapsedTime() * 0.02; 
  });
  return (
    <group ref={group}>
      <Stars radius={200} depth={80} count={20000} factor={3} saturation={0} fade speed={0.8} />
    </group>
  );
}

export default function Galaxy() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0,0,8], fov: 55 }} gl={{ antialias:false }}>
        <color attach="background" args={["#05070d"]} />
        <AnimatedStars />
      </Canvas>
    </div>
  );
}
