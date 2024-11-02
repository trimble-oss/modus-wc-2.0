import { createStore } from '@stencil/store';
import { IThemeConfig, ThemeMode, ThemeName } from './theme.types';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { state, onChange, reset, dispose } = createStore<IThemeConfig>({
  mode: 'light' as ThemeMode,
  theme: 'modus-classic' as ThemeName,
});

export const themeStore = {
  state,
  onChange,
  setTheme: (theme: ThemeName) => (state.theme = theme),
  setMode: (mode: ThemeMode) => (state.mode = mode),
  reset,
  dispose,
};

// Initialize theme store with system preferences and stored values
export const initializeThemeStore = () => {
  const stored = localStorage.getItem('modus-theme-config');
  if (stored) {
    const config = JSON.parse(stored) as IThemeConfig;
    state.mode = config.mode;
    state.theme = config.theme;
  } else {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    state.mode = prefersDark ? 'dark' : 'light';
  }
};

// Watch for system theme changes
export const watchSystemTheme = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('preferred-mode')) {
      state.mode = e.matches ? 'dark' : 'light';
    }
  };

  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
};
