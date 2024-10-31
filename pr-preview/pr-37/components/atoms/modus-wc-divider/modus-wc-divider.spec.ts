import { newSpecPage } from '@stencil/core/testing';
import { ModusWcDivider } from './modus-wc-divider';

describe('modus-wc-divider', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Divider"></modus-wc-divider>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-divider aria-label="Divider">
        <div>
          <div class="modus-wc-divider" role="separator" aria-label="Divider"></div>
        </div>
      </modus-wc-divider>
    `);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Custom divider" custom-class="my-custom-class" daisy-class="divider-vertical" content="Content"></modus-wc-divider>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-divider aria-label="Custom divider" custom-class="my-custom-class" daisy-class="divider-vertical" content="Content">
        <div class="my-custom-class">
          <div class="modus-wc-divider divider-vertical" role="separator" aria-label="Custom divider">Content</div>
        </div>
      </modus-wc-divider>
    `);
  });

  it('should warn when ariaLabel is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider></modus-wc-divider>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcDivider: ariaLabel is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should not warn when ariaLabel is provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Test divider"></modus-wc-divider>',
    });

    expect(consoleWarnSpy).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it('should apply custom class when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Custom class divider" custom-class="my-custom-class"></modus-wc-divider>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-divider aria-label="Custom class divider" custom-class="my-custom-class">
        <div class="my-custom-class">
          <div class="modus-wc-divider" role="separator" aria-label="Custom class divider"></div>
        </div>
      </modus-wc-divider>
    `);
  });

  it('should apply daisy class to inner div when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Daisy class divider" daisy-class="divider-horizontal"></modus-wc-divider>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-divider aria-label="Daisy class divider" daisy-class="divider-horizontal">
        <div>
          <div class="modus-wc-divider divider-horizontal" role="separator" aria-label="Daisy class divider"></div>
        </div>
      </modus-wc-divider>
    `);
  });

  it('should render content when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Content divider" content="Content"></modus-wc-divider>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-divider aria-label="Content divider" content="Content">
        <div>
          <div class="modus-wc-divider" role="separator" aria-label="Content divider">Content</div>
        </div>
      </modus-wc-divider>
    `);
  });
});
