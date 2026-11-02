import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface LinkArgs {
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inherit'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
  'custom-class'?: string;
  href?: string;
  rel?: string;
  target?: string;
  title?: string;
  underline: 'always' | 'hover' | 'none';
}

const meta: Meta<LinkArgs> = {
  title: 'Components/Link',
  component: 'modus-wc-link',
  args: {
    color: 'primary',
    underline: 'always',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'inherit',
        'success',
        'info',
        'warning',
        'danger',
      ],
    },
    underline: {
      control: { type: 'select' },
      options: ['always', 'hover', 'none'],
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
};

export default meta;

type Story = StoryObj<LinkArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-link
  color="${args.color}"
  custom-class=${ifDefined(args['custom-class'])}
  href=${ifDefined(args.href)}
  rel=${ifDefined(args.rel)}
  target=${ifDefined(args.target)}
  title=${ifDefined(args.title)}
  underline="${args.underline}"
>Click me</modus-wc-link>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const Underline: Story = {
  render: () => {
    const underlines: LinkArgs['underline'][] = ['always', 'hover', 'none'];

    // prettier-ignore
    return html`
<div style="display: flex; flex-direction: column; gap: 8px;">
  ${underlines.map(
    (underline) => html`
  <modus-wc-link underline="${underline}">${underline}</modus-wc-link>
  `
  )}
</div>
    `;
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://www.trimble.com',
    target: '_blank',
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-link
  href=${ifDefined(args.href)}
  target=${ifDefined(args.target)}
  aria-label="Visit Trimble website, opens in a new window"
>Trimble.com</modus-wc-link>
    `;
  },
};

export const WithIcons: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-link href="#">
  <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
  Click me
  <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
</modus-wc-link>
    `;
  },
};

export const InheritColor: Story = {
  render: () => {
    // prettier-ignore
    return html`
<p style="color: var(--modus-wc-color-base-content);">
  Body text with an
  <modus-wc-link color="inherit">inherit color link</modus-wc-link>
  inline.
</p>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('link-shadow-host')) {
      const LinkShadowHost = createShadowHostClass<LinkArgs>({
        componentTag: 'modus-wc-link',
        propsMapper: (v: LinkArgs, el: HTMLElement) => {
          const linkEl = el as unknown as {
            ariaLabel: string;
            color: string;
            customClass: string;
            href: string;
            rel: string;
            target: string;
            underline: string;
          };
          linkEl.ariaLabel = 'Click me link';
          linkEl.color = v.color;
          linkEl.customClass = v['custom-class'] || '';
          linkEl.href = v.href || '';
          linkEl.rel = v.rel || '';
          linkEl.target = v.target || '';
          linkEl.underline = v.underline;
          // DO NOT set textContent - it destroys the component's internal structure!
          // Link content should be set via defaultContent in the helper config
        },
        defaultContent: () => {
          const startIcon = document.createElement('modus-wc-icon');
          startIcon.setAttribute('decorative', '');
          startIcon.setAttribute('name', 'link-simple');
          startIcon.setAttribute('slot', 'start-icon');

          const label = document.createTextNode('Click me');

          const endIcon = document.createElement('modus-wc-icon');
          endIcon.setAttribute('decorative', '');
          endIcon.setAttribute('name', 'caret-right');
          endIcon.setAttribute('slot', 'end-icon');
          endIcon.setAttribute('version', '2.0');

          return [startIcon, label, endIcon];
        },
      });
      customElements.define('link-shadow-host', LinkShadowHost);
    }

    return html`<link-shadow-host .props=${{ ...args }}></link-shadow-host>`;
  },
};
