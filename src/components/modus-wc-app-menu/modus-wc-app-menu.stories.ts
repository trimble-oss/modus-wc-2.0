import { action } from '@storybook/addon-actions';
import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IAppMenuItem } from './modus-wc-app-menu';

interface AppMenuArgs {
  'custom-class'?: string;
  draggedItemPos?: unknown;
  grabbedItemPos?: unknown;
  isEditMode?: unknown;
  layout?: 'list' | 'grid';
  apps?: IAppMenuItem[];
}

const defaultApps: IAppMenuItem[] = [
  { appName: 'trimble' },
  { appName: 'siteworks' },
  { appName: 'earthworks' },
  { appName: 'worksmanager' },
  { appName: 'connect' },
  { appName: 'unity' },
  { appName: 'trade_service_live' },
  { appName: 'livecount' },
  { appName: 'supplier_xchange' },
  { appName: 'projectsight' },
  { appName: 'app_xchange' },
  { appName: 'sketchup' },
  { appName: 'pay' },
  { appName: 'copilot' },
  { appName: 'stabicad' },
];

const meta: Meta<AppMenuArgs> = {
  title: 'Components/App Menu',
  component: 'modus-wc-app-menu',
  args: {
    layout: 'list',
    apps: defaultApps,
  },
  argTypes: {
    'custom-class': {
      control: 'text',
    },
    layout: {
      control: { type: 'select' },
      options: ['list', 'grid'],
    },
    apps: {
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
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['layoutChange', 'itemsOrderChange', 'itemClick'],
    },
    docs: {
      description: {
        component: `
A customizable app menu component that displays application links in list or grid layout.
\nThe component uses the \`modus-wc-panel\` component for layout and supports reordering via drag-and-drop or keyboard.

### Features
- **List & Grid Layouts**: Toggle between list and grid display modes
- **Reorderable**: Edit mode allows drag-and-drop and keyboard reordering

### Events
- **layoutChange**: Emitted when the \`layout\` prop changes between list and grid
- **itemsOrderChange**: Emitted when the user confirms reordering in edit mode (Done)

### Usage
The component accepts an \`apps\` array of \`IAppMenuItem\` objects.
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<AppMenuArgs>;

const getSourceCode = (args: AppMenuArgs) => {
  const appsCode = `const apps = ${JSON.stringify(args.apps, null, 2)};`;

  return `<modus-wc-app-menu></modus-wc-app-menu>

<script>
  ${appsCode}

  const element = document.querySelector('modus-wc-app-menu');
  element.apps = apps;${args.layout ? `\n  element.layout = '${args.layout}';` : ''}

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
          .apps=${args.apps}
          @layoutChange=${action('layoutChange')}
          @itemsOrderChange=${action('itemsOrderChange')}
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
        story: 'App menu displayed in list layout.',
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
