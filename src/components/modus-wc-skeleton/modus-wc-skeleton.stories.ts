import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface SkeletonArgs {
  'custom-class'?: string;
  height?: string;
  shape?: 'circle' | 'rectangle';
  width?: string;
}

const meta: Meta<SkeletonArgs> = {
  title: 'Components/Skeleton',
  component: 'modus-wc-skeleton',
  args: {
    'custom-class': '',
    height: '1.5rem',
    shape: 'rectangle',
    width: '100%',
  },
  argTypes: {
    shape: {
      control: {
        type: 'select',
      },
      options: ['circle', 'rectangle'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<SkeletonArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-skeleton
        custom-class=${ifDefined(args['custom-class'])}
        height=${ifDefined(args.height)}
        shape=${ifDefined(args.shape)}
        width=${ifDefined(args.width)}
      ></modus-wc-skeleton>
    `;
  },
};

export const Circle: Story = {
  render: () => {
    return html`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    `;
  },
};

export const Square: Story = {
  render: () => {
    return html`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    `;
  },
};

export const Composed: Story = {
  render: () => {
    // prettier-ignore
    return html`
<style>
  .skeleton-container {
    width: 13rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skeleton-profile {
    display: flex;
    gap: 1rem;
  }

  .skeleton-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
<div class="skeleton-container">
  <div class="skeleton-profile">
    <modus-wc-skeleton
      height="4rem"
      shape="circle"
      width="4rem"
    ></modus-wc-skeleton>
    <div class="skeleton-text">
      <modus-wc-skeleton width="5rem"></modus-wc-skeleton>
      <modus-wc-skeleton width="7rem"></modus-wc-skeleton>
    </div>
  </div>
  <modus-wc-skeleton height="8rem"></modus-wc-skeleton>
</div>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('skeleton-shadow-host')) {
      const SkeletonShadowHost = createShadowHostClass<SkeletonArgs>({
        componentTag: 'modus-wc-skeleton',
        propsMapper: (v: SkeletonArgs, el: HTMLElement) => {
          const skeletonEl = el as unknown as {
            customClass: string;
            height: string;
            shape: string;
            width: string;
          };
          skeletonEl.customClass = v['custom-class'] || '';
          skeletonEl.height = v.height ?? '1.5rem';
          skeletonEl.shape = v.shape ?? 'rectangle';
          skeletonEl.width = v.width ?? '100%';
        },
      });
      customElements.define('skeleton-shadow-host', SkeletonShadowHost);
    }

    return html`<skeleton-shadow-host
      .props=${{ ...args }}
    ></skeleton-shadow-host>`;
  },
};
