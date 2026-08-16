import type { ReactNode } from 'react';

interface RevealProps {
  index: number;
  revealIndex: number;
  children: ReactNode;
  className?: string;
}

export function Reveal({ index, revealIndex, children, className = '' }: RevealProps) {
  const visible = revealIndex >= index;

  return (
    <div
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      data-reveal-index={index}
      aria-hidden={!visible}
    >
      {children}
    </div>
  );
}
