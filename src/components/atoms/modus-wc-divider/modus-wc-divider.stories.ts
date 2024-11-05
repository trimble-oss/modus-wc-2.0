import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface DividerArgs {
  'aria-label': string;
  content: string;
  'custom-class': string;
  'daisy-class': string;
}

const meta: Meta<DividerArgs> = {
  title: 'Components/Atoms/Divider',
  component: 'modus-wc-divider',
};

export default meta;

type Story = StoryObj<DividerArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-divider
        aria-label="${args['aria-label']}"
        ?custom-class="${args['custom-class']}"
        ?daisy-class="${args['daisy-class']}"
        content="${args.content}"
      ></modus-wc-divider>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    'aria-label': 'Horizontal divider',
    content: '',
  },
};
