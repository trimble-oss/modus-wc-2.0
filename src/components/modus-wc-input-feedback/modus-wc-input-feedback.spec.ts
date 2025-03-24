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
});
