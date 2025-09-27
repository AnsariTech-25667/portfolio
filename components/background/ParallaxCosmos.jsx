"use client";
import { useEffect, useState } from "react";

export default function ParallaxCosmos() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Deep space background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-radial"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, #05070d 0%, #0a0b1a 30%, #05070d 70%, #000000 100%)
          `
        }}
      />

      {/* Distant galaxies */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              width: `${40 + (i * 20)}px`,
              height: `${20 + (i * 10)}px`,
              background: `radial-gradient(ellipse, rgba(${147 + i * 10}, ${197 - i * 5}, 253, 0.3), transparent)`,
              filter: `blur(${5 + i * 2}px)`,
              animation: `cosmic-rotation ${30 + i * 5}s linear infinite`,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>

      {/* Cosmic rays */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.02}deg)`,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `-10%`,
              width: '2px',
              height: '120%',
              background: `linear-gradient(180deg, transparent 0%, rgba(${255 - i * 30}, ${255 - i * 40}, 255, 0.5) 50%, transparent 100%)`,
              transform: `rotate(${10 + i * 15}deg)`,
              filter: `blur(1px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}