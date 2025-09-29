"use client";

import { Chip } from "@/components/ui/Chip";
import SectionHeading from './SectionHeading';
import { Code, Zap, Cloud, Sparkles, Users, Rocket, Star, Building, CheckCircle, Trophy, TrendingUp, Code2, Award, GitBranch, Lock, Globe, Brain, Monitor, Server, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('expertise');

  const coreStrengths = [
    {
      title: 'Full-Stack MERN Expert',
      description: 'Production-ready applications with MongoDB, Express.js, React, Node.js + Next.js, TypeScript. Shipped PromptPilot, NovaDraft, SyncSlate, FinSight-AI.',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      projects: '4+ Production Apps',
      skills: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Docker & CI/CD', 'AWS & Vercel']
    },
    {
      title: 'AI Integration & Enterprise Systems',
      description: 'OpenAI & Gemini APIs integration, enterprise ASP.NET development at Softmaque. Power BI, data analytics, cloud deployment strategies.',
      icon: Zap,
      gradient: 'from-purple-500 to-orange-500',
      color: 'from-purple-500 to-orange-500',
      bgColor: 'from-purple-500/20 to-orange-500/20',
      projects: '5+ AI Integrations | Enterprise Experience',
      skills: ['OpenAI & Gemini APIs', 'ASP.NET Enterprise', 'Power BI & Tableau', 'Python Analytics', 'SQL Server', 'Data Visualization', 'Cloud Architecture', 'Performance Optimization']
    }
  ];

  const achievements = [
    { icon: Trophy, value: "91.78%", label: "AI Model Accuracy", color: "text-yellow-400" },
    { icon: Zap, value: "120ms", label: "API Response Time", color: "text-blue-400" },
    { icon: TrendingUp, value: "4", label: "Production Apps", color: "text-emerald-400" },
    { icon: Star, value: "Scopus", label: "Published Research", color: "text-purple-400" }
  ];

  const techStack = [
    { name: "React/Next.js", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "Node.js/Express", level: 92, color: "from-green-400 to-green-600" },
    { name: "MongoDB/PostgreSQL", level: 88, color: "from-emerald-400 to-emerald-600" },
    { name: "TypeScript", level: 85, color: "from-indigo-400 to-indigo-600" },
    { name: "Python/AI", level: 82, color: "from-purple-400 to-purple-600" },
    { name: "AWS/Docker", level: 78, color: "from-orange-400 to-orange-600" }
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25 hover:rotate-12 transition-all duration-500">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <p className="text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
            Full-Stack Engineer • MERN Stack Expert • AI/ML Developer
          </p>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-xl p-4 border border-white/20 dark:border-neutral-700/50 hover:scale-110 transition-all duration-300">
                    <Icon className={`w-8 h-8 ${achievement.color} mx-auto mb-2 group-hover:rotate-12 transition-transform`} />
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{achievement.value}</p>
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{achievement.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'expertise', label: 'Technical Expertise', icon: Code2 },
              { id: 'experience', label: 'Experience', icon: Trophy },
              { id: 'skills', label: 'Skill Levels', icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                      : 'bg-white/10 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:bg-white/20 dark:hover:bg-neutral-700/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="relative">
            {activeTab === 'expertise' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                {/* Compressed 3-Box Grid - Bright & Visible */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Box 1: Full-Stack MERN */}
                  <div className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-300/60 dark:border-gray-600/60 hover:border-blue-400/80 dark:hover:border-blue-400/80 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative text-center">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-4">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                        Full-Stack MERN
                      </h3>
                      <div className="bg-blue-50/80 dark:bg-blue-900/30 rounded-lg p-3 mb-4">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">4+ Production Apps Shipped</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        MongoDB, Express.js, React, Node.js + Next.js, TypeScript. Built PromptPilot, NovaDraft, SyncSlate, FinSight-AI.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {['React/Next.js', 'Node.js/Express', 'MongoDB', 'TypeScript'].map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Box 2: AI Integration */}
                  <div className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-300/60 dark:border-gray-600/60 hover:border-purple-400/80 dark:hover:border-purple-400/80 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative text-center">
                      <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                        AI Integration
                      </h3>
                      <div className="bg-purple-50/80 dark:bg-purple-900/30 rounded-lg p-3 mb-4">
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">5+ AI Integrations</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        OpenAI & Gemini APIs integration with intelligent features like content generation and data analysis.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {['OpenAI APIs', 'Gemini APIs', 'Python/AI', 'Data Analytics'].map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Box 3: Enterprise & Cloud */}
                  <div className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-300/60 dark:border-gray-600/60 hover:border-emerald-400/80 dark:hover:border-emerald-400/80 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative text-center">
                      <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-4">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                        Enterprise & Cloud
                      </h3>
                      <div className="bg-emerald-50/80 dark:bg-emerald-900/30 rounded-lg p-3 mb-4">
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Softmaque Experience</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        ASP.NET enterprise development, AWS/Vercel deployment, Docker containerization, CI/CD pipelines.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {['ASP.NET', 'AWS/Vercel', 'Docker', 'CI/CD'].map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="animate-in fade-in duration-500 space-y-8">
                {/* Comprehensive Journey Overview */}
                <div className="bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">
                    Professional Journey & Technical Evolution
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-100 dark:text-neutral-100 leading-relaxed text-lg mb-6 drop-shadow-sm">
                      My development journey began in <span className="text-blue-300 font-semibold bg-blue-500/20 px-2 py-1 rounded-lg">2022</span> with a passion for creating digital solutions that make a real impact. What started as curiosity about web technologies quickly evolved into a comprehensive expertise across the full technology stack. I'm completely <span className="text-purple-300 font-semibold bg-purple-500/20 px-2 py-1 rounded-lg">self-taught</span>, learning through hands-on projects, open-source contributions, and continuous experimentation with cutting-edge technologies.
                    </p>
                    <p className="text-neutral-100 dark:text-neutral-100 leading-relaxed text-lg mb-6 drop-shadow-sm">
                      My approach to development is <span className="text-emerald-300 font-semibold bg-emerald-500/20 px-2 py-1 rounded-lg">research-driven and user-centric</span>. I don't just code; I architect solutions that scale, optimize for performance, and prioritize user experience. This methodology led me to publish research in a <span className="text-yellow-300 font-semibold bg-yellow-500/20 px-2 py-1 rounded-lg">Scopus-indexed journal</span> and secure a <span className="text-orange-300 font-semibold bg-orange-500/20 px-2 py-1 rounded-lg">Software Engineer internship at Softmaque Consulting</span>, where I built enterprise-grade systems, bridging academic research with practical software development.
                    </p>
                    <p className="text-neutral-100 dark:text-neutral-100 leading-relaxed text-lg drop-shadow-sm">
                      Today, I specialize in building <span className="text-cyan-300 font-semibold bg-cyan-500/20 px-2 py-1 rounded-lg">production-ready applications</span> that leverage modern web technologies, AI/ML capabilities, and cloud-native architectures. My portfolio demonstrates not just technical skill, but the ability to deliver complete, polished products that solve real-world problems.
                    </p>
                  </div>
                </div>

                {/* 3 Compressed Professional Experience Boxes */}
                <div className="grid md:grid-cols-3 gap-4">
                  
                  {/* Box 1: Self-Taught Developer */}
                  <div className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-5 border border-gray-300/60 dark:border-gray-600/60 hover:border-blue-400/80 transition-all duration-300 hover:scale-105 shadow-lg">
                    <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative text-center">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-3">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Self-Taught Full-Stack</h4>
                      <div className="bg-blue-50/80 dark:bg-blue-900/30 rounded-lg p-2 mb-3">
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">2022-Present | 3+ Years</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Mastered MERN stack through hands-on projects. Built production apps while studying CS fundamentals.
                      </p>
                    </div>
                  </div>

                  {/* Box 2: Production Impact */}
                  <div className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-5 border border-gray-300/60 dark:border-gray-600/60 hover:border-emerald-400/80 transition-all duration-300 hover:scale-105 shadow-lg">
                    <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative text-center">
                      <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-3">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">4+ Production Apps</h4>
                      <div className="bg-emerald-50/80 dark:bg-emerald-900/30 rounded-lg p-2 mb-3">
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Live Users & Revenue</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        PromptPilot, NovaDraft, SyncSlate, FinSight-AI - all deployed with real user traction.
                      </p>
                    </div>
                  </div>

                  {/* Box 3: Published Research */}
                  <div className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-5 border border-gray-300/60 dark:border-gray-600/60 hover:border-purple-400/80 transition-all duration-300 hover:scale-105 shadow-lg">
                    <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative text-center">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-3">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Published Research</h4>
                      <div className="bg-purple-50/80 dark:bg-purple-900/30 rounded-lg p-2 mb-3">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Scopus Journal</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        AI robotic systems achieving 91.78% accuracy. Theory + practice combined.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="animate-in fade-in duration-500">
                <div className="bg-white/5 dark:bg-neutral-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 dark:border-neutral-700/50">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                      Technical Proficiency - Industry-Ready
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Production-proven tech stack for scaling startups
                    </p>
                  </div>

                  {/* 3 Compressed Industry-Optimized Skills Boxes */}
                  <div className="grid md:grid-cols-3 gap-6">

                    {/* Box 1: Full-Stack Mastery */}
                    <div className="group relative bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-400/80 transition-all duration-300 hover:scale-105">
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-4">
                          <Code className="w-7 h-7 text-white" />
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">Full-Stack MERN</h4>
                        
                        <div className="space-y-2 text-center">
                          <div className="bg-blue-100/60 dark:bg-blue-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">React 19 + Next.js 15</span>
                          </div>
                          <div className="bg-green-100/60 dark:bg-green-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Node.js + MongoDB</span>
                          </div>
                          <div className="bg-purple-100/60 dark:bg-purple-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">TypeScript + Tailwind</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Box 2: AI/ML Integration */}
                    <div className="group relative bg-gradient-to-br from-emerald-50/80 to-cyan-50/80 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-400/80 transition-all duration-300 hover:scale-105">
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative">
                        <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-4">
                          <Brain className="w-7 h-7 text-white" />
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">AI/ML Production</h4>
                        
                        <div className="space-y-2 text-center">
                          <div className="bg-emerald-100/60 dark:bg-emerald-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">OpenAI GPT-4 APIs</span>
                          </div>
                          <div className="bg-cyan-100/60 dark:bg-cyan-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Computer Vision</span>
                          </div>
                          <div className="bg-teal-100/60 dark:bg-teal-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">91.78% Accuracy</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Box 3: Cloud & DevOps */}
                    <div className="group relative bg-gradient-to-br from-orange-50/80 to-red-50/80 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-700/50 hover:border-orange-400/80 transition-all duration-300 hover:scale-105">
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:rotate-12 transition-all duration-500 mx-auto w-fit mb-4">
                          <Cloud className="w-7 h-7 text-white" />
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">Cloud Deployment</h4>
                        
                        <div className="space-y-2 text-center">
                          <div className="bg-orange-100/60 dark:bg-orange-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">AWS + Vercel</span>
                          </div>
                          <div className="bg-red-100/60 dark:bg-red-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-red-700 dark:text-red-300">Docker + CI/CD</span>
                          </div>
                          <div className="bg-pink-100/60 dark:bg-pink-800/30 rounded-lg p-2">
                            <span className="text-sm font-semibold text-pink-700 dark:text-pink-300">Sub-120ms APIs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Availability & Location Details */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Availability Status */}
            <div className="group relative bg-gradient-to-br from-emerald-50/80 to-green-50/80 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6 border border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-400/80 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full absolute"></div>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Available Now</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Rocket className="w-4 h-4" />
                  <span>Full-time & Internship roles</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <span>Immediate start available</span>
                </div>
              </div>
            </div>

            {/* Location & Work Preferences */}
            <div className="group relative bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-400/80 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-blue-500" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Work Flexibility</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Building className="w-4 h-4" />
                  <span>Onsite/Hybrid preferred</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Globe className="w-4 h-4" />
                  <span>Open to international remote</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Monitor className="w-4 h-4" />
                  <span>Adaptable to company needs</span>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="group relative bg-gradient-to-br from-purple-50/80 to-indigo-50/80 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400/80 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-purple-500" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Based in India</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <span>📍</span>
                  <span>Pune, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <span>✈️</span>
                  <span>Ready to relocate</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <span>🌍</span>
                  <span>Visa sponsorship welcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Industry Ready */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/60 shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Ready to Build the Future
                </h3>
              </div>
              <p className="text-xl text-white dark:text-white mb-8 leading-relaxed drop-shadow-lg font-medium">
                Full-stack developer with proven ability to ship production-grade applications. 
                Ready to scale your vision with cutting-edge technology and exceptional execution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:maazansari25667@gmail.com?subject=Let's Build Something Amazing"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  <Star className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Let's Collaborate</span>
                </a>
                <a 
                  href="https://drive.google.com/file/d/1JraG_4jz4NqKQRySN9pGkLDz5-Ajl9XY/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 dark:bg-neutral-800/50 text-neutral-900 dark:text-white font-semibold rounded-2xl border border-white/20 dark:border-neutral-700/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
