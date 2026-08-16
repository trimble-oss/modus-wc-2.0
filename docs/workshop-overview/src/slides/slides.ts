import type { Slide } from '../types/slides';

export const slides: Slide[] = [
  {
    id: 'phase-1-agent',
    kind: 'agent-start',
    phase: 1,
    title: 'Start in the Agents window',
    subtitle: 'Phase 1 — Your first conversation with Agent',
    revealCount: 4,
    prompt: 'Build a simple landing page for a field-supervisor dashboard. Open it when you are done.',
    followUp: 'You do not need to open the terminal or find files yourself. Ask Agent to open what it built.',
    takeaway: 'Natural language is the starting interface. Agent handles the mechanics.',
    sources: [
      { label: 'Cursor Agent overview', href: 'https://cursor.com/docs/agent/overview' },
      { label: 'Cursor Browser tool', href: 'https://cursor.com/docs/agent/tools/browser' },
    ],
  },
  {
    id: 'phase-1-intent',
    kind: 'intent-layer',
    phase: 1,
    title: 'A new layer on top of code',
    subtitle: 'Phase 1 — From machine code to intent',
    revealCount: 6,
    timeline: [
      { era: '1', label: 'Machine code', detail: 'Humans wrote binary and assembly by hand.' },
      { era: '2', label: 'Programming languages', detail: 'Higher-level languages made logic easier to express.' },
      { era: '3', label: 'IDEs & editors', detail: 'Tools helped us write, navigate, and debug code faster.' },
      { era: '4', label: 'Natural language + Agent', detail: 'We describe outcomes; Agent produces the code underneath.' },
    ],
    insight: 'You are not typing the implementation. You are directing the product outcome.',
    clarification:
      'Code still exists under the surface. The shift is who writes it and what you optimize for: behavior, not syntax.',
    assessment: {
      title: 'Assessment 1',
      task: 'Create a basic web page in your workshop folder and ask Agent to open it.',
      success: 'You can see the page running without opening the terminal yourself.',
    },
    sources: [
      {
        label: 'Prompting Is a Design Act — Smashing Magazine',
        href: 'https://www.smashingmagazine.com/2025/08/prompting-design-act-brief-guide-iterate-ai/',
      },
    ],
  },
  {
    id: 'phase-2-intern',
    kind: 'smart-intern',
    phase: 2,
    title: 'Guide the smart intern',
    subtitle: 'Phase 2 — Better prompts, better results',
    revealCount: 5,
    metaphor: [
      'Agent knows a lot.',
      'It can move fast.',
      'It still needs a guide who understands the goal.',
    ],
    truth: 'AI does not always do what you want. You get what you ask for — so learn how to speak with it.',
    fields: [
      { label: 'Goal', example: 'Help a supervisor spot delayed jobs before stand-up.' },
      { label: 'Audience', example: 'Field supervisor on a laptop with a weak connection.' },
      { label: 'Context', example: 'Morning workflow, 40+ active jobs.' },
      { label: 'Requirements', example: 'Filter by risk, open job details, keep primary action visible.' },
      { label: 'Success', example: 'Find one delayed job in under 20 seconds.' },
    ],
    practice:
      'Structured prompts help. Practice helps more. Read examples, then iterate in your own project.',
    sources: [
      { label: 'Cursor Agent overview', href: 'https://cursor.com/docs/agent/overview' },
      { label: 'OpenAI prompt engineering guide', href: 'https://platform.openai.com/docs/guides/prompt-engineering' },
    ],
  },
  {
    id: 'phase-2-frameworks',
    kind: 'frameworks',
    phase: 2,
    title: 'Why frameworks appear',
    subtitle: 'Phase 2 — React as the workshop vehicle',
    revealCount: 6,
    problem: 'Once a page must remember choices and reuse parts, plain HTML is not enough.',
    concepts: [
      { term: 'Component', meaning: 'A reusable piece of UI, like a filter panel.' },
      { term: 'State', meaning: 'What the screen remembers right now, like selected risk.' },
      { term: 'Event', meaning: 'Something the user did, like changing a filter.' },
      { term: 'Data flow', meaning: 'How information moves from action to updated UI.' },
    ],
    reactNote:
      'You do not need to learn React syntax. You need the name of the framework and the interaction you want.',
    assessment: {
      title: 'Assessment 2',
      task: 'Create a richer React app with at least one interactive state change.',
      success: 'Changing a control updates the same screen without rebuilding the whole page.',
    },
    sources: [{ label: 'React docs — Describing the UI', href: 'https://react.dev/learn/describing-the-ui' }],
  },
  {
    id: 'phase-3-rules',
    kind: 'rules',
    phase: 3,
    title: 'Rules are persistent instructions',
    subtitle: 'Phase 3 — Standards that repeat every session',
    revealCount: 4,
    contrast: {
      prompt: 'A one-time instruction in chat.',
      rules: 'Standards stored in the project that Agent should follow repeatedly.',
    },
    examples: [
      'Use Modus components before inventing custom UI.',
      'Prefer accessible labels and keyboard support.',
      'Keep workshop apps inside the shared workspace folders.',
    ],
    sources: [{ label: 'Cursor Rules', href: 'https://cursor.com/docs/context/rules' }],
  },
  {
    id: 'phase-3-skills-mcp',
    kind: 'skills-mcp',
    phase: 3,
    title: 'Skills, MCP, and Figma context',
    subtitle: 'Phase 3 — Workflows and connected knowledge',
    revealCount: 4,
    skills: {
      name: 'Skills',
      role: 'Task playbook',
      detail: 'Reusable workflows for a kind of job, like building a form or reviewing accessibility.',
    },
    mcp: {
      name: 'MCP',
      role: 'Connected tools',
      detail: 'Live access to docs, design files, APIs, and other systems Agent can query.',
    },
    figma: {
      name: 'Figma MCP',
      role: 'Structured design input',
      detail: 'A selection link can carry components, variables, and layout — not just pixels.',
    },
    sources: [
      { label: 'Cursor Skills', href: 'https://cursor.com/docs/context/skills' },
      { label: 'Cursor MCP', href: 'https://cursor.com/docs/context/mcp' },
      {
        label: 'Figma MCP in Cursor',
        href: 'https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server',
      },
    ],
  },
  {
    id: 'phase-3-stack',
    kind: 'context-stack',
    phase: 3,
    title: 'The complete AI context stack',
    subtitle: 'Phase 3 — How the pieces fit together',
    revealCount: 6,
    layers: [
      { name: 'Prompt', role: 'What you want right now', detail: 'Goal, audience, context, requirements, success.' },
      { name: 'Rules', role: 'What should always be true', detail: 'Project standards and guardrails.' },
      { name: 'Skills', role: 'How to do this kind of task', detail: 'Repeatable workflows for common jobs.' },
      { name: 'MCP / Figma', role: 'What to look up or import', detail: 'Current facts, docs, and structured design context.' },
    ],
    flow: [
      { label: 'Brief Agent', detail: 'State the user goal and constraints.' },
      { label: 'Apply rules & skills', detail: 'Let persistent context shape the build.' },
      { label: 'Pull design context', detail: 'Paste a Figma selection link when relevant.' },
      { label: 'Build & verify', detail: 'Ask Agent to open the result and check behavior.' },
    ],
    assessment: {
      title: 'Assessment 3',
      task: 'Connect the workshop context (rules/skills/MCP as provided) and create an app in your workspace folder.',
      success: 'The app runs locally and reflects the connected context, not a generic one-off UI.',
    },
    sources: [{ label: 'Modus AI', href: 'https://modus.trimble.com/modus-ai' }],
  },
  {
    id: 'phase-4-modus',
    kind: 'modus-overview',
    phase: 4,
    title: 'What Modus provides',
    subtitle: 'Phase 4 — A shared product language',
    revealCount: 5,
    layers: [
      { name: 'Foundations', detail: 'Color, type, spacing, motion, accessibility.' },
      { name: 'Components', detail: 'Buttons, inputs, tables, dialogs, and more.' },
      { name: 'Patterns', detail: 'Common product compositions built from components.' },
      { name: 'Templates', detail: 'Larger starting points for real workflows.' },
    ],
    aiResources: [
      'Modus Cursor rules',
      'Modus Cursor skills',
      'Modus Docs MCP for current component contracts',
    ],
    sources: [
      { label: 'Modus AI', href: 'https://modus.trimble.com/modus-ai' },
      { label: 'Modus Cursor rules', href: 'https://modus.trimble.com/modus-ai/rules/cursor' },
      { label: 'Modus Cursor skills', href: 'https://modus.trimble.com/modus-ai/skills/cursor' },
    ],
  },
  {
    id: 'phase-4-build',
    kind: 'modus-build',
    phase: 4,
    title: 'Build with Modus, not beside it',
    subtitle: 'Phase 4 — Reuse before reinventing',
    revealCount: 5,
    generic: {
      title: 'Generic Agent output',
      items: ['Custom button styles', 'Almost-right spacing', 'One-off modal behavior', 'A parallel design system'],
    },
    modus: {
      title: 'Modus-driven build',
      items: ['Shared foundations', 'Known components', 'Documented states', 'Less rework for Engineering'],
    },
    verify: [
      'Ask Agent to open the app in the browser.',
      'Complete the primary task yourself.',
      'Check focus, labels, and error recovery — not just appearance.',
    ],
    assessment: {
      title: 'Assessment 4',
      task: 'Rebuild or extend your app using Modus components and Modus AI resources.',
      success: 'The UI uses Modus building blocks and behaves correctly in the browser.',
    },
    sources: [
      { label: 'Modus accessibility overview', href: 'https://modus.trimble.com/foundations/accessibility/overview' },
    ],
  },
  {
    id: 'phase-5-repo',
    kind: 'github-repo',
    phase: 5,
    title: 'From folder to repository',
    subtitle: 'Phase 5 — Make the work shareable',
    revealCount: 6,
    flow: [
      { label: 'Local workspace', detail: 'One shared folder structure for the workshop.' },
      { label: 'GitHub repository', detail: 'Saved history, review, and collaboration.' },
      { label: 'Access', detail: 'Invite collaborators with the right permissions.' },
      { label: 'Clone & run', detail: 'Others can copy the project and run it locally.' },
    ],
    audiences: [
      {
        role: 'Product / Design',
        needs: ['Repository link', 'Preview or local run instructions', 'Permission to view and comment'],
      },
      {
        role: 'Engineering',
        needs: ['Repository access', 'Branch or PR workflow', 'Build and deploy setup when needed'],
      },
    ],
    sources: [
      {
        label: 'GitHub: About repositories',
        href: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories',
      },
      {
        label: 'GitHub: Managing access',
        href: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-permissions',
      },
    ],
  },
  {
    id: 'phase-5-preview',
    kind: 'github-preview',
    phase: 5,
    title: 'From repository to preview URL',
    subtitle: 'Phase 5 — Give people something they can try',
    revealCount: 6,
    localSteps: [
      'Share the repository link.',
      'Tell collaborators how to run the app locally.',
      'Confirm the primary task works on their machine.',
    ],
    pagesNote:
      'GitHub Pages can host static sites for free on public repositories at username.github.io/repository-name.',
    privateNote:
      'Private GitHub Pages visibility requires GitHub Enterprise Cloud. On standard plans, use a public repo or ask Engineering for a preview environment.',
    fallback:
      'If your org cannot publish a free preview, ask Engineering to set up Vercel, Netlify, or an internal preview pipeline.',
    assessment: {
      title: 'Assessment 5',
      task: 'Publish the repository and provide three links: repo, local run steps, and preview URL if available.',
      success: 'A non-builder can open the repo, and a reviewer can try the app locally or via preview.',
    },
    sources: [
      { label: 'GitHub Pages', href: 'https://docs.github.com/en/pages' },
      { label: 'GitHub Pages visibility', href: 'https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site' },
    ],
  },
];

export const totalSlides = slides.length;

export function getMaxRevealIndex(slide: Slide): number {
  return slide.revealCount - 1;
}
