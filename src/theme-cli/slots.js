/** DaisyUI v4 color slots → Modus semantic tokens (authoritative in variables.css / global.css). */
export const DAISY_SLOTS = {
  p: '--modus-wc-color-primary',
  pc: '--modus-wc-color-primary-content',
  s: '--modus-wc-color-secondary',
  sc: '--modus-wc-color-secondary-content',
  a: '--modus-wc-color-accent',
  ac: '--modus-wc-color-accent-content',
  n: '--modus-wc-color-neutral',
  nc: '--modus-wc-color-neutral-content',
  b1: '--modus-wc-color-base-100',
  b2: '--modus-wc-color-base-200',
  b3: '--modus-wc-color-base-300',
  bc: '--modus-wc-color-base-content',
  in: '--modus-wc-color-info',
  inc: '--modus-wc-color-info-content',
  su: '--modus-wc-color-success',
  suc: '--modus-wc-color-success-content',
  wa: '--modus-wc-color-warning',
  wac: '--modus-wc-color-warning-content',
  er: '--modus-wc-color-error',
  erc: '--modus-wc-color-error-content',
};

export const SLOT_NAMES = Object.keys(DAISY_SLOTS);

export const THEME_NAMES = [
  'modus-modern-light',
  'modus-modern-dark',
  'modus-classic-light',
  'modus-classic-dark',
  'connect-light',
  'connect-dark',
];

export const DEFAULT_THEME = 'modus-modern-light';

export const LEGACY_BLOCK_START =
  '/* modus-generated-legacy-fallbacks:start */';
export const LEGACY_BLOCK_END = '/* modus-generated-legacy-fallbacks:end */';
