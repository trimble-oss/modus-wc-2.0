import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface TooltipArgs {
  content?: string;
  'custom-class'?: string;
  disabled?: boolean;
  'force-open'?: boolean;
  'tooltip-id'?: string;
  position: 'auto' | 'top' | 'right' | 'bottom' | 'left';
}

const meta: Meta<TooltipArgs> = {
  title: 'Components/Tooltip',
  component: 'modus-wc-tooltip',
  args: {
    content: 'Tooltip content',
    position: 'auto',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['auto', 'top', 'right', 'left', 'bottom'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['dismissEscape'],
    },
    docs: {
      description: {
        component: `
A customizable tooltip component used to create tooltips with different content.
 \nThe component supports a \`contentElement\` prop for rich HTML tooltip content such as multiline text. When set, \`contentElement\` takes precedence over the \`content\` string prop. The default slot is used for the trigger element.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<TooltipArgs>;

export const Default: Story = {
  render: (args) =>
    // prettier-ignore
    html`
      <modus-wc-tooltip
        content=${ifDefined(args.content)}
        custom-class="${ifDefined(args['custom-class'])}"
        ?disabled="${args.disabled}"
        ?force-open="${args['force-open']}"
        tooltip-id="${ifDefined(args['tooltip-id'])}"
        position=${ifDefined(args.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `,
};

const richHtml = '<strong>Tooltip</strong><p>Rich HTML content</p>';

export const WithContentElement: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `contentElement` to pass a rich HTML element as the tooltip body. `contentElement` takes precedence over the `content` string prop.',
      },
      source: {
        transform: (_src, { args }) => `<modus-wc-tooltip
  position="${args.position ?? 'auto'}"
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  el.innerHTML = '${richHtml}';
  document.querySelector('modus-wc-tooltip').contentElement = el;
</script>`,
      },
    },
  },
  args: {
    position: 'auto',
  },
  render: (args) => {
    const el = document.createElement('div');
    el.innerHTML = richHtml;
    // prettier-ignore
    return html`
      <modus-wc-tooltip
        .contentElement=${el}
        content=${ifDefined(args.content)}
        custom-class="${ifDefined(args['custom-class'])}"
        ?disabled="${args.disabled}"
        ?force-open="${args['force-open']}"
        tooltip-id="${ifDefined(args['tooltip-id'])}"
        position=${ifDefined(args.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('tooltip-shadow-host')) {
      class TooltipShadowHost extends HTMLElement {
        private sr: ShadowRoot;
        private _props?: TooltipArgs;
        private tooltipEl?: HTMLElement & {
          content: string;
          customClass: string;
          disabled: boolean;
          forceOpen: boolean | undefined;
          tooltipId: string;
          position: string;
        };

        constructor() {
          super();
          this.sr = this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
          if (this.tooltipEl) return;
          this.renderContent();
        }

        set props(v: TooltipArgs) {
          this._props = v;
          if (this.tooltipEl) this.applyProps();
        }

        private renderContent() {
          this.sr.innerHTML = '';

          this.tooltipEl = document.createElement(
            'modus-wc-tooltip'
          ) as typeof this.tooltipEl;

          const badge = document.createElement('modus-wc-badge');
          badge.textContent = 'Hover';
          this.tooltipEl!.appendChild(badge);
          this.sr.appendChild(this.tooltipEl!);

          // Apply props after Stencil hydrates the tooltip element
          void Promise.resolve().then(() => this.applyProps());
        }

        private applyProps() {
          const v = this._props;
          const tooltip = this.tooltipEl;
          if (!v || !tooltip) return;
          tooltip.content = v.content ?? 'Tooltip content';
          tooltip.customClass = v['custom-class'] ?? '';
          tooltip.disabled = Boolean(v.disabled);
          tooltip.forceOpen = v['force-open'] ?? false;
          tooltip.tooltipId = v['tooltip-id'] ?? '';
          tooltip.position = v.position ?? 'auto';
        }
      }
      customElements.define('tooltip-shadow-host', TooltipShadowHost);
    }

    return html`<tooltip-shadow-host
      .props=${{ ...args }}
    ></tooltip-shadow-host>`;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0, tooltip positioning was managed using Popper.js. In 2.0, tooltip positioning continues to be handled by Popper.js.
  - The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop    | Notes                                    |
|-------------|-------------|------------------------------------------|
| aria-label  | aria-label  |                                          |
| disabled    | disabled    |                                          |
| position    | position    | Added \`auto\` option as default value   |
| text        | content     |                                          |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
