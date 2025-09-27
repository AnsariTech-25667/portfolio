"use client";
import { useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from "react";

export default function Starfield() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => !cancelled && setReady(true));
    return () => { cancelled = true; };
  }, []);

  const reduced = typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const options = useMemo(() => ({
    background: { color: "#05070d" },
    detectRetina: true,
    fpsLimit: 60,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,

    particles: {
      number: { value: 520, density: { enable: true, area: 800 } },
      color: { value: ["#ffffff", "#9bbcff", "#b388ff", "#6ee7ff"] },
      shape: { type: "circle" },
      size: { value: { min: 0.6, max: 2.4 }, animation: { enable: true, speed: 2, minimumValue: 0.4 } },
      opacity: { value: { min: 0.25, max: 0.9 }, animation: { enable: true, speed: 0.6, minimumValue: 0.25 } },
      move: {
        enable: true, speed: 0.28, random: true, direction: "none",
        outModes: { default: "out" },
        parallax: { enable: true, force: 60, smooth: 12 }
      }
    },

    // extra “shooting stars”
    emitters: reduced ? [] : [
      {
        position: { x: 10, y: 15 }, rate: { delay: 15, quantity: 1 }, life: { count: 0 },
        particles: {
          color: { value: "#ffffff" }, size: { value: { min: 1.2, max: 2.2 } }, opacity: { value: 0.9 },
          move: {
            direction: "bottom-right", speed: { min: 8, max: 12 }, outModes: { default: "destroy" },
            trail: { enable: true, length: 15, fillColor: "#05070d" }
          }
        }
      },
      {
        position: { x: 90, y: 12 }, rate: { delay: 22, quantity: 1 }, life: { count: 0 },
        particles: {
          color: { value: "#b388ff" }, size: { value: { min: 1.2, max: 2.0 } }, opacity: { value: 0.8 },
          move: {
            direction: "bottom-left", speed: { min: 7, max: 11 }, outModes: { default: "destroy" },
            trail: { enable: true, length: 14, fillColor: "#05070d" }
          }
        }
      }
    ],
  }), [reduced]);

  if (!ready) return null;
  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      <Particles id="galaxy" options={options as any}/>
    </div>
  );
}
