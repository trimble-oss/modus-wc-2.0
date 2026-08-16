import { AssessmentPanel, Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { ContextStackSlide } from '../../types/slides';

interface Props {
  slide: ContextStackSlide;
  revealIndex: number;
}

export function ContextStackSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="stack-layers">
        {slide.layers.map((layer, index) => (
          <Reveal key={layer.name} index={index} revealIndex={revealIndex} className="stack-layer">
            <div>
              <h3>{layer.name}</h3>
              <p className="stack-layer__role">{layer.role}</p>
            </div>
            <p>{layer.detail}</p>
          </Reveal>
        ))}
      </div>

      <Reveal index={4} revealIndex={revealIndex}>
        <ol className="flow-list">
          {slide.flow.map((step) => (
            <li key={step.label}>
              <strong>{step.label}</strong>
              {step.detail ? <span>{step.detail}</span> : null}
            </li>
          ))}
        </ol>
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
