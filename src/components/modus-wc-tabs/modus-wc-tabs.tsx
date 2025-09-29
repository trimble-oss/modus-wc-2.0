import {
  Component,
  Element,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import {
  convertPropsToClasses,
  convertPropsToClassesTab as convertPropsToTabClasses,
} from './modus-wc-tabs.tailwind';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface ITab {
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

  /** The slot name for custom tab content. */
  slotName?: string;
}

/**
 * A customizable tabs component used to create groups of tabs.
 */
@Component({
  tag: 'modus-wc-tabs',
  styleUrl: 'modus-wc-tabs.scss',
  shadow: false,
})
export class ModusWcTabs {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The current active tab */
  @Prop({ mutable: true }) activeTabIndex = 0;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** The size of the tabs. */
  @Prop() size?: ModusSize = 'md';

  /** The tabs to display. */
  @Prop() tabs: ITab[] = [];

  /** Additional styling for the tabs. */
  @Prop() tabStyle?: 'boxed' | 'bordered' | 'lifted' | 'none' = 'bordered';

  /** When a tab is switched to, this event outputs the relevant indices */
  @StencilEvent() tabChange!: EventEmitter<{
    previousTab: number;
    newTab: number;
  }>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Tab Group';
    }

    if (!this.tabs || this.tabs.length === 0) {
      console.error('ModusWcTabs: tab data is required.');
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleClick(tab: ITab, index: number) {
    if (tab.disabled === true) return;

    this.tabChange.emit({ previousTab: this.activeTabIndex, newTab: index });
    this.activeTabIndex = index;
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

  private getTabClasses(tab: ITab, index: number): string {
    const classList: string[] = ['modus-wc-tab'];

    const propClasses = convertPropsToTabClasses({
      active: index === this.activeTabIndex,
      disabled: tab.disabled,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (tab.customClass) classList.push(tab.customClass);

    return classList.join(' ');
  }

  render() {
    const renderTabContent = (tab: ITab) =>
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
        aria-disabled={tab.disabled === true ? 'true' : undefined}
        aria-label={tab.label ?? tab.icon}
        class={this.getTabClasses(tab, index)}
        disabled={tab.disabled === true}
        id={`tab-${index}`}
        onClick={() => this.handleClick(tab, index)}
      >
        {tab.slotName ? (
          <slot name={tab.slotName}></slot>
        ) : (
          renderTabContent(tab)
        )}
      </button>
    ));

    return (
      <Host>
        <div
          role="tablist"
          class={this.getClasses()}
          {...this.inheritedAttributes}
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
