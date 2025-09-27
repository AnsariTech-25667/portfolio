'use client';
import { cn } from '@/lib/cn';

const sizes = {
  sm: 'h-7 px-3 text-xs',
  md: 'h-8 px-3.5 text-sm',
};

const variants = {
  solid:
    'bg-[var(--card-solid)] text-slate-200 border border-[var(--border)]',
  outline:
    'bg-transparent text-slate-200 border border-[var(--border)]',
  gradient:
    'text-slate-900 bg-gradient-brand shadow-card',
};

export function Chip({
  children,
  className,
  size = 'sm',
  variant = 'solid',
  icon,
  onClick,
  asButton,
}) {
  const base =
    'inline-flex items-center gap-1.5 rounded-full transition-all duration-300 ease-snappy hover:shadow-glow hover:-translate-y-[1px]';
  const cls = cn(base, sizes[size], variants[variant], className);

  const Cmp = asButton ? 'button' : 'span';

  return (
    <Cmp className={cls} onClick={onClick}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </Cmp>
  );
}