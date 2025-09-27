"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export default function GithubActivity() {
  const [state, setState] = useState({ loading: true, error: false, data: null });
  const reduced = typeof window !== "undefined" &&
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    let mounted = true;
    fetch("/api/github/activity", { cache: "no-store" })
      .then((r) => r.json())
      .then((j) => {
        if (!mounted) return;
        if (!j.ok) setState({ loading: false, error: true, data: null });
        else setState({ loading: false, error: false, data: j.data });
      })
      .catch(() => mounted && setState({ loading: false, error: true, data: null }));
    return () => { mounted = false; };
  }, []);

  const Stat = ({ label, value }) => (
    <div className="card">
      <p className="text-sm text-neutral-400">{label}</p>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );

  if (state.loading) {
    return (
      <section id="github" className="scroll-mt-24 py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">GitHub Activity</h2>
          <div className="mt-4 text-neutral-400">Loading…</div>
        </div>
      </section>
    );
  }

  if (state.error || !state.data) {
    return (
      <section id="github" className="scroll-mt-24 py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">GitHub Activity</h2>
          <div className="card">GitHub data unavailable. Add GITHUB_TOKEN in .env.local to increase rate limits.</div>
          <div className="mt-8 flex justify-center">
            <Button
              variant="primary"
              href="https://github.com/AnsariTech-25667"
              iconRight={<span aria-hidden>→</span>}
            >
              View All Repositories
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const { public_repos, starredCount, recentCommits, latest } = state.data;

  return (
    <section id="github" className="scroll-mt-24 py-24">
      <div className="container mx-auto px-4">
        <h2 className="headline section-title">GitHub Activity</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          <Stat label="Public Repos" value={public_repos ?? 0} />
          <Stat label="Starred" value={starredCount ?? 0} />
          <Stat label="Recent Commits" value={recentCommits ?? 0} />
        </div>

        <h3 className="mt-10 mb-4 text-lg font-semibold">Latest Repositories</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(latest || []).map((r) => (
            <article key={r.id} className="card group">
              <div className="flex items-center justify-between">
                <a
                  className="font-medium text-cyan-200 hover:underline"
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open repository ${r.name}`}
                >
                  {r.name}
                </a>
                <span className="text-xs rounded-full border border-white/10 px-2 py-0.5">
                  {r.language || "—"}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-300 line-clamp-3">
                {r.description || "No description"}
              </p>
              <div className="mt-3 text-xs text-neutral-400">
                ★ {r.stargazers_count} • Forks {r.forks_count}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            href="https://github.com/AnsariTech-25667"
            iconRight={<span aria-hidden>→</span>}
          >
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
}