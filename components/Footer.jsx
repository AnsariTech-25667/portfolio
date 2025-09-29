'use client';
import { motion } from 'framer-motion';
import { me } from '@/data/profile';
import { site } from '@/lib/site';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Phone, Download, Rocket, Code, Heart, Zap, Star, Trophy } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: me.socials.email, icon: Mail, label: 'Email', color: 'from-red-500 to-pink-500', hoverColor: 'hover:text-red-300' },
    { href: me.socials.github, icon: Github, label: 'GitHub', color: 'from-gray-500 to-slate-600', hoverColor: 'hover:text-gray-300' },
    { href: me.socials.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600', hoverColor: 'hover:text-blue-300' },
    { href: me.socials.instagram, icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-500', hoverColor: 'hover:text-pink-300' },
    { href: me.socials.phone, icon: Phone, label: 'Phone', color: 'from-green-500 to-emerald-500', hoverColor: 'hover:text-green-300' }
  ];



  const footerStats = [
    { label: 'Production Apps', value: '4+', icon: Rocket },
    { label: 'Research Published', value: '1 Scopus', icon: Heart },
    { label: 'Years Coding', value: '3+', icon: Code },
    { label: 'Tech Stacks', value: '5+', icon: Zap }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 dark:border-neutral-800">
      {/* Floating Background Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
      
      {/* Footer Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 dark:bg-neutral-800/30 backdrop-blur-xl border-b border-white/10 dark:border-neutral-700/30"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="bg-white/5 dark:bg-neutral-800/30 rounded-2xl p-4 border border-white/10 dark:border-neutral-700/30 hover:border-white/20 dark:hover:border-neutral-600/40 transition-all duration-300 hover:scale-105">
                    <div className="inline-flex p-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <p className="text-2xl font-bold text-white mb-1 drop-shadow-sm">{stat.value}</p>
                    <p className="text-sm text-neutral-300 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="bg-white/5 dark:bg-neutral-900/60 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
                      {me.name}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-white/5 dark:bg-neutral-800/30 rounded-2xl p-6 border border-white/10 dark:border-neutral-700/30 mb-6">
                  <p className="text-lg text-neutral-200 leading-relaxed mb-4 drop-shadow-sm">
                    {me.tagline}
                  </p>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Transforming ideas into scalable digital solutions that drive real business impact.
                  </p>
                </div>
                
                <a 
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  <Download className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                  <ExternalLink className="w-4 h-4 relative z-10" />
                </a>
              </div>
            </motion.div>



            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Let's Connect</h3>
                </div>
                
                <div className="bg-white/5 dark:bg-neutral-800/30 rounded-2xl p-6 border border-white/10 dark:border-neutral-700/30 mb-6">
                  <p className="text-neutral-200 mb-6 leading-relaxed">
                    Ready to start your next project? Let's discuss how I can help bring your vision to life.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map(({ href, icon: Icon, label, color, hoverColor }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="group/social relative"
                      >
                        <div className={`absolute -inset-2 bg-gradient-to-r ${color} opacity-0 group-hover/social:opacity-20 rounded-xl blur-sm transition-all duration-300`}></div>
                        <div className="relative p-4 rounded-xl bg-white/5 dark:bg-neutral-800/40 border border-white/10 dark:border-neutral-700/30 hover:border-white/20 dark:hover:border-neutral-600/40 transition-all duration-300 text-center">
                          <Icon className={`w-6 h-6 text-neutral-400 ${hoverColor} transition-colors duration-300 mx-auto`} />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {label}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="#contact"
                    className="group/cta relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/cta:translate-x-[200%] transition-transform duration-1000"></div>
                    <Mail className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Get In Touch</span>
                    <span className="text-lg relative z-10">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 dark:border-neutral-800 bg-white/5 dark:bg-neutral-900/80"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="text-2xl animate-pulse">❤️</span>
                  <p className="text-sm font-medium">
                    © {currentYear} {me.name}. Crafted with passion and precision.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span>Built with Next.js 15</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Powered by Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Rocket className="w-4 h-4 text-purple-400" />
                  <span>Deployed on Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
