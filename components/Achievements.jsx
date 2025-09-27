'use client';
import { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { me } from '@/data/profile';
import SectionHeading from './SectionHeading';
import { Trophy, Award, BookOpen, Briefcase, GraduationCap, Sparkles, Code2, Database, Brain, Globe } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const achievements = [
    { label: 'Projects', value: me.projects.length, icon: Code2, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Certifications', value: me.certifications.length, icon: Award, gradient: 'from-purple-500 to-indigo-500' },
    { label: 'Publications', value: me.publications.length, icon: BookOpen, gradient: 'from-emerald-500 to-teal-500' }
  ];

  const Counter = ({ target, label, icon: Icon, gradient }) => {
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
      <div className="group relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`} />
        <div className="relative card text-center hover-bulge hover-glow bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-slate-600/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl" />
          <div className="relative z-10 p-6">
            <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${gradient} bg-opacity-20 border border-current/20 mb-4`}>
              <Icon className={`w-8 h-8 text-white`} />
            </div>
            <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
              {count}
            </div>
            <div className="text-sm text-neutral-300 font-medium uppercase tracking-wider">
              {label}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="achievements" className="scroll-mt-24 py-24 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
      
      <SectionHeading>Achievements</SectionHeading>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {achievements.map((achievement, index) => (
            <Counter 
              key={index}
              target={achievement.value}
              label={achievement.label}
              icon={achievement.icon}
              gradient={achievement.gradient}
            />
          ))}
        </div>
        
        {/* Enhanced Education Section */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="relative card hover-bulge hover-glow bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-slate-600/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-3xl" />
            
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30">
                  <GraduationCap className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    Education
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-2" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* University Info */}
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                      Vishwakarma Institute of Technology
                      <span className="text-lg">🏛️</span>
                    </h4>
                    <p className="text-xl text-blue-300 font-semibold">
                      Bachelor of Technology (BTech) • Electronics and Telecommunications Engineering
                    </p>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-medium">Jan 2022 – May 2025</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-neutral-300 leading-relaxed">
                      <span className="text-cyan-400 font-semibold">Specialized in modern web technologies</span> and data analytics, with hands-on experience in full-stack development.
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                      <span className="text-purple-400 font-semibold">Focused on building scalable applications</span> using MERN stack, data visualization, and machine learning integration.
                    </p>
                  </div>
                </div>

                {/* Skills Showcase */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Key Skills</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { skill: 'Data Analysis', icon: '📊', color: 'from-blue-500 to-cyan-500' },
                      { skill: 'Full-Stack Development', icon: '💻', color: 'from-purple-500 to-indigo-500' },
                      { skill: 'Python', icon: '🐍', color: 'from-green-500 to-emerald-500' },
                      { skill: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' }
                    ].map((item, i) => (
                      <div key={i} className="group/skill flex items-center gap-3 p-2 rounded-xl hover:bg-slate-700/30 transition-all duration-300">
                        <span className="text-lg">{item.icon}</span>
                        <span className={`font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover/skill:scale-105 transition-transform`}>
                          {item.skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Tech Stack Grid */}
              <div className="mt-8 pt-6 border-t border-slate-600/50">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Tech Stack</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { tech: 'MongoDB', icon: Database, color: 'from-green-500 to-emerald-500' },
                    { tech: 'Express.js', icon: Globe, color: 'from-gray-500 to-slate-500' },
                    { tech: 'React.js', icon: Code2, color: 'from-blue-500 to-cyan-500' },
                    { tech: 'Node.js', icon: Brain, color: 'from-green-600 to-lime-500' }
                  ].map((item, i) => (
                    <div key={i} className="group/tech relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/tech:opacity-20 rounded-xl blur-sm transition-all duration-300`} />
                      <div className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/20 border border-slate-600/30 transition-all duration-300 group-hover/tech:scale-105 backdrop-blur-sm hover:bg-slate-700/30">
                        <item.icon className={`w-4 h-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                        <span className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
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
      </div>
    </section>
  );
}