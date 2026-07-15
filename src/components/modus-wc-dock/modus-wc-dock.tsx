import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
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

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The currently active dock item index. */
  @Prop({ mutable: true }) activeItemIndex = 0;

  /** Custom CSS class to apply to the inner nav element. */
  @Prop() customClass?: string = '';

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

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Dock';
    }

    if (!this.items || this.items.length === 0) {
      console.error('ModusWcDock: dock items data is required.');
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
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

  private getButtonSize(): DaisySize {
    if (this.size === 'lg') {
      return 'md';
    }

    return 'sm';
  }

  private getIconSize(): DaisySize {
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

  render() {
    return (
      <Host>
        <nav class={this.getClasses()} {...this.inheritedAttributes}>
          {this.items.map((item, index) => {
            const isActive = index === this.activeItemIndex;

            return (
              <div
                class={this.getItemClasses(item, index)}
                key={`${item.label}-${index}`}
              >
                <modus-wc-button
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={!this.showLabels ? item.label : undefined}
                  color="neutral"
                  customClass="modus-wc-dock-item-button"
                  disabled={item.disabled}
                  fullWidth={true}
                  onClick={() => this.handleItemClick(index, item)}
                  size={this.getButtonSize()}
                  type="button"
                  variant="borderless"
                >
                  <modus-wc-icon
                    decorative={true}
                    name={item.icon}
                    size={this.getIconSize()}
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
