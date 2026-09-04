import {
  clampTime,
  format24h,
  parse24h,
  parseDisplay,
  TimeFormat,
} from './time-format';
import {
  applyStepToSegment,
  clearSegmentInDisplay,
  getNextSegment,
  getPrevSegment,
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
}

export function handleTimeInputBeforeInput(
  event: InputEvent,
  ctx: Pick<
    ITimeInputKeyboardContext,
    'disabled' | 'readOnly' | 'getActiveSegment'
  >
): void {
  if (ctx.disabled || ctx.readOnly) {
    return;
  }
  if (
    event.inputType !== 'insertText' &&
    event.inputType !== 'insertCompositionText'
  ) {
    return;
  }
  const data = event.data ?? '';
  if (!data) {
    return;
  }
  if (!isAllowedInsertText(data, ctx.getActiveSegment())) {
    event.preventDefault();
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

  const parsed =
    parse24h(pasted) ??
    parseDisplay(pasted, ctx.effectiveShowSeconds, ctx.resolvedFormat);
  if (!parsed) {
    return;
  }
  const clamped = clampTime(parsed, ctx.min, ctx.max);
  const next24h = format24h(clamped, ctx.effectiveShowSeconds);
  ctx.emitParsedTime(next24h);
  ctx.setPendingSegmentSelect('hour');
}

export function handleTimeInputKeyDown(
  event: KeyboardEvent,
  ctx: ITimeInputKeyboardContext
): void {
  if (ctx.disabled || ctx.readOnly) {
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

  if (/^\d$/.test(event.key)) {
    event.preventDefault();
    const result = typeDigitInSegment(
      ctx.displayValue,
      seg,
      event.key,
      ctx.getSegmentDigitBuffer(),
      ctx.resolvedFormat
    );
    ctx.setSegmentDigitBuffer(result.buffer);
    const nextKind = result.advance
      ? getNextSegment(seg, ctx.effectiveShowSeconds, ctx.resolvedFormat).kind
      : seg.kind;
    ctx.setActiveSegmentKind(nextKind);
    ctx.commitDisplay(result.display, nextKind);
    if (result.advance) {
      const nextSeg = getNextSegment(
        seg,
        ctx.effectiveShowSeconds,
        ctx.resolvedFormat
      );
      ctx.setPendingSegmentSelect(nextSeg.kind);
    }
    return;
  }

  if (
    ctx.resolvedFormat === '12hrs' &&
    seg.kind === 'period' &&
    /^[apAP]$/.test(event.key)
  ) {
    event.preventDefault();
    const result = typeDigitInSegment(
      ctx.displayValue,
      seg,
      event.key,
      '',
      ctx.resolvedFormat
    );
    ctx.commitDisplay(result.display, seg.kind);
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
