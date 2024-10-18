import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAvatar } from './modus-wc-avatar';

describe('modus-wc-avatar', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Default avatar" aria-label="Default avatar"></modus-wc-avatar>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-avatar alt="Default avatar" aria-label="Default avatar">
        <div class="modus-wc-avatar" aria-label="Default avatar">
          <div>
            <img alt="Default avatar" src="">
          </div>
        </div>
      </modus-wc-avatar>
    `);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Custom avatar" aria-label="Custom avatar" custom-class="my-custom-class" daisy-class="modus-wc-rounded" img-src="https://example.com/avatar.jpg"></modus-wc-avatar>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-avatar alt="Custom avatar" aria-label="Custom avatar" custom-class="my-custom-class" daisy-class="modus-wc-rounded" img-src="https://example.com/avatar.jpg">
        <div class="modus-wc-avatar my-custom-class" aria-label="Custom avatar">
          <div class="modus-wc-rounded">
            <img alt="Custom avatar" src="https://example.com/avatar.jpg">
          </div>
        </div>
      </modus-wc-avatar>
    `);
  });

  it('should warn when alt and ariaLabel are not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar></modus-wc-avatar>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcAvatar: alt and ariaLabel are required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should not warn when both alt and ariaLabel are provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Test avatar" aria-label="Test avatar"></modus-wc-avatar>',
    });

    expect(consoleWarnSpy).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });

  it('should apply custom class when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Custom class avatar" aria-label="Custom class avatar" custom-class="my-custom-class"></modus-wc-avatar>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-avatar alt="Custom class avatar" aria-label="Custom class avatar" custom-class="my-custom-class">
        <div class="modus-wc-avatar my-custom-class" aria-label="Custom class avatar">
          <div>
            <img alt="Custom class avatar" src="">
          </div>
        </div>
      </modus-wc-avatar>
    `);
  });

  it('should apply daisy class to inner div when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Daisy class avatar" aria-label="Daisy class avatar" daisy-class="modus-wc-rounded"></modus-wc-avatar>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-avatar alt="Daisy class avatar" aria-label="Daisy class avatar" daisy-class="modus-wc-rounded">
        <div class="modus-wc-avatar" aria-label="Daisy class avatar">
          <div class="modus-wc-rounded">
            <img alt="Daisy class avatar" src="">
          </div>
        </div>
      </modus-wc-avatar>
    `);
  });

  it('should set img src when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Image source avatar" aria-label="Image source avatar" img-src="https://example.com/avatar.jpg"></modus-wc-avatar>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-avatar alt="Image source avatar" aria-label="Image source avatar" img-src="https://example.com/avatar.jpg">
        <div class="modus-wc-avatar" aria-label="Image source avatar">
          <div>
            <img alt="Image source avatar" src="https://example.com/avatar.jpg">
          </div>
        </div>
      </modus-wc-avatar>
    `);
  });
});
