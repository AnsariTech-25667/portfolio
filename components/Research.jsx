'use client';
import { motion } from 'framer-motion';
import { me } from '@/data/profile';
import { ExternalLink, Calendar, ArrowRight, Award, TrendingUp, Users, Eye, BookOpen, Star, Zap, Target, Globe, Code, Brain, FileText, CheckCircle, Microscope } from 'lucide-react';

export default function Research() {
  const researchMetrics = [
    { label: 'Research Papers', value: '2+', icon: FileText, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Validation Accuracy', value: '91.78%', icon: Target, gradient: 'from-purple-500 to-indigo-500' },
    { label: 'mAP Detection', value: '82.5%', icon: Microscope, gradient: 'from-green-500 to-emerald-500' },
    { label: 'Scopus Indexed', value: '1+', icon: Award, gradient: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="research" className="py-24 scroll-mt-24 relative overflow-hidden">
      {/* Epic Floating Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl shadow-2xl">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
                Research & Publications
              </h2>
            </div>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
              Cutting-edge research in <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text font-bold">AI/ML, Computer Vision, and Autonomous Systems</span> that pushes the boundaries of intelligent robotics and perception.
            </p>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full mx-auto"></div>
          </motion.div>
        </div>

        {/* Research Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {researchMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <article key={index} className="group relative">
                {/* Floating Background Orbs */}
                <div className={`absolute -top-4 -left-4 w-28 h-28 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-700 animate-pulse`}></div>
                <div className={`absolute -bottom-4 -right-4 w-36 h-36 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-700 animate-pulse delay-300`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-lg text-center group-hover:rotate-1">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${metric.gradient} shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className={`text-2xl font-bold ${metric.gradient.includes('blue') ? 'text-blue-300' : metric.gradient.includes('purple') ? 'text-purple-300' : metric.gradient.includes('green') ? 'text-green-300' : 'text-orange-300'} mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {metric.value}
                  </p>
                  <p className="text-sm font-bold text-white drop-shadow-sm">{metric.label}</p>
                </div>
              </article>
            );
          })}
        </motion.div>

        {/* Research Publications Grid */}
        <div className="max-w-6xl mx-auto">
          {me.posts?.length > 0 ? (
            <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
              {me.posts.map((post, index) => {
                const gradients = [
                  { bg: 'from-blue-500/20 to-cyan-500/20', border: 'from-blue-500 to-cyan-500', text: 'text-blue-300' },
                  { bg: 'from-purple-500/20 to-indigo-500/20', border: 'from-purple-500 to-indigo-500', text: 'text-purple-300' }
                ];
                const gradient = gradients[index % gradients.length];
                
                const statusColors = {
                  'Published': 'bg-gradient-to-r from-emerald-500 to-green-600 text-white',
                  'Research Manuscript': 'bg-gradient-to-r from-amber-500 to-orange-600 text-white',
                  'Under Review': 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                };
                
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group relative h-full"
                  >
                    {/* Epic Floating Background Orbs */}
                    <div className={`absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-r ${gradient.bg} opacity-0 group-hover:opacity-80 rounded-full blur-3xl transition-all duration-700 animate-pulse`}></div>
                    <div className={`absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-r ${gradient.bg} opacity-0 group-hover:opacity-60 rounded-full blur-3xl transition-all duration-700 animate-pulse delay-300`}></div>
                    <div className={`absolute top-1/2 -right-6 w-32 h-32 bg-gradient-to-r ${gradient.bg} opacity-0 group-hover:opacity-40 rounded-full blur-2xl transition-all duration-700 animate-pulse delay-500`}></div>
                    
                    {/* Main Research Card */}
                    <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl h-full flex flex-col group-hover:rotate-1">
                      
                      {/* Status Badge & Date */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${statusColors[post.status] || statusColors['Research Manuscript']}`}>
                            {post.status}
                          </div>
                          {post.category && (
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 ${gradient.text}`}>
                              {post.category}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-neutral-300">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient.border} shadow-lg`}>
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium">
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short' 
                            })}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight drop-shadow-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-neutral-300 mb-6 leading-relaxed flex-grow drop-shadow-sm">
                        {post.excerpt}
                      </p>
                      
                      {/* Research Metrics */}
                      {(post.impact || post.venue) && (
                        <div className="mb-6 space-y-3">
                          {post.impact && (
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl bg-gradient-to-r ${gradient.border} shadow-lg`}>
                                <TrendingUp className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-neutral-400 uppercase tracking-wide">Research Impact</p>
                                <p className={`font-bold ${gradient.text} drop-shadow-sm`}>{post.impact}</p>
                              </div>
                            </div>
                          )}
                          {post.venue && (
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl bg-gradient-to-r ${gradient.border} shadow-lg`}>
                                <Award className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                {/* Show different labels based on publication status */}
                                <p className="text-sm font-bold text-neutral-400 uppercase tracking-wide">
                                  {post.status === 'Published' ? 'Published In' : 'Research Type'}
                                </p>
                                <p className={`font-bold ${gradient.text} drop-shadow-sm mb-1`}>{post.venue}</p>
                                {/* Only show Scopus badge for actual Scopus publications */}
                                {post.venue.toLowerCase().includes('international journal') && post.status === 'Published' && (
                                  <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-full border border-emerald-400/50">
                                      <Star className="w-3 h-3 text-emerald-300" />
                                      <span className="text-xs font-bold text-emerald-200">Scopus Indexed</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Action Button */}
                      <div className="mt-auto">
                        {post.link ? (
                          <a 
                            href={post.link} 
                            target="_blank" 
                            rel="noreferrer noopener"
                            className="group/btn relative inline-flex items-center gap-3 w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                          >
                            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                            <ExternalLink className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Read Full Research</span>
                            <span className="text-lg relative z-10">↗</span>
                          </a>
                        ) : (
                          <a 
                            href={`/blog/${post.slug}`}
                            className="group/btn relative inline-flex items-center gap-3 w-full justify-center px-6 py-3 bg-white/10 dark:bg-neutral-800/30 backdrop-blur-xl border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                          >
                            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                            <ArrowRight className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">View Research Details</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-neutral-600/50 text-center">
                <div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl shadow-2xl inline-flex mb-8">
                  <Microscope className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Research Publications</h3>
                <p className="text-neutral-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Cutting-edge research papers in AI/ML, robotics, and autonomous systems.
                </p>
                <a 
                  href="/blog"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <BookOpen className="w-6 h-6" />
                  View All Research
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="group relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
            <div className="relative bg-white/5 dark:bg-neutral-800/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 dark:border-neutral-700/30">
              <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                Interested in <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">research collaboration?</span>
              </h3>
              <p className="text-neutral-300 mb-6 text-lg">
                Let's explore cutting-edge AI/ML applications and autonomous systems together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="group/cta relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/cta:translate-x-[200%] transition-transform duration-1000"></div>
                  <Brain className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Collaborate with Me</span>
                  <span className="text-lg relative z-10">→</span>
                </a>
                <a
                  href="/blog"
                  className="group/cta relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 dark:bg-neutral-800/30 backdrop-blur-xl border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/cta:translate-x-[200%] transition-transform duration-1000"></div>
                  <BookOpen className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">View All Publications</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}