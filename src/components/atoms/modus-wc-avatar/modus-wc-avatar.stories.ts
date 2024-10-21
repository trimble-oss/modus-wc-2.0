import { Meta, StoryObj } from '@storybook/web-components';
import { setModusWCMode, ModusWCMode } from '../../../utils/theme';

interface AvatarArgs {
  alt: string;
  ariaLabel: string;
  customClass: string;
  daisyClass: string;
  imgSrc: string;
  mode: ModusWCMode;
}

const meta: Meta<AvatarArgs> = {
  title: 'Components/Atoms/Avatar',
  argTypes: {
    alt: { control: 'text' },
    ariaLabel: { control: 'text' },
    customClass: { control: 'text' },
    daisyClass: { control: 'text' },
    imgSrc: { control: 'text' },
    mode: {
      control: { type: 'select' },
      options: ['default', 'dark', 'high-contrast'],
    },
  },
};

export default meta;

type Story = StoryObj<AvatarArgs>;

const Template: Story = {
  render: (args) => {
    setModusWCMode(args.mode);

    return `
      <div>
        <h1>Avatar</h1>
        <modus-wc-avatar 
          alt="${args.alt}"
          aria-label="${args.ariaLabel}"
          custom-class="${args.customClass}"
          daisy-class="${args.daisyClass}"
          img-src="${args.imgSrc}"
        ></modus-wc-avatar>
        <stencil-docs component-name="modus-wc-avatar"></stencil-docs>
      </div>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    alt: 'User avatar',
    ariaLabel: 'User avatar',
    customClass: '',
    daisyClass: '',
    imgSrc:
      'https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg',
    mode: 'default',
  },
};
