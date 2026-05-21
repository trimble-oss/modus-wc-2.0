import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-stepper.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Orientation } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface IStepperItem {
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

  /** The index (0-based) of the active step in the `steps` array. */
  @Prop() activeStep?: number;

  /** The steps to display. */
  @Prop() steps: IStepperItem[] = [];

  /** If true, steps will be rendered as buttons and emit `stepClick` when activated. */
  @Prop() interactive?: boolean = false;

  /** Emitted with the 0-based step index when a step is activated and `interactive` is true. */
  @Event() stepClick!: EventEmitter<number>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-steps'];

    const propClasses = convertPropsToClasses({
      interactive: this.interactive,
      orientation: this.orientation,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private isStepActive(index: number): boolean {
    return (
      typeof this.activeStep === 'number' &&
      Number.isFinite(this.activeStep) &&
      this.activeStep === index
    );
  }

  private getClassesForStep(step: IStepperItem, index: number): string {
    const classList = ['modus-wc-step'];

    if (this.isStepActive(index)) {
      classList.push('modus-wc-step-active');
    }

    // The order CSS classes are added matters to CSS specificity
    if (step.color) classList.push(`modus-wc-step-${step.color}`);
    if (step.customClass) classList.push(step.customClass);

    return classList.join(' ');
  }

  private handleStepActivate(index: number): void {
    if (!this.interactive) {
      return;
    }
    this.stepClick.emit(index);
  }

  render() {
    const isInteractive = !!this.interactive;

    return (
      <Host>
        <ul class={this.getClasses()} {...this.inheritedAttributes}>
          {this.steps.map((step, index) => {
            const stepContent = step.label ?? step.content ?? '';

            return (
              <li
                class={this.getClassesForStep(step, index)}
                key={index}
                data-content={step.content}
                aria-current={this.isStepActive(index) ? 'step' : undefined}
              >
                {isInteractive ? (
                  <Fragment>
                    <button
                      type="button"
                      class="modus-wc-stepper-step-button"
                      onClick={() => this.handleStepActivate(index)}
                    ></button>
                    <span class="modus-wc-stepper-step-label">
                      {stepContent}
                    </span>
                  </Fragment>
                ) : (
                  stepContent
                )}
              </li>
            );
          })}
        </ul>
      </Host>
    );
  }
}
