import { newSpecPage } from '@stencil/core/testing';
import { IStepperItem, ModusWcStepper } from './modus-wc-stepper';

describe('modus-wc-stepper', () => {
  const defaultSteps: IStepperItem[] = [
    { label: 'Scale', color: 'primary' },
    { label: 'Belong', color: 'primary', customClass: 'custom-class' },
    { label: 'Grow', color: 'warning' },
    { label: 'Innovate', content: '🚀' },
  ];
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = defaultSteps;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper custom-class="custom-class" orientation="vertical"></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = defaultSteps;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit stepClick with index when interactive and a step button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper interactive></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = defaultSteps;
    await page.waitForChanges();

    const listener = jest.fn();
    page.root!.addEventListener('stepClick', listener);

    const buttons = page.root!.querySelectorAll(
      'button.modus-wc-stepper-step-button'
    );
    expect(buttons.length).toBe(4);

    (buttons[2] as HTMLButtonElement).click();
    await page.waitForChanges();

    expect(listener).toHaveBeenCalledTimes(1);
    expect((listener.mock.calls[0][0] as CustomEvent<number>).detail).toBe(2);
  });

  it('should emit stepClick when interactive and the step li receives a click (e.g. indicator area)', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper interactive></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = defaultSteps;
    await page.waitForChanges();

    const listener = jest.fn();
    page.root!.addEventListener('stepClick', listener);

    const secondStep = page.root!.querySelectorAll('li.modus-wc-step')[1];
    secondStep?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(listener).toHaveBeenCalledTimes(1);
    expect((listener.mock.calls[0][0] as CustomEvent<number>).detail).toBe(1);
  });

  it('should not emit stepClick when interactive is false and step text is present', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = defaultSteps;
    await page.waitForChanges();

    const listener = jest.fn();
    page.root!.addEventListener('stepClick', listener);

    const firstLi = page.root!.querySelector('li');
    firstLi?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(listener).not.toHaveBeenCalled();
  });
});
