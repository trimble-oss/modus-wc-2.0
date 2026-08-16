import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { FrameworksSlide } from '../../types/slides';

interface Props {
  slide: FrameworksSlide;
  revealIndex: number;
}

export function FrameworksSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--app">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Component" />
          <div className="app-block">Filter</div>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="State" />
          <div className="state-token">risk = high</div>
        </Reveal>
        <Reveal index={2} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Event" />
          <div className="spark">click</div>
        </Reveal>
        <Reveal index={3} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Same list" />
          <div className="list-card">
            <span className={revealIndex >= 3 ? 'list-card__row list-card__row--live' : 'list-card__row'} />
            <span className="list-card__row" />
            <span className="list-card__row" />
          </div>
        </Reveal>
        <Reveal index={4} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="React" />
          <div className="react-badge">React</div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
