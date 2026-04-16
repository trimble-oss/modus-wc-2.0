import { IInputFeedbackLevel } from './modus-wc-input-feedback/modus-wc-input-feedback';

// These are the supported sizes in DaisyUI
export type DaisySize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Available logo names for the Modus Logo component
 */
export type LogoName =
  // Trimble Products
  | 'accubid_anywhere'
  | 'accubid_classic'
  | 'advanced_image_manager'
  | 'analytics'
  | 'app_xchange'
  | 'appian'
  | 'atlas'
  | 'autobid'
  | 'b2w'
  | 'buildable_content'
  | 'business_center'
  | 'connect'
  | 'connect2fab'
  | 'copilot'
  | 'demand_planning'
  | 'earthworks'
  | 'estimation_construct'
  | 'estimation_desktop'
  | 'fabrication'
  | 'fabshop'
  | 'field_points'
  | 'fieldlink'
  | 'financials'
  | 'geosuite'
  | 'infrastructure'
  | 'innovative'
  | 'livecount'
  | 'materials'
  | 'modus'
  | 'modus_blueprint'
  | 'nova'
  | 'novapoint'
  | 'pay'
  | 'pc_miler'
  | 'prodesign'
  | 'projectsight'
  | 'quadri'
  | 'reality_capture'
  | 'sitevision'
  | 'siteworks'
  | 'sketchup'
  | 'sketchup_for_schools'
  | 'sketchup_go'
  | 'smart_workflow'
  | 'stabicad'
  | 'supplier_xchange'
  | 'sysque'
  | 'tekla'
  | 'tekla_structures'
  | 'terraflex'
  | 'tms'
  | 'tmt'
  | 'tmw_suite'
  | 'trade_service'
  | 'trade_service_live'
  | 'traqspera'
  | 'trimble'
  | 'truckmate'
  | 'unity'
  | 'unity_adms'
  | 'unity_construct'
  | 'unity_field'
  | 'unity_maintain'
  | 'unity_permit'
  | 'winest'
  | 'worksmanager'
  // Viewpoint Products
  | 'viewpoint'
  | 'viewpoint_analytics'
  | 'viewpoint_epayments'
  | 'viewpoint_estimating'
  | 'viewpoint_field_management'
  | 'viewpoint_field_time'
  | 'viewpoint_field_view'
  | 'viewpoint_financial_controls'
  | 'viewpoint_for_projects'
  | 'viewpoint_hr_management'
  | 'viewpoint_jobpac_connect'
  | 'viewpoint_procontractor'
  | 'viewpoint_spectrum'
  | 'viewpoint_spectrum_service_tech'
  | 'viewpoint_team'
  | 'viewpoint_vista'
  | 'viewpoint_vista_field_service';

export type Density = 'comfortable' | 'compact' | 'relaxed';

export type ModusSize = Extract<DaisySize, 'sm' | 'md' | 'lg'>;

export type AppName = LogoName;

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
