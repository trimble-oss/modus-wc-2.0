import {
  Component,
  Element,
  EventEmitter,
  Fragment,
  h,
  Host,
  Listen,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import {
  convertPropsToClasses,
  convertPropsToClassesTab as convertPropsToTabClasses,
} from './modus-wc-tabs.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize } from '../types';
import { Attributes, generateRandomId, inheritAriaAttributes } from '../utils';

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
 *
 * The component supports a `<slot>` for injecting custom tab content.
 */
@Component({
  tag: 'modus-wc-tabs',
  styleUrl: 'modus-wc-tabs.scss',
  shadow: false,
})
export class ModusWcTabs {
  private inheritedAttributes: Attributes = {};
  private readonly instanceId = generateRandomId();

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
    handleShadowDOMStyles(this.el);
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Tab Group';
    }

    if (!this.tabs || this.tabs.length === 0) {
      console.error('ModusWcTabs: tab data is required.');
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleClick(tab: ITab, index: number) {
    if (tab.disabled) return;

    this.tabChange.emit({ previousTab: this.activeTabIndex, newTab: index });
    this.activeTabIndex = index;
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement | null;
    const tab = target?.closest('[role="tab"]');
    if (!tab || tab.parentElement !== this.getTabList()) {
      return;
    }

    const key = event.key;
    if (
      key !== 'ArrowRight' &&
      key !== 'ArrowLeft' &&
      key !== 'Home' &&
      key !== 'End'
    ) {
      return;
    }

    const focusableIndices = this.getFocusableTabIndices();
    if (focusableIndices.length === 0) {
      return;
    }

    event.preventDefault();

    const currentIndex = this.getFocusedTabIndex();
    let nextIndex: number;

    if (key === 'Home') {
      nextIndex = focusableIndices[0];
    } else if (key === 'End') {
      nextIndex = focusableIndices[focusableIndices.length - 1];
    } else {
      const currentPosition = focusableIndices.indexOf(currentIndex);
      const start = currentPosition === -1 ? 0 : currentPosition;
      const moveToNext = (key === 'ArrowRight') !== this.isRtl();

      if (moveToNext) {
        nextIndex = focusableIndices[(start + 1) % focusableIndices.length];
      } else {
        nextIndex =
          focusableIndices[
            (start - 1 + focusableIndices.length) % focusableIndices.length
          ];
      }
    }

    this.activateTabAt(nextIndex);
  }

  private getFocusableTabIndices(): number[] {
    return this.tabs.reduce<number[]>((indices, tab, index) => {
      if (!tab.disabled) {
        indices.push(index);
      }

      return indices;
    }, []);
  }

  private getTabList(): HTMLElement | null {
    return this.el.querySelector('[role="tablist"]');
  }

  private getTabButtons(): HTMLButtonElement[] {
    const tabList = this.getTabList();
    if (!tabList) {
      return [];
    }

    return Array.from(tabList.children).filter(
      (child) => child.getAttribute('role') === 'tab'
    ) as HTMLButtonElement[];
  }

  private isRtl(): boolean {
    return (
      this.el.dir === 'rtl' || getComputedStyle(this.el).direction === 'rtl'
    );
  }

  private getTabId(index: number): string {
    return `modus-wc-tab-${this.instanceId}-${index}`;
  }

  private getTabPanelId(index: number): string {
    return `modus-wc-tabpanel-${this.instanceId}-${index}`;
  }

  private getFocusedTabIndex(): number {
    const activeElement = document.activeElement as HTMLElement | null;
    if (!activeElement || !this.el.contains(activeElement)) {
      return this.activeTabIndex;
    }

    const focusedTab = activeElement.closest('[role="tab"]');
    if (!focusedTab) {
      return this.activeTabIndex;
    }

    const index = this.getTabButtons().findIndex(
      (button) => button === focusedTab
    );
    return index === -1 ? this.activeTabIndex : index;
  }

  private activateTabAt(index: number) {
    const tab = this.tabs[index];
    if (!tab || tab.disabled) {
      return;
    }

    if (index !== this.activeTabIndex) {
      this.handleClick(tab, index);
    }

    this.getTabButtons()[index]?.focus();
  }

  private getRovingTabIndex(tab: ITab, index: number): number {
    if (tab.disabled) {
      return -1;
    }

    const activeTab = this.tabs[this.activeTabIndex];
    const selectedIndex =
      activeTab && !activeTab.disabled
        ? this.activeTabIndex
        : this.tabs.findIndex((focusableTab) => !focusableTab.disabled);

    return index === selectedIndex ? 0 : -1;
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
        aria-controls={this.getTabPanelId(index)}
        aria-disabled={tab.disabled ? 'true' : undefined}
        aria-label={tab.label ?? tab.icon}
        aria-selected={index === this.activeTabIndex ? 'true' : 'false'}
        class={this.getTabClasses(tab, index)}
        disabled={tab.disabled}
        id={this.getTabId(index)}
        onClick={() => this.handleClick(tab, index)}
        tabIndex={this.getRovingTabIndex(tab, index)}
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
        <div class="modus-wc-tab-panel">
          {this.tabs.map((_, index) => (
            <div
              aria-labelledby={this.getTabId(index)}
              class={
                this.activeTabIndex === index
                  ? 'modus-wc-tab-active'
                  : undefined
              }
              hidden={this.activeTabIndex !== index}
              id={this.getTabPanelId(index)}
              role="tabpanel"
              tabIndex={this.activeTabIndex === index ? 0 : -1}
            >
              <slot name={`tab-${index}`} />
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
