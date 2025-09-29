'use client';
import { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { me } from '@/data/profile';
import { Trophy, Award, BookOpen, Briefcase, GraduationCap, Sparkles, Code2, Database, Brain, Globe, Zap, Target, TrendingUp, Rocket } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const achievements = [
    { label: 'Projects', value: me.projects.length, icon: Code2, gradient: 'from-blue-500 to-cyan-500', description: 'Production-Ready Applications' },
    { label: 'Certifications', value: me.certifications.length, icon: Award, gradient: 'from-purple-500 to-indigo-500', description: 'Professional Certifications' },
    { label: 'Publications', value: me.publications.length, icon: BookOpen, gradient: 'from-emerald-500 to-teal-500', description: 'Research Publications' }
  ];

  const impactMetrics = [
    { label: 'GitHub Repos', value: '25+', icon: Target, gradient: 'from-yellow-500 to-orange-500' },
    { label: 'AI Accuracy', value: '91.78%', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500' },
    { label: 'Production Apps', value: '4 Live', icon: Zap, gradient: 'from-indigo-500 to-purple-500' },
    { label: 'Enterprise XP', value: '2024', icon: Rocket, gradient: 'from-pink-500 to-rose-500' }
  ];

  const Counter = ({ target, label, icon: Icon, gradient, description }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView && !reduceMotion) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 50);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 50);
        
        return () => clearInterval(timer);
      } else {
        setCount(target);
      }
    }, [isInView, target]);

    return (
      <article className="group relative">
        {/* Floating Background Orbs */}
        <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-700 animate-pulse`}></div>
        <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-700 animate-pulse delay-300`}></div>
        
        {/* Main Card */}
        <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl shadow-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} shadow-lg group-hover:rotate-12 transition-all duration-500 mb-4`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            
            <div className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-3 drop-shadow-lg`}>
              {count}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
              {label}
            </h3>
            
            <p className="text-sm text-neutral-300 font-medium drop-shadow-sm">
              {description}
            </p>
          </div>
        </div>
      </article>
    );
  };

  const MetricCard = ({ label, value, icon: Icon, gradient }) => (
    <div className="group relative">
      <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
      <div className="relative bg-white/5 dark:bg-neutral-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-neutral-700/30 hover:border-white/20 dark:hover:border-neutral-600/40 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} bg-opacity-20 mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <p className={`text-2xl font-bold ${gradient.includes('yellow') ? 'text-yellow-300' : gradient.includes('green') ? 'text-green-300' : gradient.includes('indigo') ? 'text-indigo-300' : 'text-pink-300'} mb-1 drop-shadow-sm`}>
          {value}
        </p>
        <p className="text-sm font-medium text-neutral-300">{label}</p>
      </div>
    </div>
  );

  return (
    <section id="achievements" className="scroll-mt-24 py-24 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Achievements & Impact
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm">
              Quantified results and professional milestones showcasing technical excellence, 
              innovation, and commitment to delivering world-class solutions.
            </p>
          </motion.div>
        </div>

        {/* Main Achievements Grid */}
        <div ref={ref} className="grid gap-8 md:grid-cols-3 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Counter 
                target={achievement.value}
                label={achievement.label}
                icon={achievement.icon}
                gradient={achievement.gradient}
                description={achievement.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4 drop-shadow-lg">
              Impact & Performance Metrics
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MetricCard {...metric} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced Education Section */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative group max-w-6xl mx-auto scroll-mt-24"
        >
          {/* Floating Orbs for Education */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse delay-300"></div>
          
          <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg mb-2">
                  Education
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* University Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white flex items-center gap-3 drop-shadow-sm">
                    Vishwakarma Institute of Technology
                    <span className="text-2xl">🏛️</span>
                  </h4>
                  
                  <div className="bg-white/5 dark:bg-neutral-800/30 rounded-xl p-4 border border-white/10 dark:border-neutral-700/30">
                    <p className="text-xl text-blue-300 font-semibold mb-2 drop-shadow-sm">
                      Bachelor of Technology (BTech)
                    </p>
                    <p className="text-lg text-purple-300 font-medium mb-3">
                      Electronics and Telecommunications Engineering
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3 text-neutral-300">
                        <span className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-medium">Jan 2022 – May 2025</span>
                        </span>
                      </div>
                      <div className="bg-yellow-500/20 px-3 py-1 rounded-lg border border-yellow-500/30">
                        <span className="text-yellow-300 font-bold text-lg">GPA: 8</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 dark:bg-neutral-800/30 rounded-xl p-4 border border-white/10 dark:border-neutral-700/30">
                    <p className="text-neutral-200 leading-relaxed mb-3">
                      <span className="text-cyan-400 font-semibold">Successfully graduated</span> with B.Tech degree in May 2025, 
                      specializing in Electronics & Telecommunications with hands-on expertise in modern web technologies and data analytics.
                    </p>
                    <p className="text-neutral-200 leading-relaxed">
                      <span className="text-purple-400 font-semibold">Fresh graduate with production experience</span> - shipped 4+ applications 
                      during academic journey (2022-2025), demonstrating MERN stack expertise and AI/ML integration skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills & Tech Stack */}
              <div className="space-y-6">
                {/* Key Skills */}
                <div className="bg-white/5 dark:bg-neutral-800/30 rounded-xl p-6 border border-white/10 dark:border-neutral-700/30">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold text-lg">Core Expertise</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { skill: 'Data Analysis', icon: '📊', color: 'from-blue-500 to-cyan-500' },
                      { skill: 'Full-Stack Dev', icon: '💻', color: 'from-purple-500 to-indigo-500' },
                      { skill: 'Python/AI', icon: '🤖', color: 'from-green-500 to-emerald-500' },
                      { skill: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' }
                    ].map((item, i) => (
                      <div key={i} className="group/skill relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/skill:opacity-20 rounded-xl blur-sm transition-all duration-300`}></div>
                        <div className="relative flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover/skill:scale-105">
                          <span className="text-xl">{item.icon}</span>
                          <span className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="bg-white/5 dark:bg-neutral-800/30 rounded-xl p-6 border border-white/10 dark:border-neutral-700/30">
                  <div className="flex items-center gap-2 mb-6">
                    <Code2 className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-lg">Technology Stack</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { tech: 'MongoDB', icon: Database, color: 'from-green-500 to-emerald-500' },
                      { tech: 'Express.js', icon: Globe, color: 'from-gray-500 to-slate-500' },
                      { tech: 'React.js', icon: Code2, color: 'from-blue-500 to-cyan-500' },
                      { tech: 'Node.js', icon: Brain, color: 'from-green-600 to-lime-500' }
                    ].map((item, i) => (
                      <div key={i} className="group/tech relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/tech:opacity-20 rounded-xl blur-sm transition-all duration-300`}></div>
                        <div className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover/tech:scale-105 hover:border-white/20">
                          <item.icon className={`w-4 h-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                          <span className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.tech}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}