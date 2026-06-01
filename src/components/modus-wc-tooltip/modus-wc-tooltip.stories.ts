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
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<TooltipArgs>;

const Template: Story = {
  parameters: {
    actions: {
      handles: ['dismissEscape'],
    },
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
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `;
  },
};

export const Default: Story = { ...Template };

const defaultRichHtml = `<strong>Tooltip</strong>
<p>First line of multiline content.</p>
<p>Second line of multiline content.</p>`;

function buildRichTooltipContent(html: string): HTMLDivElement {
  const el = document.createElement('div');
  el.style.cssText =
    'align-items:flex-start;display:flex;gap:0.375rem;text-align:start';

  const icon = document.createElement('modus-wc-icon');
  icon.setAttribute('decorative', '');
  icon.setAttribute('name', 'thumbs_up');
  icon.setAttribute('size', 'sm');

  const text = document.createElement('div');
  text.innerHTML = html;

  el.append(icon, text);
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
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  const icon = document.createElement('modus-wc-icon');
  icon.setAttribute('decorative', '');
  icon.setAttribute('name', 'thumbs_up');
  icon.setAttribute('size', 'sm');

  const text = document.createElement('div');
  text.innerHTML = '<strong>Tooltip</strong><p>First line</p><p>Second line</p>';

  el.append(icon, text);
  document.querySelector('modus-wc-tooltip').contentElement = el;
</script>`,
      },
    },
  },
  args: {
    position: 'top',
    'custom-class': 'tooltip-rich-html-demo',
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
