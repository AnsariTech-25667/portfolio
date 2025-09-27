"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesGalaxy() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Background stars layer */}
      <Particles
        id="stars-background"
        init={init}
        options={{
          fullScreen: { enable: false },
          background: { color: "#05070d" },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 800, density: { enable: true, area: 1000 } },
            color: { value: ["#ffffff", "#e6f3ff", "#cce7ff"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              animation: { enable: true, speed: 0.3, minimumValue: 0.05, sync: false }
            },
            size: {
              value: { min: 0.3, max: 1.2 },
              animation: { enable: true, speed: 0.8, minimumValue: 0.2, sync: false }
            },
            move: {
              enable: true,
              speed: { min: 0.1, max: 0.4 },
              random: true,
              outModes: { default: "out" },
              straight: false,
              direction: "none"
            },
            links: { enable: false }
          }
        }}
      />

      {/* Galaxy clusters layer */}
      <Particles
        id="galaxy-clusters"
        init={init}
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 150, density: { enable: true, area: 600 } },
            color: { value: ["#9bbcff", "#b388ff", "#6ee7ff", "#ff9bb3", "#ffb366"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.3, max: 0.9 },
              animation: { enable: true, speed: 0.5, minimumValue: 0.1, sync: false }
            },
            size: {
              value: { min: 1.5, max: 4.0 },
              animation: { enable: true, speed: 1.2, minimumValue: 0.8, sync: false }
            },
            move: {
              enable: true,
              speed: { min: 0.3, max: 0.8 },
              random: true,
              outModes: { default: "bounce" },
              straight: false,
              direction: "none",
              attract: { enable: true, rotateX: 600, rotateY: 600 }
            },
            links: { 
              enable: true,
              distance: 120,
              color: "#4c1d95",
              opacity: 0.2,
              width: 0.8
            }
          },
          interactivity: {
            events: { 
              onHover: { enable: true, mode: ["attract", "connect"] },
              onClick: { enable: true, mode: "repulse" }
            },
            modes: { 
              attract: { distance: 200, duration: 0.4, factor: 2.0 },
              connect: { distance: 150, links: { opacity: 0.4 } },
              repulse: { distance: 100, duration: 0.4, factor: 3.0 }
            }
          }
        }}
      />

      {/* Bright star highlights */}
      <Particles
        id="bright-stars"
        init={init}
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 400 } },
            color: { value: ["#ffffff", "#fff700", "#ff6b00", "#ff1744"] },
            shape: { type: "star", options: { star: { nb_sides: 5 } } },
            opacity: {
              value: { min: 0.6, max: 1.0 },
              animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false }
            },
            size: {
              value: { min: 2.0, max: 5.0 },
              animation: { enable: true, speed: 3, minimumValue: 1.0, sync: false }
            },
            move: {
              enable: true,
              speed: { min: 0.2, max: 0.6 },
              random: true,
              outModes: { default: "out" },
              straight: false,
              direction: "none"
            },
            links: { enable: false }
          }
        }}
      />

      {/* Multiple nebula layers */}
      <div className="nebula-layer-1 pointer-events-none" />
      <div className="nebula-layer-2 pointer-events-none" />
      <div className="nebula-layer-3 pointer-events-none" />
      <div className="cosmic-dust pointer-events-none" />
    </div>
  );
}