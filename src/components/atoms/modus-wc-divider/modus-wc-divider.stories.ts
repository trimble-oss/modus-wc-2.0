import { Meta, StoryObj } from '@storybook/web-components';

interface DividerArgs {
  ariaLabel: string;
  customClass: string;
  daisyClass: string;
  content: string;
}

const meta: Meta<DividerArgs> = {
  title: 'Components/Atoms/Divider',
  component: 'modus-wc-divider',
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    customClass: { control: 'text' },
    daisyClass: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<DividerArgs>;

const Template: Story = {
  render: (args) => {
    return `
      <modus-wc-divider 
        aria-label="${args.ariaLabel}"
        custom-class="${args.customClass}"
        daisy-class="${args.daisyClass}"
        content="${args.content}"
      ></modus-wc-divider>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    ariaLabel: 'Horizontal divider',
    content: '',
    customClass: '',
    daisyClass: '',
  },
};
