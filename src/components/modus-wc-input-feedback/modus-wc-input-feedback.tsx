import { Component, Element, h, Host, Prop } from '@stencil/core';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import { convertPropsToClasses } from './modus-wc-input-feedback.tailwind';
import { CheckCircleOutlineIcon } from '../../icons/check-circle-outline.icon';
import { InfoOutlineIcon } from '../../icons/info-outline.icon';
import { WarningOutlineIcon } from '../../icons/warning-outline.icon';

export type IInputFeedbackLevel = 'error' | 'info' | 'success' | 'warning';

/**
 * A customizable feedback component used to provide additional context related to form input interactions.
 *
 * <b>To use a custom icon, this component requires Modus icons to be installed in the host application. See [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs) for steps.</b>
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-input-feedback',
  styleUrl: 'modus-wc-input-feedback.scss',
  shadow: false,
})
export class ModusWcInputFeedback {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the outer div element. */
  @Prop() customClass?: string = '';

  /** The Modus icon to use instead of the pre-defined icons. */
  @Prop() icon?: string = '';

  /** The level informs which icon and color that will be rendered. */
  @Prop() level!: IInputFeedbackLevel;

  /** The message. */
  @Prop() message?: string = '';

  /** The size of the feedback component. */
  @Prop() size?: ModusSize = 'md';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus:input-feedback'];
    const propClasses = convertPropsToClasses({
      level: this.level,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getPresetIcon() {
    switch (this.level) {
      case 'error':
        return <WarningOutlineIcon className="modus:input-feedback-icon" />;
      case 'info':
        return <InfoOutlineIcon className="modus:input-feedback-icon" />;
      case 'success':
        return <CheckCircleOutlineIcon className="modus:input-feedback-icon" />;
      case 'warning':
        return <WarningOutlineIcon className="modus:input-feedback-icon" />;
    }
  }

  render() {
    return (
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          {this.icon ? (
            <modus-wc-icon decorative name={this.icon} />
          ) : (
            this.getPresetIcon()
          )}
          <span>{this.message}</span>
        </div>
      </Host>
    );
  }
}
