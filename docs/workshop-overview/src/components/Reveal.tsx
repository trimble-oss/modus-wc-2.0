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

interface AssessmentPanelProps {
  title: string;
  task: string;
  success: string;
  index: number;
  revealIndex: number;
}

export function AssessmentPanel({ title, task, success, index, revealIndex }: AssessmentPanelProps) {
  return (
    <Reveal index={index} revealIndex={revealIndex} className="assessment">
      <p className="assessment__label">{title}</p>
      <p className="assessment__task">{task}</p>
      <p className="assessment__success">
        <strong>Success:</strong> {success}
      </p>
    </Reveal>
  );
}
