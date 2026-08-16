import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { GithubRepoSlide } from '../../types/slides';

interface Props {
  slide: GithubRepoSlide;
  revealIndex: number;
}

export function GithubRepoSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="flow-grid">
        {slide.flow.map((step, index) => (
          <Reveal key={step.label} index={index} revealIndex={revealIndex} className="flow-card">
            <h3>{step.label}</h3>
            <p>{step.detail}</p>
          </Reveal>
        ))}
      </div>

      <div className="audience-grid">
        {slide.audiences.map((audience, index) => (
          <Reveal key={audience.role} index={index + 4} revealIndex={revealIndex} className="audience-card">
            <h3>{audience.role}</h3>
            <ul>
              {audience.needs.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
