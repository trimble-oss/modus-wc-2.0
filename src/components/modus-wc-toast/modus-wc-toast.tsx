import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-toast.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

export type ToastPosition =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'middle-start'
  | 'middle-center'
  | 'middle-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

/**
 * A customizable toast component used to stack elements, positioned on the corner of a page.
 *
 * The component supports a `<slot>` for injecting additional custom content inside the toast.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-toast',
  styleUrl: 'modus-wc-toast.scss',
  shadow: false,
})
export class ModusWcToast {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Additional classes for custom styling. */
  @Prop() customClass?: string = '';

  /** Time taken to dismiss the toast in milliseconds */
  @Prop() delay?: number;

  /** The position of the toast in the parent container. */
  @Prop() position?: ToastPosition = 'top-end';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses = (): string => {
    const classList = ['modus-wc-toast'];
    const propClasses = convertPropsToClasses({
      position: this.position,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  };

  private timerId!: ReturnType<typeof setTimeout>;

  @Watch('delay')
  delayChanged(newDelay: number): void {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      this.dismissElement();
    }, newDelay);
  }

  dismissElement() {
    this.el.remove();
  }

  componentDidLoad(): void {
    if (this.delay && this.delay > 0) {
      this.timerId = setTimeout(() => {
        this.dismissElement();
      }, this.delay);
    }
  }

  disconnectedCallback(): void {
    clearTimeout(this.timerId);
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
