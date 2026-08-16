import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { ModusOverviewSlide } from '../../types/slides';

interface Props {
  slide: ModusOverviewSlide;
  revealIndex: number;
}

export function ModusOverviewSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="modus-stack">
        {slide.layers.map((layer, index) => (
          <Reveal key={layer.name} index={index} revealIndex={revealIndex} className="modus-layer">
            <h3>{layer.name}</h3>
            <p>{layer.detail}</p>
          </Reveal>
        ))}
      </div>

      <Reveal index={4} revealIndex={revealIndex}>
        <div className="modus-layer modus-layer--inline">
          <h3>Modus AI resources</h3>
          <ul className="bullet-list">
            {slide.aiResources.map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SlideShell>
  );
}
