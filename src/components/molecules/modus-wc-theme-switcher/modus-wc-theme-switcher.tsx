// TODO - add coverage once finalized
/* istanbul ignore file */

import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { themeStore } from '../../../providers/theme/theme.store';
import { IThemeConfig } from '../../../providers/theme/theme.types';

/**
 * A theme switcher component used to toggle the application theme and/or mode.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-theme-switcher',
  styleUrl: 'modus-wc-theme-switcher.scss',
  shadow: false,
})
export class ModusWcThemeSwitcher {
  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the theme switcher element.
   */
  @Prop() customClass: string = '';

  /**
   * An event that fires when the theme is changed.
   */
  @Event() themeChange!: EventEmitter<IThemeConfig>;

  private modeUnsubscribe: (() => void) | undefined;
  @State() isDarkMode = themeStore.state.mode === 'dark';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcThemeSwitcher: ariaLabel is required for accessibility.'
      );
    }
  }

  connectedCallback() {
    this.modeUnsubscribe = themeStore.onChange('mode', (mode) => {
      this.isDarkMode = mode === 'dark';
    });
  }

  disconnectedCallback() {
    this.modeUnsubscribe?.();
  }

  private getClasses(): string {
    const classList = [
      'modus-wc-inline-grid modus-wc-cursor-pointer modus-wc-justify-center modus-wc-place-items-center',
    ];

    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleModeToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const newMode = checkbox.checked ? 'dark' : 'light';
    themeStore.setMode(newMode);

    this.themeChange.emit(themeStore.state);
  }

  render() {
    return (
      <label class={this.getClasses()} aria-label={this.ariaLabel}>
        <input
          type="checkbox"
          value="default"
          checked={this.isDarkMode}
          class="modus-wc-toggle modus-wc-theme-controller modus-wc-bg-base-content modus-wc-col-span-2 modus-wc-col-start-1 modus-wc-row-start-1"
          onChange={(event) => this.handleModeToggle(event)}
        />
        <svg
          class="modus-wc-stroke-base-100 modus-wc-fill-base-100 modus-wc-col-start-1 modus-wc-row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          class="modus-wc-stroke-base-100 modus-wc-fill-base-100 modus-wc-col-start-2 modus-wc-row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    );
  }
}
