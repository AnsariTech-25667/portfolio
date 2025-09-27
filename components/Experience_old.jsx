import React from "react";
import { motion } from "framer-motion";
import { me } from "@/data/profile";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="h-screen px-[6%] py-24 bg-gray-50 overflow-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold mb-8">Experience</h2>

      <div className="space-y-8">
        {me.experience.map((exp, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{exp.role} <span className="text-gray-600 font-medium">@ {exp.company}</span></h3>
                <p className="text-gray-500 mt-1">{exp.date} · {exp.location}</p>
              </div>
            </div>

            <p className="mt-4">{exp.description}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              {exp.skills.map((s, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
