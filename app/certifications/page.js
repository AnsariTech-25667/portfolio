import { me } from '@/data/profile';
import { ExternalLink, Award, Calendar, Building2, Zap, Star, Trophy, Shield, Sparkles, CheckCircle } from 'lucide-react';

const certificationSkills = {
  'Google Data Analytics Certificate': 'SQL, spreadsheets, dashboards, and storytelling with data.',
  'Data Analyst': 'Statistical analysis, data visualization, and business intelligence reporting.',
  'Learning Data Analytics Foundations': 'Data collection, cleaning, analysis methodologies, and insights generation.',
  'Power BI Desktop': 'DAX, data modeling, and report automation.',
  'Tableau Essential Training': 'Interactive dashboards, data connections, and visual analytics.'
};

// Enhanced certification data with colors and icons
const enhancedCertifications = me.certifications.map((cert, index) => {
  const colorThemes = [
    {
      icon: Trophy,
      gradient: "from-amber-500 via-yellow-500 to-orange-500",
      bgGradient: "from-amber-500/10 via-yellow-500/10 to-orange-500/10",
      borderColor: "border-amber-400/30",
      hoverShadow: "hover:shadow-amber-500/25",
      textGradient: "from-amber-400 via-yellow-400 to-orange-400"
    },
    {
      icon: Star,
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
      borderColor: "border-blue-400/30",
      hoverShadow: "hover:shadow-blue-500/25",
      textGradient: "from-blue-400 via-indigo-400 to-purple-400"
    },
    {
      icon: Shield,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
      borderColor: "border-emerald-400/30",
      hoverShadow: "hover:shadow-emerald-500/25",
      textGradient: "from-emerald-400 via-teal-400 to-cyan-400"
    },
    {
      icon: Zap,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
      borderColor: "border-pink-400/30",
      hoverShadow: "hover:shadow-pink-500/25",
      textGradient: "from-pink-400 via-rose-400 to-red-400"
    },
    {
      icon: Sparkles,
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      borderColor: "border-violet-400/30",
      hoverShadow: "hover:shadow-violet-500/25",
      textGradient: "from-violet-400 via-purple-400 to-fuchsia-400"
    }
  ];
  
  return {
    ...cert,
    theme: colorThemes[index % colorThemes.length],
    skills: certificationSkills[cert.name]
  };
});

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-600/5 via-purple-600/5 to-fuchsia-600/5 rounded-full blur-3xl" />
      </div>

      <main className="container mx-auto px-6 md:px-10 lg:px-14 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-fuchsia-600/10 rounded-full blur-3xl" />
          </div>
          
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-orange-500/20 border border-amber-400/30 mb-8">
            <Award className="h-16 w-16 text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent leading-tight">
            Professional Certifications
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications demonstrating expertise in data analytics, 
            visualization, and business intelligence. Continuously expanding knowledge 
            to stay at the forefront of technological innovation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {enhancedCertifications.map((cert, index) => {
            const IconComponent = cert.theme.icon;
            return (
              <div
                key={index}
                className={`
                  group relative overflow-hidden rounded-3xl p-8
                  bg-gradient-to-br ${cert.theme.bgGradient}
                  border-2 ${cert.theme.borderColor}
                  backdrop-blur-xl
                  hover:scale-105 hover:-translate-y-2
                  transition-all duration-500 ease-out
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]
                  ${cert.theme.hoverShadow}
                  cursor-pointer
                `}
              >
                {/* Animated Background Orb */}
                <div className={`
                  absolute -top-10 -right-10 w-32 h-32 opacity-20
                  bg-gradient-to-br ${cert.theme.gradient}
                  rounded-full blur-2xl
                  group-hover:w-40 group-hover:h-40 group-hover:opacity-30 group-hover:animate-pulse
                  transition-all duration-700
                `} />

                {/* Success Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <CheckCircle className={`h-6 w-6 text-transparent bg-gradient-to-r ${cert.theme.textGradient} bg-clip-text`} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`
                      p-4 rounded-2xl
                      bg-gradient-to-br ${cert.theme.gradient}
                      shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]
                      group-hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)]
                      group-hover:scale-110 group-hover:rotate-12
                      transition-all duration-500
                    `}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`
                        text-xl md:text-2xl font-bold mb-2 leading-tight
                        bg-gradient-to-r ${cert.theme.textGradient}
                        bg-clip-text text-transparent
                        group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.5)]
                      `}>
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  {/* Organization and Date */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300 font-semibold text-sm">{cert.org}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300 font-semibold text-sm">{cert.year}</span>
                    </div>
                  </div>

                  {/* Skills Description */}
                  {cert.skills && (
                    <div className="mb-6 flex-1">
                      <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {cert.skills}
                      </p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="mt-auto">
                    {cert.link && cert.link !== '#' ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          group/btn w-full inline-flex items-center justify-center gap-3 px-6 py-4
                          bg-gradient-to-r ${cert.theme.gradient}
                          text-white font-bold text-sm md:text-base
                          rounded-2xl
                          shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]
                          hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)]
                          hover:scale-105 hover:brightness-110
                          transition-all duration-300
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                          relative overflow-hidden
                        `}
                      >
                        {/* Button Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                        
                        <span className="relative z-10">View Certificate</span>
                        <ExternalLink className="relative z-10 h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </a>
                    ) : (
                      <button 
                        disabled 
                        className={`
                          w-full inline-flex items-center justify-center gap-3 px-6 py-4
                          bg-gradient-to-r from-slate-600 to-slate-700
                          text-slate-300 font-bold text-sm md:text-base
                          rounded-2xl
                          opacity-60 cursor-not-allowed
                          border-2 border-slate-500/30
                        `}
                      >
                        <span>Certificate Coming Soon</span>
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div className={`
                  absolute top-0 right-0 w-24 h-24 opacity-10
                  bg-gradient-to-bl ${cert.theme.gradient}
                  group-hover:opacity-20 transition-opacity duration-500
                `} style={{
                  clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'
                }} />

                {/* Animated border glow */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-r ${cert.theme.gradient}
                  blur-sm -z-10
                  transition-opacity duration-500
                `} style={{ padding: '2px' }} />
              </div>
            );
          })}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 via-slate-700/60 to-slate-800/60 border-2 border-white/10 backdrop-blur-xl overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-400/30 mb-6">
                <Trophy className="h-12 w-12 text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text" />
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Continuous Learning Journey
              </h2>
              
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Committed to staying ahead of technological trends through continuous certification and skill development. 
                Currently pursuing advanced certifications in AI/ML and cloud technologies.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
                  <span className="text-blue-300 font-semibold text-sm flex items-center gap-2">
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    AI/ML Certification - In Progress
                  </span>
                </div>
                <div className="group px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border-2 border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                  <span className="text-green-300 font-semibold text-sm flex items-center gap-2">
                    <Shield className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Cloud Architecture - Planned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}