import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink, Zap, Star, TrendingUp, Code2, Database, Brain, Cloud } from 'lucide-react';

const getProjectIcon = (tags) => {
  if (tags.some(tag => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('openai'))) return Brain;
  if (tags.some(tag => tag.toLowerCase().includes('mern') || tag.toLowerCase().includes('full'))) return Code2;
  if (tags.some(tag => tag.toLowerCase().includes('database') || tag.toLowerCase().includes('sql'))) return Database;
  if (tags.some(tag => tag.toLowerCase().includes('cloud') || tag.toLowerCase().includes('aws'))) return Cloud;
  return Star;
};

const getProjectTheme = (index) => {
  const themes = [
    { primary: 'from-blue-500 to-cyan-500', bg: 'from-blue-500/10 to-cyan-500/10', accent: 'blue' },
    { primary: 'from-purple-500 to-pink-500', bg: 'from-purple-500/10 to-pink-500/10', accent: 'purple' },
    { primary: 'from-emerald-500 to-teal-500', bg: 'from-emerald-500/10 to-teal-500/10', accent: 'emerald' },
    { primary: 'from-orange-500 to-red-500', bg: 'from-orange-500/10 to-red-500/10', accent: 'orange' },
    { primary: 'from-indigo-500 to-purple-500', bg: 'from-indigo-500/10 to-purple-500/10', accent: 'indigo' },
    { primary: 'from-cyan-500 to-blue-500', bg: 'from-cyan-500/10 to-blue-500/10', accent: 'cyan' },
  ];
  return themes[index % themes.length];
};

export default function ProjectCard({ project, featured = false }) {
  const Icon = getProjectIcon(project.tags || []);
  const theme = getProjectTheme(project.title.length); // Use title length for consistent theming
  const isPortfolio = project.title.includes('Portfolio Website');
  
  return (
    <article className={`group relative ${featured ? 'h-full' : ''} ${isPortfolio ? 'ring-2 ring-gradient-to-r ring-cyan-400/50 ring-offset-2 ring-offset-transparent' : ''}`}>
      {/* Floating Orbs */}
      <div className={`absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r ${theme.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse`}></div>
      <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r ${theme.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse delay-300`}></div>
      
      {/* Main Card */}
      <div className={`relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full flex flex-col shadow-lg ${featured ? 'min-h-[400px]' : 'min-h-[350px]'}`}>
        
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`p-3 bg-gradient-to-r ${isPortfolio ? 'from-cyan-400 to-blue-500' : theme.primary} rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500 flex-shrink-0 ${isPortfolio ? 'animate-pulse' : ''}`}>
            <Icon className="w-6 h-6 text-white drop-shadow-lg" />
          </div>
          <div className="flex-1 min-w-0">
            {isPortfolio && (
              <div className="flex items-center gap-2 mb-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-bold text-green-300 bg-green-500/20 px-2 py-1 rounded-full">LIVE • YOU ARE HERE</span>
              </div>
            )}
            <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold ${isPortfolio ? 'bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent' : 'text-white'} mb-2 transition-all duration-300 drop-shadow-lg line-clamp-2`}>
              {project.title}
            </h3>
            {featured && !isPortfolio && (
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-1 rounded-lg">Featured</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className={`${featured ? 'text-base' : 'text-sm'} text-neutral-100 dark:text-neutral-100 leading-relaxed mb-6 drop-shadow-sm`}>
            {project.description}
          </p>

          {/* Special Portfolio Metrics Display */}
          {isPortfolio && project.metrics && (
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-3 border border-cyan-400/30">
                  <div className="text-xs text-cyan-300 font-semibold mb-1">Performance</div>
                  <div className="text-lg font-bold text-white">{project.metrics.performance}</div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-3 border border-emerald-400/30">
                  <div className="text-xs text-emerald-300 font-semibold mb-1">Components</div>
                  <div className="text-lg font-bold text-white">{project.metrics.features}</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 border border-purple-400/30">
                  <div className="text-xs text-purple-300 font-semibold mb-1">Stack</div>
                  <div className="text-xs font-bold text-white">{project.metrics.tech}</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-400/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-yellow-300">Meta Achievement</span>
                </div>
                <p className="text-xs text-white font-medium">
                  Self-built portfolio using Next.js 15 App Router, React 19, streaming API endpoints, Framer Motion animations, 
                  and Web Speech API integration. Demonstrates real-world component architecture and modern development workflows.
                </p>
              </div>
            </div>
          )}

          {/* Enhanced Project Insights for Featured */}
          {featured && !isPortfolio && (
            <div className="mb-6">
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white/5 dark:bg-neutral-800/30 rounded-xl p-4 border border-white/10 dark:border-neutral-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-blue-300" />
                    <span className="text-sm font-semibold text-white">Architecture</span>
                  </div>
                  <p className="text-xs text-neutral-200 dark:text-neutral-200">
                    {project.title.includes('AI') || project.tags?.includes('OpenAI') ? 
                      'AI-powered with intelligent features and machine learning integration' :
                    project.tags?.includes('MERN') ? 
                      'Full-stack MERN architecture with scalable backend services' :
                    'Modern web application with responsive design and optimal performance'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack Tags */}
        {project.tags && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r ${theme.bg} border border-white/20 dark:border-neutral-600/30 text-white backdrop-blur-sm shadow-sm`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {isPortfolio ? (
            <>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center gap-2 px-4 py-3 flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">View Source</span>
              </a>
              <div className="group/btn relative inline-flex items-center justify-center gap-2 px-4 py-3 flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg cursor-default">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse relative z-10"></div>
                <span className="relative z-10">Live Now!</span>
              </div>
            </>
          ) : (
            <>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center gap-2 px-4 py-3 flex-1 bg-white/10 dark:bg-neutral-800/50 text-white font-semibold rounded-2xl border border-white/20 dark:border-neutral-600/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Code</span>
              </a>
              
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn relative inline-flex items-center justify-center gap-2 px-4 py-3 flex-1 bg-gradient-to-r ${theme.primary} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">{featured ? 'Live Demo' : 'Demo'}</span>
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}