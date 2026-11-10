import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcTimeInput } from './modus-wc-time-input';
import { clampTime, parse24h, snapTimeToGrid } from './utils/time-format';
import {
  getMillisecondOptions,
  getUnitOptions,
  isWheelOptionInRange,
} from './utils/time-options';

/** Spec-only view of private time-input members. Kept off the class type so private fields do not collapse the intersection to `never`. */
interface TimeInputHarness {
  value: string;
  disabled: boolean;
  readOnly: boolean;
  datalistOptions: string[];
  showSeconds: boolean;
  size?: ModusWcTimeInput['size'];
  step?: number | null;
  el: HTMLElement;
  showDropdown: boolean;
  pickerMode: 'list' | 'wheels';
  timeInputRef?: HTMLInputElement;
  dropdownRef?: { contains: (node: Node) => boolean };
  pendingScrollToSelection: boolean;
  pendingWheelFocus: boolean;
  popperInstance?: { destroy: () => void; update: () => void };
  wheelScrollCleanups: Array<() => void>;
  handleInput: (event: Event) => void;
  handleTimePickerPointerDown: (event: MouseEvent) => void;
  handleTimePickerClick: (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => void;
  handleInputClick: (event: MouseEvent) => void;
  handleInputKeyDown: (event: KeyboardEvent) => void;
  handlePrecisionChange: () => void;
  handleEscape: (event: KeyboardEvent) => void;
  handleDocumentClick: (event: MouseEvent) => void;
  setDropdownRef: (el: TimeInputHarness['dropdownRef']) => void;
  applyWheelSelection: (partial: { minutes: number }) => void;
  showWheelPicker: () => void;
  closeDropdown: () => void;
  syncFieldBackground: () => void;
  syncOpenDropdown: () => void;
  commitTimeValue: (value24h: string, close: boolean) => void;
  componentDidUpdate: () => void;
  disconnectedCallback: () => void;
}

const harness = (page: SpecPage) =>
  page.rootInstance as unknown as TimeInputHarness;

const flushFrames = (page?: SpecPage) => {
  const queued: FrameRequestCallback[] = [];
  const schedule = (callback: FrameRequestCallback) => {
    queued.push(callback);
    return queued.length;
  };
  const spy = jest
    .spyOn(window, 'requestAnimationFrame')
    .mockImplementation(schedule);
  if (page) {
    page.win.requestAnimationFrame = schedule;
  }
  return {
    run: () => {
      const pending = queued.splice(0, queued.length);
      pending.forEach((callback) => callback(0));
    },
    restore: () => spy.mockRestore(),
  };
};

describe('modus-wc-time-input', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input datalist-id="test-list"></modus-wc-time-input>',
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
                datalist-id="time-options"
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

    expectLabelLinkedToControl(page.root!, 'input[type="time"]');

    const input = page.root!.querySelector(
      'input[type="time"]'
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

    // Set feedback attribute
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

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Change test" datalist-id="test-list"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input!.value = '01:00';
    input!.dispatchEvent(new Event('input'));
    input!.dispatchEvent(new Event('input'));
    harness(page).handleInput({ target: null } as Event);
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.any(Event),
      })
    );
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

  it('should render datalist when timeOptions are provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = ['00:00', '12:00', '23:59'];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).not.toBeNull();
    expect(datalist!.children.length).toBe(3);
  });

  it('should not render datalist when timeOptions are not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = [];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).toBeNull();
  });

  it('should not render datalist with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const datalist = page.root!.querySelector('datalist');
    expect(datalist).toBeNull();
  });

  it('should render datalist with internal ID when list prop is not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = ['00:00', '12:00', '23:59'];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).not.toBeNull();
    expect(datalist!.id).toBe(timeInput.internalDatalistId);
  });

  it('should not render datalist when list prop is provided and does not match internal ID', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input" datalist-id="external-datalist"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = ['00:00', '12:00', '23:59'];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).toBeNull();
  });

  it('should open the picker from a keyboard button activation', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time"></modus-wc-time-input>',
    });
    const instance = harness(page);
    instance.handleTimePickerClick(
      new CustomEvent('buttonClick', {
        detail: new KeyboardEvent('keydown', { key: 'Enter' }),
      })
    );
    await page.waitForChanges();
    expect(instance.showDropdown).toBe(true);
  });

  it('should open and close the wheel picker from the clock pointer', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time" value="09:00" size="sm" step="15"></modus-wc-time-input>',
    });
    const frames = flushFrames(page);
    const component = harness(page);
    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.value = '10:15';

    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    await page.waitForChanges();
    frames.run();

    expect(component.showDropdown).toBe(true);
    expect(component.pickerMode).toBe('wheels');
    expect(component.value).toBe('10:15');
    expect(page.root!.querySelector('.time-dropdown--picker')).not.toBeNull();

    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    await page.waitForChanges();
    expect(component.showDropdown).toBe(false);
    frames.restore();
  });

  it('should ignore a mouse buttonClick and a disabled clock', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time" disabled></modus-wc-time-input>',
    });
    const component = harness(page);
    component.handleTimePickerClick(
      new CustomEvent('buttonClick', { detail: new MouseEvent('click') })
    );
    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    expect(component.showDropdown).toBe(false);

    component.disabled = false;
    component.readOnly = true;
    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    expect(component.showDropdown).toBe(false);
  });

  it('should keep native picker keys on the custom panel', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time"></modus-wc-time-input>',
    });
    const component = harness(page);
    component.datalistOptions = ['09:00', '10:00'];
    await page.waitForChanges();
    const input = page.root!.querySelector('input') as HTMLInputElement;

    const ignored = new KeyboardEvent('keydown', {
      key: 'a',
      cancelable: true,
    });
    component.handleInputKeyDown(ignored);
    expect(ignored.defaultPrevented).toBe(false);

    const open = new KeyboardEvent('keydown', { key: 'F4', cancelable: true });
    component.handleInputKeyDown(open);
    await page.waitForChanges();
    expect(open.defaultPrevented).toBe(true);
    expect(component.pickerMode).toBe('list');

    const space = new KeyboardEvent('keydown', { key: ' ', cancelable: true });
    component.handleInputKeyDown(space);
    expect(component.showDropdown).toBe(true);

    component.showDropdown = false;
    component.showDropdown = false;
    component.handleInputKeyDown(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        altKey: true,
        cancelable: true,
      })
    );
    component.showDropdown = false;
    component.handleInputKeyDown(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
        altKey: true,
        cancelable: true,
      })
    );
    expect(component.showDropdown).toBe(true);

    component.handleInputClick(new MouseEvent('click', { cancelable: true }));
    expect(component.showDropdown).toBe(true);

    input.dispatchEvent(new Event('input'));
    expect(component.value).toBe(input.value);
  });

  it('should commit a datalist time and switch to wheels for Other', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time" value="09:00" min="09:05:10.250" step="30"></modus-wc-time-input>',
    });
    const frames = flushFrames(page);
    const component = harness(page);
    component.datalistOptions = ['09:00', '09:30'];
    await page.waitForChanges();

    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    await page.waitForChanges();
    frames.run();

    const option = page.root!.querySelector(
      '.time-datalist-option'
    ) as HTMLElement;
    option.click();
    await page.waitForChanges();
    expect(component.showDropdown).toBe(false);

    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    await page.waitForChanges();
    const other = page.root!.querySelector(
      '.time-datalist-option--other'
    ) as HTMLElement;
    other.click();
    await page.waitForChanges();
    frames.run();
    expect(component.pickerMode).toBe('wheels');
    expect(page.root!.querySelector('.time-dropdown--picker')).not.toBeNull();

    component.handlePrecisionChange();
    const minuteOption = page.root!.querySelector(
      '.time-wheel [tabindex="0"]'
    ) as HTMLElement;
    minuteOption.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();
    frames.run();

    component.setDropdownRef(component.dropdownRef);
    frames.restore();
  });

  it('should snap wheel selections and close from the wheel commit', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time" value="09:00" min="09:00" max="17:00" step="90" show-seconds></modus-wc-time-input>',
    });
    const frames = flushFrames(page);
    const component = harness(page);
    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    await page.waitForChanges();
    frames.run();

    component.applyWheelSelection({ minutes: 7 });
    await page.waitForChanges();
    expect(component.value).not.toBe('');

    component.commitTimeValue('not-a-time', false);
    component.commitTimeValue(component.value, true);
    await page.waitForChanges();
    expect(component.showDropdown).toBe(false);

    component.disabled = true;
    component.applyWheelSelection({ minutes: 1 });
    component.disabled = false;
    component.readOnly = true;
    component.applyWheelSelection({ minutes: 1 });
    frames.restore();
  });

  it('should move focus back to the field when the panel closes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time" value="01:00:00.500" step="0.5"></modus-wc-time-input>',
    });
    const frames = flushFrames(page);
    const component = harness(page);
    const input = page.root!.querySelector('input') as HTMLInputElement;
    const focus = jest
      .spyOn(input, 'focus')
      .mockImplementation(() => undefined);

    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    await page.waitForChanges();
    frames.run();

    const dropdown = page.root!.querySelector('.time-dropdown') as HTMLElement;
    jest.spyOn(dropdown, 'contains').mockReturnValue(true);
    Object.defineProperty(component.el.getRootNode(), 'activeElement', {
      configurable: true,
      get: () => dropdown,
    });
    component.closeDropdown();
    expect(focus).toHaveBeenCalled();
    expect(component.showDropdown).toBe(false);
    frames.restore();
  });

  it('should scroll the open panel and release it when the picker closes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time"></modus-wc-time-input>',
    });
    const frames = flushFrames(page);
    const component = harness(page);
    component.handlePrecisionChange();
    component.datalistOptions = ['08:00', '09:00'];
    await page.waitForChanges();
    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    await page.waitForChanges();
    component.dropdownRef = page.root!.querySelector(
      '.time-dropdown'
    ) as HTMLElement;
    component.syncOpenDropdown();
    component.pickerMode = 'wheels';
    component.pendingScrollToSelection = true;
    component.pendingWheelFocus = true;
    component.showDropdown = true;
    component.syncOpenDropdown();
    component.syncOpenDropdown();
    component.showDropdown = false;
    component.syncOpenDropdown();

    component.popperInstance = { destroy: jest.fn(), update: jest.fn() };
    component.wheelScrollCleanups = [jest.fn()];
    component.componentDidUpdate();
    expect(component.popperInstance).toBeUndefined();

    component.handleEscape(new KeyboardEvent('keydown', { key: 'Escape' }));
    component.showDropdown = true;
    component.handleEscape(
      new KeyboardEvent('keydown', { key: 'Escape', cancelable: true })
    );
    expect(component.showDropdown).toBe(false);

    component.showDropdown = true;
    component.handleDocumentClick(new MouseEvent('click'));
    expect(component.showDropdown).toBe(false);
    component.showDropdown = true;
    const inside = new MouseEvent('click');
    jest.spyOn(inside, 'composedPath').mockReturnValue([component.el]);
    component.handleDocumentClick(inside);
    expect(component.showDropdown).toBe(true);
    component.showDropdown = false;
    component.handleDocumentClick(new MouseEvent('click'));
    component.disconnectedCallback();
    frames.restore();
  });

  it('should cover step, locale, and snap branches', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time" label="When" lang="fr"></modus-wc-time-input>',
    });
    const component = harness(page);
    const input = page.root!.querySelector('input') as HTMLInputElement;
    component.size = undefined;
    await page.waitForChanges();

    component.timeInputRef = undefined;
    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));
    component.timeInputRef = input;
    input.value = component.value;
    component.handleTimePickerPointerDown(new MouseEvent('mousedown'));

    component.step = undefined;
    component.showSeconds = false;
    component.commitTimeValue('10:00', false);
    component.step = 0;
    component.commitTimeValue('10:00', false);
    component.step = 120;
    component.commitTimeValue('10:00:05', false);
    component.step = 0.5;
    component.commitTimeValue('10:00:00.250', false);
    component.applyWheelSelection({ minutes: 0 });
    page.root!.setAttribute('lang', '');
    component.applyWheelSelection({ minutes: 1 });

    const root = {
      activeElement: null as Node | null,
    };
    component.el.getRootNode = () => root as unknown as Document;
    component.dropdownRef = undefined;
    component.closeDropdown();
    root.activeElement = input;
    component.dropdownRef = {
      contains: () => false,
    };
    component.closeDropdown();
    component.dropdownRef = {
      contains: () => true,
    };
    component.timeInputRef = undefined;
    component.closeDropdown();

    component.step = null;
    component.commitTimeValue('01:00', false);
    component.step = -1;
    component.showSeconds = true;
    component.commitTimeValue('01:00', false);

    component.showDropdown = false;
    component.popperInstance = undefined;
    component.wheelScrollCleanups = [jest.fn()];
    component.componentDidUpdate();
    component.popperInstance = { destroy: jest.fn(), update: jest.fn() };
    component.disconnectedCallback();
    component.popperInstance = undefined;
    component.disconnectedCallback();
  });

  it('should copy the field background and tolerate a missing input', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Time" step="7"></modus-wc-time-input>',
    });
    const component = harness(page);
    const computed = (backgroundColor: string) =>
      (() => ({ backgroundColor })) as unknown as typeof getComputedStyle;
    const previous = globalThis.getComputedStyle;
    globalThis.getComputedStyle = computed('rgb(1, 2, 3)');
    const setProperty = jest.spyOn(page.root!.style, 'setProperty');
    component.syncFieldBackground();
    expect(setProperty).toHaveBeenCalledWith(
      '--modus-wc-time-input-field-bg',
      'rgb(1, 2, 3)'
    );
    globalThis.getComputedStyle = computed('');
    component.syncFieldBackground();
    globalThis.getComputedStyle = previous;

    component.timeInputRef = undefined;
    component.value = '';
    component.syncFieldBackground();
    component.applyWheelSelection({ minutes: 0 });
    setProperty.mockRestore();
  });
});

describe('time picker grid', () => {
  it('should keep an overnight value inside a wrapping min and max', () => {
    const evening = parse24h('23:00');
    const morning = parse24h('01:00');
    expect(evening && clampTime(evening, '22:00', '06:00').hours24).toBe(23);
    expect(morning && clampTime(morning, '22:00', '06:00').hours24).toBe(1);
  });

  it('should not wrap a late step round onto the next day', () => {
    const parsed = parse24h('23:59:59');
    const snapped = parsed && snapTimeToGrid(parsed, 7);
    expect(snapped && snapped.hours24).toBe(23);
    expect(
      snapped &&
        (snapped.hours24 * 3600 + snapped.minutes * 60 + snapped.seconds) % 7
    ).toBe(0);
  });

  it('should pull an hour selection up to min', () => {
    const parsed = parse24h('09:00');
    const snapped = parsed && snapTimeToGrid(parsed, 60, '09:30', '17:00');
    expect(
      snapped &&
        `${snapped.hours24}:${String(snapped.minutes).padStart(2, '0')}`
    ).toBe('9:30');
  });

  it('should list minute rows on the min anchor', () => {
    expect(getUnitOptions(15, 5).map((option) => option.value)).toEqual([
      '5',
      '20',
      '35',
      '50',
    ]);
  });

  it('should list millisecond rows on the step', () => {
    expect(getMillisecondOptions(0.5).map((option) => option.label)).toEqual([
      '000',
      '500',
    ]);
  });

  it('should keep hour rows for a range that crosses midnight', () => {
    const state = {
      hour: 23,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      period: 'PM' as const,
    };
    expect(
      isWheelOptionInRange('hours', '23', state, {
        showSeconds: false,
        hourFormat: '24hrs',
        min: '22:00',
        max: '06:00',
      })
    ).toBe(true);
    expect(
      isWheelOptionInRange('hours', '12', state, {
        showSeconds: false,
        hourFormat: '24hrs',
        min: '22:00',
        max: '06:00',
      })
    ).toBe(false);
  });
});
