import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcTimeInput } from './modus-wc-time-input';

describe('modus-wc-time-input', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Default input" datalist-id="test-list"></modus-wc-time-input>',
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
      html: '<modus-wc-time-input label="Start time" aria-label="Start time"></modus-wc-time-input>',
    });

    expectLabelLinkedToControl(page.root!, 'input[type="time"]');
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

  // --- pickerType: 'picker' tests ---

  it('should render text input with readonly when pickerType is picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    expect(input!.type).toBe('text');
    expect(input!.readOnly).toBe(true);
  });

  it('should not render native datalist element when pickerType is picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });
    const instance = page.rootInstance as ModusWcTimeInput;
    instance.datalistOptions = ['09:00', '12:00'];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).toBeNull();
  });

  it('should display formatted 24-hour value in picker input', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="14:30"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('14:30');
  });

  it('should display formatted 12-hour value in picker input when use12Hour is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="14:30"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('2:30 PM');
  });

  it('should display AM time correctly in 12-hour picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:45"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('9:45 AM');
  });

  it('should display midnight (00:00) as 12:00 AM in 12-hour picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="00:00"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('12:00 AM');
  });

  it('should display noon (12:00) as 12:00 PM in 12-hour picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="12:00"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('12:00 PM');
  });

  it('should include seconds in picker display when showSeconds is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour show-seconds value="09:45:30"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('9:45:30 AM');
  });

  it('should show picker dropdown when input is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });

    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    const dropdown = page.root!.querySelector('.time-picker-dropdown');
    expect(dropdown).not.toBeNull();
  });

  it('should render picker panel with hour and minute columns', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const columns = page.root!.querySelectorAll('.time-picker-column');
    // 24-hour mode: hour + minute = 2 columns
    expect(columns.length).toBe(2);
  });

  it('should render picker panel with AM/PM column when use12Hour is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const columns = page.root!.querySelectorAll('.time-picker-column');
    // 12-hour mode: hour + minute + ampm = 3 columns
    expect(columns.length).toBe(3);
  });

  it('should render picker panel with seconds column when showSeconds is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour show-seconds value="09:45:30"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const columns = page.root!.querySelectorAll('.time-picker-column');
    // 12-hour with seconds: hour + minute + second + ampm = 4 columns
    expect(columns.length).toBe(4);
  });

  it('should highlight the selected hour in the picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const selectedItems = page.root!.querySelectorAll(
      '.time-picker-item--selected'
    );
    // Both hour (09) and minute (45) should be selected
    expect(selectedItems.length).toBeGreaterThanOrEqual(2);
  });

  it('should update value when hour is selected from picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Click the first hour button (00 in 24-hour mode)
    const hourColumn = page.root!.querySelector('.time-picker-column');
    const firstHourBtn = hourColumn!.querySelector(
      'button'
    ) as HTMLButtonElement;
    firstHourBtn.click();
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(instance.value).toBe('00:45');
  });

  it('should update value when minute is selected from picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Click the second column (minutes), select the 30th item (value=30)
    const columns = page.root!.querySelectorAll('.time-picker-column');
    const minuteColumn = columns[1];
    const thirtiethMinBtn = minuteColumn.querySelectorAll('button')[30];
    thirtiethMinBtn.click();
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(instance.value).toBe('09:30');
  });

  it('should toggle AM/PM correctly in 12-hour picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // AM/PM column is the last column
    const columns = page.root!.querySelectorAll('.time-picker-column');
    const ampmColumn = columns[columns.length - 1];
    // Click PM (second button)
    const pmBtn = ampmColumn.querySelectorAll('button')[1];
    pmBtn.click();
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    // 09:00 AM → 21:00 (9 + 12)
    expect(instance.value).toBe('21:00');
  });

  it('should snapshot picker type with 12-hour format', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:45"></modus-wc-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should snapshot picker type with seconds', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" show-seconds value="09:45:30"></modus-wc-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  // --- pickerType: 'datalist' tests ---

  it('should render text input with readonly when pickerType is datalist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:45 AM"></modus-wc-time-input>`,
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    expect(input!.type).toBe('text');
    expect(input!.readOnly).toBe(true);
  });

  it('should show datalist panel with options and Other when dropdown is open', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:45 AM"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance.datalistOptions = ['9:15 AM', '9:30 AM', '9:45 AM'];
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const panel = page.root!.querySelector('.time-datalist-panel');
    expect(panel).not.toBeNull();

    const buttons = panel!.querySelectorAll('button');
    // 3 options + 1 Other
    expect(buttons.length).toBe(4);
    expect(buttons[3].textContent?.trim()).toBe('Other');
  });

  it('should highlight selected option in datalist panel', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:45 AM"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance.datalistOptions = ['9:15 AM', '9:30 AM', '9:45 AM'];
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const selected = page.root!.querySelector('.time-picker-item--selected');
    expect(selected).not.toBeNull();
    expect(selected!.textContent?.trim()).toBe('9:45 AM');
  });

  it('should select datalist option and update value', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:15 AM"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance.datalistOptions = ['9:15 AM', '9:30 AM', '9:45 AM'];
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const panel = page.root!.querySelector('.time-datalist-panel')!;
    const optionBtns = panel.querySelectorAll(
      '.time-picker-item:not(.time-picker-item--other)'
    );
    (optionBtns[1] as HTMLButtonElement).click();
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(instance.value).toBe('9:30 AM');
    // Dropdown should close
    const dropdown = page.root!.querySelector('.time-picker-dropdown');
    expect(dropdown).toBeNull();
  });

  it('should close dropdown and allow free input when Other is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:15 AM"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance.datalistOptions = ['9:15 AM', '9:30 AM'];
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const otherBtn = page.root!.querySelector(
      '.time-picker-item--other'
    ) as HTMLButtonElement;
    otherBtn.click();
    await page.waitForChanges();

    // Dropdown should close
    const dropdown = page.root!.querySelector('.time-picker-dropdown');
    expect(dropdown).toBeNull();
    // Free input should be enabled (input is no longer readonly)
    expect(instance['allowFreeInput']).toBe(true);
  });

  it('should snapshot datalist picker type', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:45 AM"></modus-wc-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should close dropdown on Escape key', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    // Verify dropdown is open
    expect(page.root!.querySelector('.time-picker-dropdown')).not.toBeNull();

    // Simulate Escape key
    instance.handleEscapeKey(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    expect(page.root!.querySelector('.time-picker-dropdown')).toBeNull();
  });

  it('should close dropdown on outside click', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    // Simulate outside click
    const outsideEl = document.createElement('div');
    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'composedPath', {
      value: () => [outsideEl],
    });
    instance.handleClickOutside(clickEvent);
    await page.waitForChanges();

    expect(instance['showDropdown']).toBe(false);
  });

  it('should clean up popper instance on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    // Simulate a live popper instance
    const destroySpy = jest.fn();
    instance['popperInstance'] = {
      destroy: destroySpy,
    } as unknown as ReturnType<typeof import('@popperjs/core').createPopper>;

    instance.disconnectedCallback();

    expect(destroySpy).toHaveBeenCalled();
    expect(instance['popperInstance']).toBeNull();
  });

  it('should update value on free input change after Other is selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:15 AM"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance.datalistOptions = ['9:15 AM', '9:30 AM'];
    instance['allowFreeInput'] = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.value = '10:00 AM';
    input.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(instance.value).toBe('10:00 AM');
  });

  it('should emit blur event and reset allowFreeInput on free input blur', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Datalist picker" picker-type="datalist" value="9:15 AM"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['allowFreeInput'] = true;
    await page.waitForChanges();

    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
    expect(instance['allowFreeInput']).toBe(false);
  });

  it('should update value correctly when selecting hour while currently PM', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="15:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Select hour 3 (which is 15:00 → 15:xx in PM when non-12 is clicked)
    const hourColumn = page.root!.querySelector('.time-picker-column');
    // Hour buttons in 12-hour mode: 01..12. Click the 5th button (05 → maps to 17)
    const fifthHourBtn = hourColumn!.querySelectorAll('button')[4];
    fifthHourBtn.click();
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    // 5 in PM = 5 + 12 = 17
    expect(instance.value).toBe('17:00');
  });

  it('should update value when selecting hour 12 while currently PM', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="15:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    // Click hour 12 (last button in 12-hour column)
    const hourColumn = page.root!.querySelector('.time-picker-column');
    const twelfthHourBtn = hourColumn!.querySelectorAll('button')[11];
    twelfthHourBtn.click();
    await page.waitForChanges();

    // 12 in PM stays 12:00
    expect(instance.value).toBe('12:00');
  });

  it('should update value when selecting hour 12 while currently AM', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    // Click hour 12 (last button, index 11) while currently AM → should become 00:00
    const hourColumn = page.root!.querySelector('.time-picker-column');
    const twelfthHourBtn = hourColumn!.querySelectorAll('button')[11];
    twelfthHourBtn.click();
    await page.waitForChanges();

    // 12 in AM = 0 (midnight)
    expect(instance.value).toBe('00:00');
  });

  it('should update value when second is selected from picker', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" show-seconds value="09:00:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['showDropdown'] = true;
    await page.waitForChanges();

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Columns in 24-hour with-seconds: hours, minutes, seconds
    const columns = page.root!.querySelectorAll('.time-picker-column');
    const secondColumn = columns[2];
    // Click second 30
    const thirtiethSecBtn = secondColumn.querySelectorAll('button')[30];
    thirtiethSecBtn.click();
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(instance.value).toBe('09:00:30');
  });

  it('should not open dropdown when input is disabled and clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" disabled value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    // Directly call the click handler (disabled attribute prevents DOM click)
    instance['handleInputClick']();
    await page.waitForChanges();

    expect(instance['showDropdown']).toBe(false);
  });

  it('should not open dropdown when input is readonly and clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" read-only value="09:45"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['handleInputClick']();
    await page.waitForChanges();

    expect(instance['showDropdown']).toBe(false);
  });

  it('should return empty string from formatPickerDisplayValue when value is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker"></modus-wc-time-input>`,
    });

    const input = page.root!.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('');
  });

  it('should not change value when AM is clicked and already AM', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Directly invoke handlePickerAmPm with AM when already AM (no-op branch)
    instance['handlePickerAmPm']('AM');
    await page.waitForChanges();

    // Value stays the same
    expect(instance.value).toBe('09:00');
  });

  it('should convert PM to AM via handlePickerAmPm', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="15:30"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['handlePickerAmPm']('AM');
    await page.waitForChanges();

    // 15:30 PM → 03:30 AM
    expect(instance.value).toBe('03:30');
  });

  it('should set hour to 0 when selecting 12 while AM via handlePickerHour', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    instance['handlePickerHour'](12);
    await page.waitForChanges();

    // 12 in AM = midnight (00:00)
    expect(instance.value).toBe('00:00');
  });

  it('should set correct hour when selecting non-12 while AM via handlePickerHour', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Picker" picker-type="picker" use12-hour value="09:00"></modus-wc-time-input>`,
    });

    const instance = page.rootInstance as ModusWcTimeInput;
    // Select hour 5 while AM (isCurrentPM=false, hour !== 12)
    instance['handlePickerHour'](5);
    await page.waitForChanges();

    expect(instance.value).toBe('05:00');
  });
});
