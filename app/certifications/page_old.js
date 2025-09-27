"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { me } from "@/data/profile";

const CertificationCard = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300 group"
    >
      {/* Certification Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {certification.title}
              </h3>
              <p className="text-blue-300 font-medium">{certification.issuer}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
              Verified
            </span>
            <span className="text-gray-400 text-sm">{certification.date}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {certification.description}
      </p>

      {/* Skills */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-2">Skills Acquired:</h4>
        <div className="flex flex-wrap gap-2">
          {certification.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <Link
          href={certification.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Verify Credential
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium"
    >
      {skill}
    </motion.div>
  );
};

export default function Certifications() {
  // Extract all unique skills from certifications
  const allSkills = me.certifications?.flatMap(cert => cert.skills) || [];
  const uniqueSkills = [...new Set(allSkills)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Maaz Ansari
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/publications" className="hover:text-blue-400 transition-colors">Publications</Link>
              <Link href="/certifications" className="text-blue-400 font-medium">Certifications</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Industry-recognized certifications from <span className="text-purple-400 font-semibold">Google</span>, 
              <span className="text-blue-400 font-semibold"> LinkedIn Learning</span>, and 
              <span className="text-cyan-400 font-semibold"> leading tech platforms</span> — 
              validating expertise in data analytics, visualization, and modern development practices.
            </p>
            
            {/* Key Skills Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {uniqueSkills.slice(0, 8).map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {me.certifications?.map((certification, index) => (
              <CertificationCard 
                key={index}
                certification={certification}
                index={index}
              />
            ))}
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">{me.certifications?.length || 0}</div>
              <div className="text-gray-300">Certifications</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-300">Platforms</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">{uniqueSkills.length}</div>
              <div className="text-gray-300">Skills Validated</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2024-25</div>
              <div className="text-gray-300">Recent Years</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                With validated expertise in data analytics, cloud platforms, and modern development practices, 
                I'm ready to tackle complex challenges and drive innovation at your startup.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/publications"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-medium border border-white/20"
                >
                  View Publications
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maaz Ansari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}