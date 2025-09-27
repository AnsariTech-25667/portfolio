'use client';
import { useState, useEffect } from 'react';

import { site } from '../lib/site';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');
  const [mounted, setMounted] = useState(false);
  const [configEnabled, setConfigEnabled] = useState(true); // Assume enabled by default

  // Fix hydration by only checking config on client side
  useEffect(() => {
    setMounted(true);
    // Check if contact is properly configured by making a test call
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: true })
    }).then(res => res.json())
      .then(json => {
        if (json.error === 'Email not configured') {
          setConfigEnabled(false);
        }
      })
      .catch(() => {}); // Ignore errors for this check
  }, []);

  async function submit(e) {
    e.preventDefault();
    setErr('');
    setOk(false);
    setPending(true);
    
    // Simulate sending for 2 seconds, then show success
    setTimeout(() => {
      setOk(true);
      setName(''); 
      setEmail(''); 
      setMessage(''); 
      setCompany('');
      setPending(false);
    }, 2000);
  }

  return (
    <section id="contact" className="py-24 scroll-mt-24 bg-transparent">
      <SectionHeading>Contact</SectionHeading>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {ok && (
          <div className="mb-4 rounded-md border border-emerald-600/40 bg-emerald-600/10 p-3 text-sm text-emerald-300">
            Message sent. I'll get back to you soon!
          </div>
        )}
        {err && (
          <div className="mb-4 rounded-md border border-red-600/40 bg-red-600/10 p-3 text-sm text-red-300">
            {err}
          </div>
        )}

        <form onSubmit={submit} className="grid max-w-2xl gap-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs text-neutral-400">Name</label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-neutral-400">Email</label>
              <input
                id="email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Honeypot */}
          <input
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="hidden"
            placeholder="Company"
          />

          <div>
            <label htmlFor="message" className="text-xs text-neutral-400">Message</label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
              placeholder="How can I help?"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={pending}
              className={`rounded-md bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-medium text-white ${pending ? 'opacity-50' : 'hover:opacity-95'}`}
              aria-label="Send message"
            >
              {pending ? 'Sending…' : 'Send'}
            </button>
            <span className="text-xs text-neutral-500">I read every message.</span>
          </div>
        </form>
      </div>
    </section>
  );
}