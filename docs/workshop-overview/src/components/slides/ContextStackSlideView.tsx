import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import { UrlChip } from '../visuals/UrlChip';
import type { ContextStackSlide } from '../../types/slides';

interface Props {
  slide: ContextStackSlide;
  revealIndex: number;
}

const LAYERS = ['Prompt', 'Rules', 'Skills', 'MCP / Figma'];

export function ContextStackSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="tower">
        {LAYERS.map((layer, index) => (
          <Reveal key={layer} index={index} revealIndex={revealIndex} className="tower__layer">
            <CloudBubble label={layer} />
            <div className="tower__block">
              {layer}
              {layer === 'MCP / Figma' ? <UrlChip link={slide.figma} /> : null}
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
