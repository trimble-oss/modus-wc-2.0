import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { DaisySize } from '../types';

interface AvatarArgs {
  alt: string;
  'custom-class'?: string;
  'img-src': string;
  initials: string;
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
    initials: '',
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
        custom-class="${ifDefined(args['custom-class'])}"
        img-src="${args['img-src']}"
        initials="${args.initials}"
        shape="${args.shape}"
        size="${args.size}"
      ></modus-wc-avatar>
    `;
  },
};

export const Default: Story = { ...Template };

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('avatar-shadow-host')) {
      const AvatarShadowHost = createShadowHostClass<AvatarArgs>({
        componentTag: 'modus-wc-avatar',
        propsMapper: (v: AvatarArgs, el: HTMLElement) => {
          const avatarEl = el as unknown as {
            alt: string;
            customClass: string;
            imgSrc: string;
            initials: string;
            shape: string;
            size: string;
          };
          avatarEl.alt = v.alt;
          avatarEl.customClass = v['custom-class'] || '';
          avatarEl.imgSrc = v['img-src'];
          avatarEl.initials = v.initials;
          avatarEl.shape = v.shape;
          avatarEl.size = v.size;
        },
      });
      customElements.define('avatar-shadow-host', AvatarShadowHost);
    }

    return html`<avatar-shadow-host
      .props=${{ ...args }}
    ></avatar-shadow-host>`;
  },
};
