import { newSpecPage } from '@stencil/core/testing';
import { ModusWcToast } from './modus-wc-toast';

describe('modus-wc-toast', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast custom-class="test-class"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  // Position top
  it('should render with position top-start', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="top-start"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position top-center', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="top-center"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position top-end', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="top-end"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  // Position middle
  it('should render with position middle-start', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="middle-start"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position middle-center', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="middle-center"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position middle-end', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="middle-end"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  // Position bottom
  it('should render with position bottom-start', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="bottom-start"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position bottom-center', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="bottom-center"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position bottom-end', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="bottom-end"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
