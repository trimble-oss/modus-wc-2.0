import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { RulesSlide } from '../../types/slides';

interface Props {
  slide: RulesSlide;
  revealIndex: number;
}

export function RulesSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--rules">
        <Reveal index={0} revealIndex={revealIndex} className={`object-wrap ${revealIndex >= 2 ? 'object-wrap--fade' : ''}`}>
          <CloudBubble label="Prompt" />
          <div className="sticky">one chat</div>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Rules" />
          <div className="rule-board">
            <span />
            <span />
            <span />
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
