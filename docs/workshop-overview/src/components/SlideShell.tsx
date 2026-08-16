import type { SourceLink } from '../types/slides';

interface SlideShellProps {
  phase: number;
  title: string;
  subtitle: string;
  sources?: SourceLink[];
  children: React.ReactNode;
}

export function SlideShell({ phase, title, subtitle, sources, children }: SlideShellProps) {
  return (
    <section className="slide" aria-label={title}>
      <header className="slide__header">
        <p className="slide__phase">Phase {phase}</p>
        <h1 className="slide__title">{title}</h1>
        <p className="slide__subtitle">{subtitle}</p>
      </header>
      <div className="slide__body">{children}</div>
      {sources && sources.length > 0 ? (
        <footer className="slide__sources">
          {sources.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          ))}
        </footer>
      ) : null}
    </section>
  );
}
