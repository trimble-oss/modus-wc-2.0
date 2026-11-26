import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAccordion } from './modus-wc-accordion';
import { ModusWcCollapse } from '../modus-wc-collapse/modus-wc-collapse';

describe('modus-wc-accordion', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAccordion],
      html: '<modus-wc-accordion />',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAccordion, ModusWcCollapse],
      html: `<modus-wc-accordion custom-class="test-class" />`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with collapse elements', async () => {
    const page = await newSpecPage({
      components: [ModusWcAccordion, ModusWcCollapse],
      html: `<modus-wc-accordion custom-class="test-class">
                <modus-wc-collapse collapse-id="123" options={options[0]} />
                <modus-wc-collapse collapse-id="123" options={options[1]} />
                <modus-wc-collapse collapse-id="123" options={options[2]} />
            </modus-wc-accordion>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should forward role and aria-labelledby to the inner div when set on the host', async () => {
    const page = await newSpecPage({
      components: [ModusWcAccordion],
      html: '<h2 id="group-heading">Group</h2><modus-wc-accordion aria-labelledby="group-heading" role="group"></modus-wc-accordion>',
    });

    const host = page.body.querySelector('modus-wc-accordion');
    const inner = host?.querySelector('div');
    expect(inner?.getAttribute('role')).toBe('group');
    expect(inner?.getAttribute('aria-labelledby')).toBe('group-heading');
    expect(host?.hasAttribute('aria-labelledby')).toBe(false);
  });
});
