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
  Watch,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { IInputFeedbackProp, ModusSize } from '../types';
import {
  Attributes,
  createEffectiveIdResolver,
  inheritAriaAttributes,
} from '../utils';
import { convertPropsToClasses } from './modus-wc-time-input.tailwind';
import { createPopperOptions } from './utils/popper-utils';
import {
  clampTime,
  format24h,
  is12HourFormat,
  parse24h,
  TimeHourFormat,
} from './utils/time-format';
import {
  buildCircularWheelOptions,
  buildDatalistOptions,
  getHourOptions,
  getPeriodOptions,
  getUnitOptions,
  resolveWheelState,
  TIME_WHEEL_LOOP_COPIES,
  valueFromWheelState,
} from './utils/time-options';

/**
 * A customizable time input with a native time field plus a Modus dropdown
 * (scrollable picker wheels or a datalist of interval options).
 *
 * `value` is always stored and emitted in 24-hour format (`HH:mm` or `HH:mm:ss`).
 * The field uses the browser’s native `<input type="time">` (built-in clock icon
 * and sizing). `hourFormat` controls the Modus picker (12h wheels + AM/PM vs 24h)
 * and sets `lang` to bias the native field toward 12h (`en-US`) or 24h (`en-GB`)
 * where the browser supports it.
 *
 * Adheres to WCAG 2.2 standards.
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
  private hasFocus = false;
  private suppressBlurCommit = false;
  private circularScrollLock = false;
  private wheelScrollCleanups: Array<() => void> = [];
  /** Scroll selected rows into view only when the dropdown first opens */
  private pendingScrollToSelection = false;
  private wheelScrollPositions = new Map<string, number>();

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Whether the picker / datalist dropdown is open */
  @State() private showDropdown = false;

  /** Internal invalid flag set when the native value cannot be parsed */
  @State() private isInvalid = false;

  /** Hint for form autofill feature. */
  @Prop() autoComplete?: 'on' | 'off';

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /**
   * Pre-defined time options for the suggestion list.
   * Values must be in `HH:mm` or `HH:mm:ss` (24-hour) format.
   * When provided (non-empty), the clock menu shows this list instead of picker wheels.
   * When empty, options can still be generated from `interval-minutes` if that attribute is set.
   */
  @Prop({ mutable: true }) datalistOptions: string[] = [];

  /**
   * @deprecated Native HTML datalist is no longer used. Prefer `datalistOptions`.
   * Kept for backward compatibility; when set, the suggestion list is shown.
   */
  @Prop({ mutable: true }) datalistId?: string;

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** Feedback to render below the input. */
  @Prop() feedback?: IInputFeedbackProp;

  /**
   * Hour clock for the Modus picker wheels / datalist labels.
   * - `24h` (default): hours wheel 00–23
   * - `12h`: hours wheel 01–12 with AM/PM
   *
   * Also sets `lang` on the native field (`en-GB` / `en-US`) to bias browser
   * 24h vs 12h presentation where supported. `value` / `inputChange` stay 24h.
   */
  @Prop() hourFormat?: TimeHourFormat = '24h';

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation. */
  @Prop() inputTabIndex?: number;

  /**
   * Interval in minutes used to generate suggestion-list options when
   * `datalistOptions` is empty. Set the `interval-minutes` attribute to opt into
   * the list (instead of picker wheels). Default: 15.
   */
  @Prop() intervalMinutes?: number = 15;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Maximum value. Format: `HH:mm`, `HH:mm:ss`. */
  @Prop() max?: string;

  /** Minimum value. Format: `HH:mm`, `HH:mm:ss`. */
  @Prop() min?: string;

  /** Name of the form control. */
  @Prop() name?: string;

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /**
   * Displays seconds in the field and picker.
   * Internally treats step as 1 second when no explicit `step` is set.
   */
  @Prop() showSeconds?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /**
   * Granularity in seconds. When set, minute/second wheels and generated
   * datalist options respect this step. Overrides the default implied by
   * `showSeconds` for option generation.
   */
  @Prop() step?: number;

  /**
   * The value of the time input in 24-hour format with leading zeros:
   * `HH:mm` or `HH:mm:ss`.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. `detail` is an InputEvent; read `detail.target.value` (24h). */
  @StencilEvent() inputChange!: EventEmitter<Event>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  @Watch('value')
  handleValueChange() {
    if (!this.hasFocus) {
      this.isInvalid = false;
    }
  }

  @Watch('disabled')
  @Watch('readOnly')
  handleInteractiveLockChange() {
    if (this.disabled || this.readOnly) {
      this.closeDropdown();
    }
  }

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Time input';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidUpdate() {
    if (this.showDropdown && this.inputRef && this.dropdownRef) {
      if (!this.popperInstance) {
        this.setupPopper(this.inputRef, this.dropdownRef);
      } else {
        void this.popperInstance.update();
      }
      requestAnimationFrame(() => {
        if (this.pendingScrollToSelection) {
          this.scrollWheelsToSelection();
          this.pendingScrollToSelection = false;
        } else {
          // Keep the user’s scroll place while clicking options
          this.restoreWheelScrollPositions();
        }
        if (this.wheelScrollCleanups.length === 0) {
          this.bindCircularWheelListeners();
        }
      });
    } else {
      this.unbindCircularWheelListeners();
      this.pendingScrollToSelection = false;
      this.wheelScrollPositions.clear();
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    }
  }

  disconnectedCallback() {
    this.unbindCircularWheelListeners();
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  // Capture phase so outside-dismiss still runs if a bubble listener stops propagation
  @Listen('pointerdown', { target: 'document', capture: true })
  handleClickOutside(event: PointerEvent) {
    if (!this.showDropdown) {
      return;
    }
    const path = event.composedPath ? event.composedPath() : [event.target];
    const clickedInside =
      path.includes(this.el) ||
      (this.dropdownRef != null && path.includes(this.dropdownRef));
    if (!clickedInside) {
      this.closeDropdown();
    }
  }

  // Storybook / iframe: clicks outside the preview do not hit this document
  @Listen('blur', { target: 'window' })
  handleWindowBlur() {
    if (this.showDropdown) {
      this.closeDropdown();
    }
  }

  @Listen('keydown', { target: 'document' })
  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showDropdown) {
      this.closeDropdown();
      event.preventDefault();
    }
  }

  private get resolvedHourFormat(): TimeHourFormat {
    return is12HourFormat(this.hourFormat ?? '24h') ? '12h' : '24h';
  }

  /**
   * Suggestion list when consumers supply options, a deprecated datalist id,
   * or an `interval-minutes` attribute (generated intervals). Otherwise wheels.
   */
  private get useDatalist(): boolean {
    if ((this.datalistOptions?.length ?? 0) > 0) {
      return true;
    }
    if (this.datalistId) {
      return true;
    }
    return this.el.hasAttribute('interval-minutes');
  }

  private get effectiveShowSeconds(): boolean {
    if (this.step !== undefined && this.step < 60) {
      return true;
    }
    return Boolean(this.showSeconds);
  }

  private get minuteStep(): number {
    if (this.step !== undefined && this.step >= 60) {
      return Math.max(1, Math.floor(this.step / 60));
    }
    return 1;
  }

  private get secondStep(): number {
    if (this.step !== undefined && this.step < 60) {
      return Math.max(1, this.step);
    }
    return 1;
  }

  /** Bias native time presentation: Chromium often uses locale for 12h vs 24h. */
  private get fieldLang(): string {
    return this.resolvedHourFormat === '12h' ? 'en-US' : 'en-GB';
  }

  private setupPopper(anchor: HTMLElement, dropdown: HTMLElement) {
    const options = createPopperOptions('bottom-start');
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }
    this.popperInstance = createPopper(anchor, dropdown, options);
  }

  private closeDropdown() {
    this.showDropdown = false;
  }

  private toggleDropdown = () => {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (!this.showDropdown) {
      this.pendingScrollToSelection = true;
    }
    this.showDropdown = !this.showDropdown;
  };

  private openDropdown() {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.pendingScrollToSelection = true;
    this.showDropdown = true;
  }

  private getClasses(): string {
    const classList = ['modus-wc-time-input', 'modus-wc-input'];

    if (this.effectiveShowSeconds) {
      classList.push('modus-wc-time-input--with-seconds');
    }

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      feedback: this.feedback,
      readOnly: this.readOnly,
      size: this.size,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);
    if (this.isInvalid && !this.feedback) {
      classList.push('modus-wc-input--error');
    }

    return classList.join(' ');
  }

  private emitChange(next24h: string) {
    this.value = next24h;
    const synthetic = {
      target: { value: next24h },
      bubbles: true,
      cancelable: true,
    } as unknown as Event;
    this.inputChange.emit(synthetic);
  }

  private handleBlur = (event: FocusEvent) => {
    if (this.suppressBlurCommit) {
      this.suppressBlurCommit = false;
      this.hasFocus = false;
      this.inputBlur.emit(event);
      return;
    }
    this.hasFocus = false;
    this.inputBlur.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.hasFocus = true;
    this.inputFocus.emit(event);
  };

  private handleInputClick = (event?: MouseEvent) => {
    if (this.disabled || this.readOnly) {
      return;
    }
    // Prefer the Modus dropdown over the browser’s native time popup
    event?.preventDefault?.();
    this.toggleDropdown();
  };

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const next = target.value ?? '';
    this.isInvalid = false;
    if (next !== this.value) {
      this.emitChange(next);
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.closeDropdown();
    }
    if (event.key === 'ArrowDown' && !this.showDropdown) {
      event.preventDefault();
      this.openDropdown();
    }
  };

  private applyWheelSelection(partial: {
    hour?: number;
    minutes?: number;
    seconds?: number;
    period?: 'AM' | 'PM';
  }) {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.saveWheelScrollPositions();
    const current = resolveWheelState(
      this.value,
      this.effectiveShowSeconds,
      this.resolvedHourFormat
    );
    const nextState = { ...current, ...partial };
    const next24h = valueFromWheelState(
      nextState,
      this.effectiveShowSeconds,
      this.resolvedHourFormat
    );
    const parsed = parse24h(next24h);
    if (!parsed) {
      return;
    }
    const clamped = clampTime(parsed, this.min, this.max);
    const final24h = format24h(clamped, this.effectiveShowSeconds);
    this.isInvalid = false;
    this.emitChange(final24h);
  }

  private handleDatalistSelect(value24h: string) {
    if (this.disabled || this.readOnly) {
      return;
    }
    const parsed = parse24h(value24h);
    if (!parsed) {
      return;
    }
    const clamped = clampTime(parsed, this.min, this.max);
    const next = format24h(clamped, this.effectiveShowSeconds);
    this.isInvalid = false;
    this.emitChange(next);
    this.closeDropdown();
  }

  private handleOtherSelect = () => {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.closeDropdown();
    this.suppressBlurCommit = true;
    requestAnimationFrame(() => {
      this.inputRef?.focus();
      this.suppressBlurCommit = false;
    });
  };

  private getWheelViewportKind(viewport: HTMLElement): string {
    return (
      Array.from(viewport.classList)
        .find(
          (c) => typeof c === 'string' && c.startsWith('time-wheel-viewport--')
        )
        ?.replace('time-wheel-viewport--', '') ?? ''
    );
  }

  private saveWheelScrollPositions() {
    if (!this.dropdownRef) {
      return;
    }
    this.dropdownRef
      .querySelectorAll<HTMLElement>('.time-wheel-viewport')
      .forEach((viewport) => {
        const kind = this.getWheelViewportKind(viewport);
        if (kind) {
          this.wheelScrollPositions.set(kind, viewport.scrollTop);
        }
      });
  }

  private restoreWheelScrollPositions() {
    if (!this.dropdownRef || this.wheelScrollPositions.size === 0) {
      return;
    }
    this.circularScrollLock = true;
    this.dropdownRef
      .querySelectorAll<HTMLElement>('.time-wheel-viewport')
      .forEach((viewport) => {
        const kind = this.getWheelViewportKind(viewport);
        const top = kind ? this.wheelScrollPositions.get(kind) : undefined;
        if (top != null) {
          viewport.scrollTop = top;
        }
      });
    this.circularScrollLock = false;
  }

  private scrollWheelsToSelection() {
    if (this.useDatalist || !this.dropdownRef) {
      return;
    }
    const viewports = this.dropdownRef.querySelectorAll('.time-wheel-viewport');
    this.circularScrollLock = true;
    viewports.forEach((viewport) => {
      const viewportEl = viewport as HTMLElement;
      const selected = this.getPreferredSelectedOption(viewportEl);
      if (!selected) {
        return;
      }
      // Align selected row to the top of the fixed viewport (exact N-row height)
      viewportEl.scrollTop +=
        selected.getBoundingClientRect().top -
        viewportEl.getBoundingClientRect().top;
    });
    this.circularScrollLock = false;
  }

  /** Prefer the middle loop copy so wrapping stays seamless after open / select. */
  private getPreferredSelectedOption(
    viewportEl: HTMLElement
  ): HTMLElement | null {
    const selected = Array.from(
      viewportEl.querySelectorAll<HTMLElement>('.time-wheel-option.is-selected')
    );
    if (selected.length === 0) {
      return null;
    }
    if (viewportEl.dataset.circular !== 'true') {
      return selected[0];
    }
    const middle = selected.find(
      (el) =>
        el.dataset.wheelCopy === String(Math.floor(TIME_WHEEL_LOOP_COPIES / 2))
    );
    return middle ?? selected[0];
  }

  private getCircularSetHeight(
    viewportEl: HTMLElement,
    optionCount: number
  ): number {
    const items = viewportEl.querySelectorAll('.time-wheel-option');
    if (items.length < optionCount * 2) {
      const first = items[0] as HTMLElement | undefined;
      return optionCount * (first?.offsetHeight || 0);
    }
    const first = items[0] as HTMLElement;
    const nextCopyFirst = items[optionCount] as HTMLElement;
    return nextCopyFirst.offsetTop - first.offsetTop;
  }

  private maintainCircularScroll(viewportEl: HTMLElement, optionCount: number) {
    if (this.circularScrollLock || optionCount < 2) {
      return;
    }
    const setHeight = this.getCircularSetHeight(viewportEl, optionCount);
    if (setHeight <= 0) {
      return;
    }
    const { scrollTop } = viewportEl;
    if (scrollTop < setHeight) {
      this.circularScrollLock = true;
      viewportEl.scrollTop = scrollTop + setHeight;
      this.circularScrollLock = false;
    } else if (scrollTop >= setHeight * 2) {
      this.circularScrollLock = true;
      viewportEl.scrollTop = scrollTop - setHeight;
      this.circularScrollLock = false;
    }
  }

  private unbindCircularWheelListeners() {
    this.wheelScrollCleanups.forEach((cleanup) => cleanup());
    this.wheelScrollCleanups = [];
  }

  private bindCircularWheelListeners() {
    this.unbindCircularWheelListeners();
    if (!this.dropdownRef) {
      return;
    }
    const viewports = this.dropdownRef.querySelectorAll(
      '.time-wheel-viewport[data-circular="true"]'
    );
    viewports.forEach((viewport) => {
      const viewportEl = viewport as HTMLElement;
      const optionCount = Number(viewportEl.dataset.optionCount);
      if (!optionCount || optionCount < 2) {
        return;
      }
      const onScroll = () =>
        this.maintainCircularScroll(viewportEl, optionCount);
      viewportEl.addEventListener('scroll', onScroll, { passive: true });
      this.wheelScrollCleanups.push(() =>
        viewportEl.removeEventListener('scroll', onScroll)
      );
    });
  }

  private renderPickerDropdown() {
    const state = resolveWheelState(
      this.value,
      this.effectiveShowSeconds,
      this.resolvedHourFormat
    );
    const hours = getHourOptions(this.resolvedHourFormat);
    const minutes = getUnitOptions(this.minuteStep);
    const seconds = this.effectiveShowSeconds
      ? getUnitOptions(this.secondStep)
      : [];
    const periods = getPeriodOptions();

    return (
      <div
        class="time-dropdown time-dropdown--picker"
        ref={(el) => (this.dropdownRef = el)}
        role="dialog"
        aria-label="Time picker"
      >
        <div class="time-wheels">
          {this.renderWheel('hours', hours, String(state.hour), (v) =>
            this.applyWheelSelection({ hour: Number(v) })
          )}
          {this.renderWheel('minutes', minutes, String(state.minutes), (v) =>
            this.applyWheelSelection({ minutes: Number(v) })
          )}
          {this.effectiveShowSeconds &&
            this.renderWheel('seconds', seconds, String(state.seconds), (v) =>
              this.applyWheelSelection({ seconds: Number(v) })
            )}
          {is12HourFormat(this.resolvedHourFormat) &&
            this.renderWheel(
              'period',
              periods,
              state.period,
              (v) => this.applyWheelSelection({ period: v as 'AM' | 'PM' }),
              false
            )}
        </div>
      </div>
    );
  }

  private renderWheel(
    kind: string,
    options: { label: string; value: string }[],
    selectedValue: string,
    onSelect: (value: string) => void,
    circular = options.length >= 2
  ) {
    const looped = circular
      ? buildCircularWheelOptions(options)
      : options.map((opt, index) => ({
          ...opt,
          copy: 0,
          key: `0-${index}-${opt.value}`,
        }));
    const middleCopy = Math.floor(TIME_WHEEL_LOOP_COPIES / 2);

    return (
      <div
        class={{
          'time-wheel-viewport': true,
          [`time-wheel-viewport--${kind}`]: true,
          'time-wheel-viewport--compact': !circular,
        }}
        data-circular={circular ? 'true' : 'false'}
        data-option-count={options.length}
      >
        <ul
          class={`time-wheel time-wheel--${kind}`}
          role="listbox"
          aria-label={kind}
        >
          {looped.map((opt) => {
            const selected =
              opt.value === selectedValue ||
              Number(opt.value) === Number(selectedValue);
            const isA11yCopy = !circular || opt.copy === middleCopy;
            return (
              <li
                key={opt.key}
                class={{
                  'time-wheel-option': true,
                  'is-selected': selected,
                }}
                data-wheel-copy={opt.copy}
                data-value={opt.value}
                role="option"
                aria-hidden={isA11yCopy ? undefined : 'true'}
                aria-selected={
                  isA11yCopy ? (selected ? 'true' : 'false') : undefined
                }
                tabIndex={isA11yCopy ? 0 : -1}
                onMouseDown={(e: MouseEvent) => {
                  // Avoid focus-driven scrollIntoView jumping the wheel
                  e.preventDefault();
                }}
                onClick={() => onSelect(opt.value)}
                onKeyDown={(e: KeyboardEvent) => {
                  if (!isA11yCopy) {
                    return;
                  }
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(opt.value);
                  }
                }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  private renderDatalistDropdown() {
    const options = buildDatalistOptions({
      options: this.datalistOptions,
      intervalMinutes: this.intervalMinutes,
      showSeconds: this.effectiveShowSeconds,
      min: this.min,
      max: this.max,
      hourFormat: this.resolvedHourFormat,
    });

    return (
      <div
        class="time-dropdown time-dropdown--datalist"
        ref={(el) => (this.dropdownRef = el)}
        role="listbox"
        aria-label="Time options"
      >
        <ul class="time-datalist">
          {options.map((opt) => {
            const selected = opt.value === this.value;
            return (
              <li
                class={{
                  'time-datalist-option': true,
                  'is-selected': selected,
                }}
                role="option"
                aria-selected={selected ? 'true' : 'false'}
                tabIndex={0}
                onClick={() => this.handleDatalistSelect(opt.value)}
                onKeyDown={(e: KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleDatalistSelect(opt.value);
                  }
                }}
              >
                {opt.label}
              </li>
            );
          })}
          <li class="time-datalist-divider" role="separator" />
          <li
            class="time-datalist-option time-datalist-option--other"
            role="option"
            aria-selected="false"
            tabIndex={0}
            onClick={this.handleOtherSelect}
            onKeyDown={(e: KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleOtherSelect();
              }
            }}
          >
            Other
          </li>
        </ul>
      </div>
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
            size={this.size}
          />
        )}
        <input
          ref={(el) => (this.inputRef = el)}
          aria-invalid={this.isInvalid || this.feedback?.level === 'error'}
          aria-required={this.required}
          autocomplete={this.autoComplete}
          class={this.getClasses()}
          disabled={this.disabled}
          id={effectiveId}
          lang={this.fieldLang}
          max={this.max}
          min={this.min}
          name={this.name}
          onBlur={this.handleBlur}
          onClick={this.handleInputClick}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
          readonly={this.readOnly}
          required={this.required}
          step={this.step ?? (this.showSeconds ? 1 : 60)}
          tabIndex={this.inputTabIndex}
          type="time"
          value={this.value}
          {...this.inheritedAttributes}
        />

        {this.showDropdown &&
          !this.disabled &&
          !this.readOnly &&
          (this.useDatalist
            ? this.renderDatalistDropdown()
            : this.renderPickerDropdown())}

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
