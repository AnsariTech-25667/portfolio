import { NextResponse } from 'next/server';

const RL_LIMIT = 10;
const RL_WINDOW_MS = 10 * 60 * 1000;
const bucket = new Map(); // key -> { count, resetAt }

function rateKey(headers) {
  const xf = headers.get('x-forwarded-for') || '';
  const ip = (xf.split(',')[0] || '').trim();
  return ip || (headers.get('user-agent') || 'ua');
}
function rateLimit(headers) {
  const key = rateKey(headers);
  const now = Date.now();
  const entry = bucket.get(key);
  if (!entry || now > entry.resetAt) {
    bucket.set(key, { count: 1, resetAt: now + RL_WINDOW_MS });
    return { ok: true };
  }
  if (entry.count >= RL_LIMIT) {
    const retry = Math.max(0, Math.ceil((entry.resetAt - now) / 1000));
    return { ok: false, retry };
  }
  entry.count += 1;
  return { ok: true };
}

function isEmail(v) {
  return typeof v === 'string' && v.includes('@') && v.includes('.');
}

export async function POST(req) {
  const rl = rateLimit(req.headers);
  if (!rl.ok) {
    return NextResponse.json({ ok: false, error: 'Rate limit exceeded' }, { status: 429, headers: { 'Retry-After': String(rl.retry || 60) } });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { name = '', email = '', message = '', company = '' } = body || {};
  if (company && company.trim()) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json({ ok: false, error: 'name, email, message required' }, { status: 400 });
  }
  if (!isEmail(email) || name.length > 100 || message.length > 2000) {
    return NextResponse.json({ ok: false, error: 'validation failed' }, { status: 400 });
  }

  const API_KEY = process.env.RESEND_API_KEY || '';
  const MAIL_TO = process.env.MAIL_TO || '';
  const MAIL_FROM = process.env.MAIL_FROM || '';

  if (!API_KEY || !MAIL_TO || !MAIL_FROM) {
    return NextResponse.json({ ok: false, error: 'Email not configured' }, { status: 500 });
  }

  const payload = {
    from: MAIL_FROM,
    to: [MAIL_TO],
    subject: `Portfolio contact: ${name}`,
    reply_to: email,
    text: `From: ${name} <${email}>\n\n${message}`
  };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const txt = await res.text();
    return NextResponse.json({ ok: false, error: `Resend error: ${res.status} ${txt}` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}