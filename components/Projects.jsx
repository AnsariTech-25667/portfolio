'use client';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ArmViewerCard from './ArmViewer';
import Section from '@/components/ui/Section';

export default function Projects() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MotionDiv = reduceMotion ? 'div' : motion.div;

  return (
    <Section 
      id="projects" 
      title="Projects" 
      className="scroll-mt-24 py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover-bulge hover-glow"
            >
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </div>
        
        {/* Robotic Arm 3D Demo Card - moved to bottom */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hover-bulge hover-glow"
        >
          <ArmViewerCard />
        </MotionDiv>
      </div>
    </Section>
  );
}