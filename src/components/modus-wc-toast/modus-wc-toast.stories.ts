import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ToastPosition } from './modus-wc-toast';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface ToastArgs {
  'custom-class'?: string;
  delay?: number;
  position?: ToastPosition;
}

const meta: Meta<ToastArgs> = {
  title: 'Components/Toast',
  component: 'modus-wc-toast',
  args: {
    position: 'top-end',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: [
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-center',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
      ],
    },
  },
  parameters: {
    layout: 'padded',
    viewport: 'responsive',
  },
};

export default meta;

type Story = StoryObj<ToastArgs>;

const Template: Story = {
  // prettier-ignore
  render: (args) => html`
<div style="height: 200px;">
  <modus-wc-toast
    custom-class=${ifDefined(args['custom-class'])}
    delay=${ifDefined(args.delay)}
    position=${ifDefined(args.position)}
  >
    <modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>
  </modus-wc-toast>
</div>
  `,
};

export const Default: Story = { ...Template };

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('toast-shadow-host')) {
      const ToastShadowHost = createShadowHostClass<ToastArgs>({
        componentTag: 'modus-wc-toast',
        propsMapper: (v: ToastArgs, el: HTMLElement) => {
          const toastEl = el as unknown as {
            customClass: string;
            delay: number;
            position: string;
          };
          toastEl.customClass = v['custom-class'] || '';
          toastEl.delay = v.delay ?? 0;
          toastEl.position = v.position ?? 'top-end';
          if (!el.hasChildNodes()) {
            el.innerHTML =
              '<modus-wc-alert alert-title="Message sent!" variant="success"></modus-wc-alert>';
          }
        },
      });
      customElements.define('toast-shadow-host', ToastShadowHost);
    }

    return html`<toast-shadow-host .props=${{ ...args }}></toast-shadow-host>`;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 toast included built-in dismiss functionality with delay timer and dismiss button. 2.0 components focus on positioning only.
  - In 1.0 toast included built-in icons. 2.0 components rely on slotted content for visual elements.
  - 2.0 toast components no longer support built-in types/variants, use slotted \`modus-wc-alert\` components instead.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop    | Notes                                      |
|-----------------|-------------|--------------------------------------------|
| aria-label      | aria-label  |                                            |
| delay           |             | Not carried over                           |
| dismissible     |             | Not carried over                           |
| retain-element  |             | Not carried over                           |
| role            |             | Not carried over                           |
| show-icon       |             | Not carried over                           |
| type            |             | Not carried over, use slotted content      |

#### Event Mapping

| 1.0 Event     | 2.0 Event | Notes            |
|---------------|-----------|------------------|
| dismissClick  |           | Not carried over |
        `,
      },
    },
    // To hide the actual story rendering and only show docs:
    controls: { disable: true },
    canvas: { disable: true },
  },
  // Simple render function or leave it empty
  render: () => html`<div></div>`,
};
