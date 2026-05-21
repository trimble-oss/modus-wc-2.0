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

  it('should render interactive steps as accessible buttons', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper interactive></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = defaultSteps;
    await page.waitForChanges();

    const buttons = page.root!.querySelectorAll(
      'button.modus-wc-stepper-step-button'
    );
    const labels = page.root!.querySelectorAll(
      'span.modus-wc-stepper-step-label'
    );

    expect(buttons.length).toBe(defaultSteps.length);
    expect(labels.length).toBe(defaultSteps.length);
    expect((buttons[1] as HTMLButtonElement).type).toBe('button');
    expect(buttons[1].getAttribute('aria-label')).toBeNull();
    expect(labels[1].textContent).toBe('Belong');
  });

  it('should not set aria-label on interactive step buttons', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper interactive></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = [{ content: '🚀' }];
    await page.waitForChanges();

    const button = page.root!.querySelector(
      'button.modus-wc-stepper-step-button'
    ) as HTMLButtonElement;
    const label = page.root!.querySelector(
      'span.modus-wc-stepper-step-label'
    ) as HTMLSpanElement;

    expect(button.getAttribute('aria-label')).toBeNull();
    expect(label.textContent).toBe('🚀');
  });

  it('should render an empty step label when label and content are missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper interactive></modus-wc-stepper>',
    });

    const component = page.rootInstance as ModusWcStepper;
    component.steps = [{}];
    await page.waitForChanges();

    const label = page.root!.querySelector(
      'span.modus-wc-stepper-step-label'
    ) as HTMLSpanElement;

    expect(label.textContent).toBe('');
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
});
