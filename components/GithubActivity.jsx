"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { RepoCard, StatCard } from "./GitHubCards";

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
    <StatCard label={label} value={value} />
  );

  if (state.loading) {
    return (
      <Section id="github" title="GitHub Activity" className="scroll-mt-24 py-24">
        <div className="container mx-auto px-4">
          <div className="mt-4 text-slate-400">Loading…</div>
        </div>
      </Section>
    );
  }

  if (state.error || !state.data) {
    return (
      <Section id="github" title="GitHub Activity" className="scroll-mt-24 py-24">
        <div className="container mx-auto px-4">
          <div className="card p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50">
            <p className="text-slate-300">GitHub data unavailable. Add GITHUB_TOKEN in .env.local to increase rate limits.</p>
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
      </Section>
    );
  }

  const { public_repos, starredCount, recentCommits, latest } = state.data;

  return (
    <Section id="github" title="GitHub Activity" className="scroll-mt-24 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          <Stat label="Public Repos" value={public_repos ?? 0} />
          <Stat label="Starred" value={starredCount ?? 0} />
          <Stat label="Recent Commits" value={recentCommits ?? 0} />
        </div>

        <h3 className="mt-10 mb-4 text-lg font-semibold text-slate-200">Latest Repositories</h3>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(latest || []).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
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
    </Section>
  );
}