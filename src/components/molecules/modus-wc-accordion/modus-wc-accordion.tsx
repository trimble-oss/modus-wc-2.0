import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { DaisySize } from '../../types';

export interface IModusWcAccordionItem {
  customClass?: string;
  description?: string;
  expanded?: boolean;
  icon?: string;
  iconAriaLabel?: string;
  title?: string;
}

/**
 * A customizable accordion component used for showing and hiding related groups of content.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-accordion',
  styleUrl: 'modus-wc-accordion.scss',
  shadow: false,
})
export class ModusWcAccordion {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Indicates that the component should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Accordion items, used to render collapse components **/
  @Prop() items: IModusWcAccordionItem[] = [];

  /** Sets the size of the accordion component. */
  @Prop() size?: DaisySize = 'md';

  /** When a collapse expanded state is changed, this event outputs the relevant index and state */
  @StencilEvent() expandedChange!: EventEmitter<{
    expanded: boolean;
    index: number;
  }>;

  componentWillLoad() {
    if (!this.items || this.items.length === 0) {
      console.error('ModusWcAccordion: accordion items data is required.');
    }
  }

  private getClasses(): string {
    const classList = [''];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleCollapseExpandedChange = (
    e: CustomEvent<boolean>,
    index: number
  ) => {
    this.expandedChange.emit({ expanded: e.detail, index });
  };

  render() {
    return (
      <Host>
        <div class={this.getClasses()}>
          {this.items.map((item, index) => (
            <modus-wc-collapse
              bordered={this.bordered}
              collapse-description={item.description}
              collapse-title={item.title}
              custom-class={item.customClass}
              expanded={item.expanded}
              icon={item.icon}
              iconAriaLabel={item.iconAriaLabel}
              onExpandedChange={(e: CustomEvent<boolean>) =>
                this.handleCollapseExpandedChange(e, index)
              }
              size={this.size}
            >
              <slot name={`item-${index}`} />
            </modus-wc-collapse>
          ))}
        </div>
      </Host>
    );
  }
}
