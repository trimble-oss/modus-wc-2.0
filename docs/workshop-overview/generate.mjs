import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import PptxGenJS from 'pptxgenjs';
import { meta, slides } from './slides.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPptx = path.join(__dirname, 'workshop-overview.pptx');
const outputHtml = path.join(__dirname, 'index.html');

const C = {
  ink: '1B242B',
  muted: '53636F',
  quiet: 'E8ECEF',
  paper: 'F8F9FA',
  white: 'FFFFFF',
  yellow: 'F9C74F',
  orange: 'F47F20',
  blue: '0063A3',
  blueSoft: 'D9EBF7',
  navy: '003E63',
  green: '2D7A58',
  greenSoft: 'DDEFE6',
  red: 'B83B3B',
  redSoft: 'F7E2E2',
  purple: '7252A3',
  purpleSoft: 'EBE3F5',
};

if (slides.length !== 10) {
  throw new Error(`Expected 10 slides, found ${slides.length}`);
}

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = meta.author;
pptx.subject = meta.subtitle;
pptx.title = meta.title;
pptx.company = 'Trimble Modus';
pptx.lang = 'en-US';
pptx.theme = {
  headFontFace: 'Arial',
  bodyFontFace: 'Arial',
  lang: 'en-US',
};
pptx.defineSlideMaster({
  title: 'BASE',
  background: { color: C.paper },
  objects: [
    { rect: { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: C.yellow }, line: { color: C.yellow } } },
  ],
  slideNumber: { x: 12.55, y: 7.07, w: 0.45, h: 0.2, color: '77848D', fontSize: 10, align: 'right' },
});

function addText(slide, text, x, y, w, h, options = {}) {
  slide.addText(text, {
    x,
    y,
    w,
    h,
    fontFace: 'Arial',
    fontSize: 20,
    color: C.ink,
    margin: 0,
    breakLine: false,
    valign: 'mid',
    fit: 'shrink',
    ...options,
  });
}

function addRect(slide, x, y, w, h, fill) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.1,
    fill: { color: fill },
    line: { color: fill, transparency: 100 },
  });
}

function addHeader(slide, data, index) {
  addText(slide, data.title, 0.7, 0.42, 11.4, 0.78, {
    fontSize: 29,
    bold: true,
    color: C.ink,
    valign: 'top',
  });
  addText(slide, `${index + 1} / 10`, 11.8, 0.48, 0.8, 0.3, {
    fontSize: 11,
    bold: true,
    color: C.muted,
    align: 'right',
  });
}

function addTakeaway(slide, text) {
  addRect(slide, 0.7, 6.55, 11.9, 0.56, C.navy);
  addText(slide, text, 0.96, 6.66, 11.38, 0.32, {
    fontSize: 15,
    bold: true,
    color: C.white,
    align: 'center',
  });
}

function addCard(slide, x, y, w, h, title, detail, fill = C.blueSoft) {
  addRect(slide, x, y, w, h, fill);
  addText(slide, title, x + 0.18, y + 0.13, w - 0.36, 0.3, {
    fontSize: 14,
    bold: true,
    color: C.blue,
  });
  if (detail) {
    addText(slide, detail, x + 0.18, y + 0.5, w - 0.36, h - 0.62, {
      fontSize: 14,
      bold: true,
      valign: 'top',
    });
  }
}

function renderSlide(data, index) {
  const slide = pptx.addSlide('BASE');
  addHeader(slide, data, index);

  switch (data.kind) {
    case 'brief': {
      addCard(slide, 0.7, 1.45, 3.1, 1.2, 'VAGUE REQUEST', data.vague, C.redSoft);
      addText(slide, '→', 3.96, 1.68, 0.55, 0.55, {
        fontSize: 28,
        bold: true,
        color: C.orange,
        align: 'center',
      });
      const entries = Object.entries(data.brief);
      entries.forEach(([key, value], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        addCard(slide, 4.65 + col * 3.92, 1.35 + row * 1.55, 3.65, 1.32, key.toUpperCase(), value, i === 4 ? C.greenSoft : C.blueSoft);
      });
      addText(slide, 'A prompt is not decoration. It is the product decision written down.', 0.72, 4.9, 3.25, 1.05, {
        fontSize: 20,
        bold: true,
        color: C.red,
        align: 'center',
      });
      break;
    }
    case 'loop': {
      data.steps.forEach((step, i) => {
        const x = 0.72 + i * 2.12;
        addCard(slide, x, 1.45, 1.82, 0.95, `${i + 1}`, step, i % 2 ? C.greenSoft : C.blueSoft);
        if (i < data.steps.length - 1) {
          addText(slide, '→', x + 1.86, 1.72, 0.25, 0.28, {
            fontSize: 18,
            bold: true,
            color: C.orange,
            align: 'center',
          });
        }
      });
      addCard(slide, 1.15, 3.05, 4.7, 2.35, 'FIRST PROMPT', data.meme.before.split('\n')[1], C.redSoft);
      addText(slide, '≠', 6.05, 3.78, 1.1, 0.65, {
        fontSize: 32,
        bold: true,
        color: C.orange,
        align: 'center',
      });
      addCard(slide, 7.35, 3.05, 4.7, 2.35, 'FIFTH PROMPT', data.meme.after.split('\n')[1], C.greenSoft);
      break;
    }
    case 'structure': {
      addRect(slide, 0.75, 1.35, 5.55, 4.75, C.white);
      data.regions.forEach((region, i) => {
        const h = i === 2 ? 1.55 : 0.72;
        const y = [1.7, 2.6, 3.5, 5.25][i];
        addRect(slide, 1.1, y, 4.85, h, i === 0 ? C.navy : C.quiet);
        addText(slide, region, 1.35, y + 0.15, 4.35, 0.35, {
          fontSize: 15,
          bold: true,
          color: i === 0 ? C.white : C.ink,
          align: 'center',
        });
      });
      addText(slide, 'HTML: what each region is', 1.0, 5.82, 5.0, 0.3, {
        fontSize: 13,
        bold: true,
        color: C.blue,
        align: 'center',
      });
      data.css.forEach((item, i) => {
        addCard(slide, 6.75 + (i % 2) * 2.75, 1.55 + Math.floor(i / 2) * 1.55, 2.5, 1.25, item.toUpperCase(), ['What matters first', 'What belongs together', 'What needs attention', 'How the eye moves'][i], i % 2 ? C.greenSoft : C.purpleSoft);
      });
      addText(slide, 'CSS: how the structure communicates', 7.05, 4.8, 5.0, 0.4, {
        fontSize: 17,
        bold: true,
        color: C.purple,
        align: 'center',
      });
      break;
    }
    case 'states': {
      data.states.forEach((state, i) => {
        const x = 0.72 + i * 2.4;
        const fill = [C.quiet, C.blueSoft, C.purpleSoft, C.redSoft, C.greenSoft][i];
        addCard(slide, x, 1.55, 2.12, 3.85, state[0].toUpperCase(), state[1], fill);
        addRect(slide, x + 0.28, 3.0, 1.56, 0.3, i === 3 ? C.red : i === 4 ? C.green : C.blue);
        addRect(slide, x + 0.28, 3.5, i === 1 ? 0.75 : 1.56, 0.3, C.white);
        addRect(slide, x + 0.28, 4.0, i === 2 ? 0.55 : 1.15, 0.3, C.white);
      });
      addText(slide, 'CLICK', 0.98, 5.65, 0.8, 0.3, { fontSize: 11, bold: true, color: C.orange });
      addText(slide, '→ REQUEST → RESPONSE → RECOVERY →', 1.75, 5.64, 9.55, 0.34, {
        fontSize: 16,
        bold: true,
        color: C.orange,
        align: 'center',
      });
      break;
    }
    case 'framework': {
      data.system.forEach((item, i) => {
        addCard(slide, 0.75 + i * 3.02, 1.45, 2.75, 1.4, item[0].toUpperCase(), item[1], i % 2 ? C.greenSoft : C.blueSoft);
        if (i < 3) {
          addText(slide, '→', 3.47 + i * 3.02, 1.88, 0.3, 0.3, {
            fontSize: 17,
            bold: true,
            color: C.orange,
            align: 'center',
          });
        }
      });
      addText(slide, 'The design system above can ride in different vehicles:', 0.8, 3.55, 5.5, 0.42, {
        fontSize: 18,
        bold: true,
      });
      data.vehicles.forEach((vehicle, i) => {
        addCard(slide, 6.3 + i * 2.05, 3.3, 1.8, 1.25, vehicle.toUpperCase(), i === 0 ? 'Workshop choice' : 'Also valid', i === 0 ? C.yellow : C.quiet);
      });
      addText(slide, 'Same product idea. Different implementation vehicle.', 1.0, 4.55, 11.1, 0.65, {
        fontSize: 25,
        bold: true,
        color: C.purple,
        align: 'center',
      });
      break;
    }
    case 'figma': {
      data.flow.forEach((step, i) => {
        addCard(slide, 0.75 + i * 3.02, 1.45, 2.65, 1.15, `${i + 1}`, step, i % 2 ? C.greenSoft : C.blueSoft);
        if (i < data.flow.length - 1) {
          addText(slide, '→', 3.4 + i * 3.02, 1.83, 0.35, 0.3, {
            fontSize: 18,
            bold: true,
            color: C.orange,
            align: 'center',
          });
        }
      });
      addCard(slide, 1.4, 3.3, 4.4, 1.65, 'SCREENSHOT', data.contrast[0].split(': ')[1], C.quiet);
      addText(slide, 'vs', 6.0, 3.75, 0.9, 0.5, { fontSize: 22, bold: true, color: C.muted, align: 'center' });
      addCard(slide, 7.15, 3.3, 4.4, 1.65, 'FIGMA MCP', data.contrast[1].split(': ')[1], C.greenSoft);
      addText(slide, 'layout · components · variables · assets', 1.05, 5.35, 11.1, 0.5, {
        fontSize: 18,
        bold: true,
        color: C.blue,
        align: 'center',
      });
      break;
    }
    case 'context': {
      data.items.forEach((item, i) => {
        addCard(slide, 0.75 + i * 4.05, 1.45, 3.7, 3.75, item[0], item[1], [C.blueSoft, C.purpleSoft, C.greenSoft][i]);
        addText(slide, item[2], 1.05 + i * 4.05, 3.35, 3.1, 0.65, {
          fontSize: 18,
          bold: true,
          align: 'center',
        });
        addText(slide, ['“Use Modus.”', '“Build a form this way.”', '“Which event is current?”'][i], 1.05 + i * 4.05, 4.25, 3.1, 0.5, {
          fontSize: 14,
          italic: true,
          color: C.muted,
          align: 'center',
        });
      });
      break;
    }
    case 'modus': {
      addCard(slide, 0.75, 1.38, 5.3, 0.8, 'PARALLEL SYSTEM', 'Agent invents familiar-looking substitutes', C.redSoft);
      addCard(slide, 7.28, 1.38, 5.3, 0.8, 'MODUS', 'Agent starts from shared product language', C.greenSoft);
      data.left.forEach((item, i) => {
        addCard(slide, 0.9, 2.45 + i * 0.72, 5.0, 0.58, `×  ${item}`, '', C.redSoft);
      });
      data.right.forEach((item, i) => {
        addCard(slide, 7.43, 2.45 + i * 0.72, 5.0, 0.58, `✓  ${item}`, '', C.greenSoft);
      });
      addRect(slide, 3.3, 5.45, 6.7, 0.75, C.yellow);
      addText(slide, `${data.meme.setup}  ${data.meme.response}`, 3.55, 5.58, 6.2, 0.42, {
        fontSize: 15,
        bold: true,
        align: 'center',
      });
      break;
    }
    case 'qa': {
      data.checks.forEach((item, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        addCard(slide, 0.75 + col * 4.05, 1.4 + row * 2.15, 3.7, 1.75, `□  ${item[0].toUpperCase()}`, item[1], i % 2 ? C.greenSoft : C.blueSoft);
      });
      addText(slide, 'Agent says: “Done.”', 0.9, 5.72, 3.2, 0.4, {
        fontSize: 17,
        bold: true,
        color: C.red,
        align: 'center',
      });
      addText(slide, 'Browser shows: evidence.', 8.45, 5.72, 3.4, 0.4, {
        fontSize: 17,
        bold: true,
        color: C.green,
        align: 'center',
      });
      break;
    }
    case 'delivery': {
      data.flow.forEach((step, i) => {
        addCard(slide, 0.72 + i * 2.0, 1.4, 1.72, 1.0, `${i + 1}`, step, i % 2 ? C.greenSoft : C.blueSoft);
        if (i < data.flow.length - 1) {
          addText(slide, '→', 2.45 + i * 2.0, 1.72, 0.25, 0.3, {
            fontSize: 17,
            bold: true,
            color: C.orange,
            align: 'center',
          });
        }
      });
      slide.addShape(pptx.ShapeType.arc, {
        x: 1.15,
        y: 3.05,
        w: 10.9,
        h: 2.55,
        adjustPoint: 0.2,
        rotate: 0,
        fill: { color: C.white, transparency: 100 },
        line: { color: C.orange, width: 2.5, beginArrowType: 'none', endArrowType: 'triangle' },
      });
      data.loop.forEach((step, i) => {
        addCard(slide, 0.8 + i * 1.72, 3.72, 1.42, 0.9, `${i + 1}`, step, i % 2 ? C.purpleSoft : C.yellow);
      });
      addText(slide, 'A shareable prototype turns opinion into something people can try.', 1.0, 5.35, 11.2, 0.55, {
        fontSize: 22,
        bold: true,
        color: C.navy,
        align: 'center',
      });
      break;
    }
    default: {
      const exhaustiveCheck = data;
      throw new Error(`Unsupported slide kind: ${exhaustiveCheck.kind}`);
    }
  }

  addTakeaway(slide, data.takeaway);
}

slides.forEach(renderSlide);
await pptx.writeFile({ fileName: outputPptx });

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderHtmlContent(data) {
  let body = '';
  switch (data.kind) {
    case 'brief':
      body = `<div class="brief"><div class="vague"><small>VAGUE REQUEST</small><strong>${escapeHtml(data.vague)}</strong></div><div class="arrow">→</div><div class="brief-grid">${Object.entries(data.brief).map(([key, value], i) => `<article class="fragment" style="--i:${i}"><small>${escapeHtml(key)}</small><strong>${escapeHtml(value)}</strong></article>`).join('')}</div></div>`;
      break;
    case 'loop':
      body = `<div class="flow">${data.steps.map((step, i) => `<article class="fragment" style="--i:${i}"><small>${i + 1}</small><strong>${escapeHtml(step)}</strong></article>`).join('<span>→</span>')}</div><div class="meme"><article class="before"><small>FIRST PROMPT</small><strong>${escapeHtml(data.meme.before.split('\n')[1])}</strong></article><b>≠</b><article class="after"><small>FIFTH PROMPT</small><strong>${escapeHtml(data.meme.after.split('\n')[1])}</strong></article></div>`;
      break;
    case 'structure':
      body = `<div class="structure-lesson"><div class="wireframe">${data.regions.map((region, i) => `<div class="region r${i} fragment" style="--i:${i}">${escapeHtml(region)}</div>`).join('')}<small>HTML: what each region is</small></div><div class="style-grid">${data.css.map((item, i) => `<article class="fragment" style="--i:${i}"><strong>${escapeHtml(item)}</strong><span>${['What matters first', 'What belongs together', 'What needs attention', 'How the eye moves'][i]}</span></article>`).join('')}<small>CSS: how the structure communicates</small></div></div>`;
      break;
    case 'states':
      body = `<div class="state-row">${data.states.map((state, i) => `<article class="state s${i} fragment" style="--i:${i}"><small>${escapeHtml(state[0])}</small><strong>${escapeHtml(state[1])}</strong><i></i><i></i><i></i></article>`).join('')}</div><div class="state-path">CLICK → REQUEST → RESPONSE → RECOVERY →</div>`;
      break;
    case 'framework':
      body = `<div class="system-row">${data.system.map((item, i) => `<article class="fragment" style="--i:${i}"><small>${escapeHtml(item[0])}</small><strong>${escapeHtml(item[1])}</strong></article>`).join('<span>→</span>')}</div><div class="vehicles"><p>The same product idea can ride in different vehicles:</p>${data.vehicles.map((vehicle, i) => `<article class="${i === 0 ? 'chosen' : ''}"><strong>${escapeHtml(vehicle)}</strong><small>${i === 0 ? 'Workshop choice' : 'Also valid'}</small></article>`).join('')}</div>`;
      break;
    case 'figma':
      body = `<div class="flow">${data.flow.map((step, i) => `<article class="fragment" style="--i:${i}"><small>${i + 1}</small><strong>${escapeHtml(step)}</strong></article>`).join('<span>→</span>')}</div><div class="contrast"><article><small>SCREENSHOT</small><strong>${escapeHtml(data.contrast[0].split(': ')[1])}</strong></article><b>vs</b><article class="good"><small>FIGMA MCP</small><strong>${escapeHtml(data.contrast[1].split(': ')[1])}</strong></article></div><p class="labels">layout · components · variables · assets</p>`;
      break;
    case 'context':
      body = `<div class="context-grid">${data.items.map((item, i) => `<article class="fragment" style="--i:${i}"><small>${escapeHtml(item[0])}</small><strong>${escapeHtml(item[1])}</strong><span>${escapeHtml(item[2])}</span><em>${escapeHtml(['“Use Modus.”', '“Build a form this way.”', '“Which event is current?”'][i])}</em></article>`).join('')}</div>`;
      break;
    case 'modus':
      body = `<div class="modus-compare"><div class="bad"><h2>Parallel system</h2>${data.left.map((item) => `<span>× ${escapeHtml(item)}</span>`).join('')}</div><div class="good"><h2>Modus</h2>${data.right.map((item) => `<span>✓ ${escapeHtml(item)}</span>`).join('')}</div></div><div class="meme-line">${escapeHtml(data.meme.setup)} <strong>${escapeHtml(data.meme.response)}</strong></div>`;
      break;
    case 'qa':
      body = `<div class="qa-grid">${data.checks.map((item, i) => `<article class="fragment" style="--i:${i}"><small>□ ${escapeHtml(item[0])}</small><strong>${escapeHtml(item[1])}</strong></article>`).join('')}</div><div class="evidence"><span>Agent says: “Done.”</span><strong>Browser shows: evidence.</strong></div>`;
      break;
    case 'delivery':
      body = `<div class="flow">${data.flow.map((step, i) => `<article class="fragment" style="--i:${i}"><small>${i + 1}</small><strong>${escapeHtml(step)}</strong></article>`).join('<span>→</span>')}</div><div class="loop-row">${data.loop.map((step, i) => `<article class="fragment" style="--i:${i}"><small>${i + 1}</small><strong>${escapeHtml(step)}</strong></article>`).join('')}</div><p class="delivery-line">A shareable prototype turns opinion into something people can try.</p>`;
      break;
    default: {
      const exhaustiveCheck = data;
      throw new Error(`Unsupported slide kind: ${exhaustiveCheck.kind}`);
    }
  }
  return `<h1>${escapeHtml(data.title)}</h1><div class="visual">${body}</div><p class="takeaway">${escapeHtml(data.takeaway)}</p>`;
}

const sections = slides
  .map((data, index) => {
    return `<section class="slide" data-index="${index}">${renderHtmlContent(data)}<span class="number">${index + 1} / 10</span></section>`;
  })
  .join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(meta.title)}</title>
<style>
  :root { color-scheme: light; --navy:#003e63; --blue:#0063a3; --orange:#f47f20; --green:#2d7a58; --red:#b83b3b; --ink:#1b242b; }
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; background: var(--navy); font-family: Arial, sans-serif; }
  .deck { height: 100%; overflow: hidden; }
  .slide {
    display: none;
    height: 100%;
    padding: 5vh 5.5vw 9vh;
    background: #F8F9FA;
    color: var(--ink);
    position: relative;
  }
  .slide.active { display: flex; flex-direction: column; animation: rise .35s ease; }
  h1 { font-size: clamp(2rem, 3.7vw, 3.2rem); margin: 0 0 2.4vh; line-height: 1.08; }
  .visual { flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center; }
  small { display: block; color: var(--blue); font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .takeaway { margin: 2vh 0 0; padding: 1.4vh 2vw; border-radius: 12px; background: var(--navy); color: #fff; text-align: center; font-size: clamp(1rem, 1.7vw, 1.35rem); font-weight: 700; }
  article, .vague { border-radius: 15px; padding: 1.6vh 1.2vw; background: #d9ebf7; }
  article strong, .vague strong { display: block; margin-top: .7vh; font-size: clamp(.95rem, 1.55vw, 1.3rem); line-height: 1.25; }
  .arrow { color: var(--orange); font-size: 2rem; font-weight: 900; align-self: center; }
  .brief { display: grid; grid-template-columns: 22% 5% 1fr; gap: 1vw; align-items: center; }
  .vague { background: #f7e2e2; min-height: 18vh; display: flex; flex-direction: column; justify-content: center; }
  .brief-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.3vh 1vw; }
  .brief-grid article:last-child { background: #ddefe6; grid-column: 1 / -1; }
  .flow, .system-row { display: flex; gap: .65vw; align-items: stretch; }
  .flow article, .system-row article { flex: 1; text-align: center; display: flex; flex-direction: column; justify-content: center; min-height: 12vh; }
  .flow > span, .system-row > span { align-self: center; color: var(--orange); font-weight: 900; font-size: 1.3rem; }
  .meme { display: grid; grid-template-columns: 1fr 7% 1fr; gap: 1vw; margin: 3vh auto 0; width: 82%; align-items: center; }
  .meme article { min-height: 19vh; display: flex; flex-direction: column; justify-content: center; text-align: center; }
  .meme .before { background: #f7e2e2; }
  .meme .after { background: #ddefe6; }
  .meme b { text-align: center; color: var(--orange); font-size: 2.3rem; }
  .structure-lesson { display: grid; grid-template-columns: 1fr 1fr; gap: 3vw; }
  .wireframe { background: #fff; border-radius: 15px; padding: 1.5vh 1.2vw; display: grid; grid-template-rows: .7fr .7fr 1.7fr .7fr auto; gap: 1vh; }
  .region { background: #e8ecef; border-radius: 8px; padding: 1vh; text-align: center; font-weight: 800; }
  .region.r0 { background: var(--navy); color: #fff; }
  .wireframe > small, .style-grid > small { text-align: center; padding-top: .5vh; }
  .style-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2vh 1vw; }
  .style-grid article:nth-child(even) { background: #ddefe6; }
  .style-grid article span { display: block; margin-top: .7vh; color: #53636f; }
  .style-grid > small { grid-column: 1 / -1; }
  .state-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1vw; }
  .state { min-height: 31vh; }
  .state i { display: block; height: 2.3vh; margin-top: 2vh; background: #fff; border-radius: 8px; }
  .state i:last-child { width: 55%; }
  .state.s1 { background:#d9ebf7; } .state.s2 { background:#ebe3f5; } .state.s3 { background:#f7e2e2; } .state.s4 { background:#ddefe6; }
  .state-path { margin-top: 2.4vh; color: var(--orange); text-align: center; font-size: 1.2rem; font-weight: 900; letter-spacing: .08em; }
  .system-row article { min-height: 15vh; }
  .system-row article:nth-of-type(even) { background:#ddefe6; }
  .vehicles { margin: 4vh auto 0; display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 1vw; align-items: center; width: 90%; }
  .vehicles p { font-size: 1.15rem; font-weight: 800; }
  .vehicles article { text-align: center; background: #e8ecef; }
  .vehicles article.chosen { background: #f9c74f; }
  .vehicles small { margin-top: .6vh; }
  .contrast { display: grid; grid-template-columns: 1fr 7% 1fr; gap: 1vw; margin: 3vh auto 0; width: 80%; align-items: center; }
  .contrast article { background:#e8ecef; min-height: 16vh; text-align:center; display:flex; flex-direction:column; justify-content:center; }
  .contrast article.good { background:#ddefe6; }
  .contrast b { text-align:center; color:#53636f; }
  .labels { text-align:center; color:var(--blue); font-size:1.2rem; font-weight:900; letter-spacing:.05em; }
  .context-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:1.2vw; }
  .context-grid article { min-height:35vh; display:flex; flex-direction:column; justify-content:center; text-align:center; }
  .context-grid article:nth-child(2) { background:#ebe3f5; }
  .context-grid article:nth-child(3) { background:#ddefe6; }
  .context-grid article span { margin-top:3vh; font-size:1.2rem; font-weight:800; }
  .context-grid article em { margin-top:3vh; color:#53636f; }
  .modus-compare { display:grid; grid-template-columns:1fr 1fr; gap:4vw; }
  .modus-compare > div { border-radius:15px; padding:1.6vh 1.5vw; }
  .modus-compare .bad { background:#f7e2e2; } .modus-compare .good { background:#ddefe6; }
  .modus-compare h2 { margin:.4vh 0 1.5vh; }
  .modus-compare span { display:block; padding:1.1vh; margin:.7vh 0; background:rgba(255,255,255,.7); border-radius:8px; font-weight:800; }
  .meme-line { margin:2.2vh auto 0; padding:1.5vh 2vw; background:#f9c74f; border-radius:12px; font-size:1.1rem; }
  .meme-line strong { margin-left:1vw; }
  .qa-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:1.1vw; }
  .qa-grid article { min-height:14vh; }
  .qa-grid article:nth-child(even) { background:#ddefe6; }
  .evidence { display:flex; justify-content:space-around; margin-top:2.4vh; font-size:1.2rem; }
  .evidence span { color:var(--red); font-weight:800; } .evidence strong { color:var(--green); }
  .loop-row { display:grid; grid-template-columns:repeat(7, 1fr); gap:.7vw; margin-top:4vh; }
  .loop-row article { background:#f9c74f; text-align:center; padding:1.2vh .5vw; }
  .loop-row article:nth-child(even) { background:#ebe3f5; }
  .delivery-line { text-align:center; color:var(--navy); font-size:1.25rem; font-weight:900; margin-top:3vh; }
  .number { position: absolute; right: 3vw; bottom: 3vh; font-size: .95rem; color: #77848D; }
  .fragment { animation: reveal .45s both; animation-delay: calc(var(--i) * .11s + .12s); }
  @keyframes rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
  @keyframes reveal { from { opacity: 0; transform: translateY(10px) scale(.98); } to { opacity: 1; transform: none; } }
</style>
</head>
<body>
<div class="deck">
${sections}
</div>
<script>
const slides = [...document.querySelectorAll('.slide')];
let index = 0;
function show(next) {
  index = Math.max(0, Math.min(slides.length - 1, next));
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  history.replaceState(null, '', '#slide-' + (index + 1));
}
function fromHash() {
  const match = location.hash.match(/slide-(\\d+)/);
  show(match ? Number(match[1]) - 1 : 0);
}
document.addEventListener('keydown', (event) => {
  if (['ArrowRight', ' ', 'PageDown'].includes(event.key)) { event.preventDefault(); show(index + 1); }
  if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(index - 1); }
  if (event.key === 'Home') { event.preventDefault(); show(0); }
  if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
});
window.addEventListener('hashchange', fromHash);
fromHash();
</script>
</body>
</html>
`;

fs.writeFileSync(outputHtml, html);
console.log(`Generated ${slides.length} slides:\n${outputPptx}\n${outputHtml}`);
