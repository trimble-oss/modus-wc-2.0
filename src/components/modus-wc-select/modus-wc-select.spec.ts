import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcSelect } from './modus-wc-select';

describe('modus-wc-select', () => {
  const defaultOptions = [
    { label: 'Select an option', value: '', disabled: true, hidden: true },
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputLabel],
      html: '<modus-wc-select label="Label" aria-label="Default select"></modus-wc-select>',
    });

    const component = page.rootInstance as ModusWcSelect;
    component.options = defaultOptions;

    await page.waitForChanges();

    const renderedOptions = page.root?.querySelectorAll('option');

    expect(renderedOptions?.length).toBe(4);
    expect(renderedOptions?.[0]).toHaveAttribute('hidden');
    expect(renderedOptions?.[0]).toHaveAttribute('disabled');
    expect(renderedOptions?.[0]).toHaveAttribute('selected');
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: `<modus-wc-select
        aria-describedby="description"
        aria-label="Test select"
        auto-focus="true"
        bordered="false"
        custom-class="test-class"
        disabled="true"
        input-aria-invalid="true"
        input-id="custom-id"
        input-tab-index="1"
        label="Test label"
        name="test-name"
        options={[{ label: 'Option 1', value: '1' }]}
        read-only="true"
        required="true"
        size="lg"
        value="1"
      ></modus-wc-select>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputLabel],
      html: '<modus-wc-select label="Country" aria-label="Country"></modus-wc-select>',
    });

    expectLabelLinkedToControl(page.root!, 'select');
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputFeedback],
      html: '<modus-wc-select aria-label="Error input"></modus-wc-select>',
    });

    // Set feedback attribute
    const component = page.rootInstance as ModusWcSelect;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Blur test"></modus-wc-select>',
    });
    const select = page.root!.querySelector('select');
    expect(select).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    select!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Change test"></modus-wc-select>',
    });
    const select = page.root!.querySelector('select');
    expect(select).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    select!.value = 'New value';
    select!.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.any(Event),
      })
    );
  });

  it('should not revert value on change when not readOnly', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select value="1" aria-label="Editable select"></modus-wc-select>',
    });

    const component = page.rootInstance as ModusWcSelect;
    component.options = defaultOptions;
    await page.waitForChanges();

    const select = page.root!.querySelector('select') as HTMLSelectElement;

    select.value = '2';
    select.dispatchEvent(new Event('change', { bubbles: true }));
    await page.waitForChanges();

    expect(select.value).toBe('2');
  });

  it('should not prevent default for keyDown when not readOnly', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Editable select"></modus-wc-select>',
    });

    const select = page.root!.querySelector('select') as HTMLSelectElement;
    const event = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

    select.dispatchEvent(event);
    await page.waitForChanges();

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should not prevent default for mouseDown when not readOnly', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Editable select"></modus-wc-select>',
    });

    const select = page.root!.querySelector('select') as HTMLSelectElement;
    const focusSpy = jest.spyOn(select, 'focus');
    const event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

    select.dispatchEvent(event);
    await page.waitForChanges();

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(focusSpy).not.toHaveBeenCalled();
  });

  it('should emit focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Focus test"></modus-wc-select>',
    });
    const select = page.root!.querySelector('select');
    expect(select).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    select!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should render options with various states', async () => {
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ];

    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: `<modus-wc-select aria-label="Options test"></modus-wc-select>`,
    });

    const component = page.rootInstance as ModusWcSelect;
    component.options = options;
    component.value = '2';

    await page.waitForChanges();

    const renderedOptions = page.root?.querySelectorAll('option');

    expect(renderedOptions?.length).toBe(3);
    expect(renderedOptions?.[1]).toHaveAttribute('disabled');
    expect(renderedOptions?.[1]).toHaveAttribute('selected');
    expect(page.root).toMatchSnapshot();
  });

  it('should not select the first real option when value is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputLabel],
      html: '<modus-wc-select label="Select an account" aria-label="Select an account"></modus-wc-select>',
    });

    const component = page.rootInstance as ModusWcSelect;
    component.value = '';
    component.options = [
      { label: 'Select an account', value: '', disabled: true, hidden: true },
      { label: 'Account 1', value: 'acc-1' },
      { label: 'Account 2', value: 'acc-2' },
    ];

    await page.waitForChanges();

    const select = page.root?.querySelector('select');
    const renderedOptions = select?.querySelectorAll('option');

    expect(component.value).toBe('');
    expect(renderedOptions?.length).toBe(3);
    expect(renderedOptions?.[0]).toHaveAttribute('selected');
    expect(renderedOptions?.[0]).toHaveAttribute('hidden');
    expect(renderedOptions?.[1]).not.toHaveAttribute('selected');
    expect(renderedOptions?.[1]?.textContent).toBe('Account 1');
    expect(page.root).toMatchSnapshot();
  });

  it('should not mark the first real option as selected when value is empty and options omit an empty-value option', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Select an account"></modus-wc-select>',
    });

    const component = page.rootInstance as ModusWcSelect;
    component.value = '';
    component.options = [
      { label: 'Account 1', value: 'acc-1' },
      { label: 'Account 2', value: 'acc-2' },
    ];

    await page.waitForChanges();

    const renderedOptions = page.root?.querySelectorAll('option');

    expect(component.value).toBe('');
    expect(renderedOptions?.length).toBe(2);
    expect(renderedOptions?.[0]).not.toHaveAttribute('selected');
    expect(renderedOptions?.[1]).not.toHaveAttribute('selected');
  });

  it('should apply xs size class when size is xs', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select size="xs" aria-label="Extra small select"></modus-wc-select>',
    });

    const select = page.root!.querySelector('select');
    expect(select).toHaveClass('modus-wc-select-xs');
  });

  it('should apply xl size class when size is xl', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select size="xl" aria-label="Extra large select"></modus-wc-select>',
    });

    const select = page.root!.querySelector('select');
    expect(select).toHaveClass('modus-wc-select-xl');
  });

  it('should map xs select size to sm label and feedback sizes', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputLabel, ModusWcInputFeedback],
      html: '<modus-wc-select size="xs" label="Country" aria-label="Extra small select"></modus-wc-select>',
    });

    const component = page.rootInstance as ModusWcSelect;
    component.feedback = { level: 'error', message: 'Required' };
    await page.waitForChanges();

    const label = page.root!.querySelector(
      'modus-wc-input-label'
    ) as HTMLElement & { size?: string };
    const feedback = page.root!.querySelector(
      'modus-wc-input-feedback'
    ) as HTMLElement & { size?: string };

    expect(label?.size).toBe('sm');
    expect(feedback?.size).toBe('sm');
  });

  it('should map xl select size to lg label and feedback sizes', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputLabel, ModusWcInputFeedback],
      html: '<modus-wc-select size="xl" label="Country" aria-label="Extra large select"></modus-wc-select>',
    });

    const component = page.rootInstance as ModusWcSelect;
    component.feedback = { level: 'error', message: 'Required' };
    await page.waitForChanges();

    const label = page.root!.querySelector(
      'modus-wc-input-label'
    ) as HTMLElement & { size?: string };
    const feedback = page.root!.querySelector(
      'modus-wc-input-feedback'
    ) as HTMLElement & { size?: string };

    expect(label?.size).toBe('lg');
    expect(feedback?.size).toBe('lg');
  });

  it('should use md label size when size is unset', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputLabel],
      html: '<modus-wc-select label="Country" aria-label="Country"></modus-wc-select>',
    });

    const component = page.rootInstance as ModusWcSelect;
    component.size = undefined;
    await page.waitForChanges();

    const label = page.root!.querySelector(
      'modus-wc-input-label'
    ) as HTMLElement & {
      size?: string;
    };
    expect(label?.size).toBe('md');
  });

  describe('readOnly', () => {
    it('should apply readonly class and aria-readonly when readOnly is true', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" aria-label="Readonly select"></modus-wc-select>',
      });

      const select = page.root!.querySelector('select');
      expect(select).toHaveClass('modus-wc-select--readonly');
      expect(select?.getAttribute('aria-readonly')).toBe('true');
      expect(page.root).toMatchSnapshot();
    });

    it('should not apply readonly class when readOnly is false', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select aria-label="Editable select"></modus-wc-select>',
      });

      const select = page.root!.querySelector('select');
      expect(select).not.toHaveClass('modus-wc-select--readonly');
      expect(select?.getAttribute('aria-readonly')).toBeNull();
    });

    it('should not emit inputChange when readOnly', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" value="1" aria-label="Readonly select"></modus-wc-select>',
      });

      const component = page.rootInstance as ModusWcSelect;
      component.options = defaultOptions;
      await page.waitForChanges();

      const select = page.root!.querySelector('select') as HTMLSelectElement;
      const changeSpy = jest.fn();
      page.root!.addEventListener('inputChange', changeSpy);

      select.value = '2';
      select.dispatchEvent(new Event('input', { bubbles: true }));
      await page.waitForChanges();

      expect(changeSpy).not.toHaveBeenCalled();
      expect(component.value).toBe('1');
      expect(select.value).toBe('1');
    });

    it('should revert value on change when readOnly', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" value="1" aria-label="Readonly select"></modus-wc-select>',
      });

      const component = page.rootInstance as ModusWcSelect;
      component.options = defaultOptions;
      await page.waitForChanges();

      const select = page.root!.querySelector('select') as HTMLSelectElement;

      select.value = '2';
      select.dispatchEvent(new Event('change', { bubbles: true }));
      await page.waitForChanges();

      expect(component.value).toBe('1');
      expect(select.value).toBe('1');
    });

    it('should remain tabbable when readOnly', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" input-tab-index="0" aria-label="Readonly select"></modus-wc-select>',
      });

      const select = page.root!.querySelector('select') as HTMLSelectElement;
      expect(select.getAttribute('tabindex')).toBe('0');
    });

    it('should emit inputFocus when readOnly select receives focus', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" aria-label="Readonly select"></modus-wc-select>',
      });

      const select = page.root!.querySelector('select') as HTMLSelectElement;
      const focusSpy = jest.fn();
      page.root!.addEventListener('inputFocus', focusSpy);

      select.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
      await page.waitForChanges();

      expect(focusSpy).toHaveBeenCalled();
    });

    it('should focus readOnly select on mouseDown without default action', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" aria-label="Readonly select"></modus-wc-select>',
      });

      const select = page.root!.querySelector('select') as HTMLSelectElement;
      const focusSpy = jest.spyOn(select, 'focus');

      const event = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

      select.dispatchEvent(event);
      await page.waitForChanges();

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(focusSpy).toHaveBeenCalled();
    });

    it.each([['ArrowDown'], ['ArrowUp'], [' '], ['Enter'], ['2']])(
      'should prevent default for %s keyDown when readOnly',
      async (key) => {
        const page = await newSpecPage({
          components: [ModusWcSelect],
          html: '<modus-wc-select read-only="true" value="1" aria-label="Readonly select"></modus-wc-select>',
        });

        const component = page.rootInstance as ModusWcSelect;
        component.options = defaultOptions;
        await page.waitForChanges();

        const select = page.root!.querySelector('select') as HTMLSelectElement;
        const event = new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true,
        });
        const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

        select.dispatchEvent(event);
        await page.waitForChanges();

        expect(preventDefaultSpy).toHaveBeenCalled();
      }
    );

    it('should allow Tab keyDown when readOnly', async () => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" value="1" aria-label="Readonly select"></modus-wc-select>',
      });

      const select = page.root!.querySelector('select') as HTMLSelectElement;
      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

      select.dispatchEvent(event);
      await page.waitForChanges();

      expect(preventDefaultSpy).not.toHaveBeenCalled();
    });

    it.each([
      ['Control', 'a'],
      ['Meta', 'a'],
      ['Alt', 'a'],
    ])('should allow %s+%s keyDown when readOnly', async (modifier, key) => {
      const page = await newSpecPage({
        components: [ModusWcSelect],
        html: '<modus-wc-select read-only="true" value="1" aria-label="Readonly select"></modus-wc-select>',
      });

      const select = page.root!.querySelector('select') as HTMLSelectElement;
      const event = new KeyboardEvent('keydown', {
        key,
        bubbles: true,
        cancelable: true,
        ctrlKey: modifier === 'Control',
        metaKey: modifier === 'Meta',
        altKey: modifier === 'Alt',
      });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

      select.dispatchEvent(event);
      await page.waitForChanges();

      expect(preventDefaultSpy).not.toHaveBeenCalled();
    });
  });
});
