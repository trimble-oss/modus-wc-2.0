import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { SmartInternSlide } from '../../types/slides';

interface Props {
  slide: SmartInternSlide;
  revealIndex: number;
}

export function SmartInternSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="grid-two">
        <div className="stack">
          {slide.metaphor.map((line, index) => (
            <Reveal key={line} index={index} revealIndex={revealIndex}>
              <div className="callout">{line}</div>
            </Reveal>
          ))}

          <Reveal index={3} revealIndex={revealIndex}>
            <p className="takeaway">{slide.truth}</p>
          </Reveal>
        </div>

        <Reveal index={4} revealIndex={revealIndex}>
          <div className="prompt-structure">
            <p className="prompt-structure__title">Structured prompt</p>
            <ul>
              {slide.fields.map((field) => (
                <li key={field.label}>
                  <strong>{field.label}</strong>
                  <span>{field.example}</span>
                </li>
              ))}
            </ul>
            <p className="muted">{slide.practice}</p>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
