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

export interface TimelineItem {
  era: string;
  label: string;
  detail: string;
}

export interface PromptField {
  label: string;
  example: string;
}

export interface FrameworkConcept {
  term: string;
  meaning: string;
}

export interface ContextLayer {
  name: string;
  role: string;
  detail: string;
}

export interface ModusLayer {
  name: string;
  detail: string;
}

export interface FlowStep {
  label: string;
  detail?: string;
}

export interface ComparisonSide {
  title: string;
  items: string[];
}

export interface AudienceNeed {
  role: string;
  needs: string[];
}

export interface SlideBase {
  id: string;
  phase: SlidePhase;
  title: string;
  subtitle: string;
  revealCount: number;
  sources?: SourceLink[];
  assessment?: Assessment;
}

export interface AgentStartSlide extends SlideBase {
  kind: 'agent-start';
  prompt: string;
  followUp: string;
  takeaway: string;
}

export interface IntentLayerSlide extends SlideBase {
  kind: 'intent-layer';
  timeline: TimelineItem[];
  insight: string;
  clarification: string;
}

export interface SmartInternSlide extends SlideBase {
  kind: 'smart-intern';
  metaphor: string[];
  truth: string;
  fields: PromptField[];
  practice: string;
}

export interface FrameworksSlide extends SlideBase {
  kind: 'frameworks';
  problem: string;
  concepts: FrameworkConcept[];
  reactNote: string;
}

export interface RulesSlide extends SlideBase {
  kind: 'rules';
  contrast: { prompt: string; rules: string };
  examples: string[];
}

export interface SkillsMcpSlide extends SlideBase {
  kind: 'skills-mcp';
  skills: ContextLayer;
  mcp: ContextLayer;
  figma: ContextLayer;
}

export interface ContextStackSlide extends SlideBase {
  kind: 'context-stack';
  layers: ContextLayer[];
  flow: FlowStep[];
}

export interface ModusOverviewSlide extends SlideBase {
  kind: 'modus-overview';
  layers: ModusLayer[];
  aiResources: string[];
}

export interface ModusBuildSlide extends SlideBase {
  kind: 'modus-build';
  generic: ComparisonSide;
  modus: ComparisonSide;
  verify: string[];
}

export interface GithubRepoSlide extends SlideBase {
  kind: 'github-repo';
  flow: FlowStep[];
  audiences: AudienceNeed[];
}

export interface GithubPreviewSlide extends SlideBase {
  kind: 'github-preview';
  localSteps: string[];
  pagesNote: string;
  privateNote: string;
  fallback: string;
}

export type Slide =
  | AgentStartSlide
  | IntentLayerSlide
  | SmartInternSlide
  | FrameworksSlide
  | RulesSlide
  | SkillsMcpSlide
  | ContextStackSlide
  | ModusOverviewSlide
  | ModusBuildSlide
  | GithubRepoSlide
  | GithubPreviewSlide;

export function getRevealCount(slide: Slide): number {
  return slide.revealCount;
}

export function slideHasAssessment(slide: Slide): boolean {
  return Boolean(slide.assessment);
}
