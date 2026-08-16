import { AssessmentPanel, Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { IntentLayerSlide } from '../../types/slides';

interface Props {
  slide: IntentLayerSlide;
  revealIndex: number;
}

export function IntentLayerSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="timeline">
        {slide.timeline.map((item, index) => (
          <Reveal key={item.label} index={index} revealIndex={revealIndex} className="timeline__item">
            <div className="timeline__era">{item.era}</div>
            <div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal index={4} revealIndex={revealIndex}>
        <p className="takeaway">{slide.insight}</p>
        <p className="muted">{slide.clarification}</p>
      </Reveal>

      {slide.assessment ? (
        <AssessmentPanel
          index={5}
          revealIndex={revealIndex}
          title={slide.assessment.title}
          task={slide.assessment.task}
          success={slide.assessment.success}
        />
      ) : null}
    </SlideShell>
  );
}
