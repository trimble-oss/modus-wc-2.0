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
import { IInputFeedbackProp, ModusSize } from '../types';
import {
  Attributes,
  createEffectiveIdResolver,
  generateRandomId,
  inheritAriaAttributes,
} from '../utils';

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
  private popperInstance: PopperInstance | null = null;
  private inputRef?: HTMLInputElement;
  private dropdownRef?: HTMLElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Controls visibility of the custom picker dropdown */
  @State() private showDropdown = false;

  /** Enables free-text entry after "Other" is selected in datalist picker */
  @State() private allowFreeInput = false;

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

  /**
   * The type of custom picker to render. When undefined (default), the native browser time picker is used.
   * - `'picker'`: Renders a popper panel with side-by-side scrollable columns for hours, minutes, seconds, and AM/PM.
   * - `'datalist'`: Renders a popper panel with a flat list sourced from `datalistOptions`.
   */
  @Prop() pickerType?: 'picker' | 'datalist';

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
   * Display time in 12-hour (AM/PM) format in the picker columns.
   * Only applies when `pickerType` is `'picker'`.
   */
  @Prop({ attribute: 'use12-hour' }) use12Hour?: boolean = false;

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

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Time input';
    }

    // if no datalistId value provided, use internal datalist id to enable time options
    if (!this.datalistId) {
      this.datalistId = this.internalDatalistId;
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidUpdate() {
    if (this.showDropdown && this.inputRef && this.dropdownRef) {
      this.setupPopper();
    } else if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  disconnectedCallback() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  private setupPopper = () => {
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }

    this.popperInstance = createPopper(this.inputRef!, this.dropdownRef!, {
      placement: 'bottom-start',
      strategy: 'fixed',
      modifiers: [
        {
          name: 'offset',
          options: { offset: [0, 4] },
        },
        {
          name: 'flip',
          options: { fallbackPlacements: ['top-start'] },
        },
      ],
    });
  };

  @Listen('click', { target: 'document' })
  handleClickOutside(event: MouseEvent) {
    const path = event.composedPath();
    const insideComponent = path.includes(this.el);
    if (!insideComponent && this.showDropdown) {
      this.showDropdown = false;
    }
  }

  @Listen('keydown', { target: 'document' })
  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showDropdown) {
      this.showDropdown = false;
      event.preventDefault();
    }
  }

  private getClasses(): string {
    const classList = [
      'modus-wc-time-input',
      'modus-wc-input',
      'modus-wc-w-full',
    ];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
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

  private handleInputClick = () => {
    if (this.disabled || this.readOnly || this.allowFreeInput) return;
    this.showDropdown = !this.showDropdown;
  };

  private handleFreeInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.inputChange.emit(event);
  };

  private handleFreeInputBlur = (event: FocusEvent) => {
    this.allowFreeInput = false;
    this.inputBlur.emit(event);
  };

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

  private parseTimeValue(): {
    hours: number;
    minutes: number;
    seconds: number;
  } {
    const parts = (this.value || '00:00').split(':').map(Number);
    return {
      hours: parts[0] ?? 0,
      minutes: parts[1] ?? 0,
      seconds: parts[2] ?? 0,
    };
  }

  /** Returns the formatted display string for the readonly text input when pickerType is 'picker'. */
  private formatPickerDisplayValue(): string {
    if (!this.value) return '';
    const { hours, minutes, seconds } = this.parseTimeValue();
    if (this.use12Hour) {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const h12 = hours % 12 || 12;
      const base = `${h12}:${String(minutes).padStart(2, '0')}`;
      return this.showSeconds
        ? `${base}:${String(seconds).padStart(2, '0')} ${ampm}`
        : `${base} ${ampm}`;
    }
    const base = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    return this.showSeconds
      ? `${base}:${String(seconds).padStart(2, '0')}`
      : base;
  }

  private getCustomInputDisplayValue(): string {
    if (this.pickerType === 'picker') {
      return this.formatPickerDisplayValue();
    }
    // For datalist picker, the value is the selected option string
    return this.value;
  }

  private updatePickerValue(hours: number, minutes: number, seconds: number) {
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    this.value = this.showSeconds ? `${h}:${m}:${s}` : `${h}:${m}`;
    this.inputChange.emit(new Event('input'));
  }

  private handlePickerHour = (hour: number) => {
    const { hours, minutes, seconds } = this.parseTimeValue();
    let newHour = hour;
    if (this.use12Hour) {
      const isCurrentPM = hours >= 12;
      if (isCurrentPM) {
        newHour = hour === 12 ? 12 : hour + 12;
      } else {
        newHour = hour === 12 ? 0 : hour;
      }
    }
    this.updatePickerValue(newHour, minutes, seconds);
  };

  private handlePickerMinute = (minute: number) => {
    const { hours, seconds } = this.parseTimeValue();
    this.updatePickerValue(hours, minute, seconds);
  };

  private handlePickerSecond = (second: number) => {
    const { hours, minutes } = this.parseTimeValue();
    this.updatePickerValue(hours, minutes, second);
  };

  private handlePickerAmPm = (ampm: 'AM' | 'PM') => {
    const { hours, minutes, seconds } = this.parseTimeValue();
    const isCurrentPM = hours >= 12;
    let newHour = hours;
    if (ampm === 'AM' && isCurrentPM) newHour = hours - 12;
    else if (ampm === 'PM' && !isCurrentPM) newHour = hours + 12;
    this.updatePickerValue(newHour, minutes, seconds);
  };

  private handleDatalistSelect = (option: string) => {
    this.value = option;
    this.showDropdown = false;
    this.inputChange.emit(new Event('input'));
  };

  private handleOtherClick = () => {
    this.showDropdown = false;
    this.allowFreeInput = true;
    // Defer focus so the state update completes before focusing
    setTimeout(() => this.inputRef?.focus(), 0);
  };

  private renderPickerColumn(
    items: Array<{
      label: string;
      value: number | string;
      isSelected: boolean;
    }>,
    onSelect: (val: number | string) => void
  ) {
    return (
      <div class="time-picker-column">
        {items.map((item) => (
          <button
            type="button"
            class={{
              'time-picker-item': true,
              'time-picker-item--selected': item.isSelected,
            }}
            onClick={() => onSelect(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  private renderPickerPanel() {
    const { hours, minutes, seconds } = this.parseTimeValue();

    let hourItems: Array<{ label: string; value: number; isSelected: boolean }>;
    if (this.use12Hour) {
      const display12h = hours % 12 || 12;
      hourItems = Array.from({ length: 12 }, (_, i) => {
        const h = i + 1;
        return {
          label: String(h).padStart(2, '0'),
          value: h,
          isSelected: h === display12h,
        };
      });
    } else {
      hourItems = Array.from({ length: 24 }, (_, i) => ({
        label: String(i).padStart(2, '0'),
        value: i,
        isSelected: i === hours,
      }));
    }

    const minuteItems = Array.from({ length: 60 }, (_, i) => ({
      label: String(i).padStart(2, '0'),
      value: i,
      isSelected: i === minutes,
    }));

    const secondItems = Array.from({ length: 60 }, (_, i) => ({
      label: String(i).padStart(2, '0'),
      value: i,
      isSelected: i === seconds,
    }));

    const ampmItems: Array<{
      label: string;
      value: string;
      isSelected: boolean;
    }> = [
      { label: 'AM', value: 'AM', isSelected: hours < 12 },
      { label: 'PM', value: 'PM', isSelected: hours >= 12 },
    ];

    return (
      <div class="time-picker-panel">
        {this.renderPickerColumn(hourItems, this.handlePickerHour)}
        {this.renderPickerColumn(minuteItems, this.handlePickerMinute)}
        {this.showSeconds &&
          this.renderPickerColumn(secondItems, this.handlePickerSecond)}
        {this.use12Hour &&
          this.renderPickerColumn(ampmItems, (v) =>
            this.handlePickerAmPm(v as 'AM' | 'PM')
          )}
      </div>
    );
  }

  private renderDatalistPanel() {
    return (
      <div class="time-datalist-panel">
        {this.datalistOptions.map((option) => (
          <button
            type="button"
            class={{
              'time-picker-item': true,
              'time-picker-item--selected': option === this.value,
            }}
            onClick={() => this.handleDatalistSelect(option)}
          >
            {option}
          </button>
        ))}
        <button
          type="button"
          class="time-picker-item time-picker-item--other"
          onClick={this.handleOtherClick}
        >
          Other
        </button>
      </div>
    );
  }

  render() {
    const effectiveId = this.resolveEffectiveId(this.inputId);
    const useCustomPicker = this.pickerType !== undefined;

    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={effectiveId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}

        {useCustomPicker ? (
          <input
            ref={(el) => (this.inputRef = el)}
            aria-required={this.required}
            class={this.getClasses()}
            disabled={this.disabled}
            id={effectiveId}
            name={this.name}
            onBlur={
              this.allowFreeInput ? this.handleFreeInputBlur : this.handleBlur
            }
            onFocus={this.handleFocus}
            onInput={
              this.allowFreeInput ? this.handleFreeInputChange : undefined
            }
            onClick={this.handleInputClick}
            readonly={!this.allowFreeInput}
            required={this.required}
            tabIndex={this.inputTabIndex}
            type="text"
            value={this.getCustomInputDisplayValue()}
            {...this.inheritedAttributes}
          />
        ) : (
          <input
            aria-required={this.required}
            autocomplete={this.autoComplete}
            class={this.getClasses()}
            disabled={this.disabled}
            id={effectiveId}
            list={this.datalistId}
            max={this.max}
            min={this.min}
            name={this.name}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onInput={this.handleInput}
            readonly={this.readOnly}
            required={this.required}
            step={this.step || this.showSeconds ? 1 : 60}
            tabIndex={this.inputTabIndex}
            type="time"
            value={this.value}
            {...this.inheritedAttributes}
          />
        )}

        {!useCustomPicker && this.renderDatalist()}

        {useCustomPicker && this.showDropdown && (
          <div
            ref={(el) => (this.dropdownRef = el)}
            class="time-picker-dropdown"
          >
            {this.pickerType === 'picker'
              ? this.renderPickerPanel()
              : this.renderDatalistPanel()}
          </div>
        )}

        {this.feedback && (
          <modus-wc-input-feedback
            level={this.feedback.level}
            message={this.feedback.message}
            size={this.size}
          />
        )}
      </Host>
    );
  }
}
