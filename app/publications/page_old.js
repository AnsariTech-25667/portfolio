"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { me } from "@/data/profile";

const PublicationCard = ({ publication, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300 group"
    >
      {/* Publication Header */}
      <div className="flex flex-wrap items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-medium rounded-full">
              {publication.type}
            </span>
            <span className="text-gray-400 text-sm">{publication.date}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {publication.title}
          </h3>
          
          <p className="text-blue-300 font-medium mb-2">{publication.journal}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-gray-300 text-sm">Authors:</span>
            {publication.authors.map((author, idx) => (
              <span 
                key={idx}
                className={`text-sm px-2 py-1 rounded ${
                  author === "Ansari Maaz" 
                    ? "bg-blue-500/20 text-blue-300 font-semibold" 
                    : "text-gray-300"
                }`}
              >
                {author}{idx < publication.authors.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>
        
        {/* Publication Image */}
        <motion.div 
          className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center ml-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-6xl">🤖</div>
        </motion.div>
      </div>

      {/* Abstract */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">Abstract</h4>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          {publication.abstract}
        </p>
        <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
          <p className="text-blue-300 font-medium text-sm">
            <span className="text-white font-semibold">Startup Impact:</span> {publication.highlight}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {publication.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <Link
          href={publication.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Read Full Paper
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Maaz Ansari
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/publications" className="text-blue-400 font-medium">Publications</Link>
              <Link href="/certifications" className="hover:text-blue-400 transition-colors">Certifications</Link>
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
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Publications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge research in <span className="text-blue-400 font-semibold">Computer Vision</span>, 
              <span className="text-purple-400 font-semibold"> Robotics</span>, and 
              <span className="text-cyan-400 font-semibold"> AI Systems</span> — 
              published in internationally recognized, Scopus-indexed journals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid gap-8"
          >
            {me.publications?.map((publication, index) => (
              <PublicationCard 
                key={index}
                publication={publication}
                index={index}
              />
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
              <div className="text-gray-300">Published Papers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">Scopus</div>
              <div className="text-gray-300">Indexed Journal</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">91.78%</div>
              <div className="text-gray-300">System Accuracy</div>
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