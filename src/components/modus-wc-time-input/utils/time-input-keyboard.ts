import {
  clampTime,
  format24h,
  parseExternalTimeValue,
  TimeFormat,
} from './time-format';
import {
  applyStepToSegment,
  clearSegmentInDisplay,
  getNextSegment,
  getPrevSegment,
  getSegments,
  ITimeSegment,
  SegmentKind,
  setSegmentToBound,
  typeDigitInSegment,
} from './time-segments';

export function isAllowedInsertText(
  text: string,
  segment: ITimeSegment
): boolean {
  for (const char of text) {
    if (segment.kind === 'period') {
      if (!/^[apAP]$/.test(char)) {
        return false;
      }
    } else if (!/^\d$/.test(char)) {
      return false;
    }
  }
  return true;
}

export interface ITimeInputKeyboardContext {
  disabled: boolean;
  readOnly: boolean;
  displayValue: string;
  effectiveShowSeconds: boolean;
  resolvedFormat: TimeFormat;
  minuteStep: number;
  secondStep: number;
  min?: string;
  max?: string;
  getActiveSegment: () => ITimeSegment;
  selectSegment: (segment: ITimeSegment) => void;
  commitDisplay: (display: string, activeKind: SegmentKind) => void;
  openDropdown: () => void;
  closeDropdown: () => void;
  getSegmentDigitBuffer: () => string;
  setSegmentDigitBuffer: (buffer: string) => void;
  setActiveSegmentKind: (kind: SegmentKind) => void;
  setPendingSegmentSelect: (kind: SegmentKind) => void;
  emitParsedTime: (next24h: string) => void;
  showDropdown: boolean;
  useDatalist: boolean;
  focusDatalistOption: () => void;
}

type IExternalTimeContext = Pick<
  ITimeInputKeyboardContext,
  | 'effectiveShowSeconds'
  | 'resolvedFormat'
  | 'min'
  | 'max'
  | 'emitParsedTime'
  | 'setPendingSegmentSelect'
>;

function applyExternalTimeValue(
  raw: string,
  ctx: IExternalTimeContext
): boolean {
  const parsed = parseExternalTimeValue(
    raw,
    ctx.effectiveShowSeconds,
    ctx.resolvedFormat
  );
  if (!parsed) {
    return false;
  }
  const clamped = clampTime(parsed, ctx.min, ctx.max);
  const next24h = format24h(clamped, ctx.effectiveShowSeconds);
  ctx.emitParsedTime(next24h);
  ctx.setPendingSegmentSelect('hour');
  return true;
}

function isBrowserAutofillInsert(inputType: string, data: string): boolean {
  return (
    inputType === 'insertReplacementText' ||
    inputType === 'insertFromAutocomplete' ||
    (inputType === 'insertText' && data.length > 1)
  );
}

type ITypedCharacterContext = Pick<
  ITimeInputKeyboardContext,
  | 'displayValue'
  | 'effectiveShowSeconds'
  | 'resolvedFormat'
  | 'getActiveSegment'
  | 'getSegmentDigitBuffer'
  | 'setSegmentDigitBuffer'
  | 'setActiveSegmentKind'
  | 'setPendingSegmentSelect'
  | 'commitDisplay'
>;

/**
 * Apply a single typed character to the active segment. `beforeinput` is the
 * only caller: soft keyboards report `Unidentified` on `keydown`, and letting
 * both events write would insert a desktop keystroke twice.
 */
export function applyTypedCharacter(
  char: string,
  ctx: ITypedCharacterContext
): boolean {
  const seg = ctx.getActiveSegment();
  if (!isAllowedInsertText(char, seg)) {
    return false;
  }

  const result = typeDigitInSegment(
    ctx.displayValue,
    seg,
    char,
    ctx.getSegmentDigitBuffer(),
    ctx.resolvedFormat
  );
  ctx.setSegmentDigitBuffer(result.buffer);
  const nextSeg = result.advance
    ? getNextSegment(seg, ctx.effectiveShowSeconds, ctx.resolvedFormat)
    : seg;
  ctx.setActiveSegmentKind(nextSeg.kind);
  ctx.commitDisplay(result.display, nextSeg.kind);
  if (result.advance) {
    ctx.setPendingSegmentSelect(nextSeg.kind);
  }
  return true;
}

export function handleTimeInputBeforeInput(
  event: InputEvent,
  ctx: Pick<
    ITimeInputKeyboardContext,
    'disabled' | 'readOnly' | 'min' | 'max' | 'emitParsedTime'
  > &
    ITypedCharacterContext
): void {
  if (ctx.disabled || ctx.readOnly) {
    return;
  }

  const data = event.data ?? '';
  if (isBrowserAutofillInsert(event.inputType, data)) {
    event.preventDefault();
    applyExternalTimeValue(data, ctx);
    return;
  }

  if (
    event.inputType !== 'insertText' &&
    event.inputType !== 'insertCompositionText'
  ) {
    return;
  }
  if (!data) {
    return;
  }

  // The segmented field never accepts a native insert; every character is
  // written here so desktop, mobile and IME all take the same path.
  event.preventDefault();
  if (data.length === 1) {
    applyTypedCharacter(data, ctx);
  }
}

export function handleTimeInputPaste(
  event: ClipboardEvent,
  ctx: Pick<
    ITimeInputKeyboardContext,
    | 'disabled'
    | 'readOnly'
    | 'effectiveShowSeconds'
    | 'resolvedFormat'
    | 'min'
    | 'max'
    | 'emitParsedTime'
    | 'setPendingSegmentSelect'
  >
): void {
  if (ctx.disabled || ctx.readOnly) {
    return;
  }
  const pasted = event.clipboardData?.getData('text')?.trim();
  if (!pasted) {
    return;
  }
  event.preventDefault();
  applyExternalTimeValue(pasted, ctx);
}

export function handleTimeInputInput(
  event: InputEvent,
  ctx: Pick<
    ITimeInputKeyboardContext,
    | 'disabled'
    | 'readOnly'
    | 'displayValue'
    | 'effectiveShowSeconds'
    | 'resolvedFormat'
    | 'min'
    | 'max'
    | 'emitParsedTime'
    | 'setPendingSegmentSelect'
  > & {
    revertDisplay: () => void;
  }
): void {
  if (ctx.disabled || ctx.readOnly) {
    return;
  }

  const raw = (event.target as HTMLInputElement | null)?.value ?? '';
  if (raw === ctx.displayValue) {
    return;
  }

  if (!applyExternalTimeValue(raw, ctx)) {
    ctx.revertDisplay();
  }
}

export function handleTimeInputKeyDown(
  event: KeyboardEvent,
  ctx: ITimeInputKeyboardContext
): void {
  if (ctx.disabled || ctx.readOnly) {
    return;
  }

  if (
    ctx.showDropdown &&
    ctx.useDatalist &&
    event.key === 'ArrowDown' &&
    !event.altKey
  ) {
    event.preventDefault();
    ctx.focusDatalistOption();
    return;
  }

  const seg = ctx.getActiveSegment();

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    const next = applyStepToSegment(
      ctx.displayValue,
      seg,
      1,
      ctx.effectiveShowSeconds,
      ctx.resolvedFormat,
      ctx.minuteStep,
      ctx.secondStep
    );
    ctx.commitDisplay(next, seg.kind);
    return;
  }

  if (event.key === 'ArrowDown') {
    if (event.altKey) {
      event.preventDefault();
      ctx.openDropdown();
      return;
    }
    event.preventDefault();
    const next = applyStepToSegment(
      ctx.displayValue,
      seg,
      -1,
      ctx.effectiveShowSeconds,
      ctx.resolvedFormat,
      ctx.minuteStep,
      ctx.secondStep
    );
    ctx.commitDisplay(next, seg.kind);
    return;
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    ctx.selectSegment(
      getPrevSegment(seg, ctx.effectiveShowSeconds, ctx.resolvedFormat)
    );
    return;
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    ctx.selectSegment(
      getNextSegment(seg, ctx.effectiveShowSeconds, ctx.resolvedFormat)
    );
    return;
  }

  if (event.key === 'Tab') {
    const segments = getSegments(ctx.effectiveShowSeconds, ctx.resolvedFormat);
    const segmentIndex = segments.findIndex((s) => s.kind === seg.kind);
    if (event.shiftKey) {
      if (segmentIndex > 0) {
        event.preventDefault();
        ctx.selectSegment(
          getPrevSegment(seg, ctx.effectiveShowSeconds, ctx.resolvedFormat)
        );
      }
    } else if (segmentIndex < segments.length - 1) {
      event.preventDefault();
      ctx.selectSegment(
        getNextSegment(seg, ctx.effectiveShowSeconds, ctx.resolvedFormat)
      );
    }
    return;
  }

  if (event.key === 'Home') {
    event.preventDefault();
    const next = setSegmentToBound(
      ctx.displayValue,
      seg,
      'min',
      ctx.effectiveShowSeconds,
      ctx.resolvedFormat
    );
    ctx.commitDisplay(next, seg.kind);
    return;
  }

  if (event.key === 'End') {
    event.preventDefault();
    const next = setSegmentToBound(
      ctx.displayValue,
      seg,
      'max',
      ctx.effectiveShowSeconds,
      ctx.resolvedFormat
    );
    ctx.commitDisplay(next, seg.kind);
    return;
  }

  if (event.key === 'Backspace' || event.key === 'Delete') {
    event.preventDefault();
    const next = clearSegmentInDisplay(
      ctx.displayValue,
      seg,
      ctx.effectiveShowSeconds,
      ctx.resolvedFormat
    );
    ctx.setSegmentDigitBuffer('');
    ctx.commitDisplay(next, seg.kind);
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    ctx.closeDropdown();
    return;
  }

  // Printable keys deliberately fall through: `beforeinput` owns character
  // input, and cancelling here would stop that event from ever firing.
}

export function bindBeforeInputListener(
  previousInput: HTMLInputElement | undefined,
  nextInput: HTMLInputElement | undefined,
  handler: (event: InputEvent) => void
): void {
  if (previousInput) {
    previousInput.removeEventListener('beforeinput', handler);
  }
  if (nextInput) {
    nextInput.addEventListener('beforeinput', handler);
  }
}

export function unbindBeforeInputListener(
  input: HTMLInputElement | undefined,
  handler: (event: InputEvent) => void
): void {
  if (input) {
    input.removeEventListener('beforeinput', handler);
  }
}
