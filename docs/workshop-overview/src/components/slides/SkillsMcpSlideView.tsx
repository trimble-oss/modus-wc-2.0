import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import { UrlChip } from '../visuals/UrlChip';
import type { SkillsMcpSlide } from '../../types/slides';

interface Props {
  slide: SkillsMcpSlide;
  revealIndex: number;
}

export function SkillsMcpSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--trio">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Skills" />
          <div className="playbook">SKILL</div>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="MCP" />
          <div className="plug">
            <span />
            <span />
          </div>
        </Reveal>
        <Reveal index={2} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Figma MCP" />
          <div className="figma-frame">
            <div className="figma-frame__art" />
            <UrlChip link={slide.figma} />
          </div>
        </Reveal>
      </div>
      <Reveal index={3} revealIndex={revealIndex} className="connect-line">
        <span className="connect-line__bar" />
      </Reveal>
    </SlideShell>
  );
}
