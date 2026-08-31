import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { DaisySize } from '../types';

interface IconArgs {
  'custom-class'?: string;
  decorative: boolean;
  name: string;
  size: DaisySize;
  variant?: 'outlined' | 'solid';
  version?: '1.0' | '2.0';
}

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  component: 'modus-wc-icon',
  args: {
    'custom-class': '',
    decorative: false,
    name: 'alert',
    size: 'md',
    version: '1.0',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'solid'],
    },
    version: {
      control: { type: 'select' },
      options: ['1.0', '2.0'],
    },
  },
};

export default meta;

type Story = StoryObj<IconArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-icon
        aria-label="Alert icon"
        custom-class="${ifDefined(args['custom-class'])}"
        ?decorative="${args.decorative}"
        .name="${args.name}"
        size="${args.size}"
        variant="${ifDefined(args.variant)}"
        version="${ifDefined(args.version)}"
      >
      </modus-wc-icon>
    `;
  },
};

export const Default: Story = { ...Template };

export const CustomColor: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .red-icon {
    color: red;
  }
</style>
<modus-wc-icon
  aria-label="Red alert icon"
  custom-class="red-icon"
  .name="${args.name}"
  size="${args.size}"
>
</modus-wc-icon>
    `;
  },
};

export const NameResolution: Story = {
  render: () => html`
    <div style="display: grid; gap: 1.5rem;">
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Mapped add icon version 1.0"
            name="add"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>Mapped 1.0: add @ 1.0</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Mapped add icon version 2.0"
            name="add"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>Mapped 1.0: add @ 2.0 (plus)</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Unmapped address icon version 1.0"
            name="address"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>Unmapped: address @ 1.0</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Unmapped address icon version 2.0"
            name="address"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>Unmapped: address @ 2.0 (same glyph)</div>
        </div>
      </div>
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Native ship icon version 1.0"
            name="ship"
            size="lg"
            version="1.0"
          ></modus-wc-icon>
          <div>2.0-only: ship @ 1.0 (same glyph)</div>
        </div>
        <div style="text-align: center;">
          <modus-wc-icon
            aria-label="Native ship icon version 2.0"
            name="ship"
            size="lg"
            version="2.0"
          ></modus-wc-icon>
          <div>2.0-only: ship @ 2.0</div>
        </div>
      </div>
    </div>
  `,
};

export const CustomIcons: Story = {
  args: {
    'custom-class': 'icon-font tc-icon-cloud-queue',
    decorative: false,
    name: '',
    size: 'lg',
  },
  decorators: [
    (story) => html`
      <link
        rel="stylesheet"
        href="https://resources.connect.trimble.com/1.12.0/fonts/icon-font.min.css"
      />
      ${story()}
    `,
  ],
  render: (args) => {
    return html`
      <modus-wc-icon
        aria-label="Cloud Queue icon"
        custom-class="${ifDefined(args['custom-class'])}"
        ?decorative="${args.decorative}"
        .name="${args.name}"
        size="${args.size}"
      >
      </modus-wc-icon>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for icon component
    if (!customElements.get('icon-shadow-host')) {
      const IconShadowHost = createShadowHostClass<IconArgs>({
        componentTag: 'modus-wc-icon',
        propsMapper: (v: IconArgs, el: HTMLElement) => {
          const iconEl = el as unknown as {
            customClass: string;
            decorative: boolean;
            name: string;
            size: string;
            variant: string;
            version: string;
          };
          iconEl.customClass = v['custom-class'] || '';
          iconEl.decorative = Boolean(v.decorative);
          iconEl.name = v.name;
          iconEl.size = v.size;
          iconEl.variant = v.variant ?? 'outlined';
          iconEl.version = v.version ?? '1.0';
        },
      });
      customElements.define('icon-shadow-host', IconShadowHost);
    }

    return html`<icon-shadow-host .props=${{ ...args }}></icon-shadow-host>`;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).
  - The \`color\` property has been removed in favor of using CSS for styling.
  - The \`iconClick\` event has been removed. Use the \`click\` event on the host element instead.
  - In 1.0 the \`size\` prop accepted any numeric string (e.g., \`'16'\`, \`'24'\`, \`'32'\`) to set the icon's
  width and height. 2.0 uses preset sizes: \`sm\`, \`md\`, \`lg\`, and can use CSS for custom sizes.

#### Icon names

  - The \`version\` property selects the Modus Icons set. Default is \`1.0\`.
  - Legacy 1.0 names render the 1.0 ligature when \`version="1.0"\` and the mapped 2.0 glyph when \`version="2.0"\`.
  - Unmapped 1.0 names keep the 1.0 ligature in both versions.
  - Native 2.0-only slugs keep the 2.0 glyph in both versions.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                |
|----------|----------|------------------------------------------------------|
| color    |          | Not carried over, use CSS instead                    |
| name     | name     | 1.0 names and 2.0 slugs are both accepted            |
| size     | size     | Numeric values changed to \`sm\`, \`md\`, \`lg\`, use CSS for custom sizes |
|          | version  | \`'1.0'\` (default) or \`'2.0'\`                     |

#### Event Mapping

| 1.0 Event | 2.0 Event | Notes                                                         |
|-----------|-----------|---------------------------------------------------------------|
| iconClick |           | Not carried over, use \`click\` event on host element instead |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
