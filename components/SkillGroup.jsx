import { motion } from 'framer-motion';

const categoryThemes = {
  0: { bg: 'from-blue-500/10 to-cyan-500/10', accent: 'from-blue-500 to-cyan-500', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  1: { bg: 'from-purple-500/10 to-pink-500/10', accent: 'from-purple-500 to-pink-500', text: 'text-purple-300', border: 'border-purple-500/30' },
  2: { bg: 'from-green-500/10 to-emerald-500/10', accent: 'from-green-500 to-emerald-500', text: 'text-emerald-300', border: 'border-emerald-500/30' },
  3: { bg: 'from-orange-500/10 to-red-500/10', accent: 'from-orange-500 to-red-500', text: 'text-orange-300', border: 'border-orange-500/30' },
  4: { bg: 'from-indigo-500/10 to-blue-500/10', accent: 'from-indigo-500 to-blue-500', text: 'text-indigo-300', border: 'border-indigo-500/30' },
};

export default function SkillGroup({ title, items, icon: Icon, index = 0 }) {
  const theme = categoryThemes[index % 5];
  
  return (
    <article className="group relative h-full">
      {/* Floating Background Orbs */}
      <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r ${theme.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse`}></div>
      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${theme.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse delay-300`}></div>
      
      {/* Main Card */}
      <div className="relative bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-neutral-600/50 hover:border-white/30 dark:hover:border-neutral-500/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg h-full flex flex-col">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 bg-gradient-to-r ${theme.accent} rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500 flex-shrink-0`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className={`text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${theme.accent} group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg`}>
              {title}
            </h3>
          </div>
        </div>

        {/* Skills Count Badge */}
        <div className="mb-6">
          <div className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.text} bg-white/10 px-4 py-2 rounded-xl border ${theme.border}`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            {items.length} Technologies
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-2 gap-3 flex-1">
            {items.map((item, itemIndex) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group/skill"
              >
                <div className={`relative bg-white/5 dark:bg-neutral-800/30 backdrop-blur-sm rounded-xl p-3 border border-white/10 dark:border-neutral-700/30 hover:border-white/20 dark:hover:border-neutral-600/40 transition-all duration-300 hover:shadow-lg text-center overflow-hidden`}>
                  {/* Skill Shimmer Effect */}
                  <div className={`absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[200%] transition-transform duration-700`}></div>
                  
                  <span className="relative z-10 text-sm font-medium text-white group-hover/skill:text-cyan-200 transition-colors duration-300 drop-shadow-sm">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 pt-6 border-t border-white/10 dark:border-neutral-700/30">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-300 font-medium">Proficiency Level</span>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? `bg-gradient-to-r ${theme.accent}` : 'bg-white/20'}`}></div>
                ))}
              </div>
              <span className={`${theme.text} font-semibold`}>Expert</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}