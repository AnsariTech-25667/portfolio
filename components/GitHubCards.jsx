import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Calendar, Code, Zap, Rocket, Database, Globe, Brain } from 'lucide-react';

const getProjectDetails = (repoName) => {
  const details = {
    'PromptPilot': {
      description: 'AI-powered chat platform with OpenAI integration and real-time messaging capabilities. Features intelligent prompt engineering, conversation history management, and seamless user experience. Built with Next.js App Router, Clerk authentication, MongoDB with Mongoose ODM, and server-side API routes for optimal performance.',
      features: ['OpenAI Integration', 'Real-time Chat', 'Prompt Library', 'User Management'],
      techStack: ['Next.js', 'OpenAI', 'MongoDB', 'Clerk'],
      icon: Brain
    },
    'NovaDraft': {
      description: 'Comprehensive content creation suite with AI assistance and collaborative editing tools. Streamlines creative workflow with smart templates, version control, and team collaboration features. Includes Cloudinary integration for media management, Neon PostgreSQL for data persistence, and Express.js backend architecture.',
      features: ['AI Writing Assistant', 'Team Collaboration', 'Media Management', 'Version Control'],
      techStack: ['React', 'Vite', 'PostgreSQL', 'Cloudinary'],
      icon: Globe
    },
    'syncslate': {
      description: 'Advanced scheduling system with calendar integration and smart notifications. Offers seamless appointment management, automated reminder system, and cross-platform synchronization. Features conflict resolution, buffer time management, and ICS email integration with Google Calendar API support.',
      features: ['Smart Scheduling', 'Calendar Sync', 'Automated Reminders', 'Conflict Resolution'],
      techStack: ['Next.js', 'Prisma', 'Calendar API', 'TypeScript'],
      icon: Calendar
    },
    'FinSight-AI-Finance-Platform': {
      description: 'Intelligent finance tracking application with AI-powered insights and comprehensive data visualization. Provides smart budget analysis, automated expense categorization, and predictive financial planning. Features OCR receipt scanning, machine learning categorization, and interactive dashboard with real-time analytics.',
      features: ['OCR Receipt Scan', 'AI Categorization', 'Predictive Analytics', 'Real-time Dashboard'],
      techStack: ['Next.js', 'Python', 'MongoDB', 'AI/ML'],
      icon: Database
    }
  };
  
  return details[repoName] || {
    description: 'Innovative full-stack application showcasing modern development practices and cutting-edge technologies. Built with scalable architecture, comprehensive testing, and production-ready deployment strategies.',
    features: ['Modern Architecture', 'Scalable Design', 'Production Ready', 'Best Practices'],
    techStack: ['JavaScript', 'Node.js', 'Database', 'Cloud'],
    icon: Code
  };
};

const getLanguageTheme = (language) => {
  const themes = {
    'JavaScript': { bg: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/30', text: 'text-yellow-300' },
    'TypeScript': { bg: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/30', text: 'text-blue-300' },
    'Python': { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-300' },
    'React': { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30', text: 'text-cyan-300' }
  };
  
  return themes[language] || { bg: 'from-gray-500/20 to-slate-500/20', border: 'border-gray-500/30', text: 'text-gray-300' };
};

export function RepoCard({ repo }) {
  const projectDetails = getProjectDetails(repo.name);
  const languageTheme = getLanguageTheme(repo.language);
  const Icon = projectDetails.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Floating Background Orbs */}
      <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r ${languageTheme.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse`}></div>
      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${languageTheme.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse delay-300`}></div>
      
      {/* Main Card */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="block relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg h-full flex flex-col"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-1">
            <div className={`p-3 bg-gradient-to-r ${languageTheme.bg} rounded-2xl ${languageTheme.border} border group-hover:rotate-12 transition-all duration-500`}>
              <Icon className={`w-6 h-6 ${languageTheme.text}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg mb-2">
                {repo.name}
              </h3>
              {repo.language && (
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${languageTheme.text} bg-white/10 px-3 py-1 rounded-xl border ${languageTheme.border}`}>
                  <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
                  {repo.language}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-cyan-300 transition-colors duration-300" />
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 mb-6">
          <p className="text-neutral-200 leading-relaxed mb-4 drop-shadow-sm">
            {projectDetails.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Key Features</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {projectDetails.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group/feature"
              >
                <div className="relative bg-white/5 dark:bg-neutral-800/30 backdrop-blur-sm rounded-lg p-2 border border-white/10 dark:border-neutral-700/30 hover:border-white/20 dark:hover:border-neutral-600/40 transition-all duration-300 text-center overflow-hidden">
                  {/* Feature Shimmer Effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/feature:translate-x-[200%] transition-transform duration-700"></div>
                  
                  <span className="relative z-10 text-xs font-medium text-neutral-300 group-hover/feature:text-cyan-200 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectDetails.techStack.map((tech, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/10 text-neutral-300 border border-white/20 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-neutral-700/30">
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            {repo.stargazers_count !== undefined && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{repo.stargazers_count}</span>
              </div>
            )}
            {repo.forks_count !== undefined && (
              <div className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                <span>{repo.forks_count}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300 font-medium">
            <span>Explore Project</span>
            <motion.div
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export function StatCard({ label, value, icon: Icon, gradient }) {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
      <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} bg-opacity-20 mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <p className={`text-3xl font-bold ${gradient.includes('yellow') ? 'text-yellow-300' : gradient.includes('green') ? 'text-green-300' : 'text-blue-300'} mb-1 drop-shadow-sm`}>
          {value ?? 0}
        </p>
        <p className="text-sm font-medium text-neutral-300">{label}</p>
      </div>
    </div>
  );
}