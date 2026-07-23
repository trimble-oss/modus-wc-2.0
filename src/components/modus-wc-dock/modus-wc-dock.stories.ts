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

const buildDockSourceCode = ({
  activeItemIndex = 2,
  items = defaultItems,
  position = 'bottom',
  showLabels = true,
  size = 'md',
}: {
  activeItemIndex?: number;
  items?: IDockItem[];
  position?: DockPosition;
  showLabels?: boolean;
  size?: ModusSize;
}): string => {
  const showLabelsAttr = `\n    show-labels="${showLabels}"`;
  const itemsJson = JSON.stringify(items, null, 2)
    .split('\n')
    .map((line, index) => (index === 0 ? line : `    ${line}`))
    .join('\n');

  return `<modus-wc-dock
    id="app-dock"
    aria-label="Dock navigation"
    active-item-index="${activeItemIndex}"
    position="${position}"${showLabelsAttr}
    size="${size}"
  ></modus-wc-dock>

<script>
  const dock = document.getElementById('app-dock');
  dock.items = ${itemsJson};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
</script>`;
};

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

  .dock-container--bottom modus-wc-dock .modus-wc-dock,
  .dock-container--top modus-wc-dock .modus-wc-dock {
    width: 100%;
  }

  .dock-container--bottom modus-wc-dock .modus-wc-dock-item,
  .dock-container--top modus-wc-dock .modus-wc-dock-item {
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
  }

  .dock-container--left modus-wc-dock .modus-wc-dock,
  .dock-container--right modus-wc-dock .modus-wc-dock {
    height: 100%;
  }

  .dock-container--left modus-wc-dock .modus-wc-dock-item,
  .dock-container--right modus-wc-dock .modus-wc-dock-item {
    flex: 1 1 0;
    height: auto;
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

const buildContainerPlacementSourceCode =
  (): string => `<style>${containerPlacementStyles}
</style>

<div class="dock-container dock-container--bottom">
  <modus-wc-dock
    id="container-dock"
    aria-label="Dock navigation"
    active-item-index="2"
    position="bottom"
    show-labels="true"
    size="md"
  ></modus-wc-dock>
</div>

<script>
  const dock = document.getElementById('container-dock');
  dock.items = ${JSON.stringify(defaultItems, null, 2)};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
</script>`;

const dockStoryParameters = (overrides?: {
  activeItemIndex?: number;
  items?: IDockItem[];
  position?: DockPosition;
  showLabels?: boolean;
  size?: ModusSize;
  storyDescription?: string;
}) => ({
  docs: {
    description: {
      story: overrides?.storyDescription,
    },
    source: {
      code: buildDockSourceCode({
        activeItemIndex: overrides?.activeItemIndex ?? 2,
        items: overrides?.items ?? defaultItems,
        position: overrides?.position ?? 'bottom',
        showLabels: overrides?.showLabels ?? true,
        size: overrides?.size ?? 'md',
      }),
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
        code: buildDockSourceCode({}),
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
  parameters: dockStoryParameters({
    storyDescription:
      'Bottom dock with labels. The dock renders at its intrinsic size without requiring container styles.',
  }),
};

export const IconsOnly: Story = {
  ...Template,
  args: {
    items: defaultItems,
    'show-labels': false,
  },
  parameters: dockStoryParameters({
    showLabels: false,
    storyDescription:
      'Icon-only dock. Labels are hidden visually but remain available to assistive technologies via `aria-label` on each item button.',
  }),
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
  parameters: dockStoryParameters({
    activeItemIndex: 0,
    items: [
      { label: 'Home', icon: 'home' },
      { label: 'Inbox', icon: 'email', disabled: true },
      { label: 'Settings', icon: 'settings' },
    ],
    storyDescription:
      'Dock with an active item and a disabled item that cannot be selected.',
  }),
};

export const ContainerPlacement: Story = {
  name: 'Container placement',
  parameters: {
    docs: {
      description: {
        story:
          'Use container CSS to pin the dock to an edge and stretch it along that axis. Change `position` to see top, bottom, left, and right placement.',
      },
      source: {
        code: buildContainerPlacementSourceCode(),
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
