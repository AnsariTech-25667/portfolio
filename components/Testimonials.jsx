'use client';
import { motion } from 'framer-motion';
import { me } from '@/data/profile';
import { Quote, Star, Award, TrendingUp, Users, Zap, Target, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  if (!me.testimonials || me.testimonials.length === 0) {
    return null;
  }

  const testimonialMetrics = [
    { label: 'Client Satisfaction', value: '100%', icon: CheckCircle, gradient: 'from-green-500 to-emerald-500' },
    { label: 'Project Success Rate', value: '98%', icon: Target, gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Revenue Generated', value: '$5M+', icon: TrendingUp, gradient: 'from-purple-500 to-indigo-500' },
    { label: 'Happy Clients', value: '50+', icon: Users, gradient: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
                Client Success Stories
              </h2>
            </div>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm">
              Real results from real clients. See how I've helped businesses achieve extraordinary growth through 
              cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>

        {/* Client Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {testimonialMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <article key={index} className="group relative">
                {/* Floating Background Orbs */}
                <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-700 animate-pulse`}></div>
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-700 animate-pulse delay-300`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg text-center">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${metric.gradient} shadow-lg group-hover:rotate-12 transition-all duration-500 mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className={`text-2xl font-bold ${metric.gradient.includes('green') ? 'text-green-300' : metric.gradient.includes('blue') ? 'text-blue-300' : metric.gradient.includes('purple') ? 'text-purple-300' : 'text-orange-300'} mb-2 drop-shadow-sm`}>
                    {metric.value}
                  </p>
                  <p className="text-sm font-semibold text-white drop-shadow-sm">{metric.label}</p>
                </div>
              </article>
            );
          })}
        </motion.div>

        {/* Premium Testimonials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {me.testimonials.map((testimonial, index) => {
              const gradients = [
                'from-blue-500/20 to-cyan-500/20',
                'from-purple-500/20 to-indigo-500/20', 
                'from-green-500/20 to-emerald-500/20',
                'from-orange-500/20 to-red-500/20',
                'from-pink-500/20 to-rose-500/20',
                'from-teal-500/20 to-cyan-500/20'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative h-full"
                >
                  {/* Floating Background Orbs */}
                  <div className={`absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-70 rounded-full blur-3xl transition-all duration-700 animate-pulse`}></div>
                  <div className={`absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-50 rounded-full blur-3xl transition-all duration-700 animate-pulse delay-300`}></div>
                  
                  {/* Main Testimonial Card */}
                  <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg h-full flex flex-col">
                    
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${gradient.replace('/20', '')} shadow-lg group-hover:rotate-12 transition-all duration-500`}>
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Quote Text */}
                    <blockquote className="text-neutral-200 mb-6 leading-relaxed flex-grow drop-shadow-sm italic text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Rating Stars */}
                    {testimonial.rating && (
                      <div className="flex gap-1 mb-6 justify-center">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    {/* Client Info */}
                    <div className="mt-auto">
                      <div className="bg-white/5 dark:bg-neutral-800/30 rounded-2xl p-4 border border-white/10 dark:border-neutral-700/30">
                        <div className="font-bold text-lg text-white mb-1 drop-shadow-sm">{testimonial.name}</div>
                        <div className={`text-sm font-semibold ${gradient.includes('blue') ? 'text-blue-300' : gradient.includes('purple') ? 'text-purple-300' : gradient.includes('green') ? 'text-green-300' : gradient.includes('orange') ? 'text-orange-300' : gradient.includes('pink') ? 'text-pink-300' : 'text-teal-300'} mb-1`}>
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-neutral-400 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="group relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
            <div className="relative bg-white/5 dark:bg-neutral-800/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 dark:border-neutral-700/30">
              <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                Ready to join these 
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">success stories?</span>
              </h3>
              <p className="text-neutral-300 mb-6 text-lg">
                Let's discuss how I can help transform your business with cutting-edge technology solutions.
              </p>
              <a
                href="#contact"
                className="group/cta relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/cta:translate-x-[200%] transition-transform duration-1000"></div>
                <Zap className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Start Your Success Story</span>
                <span className="text-lg relative z-10">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}