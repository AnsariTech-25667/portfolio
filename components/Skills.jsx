'use client';
import { skillCategories } from '@/data/skills';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const categoryIcons = {
  'Frontend & Core': Code,
  'Backend & Frameworks': Code,
  'Databases': Database,
  'Cloud & DevOps': Cloud,
  'AI/ML & Analytics': Brain
};

export default function Skills() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MotionDiv = reduceMotion ? 'div' : motion.div;

  return (
    <section id="skills" className="scroll-mt-24 py-24 relative bg-transparent">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white text-center mb-12 cosmic-glow">Skills & Technologies</h2>
        </MotionDiv>
        
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills], index) => {
            const Icon = categoryIcons[category] || Code;
            return (
              <AnimatedCard key={category} delay={index * 0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800/40">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-chip"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}