import { DaisySize, ModusSize } from './types';

// Used by inputs with labels rendered horizontally (checkbox, radio, toggle) to get label sizes.
export const DAISY_TO_MODUS_LABEL_SIZE: Record<DaisySize, ModusSize> = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'lg',
};
