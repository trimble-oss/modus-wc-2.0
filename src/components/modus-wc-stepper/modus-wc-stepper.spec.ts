import { newSpecPage } from '@stencil/core/testing';
import { IStepperItem, ModusWcStepper } from './modus-wc-stepper';

type IPrivateStepperMethods = {
  handleStepActivate(index: number): void;
};

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

  it('should emit stepClick with index detail when interactive and a step button is clicked', async () => {
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
    expect(
      (listener.mock.calls[0][0] as CustomEvent<{ index: number }>).detail.index
    ).toBe(2);
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

  it('should not emit stepClick when handleStepActivate is called and interactive is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    const listener = jest.fn();
    page.root!.addEventListener('stepClick', listener);

    const privateStepper = component as unknown as IPrivateStepperMethods;
    privateStepper.handleStepActivate(0);

    expect(listener).not.toHaveBeenCalled();
  });

  it('should apply active step class and aria-current when activeStep is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper active-step="2"></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = defaultSteps;

    await page.waitForChanges();

    const steps = page.root!.querySelectorAll('li.modus-wc-step');
    expect(steps.length).toBe(defaultSteps.length);
    const activeStep = steps[2] as HTMLLIElement;

    expect(activeStep.classList.contains('modus-wc-step-active')).toBe(true);
    expect(activeStep.getAttribute('aria-current')).toBe('step');
  });

  it('should derive step label and aria-label from label, content, or index', async () => {
    const steps: IStepperItem[] = [
      { label: 'Label only' },
      { content: 'Content only' },
      {},
    ];

    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper interactive></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = steps;

    await page.waitForChanges();

    const lis = page.root!.querySelectorAll('li.modus-wc-step');
    const buttons = page.root!.querySelectorAll(
      'button.modus-wc-stepper-step-button'
    );

    expect(lis.length).toBe(steps.length);
    expect(buttons.length).toBe(steps.length);

    // Uses label when present
    expect(lis[0].textContent?.trim()).toBe('Label only');
    expect(buttons[0].getAttribute('aria-label')).toBe('Label only');

    // Falls back to content when label is missing
    expect(lis[1].textContent?.trim()).toBe('Content only');
    expect(buttons[1].getAttribute('aria-label')).toBe('Content only');

    // Falls back to "Step N" when both are missing
    expect(lis[2].textContent?.trim()).toBe('');
    expect(buttons[2].getAttribute('aria-label')).toBe('Step 3');
  });
});
