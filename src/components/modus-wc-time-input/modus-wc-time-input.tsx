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
  formatDisplay,
  is12hrsFormat,
  parse24h,
  parseDisplay,
  TimeFormat,
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
import {
  applyStepToSegment,
  clearSegmentInDisplay,
  displayFromValue,
  getAriaLiveLabel,
  getNextSegment,
  getPrevSegment,
  getSegmentAtCaret,
  getSegments,
  getSkeleton,
  isSkeletonDisplayComplete,
  ITimeSegment,
  parseSkeletonDisplay,
  SegmentKind,
  setSegmentToBound,
  typeDigitInSegment,
} from './utils/time-segments';

/**
 * A customizable time input with a Modus text field and dropdown
 * (scrollable picker wheels or a datalist of interval options).
 *
 * `value` is always stored and emitted in 24-hour format (`HH:mm` or `HH:mm:ss`).
 * The field uses a segmented `--:--` skeleton (native time-input style) with
 * keyboard segment editing. `format` controls display and the Modus picker
 * (`12hrs` wheels + AM/PM vs `24hrs`). Open the picker with the clock button or
 * Alt+ArrowDown.
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
  private pendingSegmentSelect: SegmentKind | null = null;
  private segmentDigitBuffer = '';
  private activeSegmentKind: SegmentKind = 'hour';
  private readonly dropdownIdSuffix = Math.random().toString(36).slice(2, 9);

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Whether the picker / datalist dropdown is open */
  @State() private showDropdown = false;

  /** Internal invalid flag set when the field value cannot be parsed */
  @State() private isInvalid = false;

  /** Segmented display string shown in the text field */
  @State() private displayValue: string = '';

  /** Announced to screen readers when the time changes */
  @State() private ariaLiveText = '';

  /** Hint for form autofill feature. */
  @Prop() autoComplete?: 'on' | 'off';

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /**
   * Dropdown mode for the clock menu.
   * - `picker` (default): scrollable hour / minute / (optional) second wheels
   * - `datalist`: interval or explicit option list
   *
   * Non-empty `datalistOptions` or deprecated `datalistId` also force datalist mode.
   */
  @Prop() variant?: 'datalist' | 'picker' = 'picker';

  /**
   * Pre-defined time options for the suggestion list.
   * Values must be in `HH:mm` or `HH:mm:ss` (24-hour) format.
   * When provided (non-empty), the clock menu shows this list instead of picker wheels.
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
   * Hour clock for the Modus picker wheels / datalist labels and the field display.
   * - `24hrs` (default): hours wheel 00–23
   * - `12hrs`: hours wheel 01–12 with AM/PM
   *
   * `value` / `inputChange` always stay in 24-hour storage format (`HH:mm` / `HH:mm:ss`).
   */
  @Prop() format?: TimeFormat = '24hrs';

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation. */
  @Prop() inputTabIndex?: number;

  /**
   * Interval in minutes used to generate suggestion-list options when
   * `variant` is `datalist` and `datalistOptions` is empty. Default: 15.
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
   * Granularity in seconds. Sets the increment used by the minute and second
   * picker wheels and by arrow-key stepping. A step under 60 also reveals the
   * seconds segment. Suggestion-list options are generated from
   * `intervalMinutes`, not from this value.
   */
  @Prop() step?: number;

  /**
   * The value of the time input in 24-hour format with leading zeros:
   * `HH:mm` or `HH:mm:ss`.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. `target.value` is always 24h (`HH:mm` / `HH:mm:ss`). */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  @Watch('value')
  handleValueChange() {
    if (!this.hasFocus) {
      this.isInvalid = false;
      this.syncDisplayValue();
    }
  }

  @Watch('format')
  @Watch('showSeconds')
  handleFormatChange() {
    if (!this.hasFocus) {
      this.syncDisplayValue();
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
    this.syncDisplayValue();
  }

  componentDidRender() {
    if (this.pendingSegmentSelect && this.hasFocus && this.inputRef) {
      const seg = this.getSegments().find(
        (s) => s.kind === this.pendingSegmentSelect
      );
      if (seg) {
        this.selectSegment(seg);
      }
      this.pendingSegmentSelect = null;
    }
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
          this.restoreWheelScrollPositions();
        }
        if (this.wheelScrollCleanups.length === 0) {
          this.bindCircularWheelListeners();
        }
        if (!this.useDatalist) {
          const focusTarget = this.dropdownRef?.querySelector<HTMLElement>(
            '.time-wheel-option[tabindex="0"]'
          );
          focusTarget?.focus();
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
    if (this.inputRef) {
      this.inputRef.removeEventListener('beforeinput', this.handleBeforeInput);
    }
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

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

  private get resolvedFormat(): TimeFormat {
    return is12hrsFormat(this.format ?? '24hrs') ? '12hrs' : '24hrs';
  }

  private get dropdownId(): string {
    return `time-dropdown-${this.dropdownIdSuffix}`;
  }

  private get useDatalist(): boolean {
    if (this.variant === 'datalist') {
      return true;
    }
    if ((this.datalistOptions?.length ?? 0) > 0) {
      return true;
    }
    if (this.datalistId) {
      return true;
    }
    // Deprecated: markup opt-in without variant. Property-only assignment does not switch modes.
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

  private getSegments(): ITimeSegment[] {
    return getSegments(this.effectiveShowSeconds, this.resolvedFormat);
  }

  private getActiveSegment(): ITimeSegment {
    const segments = this.getSegments();
    const caret = this.inputRef?.selectionStart;
    if (typeof caret === 'number' && !Number.isNaN(caret)) {
      const seg = getSegmentAtCaret(
        caret,
        this.effectiveShowSeconds,
        this.resolvedFormat
      );
      this.activeSegmentKind = seg.kind;
      return seg;
    }
    return (
      segments.find((s) => s.kind === this.activeSegmentKind) ?? segments[0]
    );
  }

  private selectSegment(segment: ITimeSegment) {
    if (!this.inputRef) {
      return;
    }
    this.activeSegmentKind = segment.kind;
    if (typeof this.inputRef.setSelectionRange === 'function') {
      this.inputRef.setSelectionRange(segment.start, segment.end);
    }
    this.segmentDigitBuffer = '';
  }

  private setupPopper(anchor: HTMLElement, dropdown: HTMLElement) {
    const options = createPopperOptions('bottom-start');
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }
    this.popperInstance = createPopper(anchor, dropdown, options);
  }

  private closeDropdown() {
    const focusInDropdown =
      this.dropdownRef != null &&
      document.activeElement != null &&
      this.dropdownRef.contains(document.activeElement);
    this.showDropdown = false;
    if (focusInDropdown) {
      requestAnimationFrame(() => this.inputRef?.focus());
    }
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

  // The size modifier lives on the input, but the field width is set on the
  // container, so mirror the size there too.
  private getContainerClasses(): string {
    return `time-input-container time-input-container--${this.size}`;
  }

  private getClasses(): string {
    const classList = ['modus-wc-time-input', 'modus-wc-input'];

    if (this.effectiveShowSeconds) {
      classList.push('modus-wc-time-input--with-seconds');
    }

    if (this.resolvedFormat === '12hrs') {
      classList.push('modus-wc-time-input--12hrs');
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

  private updateAriaLive() {
    this.ariaLiveText = getAriaLiveLabel(
      this.displayValue,
      this.effectiveShowSeconds,
      this.resolvedFormat
    );
  }

  private emitChange(next24h: string) {
    this.value = next24h;
    this.displayValue = displayFromValue(
      next24h,
      this.effectiveShowSeconds,
      this.resolvedFormat
    );
    this.updateAriaLive();
    this.inputChange.emit({
      target: { value: next24h },
    } as unknown as InputEvent);
  }

  private commitDisplay(nextDisplay: string, activeKind: SegmentKind) {
    this.displayValue = nextDisplay;
    this.updateAriaLive();

    if (
      isSkeletonDisplayComplete(
        nextDisplay,
        this.effectiveShowSeconds,
        this.resolvedFormat
      )
    ) {
      const parsed = parseSkeletonDisplay(
        nextDisplay,
        this.effectiveShowSeconds,
        this.resolvedFormat
      );
      if (parsed) {
        const clamped = clampTime(parsed, this.min, this.max);
        const next24h = format24h(clamped, this.effectiveShowSeconds);
        this.isInvalid = false;
        this.pendingSegmentSelect = activeKind;
        if (next24h !== this.value) {
          this.emitChange(next24h);
        } else {
          this.displayValue = formatDisplay(
            clamped,
            this.effectiveShowSeconds,
            this.resolvedFormat
          );
        }
        return;
      }
    }

    this.isInvalid = false;
    this.pendingSegmentSelect = activeKind;
    if (this.value !== '') {
      this.emitChange('');
    }
  }

  private handleBlur = (event: FocusEvent) => {
    if (this.suppressBlurCommit) {
      this.suppressBlurCommit = false;
      this.hasFocus = false;
      this.syncDisplayValue();
      this.inputBlur.emit(event);
      return;
    }

    if (
      isSkeletonDisplayComplete(
        this.displayValue,
        this.effectiveShowSeconds,
        this.resolvedFormat
      )
    ) {
      const parsed = parseSkeletonDisplay(
        this.displayValue,
        this.effectiveShowSeconds,
        this.resolvedFormat
      );
      if (parsed) {
        const clamped = clampTime(parsed, this.min, this.max);
        const next24h = format24h(clamped, this.effectiveShowSeconds);
        this.isInvalid = false;
        if (next24h !== this.value) {
          this.emitChange(next24h);
        } else {
          this.displayValue = formatDisplay(
            clamped,
            this.effectiveShowSeconds,
            this.resolvedFormat
          );
        }
      } else {
        this.isInvalid = true;
      }
    } else if (
      this.displayValue !==
      getSkeleton(this.effectiveShowSeconds, this.resolvedFormat)
    ) {
      this.isInvalid = true;
    } else {
      this.isInvalid = false;
    }

    this.hasFocus = false;
    this.segmentDigitBuffer = '';
    this.inputBlur.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.hasFocus = true;
    const segments = this.getSegments();
    requestAnimationFrame(() => {
      this.selectSegment(segments[0]);
    });
    this.inputFocus.emit(event);
  };

  private handleInputClick = (event?: MouseEvent) => {
    if (this.disabled || this.readOnly || !this.inputRef) {
      return;
    }
    event?.preventDefault?.();
    const input = this.inputRef;
    requestAnimationFrame(() => {
      const caret = input.selectionStart ?? 0;
      const seg = getSegmentAtCaret(
        caret,
        this.effectiveShowSeconds,
        this.resolvedFormat
      );
      this.selectSegment(seg);
    });
  };

  private handlePaste = (event: ClipboardEvent) => {
    if (this.disabled || this.readOnly) {
      return;
    }
    const pasted = event.clipboardData?.getData('text')?.trim();
    if (!pasted) {
      return;
    }
    event.preventDefault();

    const parsed =
      parse24h(pasted) ??
      parseDisplay(pasted, this.effectiveShowSeconds, this.resolvedFormat);
    if (!parsed) {
      return;
    }
    const clamped = clampTime(parsed, this.min, this.max);
    const next24h = format24h(clamped, this.effectiveShowSeconds);
    this.isInvalid = false;
    this.emitChange(next24h);
    this.pendingSegmentSelect = 'hour';
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled || this.readOnly) {
      return;
    }

    const seg = this.getActiveSegment();

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const next = applyStepToSegment(
        this.displayValue,
        seg,
        1,
        this.effectiveShowSeconds,
        this.resolvedFormat,
        this.minuteStep,
        this.secondStep
      );
      this.commitDisplay(next, seg.kind);
      return;
    }

    if (event.key === 'ArrowDown') {
      if (event.altKey) {
        event.preventDefault();
        this.openDropdown();
        return;
      }
      event.preventDefault();
      const next = applyStepToSegment(
        this.displayValue,
        seg,
        -1,
        this.effectiveShowSeconds,
        this.resolvedFormat,
        this.minuteStep,
        this.secondStep
      );
      this.commitDisplay(next, seg.kind);
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.selectSegment(
        getPrevSegment(seg, this.effectiveShowSeconds, this.resolvedFormat)
      );
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.selectSegment(
        getNextSegment(seg, this.effectiveShowSeconds, this.resolvedFormat)
      );
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      const next = setSegmentToBound(
        this.displayValue,
        seg,
        'min',
        this.effectiveShowSeconds,
        this.resolvedFormat
      );
      this.commitDisplay(next, seg.kind);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      const next = setSegmentToBound(
        this.displayValue,
        seg,
        'max',
        this.effectiveShowSeconds,
        this.resolvedFormat
      );
      this.commitDisplay(next, seg.kind);
      return;
    }

    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      const next = clearSegmentInDisplay(
        this.displayValue,
        seg,
        this.effectiveShowSeconds,
        this.resolvedFormat
      );
      this.segmentDigitBuffer = '';
      this.commitDisplay(next, seg.kind);
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      this.closeDropdown();
      return;
    }

    if (/^\d$/.test(event.key)) {
      event.preventDefault();
      const result = typeDigitInSegment(
        this.displayValue,
        seg,
        event.key,
        this.segmentDigitBuffer,
        this.resolvedFormat
      );
      this.segmentDigitBuffer = result.buffer;
      const nextKind = result.advance
        ? getNextSegment(seg, this.effectiveShowSeconds, this.resolvedFormat)
            .kind
        : seg.kind;
      this.activeSegmentKind = nextKind;
      this.commitDisplay(result.display, nextKind);
      if (result.advance) {
        const nextSeg = getNextSegment(
          seg,
          this.effectiveShowSeconds,
          this.resolvedFormat
        );
        this.pendingSegmentSelect = nextSeg.kind;
      }
      return;
    }

    if (
      this.resolvedFormat === '12hrs' &&
      seg.kind === 'period' &&
      /^[apAP]$/.test(event.key)
    ) {
      event.preventDefault();
      const result = typeDigitInSegment(
        this.displayValue,
        seg,
        event.key,
        '',
        this.resolvedFormat
      );
      this.commitDisplay(result.display, seg.kind);
      return;
    }

    if (
      event.key.length === 1 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
    }
  };

  private handleBeforeInput = (event: InputEvent) => {
    if (this.disabled || this.readOnly) {
      return;
    }
    event.preventDefault();
  };

  private setInputRef = (el: HTMLInputElement | undefined) => {
    if (this.inputRef) {
      this.inputRef.removeEventListener('beforeinput', this.handleBeforeInput);
    }
    this.inputRef = el;
    if (el) {
      el.addEventListener('beforeinput', this.handleBeforeInput);
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
      this.resolvedFormat
    );
    const nextState = { ...current, ...partial };
    const next24h = valueFromWheelState(
      nextState,
      this.effectiveShowSeconds,
      this.resolvedFormat
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

  private moveListboxFocus(
    current: HTMLElement,
    direction: 1 | -1,
    itemSelector: string
  ) {
    const listbox = current.closest('[role="listbox"]');
    if (!listbox) {
      return;
    }
    const items = Array.from(
      listbox.querySelectorAll<HTMLElement>(itemSelector)
    ).filter((el) => el.getAttribute('aria-hidden') !== 'true');
    const index = items.indexOf(current);
    if (index < 0 || items.length === 0) {
      return;
    }
    let nextIndex = index + direction;
    if (nextIndex < 0) {
      nextIndex = items.length - 1;
    } else if (nextIndex >= items.length) {
      nextIndex = 0;
    }
    current.tabIndex = -1;
    const target = items[nextIndex];
    target.tabIndex = 0;
    target.focus();
  }

  private handleWheelOptionKeyDown = (
    event: KeyboardEvent,
    isA11yCopy: boolean,
    onSelect: (value: string) => void,
    value: string
  ) => {
    if (!isA11yCopy) {
      return;
    }
    const target = event.currentTarget as HTMLElement;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(value);
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.moveListboxFocus(target, 1, '.time-wheel-option');
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.moveListboxFocus(target, -1, '.time-wheel-option');
      return;
    }
    if (event.key === 'Home') {
      event.preventDefault();
      const listbox = target.closest('[role="listbox"]');
      const first = listbox?.querySelector<HTMLElement>(
        '.time-wheel-option:not([aria-hidden="true"])'
      );
      if (first && first !== target) {
        target.tabIndex = -1;
        first.tabIndex = 0;
        first.focus();
      }
      return;
    }
    if (event.key === 'End') {
      event.preventDefault();
      const listbox = target.closest('[role="listbox"]');
      const items = listbox?.querySelectorAll<HTMLElement>(
        '.time-wheel-option:not([aria-hidden="true"])'
      );
      const last = items?.[items.length - 1];
      if (last && last !== target) {
        target.tabIndex = -1;
        last.tabIndex = 0;
        last.focus();
      }
    }
  };

  private handleDatalistOptionKeyDown = (
    event: KeyboardEvent,
    onSelect: () => void
  ) => {
    const target = event.currentTarget as HTMLElement;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.moveListboxFocus(target, 1, '.time-datalist-option');
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.moveListboxFocus(target, -1, '.time-datalist-option');
    }
  };

  private syncDisplayValue() {
    this.displayValue = displayFromValue(
      this.value,
      this.effectiveShowSeconds,
      this.resolvedFormat
    );
    this.updateAriaLive();
  }

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
      viewportEl.scrollTop +=
        selected.getBoundingClientRect().top -
        viewportEl.getBoundingClientRect().top;
    });
    this.circularScrollLock = false;
  }

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
      this.resolvedFormat
    );
    const hours = getHourOptions(this.resolvedFormat);
    const minutes = getUnitOptions(this.minuteStep);
    const seconds = this.effectiveShowSeconds
      ? getUnitOptions(this.secondStep)
      : [];
    const periods = getPeriodOptions();

    return (
      <div
        class="time-dropdown time-dropdown--picker"
        id={this.dropdownId}
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
          {is12hrsFormat(this.resolvedFormat) &&
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
    const focusableKey = (() => {
      const selectedA11y = looped.find(
        (opt) =>
          (!circular || opt.copy === middleCopy) &&
          (opt.value === selectedValue ||
            Number(opt.value) === Number(selectedValue))
      );
      if (selectedA11y) {
        return selectedA11y.key;
      }
      return looped.find((opt) => !circular || opt.copy === middleCopy)?.key;
    })();

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
                tabIndex={isA11yCopy && opt.key === focusableKey ? 0 : -1}
                onMouseDown={(e: MouseEvent) => {
                  e.preventDefault();
                }}
                onClick={() => onSelect(opt.value)}
                onKeyDown={(e: KeyboardEvent) =>
                  this.handleWheelOptionKeyDown(
                    e,
                    isA11yCopy,
                    onSelect,
                    opt.value
                  )
                }
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
      format: this.resolvedFormat,
    });

    const focusableValue =
      options.find((opt) => opt.value === this.value)?.value ??
      options[0]?.value;

    return (
      <div
        class="time-dropdown time-dropdown--datalist"
        id={this.dropdownId}
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
                tabIndex={opt.value === focusableValue ? 0 : -1}
                onClick={() => this.handleDatalistSelect(opt.value)}
                onKeyDown={(e: KeyboardEvent) =>
                  this.handleDatalistOptionKeyDown(e, () =>
                    this.handleDatalistSelect(opt.value)
                  )
                }
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
            tabIndex={focusableValue == null ? 0 : -1}
            onClick={this.handleOtherSelect}
            onKeyDown={(e: KeyboardEvent) =>
              this.handleDatalistOptionKeyDown(e, this.handleOtherSelect)
            }
          >
            Other
          </li>
        </ul>
      </div>
    );
  }

  render() {
    const effectiveId = this.resolveEffectiveId(this.inputId);
    const popupRole = this.useDatalist ? 'listbox' : 'dialog';

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
        <div class={this.getContainerClasses()}>
          <input
            ref={this.setInputRef}
            aria-controls={this.showDropdown ? this.dropdownId : undefined}
            aria-expanded={this.showDropdown ? 'true' : 'false'}
            aria-haspopup={popupRole}
            aria-invalid={this.isInvalid || this.feedback?.level === 'error'}
            aria-keyshortcuts="Alt+ArrowDown"
            aria-required={this.required}
            autocomplete={this.autoComplete}
            class={this.getClasses()}
            disabled={this.disabled}
            id={effectiveId}
            inputmode="numeric"
            onBlur={this.handleBlur}
            onClick={this.handleInputClick}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
            onPaste={this.handlePaste}
            readonly={this.readOnly}
            required={this.required}
            role={this.useDatalist ? 'combobox' : undefined}
            tabIndex={this.inputTabIndex}
            type="text"
            value={this.displayValue}
            {...this.inheritedAttributes}
          />
          {this.name && (
            <input type="hidden" name={this.name} value={this.value} />
          )}
          <button
            type="button"
            class="clock-icon-trigger"
            aria-label="Toggle time picker"
            aria-expanded={String(this.showDropdown)}
            aria-haspopup={popupRole}
            aria-controls={this.showDropdown ? this.dropdownId : undefined}
            disabled={this.disabled || this.readOnly}
            onClick={this.toggleDropdown}
          >
            <modus-wc-icon
              name="clock"
              size={this.size === 'lg' ? 'sm' : 'xs'}
              decorative
            />
          </button>
        </div>

        <span
          class="time-input-aria-live"
          aria-live="polite"
          aria-atomic="true"
        >
          {this.ariaLiveText}
        </span>

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
