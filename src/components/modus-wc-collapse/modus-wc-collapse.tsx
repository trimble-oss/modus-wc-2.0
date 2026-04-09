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
import { handleShadowDOMStyles } from '../base-component';
import {
  convertPropsToClasses,
  convertPropsToDescriptionDivClasses,
  convertPropsToTitleChildDivClasses,
  convertPropsToTitleDivClasses,
} from './modus-wc-collapse.tailwind';
import { DaisySize } from '../types';
import { Attributes, generateRandomId, inheritAriaAttributes } from '../utils';

export interface ICollapseOptions {
  /** The description to render below the collapse header, visible only when the component is expanded. */
  description?: string;
  /** The Modus icon name to render at the end of the header. */
  endIcon?: string;
  /** The end icon's aria-label. */
  endIconAriaLabel?: string;
  /** The Modus icon name to render in the collapse header. */
  icon?: string;
  /** The icon's aria-label. */
  iconAriaLabel?: string;
  /** The Modus icon name to render before the chevron. */
  startIcon?: string;
  /** The start icon's aria-label. */
  startIconAriaLabel?: string;
  /** The size of the collapse header. */
  size?: DaisySize;
  /** The title to render in the collapse header. */
  title: string;
}

/**
 * A customizable collapse component used for showing and hiding content.
 *
 * The component supports a 'header' and 'content' `<slot>` for injecting custom HTML.
 */
@Component({
  tag: 'modus-wc-collapse',
  styleUrl: 'modus-wc-collapse.scss',
  shadow: false,
})
export class ModusWcCollapse {
  private inheritedAttributes: Attributes = {};
  private detailsRef?: HTMLDetailsElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Visual style of the collapse component. */
  @Prop() variant?: 'ghost' | 'border' = 'border';

  /** Controls chevron placement. */
  @Prop() chevronPosition?: 'left' | 'right' = 'right';

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
    if (this.detailsRef && this.detailsRef.open !== newValue) {
      this.detailsRef.open = newValue;
    }
  }

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    if (!this.collapseId) {
      this.collapseId = generateRandomId();
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleToggle = (event: Event) => {
    const detailsElement = event.currentTarget as HTMLDetailsElement;
    const isOpen = detailsElement.open;
    if (this.expanded !== isOpen) {
      this.expanded = isOpen;
      this.expandedChange.emit({ expanded: isOpen });
    }
  };

  private getOuterDivClasses(): string {
    const classList: string[] = ['modus-wc-collapse modus-wc-collapse-arrow'];

    const propClasses = convertPropsToClasses({
      expanded: this.expanded,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    classList.push(`modus-wc-chevron-${this.chevronPosition}`);
    if (!this.options?.startIcon && this.chevronPosition !== 'left') {
      classList.push('no-leading-icons');
    }
    if (this.options?.startIcon && this.chevronPosition === 'left') {
      classList.push('has-start-icon');
    }
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  // istanbul ignore next
  private getTitleClasses(): string {
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
    const classList: string[] = [
      'modus-wc-title-main-row modus-wc-inline-flex modus-wc-items-center',
    ];

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
        <details
          class={this.getOuterDivClasses()}
          open={this.expanded}
          onToggle={this.handleToggle}
          ref={(el) => (this.detailsRef = el as HTMLDetailsElement)}
          {...this.inheritedAttributes}
        >
          <summary class={this.getTitleClasses()} id={titleId}>
            {this.options ? (
              <div class="modus-wc-summary-main-content">
                {this.options.startIcon && (
                  <modus-wc-icon
                    aria-label={this.options.startIconAriaLabel}
                    class="title-start-icon"
                    decorative={true}
                    name={this.options.startIcon}
                    size={this.options.size}
                  ></modus-wc-icon>
                )}
                <div class="modus-wc-title-main-content">
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
                </div>
                {this.options.endIcon && (
                  <div class="modus-wc-title-end-content">
                    <modus-wc-icon
                      aria-label={this.options.endIconAriaLabel}
                      class="title-end-icon"
                      decorative={true}
                      name={this.options.endIcon}
                      size={this.options.size}
                    ></modus-wc-icon>
                  </div>
                )}
              </div>
            ) : (
              <slot name="header" />
            )}
          </summary>
          {this.expanded && this.options?.description && (
            <div
              class={`modus-wc-collapse-description ${this.getDescriptionDivClasses()}`}
            >
              {this.options.description}
            </div>
          )}
          <div
            aria-labelledby={titleId}
            class="modus-wc-collapse-content modus-wc-cursor-default"
            id={contentId}
          >
            <slot name="content" />
          </div>
        </details>
      </Host>
    );
  }
}
