import { DaisySize, ModusSize } from './types';

// Used by inputs with labels rendered horizontally (checkbox, radio, toggle) to get label sizes.
export const DAISY_TO_MODUS_LABEL_SIZE: Record<DaisySize, ModusSize> = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'lg',
};

/** Maps text/select input sizes to supported label and feedback sizes. */
export const INPUT_SIZE_TO_LABEL_SIZE: Record<
  ModusSize | 'xs' | 'xl',
  ModusSize
> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'lg',
};

/** Maps menu/tree item sizes to modus-wc-checkbox sizes. */
export const MENU_ITEM_SIZE_TO_CHECKBOX_SIZE: Record<
  ModusSize | 'xs' | 'xl',
  ModusSize
> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'lg',
};

/** Maps menu/tree item sizes to submenu chevron (modus-wc-icon) sizes. */
export const MENU_ITEM_SIZE_TO_CHEVRON_SIZE: Record<
  ModusSize | 'xs' | 'xl',
  DaisySize
> = {
  xs: 'xs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'lg',
};
