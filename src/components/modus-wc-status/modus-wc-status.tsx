import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-status.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

const VARIANT_LABELS: Record<'active' | 'warning' | 'danger', string> = {
  active: 'Active',
  warning: 'Warning',
  danger: 'Danger',
};

/**
 * A status indicator with a pulsing dot and semantic label for conveying system state.
 */
@Component({
  tag: 'modus-wc-status',
  styleUrl: 'modus-wc-status.scss',
  shadow: false,
})
export class ModusWcStatus {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the status container. */
  @Prop() customClass?: string = '';

  /** The visible status label. Defaults to the variant name when omitted. */
  @Prop() label?: string = '';

  /** Whether the dot displays a pulsing halo animation. */
  @Prop() pulse?: boolean = true;

  /** The semantic status variant. */
  @Prop() variant: 'active' | 'warning' | 'danger' = 'active';

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getDisplayLabel(): string {
    if (this.label) {
      return this.label;
    }

    return VARIANT_LABELS[this.variant];
  }

  private getClasses(): string {
    const classList = ['modus-wc-status'];
    const propClasses = convertPropsToClasses({
      pulse: this.pulse,
      variant: this.variant,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div
          class={this.getClasses()}
          role="status"
          {...this.inheritedAttributes}
        >
          <div class="modus-wc-status-dot-wrapper" role="presentation">
            <div class="modus-wc-status-dot"></div>
            {this.pulse && <div class="modus-wc-status-pulse"></div>}
          </div>
          <span class="modus-wc-status-label">{this.getDisplayLabel()}</span>
        </div>
      </Host>
    );
  }
}
