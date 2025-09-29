'use client';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ArmViewerCard from './ArmViewer';
import { Code2, Zap, Star, TrendingUp, Rocket, Award, Target, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MotionDiv = reduceMotion ? 'div' : motion.div;
  const [activeFilter, setActiveFilter] = useState('all');

  const featuredProjects = projects.slice(0, 4); // Top 4 flagship projects
  const otherProjects = projects.slice(4);

  const impactMetrics = [
    { icon: Code2, label: 'Production Apps', value: '9+', color: 'text-blue-400' },
    { icon: Star, label: 'Technologies', value: '15+', color: 'text-purple-400' },
    { icon: TrendingUp, label: 'GitHub Repos', value: '25+', color: 'text-emerald-400' },
    { icon: Globe, label: 'Live Demos', value: '100%', color: 'text-cyan-400' }
  ];

  const projectCategories = [
    { id: 'all', label: 'All Projects', icon: Rocket },
    { id: 'ai', label: 'AI-Powered', icon: Zap },
    { id: 'fullstack', label: 'Full-Stack', icon: Code2 },
    { id: 'enterprise', label: 'Enterprise', icon: Award }
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-24 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25 hover:rotate-12 transition-all duration-500">
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          <p className="text-2xl text-neutral-200 dark:text-neutral-200 leading-relaxed mb-8 drop-shadow-sm">
            Production-ready applications showcasing full-stack expertise, AI integration, and scalable architecture
          </p>
          
          {/* Impact Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/10 dark:bg-neutral-800/70 backdrop-blur-xl rounded-xl p-4 border border-white/20 dark:border-neutral-600/50 hover:scale-110 transition-all duration-300 shadow-lg">
                    <Icon className={`w-8 h-8 ${metric.color} mx-auto mb-2 group-hover:rotate-12 transition-transform drop-shadow-sm`} />
                    <p className="text-2xl font-bold text-white drop-shadow-sm">{metric.value}</p>
                    <p className="text-sm font-medium text-neutral-200 dark:text-neutral-200">{metric.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white/10 dark:bg-neutral-800/50 text-neutral-200 dark:text-neutral-200 hover:bg-white/20 dark:hover:bg-neutral-700/50 border border-white/20 dark:border-neutral-600/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              🚀 Flagship Projects
            </h3>
            <p className="text-lg text-neutral-200 dark:text-neutral-200 drop-shadow-sm">
              Production applications demonstrating enterprise-level capabilities
            </p>
          </div>
          
          <div className="grid gap-8 md:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="hover-bulge hover-glow group"
              >
                <ProjectCard project={project} featured={true} />
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Additional Projects Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
              ⚡ Additional Projects
            </h3>
            <p className="text-lg text-neutral-200 dark:text-neutral-200 drop-shadow-sm">
              Comprehensive portfolio showcasing diverse technical expertise
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <MotionDiv
                key={index + featuredProjects.length}
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
        </div>
        
        {/* Interactive 3D Robotic Arm Demo - Premium Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              🤖 Research Innovation
            </h3>
            <p className="text-lg text-neutral-200 dark:text-neutral-200 drop-shadow-sm">
              Published research brought to life with interactive 3D visualization
            </p>
          </div>
          
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="group relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Target className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                  Ready to Build Something Amazing?
                </h3>
              </div>
              <p className="text-xl text-neutral-200 dark:text-neutral-200 mb-8 leading-relaxed drop-shadow-sm">
                Let's collaborate on your next groundbreaking project. From concept to deployment, 
                I deliver production-ready solutions that scale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:maazansari25667@gmail.com?subject=Let's Build Something Amazing"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  <Rocket className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Start Project</span>
                </a>
                <a 
                  href="https://github.com/AnsariTech-25667" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 dark:bg-neutral-800/50 text-white font-semibold rounded-2xl border border-white/20 dark:border-neutral-600/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105"
                >
                  <Star className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>View All Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}