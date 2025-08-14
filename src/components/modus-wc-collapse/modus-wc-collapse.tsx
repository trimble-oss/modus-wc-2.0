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
import { Attributes, generateRandomId, inheritAriaAttributes } from '../utils';

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
    if (this.detailsRef && this.detailsRef.open !== newValue) {
      this.detailsRef.open = !!newValue;
    }
  }

  componentWillLoad() {
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
        <details
          class={this.getOuterDivClasses()}
          open={this.expanded}
          onToggle={this.handleToggle}
          ref={(el) => (this.detailsRef = el as HTMLDetailsElement)}
          {...this.inheritedAttributes}
        >
          <summary class={this.getTitleDivClasses()} id={titleId}>
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
          </summary>
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
