import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-stepper.tailwind';
import { Orientation } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface IModusWcStepperItem {
  /** The color theme of the step */
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'neutral';
  /** Custom content to display in the step indicator */
  content?: string;
  /** Custom CSS class to apply to the step */
  customClass?: string;
  /** Text label for the step */
  label?: string;
}

/**
 * Used to show a list of steps in a process.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-stepper',
  styleUrl: 'modus-wc-stepper.scss',
  shadow: false,
})
export class ModusWcStepper {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the steps element. */
  @Prop() customClass?: string = '';

  /** The orientation of the steps. */
  @Prop() orientation?: Orientation;

  /** The steps to display. */
  @Prop() steps: IModusWcStepperItem[] = [];

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-steps'];

    const propClasses = convertPropsToClasses({
      orientation: this.orientation,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getClassesForStep(step: IModusWcStepperItem): string {
    const classList = ['modus-wc-step'];

    // The order CSS classes are added matters to CSS specificity
    if (step.color) classList.push(`modus-wc-step-${step.color}`);
    if (step.customClass) classList.push(step.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          {this.steps.map((step, index) => {
            return (
              <li
                class={this.getClassesForStep(step)}
                key={index}
                data-content={step.content}
              >
                {step.label}
              </li>
            );
          })}
        </div>
      </Host>
    );
  }
}
