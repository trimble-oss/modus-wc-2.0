import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface CardArgs {
  bordered?: boolean;
  'custom-class'?: string;
  'image-full'?: boolean;
  layout?: 'stacked' | 'side';
  padding?: 'normal' | 'compact';
}

const meta: Meta<CardArgs> = {
  title: 'Components/Card',
  component: 'modus-wc-card',
  args: {
    bordered: false,
    'image-full': false,
    layout: 'stacked',
    padding: 'normal',
  },
  argTypes: {
    layout: {
      control: { type: 'inline-radio' },
      options: ['stacked', 'side'],
    },
    padding: {
      control: { type: 'inline-radio' },
      options: ['normal', 'compact'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<CardArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .modus-wc-card {
    width: 400px;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
</style>
<modus-wc-card
  aria-label="Sample card"
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  ?image-full=${args['image-full']}
  layout=${ifDefined(args.layout)}
  padding=${ifDefined(args.padding)}
>
  <figure slot="header">
    <img
      src="https://picsum.photos/400/150"
      alt="Sample card image"
    />
  </figure>
  <h2 slot="title">Card Title</h2>
  <p>This is a sample card content. You can place any content here.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button label="Click me"></modus-wc-button>
  </div>
</modus-wc-card>
    `;
  },
};

export const Default: Story = { ...Template };
