'use client';
import { skillCategories } from '@/data/skills';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import SkillGroup from './SkillGroup';
import Section from '@/components/ui/Section';

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
    <Section 
      id="skills" 
      title="Skills & Technologies" 
      className="scroll-mt-24 py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills], index) => {
            const Icon = categoryIcons[category] || Code;
            return (
              <MotionDiv
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover-bulge hover-glow"
              >
                <SkillGroup 
                  title={category} 
                  items={skills} 
                  icon={Icon}
                />
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </Section>
  );
}