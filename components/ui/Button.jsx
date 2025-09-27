'use client';
import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-2xl font-medium tracking-tight transition-all duration-300 ease-snappy focusable active:scale-[.98]';

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-base',
  lg: 'h-12 px-6 text-base',
};

const variants = {
  primary:
    // gradient fill + glow on hover
    'text-slate-900 shadow-card bg-gradient-brand hover:shadow-glow',
  secondary:
    // glass with gradient border; subtle fill on hover
    'text-slate-100 bg-glass gradient-border hover:shadow-glow hover:bg-[rgba(34,211,238,.08)]',
  ghost:
    'text-slate-200/90 bg-transparent border border-[var(--border)] hover:bg-white/5',
};

function Sheen() {
  // moving sheen (uses @keyframes sheen from Part 1)
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <span className="absolute -inset-1 translate-x-[-120%] top-0 h-full w-1/3 bg-white/15 blur-md [mask-image:linear-gradient(90deg,transparent,white,transparent)] animate-sheen" />
    </span>
  );
}

function Spinner() {
  return (
    <span
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-transparent"
      aria-hidden
    />
  );
}

const Button = forwardRef(function Button(
  { children, className, variant = 'primary', size = 'md', href, iconLeft, iconRight, loading, disabled, ...props },
  ref
) {
  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    'shadow-card hover:-translate-y-[1px]',
    loading && 'pointer-events-none opacity-80'
  );

  const content = (
    <>
      <Sheen />
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span className="relative z-[1]">{children}</span>
      {loading ? <Spinner /> : iconRight ? <span className="shrink-0">{iconRight}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes + ' no-underline'}
        aria-busy={loading || undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      className={cn(classes, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </button>
  );
});

export { Button };