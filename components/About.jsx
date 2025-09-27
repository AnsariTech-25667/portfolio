import { Chip } from "@/components/ui/Chip";
import SectionHeading from './SectionHeading';
import { Code2, Sparkles, Target, Zap, Database, Cloud, Brain, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl" />
      
      <SectionHeading>About Me</SectionHeading>
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid gap-12 md:grid-cols-2 relative z-10">
        {/* Left: Enhanced about content */}
        <div className="space-y-8">
          {/* Hero tagline with icon */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
                Full-Stack Developer • AI/ML Engineer • Data Analyst
              </h3>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          </div>

          {/* Main description with enhanced typography */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-neutral-200 font-medium">
              I'm a <span className="text-blue-400 font-semibold">full-stack developer</span> with a proven track record of building and shipping <span className="text-purple-400 font-semibold">production-ready web applications</span>. My expertise spans the <span className="text-cyan-400 font-semibold">MERN stack</span> and modern technologies like Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.
            </p>
            
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mt-1">
                <Target className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-neutral-300">
                My projects—<span className="text-emerald-400 font-semibold">PromptPilot, NovaDraft, SyncSlate, and FinSight-AI</span>—showcase AI-powered platforms, content-creation suites, scheduling systems, and finance apps with polished UX and cloud-native architecture.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mt-1">
                <Brain className="w-4 h-4 text-orange-400" />
              </div>
              <p className="text-neutral-300">
                I work at the intersection of <span className="text-orange-400 font-semibold">AI/ML and data analytics</span>, integrating OpenAI/Gemini APIs and leveraging SQL, Power BI, Tableau to turn raw data into actionable insights.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">ENTERPRISE EXPERIENCE</span>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                During my Software Engineer Internship at <span className="text-blue-400 font-semibold">Softmaque Consulting</span>, I built key features for an enterprise-grade Defect Tracking and Workflow Management System using ASP.NET, SQL Server, jQuery, and AJAX.
              </p>
            </div>
          </div>

          {/* Enhanced Education Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative card hover-bulge hover-glow bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border-slate-600/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30">
                  <Code2 className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">Education</h4>
              </div>
              <div className="space-y-3">
                <p className="text-neutral-200 font-semibold text-lg">
                  Vishwakarma Institute of Technology (VIT), Pune
                </p>
                <p className="text-neutral-300">
                  B.Tech, Electronics and Telecommunications Engineering
                </p>
                <p className="text-sm text-neutral-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Jan 2022 – May 2025
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                  {["Data Analysis","Full-Stack Development","Python","JavaScript","MongoDB","Express.js","React.js","Node.js"].map((t, i) => (
                    <span key={t} className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 ${
                      i % 4 === 0 ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300' :
                      i % 4 === 1 ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300' :
                      i % 4 === 2 ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300' :
                      'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Enhanced Core skills card */}
        <aside className="relative group h-fit">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative card hover-bulge hover-glow bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-slate-600/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Core Skills & Focus Areas
              </h3>
            </div>
            
            <div className="grid gap-6">
              <div className="group/item hover:bg-slate-700/30 p-3 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-5 h-5 text-blue-400 group-hover/item:scale-110 transition-transform" />
                  <p className="text-blue-400 font-semibold">Full-Stack Development</p>
                </div>
                <p className="text-neutral-300 text-sm pl-8">JavaScript/TypeScript, MERN, Next.js, React, Node.js</p>
              </div>
              
              <div className="group/item hover:bg-slate-700/30 p-3 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Cloud className="w-5 h-5 text-cyan-400 group-hover/item:scale-110 transition-transform" />
                  <p className="text-cyan-400 font-semibold">Cloud & DevOps</p>
                </div>
                <p className="text-neutral-300 text-sm pl-8">AWS, Docker, Vercel, CI/CD, REST & GraphQL</p>
              </div>
              
              <div className="group/item hover:bg-slate-700/30 p-3 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-5 h-5 text-emerald-400 group-hover/item:scale-110 transition-transform" />
                  <p className="text-emerald-400 font-semibold">Databases</p>
                </div>
                <p className="text-neutral-300 text-sm pl-8">PostgreSQL, MongoDB, Prisma, Neon, SQL</p>
              </div>
              
              <div className="group/item hover:bg-slate-700/30 p-3 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-5 h-5 text-purple-400 group-hover/item:scale-110 transition-transform" />
                  <p className="text-purple-400 font-semibold">AI/ML & Analytics</p>
                </div>
                <p className="text-neutral-300 text-sm pl-8">OpenAI/Gemini, Python, Power BI, Tableau</p>
              </div>
              
              <div className="group/item hover:bg-slate-700/30 p-3 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-orange-400 group-hover/item:scale-110 transition-transform" />
                  <p className="text-orange-400 font-semibold">Best Practices</p>
                </div>
                <p className="text-neutral-300 text-sm pl-8">Scalable Architecture, Microservices, Agile, TDD</p>
              </div>
            </div>
            
            {/* Bottom accent */}
            <div className="mt-6 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full" />
          </div>
        </aside>
      </div>
    </section>
  );
}
