import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import { UrlChip } from '../visuals/UrlChip';
import type { ModusBuildSlide } from '../../types/slides';

interface Props {
  slide: ModusBuildSlide;
  revealIndex: number;
}

export function ModusBuildSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--compare">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Generic" />
          <div className="ui-messy">
            <button type="button" className="ui-messy__btn" tabIndex={-1}>
              Go
            </button>
            <div className="ui-messy__box" />
            <div className="ui-messy__box ui-messy__box--odd" />
          </div>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Modus" />
          <div className="ui-modus">
            <button type="button" className="ui-modus__btn" tabIndex={-1}>
              Continue
            </button>
            <div className="ui-modus__box" />
            <div className="ui-modus__box" />
            <UrlChip link={slide.modus} />
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
