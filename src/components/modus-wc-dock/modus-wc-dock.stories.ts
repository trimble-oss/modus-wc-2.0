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

const dockDemoStyles = html`
  <style>
    .dock-demo-frame {
      border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
      display: grid;
      height: 520px;
      overflow: hidden;
      width: 100%;
    }

    .dock-demo-frame__content {
      background-color: var(--modus-wc-color-base-100);
    }

    .dock-demo-frame modus-wc-dock {
      display: block;
      height: 100%;
      min-height: 0;
      min-width: 0;
      width: 100%;
    }

    .dock-demo-frame modus-wc-dock .modus-wc-dock {
      background-color: var(--modus-wc-color-base-page);
    }

    .dock-demo-frame--top {
      grid-template-rows: auto 1fr;
    }

    .dock-demo-frame--bottom {
      grid-template-rows: 1fr auto;
    }

    .dock-demo-frame--left {
      grid-template-columns: auto 1fr;
    }

    .dock-demo-frame--right {
      grid-template-columns: 1fr auto;
    }
  </style>
`;

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

  const dockMarkup = `<modus-wc-dock
    id="app-dock"
    aria-label="Dock navigation"
    active-item-index="${activeItemIndex}"
    position="${position}"${showLabelsAttr}
    size="${size}"
  ></modus-wc-dock>`;

  const contentMarkup =
    '<div class="dock-demo-frame__content" aria-hidden="true"></div>';

  const frameBody =
    position === 'top'
      ? `${dockMarkup}\n  ${contentMarkup}`
      : position === 'left'
        ? `${dockMarkup}\n  ${contentMarkup}`
        : position === 'right'
          ? `${contentMarkup}\n  ${dockMarkup}`
          : `${contentMarkup}\n  ${dockMarkup}`;

  return `<style>
  .dock-demo-frame {
    border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
    display: grid;
    height: 520px;
    overflow: hidden;
    width: 100%;
  }

  .dock-demo-frame__content {
    background-color: var(--modus-wc-color-base-100);
  }

  .dock-demo-frame modus-wc-dock {
    display: block;
    height: 100%;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }

  .dock-demo-frame modus-wc-dock .modus-wc-dock {
    background-color: var(--modus-wc-color-base-page);
  }

  .dock-demo-frame--top {
    grid-template-rows: auto 1fr;
  }

  .dock-demo-frame--bottom {
    grid-template-rows: 1fr auto;
  }

  .dock-demo-frame--left {
    grid-template-columns: auto 1fr;
  }

  .dock-demo-frame--right {
    grid-template-columns: 1fr auto;
  }
</style>

<div class="dock-demo-frame dock-demo-frame--${position}">
  ${frameBody}
</div>

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

const renderDockDemo = (args: DockArgs) => {
  const position = args.position ?? 'bottom';
  const items = args.items ?? defaultItems;
  const dock = renderDockElement({ ...args, items }, position);
  const content = html`<div
    class="dock-demo-frame__content"
    aria-hidden="true"
  ></div>`;

  const frameChildren =
    position === 'top' || position === 'left'
      ? [dock, content]
      : [content, dock];

  // prettier-ignore
  return html`
${dockDemoStyles}
<div class="dock-demo-frame dock-demo-frame--${position}">
  ${frameChildren}
</div>
  `;
};

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
  decorators: [
    withActions,
    (story, context) => {
      const rendered = story();

      queueMicrotask(() => {
        const frame = document.querySelector('.dock-demo-frame');
        const dock = frame?.querySelector('modus-wc-dock') ?? null;

        if (!dock) {
          return;
        }

        const storyItems = context.args.items ?? defaultItems;

        dock.items = storyItems;

        if (context.args['active-item-index'] !== undefined) {
          dock.activeItemIndex = context.args['active-item-index'];
        }
      });

      return rendered;
    },
  ],
  parameters: {
    actions: {
      handles: ['itemSelect'],
    },
    layout: 'padded',
    docs: {
      description: {
        component:
          'Dock navigation bar for navigating between primary screens. Position the host at an app edge in your layout; the stories below use a demo frame to pin the dock to each corner.',
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
  render: (args) => renderDockDemo(args),
};

export const Default: Story = {
  ...Template,
  parameters: dockStoryParameters({
    storyDescription:
      'Bottom dock with labels. The demo frame positions the dock flush to the bottom edge of the content area.',
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
