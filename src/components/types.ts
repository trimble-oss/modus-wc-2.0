import { IInputFeedbackLevel } from './modus-wc-input-feedback/modus-wc-input-feedback';

// These are the supported sizes in DaisyUI
export type DaisySize = 'xs' | 'sm' | 'md' | 'lg';

export type Density = 'comfortable' | 'compact' | 'relaxed';

export type ModusSize = Extract<DaisySize, 'sm' | 'md' | 'lg'>;

export type Orientation = 'horizontal' | 'vertical';

export type TypographySize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

// -- Web Types -- //

/** For `autocomplete`, from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete */
export type AutocompleteTypes =
  | 'on'
  | 'off'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-extension'
  | 'impp'
  | 'url'
  | 'photo';

/** For `input`, from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types */
export type TextFieldTypes =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'time'
  | 'week'
  | 'month'
  | 'datetime-local';

export interface IInputFeedbackProp {
  level: IInputFeedbackLevel;
  message?: string;
}

export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';
