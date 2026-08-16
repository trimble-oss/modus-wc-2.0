import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { SmartInternSlide } from '../../types/slides';

interface Props {
  slide: SmartInternSlide;
  revealIndex: number;
}

export function SmartInternSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--intern">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Smart intern" />
          <div className={`figure figure--intern ${revealIndex >= 2 ? 'figure--drift' : ''}`}>
            <svg viewBox="0 0 80 110" width="80" height="110" aria-hidden="true">
              <circle cx="40" cy="18" r="12" fill="#fbad26" />
              <rect x="28" y="34" width="24" height="36" rx="8" fill="#2d3848" />
              <rect x="18" y="40" width="10" height="22" rx="5" fill="#a8b3c2" />
              <rect x="52" y="40" width="10" height="22" rx="5" fill="#a8b3c2" />
              <rect x="30" y="72" width="8" height="24" rx="4" fill="#3d4b5f" />
              <rect x="42" y="72" width="8" height="24" rx="4" fill="#3d4b5f" />
            </svg>
          </div>
        </Reveal>

        <Reveal index={1} revealIndex={revealIndex} className="orbit">
          {['Docs', 'Code', 'UI'].map((item) => (
            <span key={item} className="orbit__icon">
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal index={3} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Guide" />
          <div className="figure figure--guide">
            <svg viewBox="0 0 90 90" width="90" height="90" aria-hidden="true">
              <circle cx="45" cy="45" r="36" fill="none" stroke="#fbad26" strokeWidth="4" />
              <polygon points="45,16 52,45 45,74 38,45" fill="#fbad26" />
              <circle cx="45" cy="45" r="6" fill="#0f1419" />
            </svg>
          </div>
        </Reveal>
      </div>

      <Reveal index={4} revealIndex={revealIndex} className="chip-row">
        {slide.fields.map((field) => (
          <span key={field} className="chip">
            {field}
          </span>
        ))}
      </Reveal>
    </SlideShell>
  );
}
