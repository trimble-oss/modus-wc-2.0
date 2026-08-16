export type SlidePhase = 1 | 2 | 3 | 4 | 5;

export interface SourceLink {
  label: string;
  href: string;
}

export interface Assessment {
  title: string;
  task: string;
  success: string;
}

export interface SlideBase {
  id: string;
  phase: SlidePhase;
  phaseLabel?: string;
  title: string;
  subtitle: string;
  revealCount: number;
  assessment?: Assessment;
}

export interface AgentStartSlide extends SlideBase {
  kind: 'agent-start';
  prompt: string;
  reply: string;
}

export interface IntentLayerSlide extends SlideBase {
  kind: 'intent-layer';
  rings: string[];
}

export interface SmartInternSlide extends SlideBase {
  kind: 'smart-intern';
  fields: string[];
}

export interface FrameworksSlide extends SlideBase {
  kind: 'frameworks';
}

export interface RulesSlide extends SlideBase {
  kind: 'rules';
}

export interface SkillsMcpSlide extends SlideBase {
  kind: 'skills-mcp';
  figma: SourceLink;
}

export interface ContextStackSlide extends SlideBase {
  kind: 'context-stack';
  figma: SourceLink;
}

export interface ScrapeMcpSlide extends SlideBase {
  kind: 'scrape-mcp';
  playwright: SourceLink;
}

export interface ModusOverviewSlide extends SlideBase {
  kind: 'modus-overview';
  modus: SourceLink;
  layers: string[];
}

export interface ModusBuildSlide extends SlideBase {
  kind: 'modus-build';
  modus: SourceLink;
}

export interface GithubRepoSlide extends SlideBase {
  kind: 'github-repo';
}

export interface GithubPreviewSlide extends SlideBase {
  kind: 'github-preview';
}

export type Slide =
  | AgentStartSlide
  | IntentLayerSlide
  | SmartInternSlide
  | FrameworksSlide
  | RulesSlide
  | SkillsMcpSlide
  | ContextStackSlide
  | ScrapeMcpSlide
  | ModusOverviewSlide
  | ModusBuildSlide
  | GithubRepoSlide
  | GithubPreviewSlide;

export function slideHasAssessment(slide: Slide): boolean {
  return Boolean(slide.assessment);
}
