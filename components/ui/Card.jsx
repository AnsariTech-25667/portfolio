'use client';
import { useRef } from 'react';
import { cn } from '@/lib/cn';

export default function Card({
  as = 'div',
  className,
  interactive = true,
  glow = true,
  children,
  title,
}) {
  const ref = useRef(null);
  const Component = as;

  const onMouseMove = (e) => {
    if (!interactive || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -6;   // tilt limits
    const ry = (px - 0.5) *  8;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--mx', `${(px - 0.5) * 30}px`);
    el.style.setProperty('--my', `${(py - 0.5) * 30}px`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--mx', '0px');
    el.style.setProperty('--my', '0px');
  };

  return (
    <Component
      ref={ref}
      aria-label={title}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className={cn(
        'card relative rounded-3xl bg-glass gradient-border shadow-card transition-all duration-300 ease-snappy',
        interactive && 'will-change-transform hover:-translate-y-[2px]',
        glow && 'hover:shadow-glow',
        'motion-reduce:transform-none',
        className
      )}
    >
      {/* hover glow (respect reduced motion) */}
      {glow && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
          style={{
            background:
              'radial-gradient(600px 300px at var(--mx,0) var(--my,0), rgba(155,188,255,.10), transparent 60%)'
          }}
        />
      )}

      {/* inner wrapper tilts; outer keeps border crisp */}
      <div
        className={cn(
          'relative rounded-[inherit] p-6 md:p-7',
          interactive && 'tilt'
        )}
        style={{
          transform:
            'perspective(1000px) rotateX(var(--rx,0)) rotateY(var(--ry,0)) translateZ(0)'
        }}
      >
        {children}
      </div>
    </Component>
  );
}