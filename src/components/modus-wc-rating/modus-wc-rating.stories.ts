import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusWcRatingVariant } from './modus-wc-rating';

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
      options: ['star', 'heart', 'smiley', 'thumb'],
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
    const myAriaLabelText = (index: number) =>
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
  count="5"
  custom-class="custom-rating-component"
  disabled=${ifDefined(args.disabled)}
  size=${ifDefined(args.size)}
  value=${ifDefined(args.value)}
  variant=${args.variant}
  .getAriaLabelText=${myAriaLabelText}
></modus-wc-rating>
    `;
  },
};
