'use client';
import { projects } from '@/data/projects';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import ArmViewerCard from './ArmViewer';

export default function Projects() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MotionDiv = reduceMotion ? 'div' : motion.div;

  return (
    <section id="projects" className="scroll-mt-24 py-24 relative">
      <div className="container mx-auto px-4">
        <div className="section p-8 hover-glow">
        <h2 className="headline section-title text-center mb-12">Projects</h2>
        
        {/* Robotic Arm 3D Demo Card */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <ArmViewerCard />
        </MotionDiv>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <Chip key={idx} variant="outline" size="sm">
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}

              <div className="flex gap-3">
                <Button 
                  variant="secondary"
                  href={project.codeUrl}
                  className="flex-1 justify-center"
                  iconLeft={<Github className="w-4 h-4" />}
                >
                  Code
                </Button>
                <Button
                  variant="primary"
                  href={project.demoUrl}
                  className="flex-1 justify-center"
                  iconLeft={<ExternalLink className="w-4 h-4" />}
                >
                  Demo
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}