import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputFeedback } from './modus-wc-input-feedback';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

describe('modus-wc-input-feedback', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback level="info"></modus-wc-input-feedback>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback custom-class="test-class" level="info"></modus-wc-input-feedback>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with error level', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback level="error" message="An error has occurred."></modus-wc-input-feedback>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should move an inherited alert role onto the feedback container', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback level="error" message="Required" role="alert"></modus-wc-input-feedback>',
    });
    const feedback = page.root!.querySelector('.modus-wc-input-feedback');
    expect(feedback?.getAttribute('role')).toBe('alert');
    expect(page.root!.hasAttribute('role')).toBe(false);
  });

  it('should render with success level', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback level="success" message="Success has occurred."></modus-wc-input-feedback>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with warning level', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback level="warning" message="A warning has occurred."></modus-wc-input-feedback>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with a custom modus icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback, ModusWcIcon],
      html: '<modus-wc-input-feedback icon="alert"></modus-wc-input-feedback>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should keep disableIcon false and render the preset icon when disable-icon is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback level="info" message="Default icon"></modus-wc-input-feedback>',
    });

    const component = page.rootInstance as ModusWcInputFeedback;
    expect(component.disableIcon).toBe(false);
    expect(
      page.root?.querySelector('.modus-wc-input-feedback-icon')
    ).not.toBeNull();
  });

  it('should not render the preset icon when disable-icon is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback level="error" message="No icon" disable-icon="true"></modus-wc-input-feedback>',
    });

    expect(
      page.root?.querySelector('.modus-wc-input-feedback-icon')
    ).toBeNull();
    expect(page.root?.querySelector('modus-wc-icon')).toBeNull();
    expect(page.root?.querySelector('span')?.textContent).toBe('No icon');
  });

  it('should not render the custom icon when disable-icon is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcInputFeedback],
      html: '<modus-wc-input-feedback icon="alert" message="Custom icon hidden" disable-icon="true"></modus-wc-input-feedback>',
    });

    expect(page.root?.querySelector('modus-wc-icon')).toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-input-feedback-icon')
    ).toBeNull();
  });
});
