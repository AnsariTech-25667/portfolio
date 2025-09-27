"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPhoto() {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-[260px] sm:w-[300px] md:w-[340px] aspect-[1/1.15] overflow-hidden
                 rounded-[999px] ring-1 ring-white/5 avatar-glow
                 shadow-[0_0_80px_rgba(124,58,237,0.35)]
                 bg-gradient-to-b from-white/5 to-transparent transition-transform duration-150 will-change-transform hover:scale-[1.18]"
    >
      {/* neon aura */}
      <div className="pointer-events-none absolute -inset-6 rounded-[999px] blur-2xl
                      bg-[radial-gradient(closest-side,rgba(124,58,237,0.35),transparent)]" />
      <motion.div
        whileHover={{ scale: 1.35 }}
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
        className="h-full w-full will-change-transform"
      >
        <Image
          src="/Maaz_Ansari_pic.png"
          alt="Maaz Ansari"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
        />
      </motion.div>
    </motion.div>
  );
}