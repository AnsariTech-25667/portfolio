'use client';
import { useState } from 'react';

function Chip({ children, variant = 'default' }) {
  const base = 'inline-flex items-center rounded-full border px-2 py-0.5 text-xs';
  const cls =
    variant === 'warn'
      ? `${base} border-red-400/40 text-red-300`
      : `${base} border-neutral-700 text-neutral-300`;
  return <span className={cls}>{children}</span>;
}

function CopyBtn({ getText, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(getText());
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {}
      }}
      className="rounded-md border border-neutral-700 px-2 py-1 text-xs hover:bg-neutral-800"
    >
      {copied ? 'Copied' : label}
    </button>
  );
}

export default function ResumeTailor() {
  const [resume, setResume] = useState('');
  const [job, setJob] = useState('');
  const [role, setRole] = useState('');
  const [seniority, setSeniority] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const disabled = loading || !resume.trim() || !job.trim();

  const allText = () => {
    if (!data) return '';
    const bullets = (data.tailored_bullets || []).map(b => `• ${b}`).join('\n');
    const keys = (data.keywords || []).join(', ');
    const miss = (data.missing || []).join(', ');
    return [
      `SUMMARY\n${data.summary}`,
      `\n\nBULLETS\n${bullets}`,
      `\n\nATS KEYWORDS\n${keys}`,
      `\n\nMISSING KEYWORDS\n${miss}`,
      `\n\nCOVER LETTER\n${data.cover_letter}`
    ].join('');
  };

  async function submit() {
    setError('');
    setData(null);
    setLoading(true);
    try {
      const res = await fetch('/api/tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, job, role, seniority, company })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || `HTTP ${res.status}`);
      setData(json.result);
    } catch (e) {
      setError(e.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Resume Tailor — Mini Tool</h3>
        <CopyBtn getText={allText} label="Copy All" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-xs text-neutral-400">Role (optional)</label>
          <input
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
            placeholder="e.g., Full-Stack Engineer"
          />
          <label htmlFor="seniority" className="text-xs text-neutral-400">Seniority (optional)</label>
          <input
            id="seniority"
            value={seniority}
            onChange={(e) => setSeniority(e.target.value)}
            className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
            placeholder="e.g., Mid, Senior"
          />
          {/* Honeypot to block bots */}
          <input
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="hidden"
            placeholder="Company"
          />

          <label htmlFor="job" className="mt-2 text-xs text-neutral-400">Job Description</label>
          <textarea
            id="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Paste the JD here…"
            rows={10}
            className="min-h-[8rem] rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="resume" className="text-xs text-neutral-400">Your Resume</label>
          <textarea
            id="resume"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume text here…"
            rows={16}
            className="min-h-[12rem] rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
          />
          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={submit}
              disabled={disabled}
              aria-label="Tailor Resume"
              className={`rounded-md bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-medium text-white ${disabled ? 'opacity-50' : 'hover:opacity-95'}`}
            >
              {loading ? 'Tailoring…' : 'Tailor Resume'}
            </button>
            <span className="text-xs text-neutral-500">{resume.length} / {job.length} chars</span>
          </div>
          {error ? <p className="mt-1 text-sm text-red-400">Error: {error}</p> : null}
        </div>
      </div>

      {data && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-neutral-800 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">Summary</h4>
              <CopyBtn getText={() => data.summary} />
            </div>
            <p className="text-sm text-neutral-300">{data.summary}</p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">Tailored Bullets</h4>
              <CopyBtn getText={() => (data.tailored_bullets || []).join('\n')} />
            </div>
            <ul className="list-inside list-disc space-y-1 text-sm text-neutral-300">
              {(data.tailored_bullets || []).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">ATS Keywords</h4>
              <CopyBtn getText={() => (data.keywords || []).join(', ')} />
            </div>
            <div className="flex flex-wrap gap-2">
              {(data.keywords || []).map((k) => <Chip key={k}>{k}</Chip>)}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">Missing Keywords</h4>
              <CopyBtn getText={() => (data.missing || []).join(', ')} />
            </div>
            <div className="flex flex-wrap gap-2">
              {(data.missing || []).map((k) => <Chip key={k} variant="warn">{k}</Chip>)}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">Cover Letter</h4>
              <CopyBtn getText={() => data.cover_letter} />
            </div>
            <p className="text-sm text-neutral-300 whitespace-pre-line">{data.cover_letter}</p>
          </div>
        </div>
      )}
    </div>
  );
}