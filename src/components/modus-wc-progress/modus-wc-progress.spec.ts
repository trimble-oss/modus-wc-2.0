import { newSpecPage } from '@stencil/core/testing';
import { ModusWcProgress } from './modus-wc-progress';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';

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

  it('should render label below progress and associate it with aria-labelledby', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress, ModusWcInputLabel],
      html: '<modus-wc-progress label="Loading..."></modus-wc-progress>',
    });

    const progress = page.root!.querySelector('progress');
    const label = page.root!.querySelector('modus-wc-input-label label');

    expect(progress).not.toBeNull();
    expect(label).not.toBeNull();
    expect(label!.id).toBeTruthy();
    expect(progress!.getAttribute('aria-labelledby')).toBe(label!.id);
    expect(progress!.hasAttribute('aria-label')).toBe(false);

    const progressIndex = Array.from(page.root!.children).indexOf(progress!);
    const labelHost = page.root!.querySelector('modus-wc-input-label');
    const labelIndex = Array.from(page.root!.children).indexOf(labelHost!);
    expect(progressIndex).toBeLessThan(labelIndex);

    expect(page.root).toMatchSnapshot();
  });

  it('should expose indeterminate progress when aria-label is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress aria-label="Custom Progress Bar" indeterminate="true"></modus-wc-progress>',
    });
    const progress = page.root!.querySelector('progress');

    expect(progress!.getAttribute('aria-hidden')).toBeNull();
    expect(progress!.getAttribute('aria-busy')).toBe('true');
    expect(progress!.getAttribute('aria-label')).toBe('Custom Progress Bar');
  });

  it('should hide indeterminate progress from accessibility tree when no name is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcProgress],
      html: '<modus-wc-progress indeterminate="true"></modus-wc-progress>',
    });
    const progress = page.root!.querySelector('progress');

    expect(progress!.getAttribute('aria-hidden')).toBe('true');
    expect(progress!.hasAttribute('aria-busy')).toBe(false);
  });
});
