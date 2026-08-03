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
      options: ['auto', 'top', 'right', 'bottom', 'left'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A customizable tooltip component used to create tooltips with different content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Wrap a focusable control (e.g. \`modus-wc-button\`) — Tab focus shows the tooltip; Tab away hides it
- For screen readers, set \`tooltip-id\` on the tip and matching \`aria-describedby\` on the trigger
- Press **Escape** to dismiss the tooltip without moving focus; it re-enables on the next hover or focus
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<TooltipArgs>;

/** Focusable trigger — badges are not in the tab order and cannot demonstrate keyboard tooltip behavior. */
const tooltipTrigger = (tooltipId?: string) => html`
  <modus-wc-button
    variant="outlined"
    color="tertiary"
    size="sm"
    aria-describedby=${ifDefined(tooltipId || undefined)}
  >
    Hover me
  </modus-wc-button>
`;

const Template: Story = {
  parameters: {
    actions: {
      handles: ['dismissEscape'],
    },
  },
  args: {
    'tooltip-id': 'storybook-tooltip',
  },
  render: (args) => {
    // prettier-ignore
    return html`
      <modus-wc-tooltip
        content=${ifDefined(args.content)}
        custom-class="${ifDefined(args['custom-class'])}"
        ?disabled="${args.disabled}"
        ?force-open="${args['force-open']}"
        tooltip-id="${ifDefined(args['tooltip-id'])}"
        position=${ifDefined(args.position)}
      >
        ${tooltipTrigger(args['tooltip-id'])}
      </modus-wc-tooltip>
    `;
  },
};

export const Default: Story = { ...Template };

const defaultRichHtml = `<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start">
  <div style="align-items:center;display:flex;gap:0.375rem">
    <modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon>
    <span>First line of multiline content.</span>
  </div>
  <p>Second line of multiline content.</p>
</div>`;

function buildRichTooltipContent(html: string): HTMLDivElement {
  const el = document.createElement('div');
  el.innerHTML = html;
  return el;
}

export const ContentElement: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use \`contentElement\` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the \`content\` string prop. Your original node is not moved or mutated.

To update the tooltip content, reassign \`contentElement\` with a new element.
        `,
      },
      source: {
        transform: (_src, { args }) => `<modus-wc-tooltip
  position="${args.position ?? 'auto'}"
  custom-class="tooltip-rich-html-demo"
  tooltip-id="storybook-tooltip-rich"
>
  <modus-wc-button
    variant="outlined"
    color="tertiary"
    size="sm"
    aria-describedby="storybook-tooltip-rich"
  >
    Hover me
  </modus-wc-button>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  el.innerHTML = '<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start"><div style="align-items:center;display:flex;gap:0.375rem"><modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon><span>First line of multiline content.</span></div><p>Second line of multiline content.</p></div>';
  document.querySelector('modus-wc-tooltip').contentElement = el;
</script>`,
      },
    },
  },
  args: {
    position: 'top',
    'custom-class': 'tooltip-rich-html-demo',
    'tooltip-id': 'storybook-tooltip-rich',
  },
  render: (args) => {
    const contentElement = buildRichTooltipContent(defaultRichHtml);
    // prettier-ignore
    return html`
      <modus-wc-tooltip
        .contentElement=${contentElement}
        content=${ifDefined(args.content)}
        custom-class="${ifDefined(args['custom-class'])}"
        ?disabled="${args.disabled}"
        ?force-open="${args['force-open']}"
        tooltip-id="${ifDefined(args['tooltip-id'])}"
        position=${ifDefined(args.position)}
      >
        ${tooltipTrigger(args['tooltip-id'])}
      </modus-wc-tooltip>
    `;
  },
};

export const ShadowDomParent: Story = {
  args: {
    'tooltip-id': 'storybook-tooltip-shadow',
  },
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

          const button = document.createElement(
            'modus-wc-button'
          ) as HTMLElement & {
            variant: string;
            color: string;
            size: string;
          };
          button.variant = 'outlined';
          button.color = 'tertiary';
          button.size = 'sm';
          button.textContent = 'Hover';
          this.tooltipEl!.appendChild(button);
          this.sr.appendChild(this.tooltipEl!);

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
          tooltip.tooltipId = v['tooltip-id'] ?? 'storybook-tooltip-shadow';
          tooltip.position = v.position ?? 'auto';

          const trigger = tooltip.querySelector('modus-wc-button');
          if (trigger && tooltip.tooltipId) {
            trigger.setAttribute('aria-describedby', tooltip.tooltipId);
          }
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
- The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping
| 1.0 Prop | 2.0 Prop | Notes |
| :--- | :--- | :--- |
| aria-label | aria-label | |
| disabled | disabled | |
| position | position | Added \`auto\` option as default value |
| text | content | |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
