import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { RulesSlide } from '../../types/slides';

interface Props {
  slide: RulesSlide;
  revealIndex: number;
}

export function RulesSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="compare-row">
        <Reveal index={0} revealIndex={revealIndex} className="compare-card">
          <h3>Prompt</h3>
          <p>{slide.contrast.prompt}</p>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="compare-card compare-card--accent">
          <h3>Rules</h3>
          <p>{slide.contrast.rules}</p>
        </Reveal>
      </div>

      <Reveal index={2} revealIndex={revealIndex}>
        <ul className="bullet-list">
          {slide.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal index={3} revealIndex={revealIndex}>
        <p className="takeaway">Rules turn repeated guidance into project memory.</p>
      </Reveal>
    </SlideShell>
  );
}
