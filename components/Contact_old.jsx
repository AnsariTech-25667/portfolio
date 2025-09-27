import React from "react";
import { motion } from "framer-motion";
import { me } from "@/data/profile";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="h-screen px-[6%] py-24 bg-white text-center flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
      <p className="text-xl mb-8">Interested in working together? Let’s connect!</p>

      <div className="space-y-4 text-xl">
        <p>
          Email:{" "}
          <a href={`mailto:${me.email}`} className="text-blue-600 underline">
            {me.email}
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href={`tel:${me.phone}`} className="text-blue-600 underline">
            {me.phone}
          </a>
        </p>
        <p className="mt-4">
          <a href={me.github} target="_blank" rel="noreferrer">GitHub</a>{" "}
          |{" "}
          <a href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{" "}
          |{" "}
          <a href={me.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
