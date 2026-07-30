import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IDockItem } from './modus-wc-dock';
import { DockPosition } from './modus-wc-dock.tailwind';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

const defaultItems: IDockItem[] = [
  { label: 'Home', icon: 'home' },
  { label: 'Inbox', icon: 'email' },
  { label: 'Settings', icon: 'settings' },
];

interface DockArgs {
  'active-item-index'?: number;
  'custom-class'?: string;
  items: IDockItem[];
  position?: DockPosition;
  'show-labels'?: boolean;
  size?: ModusSize;
}

const getDockItemsScript = (args: DockArgs): string => {
  const itemsJson = JSON.stringify(args.items ?? defaultItems, null, 2);

  return `
<script>
  const dock = document.querySelector('modus-wc-dock');
  dock.items = ${itemsJson};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
</script>`;
};

const formatDockTagAttributes = (args: DockArgs): string => {
  const lines = [
    '  aria-label="Dock navigation"',
    args['custom-class'] ? `  custom-class="${args['custom-class']}"` : null,
    `  position="${args.position ?? 'bottom'}"`,
    args['show-labels'] === false ? '  show-labels="false"' : null,
    `  size="${args.size ?? 'md'}"`,
    args['active-item-index'] !== undefined
      ? `  active-item-index="${args['active-item-index']}"`
      : null,
  ].filter((line): line is string => Boolean(line));

  return lines.join('\n');
};

const formatDockSourceCode = (args: DockArgs): string =>
  `<modus-wc-dock
${formatDockTagAttributes(args)}
></modus-wc-dock>${getDockItemsScript(args)}`;

const renderDockElement = (args: DockArgs, position: DockPosition) => html`
  <modus-wc-dock
    aria-label="Dock navigation"
    active-item-index=${ifDefined(args['active-item-index'])}
    custom-class=${ifDefined(args['custom-class'])}
    .items=${args.items ?? defaultItems}
    position=${position}
    .showLabels=${args['show-labels'] ?? true}
    size=${ifDefined(args.size ?? 'md')}
  ></modus-wc-dock>
`;

const containerPlacementStyles = `
  /* Shared demo container — gives the dock a bounded layout area */
  .dock-container {
    background-color: var(--modus-wc-color-base-100);
    border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
    height: 25rem;
    position: relative;
    width: 100%;
  }

  /* All positions: take the dock out of normal flow so it can be pinned to an edge */
  .dock-container modus-wc-dock {
    display: block;
    position: absolute;
  }

  /* Top & bottom: stretch full container width */
  .dock-container--bottom modus-wc-dock,
  .dock-container--top modus-wc-dock {
    left: 0;
    right: 0;
    width: 100%;
  }

  .dock-container--bottom modus-wc-dock .modus-wc-dock.modus-wc-dock-bottom,
  .dock-container--top modus-wc-dock .modus-wc-dock.modus-wc-dock-top {
    width: 100%;
  }

  .dock-container--bottom modus-wc-dock .modus-wc-dock.modus-wc-dock-bottom .modus-wc-dock-item,
  .dock-container--top modus-wc-dock .modus-wc-dock.modus-wc-dock-top .modus-wc-dock-item {
    flex: 1 1 0;
    width: auto;
  }

  /* Bottom position: pin to the bottom edge */
  .dock-container--bottom modus-wc-dock {
    bottom: 0;
  }

  /* Top position: pin to the top edge */
  .dock-container--top modus-wc-dock {
    top: 0;
  }

  /* Left & right: stretch full container height */
  .dock-container--left modus-wc-dock,
  .dock-container--right modus-wc-dock {
    bottom: 0;
    height: 100%;
    top: 0;
    width: auto;
  }

  .dock-container--left modus-wc-dock .modus-wc-dock.modus-wc-dock-left,
  .dock-container--right modus-wc-dock .modus-wc-dock.modus-wc-dock-right {
    height: 100%;
    min-height: 100%;
  }

  .dock-container--left modus-wc-dock .modus-wc-dock.modus-wc-dock-left .modus-wc-dock-item,
  .dock-container--right modus-wc-dock .modus-wc-dock.modus-wc-dock-right .modus-wc-dock-item {
    flex: 1 1 0;
    height: auto;
    min-height: 0;
  }

  /* Left position: pin to the left edge */
  .dock-container--left modus-wc-dock {
    left: 0;
  }

  /* Right position: pin to the right edge */
  .dock-container--right modus-wc-dock {
    right: 0;
  }
`;

const formatContainerPlacementSourceCode = (args: DockArgs): string => {
  const position = args.position ?? 'bottom';

  return `<style>${containerPlacementStyles}
</style>

<div class="dock-container dock-container--${position}">
  <modus-wc-dock
${formatDockTagAttributes({ ...args, position })}
  ></modus-wc-dock>
</div>
<script>
  const dock = document.querySelector('.dock-container modus-wc-dock');
  dock.items = ${JSON.stringify(args.items ?? defaultItems, null, 2)};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
</script>`;
};

const dockStoryDescription = (storyDescription?: string) => ({
  docs: {
    description: {
      story: storyDescription,
    },
  },
});

const meta: Meta<DockArgs> = {
  title: 'Components/Dock',
  component: 'modus-wc-dock',
  args: {
    items: defaultItems,
    position: 'bottom',
    'show-labels': true,
    size: 'md',
    'active-item-index': 2,
  },
  argTypes: {
    items: {
      table: {
        type: {
          detail: `
            Interface: IDockItem
            Properties:
            - icon (string): Modus icon name
            - label (string): Text label for the dock item
            - disabled (boolean, optional): If true, the dock item cannot be selected
          `,
        },
      },
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    'show-labels': {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    'active-item-index': {
      control: { type: 'number', min: 0, max: 2, step: 1 },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['itemSelect'],
    },
    layout: 'padded',
    docs: {
      description: {
        component:
          'Dock navigation bar for navigating between primary screens. The dock sizes itself from its orientation, item count, and size.',
      },
      source: {
        transform: (_src, { args }) => formatDockSourceCode(args as DockArgs),
      },
    },
  },
};

export default meta;

type Story = StoryObj<DockArgs>;

const Template: Story = {
  render: (args) => renderDockElement(args, args.position ?? 'bottom'),
};

export const Default: Story = {
  ...Template,
  parameters: dockStoryDescription(
    'Bottom dock with labels. The dock renders at its intrinsic size without requiring container styles.'
  ),
};

export const IconsOnly: Story = {
  ...Template,
  args: {
    items: defaultItems,
    'show-labels': false,
  },
  parameters: dockStoryDescription(
    'Icon-only dock. Labels are hidden visually but remain available to assistive technologies via `aria-label` on each item button.'
  ),
};

export const ActiveAndDisabled: Story = {
  ...Template,
  name: 'Active and disabled',
  args: {
    items: [
      { label: 'Home', icon: 'home' },
      { label: 'Inbox', icon: 'email', disabled: true },
      { label: 'Settings', icon: 'settings' },
    ],
    'active-item-index': 0,
  },
  parameters: dockStoryDescription(
    'Dock with an active item and a disabled item that cannot be selected.'
  ),
};

export const ContainerPlacement: Story = {
  ...Template,
  name: 'Container placement',
  parameters: {
    docs: {
      description: {
        story:
          'Use container CSS to pin the dock to an edge and stretch it along that axis. Wrap the dock in `dock-container dock-container--{position}` where `{position}` matches the dock `position` prop (for example, `dock-container--left` with `position="left"`). In this story, that wrapper class updates automatically when you change `position`.',
      },
      source: {
        transform: (_src, { args }) =>
          formatContainerPlacementSourceCode(args as DockArgs),
      },
    },
  },
  render: (args) => {
    const position = args.position ?? 'bottom';

    return html`
      <style>
        ${containerPlacementStyles}
      </style>

      <div class="dock-container dock-container--${position}">
        ${renderDockElement(args, position)}
      </div>
    `;
  },
};

export const ShadowDomParent: Story = {
  parameters: {
    docs: {
      source: {
        code: `<dock-shadow-host></dock-shadow-host>

<script>
  customElements.whenDefined('dock-shadow-host').then(() => {
    const host = document.querySelector('dock-shadow-host');
    host.props = {
      items: [
        { label: 'Home', icon: 'home' },
        { label: 'Inbox', icon: 'email' },
        { label: 'Settings', icon: 'settings' },
      ],
      position: 'bottom',
      showLabels: true,
      size: 'md',
      activeItemIndex: 2,
    };
  });
</script>`,
      },
    },
  },
  render: (args) => {
    if (!customElements.get('dock-shadow-host')) {
      const DockShadowHost = createShadowHostClass<DockArgs>({
        componentTag: 'modus-wc-dock',
        propsMapper: (value: DockArgs, el: HTMLElement) => {
          const dockEl = el as unknown as {
            activeItemIndex: number;
            customClass: string;
            items: IDockItem[];
            position: DockPosition;
            showLabels: boolean;
            size: ModusSize;
          };

          dockEl.activeItemIndex = value['active-item-index'] ?? 0;
          dockEl.customClass = value['custom-class'] || '';
          dockEl.items = value.items ?? defaultItems;
          dockEl.position = value.position ?? 'bottom';
          dockEl.showLabels = value['show-labels'] ?? true;
          dockEl.size = value.size ?? 'md';
        },
      });

      customElements.define('dock-shadow-host', DockShadowHost);
    }

    return html`<dock-shadow-host .props=${{ ...args }}></dock-shadow-host>`;
  },
};
