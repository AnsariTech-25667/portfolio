'use client';
import { me } from '@/data/profile';
import { motion } from 'framer-motion';
import { Building2, Calendar, Code, TrendingUp, Zap, Rocket, Star } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 relative overflow-hidden">
      {/* Bright Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-cyan-50/80 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-cyan-500/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4"
          >
            Professional Experience
          </motion.h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">Enterprise software development & full-stack implementation</p>
        </div>

        {/* Single Powerful Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
        >
          {/* Floating Success Orbs */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          <div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Company Info */}
            <div className="lg:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    Software Engineer Intern
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">Softmaque Consulting</p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">6 months • 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact & Achievements */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Code, label: 'Enterprise Features', value: '25+', color: 'from-blue-500 to-cyan-500' },
                  { icon: TrendingUp, label: 'QA Efficiency', value: '+60%', color: 'from-green-500 to-emerald-500' },
                  { icon: Zap, label: 'Performance', value: '100%', color: 'from-purple-500 to-indigo-500' },
                  { icon: Star, label: 'Team Impact', value: 'High', color: 'from-orange-500 to-red-500' }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="bg-gray-50/80 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/30 hover:scale-105 transition-all duration-300">
                      <Icon className={`w-6 h-6 mb-2 text-blue-600 dark:text-blue-400`} />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Key Technical Achievement */}
              <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-400/30">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-blue-600" />
                  Enterprise Defect Tracking & Workflow System
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Built scalable ASP.NET system with SQL Server, handling <span className="font-semibold text-blue-600 dark:text-blue-400">500+ daily QA workflows</span>. 
                  Implemented role-based UI, dynamic notifications, and optimized database queries achieving <span className="font-semibold text-green-600 dark:text-green-400">60% performance improvement</span>.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {['ASP.NET', 'C#', 'SQL Server', 'JavaScript', 'HTML/CSS', 'Entity Framework'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Internship Documentation */}
                <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-600/30">
                  <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Official Documentation</h5>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="/documents/softmaque-offer-letter.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 hover:bg-blue-200/80 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-blue-700"
                    >
                      📄 Offer Letter
                    </a>
                    <a 
                      href="/documents/softmaque-completion-certificate.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 hover:bg-green-200/80 dark:bg-green-900/30 dark:hover:bg-green-800/50 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border border-green-200 dark:border-green-700"
                    >
                      🏆 Completion Certificate
                    </a>
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