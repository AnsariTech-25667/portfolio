"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CosmicElements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          color: ['#9bbcff', '#b388ff', '#6ee7ff', '#ff9bb3', '#ffb366'][Math.floor(Math.random() * 5)]
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {/* Floating cosmic orbs */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: `radial-gradient(circle, ${element.color}40, transparent)`,
            filter: `blur(${element.size * 0.5}px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, element.opacity, 0],
            scale: [0, 1, 1.5, 1, 0],
            x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
            y: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full opacity-80"
        style={{ top: "20%", left: "-5%" }}
        animate={{
          x: ["0vw", "105vw"],
          y: ["0vh", "30vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: Math.random() * 10 + 5,
          ease: "easeOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-20 h-0.5 -translate-y-0.5" />
      </motion.div>

      <motion.div
        className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-70"
        style={{ top: "60%", left: "-5%" }}
        animate={{
          x: ["0vw", "105vw"],
          y: ["0vh", "-20vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: Math.random() * 15 + 8,
          ease: "easeOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent w-16 h-0.5 -translate-y-0.5" />
      </motion.div>

      <motion.div
        className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-60"
        style={{ top: "80%", left: "-5%" }}
        animate={{
          x: ["0vw", "105vw"],
          y: ["0vh", "-40vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: Math.random() * 12 + 6,
          ease: "easeOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent w-24 h-0.5 -translate-y-0.5" />
      </motion.div>
    </div>
  );
}