import { createStore } from '@stencil/store';
import { IThemeConfig, ThemeMode, ThemeName } from './theme.types';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { state, onChange, reset, dispose } = createStore<IThemeConfig>({
  mode: 'light' as ThemeMode,
  theme: 'modus-modern' as ThemeName,
});

export const themeStore = {
  state,
  onChange,
  setTheme: (theme: ThemeName) => (state.theme = theme),
  setMode: (mode: ThemeMode) => (state.mode = mode),
  reset,
  dispose,
};

const getStoredMode = (): ThemeMode | null => {
  try {
    const stored = localStorage.getItem('modus-theme-config');
    return stored ? (JSON.parse(stored) as IThemeConfig).mode : null;
  } catch (error) {
    console.warn('Failed to parse theme config from localStorage:', error);
    return null;
  }
};

const getSystemPreferredMode = (): ThemeMode => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

// Initialize theme store with system preferences and stored values
export const initializeThemeStore = (initialConfig?: Partial<IThemeConfig>) => {
  // Set theme with default fallback
  state.theme = initialConfig?.theme ?? 'modus-modern';

  // Mode resolution with priority: explicit config > stored preference > system preference
  state.mode =
    initialConfig?.mode ?? getStoredMode() ?? getSystemPreferredMode();
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
