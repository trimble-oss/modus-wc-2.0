import type { Slide } from '../types/slides';
import { AgentStartSlideView } from './slides/AgentStartSlideView';
import { ContextStackSlideView } from './slides/ContextStackSlideView';
import { FrameworksSlideView } from './slides/FrameworksSlideView';
import { GithubPreviewSlideView } from './slides/GithubPreviewSlideView';
import { GithubRepoSlideView } from './slides/GithubRepoSlideView';
import { IntentLayerSlideView } from './slides/IntentLayerSlideView';
import { ModusBuildSlideView } from './slides/ModusBuildSlideView';
import { ModusOverviewSlideView } from './slides/ModusOverviewSlideView';
import { RulesSlideView } from './slides/RulesSlideView';
import { SkillsMcpSlideView } from './slides/SkillsMcpSlideView';
import { SmartInternSlideView } from './slides/SmartInternSlideView';

interface SlideRendererProps {
  slide: Slide;
  revealIndex: number;
}

export function SlideRenderer({ slide, revealIndex }: SlideRendererProps) {
  switch (slide.kind) {
    case 'agent-start':
      return <AgentStartSlideView slide={slide} revealIndex={revealIndex} />;
    case 'intent-layer':
      return <IntentLayerSlideView slide={slide} revealIndex={revealIndex} />;
    case 'smart-intern':
      return <SmartInternSlideView slide={slide} revealIndex={revealIndex} />;
    case 'frameworks':
      return <FrameworksSlideView slide={slide} revealIndex={revealIndex} />;
    case 'rules':
      return <RulesSlideView slide={slide} revealIndex={revealIndex} />;
    case 'skills-mcp':
      return <SkillsMcpSlideView slide={slide} revealIndex={revealIndex} />;
    case 'context-stack':
      return <ContextStackSlideView slide={slide} revealIndex={revealIndex} />;
    case 'modus-overview':
      return <ModusOverviewSlideView slide={slide} revealIndex={revealIndex} />;
    case 'modus-build':
      return <ModusBuildSlideView slide={slide} revealIndex={revealIndex} />;
    case 'github-repo':
      return <GithubRepoSlideView slide={slide} revealIndex={revealIndex} />;
    case 'github-preview':
      return <GithubPreviewSlideView slide={slide} revealIndex={revealIndex} />;
    default: {
      const _exhaustive: never = slide;
      return _exhaustive;
    }
  }
}
