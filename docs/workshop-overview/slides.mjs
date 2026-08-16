export const meta = {
  title: 'Designing with Agent',
  subtitle: 'Ten visual lessons for building a working prototype',
  author: 'Modus AI Design Workshop',
};

export const slides = [
  {
    kind: 'brief',
    title: 'Natural language is a design brief',
    vague: 'Make me a dashboard.',
    brief: {
      user: 'Field supervisor',
      goal: 'Find delayed jobs before the morning stand-up',
      context: 'Laptop, weak connection, 40+ jobs',
      behavior: 'Filter by risk; open job details',
      acceptance: 'A supervisor finds one delayed job in under 20 seconds',
    },
    takeaway: 'Useful prompts describe a situation—not a screen.',
  },
  {
    kind: 'loop',
    title: 'The first prompt is the start, not the finish',
    steps: ['Describe', 'Build', 'Preview', 'Observe', 'Revise'],
    meme: {
      before: 'FIRST PROMPT\n“It made a page!”',
      after: 'FIFTH PROMPT\n“It solves the task.”',
    },
    takeaway: 'Design judgment lives in the loop.',
  },
  {
    kind: 'structure',
    title: 'HTML gives meaning. CSS gives direction.',
    regions: ['Heading', 'Filters', 'Results', 'Primary action'],
    css: ['Hierarchy', 'Spacing', 'Color', 'Alignment'],
    takeaway: 'Ask Agent for both: what each part is and how it should read.',
  },
  {
    kind: 'states',
    title: 'A screenshot is one moment',
    states: [
      ['Closed', 'Nothing selected'],
      ['Loading', 'Getting job details'],
      ['Empty', 'No delayed jobs'],
      ['Error', 'Could not load'],
      ['Success', 'Job ready to review'],
    ],
    takeaway: 'A product is the movement between these moments.',
  },
  {
    kind: 'framework',
    title: 'Why does a framework appear?',
    system: [
      ['Component', 'A reusable filter panel'],
      ['State', 'risk = “high”'],
      ['Event', 'The user changes the filter'],
      ['Response', 'The same list updates'],
    ],
    vehicles: ['React', 'Angular', 'Vue'],
    takeaway: 'The framework is the vehicle. The interaction is the design.',
  },
  {
    kind: 'figma',
    title: 'A Figma link carries structured context',
    flow: ['Selection link', 'Components + variables + layout', 'Agent builds', 'Browser comparison'],
    contrast: ['Screenshot: pixels', 'MCP: design structure'],
    takeaway: 'Give Agent the selection and the user goal.',
  },
  {
    kind: 'context',
    title: 'Rules, skills, and MCP do different jobs',
    items: [
      ['RULES', 'Standards wall', 'Always follow these'],
      ['SKILLS', 'Task playbook', 'Use this workflow'],
      ['MCP', 'Connected library', 'Look up current facts'],
    ],
    takeaway: 'Together they reduce guessing. They do not replace your brief.',
  },
  {
    kind: 'modus',
    title: 'Do not invent a second design system',
    left: ['Custom button', 'Almost-right spacing', 'New colors', 'One-off modal'],
    right: ['Foundations', 'Components', 'Patterns', 'Templates'],
    meme: {
      setup: 'Agent: “I made a design system!”',
      response: 'Designer: “We already have one.”',
    },
    takeaway: 'Start with Modus. Change only what the product truly needs.',
  },
  {
    kind: 'qa',
    title: '“It works” is a claim. The browser is evidence.',
    checks: [
      ['Task', 'Can someone finish it?'],
      ['States', 'Empty, loading, error, success?'],
      ['Layout', 'Narrow and wide?'],
      ['Keyboard', 'Focus visible and usable?'],
      ['Content', 'Long names and real volume?'],
      ['Regression', 'Did the earlier flow still work?'],
    ],
    takeaway: 'Watch the behavior. Do not accept the status message.',
  },
  {
    kind: 'delivery',
    title: 'From Figma to a prototype people can try',
    flow: ['Figma', 'Agent', 'Modus', 'Browser', 'GitHub', 'Live URL'],
    loopLabel: 'Repeat at every step',
    loop: ['Describe', 'Build', 'Look', 'Try', 'Adjust', 'Check', 'Share'],
    takeaway: 'The output is not code. It is evidence for a product decision.',
  },
];
