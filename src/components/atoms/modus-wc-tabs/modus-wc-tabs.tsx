import {
  Component,
  h,
  Host,
  Prop,
  Element,
  Event as StencilEvent,
  EventEmitter,
  State,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-tabs.tailwind';
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

  /** Additional styling for the tabs. */
  @Prop() tabStyle?: 'boxed' | 'bordered' | 'lifted';

  /** Event emitted when the `selected` property changes. */
  @StencilEvent() tabChange!: EventEmitter<number>;

  @State() disabledTabs: string[] = [];

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcTabs: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Tabs';
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

  render() {
    return (
      <Host>
        <div
          role="tablist"
          aria-label={this.el.ariaLabel}
          class={this.getClasses()}
        >
          <slot />
        </div>
        <div role="tabpanel" tabIndex={0}>
          <slot name="panel" />
        </div>
      </Host>
    );
  }
}
