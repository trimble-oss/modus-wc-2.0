import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface CardArgs {
  'custom-class'?: string;
  height?: string;
  shape?: 'circle' | 'rectangle';
  width?: string;
}

const meta: Meta<CardArgs> = {
  title: 'Components/Card',
  component: 'modus-wc-card',
  args: {
    'custom-class': '',
    height: '1.5rem',
    shape: 'rectangle',
    width: '100%',
  },
  argTypes: {
    shape: {
      control: {
        type: 'inline-radio',
      },
      options: ['circle', 'rectangle'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<CardArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-card
        custom-class=${ifDefined(args['custom-class'])}
        height=${ifDefined(args.height)}
        shape=${ifDefined(args.shape)}
        width=${ifDefined(args.width)}
      ></modus-wc-card>
    `;
  },
};

export const Circle: Story = {
  render: () => {
    return html`
      <modus-wc-card height="5rem" shape="circle" width="5rem"></modus-wc-card>
    `;
  },
};

export const Square: Story = {
  render: () => {
    return html` <modus-wc-card height="5rem" width="5rem"></modus-wc-card> `;
  },
};

// prettier-ignore
export const Composed: Story = {
  render: () => {
    return html`
<style>
  .card-container {
    width: 13rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-profile {
    display: flex;
    gap: 1rem;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
<div class="card-container">
  <div class="card-profile">
    <modus-wc-card
      height="4rem"
      shape="circle"
      width="4rem"
    ></modus-wc-card>
    <div class="card-text">
      <modus-wc-card width="5rem"></modus-wc-card>
      <modus-wc-card width="7rem"></modus-wc-card>
    </div>
  </div>
  <modus-wc-card height="8rem"></modus-wc-card>
</div>
    `;
  },
};
