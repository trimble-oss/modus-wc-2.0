import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { GithubPreviewSlide } from '../../types/slides';

interface Props {
  slide: GithubPreviewSlide;
  revealIndex: number;
}

export function GithubPreviewSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--flow">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Repo link" />
          <div className="url-pill">github.com/…</div>
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Run locally" />
          <div className="laptop">
            <span />
          </div>
        </Reveal>
        <Reveal index={2} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Preview URL" />
          <div className="url-pill url-pill--live">username.github.io/app</div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
