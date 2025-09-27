export default function Section({ id, title, children, className, subtitle }) {
  return (
    <section id={id} className={className}>
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          <span className="bg-gradient-brand bg-clip-text text-transparent">{title}</span>
        </h2>
        {subtitle && <p className="mt-2 text-slate-300/80">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}