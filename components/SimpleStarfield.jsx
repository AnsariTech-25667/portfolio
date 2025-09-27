"use client";
import { useEffect, useState } from 'react';

export default function SimpleStarfield() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-50 bg-[#05070d] pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Deep space foundation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020510] via-[#05070d] to-[#0a0f1a]"></div>
      
      {/* Legendary Galaxy Systems - Each a masterpiece */}
      <div className="absolute inset-0 galaxy-system-alpha"></div>
      <div className="absolute inset-0 galaxy-system-beta"></div>
      <div className="absolute inset-0 galaxy-system-gamma"></div>
      
      {/* Iconic Star Formations */}
      <div className="absolute inset-0 stellar-formation-1"></div>
      <div className="absolute inset-0 stellar-formation-2"></div>
      <div className="absolute inset-0 stellar-formation-3"></div>
      
      {/* Elite Pulsar Stars */}
      <div className="absolute inset-0 pulsar-alpha"></div>
      <div className="absolute inset-0 pulsar-beta"></div>
      <div className="absolute inset-0 pulsar-gamma"></div>
      
      {/* Legendary Shooting Star Symphony */}
      <div className="absolute inset-0 comet-trail-epic"></div>
      <div className="absolute inset-0 meteor-shower-legendary"></div>
      
      {/* Signature Nebula Wisps */}
      <div className="absolute inset-0 nebula-wisp-1"></div>
      <div className="absolute inset-0 nebula-wisp-2"></div>
    </div>
  );
}