import { Meta, StoryObj } from '@storybook/web-components';
import { setModusWCMode, ModusWCMode } from '../../../utils/theme';

interface DividerArgs {
  ariaLabel: string;
  customClass: string;
  daisyClass: string;
  content: string;
  mode: ModusWCMode;
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
    mode: {
      control: { type: 'select' },
      options: ['default', 'dark', 'high-contrast'],
    },
  },
};

export default meta;

type Story = StoryObj<DividerArgs>;

const Template: Story = {
  render: (args) => {
    setModusWCMode(args.mode);

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
    mode: 'default',
  },
};
