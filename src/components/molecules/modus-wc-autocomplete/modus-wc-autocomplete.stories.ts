import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IMenuItem } from '../../atoms/modus-wc-menu/modus-wc-menu';
import { ModusSize } from '../../types';

const fruits: IMenuItem[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
  { label: 'Strawberry', value: 'strawberry' },
];

interface AutocompleteArgs {
  'active-item-value'?: string;
  'aria-describedby'?: string;
  'aria-label': string;
  bordered?: boolean;
  'custom-class'?: string;
  'debounce-ms'?: number;
  disabled?: boolean;
  'input-dir'?: string;
  'input-id'?: string;
  'input-tab-index'?: number;
  items: IMenuItem[];
  'min-chars': number;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  size?: ModusSize;
  value: string;
}

const meta: Meta<AutocompleteArgs> = {
  title: 'Components/Forms/Autocomplete',
  component: 'modus-wc-autocomplete',
  args: {
    'aria-label': 'Fruit selection autocomplete',
    'debounce-ms': 300,
    disabled: false,
    items: fruits,
    'min-chars': 0,
    placeholder: 'Search for fruits...',
    size: 'md',
    value: '',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['inputBlur', 'inputChange', 'inputFocus', 'itemSelect'],
    },
  },
};

export default meta;

type Story = StoryObj<AutocompleteArgs>;

const Template: Story = {
  render: (args) => {
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const input = e.detail.target as HTMLInputElement;
      const searchText = input.value.toLowerCase();
      const filteredFruits = fruits.filter((fruit) =>
        fruit.label.toLowerCase().includes(searchText)
      );

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );
      if (autocomplete) {
        autocomplete.items = filteredFruits;
        autocomplete.value = input.value;

        if (!searchText) autocomplete.activeItemValue = input.value;
      }
    };

    const handleItemSelect = (e: CustomEvent<IMenuItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );
      if (autocomplete) {
        autocomplete.activeItemValue = e.detail.value;
        autocomplete.value = e.detail.label;
      }
    };

    return html`
      <modus-wc-autocomplete
        active-item-value=${ifDefined(args['active-item-value'])}
        aria-describedby=${ifDefined(args['aria-describedby'])}
        aria-label=${args['aria-label']}
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        debounce-ms=${ifDefined(args['debounce-ms'])}
        ?disabled=${args.disabled}
        input-dir=${ifDefined(args['input-dir'])}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        .items=${args.items}
        min-chars=${args['min-chars']}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        value=${args.value}
        @inputChange=${handleInputChange}
        @itemSelect=${handleItemSelect}
      ></modus-wc-autocomplete>
    `;
  },
};

export const Default: Story = {
  ...Template,
};
