import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable accordion component used for showing and hiding related groups of content.
 *
 * The component supports a `<slot>` called 'content' for injecting `<modus-wc-collapse>` elements. See [Collapse](/docs/components-collapse--docs) docs for additional info.
 */
@Component({
  tag: 'modus-wc-accordion',
  styleUrl: 'modus-wc-accordion.scss',
  shadow: false,
})
export class ModusWcAccordion {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** When a collapse expanded state is changed, this event outputs the relevant index and state */
  @StencilEvent() expandedChange!: EventEmitter<{
    expanded: boolean;
    index: number;
  }>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = [''];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          <slot />
        </div>
      </Host>
    );
  }
}
