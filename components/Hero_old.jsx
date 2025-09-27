import React from "react";
import { motion } from "framer-motion";
import { me } from "@/data/profile";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <img
        src="/Maaz_Ansari_pic.jpg"
        alt={me.name}
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
      />

      <h2 className="text-5xl sm:text-6xl font-bold">{me.name}</h2>
      <p className="text-2xl mt-3">{me.intro}</p>
      <p className="text-lg text-gray-600 mt-2 max-w-2xl">{me.shortIntro}</p>

      <div className="flex gap-6 mt-6 text-lg">
        <a className="underline" href={`mailto:${me.email}`}>Email</a>
        <a className="underline" href={me.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline" href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="underline" href={me.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a className="underline" href={`tel:${me.phone}`}>Phone</a>
      </div>

      <a
        href="#about"
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Explore ↓
      </a>
    </motion.section>
  );
};

export default Hero;
