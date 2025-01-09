import {
  Component,
  h,
  Host,
  Prop,
  Element,
  Event as StencilEvent,
  EventEmitter,
  Fragment,
} from '@stencil/core';
import {
  convertPropsToClasses,
  convertPropsToClassesTab,
} from './modus-wc-tabs.tailwind';
import { DaisySize } from '../../types';

/**
 * A customizable tabs component used to create groups of tabs.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-tabs',
  styleUrl: 'modus-wc-tabs.scss',
  shadow: false,
})
export class ModusWcTabs {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The current active tab */
  @Prop({ mutable: true }) activeTabIndex? = 0;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** The size of the tabs. */
  @Prop() size?: DaisySize = 'md';

  /// add nbsp to input label required * so it does't break ona newline

  /** The tabs to display. */
  @Prop() tabs: IModusWcTab[] = [];

  /** Additional styling for the tabs. */
  @Prop() tabStyle?: 'boxed' | 'bordered' | 'lifted' | 'none' = 'bordered';

  /** When a tab is switched to, this event outputs the relevant indices */
  @StencilEvent() tabChange!: EventEmitter<{
    previousTab: number;
    newTab: number;
  }>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcTabs: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Tab Group';
    }
  }

  /* Interactive Functionality */

  private handleClick(tab: IModusWcTab, index: number) {
    if (tab.disabled) return;
    this.activeTabIndex = index;
    this.tabChange.emit({ previousTab: this.activeTabIndex, newTab: index });
  }

  /* CSS Functionality */

  private getClasses(): string {
    const classList: string[] = ['modus-wc-tabs'];

    const propClasses = convertPropsToClasses({
      tabStyle: this.tabStyle,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getClassesTab(tab: IModusWcTab, index: number): string {
    const classList: string[] = ['modus-wc-tab'];

    const propClasses = convertPropsToClassesTab({
      active: index === this.activeTabIndex,
      disabled: tab.disabled,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (tab.customClass) classList.push(tab.customClass);

    return classList.join(' ');
  }

  render() {
    const renderTabContent = (tab: IModusWcTab) =>
      tab.label === undefined ? (
        tab.icon && <modus-wc-icon name={tab.icon} size={this.size} />
      ) : (
        <Fragment>
          {tab.icon && tab.iconPosition === 'left' && (
            <modus-wc-icon name={tab.icon} size={this.size} />
          )}
          <span>{tab.label}</span>
          {tab.icon && tab.iconPosition === 'right' && (
            <modus-wc-icon name={tab.icon} size={this.size} />
          )}
        </Fragment>
      );

    const tabs = this.tabs.map((tab, index) => (
      <button
        role="tab"
        aria-disabled={tab.disabled}
        aria-label={(tab.label ?? tab.icon) + ' tab'}
        class={this.getClassesTab(tab, index)}
        id={`tab-${index}`}
        onClick={() => this.handleClick(tab, index)}
      >
        {renderTabContent(tab)}
      </button>
    ));

    return (
      <Host>
        <div
          role="tablist"
          aria-label={this.el.ariaLabel}
          class={this.getClasses()}
        >
          {tabs}
        </div>
        <div class="modus-wc-tab-panel" role="tabpanel" tabIndex={0}>
          {this.tabs.map((_, index) => (
            <div
              class={
                this.activeTabIndex === index
                  ? 'modus-wc-tab-active'
                  : undefined
              }
              hidden={this.activeTabIndex !== index}
            >
              <slot name={`tab-${index}`} />
            </div>
          ))}
        </div>
      </Host>
    );
  }
}

export interface IModusWcTab {
  /** An optional aria-label to apply to the tab button */
  ariaLabel?: string;

  /** Custom CSS class to apply to the inner button. */
  customClass?: string;

  /** Whether the tab is disabled. */
  disabled?: boolean;

  /** A Modus Icon to display in the tab. */
  icon?: string;

  /** The position of the icon. */
  iconPosition?: 'left' | 'right';

  /** The content to display in the tab. */
  label?: string;
}
