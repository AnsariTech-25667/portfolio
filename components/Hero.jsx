"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Rocket, Code, Star, Target, Zap, Globe, Award, TrendingUp, Users, Coffee, Clock, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroMetrics = [
    { label: 'Production Apps', value: '4+', icon: Rocket, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Tech Stack', value: '15+', icon: Code, gradient: 'from-purple-500 to-indigo-500' },
    { label: 'Enterprise Experience', value: '6mo+', icon: Target, gradient: 'from-green-500 to-emerald-500' },
    { label: 'AI Integrations', value: '5+', icon: Star, gradient: 'from-orange-500 to-red-500' }
  ];

  const achievements = [
    { text: 'Full-Stack MERN Expert', icon: CheckCircle, color: 'text-emerald-400' },
    { text: 'Production Apps Shipped', icon: CheckCircle, color: 'text-blue-400' },
    { text: 'AI/ML API Integration', icon: CheckCircle, color: 'text-purple-400' },
    { text: 'Enterprise Experience', icon: CheckCircle, color: 'text-orange-400' }
  ];

  if (!mounted) return null;

  return (
    <section id="home" className="scroll-mt-24 py-32 relative overflow-hidden">
      {/* Epic Floating Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-full blur-3xl opacity-70 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl opacity-70 animate-pulse delay-1000"></div>
      <div className="absolute top-32 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-3xl opacity-70 animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Availability Badge - Top Priority */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/40 rounded-full backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-emerald-400 rounded-full absolute"></div>
            </div>
            <span className="text-emerald-300 font-bold text-sm uppercase tracking-wider">Available Immediately</span>
            <div className="h-4 w-px bg-emerald-400/50"></div>
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-200 font-medium text-sm">Remote/Onsite • Full-time/Internship • Global</span>
          </div>
        </motion.div>

        {/* Premium Hero Content */}
        <div className="grid items-center gap-16 md:grid-cols-[1.2fr_.8fr]">
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 group"
          >
            {/* Main Headline */}
            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-7xl font-black leading-[1.1] mb-6"
              >
                <span className="block text-white drop-shadow-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-200 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-700">
                  Maaz Ansari
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
                  Full-Stack Developer
                </span>
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mt-2">
                  & Software Engineer
                </span>
              </motion.h1>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -right-6 group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-lg animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white animate-pulse" />
                </div>
              </motion.div>
            </div>

            {/* Premium Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-white/5 dark:bg-neutral-800/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed drop-shadow-lg">
                  Building <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text">scalable MERN applications</span> with AI/ML integration that solve real business problems.
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Achievement Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="group/achievement flex items-center gap-3 p-3 rounded-xl bg-white/5 dark:bg-neutral-800/30 border border-white/10 dark:border-neutral-700/30 hover:border-white/20 dark:hover:border-neutral-600/40 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className={`w-5 h-5 ${achievement.color} group-hover/achievement:scale-110 transition-transform duration-300`} />
                    <span className="text-white font-medium text-sm drop-shadow-sm">{achievement.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="group/btn relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-sm"></div>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group/inner inline-flex items-center gap-2"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/inner:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    View Epic Projects
                    <span className="text-lg">↗</span>
                  </span>
                </button>
              </div>
              
              <div className="group/btn relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-indigo-500/50 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-sm"></div>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative bg-white/10 dark:bg-neutral-800/30 backdrop-blur-xl border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group/inner inline-flex items-center gap-2"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/inner:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Let's Connect
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Premium Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center group relative"
          >
            {/* Floating Background Orbs around image */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse delay-300"></div>
            <div className="absolute -top-12 -right-6 w-24 h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse delay-500"></div>
            
            {/* Premium Photo Frame */}
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              
              {/* Middle Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50 blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
              
              {/* Inner Frame */}
              <div className="relative p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl group-hover:scale-105 transition-all duration-500">
                <div className="relative p-2 rounded-full bg-white/10 backdrop-blur-xl">
                  <Image
                    src="/Maaz_Ansari_pic.png"
                    alt="Maaz Ansari - Full-Stack Engineer & AI/ML Expert"
                    width={380}
                    height={460}
                    priority
                    className="relative z-10 rounded-full object-cover w-80 h-96 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-2 border-4 border-white/20"
                  />
                  
                  {/* Floating Achievement Badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="absolute -top-6 -left-6 group/badge"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/40 to-green-500/40 rounded-full blur-lg animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-3 shadow-lg group-hover/badge:scale-110 group-hover/badge:rotate-12 transition-all duration-300">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="absolute -bottom-6 -right-6 group/badge"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/40 to-indigo-500/40 rounded-full blur-lg animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full p-3 shadow-lg group-hover/badge:scale-110 group-hover/badge:rotate-12 transition-all duration-300">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Proven Track Record of
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Exceptional Results</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.article 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Floating Background Orbs */}
                  <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-700 animate-pulse`}></div>
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-700 animate-pulse delay-300`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg text-center">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${metric.gradient} shadow-lg group-hover:rotate-12 transition-all duration-500 mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className={`text-3xl font-black ${metric.gradient.includes('blue') ? 'text-blue-300' : metric.gradient.includes('purple') ? 'text-purple-300' : metric.gradient.includes('green') ? 'text-green-300' : 'text-orange-300'} mb-2 drop-shadow-sm`}>
                      {metric.value}
                    </p>
                    <p className="text-sm font-semibold text-white drop-shadow-sm">{metric.label}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}