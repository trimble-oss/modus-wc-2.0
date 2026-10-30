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
<style>
  .link-icons-story-example {
    display: flex;
    flex-direction: column;
    gap: var(--modus-wc-spacing-xs);
  }
</style>

<div style="display: flex; flex-direction: column; gap: var(--modus-wc-spacing-lg);">
  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Start icon"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="End icon"></modus-wc-typography>
    <modus-wc-link href="#">
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography hierarchy="span" size="sm" label="Start and end icons"></modus-wc-typography>
    <modus-wc-link href="#">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>

  <div class="link-icons-story-example">
    <modus-wc-typography
      hierarchy="span"
      size="sm"
      label="Success"
    ></modus-wc-typography>
    <modus-wc-link color="success" href="#" underline="none">
      <modus-wc-icon decorative name="link-simple" slot="start-icon"></modus-wc-icon>
      Click me
      <modus-wc-icon decorative name="caret-right" slot="end-icon" version="2.0"></modus-wc-icon>
    </modus-wc-link>
  </div>
</div>
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
