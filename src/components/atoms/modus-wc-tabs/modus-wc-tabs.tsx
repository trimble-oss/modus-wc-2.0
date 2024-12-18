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

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass: string = '';

  /** Default tab selected by index. */
  @Prop({ mutable: true }) selected = 0;

  /** The size of the tabs. */
  @Prop() size?: DaisySize = 'md';

  /** The tabs to display. */
  @Prop() tabs: IModusWcTab[] = [];

  /** Additional styling for the tabs. */
  @Prop() tabStyle?: 'boxed' | 'bordered' | 'lifted' | 'none' = 'bordered';

  /** Event emitted when the `selected` property changes. */
  @StencilEvent() tabChange!: EventEmitter<string>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcTabs: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Tab Group';
    }
  }

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

  private getClassesTab(tab: IModusWcTab): string {
    const classList: string[] = ['modus-wc-tab'];

    const propClasses = convertPropsToClassesTab({
      active: tab.active,
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
        tab.icon && <modus-wc-icon name={tab.icon} />
      ) : (
        <Fragment>
          {tab.icon && tab.iconPosition === 'left' && (
            <modus-wc-icon name={tab.icon} />
          )}
          <span>{tab.label}</span>
          {tab.icon && tab.iconPosition === 'right' && (
            <modus-wc-icon name={tab.icon} />
          )}
        </Fragment>
      );

    const tabs = this.tabs.map((tab) => (
      <button
        role="tab"
        aria-disabled={tab.disabled}
        aria-label={(tab.label ?? tab.icon) + ' tab'}
        class={this.getClassesTab(tab)}
        id={tab.id}
        onClick={() => this.tabChange.emit(tab.id)}
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
        <div role="tabpanel" tabIndex={0}>
          <slot name="panel" />
        </div>
      </Host>
    );
  }
}

export interface IModusWcTab {
  /** Whether the tab is active. */
  active?: boolean;

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

  /** The unique identifier for the tab. */
  id: string;

  /** The content to display in the tab. */
  label?: string;
}
