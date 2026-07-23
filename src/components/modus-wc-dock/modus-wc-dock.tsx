import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';
import {
  convertItemPropsToClasses,
  convertPropsToClasses,
  DockPosition,
} from './modus-wc-dock.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { DaisySize, ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface IDockItem {
  /** Modus icon name rendered in the dock item. */
  icon: string;

  /** Text label for the dock item. */
  label: string;

  /** If true, the dock item cannot be selected. */
  disabled?: boolean;
}

/**
 * Dock navigation bar for navigating between primary screens.
 */
@Component({
  tag: 'modus-wc-dock',
  styleUrl: 'modus-wc-dock.scss',
  shadow: false,
})
export class ModusWcDock {
  private inheritedAttributes: Attributes = {};

  // Direct references to each rendered `modus-wc-button` host, keyed by item
  // index. `modus-wc-button` only inherits aria-current/aria-label from its
  // host attributes once, in its own componentWillLoad, so changes made after
  // that (e.g. clicking a different dock item) would otherwise never reach
  // the inner <button>. We patch the inner <button> directly instead.
  private buttonEls: (HTMLElement | undefined)[] = [];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The currently active dock item index. */
  @Prop({ mutable: true }) activeItemIndex = 0;

  /** Custom CSS class to apply to the inner nav element. */
  @Prop() customClass = '';

  /** The dock items to display. */
  @Prop() items: IDockItem[] = [];

  /** The edge the dock is anchored to. Controls layout and active indicator orientation. */
  @Prop() position: DockPosition = 'bottom';

  /** If true, text labels are shown below icons. */
  @Prop() showLabels = true;

  /** The size of the dock items. */
  @Prop() size: ModusSize = 'md';

  /** Emitted when a dock item is selected. */
  @Event() itemSelect!: EventEmitter<{ index: number; item: IDockItem }>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

    this.validateItems();
    this.inheritedAttributes = inheritAriaAttributes(this.el);

    if (!this.inheritedAttributes['aria-label']) {
      this.inheritedAttributes['aria-label'] = 'Dock';
    }
  }

  @Watch('items')
  handleItemsChange() {
    this.validateItems();
  }

  componentDidRender() {
    this.syncItemAria();
  }

  private validateItems(): void {
    if (!this.items?.length) {
      console.error('ModusWcDock: dock items data is required.');
    }
  }

  // Directly sets aria-current/aria-label on each item's inner <button>,
  // since modus-wc-button only inherits host attributes once on load.
  private syncItemAria(): void {
    this.items.forEach((item, index) => {
      const innerButton = this.buttonEls[index]?.querySelector('button');
      if (!innerButton) {
        return;
      }

      if (index === this.activeItemIndex) {
        innerButton.setAttribute('aria-current', 'page');
      } else {
        innerButton.removeAttribute('aria-current');
      }

      if (!this.showLabels) {
        innerButton.setAttribute('aria-label', item.label);
      } else {
        innerButton.removeAttribute('aria-label');
      }
    });
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-dock'];

    const propClasses = convertPropsToClasses({
      position: this.position,
      showLabels: this.showLabels,
      size: this.size,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getItemClasses(item: IDockItem, index: number): string {
    return convertItemPropsToClasses({
      active: index === this.activeItemIndex,
      disabled: item.disabled,
    });
  }

  private getChildSize(): DaisySize {
    if (this.size === 'lg') {
      return 'md';
    }

    return 'sm';
  }

  private handleItemClick(index: number, item: IDockItem) {
    if (item.disabled) {
      return;
    }

    this.itemSelect.emit({ index, item });
    this.activeItemIndex = index;
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    const activeElement = this.getRootActiveElement();
    if (!activeElement || !this.el.contains(activeElement)) {
      return;
    }

    const isHorizontal = this.position === 'bottom' || this.position === 'top';
    const previousKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';
    const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';

    if (
      isHorizontal &&
      (event.key === 'ArrowUp' || event.key === 'ArrowDown')
    ) {
      return;
    }

    if (
      !isHorizontal &&
      (event.key === 'ArrowLeft' || event.key === 'ArrowRight')
    ) {
      return;
    }

    if (
      event.key !== previousKey &&
      event.key !== nextKey &&
      event.key !== 'Home' &&
      event.key !== 'End'
    ) {
      return;
    }

    event.preventDefault();

    const focusableIndices = this.getFocusableItemIndices();
    if (focusableIndices.length === 0) {
      return;
    }

    const currentFocusedIndex = this.getFocusedItemIndex();
    let currentFocusablePosition =
      focusableIndices.indexOf(currentFocusedIndex);

    if (currentFocusablePosition === -1) {
      this.focusItemAt(focusableIndices[0]);
      return;
    }

    let nextFocusablePosition: number;
    if (event.key === nextKey) {
      nextFocusablePosition =
        currentFocusablePosition < focusableIndices.length - 1
          ? currentFocusablePosition + 1
          : 0;
    } else if (event.key === previousKey) {
      nextFocusablePosition =
        currentFocusablePosition > 0
          ? currentFocusablePosition - 1
          : focusableIndices.length - 1;
    } else if (event.key === 'Home') {
      nextFocusablePosition = 0;
    } else {
      nextFocusablePosition = focusableIndices.length - 1;
    }

    this.focusItemAt(focusableIndices[nextFocusablePosition]);
  }

  private getFocusableItemIndices(): number[] {
    return this.items.reduce<number[]>((indices, item, index) => {
      if (!item.disabled) {
        indices.push(index);
      }

      return indices;
    }, []);
  }

  private getRootActiveElement(): Element | null {
    const rootNode = this.el.getRootNode();

    if (
      rootNode instanceof ShadowRoot &&
      document.activeElement === rootNode.host
    ) {
      const shadowActiveElement = rootNode.activeElement;
      if (shadowActiveElement) {
        return shadowActiveElement;
      }
    }

    return document.activeElement;
  }

  private getFocusedItemIndex(): number {
    const activeElement = this.getRootActiveElement();

    for (let index = 0; index < this.items.length; index++) {
      const innerButton = this.buttonEls[index]?.querySelector('button');
      if (innerButton === activeElement) {
        return index;
      }
    }

    return -1;
  }

  private focusItemAt(index: number): void {
    const innerButton = this.buttonEls[index]?.querySelector('button');
    innerButton?.focus();
  }

  render() {
    return (
      <Host>
        <nav class={this.getClasses()} {...this.inheritedAttributes}>
          {this.items.map((item, index) => {
            return (
              <div
                class={this.getItemClasses(item, index)}
                key={`${item.label}-${index}`}
              >
                <modus-wc-button
                  ref={(el) => {
                    this.buttonEls[index] = el;
                  }}
                  color="neutral"
                  customClass="modus-wc-dock-item-button"
                  disabled={item.disabled}
                  fullWidth={true}
                  onButtonClick={() => this.handleItemClick(index, item)}
                  size={this.getChildSize()}
                  type="button"
                  variant="borderless"
                >
                  <modus-wc-icon
                    decorative={true}
                    name={item.icon}
                    size={this.getChildSize()}
                  />
                  {this.showLabels && (
                    <span class="modus-wc-dock-item-label">{item.label}</span>
                  )}
                </modus-wc-button>
              </div>
            );
          })}
        </nav>
      </Host>
    );
  }
}
