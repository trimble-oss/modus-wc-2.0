import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-alert.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

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
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The description of the alert. **/
  @Prop() alertDescription?: string;

  /** The title of the alert. **/
  @Prop() alertTitle!: string;

  /** Custom CSS class to apply to the outer div element. */
  @Prop() customClass?: string = '';

  /** Time taken to dismiss the toast in milliseconds */
  @Prop() delay?: number = 15000;

  /** Whether the alert has a dismiss button */
  @Prop() dismissible?: boolean = false;

  /** The Modus icon to render. **/
  @Prop() icon?: string;

  /** The variant of the alert. */
  @Prop() variant?: 'error' | 'info' | 'success' | 'warning';

  /** Role taken by the alert. Defaults to 'status' */
  @Prop() role: 'alert' | 'log' | 'marquee' | 'status' | 'timer' = 'status';

  /** An event that fires when the alert is dismissed */
  @Event() dismissClick!: EventEmitter;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

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

  private timerId!: ReturnType<typeof setTimeout>;

  @Watch('delay')
  delayChanged(newDelay: number): void {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      this.dismissElement();
    }, newDelay);
  }

  dismissElement() {
    this.dismissClick.emit();
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

  @Listen('keyup')
  elementKeyupHandler(event: KeyboardEvent): void {
    switch (event.code) {
      case 'Escape':
        if (!this.dismissible) {
          return;
        }

        this.dismissElement();
        break;
    }
  }

  render() {
    return (
      <Host>
        <div
          class={this.getClasses()}
          role="alert"
          {...this.inheritedAttributes}
        >
          <modus-wc-icon name={this.getIconName()} />
          <div>
            <modus-wc-typography variant="h3" weight="bold">
              {this.alertTitle}
            </modus-wc-typography>
            {this.alertDescription && (
              <modus-wc-typography>{this.alertDescription}</modus-wc-typography>
            )}
            {!this.alertTitle && !this.alertDescription && (
              <slot name="content" />
            )}
          </div>
          <slot name="button" />
          {this.dismissible && (
            <modus-wc-button
              aria-label="notification button"
              color="secondary"
              size="sm"
              slot="button"
              variant="borderless"
              onClick={() => this.dismissElement()}
            >
              <modus-wc-icon aria-label="notify icon" name="close" decorative />
            </modus-wc-button>
          )}
        </div>
      </Host>
    );
  }
}
