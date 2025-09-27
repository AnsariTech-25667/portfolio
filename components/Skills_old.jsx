import React from "react";
import { motion } from "framer-motion";
import { me } from "@/data/profile";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="h-screen px-[6%] py-24 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {me.skills.map((skill, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-xl text-center shadow hover:scale-105 transition">
            <span className="font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
