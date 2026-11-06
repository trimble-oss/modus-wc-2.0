import { createPopper, Instance as PopperInstance } from '@popperjs/core';
import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-time-input.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { INPUT_SIZE_TO_LABEL_SIZE } from '../constants';
import { DaisySize, IInputFeedbackProp, ModusSize } from '../types';
import {
  Attributes,
  createEffectiveIdResolver,
  generateRandomId,
  inheritAriaAttributes,
} from '../utils';
import { createPopperOptions } from './utils/popper-utils';
import {
  IWheelState,
  resolveWheelState,
  valueFromWheelState,
} from './utils/time-options';
import {
  IWheelSelectionPartial,
  TimePickerDropdown,
} from './utils/time-picker-dropdown';
import {
  bindCircularWheelListeners,
  ICircularScrollLock,
  scrollWheelsToSelection,
  unbindCircularWheelListeners,
} from './utils/time-wheel-scroll';

/**
 * A customizable input component used to create time inputs.
 */
@Component({
  tag: 'modus-wc-time-input',
  styleUrl: 'modus-wc-time-input.scss',
  shadow: false,
})
export class ModusWcTimeInput {
  private inheritedAttributes: Attributes = {};
  private readonly resolveEffectiveId = createEffectiveIdResolver();
  private timeInputRef?: HTMLInputElement;
  private dropdownRef?: HTMLElement;
  private popperInstance?: PopperInstance;
  private wheelScrollCleanups: Array<() => void> = [];
  private pendingScrollToSelection = false;
  private readonly circularScrollLock: ICircularScrollLock = { current: false };
  private readonly dropdownIdSuffix = generateRandomId(8);

  @State() private showDropdown = false;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Hint for form autofill feature. */
  @Prop() autoComplete?: 'on' | 'off';

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /** The options to display in the time input dropdown. Options must be in `HH:mm` or `HH:mm:ss` format. */
  @Prop() datalistOptions: string[] = [];

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** Feedback to render below the input. */
  @Prop() feedback?: IInputFeedbackProp;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /**
   * ID of a `<datalist>` element that contains pre-defined time options.
   * The value must be the ID of a `<datalist>` element in the same document.
   */
  @Prop({ mutable: true }) datalistId?: string;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Maximum value. Format: `HH:mm`, `HH:mm:ss`. */
  @Prop() max?: string;

  /** Minimum value. Format: `HH:mm`, `HH:mm:ss.`*/
  @Prop() min?: string;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /**
   * Displays the time input format as `HH:mm:ss` if `true`.
   * Internally sets the `step` to 1 second.
   * If a `step` value is provided, it will override this attribute.
   */
  @Prop() showSeconds?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /**
   * Specifies the granularity that the `value` must adhere to.
   * Value of step given in seconds. Default value is 60 seconds.
   * Overrides the `seconds` attribute if both are provided.
   */
  @Prop() step?: number;

  /**
   * The value of the time input.
   * Always in 24-hour format that includes leading zeros:
   * `HH:mm` or `HH:mm:ss`, regardless of input format which is likely
   * to be selected based on user's locale (or by the user agent).
   * If time includes seconds the format is always `HH:mm:ss`.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<Event>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    // if no datalistId value provided, use internal datalist id to enable time options
    if (!this.datalistId) {
      this.datalistId = this.internalDatalistId;
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = [
      'modus-wc-time-input',
      'modus-wc-input',
      'modus-wc-w-full',
      'modus-wc-flex',
      'modus-wc-items-center',
      'modus-wc-gap-1',
    ];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      disabled: this.disabled,
      feedback: this.feedback,
      readOnly: this.readOnly,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleBlur = (event: FocusEvent) => {
    this.inputBlur.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.inputFocus.emit(event);
  };

  private handleInput = (event: Event) => {
    this.inputChange.emit(event);
  };

  /**
   * The clock control lives inside the label that wraps the time input.
   * A custom element is not interactive content, so the label would still
   * activate the input and open the browser picker. Swallow the pointer
   * event before that activation, then open the custom wheel panel.
   */
  private handleTimePickerPointerDown = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled || this.readOnly) {
      return;
    }
    this.showDropdown = !this.showDropdown;
    this.pendingScrollToSelection = this.showDropdown;
  };

  private handleTimePickerClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
  };

  /**
   * A click on the time text opens the native picker in Firefox. Cancelling the
   * click leaves keyboard editing of the segments intact.
   */
  private handleInputClick = (event: MouseEvent) => {
    event.preventDefault();
  };

  /** Alt+Arrow and F4 open the native picker; keep those on the custom panel. */
  private handleInputKeyDown = (event: KeyboardEvent) => {
    const opensNativePicker =
      event.key === 'F4' ||
      (event.altKey && (event.key === 'ArrowDown' || event.key === 'ArrowUp'));
    if (!opensNativePicker) {
      return;
    }
    event.preventDefault();
    if (!this.showDropdown && !this.disabled && !this.readOnly) {
      this.showDropdown = true;
      this.pendingScrollToSelection = true;
    }
  };

  private setDropdownRef = (el: HTMLElement | undefined) => {
    this.dropdownRef = el;
  };

  private applyWheelSelection = (partial: IWheelSelectionPartial) => {
    if (this.disabled || this.readOnly) {
      return;
    }
    const showSeconds = this.shouldShowSeconds();
    const current: IWheelState = resolveWheelState(
      this.value,
      showSeconds,
      '24hrs'
    );
    const next24h = valueFromWheelState(
      { ...current, ...partial },
      showSeconds,
      '24hrs'
    );
    if (!this.timeInputRef || next24h === this.value) {
      return;
    }
    this.value = next24h;
    this.timeInputRef.value = next24h;
    this.timeInputRef.dispatchEvent(new Event('input', { bubbles: true }));
  };

  private closeDropdown() {
    this.showDropdown = false;
  }

  componentDidRender() {
    this.syncFieldBackground();
  }

  /** Cover the Firefox clock with the same fill the input is actually painting. */
  private syncFieldBackground() {
    if (!this.timeInputRef) {
      return;
    }
    const background = getComputedStyle(this.timeInputRef).backgroundColor;
    if (background) {
      this.el.style.setProperty('--modus-wc-time-input-field-bg', background);
    }
  }

  componentDidUpdate() {
    if (this.showDropdown && this.timeInputRef && this.dropdownRef) {
      if (!this.popperInstance) {
        this.popperInstance = createPopper(
          this.timeInputRef,
          this.dropdownRef,
          createPopperOptions('bottom-start', 4)
        );
      } else {
        void this.popperInstance.update();
      }
      requestAnimationFrame(() => {
        if (!this.showDropdown || !this.dropdownRef) {
          return;
        }
        if (this.pendingScrollToSelection) {
          scrollWheelsToSelection(this.dropdownRef);
          this.pendingScrollToSelection = false;
        }
        if (this.wheelScrollCleanups.length === 0) {
          this.wheelScrollCleanups = bindCircularWheelListeners(
            this.dropdownRef,
            this.circularScrollLock
          );
        }
      });
    } else if (this.popperInstance || this.wheelScrollCleanups.length) {
      unbindCircularWheelListeners(this.wheelScrollCleanups);
      this.wheelScrollCleanups = [];
      this.popperInstance?.destroy();
      this.popperInstance = undefined;
    }
  }

  disconnectedCallback() {
    unbindCircularWheelListeners(this.wheelScrollCleanups);
    this.popperInstance?.destroy();
  }

  @Listen('keydown')
  handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showDropdown) {
      event.preventDefault();
      this.closeDropdown();
    }
  }

  @Listen('click', { target: 'document' })
  handleDocumentClick(event: MouseEvent) {
    if (!this.showDropdown) {
      return;
    }
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closeDropdown();
    }
  }

  private getLabelSize(): ModusSize {
    return INPUT_SIZE_TO_LABEL_SIZE[this.size ?? 'md'];
  }

  /** Maps input `size` to button and icon scale for the time-picker control. */
  private getTimePickerToggleSize(): DaisySize {
    switch (this.size) {
      case 'sm':
        return 'xs';
      case 'lg':
        return 'md';
      default:
        return 'sm';
    }
  }

  private shouldShowTimePickerButton(): boolean {
    return !this.disabled && !this.readOnly;
  }

  /** Minute ticks when `step` is a whole number of minutes that divides an hour. */
  private getMinuteStep(): number {
    if (this.step == null || this.step < 60) {
      return 1;
    }
    const minutes = this.step / 60;
    if (Number.isInteger(minutes) && minutes > 0 && 60 % minutes === 0) {
      return minutes;
    }
    return 1;
  }

  private shouldShowSeconds(): boolean {
    return Boolean(this.showSeconds || (this.step != null && this.step < 60));
  }

  /*
   * The ID of the internal <datalist> element. Unique to each instance of the time input component.
   * This is used as the `datalistId` id when `datalistOptions` are provided.
   */
  private readonly internalDatalistId = `modus-wc-datalist-${generateRandomId(10)}`;

  /*
   * Conditionally renders the datalist element with the time options.
   * If no time options are provided or the datalistId prop is not the default,
   * the datalist element will not be rendered (returns `null`).
   */
  private renderDatalist(): HTMLElement | null {
    if (
      this.datalistOptions.length === 0 ||
      this.datalistId !== this.internalDatalistId
    ) {
      return null;
    }

    return (
      <datalist id={this.internalDatalistId}>
        {this.datalistOptions.map((time) => (
          <option value={time} />
        ))}
      </datalist>
    );
  }

  render() {
    const effectiveId = this.resolveEffectiveId(this.inputId);

    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={effectiveId}
            labelText={this.label}
            required={this.required}
            size={this.getLabelSize()}
          />
        )}
        <label class={this.getClasses()}>
          <input
            aria-required={this.required}
            autocomplete={this.autoComplete}
            class="modus-wc-grow"
            disabled={this.disabled}
            id={effectiveId}
            list={this.datalistId}
            max={this.max}
            min={this.min}
            name={this.name}
            onBlur={this.handleBlur}
            onClick={this.handleInputClick}
            onFocus={this.handleFocus}
            onInput={this.handleInput}
            onKeyDown={this.handleInputKeyDown}
            readonly={this.readOnly}
            ref={(el) => (this.timeInputRef = el as HTMLInputElement)}
            required={this.required}
            step={this.step || this.showSeconds ? 1 : 60}
            tabIndex={this.inputTabIndex}
            type="time"
            value={this.value}
            {...this.inheritedAttributes}
          />
          {this.shouldShowTimePickerButton() && (
            <div class="modus-wc-time-input-picker-container">
              <modus-wc-button
                aria-expanded={this.showDropdown ? 'true' : 'false'}
                aria-haspopup="dialog"
                aria-label="Open time picker"
                class="modus-wc-time-input-picker-toggle"
                color="secondary"
                shape="square"
                size={this.getTimePickerToggleSize()}
                variant="borderless"
                onButtonClick={this.handleTimePickerClick}
                onMouseDown={this.handleTimePickerPointerDown}
              >
                <modus-wc-icon
                  decorative
                  name="clock"
                  size={this.getTimePickerToggleSize()}
                />
              </modus-wc-button>
            </div>
          )}
        </label>
        {this.showDropdown && this.shouldShowTimePickerButton() && (
          <TimePickerDropdown
            dropdownId={`time-dropdown-${this.dropdownIdSuffix}`}
            effectiveShowSeconds={this.shouldShowSeconds()}
            max={this.max}
            min={this.min}
            minuteStep={this.getMinuteStep()}
            onWheelCommit={() => this.closeDropdown()}
            onWheelSelect={this.applyWheelSelection}
            resolvedFormat="24hrs"
            secondStep={1}
            setDropdownRef={this.setDropdownRef}
            value={this.value}
          />
        )}
        {this.renderDatalist()}
        {this.feedback && (
          <modus-wc-input-feedback
            level={this.feedback.level}
            message={this.feedback.message}
            size={this.getLabelSize()}
          />
        )}
      </Host>
    );
  }
}
