import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface ToolbarArgs {
  'custom-class'?: string;
}

const meta: Meta<ToolbarArgs> = {
  title: 'Components/Toolbar',
  component: 'modus-wc-toolbar',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<ToolbarArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-toolbar custom-class="${ifDefined(args['custom-class'])}">
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
</modus-wc-toolbar>
    `;
  },
};

export const Default: Story = { ...Template };

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('toolbar-shadow-host')) {
      const ToolbarShadowHost = createShadowHostClass<ToolbarArgs>({
        componentTag: 'modus-wc-toolbar',
        propsMapper: (v: ToolbarArgs, el: HTMLElement) => {
          const toolbarEl = el as unknown as { customClass: string };
          toolbarEl.customClass = v['custom-class'] || '';
          if (!el.hasChildNodes()) {
            el.innerHTML =
              '<div slot="start">Start</div><div slot="center">Center</div><div slot="end">End</div>';
          }
        },
      });
      customElements.define('toolbar-shadow-host', ToolbarShadowHost);
    }

    return html`<toolbar-shadow-host
      .props=${{ ...args }}
    ></toolbar-shadow-host>`;
  },
};
