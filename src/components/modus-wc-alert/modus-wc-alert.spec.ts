import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAlert } from './modus-wc-alert';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWCTypography } from '../modus-wc-typography/modus-wc-typography';

describe('modus-wc-alert', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alertTitle="Custom title"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-description="Custom description" alert-title="Custom title" custom-class="test-class"  icon="help" variant="info"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render error variant with alert icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="error"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render info variant with info icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="info"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render success variant with check_circle icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="success"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render warning variant with info icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="warning"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
