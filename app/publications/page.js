"use client";

import { me } from '@/data/profile';
import { BookOpen, Award, ExternalLink, Calendar, Building, TrendingUp, Zap, Star } from 'lucide-react';
import { useState } from 'react';

const publicationDescriptions = {
  'AI-Powered Precision Robotic Arm: Real-Time Vision & Intelligent Control': 'Research on developing an intelligent robotic arm system using YOLOv4 for real-time object detection and precise control mechanisms. Achieved 91.78% accuracy with 120ms response time in real-world testing scenarios.'
};

const publicationThemes = {
  0: {
    primary: 'from-emerald-500 to-teal-600',
    secondary: 'from-emerald-50 to-teal-50',
    accent: 'emerald',
    dark: 'from-emerald-900/20 to-teal-900/20',
    icon: BookOpen,
    orbColor: 'bg-emerald-400/20'
  }
};

const impactMetrics = [
  { icon: Award, label: 'Scopus Indexed', value: 'IJISAE Journal', color: 'text-emerald-600 dark:text-emerald-400' },
  { icon: TrendingUp, label: 'Accuracy Rate', value: '91.78%', color: 'text-blue-600 dark:text-blue-400' },
  { icon: Zap, label: 'Response Time', value: '120ms', color: 'text-purple-600 dark:text-purple-400' },
  { icon: Star, label: 'Citation Ready', value: '2024', color: 'text-amber-600 dark:text-amber-400' }
];

export default function PublicationsPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="py-24 min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/25">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Publications
            </h1>
          </div>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Cutting-edge research in AI and robotics, published in prestigious journals
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 dark:from-white/5 dark:to-white/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-xl p-4 border border-white/20 dark:border-neutral-700/50 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{metric.label}</span>
                  </div>
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">{metric.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Publications Grid */}
        <div className="max-w-6xl mx-auto">
          {me.publications.map((pub, index) => {
            const theme = publicationThemes[index] || publicationThemes[0];
            const IconComponent = theme.icon;
            
            return (
              <div 
                key={index}
                className="group relative mb-8 last:mb-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating Orbs */}
                <div className={`absolute -top-4 -left-4 w-24 h-24 ${theme.orbColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse`}></div>
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 ${theme.orbColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse delay-300`}></div>
                
                {/* Main Publication Card */}
                <article className={`relative bg-gradient-to-br ${theme.secondary} dark:${theme.dark} rounded-3xl p-8 border border-white/30 dark:border-neutral-700/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]`}>
                  
                  {/* Header Section */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`p-4 bg-gradient-to-r ${theme.primary} rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
                        {pub.title}
                      </h2>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Building className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                            {pub.venue}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                          <span className="text-neutral-600 dark:text-neutral-400 font-medium">
                            Published {pub.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  {publicationDescriptions[pub.title] && (
                    <div className="mb-8">
                      <div className="bg-white/50 dark:bg-neutral-800/50 rounded-2xl p-6 border border-white/20 dark:border-neutral-700/30 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Research Overview</h3>
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
                          {publicationDescriptions[pub.title]}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Key Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/40 dark:bg-neutral-800/40 rounded-xl p-4 border border-white/20 dark:border-neutral-700/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-semibold text-neutral-900 dark:text-white">Performance</span>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">91.78% accuracy rate</p>
                      </div>
                      <div className="bg-white/40 dark:bg-neutral-800/40 rounded-xl p-4 border border-white/20 dark:border-neutral-700/30">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-semibold text-neutral-900 dark:text-white">Speed</span>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">120ms response time</p>
                      </div>
                      <div className="bg-white/40 dark:bg-neutral-800/40 rounded-xl p-4 border border-white/20 dark:border-neutral-700/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                          <span className="font-semibold text-neutral-900 dark:text-white">Impact</span>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Scopus indexed</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    {pub.link && pub.link !== '#' ? (
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className={`group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${theme.primary} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden`}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                        
                        <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10">Read Full Publication</span>
                      </a>
                    ) : (
                      <button disabled className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-300 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 font-semibold rounded-2xl cursor-not-allowed">
                        <ExternalLink className="w-5 h-5" />
                        <span>Coming Soon</span>
                      </button>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl p-8 backdrop-blur-xl border border-white/20 dark:border-neutral-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg">
              Let's work together on groundbreaking research projects
            </p>
            <a 
              href="mailto:maazansari25667@gmail.com?subject=Research Collaboration"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5" />
              Start Collaboration
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}