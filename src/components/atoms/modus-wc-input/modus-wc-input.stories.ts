import { Meta, StoryObj } from '@storybook/web-components';
import { setModusWCMode, ModusWCMode } from '../../../utils/theme';

interface InputArgs {
  ariaLabel: string;
  placeholder: string;
  value: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'number';
  customClass: string;
  disabled: boolean;
  required: boolean;
  size: 'small' | 'medium' | 'large';
  mode: ModusWCMode;
}

const meta: Meta<InputArgs> = {
  title: 'Components/Input',
  argTypes: {
    ariaLabel: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    customClass: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'dark', 'high-contrast'],
    },
  },
};

export default meta;

type Story = StoryObj<InputArgs>;

const Template: Story = {
  render: (args) => {
    setModusWCMode(args.mode);

    return `
        <div>
            <h1>Input</h1>
            <modus-wc-input 
              aria-label="${args.ariaLabel}"
              placeholder="${args.placeholder}"
              value="${args.value}"
              name="${args.name}"
              type="${args.type}"
              custom-class="${args.customClass}"
              size="${args.size}"
              ${args.disabled ? 'disabled' : ''}
              ${args.required ? 'required' : ''}
            ></modus-wc-input>
            <stencil-docs component-name="modus-wc-input"></stencil-docs>
        </div>
    `;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    ariaLabel: 'Input field',
    customClass: '',
    disabled: false,
    mode: 'default',
    name: 'input-field',
    placeholder: 'Enter text',
    required: false,
    size: 'medium',
    type: 'text',
    value: '',
  },
};
