import { newSpecPage } from '@stencil/core/testing';
import { IModusWcStepperItem, ModusWcStepper } from './modus-wc-stepper';

describe('modus-wc-stepper', () => {
  const defaultSteps: IModusWcStepperItem[] = [
    { label: 'Scale', color: 'primary' },
    { label: 'Belong', color: 'primary', customClass: 'custom-class' },
    { label: 'Grow', color: 'warning' },
    { label: 'Innovate', content: '🚀' },
  ];
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcStepper],
      html: '<modus-wc-stepper></modus-wc-stepper',
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
});
