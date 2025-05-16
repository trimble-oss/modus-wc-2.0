import {
  Component,
  Element,
  EventEmitter,
  Fragment,
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
import { DaisySize } from '../types';
import {
  Attributes,
  generateRandomId,
  inheritAriaAttributes,
  KEY,
} from '../utils';

export interface ICollapseOptions {
  /** The description to render in the collapse header. */
  description?: string;
  /** The Modus icon name to render in the collapse header. */
  icon?: string;
  /** The icon's aria-label. */
  iconAriaLabel?: string;
  /** The size of the collapse header. */
  size?: DaisySize;
  /** The title to render in the collapse header. */
  title: string;
}

/**
 * A customizable collapse component used for showing and hiding content.
 *
 * The component supports a 'header' and 'content' `<slot>` for injecting custom HTML.
 * Do not set
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-collapse',
  styleUrl: 'modus-wc-collapse.scss',
  shadow: false,
})
export class ModusWcCollapse {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Indicates that the component should have a border. */
  @Prop() bordered?: boolean = false;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  /** Controls whether the collapse is expanded or not. */
  @Prop({ mutable: true }) expanded?: boolean = false;

  /** A unique identifier used to set the id attributes of various elements.  */
  @Prop({ mutable: true }) collapseId?: string;

  /**
   * Configuration options for rendering the pre-laid out collapse component.
   * Do not set this prop if you intend to use the 'header' slot.
   */
  @Prop() options?: ICollapseOptions;

  /** Event emitted when the expanded prop is internally changed. */
  @StencilEvent() expandedChange!: EventEmitter<{ expanded: boolean }>;

  @Watch('expanded')
  expandedChanged(newValue: boolean) {
    const checkbox = this.el.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = newValue;
  }

  componentWillLoad() {
    if (!this.collapseId) {
      this.collapseId = generateRandomId();
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleClick = () => {
    this.expanded = !this.expanded;
    this.expandedChange.emit({ expanded: this.expanded });
  };

  private handleContentClick = (event: Event) => {
    event.stopPropagation();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === KEY.Enter || event.key === KEY.Space) {
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

  // istanbul ignore next
  private getTitleDivClasses(): string {
    const classList: string[] = [
      'modus-wc-collapse-title modus-wc-inline-flex modus-wc-items-center modus-wc-justify-between modus-wc-min-h-4',
    ];

    const paddingClass = convertPropsToTitleDivClasses({
      size: this.options?.size,
    });

    if (paddingClass) classList.push(paddingClass);

    return classList.join(' ');
  }

  // istanbul ignore next
  private getTitleChildDivClasses(): string {
    const classList: string[] = ['modus-wc-inline-flex modus-wc-items-center'];

    const titleFontSize = convertPropsToTitleChildDivClasses({
      size: this.options?.size,
    });

    if (titleFontSize) classList.push(titleFontSize);

    return classList.join(' ');
  }

  // istanbul ignore next
  private getDescriptionDivClasses(): string {
    const classList: string[] = ['description modus-wc-font-light'];

    const descriptionFontSize = convertPropsToDescriptionDivClasses({
      size: this.options?.size,
    });

    if (descriptionFontSize) classList.push(descriptionFontSize);

    return classList.join(' ');
  }

  render() {
    const baseId = this.collapseId;
    const titleId = `${baseId}-title`;
    const contentId = `${baseId}-content`;

    return (
      <Host>
        <div class={this.getOuterDivClasses()} {...this.inheritedAttributes}>
          <input
            aria-controls={contentId}
            aria-expanded={this.expanded}
            aria-labelledby={titleId}
            class="modus-wc-min-h-4 modus-wc-cursor-pointer"
            id={`${baseId}-checkbox`}
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            type="checkbox"
          />
          <div class={this.getTitleDivClasses()} id={titleId}>
            {this.options ? (
              <Fragment>
                <div class={this.getTitleChildDivClasses()}>
                  {this.options.icon && (
                    <modus-wc-icon
                      aria-label={this.options.iconAriaLabel}
                      decorative={true}
                      name={this.options.icon}
                      size={this.options.size}
                    ></modus-wc-icon>
                  )}
                  {this.options.title}
                </div>
                {this.options.description && (
                  <div class={this.getDescriptionDivClasses()}>
                    {this.options.description}
                  </div>
                )}
              </Fragment>
            ) : (
              <slot name="header" />
            )}
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            aria-labelledby={titleId}
            class="modus-wc-collapse-content modus-wc-cursor-default"
            id={contentId}
            onClick={this.handleContentClick}
          >
            <slot name="content" />
          </div>
        </div>
      </Host>
    );
  }
}
