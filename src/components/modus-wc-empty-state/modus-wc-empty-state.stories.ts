import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  EmptyStateIllustration,
  EmptyStateVariant,
  getIllustrationsForVariant,
} from './illustration-constants';

interface EmptyStateArgs {
  variant: EmptyStateVariant;
  illustration?: EmptyStateIllustration;
  heading: string;
  subtitle?: string;
  'action-label'?: string;
  'custom-class'?: string;
}

const meta: Meta<EmptyStateArgs> = {
  title: 'Components/Empty State',
  component: 'modus-wc-empty-state',
  decorators: [withActions],
  args: {
    variant: 'compact',
    illustration: 'selection_plus',
    heading: 'Title for Empty State',
    subtitle: 'Subtitle',
    'action-label': 'Action',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['compact', 'illustration', 'error'],
    },
    illustration: {
      control: { type: 'select' },
      options: getIllustrationsForVariant('compact'),
    },
  },
  parameters: {
    actions: {
      handles: ['actionClick'],
    },
    docs: {
      description: {
        component:
          'Use the `illustration` prop to choose a bundled graphic. Allowed values depend on `variant`. **Default** covers compact; see **Illustration** and **Error404** for the other layouts.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<EmptyStateArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-empty-state
        variant="${args.variant}"
        illustration="${ifDefined(args.illustration)}"
        heading="${args.heading}"
        subtitle="${ifDefined(args.subtitle)}"
        action-label="${ifDefined(args['action-label'])}"
        custom-class="${ifDefined(args['custom-class'])}"
        @actionClick=${(e: CustomEvent) => e}
      ></modus-wc-empty-state>
    `;
  },
};

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Default `variant="compact"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.',
      },
    },
  },
  argTypes: {
    illustration: {
      control: { type: 'select' },
      options: getIllustrationsForVariant('compact'),
    },
  },
};

export const Illustration: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          '`variant="illustration"`. `illustration` options: `landscape`, `documents_empty`, `cloud_access`, `store_settings`, `error_404`. Default: `landscape`.',
      },
    },
  },
  argTypes: {
    illustration: {
      control: { type: 'select' },
      options: getIllustrationsForVariant('illustration'),
    },
  },
  args: {
    variant: 'illustration',
    illustration: 'landscape',
    heading: 'Title for Empty State',
    subtitle: 'Subtitle',
    'action-label': 'Action',
  },
};

export const Error404: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          '`variant="error"`. `illustration` option: `page_not_found`. Default: `page_not_found`.',
      },
    },
  },
  argTypes: {
    illustration: {
      control: { type: 'select' },
      options: getIllustrationsForVariant('error'),
    },
  },
  args: {
    variant: 'error',
    illustration: 'page_not_found',
    heading: '404 Page Not Found',
    subtitle:
      'Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!',
    'action-label': 'Action',
  },
};

export const WithoutAction: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Compact layout without an action button. `illustration` options match **Default**.',
      },
    },
  },
  argTypes: {
    illustration: {
      control: { type: 'select' },
      options: getIllustrationsForVariant('compact'),
    },
  },
  args: {
    variant: 'compact',
    illustration: 'symbol_info',
    heading: 'Nothing here yet',
    subtitle: 'Create your first item to populate this view.',
    'action-label': undefined,
  },
};
