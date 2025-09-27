"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesGalaxy() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        id="galaxy"
        init={init}
        options={{
          fullScreen: { enable: false },
          background: { color: "#05070d" },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 600, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#9bbcff", "#b388ff", "#6ee7ff"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.9,
              animation: { enable: true, speed: 0.6, minimumValue: 0.25, sync: false }
            },
            size: {
              value: { min: 0.6, max: 2.2 },
              animation: { enable: true, speed: 2, minimumValue: 0.4, sync: false }
            },
            move: {
              enable: true,
              speed: 0.25,
              random: true,
              outModes: { default: "out" },
              straight: false,
              direction: "none"
            },
            links: { enable: false }
          },
          interactivity: {
            events: { onHover: { enable: true, mode: ["attract"] } },
            modes: { attract: { distance: 120, duration: 0.2, factor: 1.5 } }
          }
        }}
      />
      <div className="nebula pointer-events-none" />
    </div>
  );
}