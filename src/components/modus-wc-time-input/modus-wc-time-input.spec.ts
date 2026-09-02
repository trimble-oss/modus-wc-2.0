import { newSpecPage } from '@stencil/core/testing';
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
  toHours24,
} from './utils/time-format';
import {
  buildCircularWheelOptions,
  buildDatalistOptions,
  getHourOptions,
  TIME_WHEEL_LOOP_COPIES,
  valueFromWheelState,
} from './utils/time-options';
import {
  applyStepToSegment,
  displayFromValue,
  getSkeleton,
  isSkeletonDisplayComplete,
  parseSkeletonDisplay,
  typeDigitInSegment,
} from './utils/time-segments';

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
});

describe('modus-wc-time-input', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Default input"></modus-wc-time-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      html: '<modus-wc-time-input label="Start time" aria-label="Start time"></modus-wc-time-input>',
    });

    expectLabelLinkedToControl(page.root!, 'input[type="text"]');
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Blur test"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    input!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event when typing a complete time', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Change test"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    for (const key of ['0', '9', '4', '5']) {
      input.dispatchEvent(
        new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true,
        })
      );
      await page.waitForChanges();
    }

    expect(changeSpy).toHaveBeenCalled();
    const component = page.rootInstance as ModusWcTimeInput;
    expect(component.value).toBe('09:45');
  });

  it('should emit an empty value when segments are cleared', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Clear segments" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Backspace',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(component.value).toBe('');
  });

  it('should emit focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Value test" value="21:30"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('21:30');
  });

  it('should display formatted 12h value while keeping 24h internal value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Value test" value="21:30"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('21:30');
  });

  it('should open picker dropdown with 2 wheels in 24h mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Picker" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const raf = captureRaf();

    (component as unknown as { showDropdown: boolean }).showDropdown = true;
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Picker seconds 12" format="12hrs" show-seconds value="09:45:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const wheels = page.root!.querySelectorAll('.time-wheel-viewport');
    expect(wheels.length).toBe(4);
  });

  it('should update value when a wheel option is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should close dropdown when clicking outside the component', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should close dropdown when the window blurs', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Window blur" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    window.dispatchEvent(new Event('blur'));
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should ignore outside pointerdown events while the dropdown is already closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Suppress blur"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (
      component as unknown as { suppressBlurCommit: boolean }
    ).suppressBlurCommit = true;
    const input = page.root!.querySelector('input') as HTMLInputElement;
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Skeleton"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    expect(input.value).toBe('--:--');
  });

  it('should submit the canonical 24h value through a hidden input', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should open the dropdown when the clock button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Clock open" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const button = page.root!.querySelector(
      '.clock-icon-trigger'
    ) as HTMLButtonElement;

    button.click();
    await page.waitForChanges();

    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(true);
  });

  it('should close the dropdown when the clock button is clicked while open', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Clock close" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const button = page.root!.querySelector(
      '.clock-icon-trigger'
    ) as HTMLButtonElement;
    button.click();
    await page.waitForChanges();
    expect(
      (component as unknown as { showDropdown: boolean }).showDropdown
    ).toBe(false);
  });

  it('should keep the dropdown closed when handleInputClick is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should close the dropdown when Enter is pressed on the input', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Interval attr" interval-minutes="30"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).not.toBeNull();
  });

  it('should use the datalist dropdown when variant is datalist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Variant datalist" variant="datalist"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-dropdown--datalist')).not.toBeNull();
  });

  it('should keep picker wheels when intervalMinutes is set only as a property', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Letter guard" value="09:45"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    const event = new KeyboardEvent('keydown', {
      key: 'x',
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('should emit inputChange with target.value in 24h format', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Wheel keyboard" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    const options = Array.from(
      page.root!.querySelectorAll<HTMLElement>(
        '.time-wheel--hours .time-wheel-option[data-wheel-copy="1"]'
      )
    );
    expect(options.length).toBeGreaterThan(2);

    const first = options[0];
    const second = options[1];
    const last = options[options.length - 1];

    // Select the first option
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

    // Trigger End on first
    first.focus();
    first.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'End', bubbles: true })
    );
    await page.waitForChanges();
    expect(last.tabIndex).toBe(0);

    // Trigger Home on last
    last.focus();
    last.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Home', bubbles: true })
    );
    await page.waitForChanges();
    expect(first.tabIndex).toBe(0);
  });

  it('should ignore events on non-a11y copy', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Listbox guards"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const moveListboxFocus = (
      component as unknown as {
        moveListboxFocus: (
          current: HTMLElement,
          direction: 1 | -1,
          itemSelector: string
        ) => void;
      }
    ).moveListboxFocus;

    const noListboxEl = page.doc.createElement('div');
    // Line 886: no closest('[role="listbox"]')
    expect(() => moveListboxFocus(noListboxEl, 1, '.item')).not.toThrow();

    const listboxEl = page.doc.createElement('div');
    listboxEl.setAttribute('role', 'listbox');
    const childEl = page.doc.createElement('div');
    listboxEl.appendChild(childEl);
    // Line 893: index < 0 (current not in items matching selector)
    expect(() => moveListboxFocus(childEl, 1, '.non-existent')).not.toThrow();
  });

  it('should manage beforeinput event listeners correctly when setting input ref', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Before input"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const event = new Event('beforeinput') as InputEvent;
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

    const handleBeforeInput = (
      component as unknown as { handleBeforeInput: (e: InputEvent) => void }
    ).handleBeforeInput;

    component.disabled = true;
    handleBeforeInput(event);
    expect(preventDefaultSpy).not.toHaveBeenCalled();

    component.disabled = false;
    handleBeforeInput(event);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should handle early returns in keyboard option handlers when listbox is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const dummyTarget = page.doc.createElement('div');
    // No listbox parent

    const handleWheelKeyDown = (
      component as unknown as {
        handleWheelOptionKeyDown: (
          e: KeyboardEvent,
          isA11y: boolean,
          onSelect: () => void,
          val: string
        ) => void;
      }
    ).handleWheelOptionKeyDown;

    // Home
    let event = new KeyboardEvent('keydown', { key: 'Home' });
    Object.defineProperty(event, 'currentTarget', { value: dummyTarget });
    expect(() => handleWheelKeyDown(event, true, jest.fn(), '0')).not.toThrow();

    // End
    event = new KeyboardEvent('keydown', { key: 'End' });
    Object.defineProperty(event, 'currentTarget', { value: dummyTarget });
    expect(() => handleWheelKeyDown(event, true, jest.fn(), '0')).not.toThrow();

    // Datalist ArrowDown without listbox (using moveListboxFocus)
    const handleDatalistKeyDown = (
      component as unknown as {
        handleDatalistOptionKeyDown: (
          e: KeyboardEvent,
          onSelect: () => void
        ) => void;
      }
    ).handleDatalistOptionKeyDown;

    event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    Object.defineProperty(event, 'currentTarget', { value: dummyTarget });
    expect(() => handleDatalistKeyDown(event, jest.fn())).not.toThrow();
  });

  it('should handle unmatched values when rendering wheels and datalists', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
    expect(options[0].getAttribute('tabindex')).toBe('0'); // Fallback to first

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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should handle picker focus RAF when dropdown ref or focus target is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Picker RAF guards" value="09:45"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    const raf = captureRaf();
    (component as unknown as { showDropdown: boolean }).showDropdown = true;
    await page.waitForChanges();

    page.root!.querySelectorAll('.time-wheel-option').forEach((option) => {
      option.setAttribute('tabindex', '-1');
    });
    (component as unknown as { dropdownRef?: HTMLElement }).dropdownRef =
      undefined;

    expect(() => raf.run()).not.toThrow();
    raf.restore();
  });

  it('should handle empty wheel options when resolving focusable key', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    expect(() =>
      (
        component as unknown as {
          renderWheel: (
            kind: string,
            options: { label: string; value: string }[],
            selectedValue: string,
            onSelect: (value: string) => void,
            circular?: boolean
          ) => unknown;
        }
      ).renderWheel('test', [], '0', () => {}, false)
    ).not.toThrow();
  });

  it('should not throw from handleOtherSelect when the input ref is unset', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should no-op saveWheelScrollPositions without a dropdown reference', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Save guard"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    expect(() =>
      (
        component as unknown as { saveWheelScrollPositions: () => void }
      ).saveWheelScrollPositions()
    ).not.toThrow();
  });

  it('should no-op restoreWheelScrollPositions without a dropdown reference or saved positions', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Restore guard"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    expect(() =>
      (
        component as unknown as { restoreWheelScrollPositions: () => void }
      ).restoreWheelScrollPositions()
    ).not.toThrow();

    const button = page.root!.querySelector(
      '.clock-icon-trigger'
    ) as HTMLButtonElement;
    button.click();
    await page.waitForChanges();

    expect(() =>
      (
        component as unknown as { restoreWheelScrollPositions: () => void }
      ).restoreWheelScrollPositions()
    ).not.toThrow();
  });

  it('should return an empty viewport kind when no matching class exists', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Viewport kind"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const viewport = page.doc.createElement('div');
    viewport.classList.add('time-wheel-viewport');

    const kind = (
      component as unknown as {
        getWheelViewportKind: (v: HTMLElement) => string;
      }
    ).getWheelViewportKind(viewport);

    expect(kind).toBe('');
  });

  it('should return the middle copy for circular wheels and the sole match otherwise', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Preferred option"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const getPreferred = (
      component as unknown as {
        getPreferredSelectedOption: (v: HTMLElement) => HTMLElement | null;
      }
    ).getPreferredSelectedOption.bind(component);

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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Set height"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
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

    const height = (
      component as unknown as {
        getCircularSetHeight: (v: HTMLElement, c: number) => number;
      }
    ).getCircularSetHeight(viewport, 2);

    expect(height).toBe(20);
  });

  it('should fall back to option height times count when there are not enough copies', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Set height fallback"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const viewport = page.doc.createElement('div');
    const item = page.doc.createElement('li');
    item.classList.add('time-wheel-option');
    Object.defineProperty(item, 'offsetHeight', {
      value: 15,
      configurable: true,
    });
    viewport.appendChild(item);

    const height = (
      component as unknown as {
        getCircularSetHeight: (v: HTMLElement, c: number) => number;
      }
    ).getCircularSetHeight(viewport, 5);

    expect(height).toBe(75);
  });

  it('should treat a missing first item as zero height in the fallback branch', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Set height empty"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const viewport = page.doc.createElement('div');

    const height = (
      component as unknown as {
        getCircularSetHeight: (v: HTMLElement, c: number) => number;
      }
    ).getCircularSetHeight(viewport, 5);

    expect(height).toBe(0);
  });

  it('should wrap scroll position forward and backward to stay within the circular set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Maintain scroll"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
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

    const maintain = (
      component as unknown as {
        maintainCircularScroll: (v: HTMLElement, c: number) => void;
      }
    ).maintainCircularScroll.bind(component);

    maintain(viewport, 2);
    expect(viewport.scrollTop).toBe(25);

    (viewport as unknown as { scrollTop: number }).scrollTop = 45;
    maintain(viewport, 2);
    expect(viewport.scrollTop).toBe(25);
  });

  it('should skip circular scroll maintenance while locked, with too few options, or a zero height set', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Maintain guard"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const viewport = page.doc.createElement('div');
    const maintain = (
      component as unknown as {
        maintainCircularScroll: (v: HTMLElement, c: number) => void;
      }
    ).maintainCircularScroll.bind(component);

    (
      component as unknown as { circularScrollLock: boolean }
    ).circularScrollLock = true;
    expect(() => maintain(viewport, 5)).not.toThrow();

    (
      component as unknown as { circularScrollLock: boolean }
    ).circularScrollLock = false;
    expect(() => maintain(viewport, 1)).not.toThrow();
    expect(() => maintain(viewport, 5)).not.toThrow();
  });

  it('should bind circular scroll listeners and preserve scroll position across wheel selection', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Circular integration" value="09:05"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const button = page.root!.querySelector(
      '.clock-icon-trigger'
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Datalist integration" interval-minutes="30"></modus-wc-time-input>',
    });
    const button = page.root!.querySelector(
      '.clock-icon-trigger'
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
      components: [ModusWcTimeInput],
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

    (
      component as unknown as { saveWheelScrollPositions: () => void }
    ).saveWheelScrollPositions();

    hoursViewport.scrollTop = 0;
    unknownViewport.scrollTop = 0;

    (
      component as unknown as { restoreWheelScrollPositions: () => void }
    ).restoreWheelScrollPositions();

    expect(hoursViewport.scrollTop).toBe(42);
    expect(unknownViewport.scrollTop).toBe(0);
  });

  it('should skip a wheel with no selected option when scrolling to the selection', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="No selection" step="15" show-seconds value="09:00:07"></modus-wc-time-input>',
    });
    const button = page.root!.querySelector(
      '.clock-icon-trigger'
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
      components: [ModusWcTimeInput],
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
      (
        component as unknown as { bindCircularWheelListeners: () => void }
      ).bindCircularWheelListeners()
    ).not.toThrow();
  });

  it('should select a pending segment after render when focused', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should step up with ArrowUp and navigate segments with arrow keys', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

  it('should select the first segment on focus and the clicked segment on input click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Focus click" value="09:45"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const setSelectionRange = jest.fn();
    input.setSelectionRange = setSelectionRange;
    Object.defineProperty(input, 'selectionStart', {
      value: 3,
      configurable: true,
    });

    input.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );
    expect(setSelectionRange).toHaveBeenCalledWith(0, 2);

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

  it('should paste a valid time and ignore invalid or empty clipboard data', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Blur invalid"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const harness = component as unknown as {
      displayValue: string;
      isInvalid: boolean;
    };

    harness.displayValue = '09:--';
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();
    expect(harness.isInvalid).toBe(true);

    harness.isInvalid = false;
    harness.displayValue = '99:99';
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();
    expect(harness.isInvalid).toBe(true);
  });

  it('should refresh display when committing a complete time equal to the current value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Blur change" value="09:00"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    (component as unknown as { displayValue: string }).displayValue = '09:45';
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(component.value).toBe('09:45');
  });

  it('should no-op selectSegment when the input ref is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
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
      components: [ModusWcTimeInput],
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

    input.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'p',
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(component.value).toBe('21:45');
  });
});
