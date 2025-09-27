import Card from '@/components/ui/Card';

export function RepoCard({ repo }) {
  return (
    <Card as="article" title={repo.name} className="group">
      <div className="flex items-center justify-between">
        <a
          className="font-medium text-cyan-200 hover:underline"
          href={repo.html_url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open repository ${repo.name}`}
        >
          {repo.name}
        </a>
        <span className="text-xs rounded-full border border-white/10 px-2 py-0.5 text-slate-300">
          {repo.language || "—"}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-300/85 line-clamp-3">
        {repo.description || "No description"}
      </p>
      <div className="mt-3 text-xs text-slate-400">
        ★ {repo.stargazers_count} • Forks {repo.forks_count}
      </div>
    </Card>
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