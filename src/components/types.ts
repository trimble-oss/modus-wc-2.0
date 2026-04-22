import { IInputFeedbackLevel } from './modus-wc-input-feedback/modus-wc-input-feedback';

// These are the supported sizes in DaisyUI
export type DaisySize = 'xs' | 'sm' | 'md' | 'lg';

export type Density = 'comfortable' | 'compact' | 'relaxed';

export type ModusSize = Extract<DaisySize, 'sm' | 'md' | 'lg'>;

export type Orientation = 'horizontal' | 'vertical';

export type SelectionMode = 'single' | 'multiple';

export type TypographyHierarchy = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TypographySize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type TypographyWeight = 'light' | 'normal' | 'semibold' | 'bold';

export type WeekStartDay =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

// -- Web Types -- //

// ─── Autocomplete token primitives ───────────────────────────────────────────

/** Grouping tokens — must precede a detail token, e.g. `shipping street-address` */
type AutocompleteGroupToken = 'shipping' | 'billing';

/** Recipient tokens — must precede a contact token, e.g. `home tel` */
type AutocompleteRecipientToken = 'home' | 'work' | 'mobile' | 'fax' | 'pager';

/** Contact tokens — valid standalone or after a recipient token */
type AutocompleteContactToken = 'tel' | 'email' | 'impp';

/**
 * Named-section token — any `section-<alphanumeric>` string, e.g. `section-billing`.
 * Groups form controls that share the same named section.
 */
type AutocompleteSectionToken = `section-${string}`;

/** All tokens that are valid as the core detail value in a token list */
type AutocompleteDetailToken =
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
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
  | 'url'
  | 'photo'
  | AutocompleteContactToken
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension';

/**
 * All valid token-list combinations, excluding the optional `webauthn` suffix.
 *
 * Token order per the WHATWG spec:
 *   `[section-*] [shipping|billing] ([home|…] <contact> | <detail>)`
 */
type AutocompleteBase =
  | AutocompleteDetailToken
  | `${AutocompleteGroupToken} ${AutocompleteDetailToken}`
  | `${AutocompleteRecipientToken} ${AutocompleteContactToken}`
  | `${AutocompleteGroupToken} ${AutocompleteRecipientToken} ${AutocompleteContactToken}`
  | `${AutocompleteSectionToken} ${AutocompleteDetailToken}`
  | `${AutocompleteSectionToken} ${AutocompleteGroupToken} ${AutocompleteDetailToken}`
  | `${AutocompleteSectionToken} ${AutocompleteRecipientToken} ${AutocompleteContactToken}`
  | `${AutocompleteSectionToken} ${AutocompleteGroupToken} ${AutocompleteRecipientToken} ${AutocompleteContactToken}`;

/**
 * For `autocomplete`, from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 *
 * Models the full WHATWG token-list spec:
 *   - `on` / `off`
 *   - standalone detail token              e.g. `given-name`
 *   - `<group> <detail>`                   e.g. `shipping street-address`
 *   - `<recipient> <contact>`              e.g. `home tel`
 *   - `<group> <recipient> <contact>`      e.g. `shipping home tel`
 *   - `<section> …`                        e.g. `section-user shipping street-address`
 *   - Any of the above `+ webauthn`        e.g. `username webauthn`
 */
export type AutocompleteTypes =
  | 'on'
  | 'off'
  | AutocompleteBase
  | `${AutocompleteBase} webauthn`;

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

export interface IAutocompleteItem {
  /** Whether the item should display a checkbox. Optional. */
  checkbox?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is currently focused */
  focused?: boolean;
  /** The display text shown for the autocomplete item */
  label: string;
  /** Whether the item is currently selected */
  selected?: boolean;
  /** The tooltip text to display when hovering over the menu item */
  tooltip?: string;
  /** The tooltip text to display when hovering over the menu item (preferred over tooltip) */
  tooltipContent?: string;
  /** The position of the tooltip relative to the menu item */
  tooltipPosition?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
  /** The unique value identifier for the item */
  value: string;
  /** Whether the item should be shown in the dropdown menu */
  visibleInMenu: boolean;
}

export interface IAutocompleteNoResults {
  /** The aria-label to provide accessibility information for the no results section. */
  ariaLabel?: string;
  /** The main label to display when no results are found. */
  label: string;
  /** The sub-label or additional text to display below the main label. */
  subLabel: string;
}
