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
  TimeFormat,
} from './utils/time-format';
import {
  bindBeforeInputListener,
  handleTimeInputBeforeInput,
  handleTimeInputInput,
  handleTimeInputKeyDown,
  handleTimeInputPaste,
  ITimeInputKeyboardContext,
  unbindBeforeInputListener,
} from './utils/time-input-keyboard';
import { scheduleWheelSelectionFocus } from './utils/time-listbox-keyboard';
import { resolveWheelState, valueFromWheelState } from './utils/time-options';
import {
  IWheelSelectionPartial,
  TimeDatalistDropdown,
  TimePickerDropdown,
} from './utils/time-picker-dropdown';
import {
  displayFromValue,
  getAriaLiveLabel,
  getSegmentAtCaret,
  getSegments,
  getSkeleton,
  isSkeletonDisplayComplete,
  ITimeSegment,
  parseSkeletonDisplay,
  SegmentKind,
} from './utils/time-segments';
import {
  bindCircularWheelListeners,
  ICircularScrollLock,
  restoreWheelScrollPositions,
  saveWheelScrollPositions,
  scrollWheelsToSelection,
  unbindCircularWheelListeners,
} from './utils/time-wheel-scroll';

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
  /** True while focus sits anywhere inside the control, picker included. */
  private hasComponentFocus = false;
  /** True while the control is about to move focus back onto itself. */
  private pendingInternalRefocus = false;
  /**
   * Frame handle for the segment selection queued on focus. A click cancels it
   * so the caret the user aimed at wins over the default entry segment.
   */
  private focusSelectFrame: number | null = null;
  private suppressBlurCommit = false;
  private readonly circularScrollLock: ICircularScrollLock = { current: false };
  private wheelScrollCleanups: Array<() => void> = [];
  /** Scroll selected rows into view only when the dropdown first opens */
  private pendingScrollToSelection = false;
  /** Move focus onto the selected hour when the picker first opens */
  private pendingFocusPickerOnOpen = false;
  /**
   * `value` as it stood when the dropdown opened. Escape restores it before
   * closing, so a picker session can be abandoned without keeping its edits.
   */
  private valueAtDropdownOpen: string | null = null;
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

  /**
   * Hint for form autofill feature.
   * Defaults to `off` because browser autofill values are not segmented-field safe.
   */
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
    this.syncClockTriggerAria();
  }

  componentDidUpdate() {
    if (this.showDropdown && this.inputRef && this.dropdownRef) {
      if (!this.popperInstance) {
        this.setupPopper(this.inputRef, this.dropdownRef);
      } else {
        void this.popperInstance.update();
      }
      requestAnimationFrame(() => {
        const focusPickerOnOpen = this.pendingFocusPickerOnOpen;
        this.pendingFocusPickerOnOpen = false;
        if (this.pendingScrollToSelection) {
          scrollWheelsToSelection(this.dropdownRef);
          this.pendingScrollToSelection = false;
        } else {
          restoreWheelScrollPositions(
            this.dropdownRef,
            this.wheelScrollPositions,
            this.circularScrollLock
          );
        }
        if (this.wheelScrollCleanups.length === 0) {
          this.wheelScrollCleanups = bindCircularWheelListeners(
            this.dropdownRef,
            this.circularScrollLock
          );
        }
        if (!this.useDatalist && focusPickerOnOpen) {
          // The hours wheel renders first, so its focusable row is the selected
          // hour already pinned to the top by scrollWheelsToSelection.
          const focusTarget = this.dropdownRef?.querySelector<HTMLElement>(
            '.time-wheel-viewport--hours .time-wheel-option[tabindex="0"]'
          );
          focusTarget?.focus({ preventScroll: true });
        }
      });
    } else {
      unbindCircularWheelListeners(this.wheelScrollCleanups);
      this.wheelScrollCleanups = [];
      this.pendingScrollToSelection = false;
      this.pendingFocusPickerOnOpen = false;
      this.valueAtDropdownOpen = null;
      this.wheelScrollPositions.clear();
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    }
  }

  disconnectedCallback() {
    unbindCircularWheelListeners(this.wheelScrollCleanups);
    this.wheelScrollCleanups = [];
    this.cancelFocusSelect();
    unbindBeforeInputListener(this.inputRef, this.handleBeforeInput);
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  // Capture-phase pointerdown: closes on press (not every press yields a
  // click) and cannot be hidden by a downstream `stopPropagation`.
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

  // Host-level so the clock button and picker rows count as the same control
  // as the text field; the field's own focus / blur delegate here too.
  @Listen('focusin')
  handleComponentFocusIn(event: FocusEvent) {
    this.enterComponentFocus(event);
  }

  @Listen('focusout')
  handleComponentFocusOut(event: FocusEvent) {
    this.handleComponentFocusExit(event);
  }

  @Listen('keydown', { target: 'document' })
  handleEscapeKey(event: KeyboardEvent) {
    if (event.key !== 'Escape' || !this.showDropdown) {
      return;
    }
    event.preventDefault();
    const revertValue = this.getPickerRevertValue();
    if (revertValue !== null) {
      this.revertToValueAtOpen(revertValue);
      return;
    }
    // Like Enter, dismissing the picker hands focus back to the clock button
    // rather than dropping the caret into the hour segment.
    this.closeDropdown('clock');
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
    const segmentChanged = this.activeSegmentKind !== segment.kind;
    this.activeSegmentKind = segment.kind;
    if (typeof this.inputRef.setSelectionRange === 'function') {
      this.inputRef.setSelectionRange(segment.start, segment.end);
    }
    if (segmentChanged) {
      this.segmentDigitBuffer = '';
    }
  }

  private setupPopper(anchor: HTMLElement, dropdown: HTMLElement) {
    const options = createPopperOptions('bottom-start');
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }
    this.popperInstance = createPopper(anchor, dropdown, options);
  }

  /** `value` in comparable storage form; unparsable or empty becomes `''`. */
  private normalizeValue(raw: string): string {
    const parsed = parse24h(raw);
    return parsed ? format24h(parsed, this.effectiveShowSeconds) : '';
  }

  /**
   * The value to restore when Escape abandons the current picker session, or
   * `null` when the dropdown is closed or nothing has been picked yet.
   */
  private getPickerRevertValue(): string | null {
    if (this.valueAtDropdownOpen === null) {
      return null;
    }
    const atOpen = this.normalizeValue(this.valueAtDropdownOpen);
    return atOpen === this.normalizeValue(this.value) ? null : atOpen;
  }

  /** Restore the value the field had when the picker opened, keeping it open. */
  private revertToValueAtOpen(restored: string) {
    const focusedListbox = this.getFocusedWheelListbox();
    this.isInvalid = false;
    this.emitChange(restored);
    this.pendingScrollToSelection = true;
    if (focusedListbox) {
      scheduleWheelSelectionFocus(focusedListbox);
    }
  }

  private getFocusedWheelListbox(): Element | null {
    const active = document.activeElement;
    if (!active || this.dropdownRef == null) {
      return null;
    }
    return this.dropdownRef.contains(active)
      ? active.closest('[role="listbox"]')
      : null;
  }

  private getClockTrigger(): HTMLButtonElement | null {
    return this.el.querySelector<HTMLButtonElement>(
      '.clock-icon-trigger button'
    );
  }

  /**
   * `modus-wc-button` only inherits host ARIA in componentWillLoad, so the
   * popup state has to be written onto the inner button on every render.
   */
  private syncClockTriggerAria() {
    const trigger = this.getClockTrigger();
    if (!trigger) {
      return;
    }
    trigger.setAttribute('aria-expanded', String(this.showDropdown));
    trigger.setAttribute(
      'aria-haspopup',
      this.useDatalist ? 'listbox' : 'dialog'
    );
    if (this.showDropdown) {
      trigger.setAttribute('aria-controls', this.dropdownId);
    } else {
      trigger.removeAttribute('aria-controls');
    }
  }

  /**
   * `returnFocusTo` decides where focus lands when the dropdown closes while
   * focus is still inside it. Confirming a row with Enter returns to the clock
   * button; every other close returns to the field so segment editing can continue.
   */
  private closeDropdown(returnFocusTo: 'input' | 'clock' = 'input') {
    const focusInDropdown =
      this.dropdownRef != null &&
      document.activeElement != null &&
      this.dropdownRef.contains(document.activeElement);
    this.showDropdown = false;
    if (focusInDropdown) {
      this.pendingInternalRefocus = true;
      requestAnimationFrame(() => {
        const clockTrigger =
          returnFocusTo === 'clock' ? this.getClockTrigger() : null;
        if (clockTrigger) {
          clockTrigger.focus();
        } else {
          this.inputRef?.focus();
        }
        this.pendingInternalRefocus = false;
      });
    }
  }

  private toggleDropdown = () => {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (!this.showDropdown) {
      this.pendingScrollToSelection = true;
      this.pendingFocusPickerOnOpen = true;
      this.valueAtDropdownOpen = this.value;
    }
    this.showDropdown = !this.showDropdown;
  };

  private handleClockMouseDown = (event: MouseEvent) => {
    // Keep focus on the text field; the clock control is chrome inside the input.
    event.preventDefault();
  };

  private openDropdown() {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.pendingScrollToSelection = true;
    this.pendingFocusPickerOnOpen = true;
    this.valueAtDropdownOpen = this.value;
    this.showDropdown = true;
  }

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
  }

  private getKeyboardContext(): ITimeInputKeyboardContext {
    return {
      disabled: Boolean(this.disabled),
      readOnly: Boolean(this.readOnly),
      displayValue: this.displayValue,
      effectiveShowSeconds: this.effectiveShowSeconds,
      resolvedFormat: this.resolvedFormat,
      minuteStep: this.minuteStep,
      secondStep: this.secondStep,
      min: this.min,
      max: this.max,
      getActiveSegment: () => this.getActiveSegment(),
      selectSegment: (segment) => this.selectSegment(segment),
      commitDisplay: (display, kind) => this.commitDisplay(display, kind),
      openDropdown: () => this.openDropdown(),
      closeDropdown: () => this.closeDropdown(),
      getSegmentDigitBuffer: () => this.segmentDigitBuffer,
      setSegmentDigitBuffer: (buffer) => {
        this.segmentDigitBuffer = buffer;
      },
      setActiveSegmentKind: (kind) => {
        this.activeSegmentKind = kind;
      },
      setPendingSegmentSelect: (kind) => {
        this.pendingSegmentSelect = kind;
      },
      emitParsedTime: (next24h) => {
        this.isInvalid = false;
        this.emitChange(next24h);
      },
    };
  }

  private isClockTrigger(element: Node | null): boolean {
    if (!element || !('classList' in element)) {
      return false;
    }
    return (element as Element).closest('.clock-icon-trigger') !== null;
  }

  /** Parse, clamp and validate the typed display once the control is left. */
  private commitFieldOnExit() {
    if (this.suppressBlurCommit) {
      this.suppressBlurCommit = false;
      this.syncDisplayValue();
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
      return;
    }

    this.isInvalid =
      this.displayValue !==
      getSkeleton(this.effectiveShowSeconds, this.resolvedFormat);
  }

  /**
   * `inputFocus` / `inputBlur` describe the whole control, not the text field:
   * they fire once when focus enters and once when it leaves. Moving between
   * the field, the clock button and the picker rows is internal and silent.
   */
  private enterComponentFocus(event: FocusEvent) {
    if (this.hasComponentFocus) {
      return;
    }
    this.hasComponentFocus = true;
    this.inputFocus.emit(event);
  }

  private handleComponentFocusExit(event: FocusEvent) {
    if (!this.hasComponentFocus) {
      return;
    }
    const next = event.relatedTarget as Node | null;
    if (next && this.el.contains(next)) {
      return;
    }
    if (this.pendingInternalRefocus) {
      return;
    }
    this.hasComponentFocus = false;
    this.hasFocus = false;
    this.cancelFocusSelect();
    this.segmentDigitBuffer = '';
    this.commitFieldOnExit();
    this.inputBlur.emit(event);
  }

  private cancelFocusSelect() {
    if (this.focusSelectFrame !== null) {
      cancelAnimationFrame(this.focusSelectFrame);
      this.focusSelectFrame = null;
    }
  }

  private handleBlur = (event: FocusEvent) => {
    this.hasFocus = false;
    this.segmentDigitBuffer = '';
    this.handleComponentFocusExit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    const wasFocused = this.hasFocus;
    this.hasFocus = true;
    if (!wasFocused) {
      const segments = this.getSegments();
      const fromClock = this.isClockTrigger(event.relatedTarget as Node | null);
      this.cancelFocusSelect();
      // The pointer places the caret after this event, so resolve the segment
      // a frame later: a click lands on the segment the user aimed at, while
      // tabbing in leaves the caret at 0 and enters on the first segment.
      this.focusSelectFrame = requestAnimationFrame(() => {
        this.focusSelectFrame = null;
        if (fromClock) {
          this.selectSegment(segments[segments.length - 1]);
        } else {
          this.selectSegmentAtCaret();
        }
      });
    }
    this.enterComponentFocus(event);
  };

  private selectSegmentAtCaret() {
    if (!this.inputRef) {
      return;
    }
    const caret = this.inputRef.selectionStart ?? 0;
    const seg = getSegmentAtCaret(
      caret,
      this.effectiveShowSeconds,
      this.resolvedFormat
    );
    this.selectSegment(seg);
  }

  private handleInputClick = () => {
    if (this.disabled || this.readOnly || !this.inputRef) {
      return;
    }
    this.cancelFocusSelect();
    this.selectSegmentAtCaret();
  };

  private handlePaste = (event: ClipboardEvent) => {
    handleTimeInputPaste(event, this.getKeyboardContext());
  };

  private handleInput = (event: InputEvent) => {
    handleTimeInputInput(event, {
      ...this.getKeyboardContext(),
      revertDisplay: () => {
        if (this.inputRef) {
          this.inputRef.value = this.displayValue;
        }
      },
    });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    handleTimeInputKeyDown(event, this.getKeyboardContext());
  };

  private handleBeforeInput = (event: InputEvent) => {
    handleTimeInputBeforeInput(event, this.getKeyboardContext());
  };

  private setInputRef = (el: HTMLInputElement | undefined) => {
    bindBeforeInputListener(this.inputRef, el, this.handleBeforeInput);
    this.inputRef = el;
  };

  private setDropdownRef = (el: HTMLElement | undefined) => {
    this.dropdownRef = el;
  };

  private applyWheelSelection(partial: IWheelSelectionPartial) {
    if (this.disabled || this.readOnly) {
      return;
    }
    saveWheelScrollPositions(this.dropdownRef, this.wheelScrollPositions);
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
    if (this.isCurrentValue(final24h)) {
      return;
    }
    this.emitChange(final24h);
  }

  /** Re-picking the row that is already selected must not emit `inputChange`. */
  private isCurrentValue(next24h: string): boolean {
    const parsedCurrent = parse24h(this.value);
    if (!parsedCurrent) {
      return false;
    }
    return format24h(parsedCurrent, this.effectiveShowSeconds) === next24h;
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
    if (!this.isCurrentValue(next)) {
      this.emitChange(next);
    }
    this.closeDropdown();
  }

  private handleOtherSelect = () => {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.closeDropdown();
    this.suppressBlurCommit = true;
    this.pendingInternalRefocus = true;
    requestAnimationFrame(() => {
      this.inputRef?.focus();
      this.suppressBlurCommit = false;
      this.pendingInternalRefocus = false;
    });
  };

  private syncDisplayValue() {
    this.displayValue = displayFromValue(
      this.value,
      this.effectiveShowSeconds,
      this.resolvedFormat
    );
    this.updateAriaLive();
  }

  render() {
    const effectiveId = this.resolveEffectiveId(this.inputId);
    const popupRole = this.useDatalist ? 'listbox' : 'dialog';
    const dropdownProps = {
      dropdownId: this.dropdownId,
      setDropdownRef: this.setDropdownRef,
      value: this.value,
      effectiveShowSeconds: this.effectiveShowSeconds,
      resolvedFormat: this.resolvedFormat,
      minuteStep: this.minuteStep,
      secondStep: this.secondStep,
      datalistOptions: this.datalistOptions,
      intervalMinutes: this.intervalMinutes,
      min: this.min,
      max: this.max,
      onWheelSelect: (partial: IWheelSelectionPartial) =>
        this.applyWheelSelection(partial),
      onWheelCommit: () => this.closeDropdown('clock'),
      onDatalistSelect: (value24h: string) =>
        this.handleDatalistSelect(value24h),
      onOtherSelect: this.handleOtherSelect,
    };

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
            aria-autocomplete="none"
            aria-keyshortcuts="Alt+ArrowDown"
            aria-required={this.required}
            autocomplete={this.autoComplete ?? 'off'}
            class={this.getClasses()}
            disabled={this.disabled}
            id={effectiveId}
            inputmode="numeric"
            onBlur={this.handleBlur}
            onClick={this.handleInputClick}
            onFocus={this.handleFocus}
            onInput={this.handleInput}
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
          <modus-wc-button
            aria-label="Toggle time picker"
            class="clock-icon-trigger"
            color="tertiary"
            disabled={this.disabled || this.readOnly}
            shape="square"
            size={this.size === 'lg' ? 'sm' : 'xs'}
            variant="borderless"
            onMouseDown={this.handleClockMouseDown}
            onButtonClick={this.toggleDropdown}
          >
            <modus-wc-icon
              name="clock"
              size={this.size === 'lg' ? 'sm' : 'xs'}
              decorative
            />
          </modus-wc-button>
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
          (this.useDatalist ? (
            <TimeDatalistDropdown {...dropdownProps} />
          ) : (
            <TimePickerDropdown {...dropdownProps} />
          ))}

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
