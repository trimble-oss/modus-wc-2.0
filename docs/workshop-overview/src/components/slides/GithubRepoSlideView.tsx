import { Reveal } from '../Reveal';
import { SlideShell } from '../SlideShell';
import { CloudBubble } from '../visuals/CloudBubble';
import type { GithubRepoSlide } from '../../types/slides';

interface Props {
  slide: GithubRepoSlide;
  revealIndex: number;
}

export function GithubRepoSlideView({ slide, revealIndex }: Props) {
  return (
    <SlideShell phase={slide.phase} title={slide.title} subtitle={slide.subtitle}>
      <div className="scene scene--flow">
        <Reveal index={0} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Folder" />
          <div className="folder-icon" />
        </Reveal>
        <Reveal index={1} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="GitHub" />
          <div className="repo-icon">GH</div>
        </Reveal>
        <Reveal index={2} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Product" />
          <div className="badge">Link + preview</div>
        </Reveal>
        <Reveal index={3} revealIndex={revealIndex} className="object-wrap">
          <CloudBubble label="Engineering" />
          <div className="badge">Access + deploy</div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
