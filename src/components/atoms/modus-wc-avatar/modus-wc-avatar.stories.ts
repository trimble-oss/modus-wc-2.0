import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';

interface AvatarArgs {
  alt: string;
  'aria-label': string;
  'custom-class': string;
  'img-src': string;
  shape: string;
  size: string;
}

const meta: Meta<AvatarArgs> = {
  title: 'Components/Avatar',
  component: 'modus-wc-avatar',
  args: {
    alt: 'Example avatar',
    'aria-label': 'Example avatar',
    'img-src':
      'https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg',
    shape: 'circle',
    size: 'md',
  },
  argTypes: {
    shape: {
      control: { type: 'inline-radio' },
      options: ['circle', 'square'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;

type Story = StoryObj<AvatarArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-avatar
        alt="${args.alt}"
        aria-label="${args['aria-label']}"
        ?custom-class="${args['custom-class']}"
        img-src="${args['img-src']}"
        shape="${args.shape}"
        size="${args.size}"
      ></modus-wc-avatar>
    `;
  },
};

export const Default: Story = { ...Template };
