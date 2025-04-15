import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../types';

interface AvatarArgs {
  alt: string;
  'custom-class'?: string;
  'img-src': string;
  shape: string;
  size: DaisySize;
}

const meta: Meta<AvatarArgs> = {
  title: 'Components/Avatar',
  component: 'modus-wc-avatar',
  args: {
    alt: 'Example avatar',
    'img-src':
      'https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg',
    shape: 'circle',
    size: 'md',
  },
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
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
        aria-label="Avatar"
        custom-class="${ifDefined(args['custom-class'])}"
        img-src="${args['img-src']}"
        shape="${args.shape}"
        size="${args.size}"
      ></modus-wc-avatar>
    `;
  },
};

export const Default: Story = { ...Template };
