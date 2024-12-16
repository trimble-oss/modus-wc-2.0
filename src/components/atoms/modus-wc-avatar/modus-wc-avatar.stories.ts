import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { DaisySize } from '../../types';
import { ifDefined } from 'lit/directives/if-defined.js';

interface AvatarArgs {
  alt: string;
  'a11y-label': string;
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
    'a11y-label': 'Example avatar',
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
      control: { type: 'inline-radio' },
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
        a11y-label="${args['a11y-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        img-src="${args['img-src']}"
        shape="${args.shape}"
        size="${args.size}"
      ></modus-wc-avatar>
    `;
  },
};

export const Default: Story = { ...Template };
