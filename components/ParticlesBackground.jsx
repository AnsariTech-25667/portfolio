"use client";
import { useEffect, useMemo, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      
      const handler = (e) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  // Initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Enhanced galaxy constellation options
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { 
          value: reducedMotion ? 80 : 180, 
          density: { enable: true, area: 900 } 
        },
        color: { 
          value: ["#7c3aed", "#22d3ee", "#60a5fa", "#a78bfa", "#38bdf8"] 
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: !reducedMotion,
            speed: 0.5,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: !reducedMotion,
            speed: 0.3,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 140,
          color: "#475569",
          opacity: 0.35,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: !reducedMotion,
          speed: { min: 0.6, max: 1.2 },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: !reducedMotion,
            mode: ["grab", "bubble"],
          },
          onClick: {
            enable: !reducedMotion,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.6,
            },
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 0.3,
            opacity: 0.8,
          },
          push: {
            quantity: 3,
          },
        },
      },
      pauseOnBlur: false,
      pauseOnOutsideViewport: false,
    }),
    [reducedMotion]
  );

  // Render static background for reduced motion users
  if (reducedMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Nebula background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_600px_at_20%_10%,rgba(34,211,238,0.06),transparent),radial-gradient(ellipse_900px_900px_at_80%_20%,rgba(124,58,237,0.08),transparent)]" />
      
      {/* Particles */}
      <Particles
        id="galaxy-constellation"
        init={particlesInit}
        options={options}
        className="absolute inset-0"
      />
    </div>
  );
}