import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import { UrlChip } from '../visuals/UrlChip';
import type { ScrapeMcpSlide } from '../../types/slides';

interface Props {
  slide: ScrapeMcpSlide;
  revealIndex: number;
}

export function ScrapeMcpSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell
      phase={slide.phase}
      phaseLabel={slide.phaseLabel}
      title={slide.title}
      subtitle={slide.subtitle}
    >
      <div className="scene scene--flow">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Playwright MCP" />
          <div className="project-card">
            <div className="project-card__mark">PW</div>
            <UrlChip link={slide.playwright} />
          </div>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Connect" />
          <div className="cursor-chip">Cursor</div>
        </Reveal>
        <Reveal index={2} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Site" />
          <div className="site-frame">
            <span />
            <span />
            <span />
          </div>
        </Reveal>
        <Reveal index={3} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Scrape" />
          <div className="extract-cards">
            <span />
            <span />
          </div>
        </Reveal>
        <Reveal index={4} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Ask Agent" />
          <div className="agent-use">Agent</div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
