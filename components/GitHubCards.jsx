import Card from '@/components/ui/Card';

export function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden block rounded-2xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/30 hover:border-blue-400/50 p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300 flex-1">
            {repo.name}
          </h3>
          {repo.language && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:border-blue-400/50 transition-all duration-300">
              {repo.language}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 group-hover:text-slate-200 leading-relaxed clamp-2 transition-colors duration-300 mb-4">
          {repo.description ?? "An innovative project showcasing modern development practices and cutting-edge technologies."}
        </p>

        {/* Action Indicator */}
        <div className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-blue-300 transition-colors duration-300">
          <span>View Repository</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" 
           style={{background: 'linear-gradient(45deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(79,70,229,0.2)) border-box'}} />
    </a>
  );
}

export function StatCard({ label, value }) {
  return (
    <Card className="text-center">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-3xl font-semibold text-slate-100 mt-1">{value}</p>
    </Card>
  );
}