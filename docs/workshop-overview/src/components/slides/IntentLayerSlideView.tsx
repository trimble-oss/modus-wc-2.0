import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { IntentLayerSlide } from '../../types/slides';

interface Props {
  slide: IntentLayerSlide;
  revealIndex: number;
}

const SIZES = [88, 160, 232, 304];

export function IntentLayerSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="rings" aria-label="Layers from binary to Agent">
        {slide.rings.map((label, index) => (
          <Reveal
            key={label}
            index={index}
            revealIndex={revealIndex}
            className={`ring ring--${index}`}
          >
            <div className="ring__circle" style={{ width: SIZES[index], height: SIZES[index] }}>
              {index === 0 ? <span className="ring__core">0101</span> : null}
            </div>
            <CloudBubble label={label} />
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
