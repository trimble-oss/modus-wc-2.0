import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IAutocompleteItem } from './modus-wc-autocomplete';
import { ModusSize } from '../../types';

const items: IAutocompleteItem[] = [
  { label: 'Apple', value: 'apple', visibleInMenu: true },
  { label: 'Banana', value: 'banana', visibleInMenu: true },
  { label: 'Blueberry', value: 'blueberry', visibleInMenu: true },
  { label: 'Cherry', value: 'cherry', visibleInMenu: true },
  { label: 'Grape', value: 'grape', visibleInMenu: true },
  { label: 'Lemon', value: 'lemon', visibleInMenu: true },
  { label: 'Orange', value: 'orange', visibleInMenu: true },
  { label: 'Peach', value: 'peach', visibleInMenu: true },
  { label: 'Pear', value: 'pear', visibleInMenu: true },
  { label: 'Strawberry', value: 'strawberry', visibleInMenu: true },
];

interface AutocompleteArgs {
  bordered?: boolean;
  'custom-class'?: string;
  'debounce-ms'?: number;
  disabled?: boolean;
  'input-dir'?: string;
  'input-id'?: string;
  'input-tab-index'?: number;
  items: IAutocompleteItem[];
  'min-chars': number;
  'multi-select'?: boolean;
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
    bordered: true,
    'debounce-ms': 300,
    disabled: false,
    items: items,
    'min-chars': 0,
    'multi-select': false,
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
      handles: [
        'chipRemove',
        'inputBlur',
        'inputChange',
        'inputFocus',
        'itemSelect',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<AutocompleteArgs>;

const Template: Story = {
  render: (args) => {
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map((item) => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
    };

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

        // Clear the previous selection.
        items.forEach((item) => (item.selected = false));

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find((item) => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };

    // prettier-ignore
    return html`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
<script>
  const handleInputChange = (e) => {
    if (!e.detail?.target) return;

    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      const input = e.detail.target as HTMLInputElement;
      const searchText = input.value.toLowerCase();

      // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
      const updatedItems = items.map((item) => ({
        ...item,
        selected: searchText ? item.selected : false,
        visibleInMenu: item.label.toLowerCase().includes(searchText),
      }));

      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };

  const handleItemSelect = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Clear the previous selection.
      items.forEach((item) => (item.selected = false));

      // Mark the user selected menu item as selected and create a new array to update items.
      const foundItem = items.find((item) => item.value === e.detail.value);
      if (foundItem) {
        foundItem.selected = true;
        autocomplete.items = [...items];
      }
    }
  };
</script>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  debounce-ms=${ifDefined(args['debounce-ms'])}
  ?disabled=${args.disabled}
  input-dir=${ifDefined(args['input-dir'])}
  input-id=${ifDefined(args['input-id'])}
  input-tab-index=${ifDefined(args['input-tab-index'])}
  .items=${args.items}
  min-chars=${args['min-chars']}
  ?multi-select=${false}
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

export const MultiSelect: Story = {
  render: (args) => {
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        // Update the 'selected' value of the removed item.
        const foundItem = items.find((item) => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = false;
          autocomplete.items = [...items];
        }
      }
    };

    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map((item) => ({
          ...item,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
    };

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
        autocomplete.value = '';
        autocomplete.items = items.map((item) => ({
          ...item,
          visibleInMenu: true,
        }));

        // Mark the user selected item as selected.
        const fruit = items.find((fruit) => fruit.value === e.detail.value);
        if (fruit) {
          fruit.selected = true;
        }
      }
    };

    // prettier-ignore
    return html`
<style>
  /* Only for Storybook */
  div#story--components-forms-autocomplete--multi-select-inner {
    height: 400px;
  }
</style>
<script>
  const handleChipRemove = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Update the 'selected' value of the removed item.
      const foundItem = items.find((item) => item.value === e.detail.value);
      if (foundItem) {
        foundItem.selected = false;
        autocomplete.items = [...items];
      }
    }
  };
  
  const handleInputChange = (e) => {
    if (!e.detail?.target) return;

    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );
    
    if (autocomplete) {
      const input = e.detail.target as HTMLInputElement;
      const searchText = input.value.toLowerCase();

      // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
      const updatedItems = items.map((item) => ({
        ...item,
        selected: searchText ? item.selected : false,
        visibleInMenu: item.label.toLowerCase().includes(searchText),
      }));
      
      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };
  
  const handleItemSelect = (e) => {
    const autocomplete = (e.target
    as
    HTMLInputElement
  ).
    closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
      autocomplete.value = '';
      autocomplete.items = items.map((item) => ({
        ...item,
        visibleInMenu: true,
      }));

      // Mark the user selected item as selected.
      const fruit = items.find((fruit) => fruit.value === e.detail.value);
      if (fruit) {
        fruit.selected = true;
      }
    }
  };
</script>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  debounce-ms=${ifDefined(args['debounce-ms'])}
  ?disabled=${args.disabled}
  input-dir=${ifDefined(args['input-dir'])}
  input-id=${ifDefined(args['input-id'])}
  input-tab-index=${ifDefined(args['input-tab-index'])}
  .items=${args.items}
  min-chars=${args['min-chars']}
  ?multi-select=${true}
  name=${ifDefined(args.name)}
  placeholder=${ifDefined(args.placeholder)}
  ?read-only=${args['read-only']}
  ?required=${args.required}
  size=${ifDefined(args.size)}
  value=${args.value}
  @chipRemove=${handleChipRemove}
  @inputChange=${handleInputChange}
  @itemSelect=${handleItemSelect}
></modus-wc-autocomplete>
    `;
  },
};
