import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusWcRatingVariant } from './modus-wc-rating';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface RatingArgs {
  'allow-half'?: boolean;
  count: number;
  'custom-class'?: string;
  disabled?: boolean;
  getAriaLabelText?: (index: number) => string;
  size?: 'sm' | 'md' | 'lg';
  value?: number;
  variant: ModusWcRatingVariant;
}

const meta: Meta<RatingArgs> = {
  title: 'Components/Forms/Rating',
  component: 'modus-wc-rating',
  args: {
    'allow-half': false,
    count: 5,
    'custom-class': '',
    disabled: false,
    getAriaLabelText: (index: number) => `${index} rating`,
    size: 'md',
    value: 0,
    variant: 'smiley',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['heart', 'smiley', 'star', 'thumb'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['ratingChange'],
    },
  },
};

export default meta;

type Story = StoryObj<RatingArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-rating
      aria-label="Rating scale component"
      allow-half=${ifDefined(args['allow-half'])}
      count=${args.count}
      custom-class=${ifDefined(args['custom-class'])}
      disabled=${ifDefined(args.disabled)}
      size=${ifDefined(args.size)}
      value=${ifDefined(args.value)}
      variant=${args.variant}
      .getAriaLabelText=${args.getAriaLabelText}
    ></modus-wc-rating>
  `,
};

export const CustomAriaLabels: Story = {
  render: (args) => {
    const ariaLabelText = (index: number) =>
      `Custom label for rating item ${index}`;

    // prettier-ignore
    return html`
<script>
  const myAriaLabelText = (index) => {
    return 'Custom label for rating item ' + index.toString();
  };
</script>
<modus-wc-rating
  aria-label="Rating scale component"
  allow-half=${ifDefined(args['allow-half'])}
  count=${args.count}
  custom-class="custom-rating-component"
  disabled=${ifDefined(args.disabled)}
  size=${ifDefined(args.size)}
  value=${ifDefined(args.value)}
  variant=${args.variant}
  .getAriaLabelText=${ariaLabelText}
></modus-wc-rating>
    `;
  },
};

export const CustomColors: Story = {
  // prettier-ignore
  render: (args) => html`
<style>
  .custom-color-rating-component {
    --modus-wc-rating-item-color: var(--modus-wc-color-yellow-dark);
  }
</style>
<modus-wc-rating
  aria-label="Rating scale component"
  allow-half=${ifDefined(args['allow-half'])}
  count=${args.count}
  custom-class="custom-color-rating-component"
  disabled=${ifDefined(args.disabled)}
  size=${ifDefined(args.size)}
  value="3"
  variant="star"
></modus-wc-rating>
  `,
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for rating component
    if (!customElements.get('rating-shadow-host')) {
      const RatingShadowHost = createShadowHostClass<RatingArgs>({
        componentTag: 'modus-wc-rating',
        propsMapper: (v: RatingArgs, el: HTMLElement) => {
          const ratingEl = el as unknown as {
            allowHalf: boolean;
            count: number;
            customClass: string;
            disabled: boolean;
            getAriaLabelText: (index: number) => string;
            size: string;
            value: number;
            variant: string;
          };
          ratingEl.allowHalf = Boolean(v['allow-half']);
          ratingEl.count = v.count;
          ratingEl.customClass = v['custom-class'] || '';
          ratingEl.disabled = Boolean(v.disabled);
          if (v.getAriaLabelText) {
            ratingEl.getAriaLabelText = v.getAriaLabelText; // Conditional assignment only if provided
          }
          ratingEl.size = v.size || 'md';
          ratingEl.value = v.value || 0;
          ratingEl.variant = v.variant;
        },
      });
      customElements.define('rating-shadow-host', RatingShadowHost);
    }

    return html`<rating-shadow-host
      .props=${{ ...args }}
    ></rating-shadow-host>`;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Type/variant values have changed from \`smileys\` to \`smiley\` and \`thumbs\` to \`thumb\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop    | Notes                                                |
|-------------|-------------|------------------------------------------------------|
| aria-label  | aria-label  |                                                      |
| disabled    | disabled    |                                                      |
| type        | variant     | \`smileys\` → \`smiley\`, \`thumbs\` → \`thumb\`     |

#### Event Mapping

| 1.0 Event          | 2.0 Event    | Notes                                         |
|--------------------|--------------|-----------------------------------------------|
| sentimentSelection | ratingChange |                                               |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
