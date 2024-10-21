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
      <div>
        <h1>Divider</h1>
        <div>
          <div>Content</div>
          <modus-wc-divider 
            aria-label="${args.ariaLabel}"
            custom-class="${args.customClass}"
            daisy-class="${args.daisyClass}"
            content="${args.content}"
          ></modus-wc-divider>
          <div>Content</div>
        </div>
        <stencil-docs component-name="modus-wc-divider"></stencil-docs>
      </div>
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
