import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IAppMenuSection } from './modus-wc-app-menu';

interface AppMenuArgs {
  'custom-class'?: string;
  draggedItemPos?: unknown;
  grabbedItemPos?: unknown;
  isEditMode?: unknown;
  layout?: 'list' | 'grid';
  previousSections?: unknown;
  sections?: IAppMenuSection[];
}

const defaultSections: IAppMenuSection[] = [
  {
    title: 'Section 1',
    subtitle: 'Section 1 subtitle',
    items: [
      { appName: 'trimble' },
      { appName: 'siteworks' },
      { appName: 'earthworks' },
    ],
  },
  {
    title: 'Section 2',
    subtitle: 'Section 2 subtitle',
    items: [
      { appName: 'worksmanager' },
      { appName: 'connect' },
      { appName: 'unity' },
    ],
  },
  {
    title: 'Section 3',
    subtitle: 'Section 3 subtitle',
    items: [
      { appName: 'trade_service_live' },
      { appName: 'livecount' },
      { appName: 'supplier_xchange' },
    ],
  },
  {
    title: 'Section 4',
    subtitle: 'Section 4 subtitle',
    items: [
      { appName: 'projectsight' },
      { appName: 'app_xchange' },
      { appName: 'sketchup' },
    ],
  },
  {
    title: 'Section 5',
    subtitle: 'Section 5 subtitle',
    items: [
      { appName: 'pay' },
      { appName: 'copilot' },
      { appName: 'stabicad' },
    ],
  },
];

const meta: Meta<AppMenuArgs> = {
  title: 'Components/App Menu',
  component: 'modus-wc-app-menu',
  args: {
    layout: 'list',
    sections: defaultSections,
  },
  argTypes: {
    'custom-class': {
      control: 'text',
    },
    layout: {
      control: { type: 'select' },
      options: ['list', 'grid'],
    },
    sections: {
      control: 'object',
    },
    draggedItemPos: {
      table: { disable: true },
    },
    grabbedItemPos: {
      table: { disable: true },
    },
    isEditMode: {
      table: { disable: true },
    },
    previousSections: {
      table: { disable: true },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['layoutChange', 'itemsOrderChange'],
    },
    docs: {
      description: {
        component: `
A customizable app menu component that displays categorized application links in list or grid layout.
\nThe component uses the \`modus-wc-panel\` component for layout and supports multiple sections with items.

### Features
- **Multiple Sections**: Supports any number of sections, each with a title, subtitle, and items
- **List & Grid Layouts**: Toggle between list and grid display modes

### Events
- **layoutChange**: Emitted when the \`layout\` prop changes between list and grid
- **itemsOrderChange**: Emitted when the user confirms reordering in edit mode (Done)

### Usage
The component accepts a \`sections\` array of \`IAppMenuSection\` objects.
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<AppMenuArgs>;

const getSourceCode = (args: AppMenuArgs) => {
  const sectionsCode = `const sections = ${JSON.stringify(args.sections, null, 2)};`;

  return `<modus-wc-app-menu></modus-wc-app-menu>

<script>
  ${sectionsCode}

  const element = document.querySelector('modus-wc-app-menu');
  element.sections = sections;${args.layout ? `\n  element.layout = '${args.layout}';` : ''}

  element.addEventListener('layoutChange', (event) => {
    console.log('Layout changed:', event.detail);
  });
  element.addEventListener('itemsOrderChange', (event) => {
    console.log('Items order changed:', event.detail);
  });
</script>
`;
};

const Template: Story = {
  parameters: {
    docs: {
      source: {
        transform: (_src, { args }: { args: AppMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
  render: (args) => {
    // prettier-ignore
    return html`
      <div style="min-height: 400px;">
        <modus-wc-app-menu
          custom-class=${ifDefined(args['custom-class'])}
          layout=${ifDefined(args.layout)}
          .sections=${args.sections}
        ></modus-wc-app-menu>
      </div>
    `;
  },
};

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'App menu with three sections displayed in list layout.',
      },
      source: {
        transform: (_src, { args }: { args: AppMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
};

export const GridLayout: Story = {
  ...Template,
  args: {
    layout: 'grid',
  },
  parameters: {
    docs: {
      description: {
        story: 'App menu in grid layout showing all app emblems.',
      },
      source: {
        transform: (_src, { args }: { args: AppMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
};
