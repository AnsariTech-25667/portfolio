import { NextResponse } from 'next/server';
import { me } from '@/data/profile';

const RL_LIMIT = 10;
const RL_WINDOW_MS = 10 * 60 * 1000;
const rl = new Map(); // key -> { count, resetAt }

const STOP = new Set(['the','a','an','and','or','but','of','to','for','with','in','on','at','by','from','as','is','are','be','was','were','will','this','that','these','those','you','your','we','our','they','their','it','its','if','then','else','than','into','about','over','under','via','using','use']);

const BUILTIN_SKILLS = new Set([
  // FE
  'react','next','next.js','tailwind','shadcn','typescript','javascript','vite','html','css','flutter',
  // BE
  'node','node.js','express','python','django','flask','fastapi','grails','rest','api','microservices',
  // DB
  'postgres','postgresql','mysql','mongodb','sql','nosql','redis',
  // cloud/devops
  'aws','azure','gcp','vercel','docker','kubernetes','ci','cd','github actions',
  // ai/ml
  'yolo','yolov4','yolov5','hog','sgdepth','opencv','pandas','numpy','scikit-learn','llm',
  // tools
  'power bi','tableau','stripe','mqtt','arduino','raspberry pi'
]);

function now() { return Date.now(); }

function rateKey(headers) {
  const xf = headers.get('x-forwarded-for') || '';
  const ua = headers.get('user-agent') || 'ua';
  const key = (xf.split(',')[0] || '').trim() || ua;
  return key.slice(0, 128);
}

function enforceRateLimit(headers) {
  const key = rateKey(headers);
  const t = now();
  const entry = rl.get(key);
  if (!entry || t > entry.resetAt) {
    rl.set(key, { count: 1, resetAt: t + RL_WINDOW_MS });
    return { ok: true };
  }
  if (entry.count >= RL_LIMIT) {
    const retry = Math.max(0, Math.ceil((entry.resetAt - t) / 1000));
    return { ok: false, retry };
  }
  entry.count += 1;
  return { ok: true };
}

function tokenize(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[\u2019']/g, '')
    .split(/[^a-z0-9\+\#\.\-]+/g)
    .filter(w => w && !STOP.has(w));
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function topCounts(tokens, n = 25) {
  const m = new Map();
  for (const t of tokens) m.set(t, (m.get(t) || 0) + 1);
  return Array.from(m.entries()).sort((a,b) => b[1]-a[1]).slice(0, n).map(([w]) => w);
}

function skillsFromProfile() {
  const s = me?.skills || {};
  const vals = Object.values(s).flat().map(x => String(x || '').toLowerCase());
  return new Set(vals);
}

function pickKeywords(jobTokens) {
  const profileSkills = skillsFromProfile();
  const KNOWN = new Set([...BUILTIN_SKILLS, ...profileSkills]);
  const freqTop = topCounts(jobTokens, 50);
  const present = new Set();
  for (const tok of jobTokens) {
    if (KNOWN.has(tok)) present.add(tok);
  }
  return uniq([...freqTop, ...present]).slice(0, 25);
}

function intersect(a, bSet) {
  const out = [];
  for (const x of a) if (bSet.has(x)) out.push(x);
  return out;
}

function difference(a, bSet) {
  const out = [];
  for (const x of a) if (!bSet.has(x)) out.push(x);
  return out;
}

function sentenceCase(s) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function buildSummary({ role, seniority, jdTop, present }) {
  const roleLine = [seniority, role].filter(Boolean).join(' ');
  const skillsLine = jdTop.slice(0, 6).map(sentenceCase).join(', ');
  const presentLine = present.slice(0, 4).map(sentenceCase).join(', ');
  return [
    roleLine ? `${roleLine} with hands-on experience across ${skillsLine}.` : `Engineer with hands-on experience across ${skillsLine}.`,
    present.length ? `Recent work highlights: ${presentLine}.` : `Ready to align with your stack and delivery goals.`,
    `Focus on measurable impact, reliability, and clean code.`
  ].join(' ');
}

function buildBullets(jdTop, present) {
  const focus = jdTop.slice(0, 8);
  const p = new Set(present);
  const pick = (i) => sentenceCase(focus[i] || present[i] || 'impact');
  const bullets = [
    `Delivered ${pick(0)} features used by [N users], improving key metric by [↑X%].`,
    `Designed and shipped ${pick(1)} service with ${pick(2)}; cut latency to [Y ms] and raised reliability to [99.xx%].`,
    `Built ${pick(3)} pipeline integrating ${pick(4)}; reduced manual ops by [↓X hrs/wk].`,
    `Owned end-to-end delivery of ${pick(5)} with CI/CD and testing; eliminated regressions by [↓X%].`,
    `Collaborated cross-functionally to launch ${pick(6)}; documented and handed off seamlessly.`
  ];
  return bullets;
}

function buildCoverLetter(name, role, company, jdTop) {
  const lead = role ? `I'm applying for the ${role} role` : `I'm applying for this role`;
  const at = company ? ` at ${company}` : '';
  const skills = jdTop.slice(0, 5).map(sentenceCase).join(', ');
  return [
    `${lead}${at}. My background spans ${skills}, with a strong bias toward pragmatic delivery and measurable outcomes.`,
    `I partner closely with product and design, write maintainable code, and iterate quickly with data. If helpful, I can share relevant code samples or walk through decisions behind recent projects.`,
    `Thanks for your time—looking forward to discussing how I can contribute. – ${name || 'Candidate'}`
  ].join(' ');
}

export async function POST(req) {
  // Rate limit
  const rlCheck = enforceRateLimit(req.headers);
  if (!rlCheck.ok) {
    return NextResponse.json({ ok: false, error: 'Rate limit exceeded' }, { status: 429, headers: { 'Retry-After': String(rlCheck.retry || 60) } });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { resume = '', job = '', role = '', seniority = '', company = '' } = body || {};
  if (company && company.trim()) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
  if (!resume.trim() || !job.trim()) {
    return NextResponse.json({ ok: false, error: 'resume and job are required' }, { status: 400 });
  }
  if (resume.length > 20000 || job.length > 20000) {
    return NextResponse.json({ ok: false, error: 'Payload too large' }, { status: 413 });
  }

  const rTok = tokenize(resume);
  const jTok = tokenize(job);

  const jdTop = pickKeywords(jTok);
  const rSet = new Set(rTok);
  const present = intersect(jdTop, rSet);
  const missing = difference(jdTop, rSet);

  const summary = buildSummary({ role, seniority, jdTop, present });
  const tailored_bullets = buildBullets(jdTop, present);
  const cover_letter = buildCoverLetter(me?.name, role, '', jdTop);

  return NextResponse.json({
    ok: true,
    result: {
      summary,
      tailored_bullets,
      keywords: jdTop,
      missing,
      cover_letter
    }
  });
}