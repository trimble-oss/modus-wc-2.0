import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { AgentStartSlide } from '../../types/slides';

interface Props {
  slide: AgentStartSlide;
  revealIndex: number;
}

export function AgentStartSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="grid-two">
        <Reveal index={0} revealIndex={revealIndex}>
          <div className="mock-window" aria-label="Cursor Agents window mockup">
            <div className="mock-window__chrome">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-window__title">Agents</div>
            <div className="mock-window__pane">
              <p className="mock-window__label">Agent chat</p>
              <div className="mock-window__bubble mock-window__bubble--user">Your prompt appears here.</div>
              <div className="mock-window__bubble mock-window__bubble--agent">Agent plans, builds, and responds.</div>
            </div>
          </div>
        </Reveal>

        <div className="stack">
          <Reveal index={1} revealIndex={revealIndex}>
            <div className="prompt-card">
              <p className="prompt-card__label">Example prompt</p>
              <p className="prompt-card__text">{slide.prompt}</p>
            </div>
          </Reveal>

          <Reveal index={2} revealIndex={revealIndex}>
            <div className="callout">{slide.followUp}</div>
          </Reveal>

          <Reveal index={3} revealIndex={revealIndex}>
            <p className="takeaway">{slide.takeaway}</p>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}
