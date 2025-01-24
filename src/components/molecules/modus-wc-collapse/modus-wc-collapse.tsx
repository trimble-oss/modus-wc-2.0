import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import {
  convertPropsToClasses,
  convertPropsToDescriptionDivClasses,
  convertPropsToTitleChildDivClasses,
  convertPropsToTitleDivClasses,
} from './modus-wc-collapse.tailwind';
import { DaisySize } from '../../types';

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

  /** Indicates that the component should have a border. */
  @Prop() bordered?: boolean = true;

  /** The description of the collapse component. */
  @Prop() collapseDescription?: string = '';

  /** The title of the collapse component. */
  @Prop() collapseTitle?: string = '';

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Controls whether the collapse is expanded or not. */
  @Prop({ mutable: true }) expanded?: boolean = false;

  /** The icon name, should match the CSS class in the icon font. */
  @Prop() icon?: string = '';

  /** Sets the aria-label attribute of the icon component. */
  @Prop() iconAriaLabel?: string = '';

  /** Sets the size of the collapse component. */
  @Prop() size?: DaisySize = 'md';

  /** Event emitted when the expanded prop is internally changed. */
  @StencilEvent() expandedChange!: EventEmitter<{ expanded: boolean }>;

  @Watch('expanded')
  expandedChanged(newValue: boolean) {
    const checkbox = this.el.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = newValue;
  }

  // Create deterministic ID based on props
  private getBaseId(): string {
    // Sanitize title to create a valid ID
    return this.collapseTitle
      ? this.collapseTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')
      : 'collapse';
  }

  private handleClick = () => {
    this.expanded = !this.expanded;
    this.expandedChange.emit({ expanded: this.expanded });
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

  private getOuterDivClasses(): string {
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

  private getTitleDivClasses(): string {
    const classList: string[] = [
      'modus-wc-collapse-title modus-wc-inline-flex modus-wc-items-center modus-wc-justify-between modus-wc-min-h-4',
    ];

    const paddingClass = convertPropsToTitleDivClasses({
      size: this.size,
    });

    if (paddingClass) classList.push(paddingClass);

    return classList.join(' ');
  }

  private getTitleChildDivClasses(): string {
    const classList: string[] = [
      'modus-wc-inline-flex modus-wc-items-center modus-wc-font-medium',
    ];

    const titleFontSize = convertPropsToTitleChildDivClasses({
      size: this.size,
    });

    if (titleFontSize) classList.push(titleFontSize);

    return classList.join(' ');
  }

  private getDescriptionDivClasses(): string {
    const classList: string[] = ['modus-wc-font-light'];

    const descriptionFontSize = convertPropsToDescriptionDivClasses({
      size: this.size,
    });

    if (descriptionFontSize) classList.push(descriptionFontSize);

    return classList.join(' ');
  }

  render() {
    const baseId = this.getBaseId();
    const titleId = `${baseId}-title`;
    const contentId = `${baseId}-content`;

    return (
      <Host>
        <div class={this.getOuterDivClasses()}>
          <input
            aria-controls={contentId}
            aria-expanded={this.expanded}
            aria-labelledby={titleId}
            class="modus-wc-min-h-4"
            id={`${baseId}-checkbox`}
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            type="checkbox"
          />
          <div class={this.getTitleDivClasses()} id={titleId}>
            <div class={this.getTitleChildDivClasses()}>
              {this.icon && (
                <modus-wc-icon
                  decorative={true}
                  name={this.icon}
                  size={this.size}
                ></modus-wc-icon>
              )}
              {this.collapseTitle}
            </div>
            {this.collapseDescription && (
              <div class={this.getDescriptionDivClasses()}>
                {this.collapseDescription}
              </div>
            )}
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            aria-labelledby={titleId}
            class="modus-wc-collapse-content modus-wc-cursor-default"
            id={contentId}
            onClick={this.handleContentClick}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
