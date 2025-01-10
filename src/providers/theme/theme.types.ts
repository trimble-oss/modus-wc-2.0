/* istanbul ignore file - this may not make it to production */

export type ThemeMode = 'light' | 'dark';
export type ThemeName = 'modus-classic' | 'modus-modern';

export interface IThemeConfig {
  mode: ThemeMode;
  theme: ThemeName;
}
