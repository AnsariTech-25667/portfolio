import React from "react";
import { motion } from "framer-motion";
import { me } from "@/data/profile";

const About = () => {
  return (
    <motion.section
      id="about"
      className="h-screen px-[6%] py-24 bg-white flex flex-col justify-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold mb-8">About Me</h2>

      <div className="max-w-4xl space-y-6 text-lg leading-relaxed">
        {me.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-semibold mb-6">Education</h3>
        {me.education.map((edu, i) => (
          <div key={i} className="border-l-4 pl-4 mb-6">
            <h4 className="font-bold text-2xl">{edu.degree}</h4>
            <p className="text-base">{edu.school}</p>
            <p className="text-gray-500">{edu.date}</p>
            <p className="mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
