import { Component, Element, Fragment, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-progress.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import {
  Attributes,
  createEffectiveIdResolver,
  inheritAriaAttributes,
} from '../utils';

/**
 * A customizable progress component used to show the progress of a task or show the passing of time.
 *
 * The radial variant supports slotting in custom HTML to be displayed within the progress circle.
 */
@Component({
  tag: 'modus-wc-progress',
  styleUrl: 'modus-wc-progress.scss',
  shadow: false,
})
export class ModusWcProgress {
  private inheritedAttributes: Attributes = {};
  private readonly resolveEffectiveId = createEffectiveIdResolver();

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the progress element. */
  @Prop() customClass?: string = '';

  /** The indeterminate state of the progress component. */
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  /** A text label to render within the progress bar */
  @Prop() label?: string;

  /** The progress component's maximum value. */
  @Prop() max?: number = 100;

  /** The value of the progress component. */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

  /** The variant of the progress component. */
  @Prop() variant?: 'default' | 'radial' = 'default';

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = [];

    const propClasses = convertPropsToClasses({
      variant: this.variant,
      indeterminate: this.indeterminate,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getPercentageValue(): number {
    const safeValue = Math.min(Math.max(0, this.value), this.max!);
    return (safeValue / this.max!) * 100;
  }

  private hasAuthorAccessibleName(): boolean {
    return (
      Boolean(this.inheritedAttributes['aria-label']) ||
      Boolean(this.inheritedAttributes['aria-labelledby'])
    );
  }

  render() {
    const labelId = this.label ? this.resolveEffectiveId(undefined) : undefined;
    const hasAccessibleName =
      this.hasAuthorAccessibleName() || Boolean(this.label);

    const progressAriaAttributes = this.indeterminate
      ? hasAccessibleName
        ? { 'aria-busy': 'true' }
        : { 'aria-hidden': 'true' }
      : {
          'aria-valuenow': this.value,
          'aria-valuemin': 0,
          'aria-valuemax': this.max,
        };

    const valueAttributes = this.indeterminate
      ? {}
      : { max: this.max, value: this.value };

    const labelAssociation =
      this.label && !this.hasAuthorAccessibleName() && labelId
        ? { 'aria-labelledby': labelId }
        : {};

    return (
      <Host class="modus-wc-progress-container">
        {this.variant === 'default' ? (
          <Fragment>
            <progress
              class={this.getClasses()}
              {...valueAttributes}
              {...progressAriaAttributes}
              {...labelAssociation}
              {...this.inheritedAttributes}
            />
            {this.label && (
              <modus-wc-input-label labelId={labelId} labelText={this.label} />
            )}
          </Fragment>
        ) : (
          <div
            class={this.getClasses()}
            style={{ '--value': `${this.getPercentageValue()}` }}
            role="progressbar"
            {...progressAriaAttributes}
            {...labelAssociation}
            {...this.inheritedAttributes}
          >
            <span class="modus-wc-radial-progress-label" id={labelId}>
              {this.label}
            </span>
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
