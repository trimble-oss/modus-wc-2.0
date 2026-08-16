import type { ReactNode } from 'react';

interface SlideShellProps {
  phase: number;
  phaseLabel?: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function SlideShell({ phase, phaseLabel, title, subtitle, children }: SlideShellProps) {
  return (
    <section className="slide" aria-label={title}>
      <header className="slide__header">
        <p className="slide__phase">{phaseLabel ?? `Phase ${phase}`}</p>
        <h1 className="slide__title">{title}</h1>
        <p className="slide__subtitle">{subtitle}</p>
      </header>
      <div className="slide__body">{children}</div>
    </section>
  );
}
