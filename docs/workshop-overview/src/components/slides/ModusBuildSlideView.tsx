import { AssessmentPanel, Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { ModusBuildSlide } from '../../types/slides';

interface Props {
  slide: ModusBuildSlide;
  revealIndex: number;
}

export function ModusBuildSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="compare-row">
        <Reveal index={0} revealIndex={revealIndex} className="compare-card">
          <h3>{slide.generic.title}</h3>
          <ul>
            {slide.generic.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="compare-card compare-card--accent">
          <h3>{slide.modus.title}</h3>
          <ul>
            {slide.modus.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal index={2} revealIndex={revealIndex}>
        <ul className="bullet-list">
          {slide.verify.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      {slide.assessment ? (
        <AssessmentPanel
          index={3}
          revealIndex={revealIndex}
          title={slide.assessment.title}
          task={slide.assessment.task}
          success={slide.assessment.success}
        />
      ) : null}
    </SlideShell>
  );
}
