import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcProgress } from './modus-wc-progress';

describe('modus-wc-progress', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress></modus-wc-progress>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress aria-label="Custom Progress Bar" indeterminate="true" custom-class="test-class" max="50" value="25" variant="radial"></modus-wc-progress>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render indeterminate state', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress aria-label="Custom Progress Bar" indeterminate="true"></modus-wc-progress>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render label', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress, ModusWcInputLabel],
      html: '<modus-wc-progress label="Loading..."></modus-wc-progress>',
    });
    expectLabelLinkedToControl(page.root!, 'progress');
    expect(page.root).toMatchSnapshot();
  });
});
