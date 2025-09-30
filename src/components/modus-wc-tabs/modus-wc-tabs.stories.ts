import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ITab } from './modus-wc-tabs';
import { DaisySize } from '../types';

interface TabsArgs {
  activeTabIndex?: number;
  'custom-class'?: string;
  size?: DaisySize;
  tabs: ITab[];
  'tab-style': 'boxed' | 'bordered' | 'lifted' | 'none';
}

const meta: Meta<TabsArgs> = {
  title: 'Components/Tabs',
  component: 'modus-wc-tabs',
  args: {
    size: 'md',
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3', disabled: true },
      { icon: 'home' },
    ],
    'tab-style': 'bordered',
  },
  argTypes: {
    tabs: {
      description: 'Array of tab objects defining the tabs to display',
      table: {
        type: {
          detail: `
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
          `,
        },
      },
    },
    'tab-style': {
      control: { type: 'select' },
      options: ['boxed', 'bordered', 'lifted', 'none'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['tabChange'],
    },
  },
};

export default meta;

type Story = StoryObj<TabsArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tabs
  active-tab-index="${ifDefined(args.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${ifDefined(args['tab-style'])}"
  .tabs="${args.tabs}"
  size="${ifDefined(args.size)}"
>
</modus-wc-tabs>
    `;
  },
};

export const Default: Story = { ...Template };

export const CustomContent: Story = {
  args: {
    tabs: [
      {
        icon: 'home',
        iconPosition: 'left',
        label: 'Home',
        slotName: 'home-tab-content',
      },
      {
        icon: 'clipboard',
        iconPosition: 'right',
        label: 'Tasks',
      },
      {
        slotName: 'actions-tab-content',
      },
      {
        slotName: 'notifications-tab-content',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases.',
      },
    },
  },

  // prettier-ignore
  render: (args) => html`
    <style>
      .red-icon {
        color: red;
      }
      /* Style for disabled badge and icon components */
      modus-wc-badge[disabled="true"],
      modus-wc-icon[disabled="true"] {
        opacity: 0.3;
        pointer-events: none;
      }
    </style>
    <modus-wc-tabs
      .tabs="${args.tabs}"
      size="${ifDefined(args.size)}"
      tab-style="${ifDefined(args['tab-style'])}"
      active-tab-index="${ifDefined(args.activeTabIndex)}"
      aria-label="Custom tab group"
    >
      <span
        slot="home-tab-content"
        style="display: inline-flex; align-items: center;padding-top: 6px"
      >
        <modus-wc-badge
          color="warning"
          size="${ifDefined(args.size)}"
          variant="filled"
          disabled="${args.tabs[0]?.disabled === true}"
        >
          <modus-wc-icon decorative="" name="home" size="xs"></modus-wc-icon>
          Home
        </modus-wc-badge>
      </span>
      <span
        slot="actions-tab-content"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Actions
        <modus-wc-icon
          name="warning"
          variant="solid"
          size="${ifDefined(args.size)}"
          custom-class="red-icon"
          disabled="${args.tabs[2]?.disabled === true}"
        ></modus-wc-icon>
      </span>
      <span
        slot="notifications-tab-content"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Notifications
        <modus-wc-badge
          color="primary"
          size="${ifDefined(args.size)}"
          variant="counter"
          disabled="${args.tabs[3]?.disabled === true}"
          >5</modus-wc-badge
        >
      </span>
    </modus-wc-tabs>
  `,
};

export const ActiveAndDisabled: Story = { ...Template };
ActiveAndDisabled.args = {
  activeTabIndex: 1,
  tabs: [
    { label: 'Normal' },
    { label: 'Active' },
    { label: 'Disabled', disabled: true },
  ],
};

export const Icons: Story = {
  ...Template,
  args: {
    tabs: [
      { icon: 'home' },
      { icon: 'settings', iconPosition: 'left', label: 'Settings' },
      {
        icon: 'alert',
        iconPosition: 'right',
        label: 'Alerts',
      },
    ],
  },
};

export const TabsWithPanel: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tabs
  active-tab-index="${ifDefined(args.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="${ifDefined(args['custom-class'])}"
  ?img-src="${args['img-src']}"
  tab-style="${ifDefined(args['tab-style'])}"
  .tabs="${args.tabs}"
  size="${ifDefined(args.size)}"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>
    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 2.0 tabs use the \`ITab\` interface, see details of interface changes below.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`).
  - The \`tabChange\` event now emits an object with both previous and new tab indices, rather than just the tab ID.

#### Prop Mapping

| 1.0 Prop     | 2.0 Prop           | Notes                                                          |
|--------------|--------------------|----------------------------------------------------------------|
| aria-label   | aria-label         |                                                                |
| full-width   |                    | Not carried over, use CSS instead                              |
| size         | size               | \`small\` → \`sm\`, \`medium\` → \`md\`                        |
| tabs         | tabs               | Tab object structure has changed. See Interface changes below. |

#### Event Mapping

| 1.0 Event   | 2.0 Event | Notes                                                 |
|-------------|-----------|-------------------------------------------------------|
| tabChange   | tabChange | Now emits \`{ previousTab: number; newTab: number }\` |

#### Interfaces

##### 1.0

\`\`\`typescript
export interface Tab {
  active?: boolean;
  iconOnly?: string;
  id: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
}
\`\`\`

##### 2.0

\`\`\`typescript
export interface ITab {
  customClass?: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label?: string;
}
\`\`\`
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
