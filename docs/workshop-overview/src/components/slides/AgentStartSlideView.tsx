import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { AgentStartSlide } from '../../types/slides';

interface Props {
  slide: AgentStartSlide;
  revealIndex: number;
}

export function AgentStartSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--split">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Agents" />
          <div className="mock-window" aria-label="Cursor Agents window">
            <div className="mock-window__chrome">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-window__title">Agents</div>
            <div className="mock-window__pane">
              <Reveal index={1} revealIndex={revealIndex}>
                <div className="mock-window__bubble mock-window__bubble--user">{slide.prompt}</div>
              </Reveal>
              <Reveal index={2} revealIndex={revealIndex}>
                <div className="mock-window__bubble mock-window__bubble--agent">{slide.reply}</div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        <Reveal index={3} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Preview" />
          <div className="preview-pane">
            <div className="preview-pane__bar">localhost:3000</div>
            <div className="preview-pane__page">
              <div className="preview-block preview-block--wide" />
              <div className="preview-block" />
              <div className="preview-block" />
            </div>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
