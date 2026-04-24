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

/**
 * Contact-field tokens  — valid standalone, after a recipient
 * token (`home` | `work` | …), or in the same positions as `tel` / `email` / `impp`.
 */
type AutocompleteContactToken =
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension'
  | 'email'
  | 'impp';

/**
 * Named-section token — any string prefixed with `section-`, e.g. `section-billing`.
 * Groups form controls that share the same named section.
 * Note: TypeScript cannot enforce the alphanumeric-only suffix constraint of the HTML spec.
 */
type AutocompleteSectionToken = `section-${string}`;

/** Autocomplete tokens in the spec's detail branch — excludes contact-field tokens (`AutocompleteContactToken`). */
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
  | 'photo';

/**
 * All valid token-list combinations, excluding the optional `webauthn` suffix.
 *
 * Token order per the HTML spec:
 *   `[section-*] [shipping|billing] ([home|…] <contact> | <detail>)`
 *
 * `<contact>` and `<detail>` are separate branches so contact tokens are not embedded in
 * `AutocompleteDetailToken` (avoids losing standalone / section + contact if detail is tightened).
 */
type AutocompleteBase =
  | AutocompleteDetailToken
  | AutocompleteContactToken
  | `${AutocompleteGroupToken} ${AutocompleteDetailToken}`
  | `${AutocompleteRecipientToken} ${AutocompleteContactToken}`
  | `${AutocompleteGroupToken} ${AutocompleteRecipientToken} ${AutocompleteContactToken}`
  | `${AutocompleteSectionToken} ${AutocompleteDetailToken}`
  | `${AutocompleteSectionToken} ${AutocompleteContactToken}`
  | `${AutocompleteSectionToken} ${AutocompleteGroupToken} ${AutocompleteDetailToken}`
  | `${AutocompleteSectionToken} ${AutocompleteRecipientToken} ${AutocompleteContactToken}`
  | `${AutocompleteSectionToken} ${AutocompleteGroupToken} ${AutocompleteRecipientToken} ${AutocompleteContactToken}`;

/**
 * Credential tokens that are valid directly before `webauthn` per the HTML spec.
 * `webauthn` is only meaningful in passkey/credential autofill contexts.
 */
type AutocompleteWebAuthnBase =
  | 'username'
  | 'current-password'
  | `${AutocompleteSectionToken} username`
  | `${AutocompleteSectionToken} current-password`;

/**
 * For `autocomplete`, from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 *
 * Models the full HTML spec token-list:
 *   - `''`  (empty string — attribute present without a value, browser uses default autofill)
 *   - `on` / `off`
 *   - standalone detail token              e.g. `given-name`
 *   - standalone contact token             e.g. `tel`, `tel-national`, `email`
 *   - `<group> <detail>`                   e.g. `shipping street-address`
 *   - `<recipient> <contact>`              e.g. `home tel`
 *   - `<group> <recipient> <contact>`      e.g. `shipping home tel`
 *   - `<section> …`                        e.g. `section-user shipping street-address`
 *   - `<section> <contact>`                e.g. `section-user tel`
 *   - `username webauthn` / `current-password webauthn` (credential + passkey contexts only)
 */
export type AutocompleteTypes =
  | 'on'
  | 'off'
  | AutocompleteBase
  | `${AutocompleteWebAuthnBase} webauthn`;

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
