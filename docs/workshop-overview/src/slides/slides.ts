import type { Slide } from '../types/slides';

const FIGMA_MCP: { label: string; href: string } = {
  label: 'Figma MCP catalog',
  href: 'https://www.figma.com/mcp-catalog/',
};

const MODUS_AI: { label: string; href: string } = {
  label: 'Modus AI',
  href: 'https://modus.trimble.com/modus-ai',
};

const PLAYWRIGHT_MCP: { label: string; href: string } = {
  label: 'Playwright MCP',
  href: 'https://playwright.dev/docs/getting-started-mcp',
};

export const slides: Slide[] = [
  {
    id: 'phase-1-agent',
    kind: 'agent-start',
    phase: 1,
    title: 'Start in the Agents window',
    subtitle: 'Phase 1',
    revealCount: 4,
    prompt: 'Build a simple landing page. Open it when you are done.',
    reply: 'Built. Opening the preview.',
  },
  {
    id: 'phase-1-intent',
    kind: 'intent-layer',
    phase: 1,
    title: 'A new layer on top of code',
    subtitle: 'Phase 1',
    revealCount: 4,
    rings: ['Binary', 'Language', 'IDE', 'Agent'],
    assessment: {
      title: 'Assessment 1',
      task: 'Create a basic web page in your workshop folder and ask Agent to open it.',
      success: 'You can see the page running without opening the terminal yourself.',
    },
  },
  {
    id: 'phase-2-intern',
    kind: 'smart-intern',
    phase: 2,
    title: 'Guide the smart intern',
    subtitle: 'Phase 2',
    revealCount: 5,
    fields: ['Goal', 'Audience', 'Context', 'Requirements', 'Success'],
  },
  {
    id: 'phase-2-frameworks',
    kind: 'frameworks',
    phase: 2,
    title: 'Why frameworks appear',
    subtitle: 'Phase 2',
    revealCount: 5,
    assessment: {
      title: 'Assessment 2',
      task: 'Create a richer React app with at least one interactive state change.',
      success: 'Changing a control updates the same screen without rebuilding the whole page.',
    },
  },
  {
    id: 'phase-3-rules',
    kind: 'rules',
    phase: 3,
    title: 'Rules stay after the prompt',
    subtitle: 'Phase 3',
    revealCount: 3,
  },
  {
    id: 'phase-3-skills-mcp',
    kind: 'skills-mcp',
    phase: 3,
    title: 'Skills, MCP, and Figma',
    subtitle: 'Phase 3',
    revealCount: 4,
    figma: FIGMA_MCP,
  },
  {
    id: 'phase-3-stack',
    kind: 'context-stack',
    phase: 3,
    title: 'The context stack',
    subtitle: 'Phase 3',
    revealCount: 4,
    figma: FIGMA_MCP,
    assessment: {
      title: 'Assessment 3',
      task: 'Connect the workshop context (rules/skills/MCP as provided) and create an app in your workspace folder.',
      success: 'The app runs locally and reflects the connected context, not a generic one-off UI.',
    },
  },
  {
    id: 'detour-playwright',
    kind: 'scrape-mcp',
    phase: 3,
    phaseLabel: 'Detour',
    title: 'Add Playwright MCP, then scrape',
    subtitle: 'Before Phase 4',
    revealCount: 5,
    playwright: PLAYWRIGHT_MCP,
  },
  {
    id: 'phase-4-modus',
    kind: 'modus-overview',
    phase: 4,
    title: 'What Modus provides',
    subtitle: 'Phase 4',
    revealCount: 5,
    modus: MODUS_AI,
    layers: ['Foundations', 'Components', 'Patterns', 'Templates'],
  },
  {
    id: 'phase-4-build',
    kind: 'modus-build',
    phase: 4,
    title: 'Build with Modus',
    subtitle: 'Phase 4',
    revealCount: 2,
    modus: MODUS_AI,
    assessment: {
      title: 'Assessment 4',
      task: 'Rebuild or extend your app using Modus components and Modus AI resources.',
      success: 'The UI uses Modus building blocks and behaves correctly in the browser.',
    },
  },
  {
    id: 'phase-5-repo',
    kind: 'github-repo',
    phase: 5,
    title: 'From folder to repository',
    subtitle: 'Phase 5',
    revealCount: 4,
  },
  {
    id: 'phase-5-preview',
    kind: 'github-preview',
    phase: 5,
    title: 'From repository to preview',
    subtitle: 'Phase 5',
    revealCount: 3,
    assessment: {
      title: 'Assessment 5',
      task: 'Publish the repository and provide three links: repo, local run steps, and preview URL if available.',
      success: 'A non-builder can open the repo, and a reviewer can try the app locally or via preview.',
    },
  },
];

export const totalSlides = slides.length;

export function getMaxRevealIndex(slide: Slide): number {
  return slide.revealCount - 1;
}
