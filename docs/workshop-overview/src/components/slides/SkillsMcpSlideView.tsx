import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import type { SkillsMcpSlide } from '../../types/slides';

interface Props {
  slide: SkillsMcpSlide;
  revealIndex: number;
}

function LayerCard({
  layer,
  index,
  revealIndex,
}: {
  layer: SkillsMcpSlide['skills'];
  index: number;
  revealIndex: number;
}) {
  return (
    <Reveal index={index} revealIndex={revealIndex} className="layer-card">
      <p className="layer-card__role">{layer.role}</p>
      <h3>{layer.name}</h3>
      <p>{layer.detail}</p>
    </Reveal>
  );
}

export function SkillsMcpSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle} sources={slide.sources}>
      <div className="layer-grid">
        <LayerCard layer={slide.skills} index={0} revealIndex={revealIndex} />
        <LayerCard layer={slide.mcp} index={1} revealIndex={revealIndex} />
        <LayerCard layer={slide.figma} index={2} revealIndex={revealIndex} />
      </div>

      <Reveal index={3} revealIndex={revealIndex}>
        <p className="takeaway">Skills teach how. MCP and Figma supply what Agent should look up or import.</p>
      </Reveal>
    </SlideShell>
  );
}
