'use client';
import { skillCategories } from '@/data/skills';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Zap, TrendingUp, Award, Target } from 'lucide-react';
import SkillGroup from './SkillGroup';

const categoryIcons = {
  'Frontend & Core': Code,
  'Backend & Frameworks': Code,
  'Databases': Database,
  'Cloud & DevOps': Cloud,
  'AI/ML & Analytics': Brain
};

const skillMetrics = [
  { icon: Zap, label: "Tech Stack", value: "15+", color: "text-yellow-300" },
  { icon: TrendingUp, label: "Years Experience", value: "3+", color: "text-green-300" },
  { icon: Award, label: "Certifications", value: "5+", color: "text-purple-300" },
  { icon: Target, label: "Proficiency", value: "Expert", color: "text-cyan-300" }
];

export default function Skills() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MotionDiv = reduceMotion ? 'div' : motion.div;

  return (
    <section id="skills" className="scroll-mt-24 py-24 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Skills & Technologies
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm">
              Full-stack expertise across modern technologies, from AI/ML to cloud infrastructure. 
              Built for scale, optimized for performance, designed for the future.
            </p>
          </MotionDiv>

          {/* Impact Metrics Dashboard */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {skillMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/5 dark:bg-neutral-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-neutral-700/30 hover:border-white/20 dark:hover:border-neutral-600/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                    <p className={`text-2xl font-bold ${metric.color} mb-1 drop-shadow-sm`}>{metric.value}</p>
                    <p className="text-sm font-medium text-neutral-300">{metric.label}</p>
                  </div>
                </div>
              );
            })}
          </MotionDiv>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillCategories).map(([category, skills], index) => {
            const Icon = categoryIcons[category] || Code;
            return (
              <MotionDiv
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <SkillGroup 
                  title={category} 
                  items={skills} 
                  icon={Icon}
                  index={index}
                />
              </MotionDiv>
            );
          })}
        </div>

        {/* Call to Action */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 dark:bg-neutral-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:border-neutral-700/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-neutral-300 mb-6 drop-shadow-sm">
              Let's collaborate on your next groundbreaking project. From concept to deployment, 
              I deliver scalable solutions that drive real business impact.
            </p>
            <a 
              href="#contact" 
              className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
              <span className="relative z-10">Let's Connect</span>
              <span className="text-lg relative z-10">→</span>
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}