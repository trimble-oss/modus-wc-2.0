import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface LinkArgs {
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
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
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    underline: {
      control: { type: 'select' },
      options: ['always', 'hover', 'none'],
    },
  },
};

export default meta;

type Story = StoryObj<LinkArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-link color="${args.color}" underline="${args.underline}">Click me</modus-wc-link>
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

export const Colors: Story = {
  render: () => {
    const colors: LinkArgs['color'][] = [
      'primary',
      'secondary',
      'tertiary',
      'warning',
      'danger',
    ];

    // prettier-ignore
    return html`
<div style="display: flex; flex-direction: column; gap: 8px;">
  ${colors.map(
    (color) => html`
  <modus-wc-link color="${color}">${color}</modus-wc-link>
  `
  )}
</div>
    `;
  },
};
