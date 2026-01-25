import { newSpecPage } from '@stencil/core/testing';
import { ModusWcPanel } from './modus-wc-panel';

describe('modus-wc-panel', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel></modus-wc-panel>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with header, body, and footer slots', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: `
        <modus-wc-panel>
          <div slot="header">Header Content</div>
          <div slot="body">Body Content</div>
          <div slot="footer">Footer Content</div>
        </modus-wc-panel>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom width and height', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel width="300px" height="600px"></modus-wc-panel>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with floating prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel floating></modus-wc-panel>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel custom-class="custom-panel-class"></modus-wc-panel>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with only body slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: `
        <modus-wc-panel>
          <div slot="body">Body Only Content</div>
        </modus-wc-panel>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with only header and body slots', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: `
        <modus-wc-panel>
          <div slot="header">Header Content</div>
          <div slot="body">Body Content</div>
        </modus-wc-panel>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with only body and footer slots', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: `
        <modus-wc-panel>
          <div slot="body">Body Content</div>
          <div slot="footer">Footer Content</div>
        </modus-wc-panel>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should apply floating class when floating is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel floating></modus-wc-panel>',
    });
    const panelDiv = page.root?.querySelector('.modus-wc-panel');
    expect(panelDiv?.classList.contains('modus-wc-panel-floating')).toBe(true);
  });

  it('should not apply floating class when floating is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel></modus-wc-panel>',
    });
    const panelDiv = page.root?.querySelector('.modus-wc-panel');
    expect(panelDiv?.classList.contains('modus-wc-panel-floating')).toBe(false);
  });

  it('should apply custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel custom-class="my-custom-class"></modus-wc-panel>',
    });
    const panelDiv = page.root?.querySelector('.modus-wc-panel');
    expect(panelDiv?.classList.contains('my-custom-class')).toBe(true);
  });

  it('should apply default width and height', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel></modus-wc-panel>',
    });
    const panelDiv = page.root?.querySelector('.modus-wc-panel') as HTMLElement;
    expect(panelDiv?.style.width).toBe('350px');
    expect(panelDiv?.style.height).toBe('700px');
  });

  it('should apply custom width and height', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: '<modus-wc-panel width="250px" height="500px"></modus-wc-panel>',
    });
    const panelDiv = page.root?.querySelector('.modus-wc-panel') as HTMLElement;
    expect(panelDiv?.style.width).toBe('250px');
    expect(panelDiv?.style.height).toBe('500px');
  });

  it('should render header section', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: `
        <modus-wc-panel>
          <div slot="header">Header</div>
        </modus-wc-panel>
      `,
    });
    const header = page.root?.querySelector('.modus-wc-panel-header');
    expect(header).toBeDefined();
  });

  it('should render body section', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: `
        <modus-wc-panel>
          <div slot="body">Body</div>
        </modus-wc-panel>
      `,
    });
    const body = page.root?.querySelector('.modus-wc-panel-body');
    expect(body).toBeDefined();
  });

  it('should render footer section', async () => {
    const page = await newSpecPage({
      components: [ModusWcPanel],
      html: `
        <modus-wc-panel>
          <div slot="footer">Footer</div>
        </modus-wc-panel>
      `,
    });
    const footer = page.root?.querySelector('.modus-wc-panel-footer');
    expect(footer).toBeDefined();
  });
});
