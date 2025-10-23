import {
  Component,
  Element,
  Event,
  EventEmitter,
  FunctionalComponent,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-alert.tailwind';
import { AlertSolidIcon } from '../../icons/alert-solid.icon';
import { CheckCircleSolidIcon } from '../../icons/check-circle-solid.icon';
import { CloseSolidIcon } from '../../icons/close-solid.icon';
import { InfoSolidIcon } from '../../icons/info-solid.icon';
import { WarningSolidIcon } from '../../icons/warning-solid.icon';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable alert component used to inform the user about important events
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

  /** The description of the alert. */
  @Prop() alertDescription?: string;

  /** The title of the alert. */
  @Prop() alertTitle!: string;

  /** Custom CSS class to apply to the outer div element. */
  @Prop() customClass?: string = '';

  /** Time taken to dismiss the alert in milliseconds */
  @Prop() delay?: number;

  /** Whether the alert has a dismiss button */
  @Prop() dismissible?: boolean = false;

  /** The Modus icon to render. */
  @Prop() icon?: string;

  /** The variant of the alert. */
  @Prop() variant?: 'error' | 'info' | 'success' | 'warning' = 'info';

  /** An event that fires when the alert is dismissed */
  @Event() dismissClick!: EventEmitter;

  componentWillLoad() {
    // Set default role if none provided
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'status');
    }

    // Then inherit all ARIA attributes normally
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

  private getLeadingIcon(): FunctionalComponent {
    if (this.icon) {
      return (
        <modus-wc-icon custom-class="modus-wc-alert-icon" name={this.icon} />
      );
    }

    switch (this.variant) {
      case 'error':
        return <AlertSolidIcon className="modus-wc-alert-icon" />;
      case 'success':
        return <CheckCircleSolidIcon className="modus-wc-alert-icon" />;
      case 'warning':
        return <WarningSolidIcon className="modus-wc-alert-icon" />;
      case 'info':
      default:
        return <InfoSolidIcon className="modus-wc-alert-icon" />;
    }
  }

  // Handle delay
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
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          {this.getLeadingIcon()}
          <div>
            <div class="title">{this.alertTitle}</div>
            {this.alertDescription && (
              <div class="description">{this.alertDescription}</div>
            )}
            {!this.alertTitle && !this.alertDescription && (
              <slot name="content" />
            )}
          </div>
          <slot name="button" />
          {this.dismissible && (
            <modus-wc-button
              aria-label="notification button"
              color="tertiary"
              size="sm"
              slot="button"
              variant="borderless"
              onButtonClick={() => this.dismissElement()}
            >
              <CloseSolidIcon className="modus-wc-alert-close-icon" />
            </modus-wc-button>
          )}
        </div>
      </Host>
    );
  }
}
