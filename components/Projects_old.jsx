import React from "react";
import { motion } from "framer-motion";
import { me } from "@/data/profile";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="h-screen px-[6%] py-24 bg-gray-50 overflow-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {me.projects.map((proj, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold">{proj.name}</h3>
              <p className="mt-2 text-base leading-relaxed">{proj.description}</p>
            </div>

            <div className="flex gap-4 mt-6">
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                  Demo
                </a>
              )}
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
