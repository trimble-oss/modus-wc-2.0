import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcTimeInput } from './modus-wc-time-input';
import {
  format12hDisplay,
  format24h,
  formatDisplay,
  parse12hDisplay,
  parse24h,
  parseExternalTimeValue,
  toHours24,
} from './utils/time-format';
import {
  handleTimeInputKeyDown,
  ITimeInputKeyboardContext,
} from './utils/time-input-keyboard';
import {
  handleDatalistOptionKeyDown,
  handleWheelOptionKeyDown,
  moveListboxFocus,
} from './utils/time-listbox-keyboard';
import {
  buildCircularWheelOptions,
  buildDatalistOptions,
  getHourOptions,
  isWheelOptionInRange,
  resolveWheelState,
  TIME_WHEEL_LOOP_COPIES,
  valueFromWheelState,
} from './utils/time-options';
import {
  resolveFocusableDatalistValue,
  resolveFocusableWheelKey,
} from './utils/time-picker-dropdown';
import {
  applyStepToSegment,
  displayFromValue,
  getSkeleton,
  isSkeletonDisplayComplete,
  parseSkeletonDisplay,
  typeDigitInSegment,
} from './utils/time-segments';
import {
  bindCircularWheelListeners,
  getCircularSetHeight,
  getPreferredSelectedOption,
  getWheelViewportKind,
  maintainCircularScroll,
  restoreWheelScrollPositions,
  saveWheelScrollPositions,
  scrollWheelOptionIntoView,
} from './utils/time-wheel-scroll';

/**
 * mock-doc's `classList` getter returns a fresh `MockClassList` wrapper
 * (backed by `className`) on every access, and that wrapper has no working
 * `Symbol.iterator` implementation - `Array.from(el.classList)` yields
 * `[undefined, undefined]` instead of the class names. Real browsers
 * support iterating `DOMTokenList` directly, which the component relies on
 * (see `getWheelViewportKind`). Patch the shared prototype once so any
 * `classList` accessed off a mock element behaves like it would in a
 * browser.
 */
function patchMockClassListIterator(el: HTMLElement) {
  const proto = Object.getPrototypeOf(el.classList) as {
    [Symbol.iterator]?: () => Iterator<string | undefined>;
    length: number;
    item(index: number): string | null;
  };
  if (typeof proto[Symbol.iterator] === 'function') {
    return;
  }
  proto[Symbol.iterator] = function (this: typeof proto) {
    let i = 0;
    return {
      next: () =>
        i < this.length
          ? { value: this.item(i++) ?? undefined, done: false as const }
          : { value: undefined, done: true as const },
    };
  };
}

function captureRaf() {
  const callbacks: FrameRequestCallback[] = [];
  const spy = jest
    .spyOn(globalThis, 'requestAnimationFrame')
    .mockImplementation((cb: FrameRequestCallback) => {
      callbacks.push(cb);
      return callbacks.length;
    });
  return {
    run: () => callbacks.forEach((cb) => cb(0)),
    restore: () => spy.mockRestore(),
  };
}

function stubActiveElement(element: Element | null) {
  const descriptor = Object.getOwnPropertyDescriptor(document, 'activeElement');
  Object.defineProperty(document, 'activeElement', {
    get: () => element,
    configurable: true,
  });
  return () => {
    if (descriptor) {
      Object.defineProperty(document, 'activeElement', descriptor);
      return;
    }
    delete (document as unknown as Record<string, unknown>).activeElement;
  };
}

describe('time-format utils', () => {
  it('should convert 12h to 24h hours', () => {
    expect(toHours24(12, 'AM')).toBe(0);
    expect(toHours24(9, 'AM')).toBe(9);
    expect(toHours24(12, 'PM')).toBe(12);
    expect(toHours24(1, 'PM')).toBe(13);
  });

  it('should parse and format 24h values', () => {
    expect(parse24h('09:45')).toEqual({
      hours24: 9,
      minutes: 45,
      seconds: 0,
    });
    expect(format24h({ hours24: 9, minutes: 45, seconds: 0 }, false)).toBe(
      '09:45'
    );
    expect(format24h({ hours24: 9, minutes: 45, seconds: 7 }, true)).toBe(
      '09:45:07'
    );
  });

  it('should format and parse 12h display', () => {
    expect(
      format12hDisplay({ hours24: 9, minutes: 45, seconds: 0 }, false)
    ).toBe('09:45 AM');
    expect(
      format12hDisplay({ hours24: 21, minutes: 5, seconds: 0 }, false)
    ).toBe('09:05 PM');
    expect(parse12hDisplay('09:45 AM', false)).toEqual({
      hours24: 9,
      minutes: 45,
      seconds: 0,
    });
    expect(parse12hDisplay('09:45:00 PM', true)).toEqual({
      hours24: 21,
      minutes: 45,
      seconds: 0,
    });
  });

  it('should format display based on hour format', () => {
    const time = { hours24: 21, minutes: 45, seconds: 0 };
    expect(formatDisplay(time, false, '24hrs')).toBe('21:45');
    expect(formatDisplay(time, false, '12hrs')).toBe('09:45 PM');
  });

  it('should parse external autofill values into the active field shape', () => {
    expect(parseExternalTimeValue('09:45:00 AM', false, '24hrs')).toEqual({
      hours24: 9,
      minutes: 45,
      seconds: 0,
    });
    expect(parseExternalTimeValue('09:45:00', false, '24hrs')).toEqual({
      hours24: 9,
      minutes: 45,
      seconds: 0,
    });
    expect(parseExternalTimeValue('09:45:00 AM', true, '12hrs')).toEqual({
      hours24: 9,
      minutes: 45,
      seconds: 0,
    });
    expect(parseExternalTimeValue('09:45:00 A', false, '24hrs')).toBeNull();
  });
});

describe('time-options utils', () => {
  it('should build circular wheel options for looping', () => {
    const hours = getHourOptions('12hrs');
    const looped = buildCircularWheelOptions(hours);
    expect(hours.length).toBe(12);
    expect(looped.length).toBe(12 * TIME_WHEEL_LOOP_COPIES);
    expect(looped[0].value).toBe(looped[12].value);
    expect(looped[11].label).toBe('12');
    expect(looped[12].label).toBe('01');
  });

  it('should build datalist from explicit options', () => {
    const opts = buildDatalistOptions({
      options: ['09:15', '09:30'],
      showSeconds: false,
      format: '12hrs',
    });
    expect(opts).toEqual([
      { value: '09:15', label: '09:15 AM' },
      { value: '09:30', label: '09:30 AM' },
    ]);
  });

  it('should build datalist labels in 24h format by default', () => {
    const opts = buildDatalistOptions({
      options: ['09:15', '21:30'],
      showSeconds: false,
    });
    expect(opts).toEqual([
      { value: '09:15', label: '09:15' },
      { value: '21:30', label: '21:30' },
    ]);
  });

  it('should generate interval options', () => {
    const opts = buildDatalistOptions({
      intervalMinutes: 30,
      min: '09:00',
      max: '10:00',
      showSeconds: false,
    });
    expect(opts.map((o) => o.value)).toEqual(['09:00', '09:30', '10:00']);
  });

  it('should filter explicit datalist options by min and max', () => {
    const opts = buildDatalistOptions({
      options: ['08:00', '09:00', '18:00'],
      min: '09:00',
      max: '12:00',
      showSeconds: false,
    });
    expect(opts.map((o) => o.value)).toEqual(['09:00']);
  });

  it('should mark wheel rows out of min/max as disabled candidates', () => {
    const state = resolveWheelState('09:30', false, '24hrs');
    expect(
      isWheelOptionInRange('hours', '23', state, {
        showSeconds: false,
        hourFormat: '24hrs',
        max: '18:00',
      })
    ).toBe(false);
    expect(
      isWheelOptionInRange('hours', '9', state, {
        showSeconds: false,
        hourFormat: '24hrs',
        max: '18:00',
      })
    ).toBe(true);
  });

  it('should keep an hour selectable when only some of its minutes are in range', () => {
    // 09:00 is below min, but 09:30 is not, so the hour must stay selectable.
    const atHourStart = resolveWheelState('09:00', false, '24hrs');
    expect(
      isWheelOptionInRange('hours', '9', atHourStart, {
        showSeconds: false,
        hourFormat: '24hrs',
        min: '09:30',
      })
    ).toBe(true);

    // Mirror case: 10:45 is past max, but 10:00 is not.
    const atHourEnd = resolveWheelState('10:45', false, '24hrs');
    expect(
      isWheelOptionInRange('hours', '10', atHourEnd, {
        showSeconds: false,
        hourFormat: '24hrs',
        max: '10:15',
      })
    ).toBe(true);
  });

  it('should limit minute rows to the selected hour', () => {
    const state = resolveWheelState('09:45', false, '24hrs');
    const params = {
      showSeconds: false,
      hourFormat: '24hrs' as const,
      min: '09:30',
      max: '10:15',
    };
    expect(isWheelOptionInRange('minutes', '0', state, params)).toBe(false);
    expect(isWheelOptionInRange('minutes', '45', state, params)).toBe(true);

    const nextHour = resolveWheelState('10:00', false, '24hrs');
    expect(isWheelOptionInRange('minutes', '45', nextHour, params)).toBe(false);
    expect(isWheelOptionInRange('minutes', '15', nextHour, params)).toBe(true);
  });

  it('should disable a period that falls entirely outside min and max', () => {
    const state = resolveWheelState('14:00', false, '12hrs');
    const params = {
      showSeconds: false,
      hourFormat: '12hrs' as const,
      min: '13:00',
      max: '17:00',
    };
    expect(isWheelOptionInRange('period', 'AM', state, params)).toBe(false);
    expect(isWheelOptionInRange('period', 'PM', state, params)).toBe(true);
  });

  it('should allow every row when no bounds are set', () => {
    const state = resolveWheelState('09:30', true, '24hrs');
    expect(
      isWheelOptionInRange('seconds', '30', state, {
        showSeconds: true,
        hourFormat: '24hrs',
      })
    ).toBe(true);
  });

  it('should treat seconds as an exact point against the bounds', () => {
    const state = resolveWheelState('10:15:00', true, '24hrs');
    const params = {
      showSeconds: true,
      hourFormat: '24hrs' as const,
      max: '10:15:30',
    };
    expect(isWheelOptionInRange('seconds', '30', state, params)).toBe(true);
    expect(isWheelOptionInRange('seconds', '31', state, params)).toBe(false);
  });

  it('should build 24h value from wheel state', () => {
    expect(
      valueFromWheelState(
        { hour: 9, minutes: 45, seconds: 0, period: 'AM' },
        false,
        '12hrs'
      )
    ).toBe('09:45');
    expect(
      valueFromWheelState(
        { hour: 12, minutes: 0, seconds: 0, period: 'AM' },
        false,
        '12hrs'
      )
    ).toBe('00:00');
    expect(
      valueFromWheelState(
        { hour: 21, minutes: 45, seconds: 0, period: 'PM' },
        false,
        '24hrs'
      )
    ).toBe('21:45');
  });
});

describe('time-segments utils', () => {
  it('should expose native skeleton templates', () => {
    expect(getSkeleton(false, '24hrs')).toBe('--:--');
    expect(getSkeleton(true, '24hrs')).toBe('--:--:--');
    expect(getSkeleton(false, '12hrs')).toBe('--:-- --');
    expect(getSkeleton(true, '12hrs')).toBe('--:--:-- --');
  });

  it('should parse and validate complete skeleton displays', () => {
    expect(isSkeletonDisplayComplete('09:45', false, '24hrs')).toBe(true);
    expect(parseSkeletonDisplay('09:45', false, '24hrs')).toEqual({
      hours24: 9,
      minutes: 45,
      seconds: 0,
    });
    expect(displayFromValue('21:30', false, '12hrs')).toBe('09:30 PM');
  });

  it('should pad the first typed digit to two digits without hyphen placeholders', () => {
    const hourSeg = { kind: 'hour' as const, start: 0, end: 2 };
    let display = getSkeleton(false, '24hrs');

    let result = typeDigitInSegment(display, hourSeg, '1', '', '24hrs');
    expect(result.display).toBe('01:--');
    expect(result.advance).toBe(false);

    result = typeDigitInSegment(
      result.display,
      hourSeg,
      '2',
      result.buffer,
      '24hrs'
    );
    expect(result.display).toBe('12:--');
    expect(result.advance).toBe(true);

    display = getSkeleton(false, '24hrs');
    result = typeDigitInSegment(display, hourSeg, '2', '', '24hrs');
    result = typeDigitInSegment(
      result.display,
      hourSeg,
      '8',
      result.buffer,
      '24hrs'
    );
    expect(result.display).toBe('23:--');

    display = getSkeleton(false, '24hrs');
    result = typeDigitInSegment(display, hourSeg, '3', '', '24hrs');
    expect(result.display).toBe('03:--');
    expect(result.advance).toBe(true);

    const minuteSeg = { kind: 'minute' as const, start: 3, end: 5 };
    display = '12:--';
    result = typeDigitInSegment(display, minuteSeg, '4', '', '24hrs');
    expect(result.display).toBe('12:04');
    expect(result.advance).toBe(false);
  });

  it('should type digits into segments with auto-advance', () => {
    let display = getSkeleton(false, '24hrs');
    const hourSeg = { kind: 'hour' as const, start: 0, end: 2 };
    const minuteSeg = { kind: 'minute' as const, start: 3, end: 5 };

    let result = typeDigitInSegment(display, hourSeg, '0', '', '24hrs');
    display = result.display;
    result = typeDigitInSegment(display, hourSeg, '9', result.buffer, '24hrs');
    display = result.display;
    expect(result.advance).toBe(true);

    result = typeDigitInSegment(display, minuteSeg, '4', '', '24hrs');
    display = result.display;
    result = typeDigitInSegment(
      display,
      minuteSeg,
      '5',
      result.buffer,
      '24hrs'
    );
    display = result.display;

    expect(isSkeletonDisplayComplete(display, false, '24hrs')).toBe(true);
    expect(parseSkeletonDisplay(display, false, '24hrs')).toEqual({
      hours24: 9,
      minutes: 45,
      seconds: 0,
    });
  });

  it('should step segments in place', () => {
    const display = '09:00';
    const hourSeg = { kind: 'hour' as const, start: 0, end: 2 };
    const stepped = applyStepToSegment(display, hourSeg, -1, false, '24hrs');
    expect(stepped).toBe('08:00');
  });

  it('should enter the range on the first step of an empty segment', () => {
    const hourSeg = { kind: 'hour' as const, start: 0, end: 2 };
    const minuteSeg = { kind: 'minute' as const, start: 3, end: 5 };
    const secondSeg = { kind: 'second' as const, start: 6, end: 8 };

    // Up enters at the lowest value rather than stepping past it.
    expect(applyStepToSegment('--:--', hourSeg, 1, false, '24hrs')).toBe(
      '00:00'
    );
    expect(applyStepToSegment('--:--', hourSeg, -1, false, '24hrs')).toBe(
      '23:00'
    );
    expect(applyStepToSegment('--:--', minuteSeg, 1, false, '24hrs')).toBe(
      '00:00'
    );
    expect(applyStepToSegment('--:--', minuteSeg, -1, false, '24hrs')).toBe(
      '00:59'
    );
    expect(applyStepToSegment('--:--:--', secondSeg, 1, true, '24hrs')).toBe(
      '00:00:00'
    );
    expect(applyStepToSegment('--:--:--', secondSeg, -1, true, '24hrs')).toBe(
      '00:00:59'
    );
  });

  it('should honour the step when entering an empty minute or second', () => {
    const minuteSeg = { kind: 'minute' as const, start: 3, end: 5 };
    const secondSeg = { kind: 'second' as const, start: 6, end: 8 };

    expect(applyStepToSegment('--:--', minuteSeg, -1, false, '24hrs', 15)).toBe(
      '00:45'
    );
    expect(
      applyStepToSegment('--:--:--', secondSeg, -1, true, '24hrs', 1, 15)
    ).toBe('00:00:45');
  });

  it('should enter an empty 12-hour clock on 01 going up and 12 going down', () => {
    const hourSeg = { kind: 'hour' as const, start: 0, end: 2 };
    const periodSeg = { kind: 'period' as const, start: 6, end: 8 };

    expect(applyStepToSegment('--:-- --', hourSeg, 1, false, '12hrs')).toBe(
      '01:00 AM'
    );
    expect(applyStepToSegment('--:-- --', hourSeg, -1, false, '12hrs')).toBe(
      '12:00 AM'
    );
    // An untouched period enters on AM instead of toggling to PM.
    expect(applyStepToSegment('--:-- --', periodSeg, 1, false, '12hrs')).toBe(
      '12:00 AM'
    );
  });
});

/**
 * Pin the wall clock without fake timers, which would stall Stencil's
 * `waitForChanges`.
 */
/** `beforeinput` is the only writer for typed characters. */
function createInsertTextEvent(data: string): InputEvent {
  const event = new Event('beforeinput', {
    bubbles: true,
    cancelable: true,
  }) as InputEvent;
  Object.defineProperty(event, 'inputType', { value: 'insertText' });
  Object.defineProperty(event, 'data', { value: data });
  return event;
}

function mockNow(hours: number, minutes: number, seconds = 0): () => void {
  const spies = [
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(hours),
    jest.spyOn(Date.prototype, 'getMinutes').mockReturnValue(minutes),
    jest.spyOn(Date.prototype, 'getSeconds').mockReturnValue(seconds),
  ];
  return () => spies.forEach((spy) => spy.mockRestore());
}

describe('modus-wc-time-input', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input datalist-id="test-list"></modus-wc-time-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: `<modus-wc-time-input
                aria-describedby="desc"
                aria-label="Time input"
                auto-complete="on"
                bordered
                custom-class="custom"
                disabled
                input-id="time-input"
                input-tab-index="1"
                label="Test label"
                max="23:59"
                min="00:00"
                name="time"
                read-only
                required
                show-seconds
                size="lg"
                step="30"
                value="12:00">
              </modus-wc-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcInputLabel],
      html: '<modus-wc-time-input label="Start time"></modus-wc-time-input>',
    });

    expectLabelLinkedToControl(page.root!, 'input[type="text"]');

    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    expect(input.hasAttribute('aria-label')).toBe(false);
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcInputFeedback],
      html: '<modus-wc-time-input aria-label="Error input"></modus-wc-time-input>',
    });

    const component = page.rootInstance as ModusWcTimeInput;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Blur test"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    input!.dispatchEvent(new FocusEvent('focus'));
    input!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event when typing a complete time', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Change test"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    for (const digit of ['0', '9', '4', '5']) {
      input.dispatchEvent(createInsertTextEvent(digit));
      await page.waitForChanges();
    }

    expect(changeSpy).toHaveBeenCalled();
    const component = page.rootInstance as ModusWcTimeInput;
    expect(component.value).toBe('09:45');
  });

  it('should clear only the active segment without wiping the stored value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Clear segments" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input.dispatchEvent(new FocusEvent('focus'));
    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Backspace',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(changeSpy).not.toHaveBeenCalled();
    expect(component.value).toBe('09:00');
    expect(
      (component as unknown as { displayValue: string }).displayValue
    ).toBe('--:00');
  });

  it('should emit focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Focus test"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should display 24h value by default', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Value test" value="21:30"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('21:30');
  });

  it('should display formatted 12h value while keeping 24h internal value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Value test" format="12hrs" value="21:30"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const component = page.rootInstance as ModusWcTimeInput;
    expect(input.type).toBe('text');
    expect(input.value).toBe('09:30 PM');
    expect(component.value).toBe('21:30');
  });

  it('should display value in 24hrs format when format is 24hrs', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Value test" value="21:30"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('21:30');
  });

  it('should open picker dropdown with 2 wheels in 24h mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const raf = captureRaf();

    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    const focusableOption = page.root!.querySelector<HTMLElement>(
      '.time-wheel-option[tabindex="0"]'
    );
    const optionFocusSpy = focusableOption
      ? jest.spyOn(focusableOption, 'focus')
      : null;

    raf.run();
    raf.restore();

    const wheels = page.root!.querySelectorAll('.time-wheel-viewport');
    expect(wheels.length).toBe(2);
    if (optionFocusSpy) {
      expect(optionFocusSpy).toHaveBeenCalled();
    }
    const hours = page.root!.querySelector(
      '.time-wheel-viewport--hours'
    ) as HTMLElement;
    expect(hours.dataset.circular).toBe('true');
    expect(hours.querySelectorAll('.time-wheel-option').length).toBe(
      24 * TIME_WHEEL_LOOP_COPIES
    );
  });

  it('should open picker dropdown with 3 wheels in 12h mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker 12" format="12hrs" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const wheels = page.root!.querySelectorAll('.time-wheel-viewport');
    expect(wheels.length).toBe(3);
  });

  it('should open picker dropdown with 3 wheels when showSeconds in 24h', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker seconds" show-seconds value="09:45:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const wheels = page.root!.querySelectorAll('.time-wheel-viewport');
    expect(wheels.length).toBe(3);
  });

  it('should open picker dropdown with 4 wheels when showSeconds in 12h', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker seconds 12" format="12hrs" show-seconds value="09:45:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const wheels = page.root!.querySelectorAll('.time-wheel-viewport');
    expect(wheels.length).toBe(4);
  });

  it('should seed the picker with the current time when the value is empty', async () => {
    const restoreNow = mockNow(14, 37);
    try {
      const page = await newSpecPage({
        components: [ModusWcTimeInput, ModusWcButton],
        html: '<modus-wc-time-input aria-label="Seed now"></modus-wc-time-input>',
      });
      const component = page.rootInstance as ModusWcTimeInput;
      const changeSpy = jest.fn();
      page.root!.addEventListener('inputChange', changeSpy);

      (component as unknown as { openDropdown: () => void }).openDropdown();
      await page.waitForChanges();

      const selectedHour = page.root!.querySelector(
        '.time-wheel--hours .time-wheel-option.is-selected:not([aria-hidden="true"])'
      ) as HTMLElement;
      const selectedMinute = page.root!.querySelector(
        '.time-wheel--minutes .time-wheel-option.is-selected:not([aria-hidden="true"])'
      ) as HTMLElement;

      expect(selectedHour.dataset.value).toBe('14');
      expect(selectedMinute.dataset.value).toBe('37');
      // Seeding only previews the rows; it must not commit a value.
      expect(component.value).toBe('');
      expect(changeSpy).not.toHaveBeenCalled();
    } finally {
      restoreNow();
    }
  });

  it('should round the seeded time down to a row the wheel renders', async () => {
    const restoreNow = mockNow(9, 37);
    try {
      const page = await newSpecPage({
        components: [ModusWcTimeInput, ModusWcButton],
        html: '<modus-wc-time-input aria-label="Seed step" step="900"></modus-wc-time-input>',
      });
      const component = page.rootInstance as ModusWcTimeInput;
      (component as unknown as { openDropdown: () => void }).openDropdown();
      await page.waitForChanges();

      const selectedMinute = page.root!.querySelector(
        '.time-wheel--minutes .time-wheel-option.is-selected:not([aria-hidden="true"])'
      ) as HTMLElement;
      expect(selectedMinute.dataset.value).toBe('30');
    } finally {
      restoreNow();
    }
  });

  it('should seed the seconds wheel when seconds are shown', async () => {
    const restoreNow = mockNow(10, 20, 35);
    try {
      const page = await newSpecPage({
        components: [ModusWcTimeInput, ModusWcButton],
        html: '<modus-wc-time-input aria-label="Seed seconds" show-seconds="true"></modus-wc-time-input>',
      });
      const component = page.rootInstance as ModusWcTimeInput;
      const harness = component as unknown as {
        openDropdown: () => void;
        pickerSeedValue: string | null;
      };

      harness.openDropdown();
      await page.waitForChanges();

      expect(harness.pickerSeedValue).toBe('10:20:35');
      const selectedSecond = page.root!.querySelector(
        '.time-wheel--seconds .time-wheel-option.is-selected:not([aria-hidden="true"])'
      ) as HTMLElement;
      expect(selectedSecond.dataset.value).toBe('35');
    } finally {
      restoreNow();
    }
  });

  it('should clamp the seeded time into min and max', async () => {
    const restoreNow = mockNow(6, 0);
    try {
      const page = await newSpecPage({
        components: [ModusWcTimeInput, ModusWcButton],
        html: '<modus-wc-time-input aria-label="Seed clamp" min="09:30" max="18:00"></modus-wc-time-input>',
      });
      const component = page.rootInstance as ModusWcTimeInput;
      (component as unknown as { openDropdown: () => void }).openDropdown();
      await page.waitForChanges();

      const selectedHour = page.root!.querySelector(
        '.time-wheel--hours .time-wheel-option.is-selected:not([aria-hidden="true"])'
      ) as HTMLElement;
      const selectedMinute = page.root!.querySelector(
        '.time-wheel--minutes .time-wheel-option.is-selected:not([aria-hidden="true"])'
      ) as HTMLElement;
      expect(selectedHour.dataset.value).toBe('9');
      expect(selectedMinute.dataset.value).toBe('30');
    } finally {
      restoreNow();
    }
  });

  it('should drop the seeded time once the picker closes', async () => {
    const restoreNow = mockNow(14, 0);
    try {
      const page = await newSpecPage({
        components: [ModusWcTimeInput, ModusWcButton],
        html: '<modus-wc-time-input aria-label="Seed cleared"></modus-wc-time-input>',
      });
      const component = page.rootInstance as ModusWcTimeInput;
      const harness = component as unknown as {
        openDropdown: () => void;
        closeDropdown: () => void;
        pickerSeedValue: string | null;
      };

      harness.openDropdown();
      await page.waitForChanges();
      expect(harness.pickerSeedValue).toBe('14:00');

      harness.closeDropdown();
      await page.waitForChanges();
      expect(harness.pickerSeedValue).toBeNull();
    } finally {
      restoreNow();
    }
  });

  it('should keep using the value instead of a seed when one is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Seed skipped" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const harness = component as unknown as {
      toggleDropdown: () => void;
      pickerSeedValue: string | null;
    };

    harness.toggleDropdown();
    await page.waitForChanges();

    expect(harness.pickerSeedValue).toBeNull();
    const selectedHour = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option.is-selected:not([aria-hidden="true"])'
    ) as HTMLElement;
    expect(selectedHour.dataset.value).toBe('9');
  });

  it('should commit a wheel pick made against the seeded time', async () => {
    const restoreNow = mockNow(14, 30);
    try {
      const page = await newSpecPage({
        components: [ModusWcTimeInput, ModusWcButton],
        html: '<modus-wc-time-input aria-label="Seed pick"></modus-wc-time-input>',
      });
      const component = page.rootInstance as ModusWcTimeInput;
      (component as unknown as { openDropdown: () => void }).openDropdown();
      await page.waitForChanges();

      const hour16 = page.root!.querySelector(
        '.time-wheel--hours .time-wheel-option[data-wheel-copy="1"][data-value="16"]'
      ) as HTMLElement;
      hour16.click();
      await page.waitForChanges();

      // Minutes come from the seed, not from midnight.
      expect(component.value).toBe('16:30');
    } finally {
      restoreNow();
    }
  });

  it('should disable wheel rows outside min and max', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel min max" value="09:30" max="18:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    const lateHour = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option[data-wheel-copy="1"][data-value="23"]'
    ) as HTMLElement;
    expect(lateHour.classList.contains('is-disabled')).toBe(true);
    expect(lateHour.getAttribute('aria-disabled')).toBe('true');
  });

  it('should let the keyboard leave a wheel row that sits outside min and max', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Disabled row escape" value="23:00" max="18:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    const selectedHour = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option[data-wheel-copy="1"][data-value="23"]'
    ) as HTMLElement;
    expect(selectedHour.getAttribute('aria-disabled')).toBe('true');

    const arrowUp = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      bubbles: true,
      cancelable: true,
    });
    selectedHour.dispatchEvent(arrowUp);
    raf.run();
    raf.restore();
    await page.waitForChanges();

    // 18 is the closest hour still inside max.
    expect(arrowUp.defaultPrevented).toBe(true);
    expect(component.value).toBe('18:00');
  });

  it('should keep a disabled wheel row from committing with Enter', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Disabled row enter" value="23:00" max="18:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    const selectedHour = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option[data-wheel-copy="1"][data-value="23"]'
    ) as HTMLElement;
    selectedHour.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(component.value).toBe('23:00');
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should move across wheels and to the edges from a disabled row', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Disabled row edges" value="23:00" max="18:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    const selectedHour = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option[data-wheel-copy="1"][data-value="23"]'
    ) as HTMLElement;
    const keydown = (key: string) => {
      const event = new KeyboardEvent('keydown', {
        key,
        bubbles: true,
        cancelable: true,
      });
      selectedHour.dispatchEvent(event);
      return event;
    };

    expect(keydown('ArrowRight').defaultPrevented).toBe(true);
    expect(keydown('ArrowLeft').defaultPrevented).toBe(true);

    const home = keydown('Home');
    raf.run();
    raf.restore();
    await page.waitForChanges();

    expect(home.defaultPrevented).toBe(true);
    expect(component.value).toBe('00:00');
  });

  it('should scroll the datalist to the selected option when it opens', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist scroll" variant="datalist" interval-minutes="15" value="08:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    const scroller = page.root!.querySelector('.time-datalist') as HTMLElement;
    const selected = page.root!.querySelector(
      '.time-datalist-option.is-selected'
    ) as HTMLElement;
    expect(selected.textContent?.trim()).toBe('08:00');

    // Selected row sits below the fold of the 16rem scroller.
    scroller.getBoundingClientRect = (): DOMRect =>
      ({ top: 0, bottom: 100 }) as DOMRect;
    selected.getBoundingClientRect = (): DOMRect =>
      ({ top: 260, bottom: 284 }) as DOMRect;
    scroller.scrollTop = 0;

    raf.run();
    raf.restore();

    expect(scroller.scrollTop).toBe(184);
  });

  it('should anchor the datalist on the nearest option when the value is off-grid', () => {
    const options = [
      { value: '08:00', label: '08:00' },
      { value: '08:15', label: '08:15' },
      { value: '08:30', label: '08:30' },
    ];
    expect(resolveFocusableDatalistValue(options, '08:15')).toBe('08:15');
    // 08:22 is not on the interval grid, so the closest row wins.
    expect(resolveFocusableDatalistValue(options, '08:22')).toBe('08:15');
    expect(resolveFocusableDatalistValue(options, '')).toBe('08:00');
    expect(resolveFocusableDatalistValue([], '08:00')).toBeUndefined();
  });

  it('should update value when a wheel option is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel click" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const hourOptions = page.root!.querySelectorAll(
      '.time-wheel--hours .time-wheel-option'
    );
    const ten = Array.from(hourOptions).find(
      (el) => el.textContent?.trim() === '10'
    );
    expect(ten).toBeTruthy();
    (ten as HTMLElement).click();
    await page.waitForChanges();

    expect(component.value).toBe('10:45');
    expect(changeSpy).toHaveBeenCalled();
  });

  it('should render datalist options and Other', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.datalistOptions = ['09:15', '09:30', '09:45'];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const options = page.root!.querySelectorAll('.time-datalist-option');
    // 3 times + Other
    expect(options.length).toBe(4);
    expect(options[options.length - 1].textContent?.trim()).toBe('Other');
  });

  it('should close datalist and set value on option select', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist select"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.datalistOptions = ['09:15', '09:30'];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const first = page.root!.querySelector(
      '.time-datalist-option'
    ) as HTMLElement;
    first.click();
    await page.waitForChanges();

    expect(component.value).toBe('09:15');
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should close dropdown on Escape', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Escape" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
    expect(component.value).toBe('09:00');
  });

  it('should close the picker on the first Escape when nothing was picked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Escape untouched" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (
      page.root!.querySelector(
        '.clock-icon-trigger button'
      ) as HTMLButtonElement
    ).click();
    await page.waitForChanges();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
    expect(component.value).toBe('09:00');
  });

  it('should revert to the value at open on the first Escape and close on the second', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Escape revert" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    (
      page.root!.querySelector(
        '.clock-icon-trigger button'
      ) as HTMLButtonElement
    ).click();
    await page.waitForChanges();

    page
      .root!.querySelector<HTMLElement>(
        '.time-wheel-viewport--hours .time-wheel-option[data-wheel-copy="1"][data-value="14"]'
      )!
      .click();
    await page.waitForChanges();
    expect(component.value).toBe('14:00');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    expect(component.value).toBe('09:00');
    expect(changeSpy).toHaveBeenCalledTimes(2);
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
    expect(component.value).toBe('09:00');
  });

  it('should close dropdown when clicking outside the component', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Outside click" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    document.dispatchEvent(
      new MouseEvent('pointerdown', { bubbles: true, composed: true })
    );
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should fall back to event.target when composedPath is unavailable', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="No composedPath" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    (
      component as unknown as {
        handleClickOutside: (event: {
          composedPath?: () => EventTarget[];
          target: EventTarget | null;
        }) => void;
      }
    ).handleClickOutside({ target: page.doc.body });
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should close dropdown when disabled becomes true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Disable close" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    page.root!.setAttribute('disabled', '');
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
    expect(page.root!.querySelector('.time-dropdown')).toBeNull();
  });

  it('should keep the dropdown open when the window blurs', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Window blur" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    window.dispatchEvent(new Event('blur'));
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should ignore outside click events while the dropdown is already closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Outside closed" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    expect(() =>
      document.dispatchEvent(
        new MouseEvent('pointerdown', { bubbles: true, composed: true })
      )
    ).not.toThrow();
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should keep isInvalid unchanged while focused when the value prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Focus watch"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;

    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    (component as unknown as { isInvalid: boolean }).isInvalid = true;

    component.value = '10:00';
    await page.waitForChanges();

    expect((component as unknown as { isInvalid: boolean }).isInvalid).toBe(
      true
    );
  });

  it('should reset isInvalid when the value prop changes while not focused', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Blurred watch"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { isInvalid: boolean }).isInvalid = true;

    component.value = '11:00';
    await page.waitForChanges();

    expect((component as unknown as { isInvalid: boolean }).isInvalid).toBe(
      false
    );
  });

  it('should apply the error class when isInvalid is true and no feedback is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Error class"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { isInvalid: boolean }).isInvalid = true;
    await page.waitForChanges();

    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.className).toContain('modus-wc-input--error');
  });

  it('should reset suppressBlurCommit and still emit inputBlur', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Suppress blur"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(new FocusEvent('focus'));
    (
      component as unknown as { suppressBlurCommit: boolean }
    ).suppressBlurCommit = true;
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
    expect(
      (component as unknown as { suppressBlurCommit: boolean })
        .suppressBlurCommit
    ).toBe(false);
  });

  it('should render the skeleton when value is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Skeleton"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    expect(input.value).toBe('--:--');
  });

  it('should submit the canonical 24h value through a hidden input', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Hidden name" name="start" value="09:30"></modus-wc-time-input>',
    });
    const hidden = page.root!.querySelector(
      'input[type="hidden"]'
    ) as HTMLInputElement;
    expect(hidden).not.toBeNull();
    expect(hidden.name).toBe('start');
    expect(hidden.value).toBe('09:30');
  });

  it('should not open the dropdown when the input is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Click open" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    (
      component as unknown as { handleInputClick: (e: MouseEvent) => void }
    ).handleInputClick({ preventDefault: jest.fn() } as unknown as MouseEvent);
    await page.waitForChanges();
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should default autocomplete to off', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Autocomplete default"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('autocomplete')).toBe('off');
  });

  it('should normalize browser autofill in beforeinput before it reaches the field', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Beforeinput autofill" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const event = new Event('beforeinput', {
      cancelable: true,
    }) as InputEvent;
    Object.defineProperty(event, 'inputType', {
      value: 'insertReplacementText',
    });
    Object.defineProperty(event, 'data', { value: '09:45:00 AM' });
    const preventSpy = jest.spyOn(event, 'preventDefault');

    (
      component as unknown as { handleBeforeInput: (e: InputEvent) => void }
    ).handleBeforeInput(event);
    await page.waitForChanges();

    expect(preventSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy.mock.calls[0][0].detail.target.value).toBe('09:45');
    expect(component.value).toBe('09:45');
    expect(input.value).toBe('09:45');
  });

  it('should normalize browser autofill input to the active display format', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Autofill normalize" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input.value = '09:45:00 AM';
    (
      component as unknown as { handleInput: (event: InputEvent) => void }
    ).handleInput({ target: input } as unknown as InputEvent);
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy.mock.calls[0][0].detail.target.value).toBe('09:45');
    expect(input.value).toBe('09:45');
    expect(component.value).toBe('09:45');
  });

  it('should revert invalid autofill input to the controlled display value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Autofill revert" value="09:00"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const component = page.rootInstance as ModusWcTimeInput;
    input.value = '09:45:00 A';
    (
      component as unknown as { handleInput: (event: InputEvent) => void }
    ).handleInput({ target: input } as unknown as InputEvent);
    await page.waitForChanges();

    expect(changeSpy).not.toHaveBeenCalled();
    expect(input.value).toBe('09:00');
  });

  it('should open the dropdown when the clock button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Clock open" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;

    button.click();
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should not emit inputBlur when focus moves to the clock button', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Clock blur" value="09:00"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    input.dispatchEvent(new FocusEvent('focus'));
    input.dispatchEvent(
      new FocusEvent('blur', { relatedTarget: button, bubbles: true })
    );
    await page.waitForChanges();

    expect(blurSpy).not.toHaveBeenCalled();
  });

  it('should focus the selected hour when the clock button opens the picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Clock focus" value="09:00"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    expect(focusSpy).toHaveBeenCalledTimes(1);

    const raf = captureRaf();
    button.click();
    await page.waitForChanges();

    const focusableOption = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--hours .time-wheel-option[tabindex="0"]'
    );
    expect(focusableOption?.dataset.value).toBe('9');
    const optionFocusSpy = jest.spyOn(focusableOption!, 'focus');

    raf.run();
    raf.restore();

    expect(focusSpy).toHaveBeenCalledTimes(1);
    expect(optionFocusSpy).toHaveBeenCalledWith({ preventScroll: true });
  });

  it('should not emit inputChange when re-picking the already selected wheel row', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel no-op" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const selectedHour = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--hours .time-wheel-option.is-selected:not([aria-hidden="true"])'
    );
    expect(selectedHour?.dataset.value).toBe('9');

    selectedHour!.click();
    await page.waitForChanges();
    expect(changeSpy).not.toHaveBeenCalled();

    selectedHour!.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(changeSpy).not.toHaveBeenCalled();
    expect(component.value).toBe('09:00');

    // A different row still emits.
    page
      .root!.querySelector<HTMLElement>(
        '.time-wheel-viewport--hours .time-wheel-option[data-wheel-copy="1"][data-value="11"]'
      )!
      .click();
    await page.waitForChanges();
    expect(changeSpy).toHaveBeenCalledTimes(1);
    expect(component.value).toBe('11:00');
  });

  it('should close the picker when Enter confirms a wheel row', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel enter" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const clockButton = page.root!.querySelector<HTMLButtonElement>(
      '.clock-icon-trigger button'
    )!;
    const clockFocus = jest.spyOn(clockButton, 'focus');
    const inputFocus = jest.spyOn(
      page.root!.querySelector('input') as HTMLInputElement,
      'focus'
    );
    const target = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--hours .time-wheel-option[data-wheel-copy="1"][data-value="14"]'
    );

    const restoreActiveElement = stubActiveElement(target);
    const raf = captureRaf();
    target!.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true,
      })
    );
    raf.run();
    raf.restore();
    restoreActiveElement();
    await page.waitForChanges();

    expect(component.value).toBe('14:00');
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
    expect(clockFocus).toHaveBeenCalled();
    expect(inputFocus).not.toHaveBeenCalled();
  });

  it('should keep the picker open when Space sets a wheel row', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel space" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    page
      .root!.querySelector<HTMLElement>(
        '.time-wheel-viewport--hours .time-wheel-option[data-wheel-copy="1"][data-value="14"]'
      )!
      .dispatchEvent(
        new KeyboardEvent('keydown', {
          key: ' ',
          bubbles: true,
          cancelable: true,
        })
      );
    await page.waitForChanges();

    expect(component.value).toBe('14:00');
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should move focus across wheels with ArrowLeft and ArrowRight', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel columns" format="12hrs" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const selectedIn = (kind: string) =>
      page.root!.querySelector<HTMLElement>(
        `.time-wheel-viewport--${kind} .time-wheel-option.is-selected:not([aria-hidden="true"])`
      );

    const arrow = (el: HTMLElement, key: string) => {
      el.dispatchEvent(
        new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })
      );
    };

    const hour = selectedIn('hours');
    expect(hour).not.toBeNull();

    arrow(hour!, 'ArrowRight');
    await page.waitForChanges();
    expect(selectedIn('minutes')?.tabIndex).toBe(0);
    expect(hour!.tabIndex).toBe(-1);

    arrow(selectedIn('minutes')!, 'ArrowRight');
    await page.waitForChanges();
    expect(selectedIn('period')?.tabIndex).toBe(0);

    // Already on the last column — stays put.
    arrow(selectedIn('period')!, 'ArrowRight');
    await page.waitForChanges();
    expect(selectedIn('period')?.tabIndex).toBe(0);

    arrow(selectedIn('period')!, 'ArrowLeft');
    await page.waitForChanges();
    expect(selectedIn('minutes')?.tabIndex).toBe(0);

    arrow(selectedIn('minutes')!, 'ArrowLeft');
    await page.waitForChanges();
    expect(selectedIn('hours')?.tabIndex).toBe(0);

    // Already on the first column — stays put.
    arrow(selectedIn('hours')!, 'ArrowLeft');
    await page.waitForChanges();
    expect(selectedIn('hours')?.tabIndex).toBe(0);
  });

  it('should keep the roving tabindex on the row picked with the mouse', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel click focus" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const target = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--minutes .time-wheel-option[data-wheel-copy="1"][data-value="30"]'
    );
    target!.click();
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
    await page.waitForChanges();

    expect(component.value).toBe('09:30');
    const selectedMinute = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--minutes .time-wheel-option.is-selected:not([aria-hidden="true"])'
    );
    expect(selectedMinute?.dataset.value).toBe('30');
    expect(selectedMinute?.tabIndex).toBe(0);
  });

  it('should close the dropdown when the clock button is clicked while open', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Clock close" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;
    button.click();
    await page.waitForChanges();
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should keep the dropdown closed when handleInputClick is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Click no event" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    (
      component as unknown as { handleInputClick: (e?: MouseEvent) => void }
    ).handleInputClick();
    await page.waitForChanges();
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);

    (
      component as unknown as { handleInputClick: (e?: MouseEvent) => void }
    ).handleInputClick({} as MouseEvent);
    await page.waitForChanges();
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should not toggle the dropdown on click when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Click disabled" value="09:00" disabled></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    (
      component as unknown as { handleInputClick: (e: MouseEvent) => void }
    ).handleInputClick({ preventDefault: jest.fn() } as unknown as MouseEvent);
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should ignore direct toggle/open calls while disabled or read-only', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Direct guard" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    component.readOnly = true;
    await page.waitForChanges();
    (component as unknown as { toggleDropdown: () => void }).toggleDropdown();
    (component as unknown as { openDropdown: () => void }).openDropdown();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should open the dropdown when Alt+ArrowDown is pressed while closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Arrow open" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;

    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        altKey: true,
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should step the active segment when ArrowDown is pressed without Alt', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Arrow step" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;

    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
    expect(component.value).toBe('08:00');
  });

  it('should ignore ArrowDown when the dropdown is already open', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Arrow already open" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should navigate datalist options with keyboard (ArrowDown, ArrowUp)', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist keyboard nav"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.datalistOptions = ['09:15', '09:30'];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const options = Array.from(
      page.root!.querySelectorAll<HTMLElement>('.time-datalist-option')
    );
    expect(options.length).toBeGreaterThan(1);

    const first = options[0];
    const second = options[1];
    const last = options[options.length - 1]; // "Other" option

    first.focus();

    // Trigger ArrowDown on first
    first.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
    );
    await page.waitForChanges();
    expect(second.tabIndex).toBe(0);

    // Trigger ArrowUp on first (loop to last)
    first.focus();
    first.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true })
    );
    await page.waitForChanges();
    expect(last.tabIndex).toBe(0);

    // Trigger ArrowDown on last (loop to first)
    last.focus();
    last.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
    );
    await page.waitForChanges();
    expect(first.tabIndex).toBe(0);
  });

  it('should move focus into the datalist when it opens', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist open focus" value="09:15"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.variant = 'datalist';
    component.datalistOptions = ['09:15', '09:30'];
    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    const option = page.root!.querySelector(
      '.time-datalist-option[tabindex="0"]'
    ) as HTMLElement;
    const focusSpy = jest.spyOn(option, 'focus');
    raf.run();
    raf.restore();

    expect(focusSpy).toHaveBeenCalledWith({ preventScroll: true });
    focusSpy.mockRestore();
  });

  it('should focus the datalist row when the menu opens and ArrowDown moves from the field', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist field arrow" value="09:15"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.variant = 'datalist';
    component.datalistOptions = ['09:15', '09:30'];
    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();
    raf.run();
    raf.restore();

    const option = page.root!.querySelector(
      '.time-datalist-option[tabindex="0"]'
    ) as HTMLElement;
    const focusSpy = jest.spyOn(option, 'focus');

    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalledWith({ preventScroll: true });
    focusSpy.mockRestore();
  });

  it('should no-op focusDatalistOption when the datalist is not mounted', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist context noop"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const harness = component as unknown as {
      dropdownRef?: HTMLElement;
      getKeyboardContext: () => ITimeInputKeyboardContext;
    };
    harness.dropdownRef = undefined;

    expect(() =>
      harness.getKeyboardContext().focusDatalistOption()
    ).not.toThrow();
  });

  it('should skip moving focus on open when the dropdown has no focusable row', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist empty focus" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.variant = 'datalist';
    component.datalistOptions = ['09:00'];
    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();
    const harness = component as unknown as { dropdownRef?: HTMLElement };
    harness.dropdownRef = undefined;
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    raf.run();
    raf.restore();
    expect(focusSpy).not.toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should expose focusDatalistOption on the keyboard context', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist context focus" value="09:15"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.variant = 'datalist';
    component.datalistOptions = ['09:15'];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const option = page.root!.querySelector(
      '.time-datalist-option[tabindex="0"]'
    ) as HTMLElement;
    const focusSpy = jest.spyOn(option, 'focus');
    (
      component as unknown as {
        getKeyboardContext: () => ITimeInputKeyboardContext;
      }
    )
      .getKeyboardContext()
      .focusDatalistOption();

    expect(focusSpy).toHaveBeenCalledWith({ preventScroll: true });
    focusSpy.mockRestore();
  });

  it('should move datalist focus to the first and last options with Home and End', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist Home End"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.datalistOptions = ['09:15', '09:30', '09:45'];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const options = Array.from(
      page.root!.querySelectorAll<HTMLElement>('.time-datalist-option')
    );
    const middle = options[1];
    const last = options[options.length - 1];

    middle.focus();
    middle.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'End', bubbles: true })
    );
    await page.waitForChanges();
    expect(last.tabIndex).toBe(0);

    last.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Home', bubbles: true })
    );
    await page.waitForChanges();
    expect(options[0].tabIndex).toBe(0);
  });

  it('should close the dropdown when Enter is pressed on the input', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Enter close" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should use the datalist dropdown when the deprecated datalistId is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Legacy datalist"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.datalistId = 'legacy-list';
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).not.toBeNull();
  });

  it('should use the datalist dropdown when interval-minutes is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Interval attr" interval-minutes="30"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).not.toBeNull();
  });

  it('should use the datalist dropdown when variant is datalist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Variant datalist" variant="datalist"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).not.toBeNull();
  });

  it('should keep picker wheels when intervalMinutes is set only as a property', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Interval prop only"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.intervalMinutes = 30;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).toBeNull();
    expect(page.root!.querySelector('.time-wheel')).not.toBeNull();
  });

  it('should ignore printable letter keys in the text field', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Letter guard" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;

    const event = createInsertTextEvent('x');
    input.dispatchEvent(event);
    await page.waitForChanges();

    expect(event.defaultPrevented).toBe(true);
    expect(component.value).toBe('09:45');
  });

  it('should leave printable keydown to beforeinput so a digit is written once', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Single writer"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    input.setSelectionRange = jest.fn();
    input.focus();
    await page.waitForChanges();

    // Both events fire for one key in a real browser; only beforeinput writes.
    for (const digit of ['4', '5']) {
      const keydown = new KeyboardEvent('keydown', {
        key: digit,
        bubbles: true,
        cancelable: true,
      });
      input.dispatchEvent(keydown);
      // keydown must not cancel the key, or beforeinput would never fire.
      expect(keydown.defaultPrevented).toBe(false);

      input.dispatchEvent(createInsertTextEvent(digit));
      await page.waitForChanges();
    }

    // One write per key: 04:05, not 44 or 55 in a segment.
    expect(component.value).toBe('04:05');
  });

  it('should emit inputChange with target.value in 24h format', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Emit shape"></modus-wc-time-input>',
    });
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { emitChange: (v: string) => void }).emitChange(
      '09:45'
    );
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy.mock.calls[0][0].detail.target.value).toBe('09:45');
  });

  it('should use wheels when datalistOptions is nullish', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Nullish datalist options"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (
      component as unknown as { datalistOptions: string[] | undefined }
    ).datalistOptions = undefined;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).toBeNull();
    expect(page.root!.querySelector('.time-wheel')).not.toBeNull();
  });

  it('should use wheels when datalistOptions is an empty array', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Empty datalist options"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.datalistOptions = [];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).toBeNull();
    expect(page.root!.querySelector('.time-wheel')).not.toBeNull();
  });

  it('should fall back to 24hrs display when format is explicitly nullish', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Nullish hour format" value="21:30"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.format = undefined;
    await page.waitForChanges();

    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('21:30');
  });

  it('should apply a custom minute step of 60 or more', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Minute step" step="120" value="09:00"></modus-wc-time-input>',
    });
    (page.rootInstance as unknown as { showDropdown: boolean }).showDropdown =
      true;
    await page.waitForChanges();

    const minuteOptions = page.root!.querySelectorAll(
      '.time-wheel--minutes .time-wheel-option[data-wheel-copy="1"]'
    );
    expect(minuteOptions.length).toBe(30);
  });

  it('should apply a custom second step and reveal seconds when step is under 60', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Second step" step="15" value="09:00:00"></modus-wc-time-input>',
    });
    (page.rootInstance as unknown as { showDropdown: boolean }).showDropdown =
      true;
    await page.waitForChanges();

    const secondOptions = page.root!.querySelectorAll(
      '.time-wheel--seconds .time-wheel-option[data-wheel-copy="1"]'
    );
    expect(secondOptions.length).toBe(4);
  });

  it('should update value when minutes, seconds, and period wheel options are selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel selectors" format="12hrs" show-seconds value="09:05:10"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const clickOption = (selector: string, text: string) => {
      const options = page.root!.querySelectorAll(selector);
      const target = Array.from(options).find(
        (el) => el.textContent?.trim() === text
      ) as HTMLElement;
      expect(target).toBeTruthy();
      target.click();
    };

    clickOption('.time-wheel--minutes .time-wheel-option', '30');
    await page.waitForChanges();
    expect(component.value.startsWith('09:30')).toBe(true);

    clickOption('.time-wheel--seconds .time-wheel-option', '45');
    await page.waitForChanges();
    expect(component.value.endsWith(':45')).toBe(true);

    clickOption('.time-wheel--period .time-wheel-option', 'PM');
    await page.waitForChanges();
    expect(component.value.startsWith('21')).toBe(true);
  });

  it('should prevent default on wheel option mousedown and ignore keydown on non-a11y copies', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel keyboard" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const hourOption = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option'
    ) as HTMLElement;
    const mouseDownEvent = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
    });
    const preventSpy = jest.spyOn(mouseDownEvent, 'preventDefault');
    hourOption.dispatchEvent(mouseDownEvent);
    expect(preventSpy).toHaveBeenCalled();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const nonA11yOption = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option[data-wheel-copy="0"]'
    ) as HTMLElement;
    nonA11yOption.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(changeSpy).not.toHaveBeenCalled();

    const a11yOption = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option[data-wheel-copy="1"]'
    ) as HTMLElement;
    a11yOption.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(changeSpy).toHaveBeenCalled();
    expect(component.value).not.toBe('09:00');
  });

  it('should select a datalist option and the Other item via keyboard', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist keyboard"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.datalistOptions = ['09:15', '09:30'];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const first = page.root!.querySelector(
      '.time-datalist-option'
    ) as HTMLElement;
    first.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(component.value).toBe('');

    first.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(component.value).toBe('09:15');

    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const other = page.root!.querySelector(
      '.time-datalist-option--other'
    ) as HTMLElement;
    other.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should navigate wheel options with keyboard (ArrowDown, ArrowUp, Home, End)', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel keyboard" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const flushWheelFocus = async () => {
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      );
      await page.waitForChanges();
    };

    const getSelectedHour = () =>
      page.root!.querySelector<HTMLElement>(
        '.time-wheel--hours .time-wheel-option.is-selected[data-wheel-copy="1"]'
      );

    const keydown = (el: HTMLElement, key: string) => {
      el.dispatchEvent(
        new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true,
        })
      );
    };

    let selectedHour = getSelectedHour();
    expect(selectedHour?.dataset.value).toBe('9');
    selectedHour!.focus();

    keydown(selectedHour!, 'ArrowDown');
    await page.waitForChanges();
    await flushWheelFocus();
    expect(component.value).toBe('10:00');
    expect(getSelectedHour()?.tabIndex).toBe(0);

    selectedHour = getSelectedHour();
    keydown(selectedHour!, 'ArrowUp');
    await page.waitForChanges();
    await flushWheelFocus();
    expect(component.value).toBe('09:00');

    selectedHour = getSelectedHour();
    keydown(selectedHour!, 'ArrowUp');
    await page.waitForChanges();
    await flushWheelFocus();
    expect(component.value).toBe('08:00');

    selectedHour = getSelectedHour();
    keydown(selectedHour!, 'End');
    await page.waitForChanges();
    await flushWheelFocus();
    expect(component.value).toBe('23:00');

    selectedHour = getSelectedHour();
    keydown(selectedHour!, 'Home');
    await page.waitForChanges();
    await flushWheelFocus();
    expect(component.value).toBe('00:00');
    expect(getSelectedHour()?.tabIndex).toBe(0);
  });

  it('should keep keyboard focus on the selected hour after wrapping past 23', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel wrap" value="23:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const selectedHour = page.root!.querySelector<HTMLElement>(
      '.time-wheel--hours .time-wheel-option.is-selected[data-wheel-copy="1"]'
    );
    expect(selectedHour?.dataset.value).toBe('23');
    selectedHour!.focus();

    selectedHour!.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
    await page.waitForChanges();

    const wrappedHour = page.root!.querySelector<HTMLElement>(
      '.time-wheel--hours .time-wheel-option.is-selected[data-wheel-copy="1"]'
    );
    expect(component.value).toBe('00:00');
    expect(wrappedHour?.dataset.value).toBe('0');
    expect(wrappedHour?.tabIndex).toBe(0);
  });

  it('should ignore events on non-a11y copy', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel keyboard" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const a0Copy = page.root!.querySelector(
      '.time-wheel--hours .time-wheel-option[data-wheel-copy="0"]'
    ) as HTMLElement;
    if (a0Copy) {
      a0Copy.focus();
      a0Copy.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
      );
      await page.waitForChanges();
      // Should not throw or do anything
    }
  });

  it('should handle early returns in moveListboxFocus gracefully', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Listbox guards"></modus-wc-time-input>',
    });

    const noListboxEl = page.doc.createElement('div');
    expect(() => moveListboxFocus(noListboxEl, 1, '.item')).not.toThrow();

    const listboxEl = page.doc.createElement('div');
    listboxEl.setAttribute('role', 'listbox');
    const childEl = page.doc.createElement('div');
    listboxEl.appendChild(childEl);
    expect(() => moveListboxFocus(childEl, 1, '.non-existent')).not.toThrow();
  });

  it('should manage beforeinput event listeners correctly when setting input ref', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Input ref"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input1 = page.doc.createElement('input');
    const input2 = page.doc.createElement('input');

    const removeSpy1 = jest.spyOn(input1, 'removeEventListener');
    const addSpy2 = jest.spyOn(input2, 'addEventListener');

    const setInputRef = (
      component as unknown as {
        setInputRef: (el: HTMLInputElement | undefined) => void;
      }
    ).setInputRef;

    // Set first ref
    setInputRef(input1);
    // Set second ref, should remove from first
    setInputRef(input2);

    expect(removeSpy1).toHaveBeenCalledWith(
      'beforeinput',
      expect.any(Function)
    );
    expect(addSpy2).toHaveBeenCalledWith('beforeinput', expect.any(Function));
  });

  it('should prevent default on beforeinput event when not disabled or readonly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Before input"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const handleBeforeInput = (
      component as unknown as { handleBeforeInput: (e: InputEvent) => void }
    ).handleBeforeInput;

    const createInputEvent = (inputType: string, data?: string): InputEvent => {
      const event = new Event('beforeinput', {
        cancelable: true,
      }) as InputEvent;
      Object.defineProperty(event, 'inputType', { value: inputType });
      if (data !== undefined) {
        Object.defineProperty(event, 'data', { value: data });
      }
      return event;
    };

    const letterEvent = createInputEvent('insertText', 'x');
    const letterPreventSpy = jest.spyOn(letterEvent, 'preventDefault');
    component.disabled = true;
    handleBeforeInput(letterEvent);
    expect(letterPreventSpy).not.toHaveBeenCalled();

    component.disabled = false;
    handleBeforeInput(letterEvent);
    expect(letterPreventSpy).toHaveBeenCalled();

    const digitEvent = createInputEvent('insertText', '5');
    const digitPreventSpy = jest.spyOn(digitEvent, 'preventDefault');
    handleBeforeInput(digitEvent);
    expect(digitPreventSpy).toHaveBeenCalled();

    const deleteEvent = createInputEvent('deleteContentBackward');
    const deletePreventSpy = jest.spyOn(deleteEvent, 'preventDefault');
    handleBeforeInput(deleteEvent);
    expect(deletePreventSpy).not.toHaveBeenCalled();
  });

  it('should not refocus the hours wheel when the picker re-renders after open', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker refocus" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const raf = captureRaf();

    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();
    raf.run();

    const minutesOption = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--minutes .time-wheel-option[tabindex="0"]'
    );
    expect(minutesOption).not.toBeNull();
    const minutesFocusSpy = jest.spyOn(minutesOption!, 'focus');
    minutesOption!.focus();
    minutesFocusSpy.mockClear();

    component.value = '10:00';
    await page.waitForChanges();
    raf.run();
    raf.restore();

    expect(minutesFocusSpy).not.toHaveBeenCalled();
  });

  it('should handle early returns in keyboard option handlers when listbox is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input></modus-wc-time-input>',
    });

    const dummyTarget = page.doc.createElement('div');

    let event = new KeyboardEvent('keydown', { key: 'Home' });
    Object.defineProperty(event, 'currentTarget', { value: dummyTarget });
    expect(() =>
      handleWheelOptionKeyDown(event, true, jest.fn(), '0')
    ).not.toThrow();

    event = new KeyboardEvent('keydown', { key: 'End' });
    Object.defineProperty(event, 'currentTarget', { value: dummyTarget });
    expect(() =>
      handleWheelOptionKeyDown(event, true, jest.fn(), '0')
    ).not.toThrow();

    event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    Object.defineProperty(event, 'currentTarget', { value: dummyTarget });
    expect(() => handleDatalistOptionKeyDown(event, jest.fn())).not.toThrow();
  });

  it('should handle unmatched values when rendering wheels and datalists', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input value="12:34"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    // Unmatched value in datalist
    component.variant = 'datalist';
    component.datalistOptions = ['09:00', '10:00'];
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    let options = page.root!.querySelectorAll(
      '.time-datalist-option:not(.time-datalist-option--other)'
    );
    // 12:34 is not in the list, so the closest option takes the roving focus.
    expect(options[1].getAttribute('tabindex')).toBe('0');

    // Unmatched value with empty datalist options (should focus Other)
    component.datalistOptions = [];
    component.min = 'invalid'; // Forces options array to be empty
    await page.waitForChanges();
    const other = page.root!.querySelector(
      '.time-datalist-option--other'
    ) as HTMLElement;
    expect(other.getAttribute('tabindex')).toBe('0');

    // Restore min
    component.min = undefined;

    // Unmatched value in wheels (12:34 where 34 is not a multiple of 15)
    component.variant = 'picker';
    component.step = 900; // 15 minutes in seconds
    await page.waitForChanges();
    const minOptions = page.root!.querySelectorAll(
      '.time-wheel--minutes .time-wheel-option[data-wheel-copy="1"]'
    );
    // Middle copy fallback
    expect(minOptions[0].getAttribute('tabindex')).toBe('0');
  });

  it('should restore focus to the input if the dropdown is closed while focus is inside it', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Focus restore" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const input = page.root!.querySelector('input') as HTMLInputElement;
    const focusSpy = jest.spyOn(input, 'focus');

    const dropdown = (component as unknown as { dropdownRef: HTMLElement })
      .dropdownRef;
    const activeEl = page.doc.createElement('div');
    dropdown.appendChild(activeEl);

    const activeElementDesc = Object.getOwnPropertyDescriptor(
      document,
      'activeElement'
    );
    Object.defineProperty(document, 'activeElement', {
      get: () => activeEl,
      configurable: true,
    });

    const raf = captureRaf();
    (component as unknown as { closeDropdown: () => void }).closeDropdown();
    raf.run();
    raf.restore();

    if (activeElementDesc) {
      Object.defineProperty(document, 'activeElement', activeElementDesc);
    }

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should not throw when closing dropdown without an input ref', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Close no input ref" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const dropdown = (component as unknown as { dropdownRef: HTMLElement })
      .dropdownRef;
    const activeEl = page.doc.createElement('div');
    dropdown.appendChild(activeEl);

    const activeElementDesc = Object.getOwnPropertyDescriptor(
      document,
      'activeElement'
    );
    Object.defineProperty(document, 'activeElement', {
      get: () => activeEl,
      configurable: true,
    });

    (component as unknown as { inputRef?: HTMLInputElement }).inputRef =
      undefined;

    const raf = captureRaf();
    expect(() =>
      (component as unknown as { closeDropdown: () => void }).closeDropdown()
    ).not.toThrow();
    raf.run();
    raf.restore();

    if (activeElementDesc) {
      Object.defineProperty(document, 'activeElement', activeElementDesc);
    }
  });

  it('should skip picker focus when opening the datalist dropdown', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist focus skip" variant="datalist"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    expect(() => raf.run()).not.toThrow();
    raf.restore();

    expect(page.root!.querySelector('.time-datalist')).not.toBeNull();
  });

  it('should skip picker focus when dropdown opens without pending focus', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker no focus" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const raf = captureRaf();
    (
      component as unknown as {
        showDropdown: boolean;
        pendingScrollToSelection: boolean;
        pendingFocusPickerOnOpen: boolean;
      }
    ).showDropdown = true;
    (
      component as unknown as { pendingScrollToSelection: boolean }
    ).pendingScrollToSelection = true;
    (
      component as unknown as { pendingFocusPickerOnOpen: boolean }
    ).pendingFocusPickerOnOpen = false;
    await page.waitForChanges();

    const focusableOption = page.root!.querySelector<HTMLElement>(
      '.time-wheel-option[tabindex="0"]'
    );
    const optionFocusSpy = focusableOption
      ? jest.spyOn(focusableOption, 'focus')
      : null;

    expect(() => raf.run()).not.toThrow();
    raf.restore();

    if (optionFocusSpy) {
      expect(optionFocusSpy).not.toHaveBeenCalled();
    }
  });

  it('should handle picker focus RAF when focus target is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker RAF guards" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();

    page.root!.querySelectorAll('.time-wheel-option').forEach((option) => {
      option.setAttribute('tabindex', '-1');
    });

    expect(() => raf.run()).not.toThrow();
    raf.restore();
  });

  it('should handle picker focus RAF when dropdown ref is cleared before callback', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Picker RAF no dropdown ref" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const raf = captureRaf();
    (component as unknown as { openDropdown: () => void }).openDropdown();
    await page.waitForChanges();
    (component as unknown as { dropdownRef?: HTMLElement }).dropdownRef =
      undefined;

    expect(() => raf.run()).not.toThrow();
    raf.restore();
  });

  it('should handle empty wheel options when resolving focusable key', () => {
    expect(resolveFocusableWheelKey([], '0', false)).toBeUndefined();
  });

  it('should not throw from handleOtherSelect when the input ref is unset', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Other no ref"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { inputRef?: HTMLInputElement }).inputRef =
      undefined;

    (
      component as unknown as { handleOtherSelect: () => void }
    ).handleOtherSelect();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(
      (component as unknown as { suppressBlurCommit: boolean })
        .suppressBlurCommit
    ).toBe(false);
  });

  it('should ignore handleOtherSelect while disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Other disabled"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.disabled = true;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    (
      component as unknown as { handleOtherSelect: () => void }
    ).handleOtherSelect();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should destroy an existing popper instance before creating a new one', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Popper recreate" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const destroySpy = jest.fn();
    (
      component as unknown as { popperInstance: { destroy: () => void } | null }
    ).popperInstance = { destroy: destroySpy };

    const input = page.root!.querySelector('input') as HTMLElement;
    const dropdown = page.root!.querySelector('.time-dropdown') as HTMLElement;
    (
      component as unknown as {
        setupPopper: (anchor: HTMLElement, dropdown: HTMLElement) => void;
      }
    ).setupPopper(input, dropdown);

    expect(destroySpy).toHaveBeenCalled();
  });

  it('should clean up listeners and the popper instance on disconnect', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Disconnect" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(
      (component as unknown as { popperInstance: unknown }).popperInstance
    ).not.toBeNull();

    (
      component as unknown as { disconnectedCallback: () => void }
    ).disconnectedCallback();

    expect(
      (component as unknown as { popperInstance: unknown }).popperInstance
    ).toBeNull();
  });

  it('should ignore wheel selection updates while disabled and when the result is unparsable', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Wheel guard" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const initialValue = component.value;

    component.disabled = true;
    await page.waitForChanges();
    (
      component as unknown as {
        applyWheelSelection: (p: Record<string, unknown>) => void;
      }
    ).applyWheelSelection({ hour: 5 });
    expect(component.value).toBe(initialValue);

    component.disabled = false;
    await page.waitForChanges();
    (
      component as unknown as {
        applyWheelSelection: (p: Record<string, unknown>) => void;
      }
    ).applyWheelSelection({ hour: NaN });
    expect(component.value).toBe(initialValue);
  });

  it('should ignore datalist selection while disabled and when the value is unparsable', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist guard" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const initialValue = component.value;

    component.disabled = true;
    await page.waitForChanges();
    (
      component as unknown as { handleDatalistSelect: (v: string) => void }
    ).handleDatalistSelect('09:15');
    expect(component.value).toBe(initialValue);

    component.disabled = false;
    await page.waitForChanges();
    (
      component as unknown as { handleDatalistSelect: (v: string) => void }
    ).handleDatalistSelect('not-a-time');
    expect(component.value).toBe(initialValue);
  });

  it('should no-op saveWheelScrollPositions without a dropdown reference', () => {
    expect(() => saveWheelScrollPositions(undefined, new Map())).not.toThrow();
  });

  it('should no-op restoreWheelScrollPositions without a dropdown reference or saved positions', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Restore guard"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const positions = (
      component as unknown as { wheelScrollPositions: Map<string, number> }
    ).wheelScrollPositions;
    const lock = (
      component as unknown as { circularScrollLock: { current: boolean } }
    ).circularScrollLock;

    expect(() =>
      restoreWheelScrollPositions(undefined, positions, lock)
    ).not.toThrow();

    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;
    button.click();
    await page.waitForChanges();

    expect(() =>
      restoreWheelScrollPositions(
        (component as unknown as { dropdownRef?: HTMLElement }).dropdownRef,
        positions,
        lock
      )
    ).not.toThrow();
  });

  it('should return an empty viewport kind when no matching class exists', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Viewport kind"></modus-wc-time-input>',
    });
    const viewport = page.doc.createElement('div');
    viewport.classList.add('time-wheel-viewport');

    expect(getWheelViewportKind(viewport)).toBe('');
  });

  it('should return the middle copy for circular wheels and the sole match otherwise', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Preferred option"></modus-wc-time-input>',
    });
    const getPreferred = getPreferredSelectedOption;

    const makeOption = (copy: number) => {
      const li = page.doc.createElement('li');
      li.classList.add('time-wheel-option', 'is-selected');
      li.dataset.wheelCopy = String(copy);
      return li;
    };

    const circularViewport = page.doc.createElement('div');
    circularViewport.dataset.circular = 'true';
    const copies = [0, 1, 2].map((copy) => {
      const li = makeOption(copy);
      circularViewport.appendChild(li);
      return li;
    });
    expect(getPreferred(circularViewport)).toBe(copies[1]);

    const circularNoMiddle = page.doc.createElement('div');
    circularNoMiddle.dataset.circular = 'true';
    const noMiddleOption = makeOption(0);
    circularNoMiddle.appendChild(noMiddleOption);
    expect(getPreferred(circularNoMiddle)).toBe(noMiddleOption);

    const nonCircularViewport = page.doc.createElement('div');
    const soleOption = makeOption(0);
    nonCircularViewport.appendChild(soleOption);
    expect(getPreferred(nonCircularViewport)).toBe(soleOption);

    const emptyViewport = page.doc.createElement('div');
    expect(getPreferred(emptyViewport)).toBeNull();
  });

  it('should compute the circular set height from item spacing when enough copies exist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Set height"></modus-wc-time-input>',
    });
    const viewport = page.doc.createElement('div');
    const items = Array.from({ length: 6 }, () => {
      const li = page.doc.createElement('li');
      li.classList.add('time-wheel-option');
      return li;
    });
    items.forEach((item, index) => {
      Object.defineProperty(item, 'offsetTop', {
        value: index * 10,
        configurable: true,
      });
      viewport.appendChild(item);
    });

    expect(getCircularSetHeight(viewport, 2)).toBe(20);
  });

  it('should fall back to option height times count when there are not enough copies', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Set height fallback"></modus-wc-time-input>',
    });
    const viewport = page.doc.createElement('div');
    const item = page.doc.createElement('li');
    item.classList.add('time-wheel-option');
    Object.defineProperty(item, 'offsetHeight', {
      value: 15,
      configurable: true,
    });
    viewport.appendChild(item);

    expect(getCircularSetHeight(viewport, 5)).toBe(75);
  });

  it('should treat a missing first item as zero height in the fallback branch', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Set height empty"></modus-wc-time-input>',
    });
    const viewport = page.doc.createElement('div');

    expect(getCircularSetHeight(viewport, 5)).toBe(0);
  });

  it('should only scroll a wheel option until its edge reaches the viewport boundary', () => {
    const viewport = {
      scrollTop: 40,
      getBoundingClientRect: () => ({ top: 100, bottom: 250 }),
    } as unknown as HTMLElement;
    const option = {
      getBoundingClientRect: () => ({ top: 80, bottom: 120 }),
    } as unknown as HTMLElement;

    scrollWheelOptionIntoView(viewport, option);
    expect(viewport.scrollTop).toBe(20);

    option.getBoundingClientRect = (): DOMRect =>
      ({ top: 220, bottom: 260 }) as DOMRect;
    viewport.scrollTop = 40;

    scrollWheelOptionIntoView(viewport, option);
    expect(viewport.scrollTop).toBe(50);
  });

  it('should wrap scroll position forward and backward to stay within the circular set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Maintain scroll"></modus-wc-time-input>',
    });
    const lock = { current: false };
    const viewport = page.doc.createElement('div');
    const items = Array.from({ length: 6 }, () => {
      const li = page.doc.createElement('li');
      li.classList.add('time-wheel-option');
      return li;
    });
    items.forEach((item, index) => {
      Object.defineProperty(item, 'offsetTop', {
        value: index * 10,
        configurable: true,
      });
      viewport.appendChild(item);
    });
    Object.defineProperty(viewport, 'scrollTop', {
      value: 5,
      writable: true,
      configurable: true,
    });

    maintainCircularScroll(viewport, 2, lock);
    expect(viewport.scrollTop).toBe(25);

    (viewport as unknown as { scrollTop: number }).scrollTop = 45;
    maintainCircularScroll(viewport, 2, lock);
    expect(viewport.scrollTop).toBe(25);
  });

  it('should skip circular scroll maintenance while locked, with too few options, or a zero height set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Maintain guard"></modus-wc-time-input>',
    });
    const viewport = page.doc.createElement('div');
    const lock = { current: false };

    lock.current = true;
    expect(() => maintainCircularScroll(viewport, 5, lock)).not.toThrow();

    lock.current = false;
    expect(() => maintainCircularScroll(viewport, 1, lock)).not.toThrow();
    expect(() => maintainCircularScroll(viewport, 5, lock)).not.toThrow();
  });

  it('should bind circular scroll listeners and preserve scroll position across wheel selection', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Circular integration" value="09:05"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;

    button.click();
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    const hoursViewport = page.root!.querySelector(
      '.time-wheel-viewport--hours'
    ) as HTMLElement;
    expect(hoursViewport).not.toBeNull();
    expect(() =>
      hoursViewport.dispatchEvent(new Event('scroll'))
    ).not.toThrow();

    const minuteOptions = page.root!.querySelectorAll(
      '.time-wheel--minutes .time-wheel-option'
    );
    const target = Array.from(minuteOptions).find(
      (el) => el.textContent?.trim() === '30'
    ) as HTMLElement;
    target.click();
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(component.value.startsWith('09:30')).toBe(true);
  });

  it('should skip scrolling wheels to selection when using the datalist dropdown', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Datalist integration" interval-minutes="30"></modus-wc-time-input>',
    });
    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;
    button.click();
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(page.root!.querySelector('.time-dropdown--datalist')).not.toBeNull();
  });

  it('should save and restore wheel scroll positions keyed by viewport kind', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Scroll persist"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const dropdown = page.doc.createElement('div');
    const hoursViewport = page.doc.createElement('div');
    hoursViewport.classList.add('time-wheel-viewport');
    hoursViewport.classList.add('time-wheel-viewport--hours');
    patchMockClassListIterator(hoursViewport);
    Object.defineProperty(hoursViewport, 'scrollTop', {
      value: 42,
      writable: true,
      configurable: true,
    });
    dropdown.appendChild(hoursViewport);

    // A viewport with no `time-wheel-viewport--*` kind class exercises the
    // falsy branch of `getWheelViewportKind`, so it is skipped by both
    // save and restore.
    const unknownViewport = page.doc.createElement('div');
    unknownViewport.classList.add('time-wheel-viewport');
    patchMockClassListIterator(unknownViewport);
    Object.defineProperty(unknownViewport, 'scrollTop', {
      value: 7,
      writable: true,
      configurable: true,
    });
    dropdown.appendChild(unknownViewport);

    (component as unknown as { dropdownRef?: HTMLElement }).dropdownRef =
      dropdown;

    const positions = new Map<string, number>();
    saveWheelScrollPositions(dropdown, positions);

    hoursViewport.scrollTop = 0;
    unknownViewport.scrollTop = 0;

    restoreWheelScrollPositions(
      dropdown,
      positions,
      (component as unknown as { circularScrollLock: { current: boolean } })
        .circularScrollLock
    );

    expect(hoursViewport.scrollTop).toBe(42);
    expect(unknownViewport.scrollTop).toBe(0);
  });

  it('should skip a wheel with no selected option when scrolling to the selection', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="No selection" step="15" show-seconds value="09:00:07"></modus-wc-time-input>',
    });
    const button = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;

    button.click();
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(
      page.root!.querySelector('.time-wheel--seconds .is-selected')
    ).toBeNull();
  });

  it('should skip binding a circular scroll listener when the option count is too small', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Small option count" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const dropdown = page.root!.querySelector('.time-dropdown') as HTMLElement;
    const fakeViewport = page.doc.createElement('div');
    fakeViewport.classList.add('time-wheel-viewport');
    fakeViewport.dataset.circular = 'true';
    fakeViewport.dataset.optionCount = '1';
    dropdown.appendChild(fakeViewport);

    expect(() =>
      bindCircularWheelListeners(dropdown, { current: false })
    ).not.toThrow();
  });

  it('should select a pending segment after render when focused', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Pending segment" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;

    const harness = component as unknown as {
      inputRef: HTMLInputElement;
      hasFocus: boolean;
      pendingSegmentSelect: string | null;
      componentDidRender: () => void;
    };
    harness.inputRef = input;
    harness.hasFocus = true;
    harness.pendingSegmentSelect = 'minute';
    harness.componentDidRender();

    expect(setSelectionRange).toHaveBeenCalledWith(3, 5);
    expect(harness.pendingSegmentSelect).toBeNull();
  });

  it('should resolve the active segment from the caret position', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Caret segment" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    Object.defineProperty(input, 'selectionStart', {
      value: 3,
      configurable: true,
    });
    input.setSelectionRange = jest.fn();

    const harness = component as unknown as {
      inputRef: HTMLInputElement;
      getActiveSegment: () => { kind: string };
    };
    harness.inputRef = input;

    expect(harness.getActiveSegment().kind).toBe('minute');
  });

  it('should move between segments with Tab and Shift+Tab before leaving the field', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Tab segments" value="09:45:30" step="1"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    let selectionStart = 0;
    const setSelectionRange = jest.fn((start: number) => {
      selectionStart = start;
    });
    input.setSelectionRange = setSelectionRange;
    Object.defineProperty(input, 'selectionStart', {
      get: () => selectionStart,
      configurable: true,
    });

    const keydown = (key: string, shiftKey = false) => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', {
          key,
          shiftKey,
          bubbles: true,
          cancelable: true,
        })
      );
    };
    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(
      (component as unknown as { activeSegmentKind: string }).activeSegmentKind
    ).toBe('hour');

    keydown('Tab');
    await page.waitForChanges();
    expect(setSelectionRange).toHaveBeenLastCalledWith(3, 5);
    expect(
      (component as unknown as { activeSegmentKind: string }).activeSegmentKind
    ).toBe('minute');

    keydown('Tab');
    await page.waitForChanges();
    expect(setSelectionRange).toHaveBeenLastCalledWith(6, 8);
    expect(
      (component as unknown as { activeSegmentKind: string }).activeSegmentKind
    ).toBe('second');

    keydown('Tab', true);
    await page.waitForChanges();
    expect(setSelectionRange).toHaveBeenLastCalledWith(3, 5);
    expect(
      (component as unknown as { activeSegmentKind: string }).activeSegmentKind
    ).toBe('minute');
  });

  it('should select the last segment when Shift+Tab returns from the clock button', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Shift tab from clock" value="09:45:30" step="1"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const clock = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;
    let selectionStart = 0;
    const setSelectionRange = jest.fn((start: number) => {
      selectionStart = start;
    });
    input.setSelectionRange = setSelectionRange;
    Object.defineProperty(input, 'selectionStart', {
      get: () => selectionStart,
      configurable: true,
    });

    const raf = captureRaf();

    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    raf.run();

    input.dispatchEvent(
      new FocusEvent('blur', { relatedTarget: clock, bubbles: true })
    );
    await page.waitForChanges();

    input.dispatchEvent(
      new FocusEvent('focus', { relatedTarget: clock, bubbles: true })
    );
    await page.waitForChanges();
    raf.run();
    raf.run();

    raf.restore();

    expect(setSelectionRange).toHaveBeenLastCalledWith(6, 8);
    expect(
      (component as unknown as { activeSegmentKind: string }).activeSegmentKind
    ).toBe('second');
  });

  it('should select the period segment when Shift+Tab returns from the clock in 12-hour format', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Shift tab from clock 12h" format="12hrs" show-seconds value="09:45:30"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const clock = page.root!.querySelector(
      '.clock-icon-trigger button'
    ) as HTMLButtonElement;
    let selectionStart = 0;
    const setSelectionRange = jest.fn((start: number) => {
      selectionStart = start;
    });
    input.setSelectionRange = setSelectionRange;
    Object.defineProperty(input, 'selectionStart', {
      get: () => selectionStart,
      configurable: true,
    });

    const raf = captureRaf();

    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    raf.run();

    input.dispatchEvent(
      new FocusEvent('blur', { relatedTarget: clock, bubbles: true })
    );
    await page.waitForChanges();

    input.dispatchEvent(
      new FocusEvent('focus', { relatedTarget: clock, bubbles: true })
    );
    await page.waitForChanges();
    raf.run();
    raf.run();

    raf.restore();

    expect(setSelectionRange).toHaveBeenLastCalledWith(9, 11);
    expect(
      (component as unknown as { activeSegmentKind: string }).activeSegmentKind
    ).toBe('period');
  });

  it('should advance segments with Tab in the keyboard helper until the last segment', () => {
    const selectSegment = jest.fn();
    const ctx: ITimeInputKeyboardContext = {
      disabled: false,
      readOnly: false,
      displayValue: '09:45:30',
      effectiveShowSeconds: true,
      resolvedFormat: '24hrs',
      minuteStep: 1,
      secondStep: 1,
      getActiveSegment: () => ({
        kind: 'hour',
        start: 0,
        end: 2,
      }),
      selectSegment,
      commitDisplay: jest.fn(),
      openDropdown: jest.fn(),
      closeDropdown: jest.fn(),
      getSegmentDigitBuffer: () => '',
      setSegmentDigitBuffer: jest.fn(),
      setActiveSegmentKind: jest.fn(),
      setPendingSegmentSelect: jest.fn(),
      emitParsedTime: jest.fn(),
      showDropdown: false,
      useDatalist: false,
      focusDatalistOption: jest.fn(),
    };

    const tabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      cancelable: true,
    });
    const tabPreventSpy = jest.spyOn(tabEvent, 'preventDefault');
    handleTimeInputKeyDown(tabEvent, ctx);
    expect(tabPreventSpy).toHaveBeenCalled();
    expect(selectSegment).toHaveBeenCalledWith({
      kind: 'minute',
      start: 3,
      end: 5,
    });

    ctx.getActiveSegment = () => ({
      kind: 'second',
      start: 6,
      end: 8,
    });
    const leaveTabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      cancelable: true,
    });
    const leaveTabPreventSpy = jest.spyOn(leaveTabEvent, 'preventDefault');
    handleTimeInputKeyDown(leaveTabEvent, ctx);
    expect(leaveTabPreventSpy).not.toHaveBeenCalled();
  });

  it('should step up with ArrowUp and navigate segments with arrow keys', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Arrow keys" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;

    const keydown = (key: string) => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true,
        })
      );
    };

    keydown('ArrowUp');
    await page.waitForChanges();
    expect(component.value).toBe('10:00');

    keydown('ArrowRight');
    await page.waitForChanges();
    expect(setSelectionRange).toHaveBeenCalled();

    keydown('ArrowLeft');
    await page.waitForChanges();

    keydown('Home');
    await page.waitForChanges();

    keydown('End');
    await page.waitForChanges();
  });

  it('should ignore keydown while disabled or read-only', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Keydown guard" value="09:00" disabled></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;

    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(component.value).toBe('09:00');

    page.root!.removeAttribute('disabled');
    component.readOnly = true;
    await page.waitForChanges();

    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();
    expect(component.value).toBe('09:00');
  });

  it('should select the clicked segment on first pointer focus without defaulting to hour', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Pointer segment" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;

    input.dispatchEvent(new FocusEvent('focus'));
    Object.defineProperty(input, 'selectionStart', {
      value: 4,
      configurable: true,
    });
    (
      component as unknown as { handleInputClick: () => void }
    ).handleInputClick();

    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );

    expect(setSelectionRange).not.toHaveBeenCalledWith(0, 2);
    expect(setSelectionRange).toHaveBeenCalledWith(3, 5);
  });

  it('should select the first segment on focus and the clicked segment on input click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Focus click" value="09:45"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;
    let caret = 0;
    Object.defineProperty(input, 'selectionStart', {
      get: () => caret,
      configurable: true,
    });

    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );
    expect(setSelectionRange).toHaveBeenCalledWith(0, 2);

    caret = 3;
    (
      page.rootInstance as unknown as {
        handleInputClick: (e?: MouseEvent) => void;
      }
    ).handleInputClick({ preventDefault: jest.fn() } as unknown as MouseEvent);
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );
    expect(setSelectionRange).toHaveBeenCalledWith(3, 5);
  });

  it('should select the segment under the pointer when focus arrives before the click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Pointer focus frame" value="09:45"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;
    // The browser places the caret from the pointer before the queued frame runs.
    Object.defineProperty(input, 'selectionStart', {
      value: 4,
      configurable: true,
    });

    input.dispatchEvent(new FocusEvent('focus'));
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(setSelectionRange).not.toHaveBeenCalledWith(0, 2);
    expect(setSelectionRange).toHaveBeenCalledWith(3, 5);
  });

  it('should paste a valid time and ignore invalid or empty clipboard data', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Paste"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const dispatchPaste = (text: string) => {
      const event = new Event('paste', {
        bubbles: true,
        cancelable: true,
      }) as ClipboardEvent;
      Object.defineProperty(event, 'clipboardData', {
        value: { getData: () => text },
      });
      input.dispatchEvent(event);
    };

    dispatchPaste('');
    await page.waitForChanges();
    expect(changeSpy).not.toHaveBeenCalled();

    dispatchPaste('not-a-time');
    await page.waitForChanges();
    expect(changeSpy).not.toHaveBeenCalled();

    dispatchPaste('14:20');
    await page.waitForChanges();
    expect(changeSpy).toHaveBeenCalled();
    expect(component.value).toBe('14:20');
  });

  it('should ignore paste while disabled or read-only', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Paste guard" disabled></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const event = new Event('paste', {
      bubbles: true,
      cancelable: true,
    }) as ClipboardEvent;
    Object.defineProperty(event, 'clipboardData', {
      value: { getData: () => '10:00' },
    });
    input.dispatchEvent(event);
    await page.waitForChanges();
    expect(changeSpy).not.toHaveBeenCalled();

    component.disabled = false;
    component.readOnly = true;
    await page.waitForChanges();
    input.dispatchEvent(event);
    await page.waitForChanges();
    expect(changeSpy).not.toHaveBeenCalled();
  });

  it('should commit a matching value on blur without emitting change', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Blur same value" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(changeSpy).not.toHaveBeenCalled();
    expect(component.value).toBe('09:45');
    expect((component as unknown as { isInvalid: boolean }).isInvalid).toBe(
      false
    );
  });

  it('should mark invalid on blur for partial or unparsable displays', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Blur invalid"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const harness = component as unknown as {
      displayValue: string;
      isInvalid: boolean;
    };

    harness.displayValue = '09:--';
    input.dispatchEvent(new FocusEvent('focus'));
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();
    expect(harness.isInvalid).toBe(true);

    harness.isInvalid = false;
    harness.displayValue = '99:99';
    input.dispatchEvent(new FocusEvent('focus'));
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();
    expect(harness.isInvalid).toBe(true);
  });

  it('should refresh display when committing a complete time equal to the current value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Commit same" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const harness = component as unknown as {
      commitDisplay: (display: string, kind: string) => void;
      displayValue: string;
    };

    harness.commitDisplay('09:45', 'hour');
    await page.waitForChanges();

    expect(component.value).toBe('09:45');
    expect(harness.displayValue).toBe('09:45');
  });

  it('should fall back to the stored or first segment when caret position is unavailable', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Caret fallback" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const harness = component as unknown as {
      inputRef?: HTMLInputElement;
      activeSegmentKind: string;
      getActiveSegment: () => { kind: string };
    };

    harness.inputRef = undefined;
    harness.activeSegmentKind = 'unknown-kind';
    expect(harness.getActiveSegment().kind).toBe('hour');

    const input = page.root!.querySelector('input') as HTMLInputElement;
    Object.defineProperty(input, 'selectionStart', {
      value: Number.NaN,
      configurable: true,
    });
    harness.inputRef = input;
    harness.activeSegmentKind = 'minute';
    expect(harness.getActiveSegment().kind).toBe('minute');
  });

  it('should default to caret zero on input click when selectionStart is nullish', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Click null caret" value="09:45"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;
    Object.defineProperty(input, 'selectionStart', {
      value: null,
      configurable: true,
    });

    (
      page.rootInstance as unknown as {
        handleInputClick: (e?: MouseEvent) => void;
      }
    ).handleInputClick({ preventDefault: jest.fn() } as unknown as MouseEvent);
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(setSelectionRange).toHaveBeenCalledWith(0, 2);
  });

  it('should ignore paste events without clipboard data', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Paste no data"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input.dispatchEvent(
      new Event('paste', { bubbles: true, cancelable: true })
    );
    await page.waitForChanges();

    expect(changeSpy).not.toHaveBeenCalled();
  });

  it('should emit change on blur when the completed display differs from the stored value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Blur change" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input.dispatchEvent(new FocusEvent('focus'));
    (component as unknown as { displayValue: string }).displayValue = '09:45';
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(component.value).toBe('09:45');
  });

  it('should no-op selectSegment when the input ref is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Select guard"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const harness = component as unknown as {
      selectSegment: (segment: {
        kind: string;
        start: number;
        end: number;
      }) => void;
      inputRef?: HTMLInputElement;
    };
    harness.inputRef = undefined;

    expect(() =>
      harness.selectSegment({ kind: 'hour', start: 0, end: 2 })
    ).not.toThrow();
  });

  it('should type AM/PM in the period segment for 12h format', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Period key" format="12hrs" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.setSelectionRange = jest.fn();
    Object.defineProperty(input, 'selectionStart', {
      value: 6,
      configurable: true,
    });

    const harness = component as unknown as {
      inputRef: HTMLInputElement;
      activeSegmentKind: string;
    };
    harness.inputRef = input;
    harness.activeSegmentKind = 'period';

    input.dispatchEvent(createInsertTextEvent('p'));
    await page.waitForChanges();

    expect(component.value).toBe('21:45');
  });

  it('should prevent default on clock button mousedown', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Clock mousedown" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const event = new MouseEvent('mousedown', { cancelable: true });
    const preventDefault = jest.spyOn(event, 'preventDefault');

    (
      component as unknown as { handleClockMouseDown: (e: MouseEvent) => void }
    ).handleClockMouseDown(event);

    expect(preventDefault).toHaveBeenCalled();
  });

  it('should ignore repeat focus events while already focused', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Repeat focus" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;
    const handleFocus = (
      component as unknown as { handleFocus: (e: FocusEvent) => void }
    ).handleFocus;

    handleFocus(new FocusEvent('focus'));
    handleFocus(new FocusEvent('focus'));

    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );

    expect(setSelectionRange).toHaveBeenCalledTimes(1);
  });

  it('should emit inputFocus when focus enters at the clock button instead of the field', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Clock keyboard open" value="09:00"></modus-wc-time-input>',
    });
    const inputFocusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', inputFocusSpy);

    (
      page.root!.querySelector(
        '.clock-icon-trigger button'
      ) as HTMLButtonElement
    ).dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await page.waitForChanges();

    expect(inputFocusSpy).toHaveBeenCalledTimes(1);
  });

  it('should ignore a blur that arrives before the control ever had focus', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Blur unfocused" value="09:00"></modus-wc-time-input>',
    });
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    (
      page.rootInstance as unknown as {
        handleComponentFocusOut: (e: FocusEvent) => void;
      }
    ).handleComponentFocusOut(new FocusEvent('focusout', { bubbles: true }));
    await page.waitForChanges();

    expect(blurSpy).not.toHaveBeenCalled();
  });

  it('should not emit inputBlur while the picker hands focus back to the control', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Close refocus" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(new FocusEvent('focus'));
    (
      page.root!.querySelector(
        '.clock-icon-trigger button'
      ) as HTMLButtonElement
    ).click();
    await page.waitForChanges();

    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);
    const row = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--hours .time-wheel-option'
    )!;
    const restoreActiveElement = stubActiveElement(row);

    const raf = captureRaf();
    (component as unknown as { closeDropdown: () => void }).closeDropdown();
    row.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    raf.run();
    raf.restore();
    restoreActiveElement();
    await page.waitForChanges();

    expect(blurSpy).not.toHaveBeenCalled();
  });

  it('should revert to an empty value when the picker was opened on a blank field', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Escape revert blank"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (
      page.root!.querySelector(
        '.clock-icon-trigger button'
      ) as HTMLButtonElement
    ).click();
    await page.waitForChanges();

    page
      .root!.querySelector<HTMLElement>(
        '.time-wheel-viewport--hours .time-wheel-option[data-wheel-copy="1"][data-value="14"]'
      )!
      .click();
    await page.waitForChanges();
    expect(component.value).not.toBe('');

    const restoreActiveElement = stubActiveElement(
      page.root!.querySelector('input')
    );
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();
    restoreActiveElement();

    expect(component.value).toBe('');
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should restore the roving focus to the reverted row when Escape undoes a pick', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Escape revert focus" value="09:00"></modus-wc-time-input>',
    });
    (
      page.root!.querySelector(
        '.clock-icon-trigger button'
      ) as HTMLButtonElement
    ).click();
    await page.waitForChanges();

    const picked = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--hours .time-wheel-option[data-wheel-copy="1"][data-value="14"]'
    )!;
    picked.click();
    await page.waitForChanges();

    const restoreActiveElement = stubActiveElement(picked);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
    restoreActiveElement();

    const restored = page.root!.querySelector<HTMLElement>(
      '.time-wheel-viewport--hours .time-wheel-option.is-selected:not([aria-hidden="true"])'
    );
    expect(restored?.dataset.value).toBe('9');
    expect(restored?.getAttribute('tabindex')).toBe('0');
  });

  it('should ignore input clicks while disabled or read-only', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input disabled aria-label="Disabled pointer" value="09:00"></modus-wc-time-input>',
    });
    const disabledInput = page.root!.querySelector('input') as HTMLInputElement;
    const disabledSelect = jest.fn();
    disabledInput.setSelectionRange = disabledSelect;
    (
      page.rootInstance as unknown as { handleInputClick: () => void }
    ).handleInputClick();
    expect(disabledSelect).not.toHaveBeenCalled();

    const readOnlyPage = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input read-only aria-label="Readonly pointer" value="09:00"></modus-wc-time-input>',
    });
    const readOnlyInput = readOnlyPage.root!.querySelector(
      'input'
    ) as HTMLInputElement;
    const readOnlySelect = jest.fn();
    readOnlyInput.setSelectionRange = readOnlySelect;
    (
      readOnlyPage.rootInstance as unknown as { handleInputClick: () => void }
    ).handleInputClick();
    expect(readOnlySelect).not.toHaveBeenCalled();
  });

  it('should no-op segment selection when input ref is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcButton],
      html: '<modus-wc-time-input aria-label="Missing input ref" value="09:00"></modus-wc-time-input>',
    });
    const harness = page.rootInstance as unknown as {
      inputRef?: HTMLInputElement;
      selectSegmentAtCaret: () => void;
    };

    harness.inputRef = undefined;

    expect(() => harness.selectSegmentAtCaret()).not.toThrow();
  });
});
