import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-toast.tailwind';

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
  /** Additional classes for custom styling. */
  @Prop() customClass?: string = '';

  /** The position of the toast in the parent container. */
  @Prop() position?: ToastPosition = 'top-end';

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

  render() {
    return (
      <Host>
        <div class={this.getClasses()}>
          <slot />
        </div>
      </Host>
    );
  }
}
