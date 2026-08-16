import { AssessmentPanel, Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { FrameworksSlide } from '../../types/slides';

interface Props {
  slide: FrameworksSlide;
  revealIndex: number;
}

export function FrameworksSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <Reveal index={0} revealIndex={revealIndex}>
        <p className="lead">{slide.problem}</p>
      </Reveal>

      <div className="concept-grid">
        {slide.concepts.map((concept, index) => (
          <Reveal key={concept.term} index={index + 1} revealIndex={revealIndex} className="concept-card">
            <h3>{concept.term}</h3>
            <p>{concept.meaning}</p>
          </Reveal>
        ))}
      </div>

      <Reveal index={4} revealIndex={revealIndex}>
        <p className="takeaway">{slide.reactNote}</p>
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
