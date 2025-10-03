import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAccordion } from './modus-wc-accordion';
import {
  ICollapseOptions,
  ModusWcCollapse,
} from '../modus-wc-collapse/modus-wc-collapse';

describe('modus-wc-accordion', () => {
  const options: ICollapseOptions[] = [
    {
      description: 'Item one description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item One',
    },
    {
      description: 'Item two description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item Two',
    },
    {
      description: 'Item three description',
      icon: 'alert',
      iconAriaLabel: 'Alert',
      title: 'Item Three',
    },
  ];

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
});
