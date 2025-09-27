import { me } from '@/data/profile';
import { ExternalLink, FileText, Award, Building2, MapPin, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 bg-transparent">
      <SectionHeading>Experience</SectionHeading>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Software Engineer Internship - Main Experience Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover-bulge hover-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                      <Building2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                      Software Engineer Intern
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-blue-300 mb-2">Softmaque Consulting · Internship</p>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Jan 2025 - May 2025 · 5 months</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>Chhatrapati Sambhajinagar, Maharashtra, India · Remote</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-neutral-300 leading-relaxed text-base">
                  Contributed to the development of an <span className="text-blue-300 font-semibold">enterprise-grade Defect Tracking and Workflow Management System</span> during a 5-month internship. Worked on both front-end and back-end tasks using <span className="text-purple-300 font-medium">ASP.NET Web Forms, SQL Server, jQuery, and AJAX</span>. 
                </p>
                <p className="text-neutral-300 leading-relaxed text-base mt-3">
                  Implemented features like <span className="text-indigo-300 font-medium">role-based UI rendering, session-based access control, dynamic notifications, and Excel data ingestion</span> via .ashx handlers. Collaborated with the core development team, writing <span className="text-blue-300 font-semibold">5,000+ lines of production-ready code across 25+ ASPX modules</span>. The system replaced manual QA tracking, helping improve defect resolution speed, accuracy, and team collaboration.
                </p>
              </div>

              {/* Document Links */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="https://drive.google.com/file/d/1sjFQDGUz-hLaSkwp0Zyw6LENsEkPrEj5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 hover:border-emerald-400/40 hover:from-emerald-500/20 hover:to-green-500/20 transition-all duration-300 hover-bulge hover-glow"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 group-hover/link:from-emerald-500/30 group-hover/link:to-green-500/30 transition-all duration-300">
                    <FileText className="w-5 h-5 text-emerald-400 group-hover/link:text-emerald-300 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-emerald-300 group-hover/link:text-emerald-200 transition-colors duration-300">
                      Offer Letter
                    </h4>
                    <p className="text-sm text-neutral-400 group-hover/link:text-neutral-300 transition-colors duration-300">
                      Official internship offer document
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400 group-hover/link:text-emerald-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1S_iHMRfdrT6M_LfhAwM3G8jwcrzdqy1P/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 hover:border-violet-400/40 hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300 hover-bulge hover-glow"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 group-hover/link:from-violet-500/30 group-hover/link:to-purple-500/30 transition-all duration-300">
                    <Award className="w-5 h-5 text-violet-400 group-hover/link:text-violet-300 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-violet-300 group-hover/link:text-violet-200 transition-colors duration-300">
                      Completion Certificate
                    </h4>
                    <p className="text-sm text-neutral-400 group-hover/link:text-neutral-300 transition-colors duration-300">
                      Internship completion certificate
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-violet-400 group-hover/link:text-violet-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Education</h3>
            {me.education?.map((edu, index) => (
              <article key={index} className="card hover-bulge hover-glow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{edu.school}</p>
                    
                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300">
                        Data Analysis
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300">
                        Full-Stack Development
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300">
                        Python
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300">
                        JavaScript
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300">
                        MongoDB
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-500/30 text-gray-300">
                        Express.js
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600/20 to-blue-400/20 border border-blue-600/30 text-blue-400">
                        React.js
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-600/20 to-lime-500/20 border border-green-600/30 text-green-400">
                        Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}