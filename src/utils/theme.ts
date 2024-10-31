/* istanbul ignore file - this may not make it to production */

export type ModusWCMode = 'default' | 'dark' | 'high-contrast';

export const getCurrentModusWCMode = (): ModusWCMode => {
  if (document.documentElement.classList.contains('modus-wc-dark-mode')) {
    return 'dark';
  } else if (
    document.documentElement.classList.contains('modus-wc-high-contrast-mode')
  ) {
    return 'high-contrast';
  }
  return 'default';
};

export const initializeModusWCMode = (): void => {
  if (window.matchMedia('(prefers-contrast: more)').matches) {
    setModusWCMode('high-contrast');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setModusWCMode('dark');
  } else {
    setModusWCMode('default');
  }
};

export const setModusWCMode = (mode: ModusWCMode): void => {
  // Remove all existing mode classes
  document.documentElement.classList.remove(
    'modus-wc-dark-mode',
    'modus-wc-high-contrast-mode'
  );

  // Add the new mode class if it's not the default
  if (mode !== 'default') {
    document.documentElement.classList.add(`modus-wc-${mode}-mode`);
  }
};
