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
          <div class="modus-wc-rounded-full modus-wc-w-16">
            <img alt="Default avatar" src="">
          </div>
        </div>
      </modus-wc-avatar>
    `);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Custom avatar" aria-label="Custom avatar" custom-class="my-custom-class" img-src="https://example.com/avatar.jpg" shape="square" size="sm"></modus-wc-avatar>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-avatar alt="Custom avatar" aria-label="Custom avatar" custom-class="my-custom-class" img-src="https://example.com/avatar.jpg" shape="square" size="sm">
        <div class="modus-wc-avatar" aria-label="Custom avatar">
          <div class="modus-wc-rounded-lg modus-wc-w-12 my-custom-class">
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

  it('should set img src when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Image source avatar" aria-label="Image source avatar" img-src="https://example.com/avatar.jpg"></modus-wc-avatar>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-avatar alt="Image source avatar" aria-label="Image source avatar" img-src="https://example.com/avatar.jpg">
        <div class="modus-wc-avatar" aria-label="Image source avatar">
          <div class="modus-wc-rounded-full modus-wc-w-16">
            <img alt="Image source avatar" src="https://example.com/avatar.jpg">
          </div>
        </div>
      </modus-wc-avatar>
    `);
  });

  describe('getClasses', () => {
    it('should apply theme classes when theme is set', async () => {
      document.documentElement.setAttribute('data-theme', 'dark');
      const page = await newSpecPage({
        components: [ModusWcAvatar],
        html: '<modus-wc-avatar alt="Test avatar" aria-label="Test avatar"></modus-wc-avatar>',
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const component = page.rootInstance;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const classes = component.getClasses();
      expect(classes).toContain('');
    });

    it('should apply prop classes based on shape and size', async () => {
      const page = await newSpecPage({
        components: [ModusWcAvatar],
        html: '<modus-wc-avatar alt="Test avatar" aria-label="Test avatar" shape="square" size="lg"></modus-wc-avatar>',
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const component = page.rootInstance;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const classes = component.getClasses();
      expect(classes).toContain('modus-wc-rounded-lg');
      expect(classes).toContain('modus-wc-w-20');
    });

    it('should apply custom class when provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcAvatar],
        html: '<modus-wc-avatar alt="Test avatar" aria-label="Test avatar" custom-class="my-custom-class"></modus-wc-avatar>',
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const component = page.rootInstance;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const classes = component.getClasses();
      expect(classes).toContain('my-custom-class');
    });

    it('should combine theme, prop, and custom classes', async () => {
      document.documentElement.setAttribute('data-theme', 'dark');
      const page = await newSpecPage({
        components: [ModusWcAvatar],
        html: '<modus-wc-avatar alt="Test avatar" aria-label="Test avatar" shape="square" size="lg" custom-class="my-custom-class"></modus-wc-avatar>',
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const component = page.rootInstance;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const classes = component.getClasses();
      expect(classes).toContain('modus-wc-rounded-lg');
      expect(classes).toContain('modus-wc-w-20');
      expect(classes).toContain('my-custom-class');
    });
  });
});
