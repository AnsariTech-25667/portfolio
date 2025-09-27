'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ActivityCalendar from 'react-activity-calendar';
import { Github, ExternalLink, Star, GitFork, Calendar, GitCommit, GitPullRequest, MessageSquare, Eye } from 'lucide-react';

export default function GitHubActivity() {
  const [contributions, setContributions] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      
      const handler = (e) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch contributions and repos in parallel
        const [contributionsRes, reposRes] = await Promise.all([
          fetch('/api/github/contributions'),
          fetch('/api/github/repos'),
        ]);

        if (contributionsRes.ok) {
          const contributionsData = await contributionsRes.json();
          setContributions(contributionsData);
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData.repos || []);
          
          if (reposData.source === 'fallback') {
            setError(reposData.message || 'Using fallback data');
          }
        }
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err);
        setError('Failed to load GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const activityTheme = {
    light: ['#f3f4f6', '#c7d2fe', '#a78bfa', '#8b5cf6', '#7c3aed'],
    dark: ['#1e293b', '#3730a3', '#5b21b6', '#7c2d12', '#dc2626'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: reducedMotion ? {} : {
      scale: 1.03,
      rotateX: 2,
      rotateY: 2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="github" className="scroll-mt-24 py-24 relative bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GitHub Activity
            </h2>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              A glimpse into my coding journey and open source contributions
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            </div>
          ) : (
            <>
              {/* Stats Overview */}
              {contributions && (
                <motion.div variants={itemVariants}>
                  <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/30 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-blue-400">
                          {contributions.total?.toLocaleString() || '0'}
                        </div>
                        <div className="text-sm text-slate-400 flex items-center justify-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Total Contributions
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xl font-bold text-green-400">
                          {contributions.byType?.commits?.toLocaleString() || '0'}
                        </div>
                        <div className="text-sm text-slate-400 flex items-center justify-center gap-1">
                          <GitCommit className="w-4 h-4" />
                          Commits
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xl font-bold text-purple-400">
                          {contributions.byType?.prs?.toLocaleString() || '0'}
                        </div>
                        <div className="text-sm text-slate-400 flex items-center justify-center gap-1">
                          <GitPullRequest className="w-4 h-4" />
                          Pull Requests
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xl font-bold text-orange-400">
                          {contributions.byType?.issues?.toLocaleString() || '0'}
                        </div>
                        <div className="text-sm text-slate-400 flex items-center justify-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          Issues
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xl font-bold text-cyan-400">
                          {contributions.byType?.reviews?.toLocaleString() || '0'}
                        </div>
                        <div className="text-sm text-slate-400 flex items-center justify-center gap-1">
                          <Eye className="w-4 h-4" />
                          Reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Activity Calendar */}
              {contributions?.data && (
                <motion.div variants={itemVariants}>
                  <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/30 mb-8">
                    <h3 className="text-xl font-semibold text-white mb-6">Contribution Heatmap</h3>
                    <div className="overflow-x-auto">
                      <ActivityCalendar
                        data={contributions.data}
                        theme={activityTheme}
                        colorScheme="dark"
                        blockSize={12}
                        blockMargin={2}
                        fontSize={12}
                        hideColorLegend={false}
                        hideMonthLabels={false}
                        hideTotalCount={false}
                        showWeekdayLabels={true}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div variants={itemVariants}>
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 text-amber-200">
                    <p className="text-sm">
                      💡 {error}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Repository Grid */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Latest Repositories
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {repos.map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="glass rounded-xl p-6 h-full hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                        {/* Repository Header */}
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                            {repo.name}
                          </h4>
                          <div className="flex gap-2 text-slate-400">
                            {repo.stargazerCount > 0 && (
                              <div className="flex items-center gap-1 text-xs">
                                <Star className="w-3 h-3" />
                                {repo.stargazerCount}
                              </div>
                            )}
                            {repo.forkCount > 0 && (
                              <div className="flex items-center gap-1 text-xs">
                                <GitFork className="w-3 h-3" />
                                {repo.forkCount}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {repo.description || 'No description available'}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(repo.techs || [repo.primaryLanguage?.name].filter(Boolean)).slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-auto">
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg group"
                          >
                            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            Code
                          </a>
                          
                          {repo.homepageUrl && (
                            <a
                              href={repo.homepageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 group"
                            >
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* View All CTA */}
              <motion.div variants={itemVariants} className="text-center pt-8">
                <a
                  href="https://github.com/AnsariTech-25667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg group"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View All Repositories
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </>
          )}
        </motion.div>
        </div>
      </div>

      {/* Content overlay to ensure readability */}
    </section>
  );
}