"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, Sphere, Ring, useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Massive Orbiting Star System
function MegaStar({ position, size, color, orbitRadius, speed }) {
  const starRef = useRef();
  const orbitRef = useRef();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (orbitRef.current) {
      orbitRef.current.rotation.y = time * speed;
    }
    if (starRef.current) {
      starRef.current.position.x = Math.cos(time * speed) * orbitRadius;
      starRef.current.position.z = Math.sin(time * speed) * orbitRadius;
      // Pulsing effect
      const pulse = 1 + Math.sin(time * 2) * 0.2;
      starRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={orbitRef}>
      <Sphere ref={starRef} args={[size, 32, 32]} position={position}>
        <meshBasicMaterial color={color} />
        {/* Star glow effect */}
        <Sphere args={[size * 1.5, 16, 16]}>
          <meshBasicMaterial 
            color={color} 
            transparent 
            opacity={0.3} 
            side={THREE.BackSide} 
          />
        </Sphere>
      </Sphere>
    </group>
  );
}

// Saturn with Epic Rings
function Saturn() {
  const saturnRef = useRef();
  const ringsRef = useRef();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (saturnRef.current) {
      // Saturn's orbital motion (slow, majestic)
      saturnRef.current.position.x = Math.cos(time * 0.05) * 150;
      saturnRef.current.position.z = Math.sin(time * 0.05) * 150;
      saturnRef.current.position.y = Math.sin(time * 0.03) * 20;
      
      // Saturn rotation
      saturnRef.current.rotation.y = time * 0.1;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = time * 0.02;
    }
  });

  return (
    <group ref={saturnRef} position={[100, 30, -80]}>
      {/* Saturn Planet */}
      <Sphere args={[8, 32, 32]}>
        <meshBasicMaterial color="#FAD5A5" />
        <Sphere args={[8.2, 16, 16]}>
          <meshBasicMaterial 
            color="#E6C068" 
            transparent 
            opacity={0.4} 
            side={THREE.BackSide} 
          />
        </Sphere>
      </Sphere>
      
      {/* Saturn's Rings */}
      <group ref={ringsRef}>
        <Ring args={[12, 18, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial 
            color="#C4A484" 
            transparent 
            opacity={0.7} 
            side={THREE.DoubleSide} 
          />
        </Ring>
        <Ring args={[19, 22, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial 
            color="#8B7355" 
            transparent 
            opacity={0.5} 
            side={THREE.DoubleSide} 
          />
        </Ring>
        <Ring args={[23, 26, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial 
            color="#A0916E" 
            transparent 
            opacity={0.3} 
            side={THREE.DoubleSide} 
          />
        </Ring>
      </group>
    </group>
  );
}

// Jupiter with Atmospheric Bands
function Jupiter() {
  const jupiterRef = useRef();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (jupiterRef.current) {
      // Jupiter's majestic orbit
      jupiterRef.current.position.x = Math.cos(time * 0.08) * 120;
      jupiterRef.current.position.z = Math.sin(time * 0.08) * 120;
      jupiterRef.current.position.y = Math.cos(time * 0.04) * 15;
      
      // Jupiter rotation
      jupiterRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group ref={jupiterRef} position={[-80, -20, 60]}>
      {/* Jupiter Core */}
      <Sphere args={[12, 32, 32]}>
        <meshBasicMaterial color="#D8CA9D" />
      </Sphere>
      
      {/* Atmospheric Bands */}
      <Sphere args={[12.2, 32, 32]}>
        <meshBasicMaterial 
          color="#B07F35" 
          transparent 
          opacity={0.6} 
        />
      </Sphere>
      
      {/* Great Red Spot */}
      <Sphere args={[2, 16, 16]} position={[8, 2, 0]}>
        <meshBasicMaterial color="#CC4125" />
      </Sphere>
      
      {/* Jupiter Glow */}
      <Sphere args={[14, 16, 16]}>
        <meshBasicMaterial 
          color="#FFA500" 
          transparent 
          opacity={0.2} 
          side={THREE.BackSide} 
        />
      </Sphere>
    </group>
  );
}

// Nebula Cloud Effects
function NebulaCloud({ position, color, scale = 1 }) {
  const cloudRef = useRef();
  
  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = clock.getElapsedTime() * 0.01;
      cloudRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={cloudRef} args={[20 * scale, 16, 16]} position={position}>
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={0.1} 
        side={THREE.BackSide} 
      />
    </Sphere>
  );
}

// Shooting Stars
function ShootingStar() {
  const starRef = useRef();
  const trailRef = useRef();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (starRef.current && trailRef.current) {
      const progress = (time * 2) % 10;
      starRef.current.position.x = -200 + progress * 40;
      starRef.current.position.y = 100 - progress * 10;
      starRef.current.position.z = -50;
      
      // Trail effect
      trailRef.current.position.copy(starRef.current.position);
      trailRef.current.position.x -= 5;
    }
  });

  return (
    <group>
      <Sphere ref={starRef} args={[0.5, 8, 8]}>
        <meshBasicMaterial color="#FFFFFF" />
      </Sphere>
      <Sphere ref={trailRef} args={[0.3, 8, 8]}>
        <meshBasicMaterial color="#CCCCFF" transparent opacity={0.7} />
      </Sphere>
    </group>
  );
}

// Enhanced Animated Stars
function GalaxyStars() {
  const starsRef = useRef();
  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
      starsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.02;
    }
  });
  
  return (
    <group ref={starsRef}>
      <Stars 
        radius={300} 
        depth={200} 
        count={50000} 
        factor={6} 
        saturation={0.1} 
        fade 
        speed={1.2} 
      />
    </group>
  );
}

export default function EpicGalaxy() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 100], fov: 60 }} 
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance" 
        }}
      >
        {/* Deep Space Background */}
        <color attach="background" args={["#020817"]} />
        
        {/* Galaxy Stars */}
        <GalaxyStars />
        
        {/* Mega Stars System */}
        <MegaStar 
          position={[50, 40, -60]} 
          size={4} 
          color="#FFD700" 
          orbitRadius={80} 
          speed={0.02} 
        />
        <MegaStar 
          position={[-60, -30, 40]} 
          size={6} 
          color="#FF6B35" 
          orbitRadius={100} 
          speed={0.015} 
        />
        <MegaStar 
          position={[0, 60, -100]} 
          size={8} 
          color="#00BFFF" 
          orbitRadius={120} 
          speed={0.01} 
        />
        
        {/* Planets */}
        <Saturn />
        <Jupiter />
        
        {/* Nebula Clouds */}
        <NebulaCloud position={[80, 50, -150]} color="#8A2BE2" scale={1.5} />
        <NebulaCloud position={[-100, -40, 80]} color="#FF1493" scale={1.2} />
        <NebulaCloud position={[40, -80, -60]} color="#00CED1" scale={0.8} />
        
        {/* Shooting Stars */}
        <ShootingStar />
        
        {/* Ambient Light */}
        <ambientLight intensity={0.1} />
      </Canvas>
      
      {/* Additional CSS Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-purple-950/10 pointer-events-none" />
    </div>
  );
}