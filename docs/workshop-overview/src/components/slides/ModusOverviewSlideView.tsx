import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import { UrlChip } from '../visuals/UrlChip';
import type { ModusOverviewSlide } from '../../types/slides';

interface Props {
  slide: ModusOverviewSlide;
  revealIndex: number;
}

export function ModusOverviewSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="object-wrap modus-project">
        <CloudBubble label="Modus" />
        <div className="project-card project-card--wide">
          <div className="modus-stack">
            {slide.layers.map((layer, index) => (
              <Reveal key={layer} index={index} revealIndex={revealIndex} className="modus-brick">
                {layer}
              </Reveal>
            ))}
          </div>
          <Reveal index={4} revealIndex={revealIndex}>
            <UrlChip link={slide.modus} />
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}
