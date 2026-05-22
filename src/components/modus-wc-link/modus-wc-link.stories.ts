import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface LinkArgs {
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inherit'
    | 'success'
    | 'warning'
    | 'danger';
  'custom-class'?: string;
  href?: string;
  rel?: string;
  target?: string;
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
      options: [undefined, '_blank', '_self', '_parent', '_top'],
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

export const HeadingLink: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-typography hierarchy="h1">
  <modus-wc-link color="inherit">Heading link</modus-wc-link>
</modus-wc-typography>
    `;
  },
};
