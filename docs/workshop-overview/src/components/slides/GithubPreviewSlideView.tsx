import { AssessmentPanel, Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { GithubPreviewSlide } from '../../types/slides';

interface Props {
  slide: GithubPreviewSlide;
  revealIndex: number;
}

export function GithubPreviewSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <Reveal index={0} revealIndex={revealIndex}>
        <ul className="bullet-list">
          {slide.localSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal index={1} revealIndex={revealIndex}>
        <div className="callout">{slide.pagesNote}</div>
      </Reveal>

      <Reveal index={2} revealIndex={revealIndex}>
        <p className="muted">{slide.privateNote}</p>
      </Reveal>

      <Reveal index={3} revealIndex={revealIndex}>
        <p className="takeaway">{slide.fallback}</p>
      </Reveal>

      {slide.assessment ? (
        <AssessmentPanel
          index={4}
          revealIndex={revealIndex}
          title={slide.assessment.title}
          task={slide.assessment.task}
          success={slide.assessment.success}
        />
      ) : null}
    </SlideShell>
  );
}
