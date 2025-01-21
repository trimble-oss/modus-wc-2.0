import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-alert.tailwind';

/**
 * A customizable alert component used to inform the user about important events.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-alert',
  styleUrl: 'modus-wc-alert.scss',
  shadow: false,
})
export class ModusWcAlert {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The description of the alert. **/
  @Prop() alertDescription?: string;

  /** The title of the alert. **/
  @Prop() alertTitle!: string;

  /** Custom CSS class to apply to the outer div element. */
  @Prop() customClass?: string = '';

  /** The Modus icon to render. **/
  @Prop() icon?: string;

  /** The variant of the alert. */
  @Prop() variant?: 'error' | 'info' | 'success' | 'warning';

  private getClasses(): string {
    const classList = ['modus-wc-alert'];
    const propClasses = convertPropsToClasses({
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getIconName(): string {
    if (this.icon) return this.icon;

    switch (this.variant) {
      case 'error':
        return 'alert';
      case 'info':
        return 'info';
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'info';
      default:
        return 'info';
    }
  }

  render() {
    return (
      <Host>
        <div class={this.getClasses()} role="alert">
          <modus-wc-icon name={this.getIconName()} />
          <div>
            <modus-wc-typography variant="h3" weight="bold">
              {this.alertTitle}
            </modus-wc-typography>
            {this.alertDescription && (
              <modus-wc-typography>{this.alertDescription}</modus-wc-typography>
            )}
          </div>
          <slot name="button" />
        </div>
      </Host>
    );
  }
}
