import SectionHeading from '../SectionHeading';

export default function Section({ id, title, children, className, subtitle }) {
  return (
    <section id={id} className={className}>
      {title && (
        <header className="mb-6 md:mb-8">
          <SectionHeading id={id}>{title}</SectionHeading>
          {subtitle && <p className="container mx-auto px-6 md:px-10 lg:px-14 pl-2 md:pl-4 lg:pl-6 mt-2 text-slate-300/80">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}