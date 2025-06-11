import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButtonGroup } from './modus-wc-button-group';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';

describe('modus-wc-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button value="test">Test</modus-wc-button>
             </modus-wc-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button-group>
        <div class="modus-wc-button-group modus-wc-button-group--horizontal" role="radiogroup">
          <modus-wc-button size="md" value="test" variant="outlined">
            <button class="modus-wc-btn modus-wc-btn-md modus-wc-btn-outline modus-wc-btn-primary" tabindex="0" type="button">
              Test
            </button>
          </modus-wc-button>
        </div>
      </modus-wc-button-group>
    `);
  });

  it('applies vertical orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group orientation="vertical"></modus-wc-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button-group orientation="vertical">
        <div class="modus-wc-button-group modus-wc-button-group--vertical" role="radiogroup"></div>
      </modus-wc-button-group>
    `);
  });

  it('applies spaced modifier', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group spaced></modus-wc-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button-group spaced="">
        <div class="modus-wc-button-group modus-wc-button-group--horizontal modus-wc-button-group--spaced" role="radiogroup"></div>
      </modus-wc-button-group>
    `);
  });

  it('applies disabled state', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group disabled></modus-wc-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button-group disabled="">
        <div class="modus-wc-button-group modus-wc-button-group--disabled modus-wc-button-group--horizontal" role="radiogroup"></div>
      </modus-wc-button-group>
    `);
  });

  it('sets correct role for multiple selection mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group selection-mode="multiple"></modus-wc-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button-group selection-mode="multiple">
        <div class="modus-wc-button-group modus-wc-button-group--horizontal" role="group"></div>
      </modus-wc-button-group>
    `);
  });
});
