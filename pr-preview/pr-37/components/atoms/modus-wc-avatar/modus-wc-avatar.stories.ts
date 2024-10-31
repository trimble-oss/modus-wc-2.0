import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';

interface AvatarArgs {
  alt: string;
  ariaLabel: string;
  customClass: string;
  imgSrc: string;
  shape: string;
  size: string;
}

const meta: Meta<AvatarArgs> = {
  title: 'Components/Atoms/Avatar',
  argTypes: {
    alt: { control: 'text' },
    ariaLabel: { control: 'text' },
    customClass: { control: 'text' },
    imgSrc: { control: 'text' },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;

type Story = StoryObj<AvatarArgs>;

const Template: Story = {
  render: (args) => html`
    <div>
      <h1>Avatar</h1>
      <modus-wc-avatar
        alt="${args.alt}"
        aria-label="${args.ariaLabel}"
        custom-class="${args.customClass}"
        img-src="${args.imgSrc}"
        shape="${args.shape}"
        size="${args.size}"
      ></modus-wc-avatar>
      <stencil-docs component-name="modus-wc-avatar"></stencil-docs>
    </div>
  `,
  args: {
    alt: 'User avatar',
    ariaLabel: 'User avatar',
    customClass: '',
    imgSrc:
      'https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg',
    shape: 'circle',
    size: 'md',
  },
};

export const Default: Story = { ...Template };
