import { Component, h, Prop } from '@stencil/core';
import {
  themeStore,
  initializeThemeStore,
  watchSystemTheme,
} from './theme.store';
import { IThemeConfig } from './theme.types';

@Component({
  tag: 'modus-wc-theme-provider',
  shadow: false,
})
export class ThemeProvider {
  @Prop() initialTheme?: Partial<IThemeConfig>;

  private cleanup: (() => void) | undefined;
  private modeUnsubscribe: (() => void) | undefined;
  private themeUnsubscribe: (() => void) | undefined;

  componentWillLoad() {
    initializeThemeStore(this.initialTheme);
    this.cleanup = watchSystemTheme();

    // Subscribe to specific property changes
    this.modeUnsubscribe = themeStore.onChange('mode', () => {
      this.updateThemeClasses();
    });

    this.themeUnsubscribe = themeStore.onChange('theme', () => {
      this.updateThemeClasses();
    });

    this.updateThemeClasses();
  }

  disconnectedCallback() {
    this.cleanup?.();
    this.modeUnsubscribe?.();
    this.themeUnsubscribe?.();
  }

  updateThemeClasses() {
    const root = document.documentElement;
    const { mode, theme } = themeStore.state;

    // Update theme and mode attributes
    root.setAttribute('data-theme', `${theme}-${mode}`);
    root.setAttribute('data-mode', mode);

    // Remove old mode classes
    root.classList.remove('light', 'dark');
    root.classList.add(mode);

    // Store preferences
    localStorage.setItem('modus-theme-config', JSON.stringify({ mode, theme }));
  }

  render() {
    return <slot />;
  }
}
