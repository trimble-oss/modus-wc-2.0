import {
  Component,
  Element,
  Event as StencilEvent,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-collapse.tailwind';

/**
 * A customizable collapse component used for showing and hiding content.
 *
 * Can render any HTML content through a <slot> element.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-collapse',
  styleUrl: 'modus-wc-collapse.scss',
  shadow: false,
})
export class ModusWcCollapse {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /**
   * Indicates that the component should have a border.
   */
  @Prop() bordered?: boolean = true;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass?: string = '';

  /**
   * Controls whether the collapse is expanded or not.
   */
  @Prop({ mutable: true }) expanded?: boolean = false;

  /**
   * The icon name, should match the CSS class in the icon font.
   */
  @Prop() icon?: string = '';

  /**
   * Sets the aria-label attribute of the icon component.
   */
  @Prop() iconAriaLabel?: string = '';

  /**
   * The title of the collapse component, rendered on button.
   */
  @Prop() title?: string = '';

  /**
   * Event emitted when the expanded prop is internally changed.
   */
  @StencilEvent() expandedChange!: EventEmitter<boolean>;

  @Watch('expanded')
  expandedChanged(newValue: boolean) {
    const checkbox = this.el.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = newValue;
  }

  private handleClick = () => {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  };

  private handleContentClick = (event: Event) => {
    event.stopPropagation();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleClick();
    }
  };

  private getClasses(): string {
    const classList: string[] = ['modus-wc-collapse modus-wc-collapse-arrow'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      expanded: this.expanded,
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
          aria-expanded={this.expanded}
          class={this.getClasses()}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          role="button"
          tabindex="0"
        >
          <input type="checkbox" />
          <div class="modus-wc-collapse-title modus-wc-inline-flex modus-wc-items-center modus-wc-text-xl modus-wc-font-medium">
            {this.icon && (
              <modus-wc-icon
                aria-label={this.iconAriaLabel}
                name={this.icon}
              ></modus-wc-icon>
            )}
            {this.title}
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            class="modus-wc-collapse-content modus-wc-cursor-default"
            onClick={this.handleContentClick}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
