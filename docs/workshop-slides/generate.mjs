import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import PptxGenJS from 'pptxgenjs';
import { meta, slides } from './slides.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPptx = path.join(__dirname, 'zero-to-production-vibe-coder.pptx');
const outputHtml = path.join(__dirname, 'index.html');
const outputGuide = path.join(__dirname, 'FACILITATOR-GUIDE.md');

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

const phaseColor = {
  OPEN: C.navy,
  'PHASE 1': C.blue,
  'PHASE 2': C.purple,
  'PHASE 3': C.orange,
  'PHASE 4': C.green,
  'PHASE 5': C.navy,
  CLOSE: C.ink,
};

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
    { text: { text: meta.version, options: { x: 10.1, y: 7.08, w: 2.7, h: 0.18, fontFace: 'Arial', fontSize: 7.5, color: '77848D', align: 'right', margin: 0 } } },
  ],
  slideNumber: { x: 12.75, y: 7.07, w: 0.25, h: 0.2, color: '77848D', fontSize: 8, align: 'right' },
});

function addText(slide, text, x, y, w, h, options = {}) {
  slide.addText(text, {
    x, y, w, h,
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

function addRect(slide, x, y, w, h, fill, radius = 0.08, line = fill) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    rectRadius: radius,
    fill: { color: fill },
    line: { color: line, transparency: line === fill ? 100 : 0, width: 1 },
  });
}

function addHeader(slide, data) {
  const accent = phaseColor[data.phase] || C.navy;
  addText(slide, data.phase, 0.55, 0.35, 2.4, 0.28, {
    fontSize: 10,
    bold: true,
    color: accent,
    charSpacing: 1.6,
  });
  addText(slide, data.title, 0.55, 0.78, 11.8, 0.78, {
    fontSize: 31,
    bold: true,
    color: C.ink,
    valign: 'top',
  });
}

function addSupporting(slide, text) {
  if (!text) return;
  addText(slide, text, 0.72, 6.68, 11.6, 0.42, {
    fontSize: 14,
    color: C.muted,
    italic: true,
  });
}

function addBulletCards(slide, items, { y = 1.85, columns = 2, color = C.blueSoft } = {}) {
  const gap = 0.22;
  const totalW = 11.85;
  const cardW = (totalW - gap * (columns - 1)) / columns;
  const rows = Math.ceil(items.length / columns);
  const cardH = Math.min(1.28, (4.55 - gap * (rows - 1)) / rows);
  items.forEach((item, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = 0.72 + col * (cardW + gap);
    const cy = y + row * (cardH + gap);
    addRect(slide, x, cy, cardW, cardH, color);
    const label = Array.isArray(item) ? item[0] : item;
    const detail = Array.isArray(item) ? item[1] : '';
    addText(slide, label, x + 0.22, cy + 0.18, cardW - 0.44, detail ? 0.34 : cardH - 0.36, {
      fontSize: detail ? 17 : 18,
      bold: true,
      color: C.ink,
      valign: detail ? 'top' : 'mid',
    });
    if (detail) {
      addText(slide, detail, x + 0.22, cy + 0.56, cardW - 0.44, cardH - 0.72, {
        fontSize: 12.5,
        color: C.muted,
        valign: 'top',
      });
    }
  });
}

function addFlow(slide, steps, y = 2.35) {
  const gap = 0.12;
  const available = 11.85;
  const stepW = (available - gap * (steps.length - 1)) / steps.length;
  steps.forEach((step, i) => {
    const x = 0.72 + i * (stepW + gap);
    const accent = i % 2 ? C.blueSoft : C.greenSoft;
    addRect(slide, x, y, stepW, 1.05, accent);
    addText(slide, `${i + 1}`, x + 0.12, y + 0.14, 0.25, 0.25, {
      fontSize: 10,
      bold: true,
      color: phaseColor[slides.find((s) => s.steps === steps)?.phase] || C.navy,
      align: 'center',
    });
    addText(slide, step, x + 0.12, y + 0.43, stepW - 0.24, 0.38, {
      fontSize: Math.max(10, 16 - steps.length * 0.35),
      bold: true,
      align: 'center',
    });
  });
}

function addSplit(slide, data) {
  const leftFill = data.kind === 'access' ? C.greenSoft : C.blueSoft;
  const rightFill = data.kind === 'access' ? C.redSoft : C.quiet;
  addRect(slide, 0.72, 1.8, 5.75, 4.65, leftFill);
  addRect(slide, 6.7, 1.8, 5.75, 4.65, rightFill);
  addText(slide, data.leftTitle, 1.0, 2.08, 5.15, 0.42, { fontSize: 20, bold: true, color: C.green });
  addText(slide, data.rightTitle, 6.98, 2.08, 5.15, 0.42, { fontSize: 20, bold: true, color: data.kind === 'access' ? C.red : C.muted });
  [data.left, data.right].forEach((list, side) => {
    list.forEach((item, i) => {
      const x = side ? 7.0 : 1.02;
      const y = 2.72 + i * 0.57;
      addText(slide, side && data.kind !== 'access' ? '—' : '✓', x, y, 0.3, 0.3, {
        fontSize: 13,
        bold: true,
        color: side && data.kind === 'access' ? C.red : side ? C.muted : C.green,
        align: 'center',
      });
      addText(slide, item, x + 0.42, y - 0.02, 4.65, 0.36, { fontSize: 15.5 });
    });
  });
}

function addStructure(slide, stage) {
  const x = 1.5;
  const y = 1.8;
  const w = 10.35;
  const h = 4.5;
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    fill: { color: stage === 3 ? C.white : 'F0F2F4' },
    line: { color: stage === 3 ? C.blue : 'AAB5BC', width: stage === 3 ? 1.5 : 1, dash: stage === 1 ? 'dash' : 'solid' },
    radius: 0.1,
  });
  const blocks = [
    [x + 0.45, y + 0.4, w - 0.9, 0.62, 'Title region'],
    [x + 0.45, y + 1.35, 2.15, 2.45, 'Controls'],
    [x + 2.9, y + 1.35, w - 3.35, 2.45, 'Content'],
  ];
  blocks.forEach(([bx, by, bw, bh, label], index) => {
    const fill = stage === 3 ? [C.navy, C.blueSoft, C.greenSoft][index] : stage === 2 ? C.white : 'E1E5E8';
    addRect(slide, bx, by, bw, bh, fill);
    if (stage >= 2) {
      addText(slide, label, bx + 0.18, by + 0.14, bw - 0.36, 0.34, {
        fontSize: stage === 3 && index === 0 ? 22 : 14,
        bold: true,
        color: stage === 3 && index === 0 ? C.white : C.ink,
        align: index === 0 ? 'left' : 'center',
      });
    }
    if (stage === 3 && index === 2) {
      addRect(slide, bx + 0.35, by + 0.75, bw - 0.7, 0.36, C.white);
      addRect(slide, bx + 0.35, by + 1.35, bw * 0.54, 0.36, C.white);
      addRect(slide, bx + 0.35, by + 1.9, 1.45, 0.42, C.yellow);
    }
  });
}

function addState(slide, isOpen) {
  addRect(slide, 1.0, 1.95, 11.3, 4.4, C.white, 0.1, C.quiet);
  addRect(slide, 1.35, 2.35, 3.1, 3.55, C.blueSoft);
  addText(slide, 'One living screen', 1.65, 2.75, 2.5, 0.4, { fontSize: 19, bold: true, align: 'center' });
  addText(slide, `open: ${isOpen ? 'true' : 'false'}`, 1.65, 3.42, 2.5, 0.5, {
    fontSize: 21,
    bold: true,
    color: isOpen ? C.green : C.muted,
    align: 'center',
  });
  addRect(slide, 1.82, 4.42, 2.15, 0.65, isOpen ? C.quiet : C.yellow);
  addText(slide, isOpen ? 'Panel opened' : 'Person clicks', 1.93, 4.54, 1.93, 0.35, { fontSize: 14, bold: true, align: 'center' });
  addText(slide, '→', 4.72, 3.55, 0.6, 0.6, { fontSize: 30, bold: true, color: C.orange, align: 'center' });
  addRect(slide, 5.45, 2.35, 6.2, 3.55, C.paper, 0.1, C.quiet);
  addText(slide, 'Interface', 5.85, 2.68, 2.2, 0.36, { fontSize: 17, bold: true });
  addRect(slide, 5.85, 3.3, 4.95, 0.45, C.quiet);
  addRect(slide, 5.85, 4.05, isOpen ? 4.95 : 2.1, 1.3, isOpen ? C.greenSoft : C.blueSoft);
  addText(slide, isOpen ? 'Open panel / modal / selection' : 'Closed / default state', 6.08, 4.45, isOpen ? 4.49 : 1.64, 0.42, {
    fontSize: 15,
    bold: true,
    color: isOpen ? C.green : C.blue,
    align: 'center',
  });
}

function addAssessment(slide, data) {
  const checks = data.checks || [];
  const cols = checks.length > 4 ? 2 : 1;
  const rows = Math.ceil(checks.length / cols);
  const cardW = cols === 2 ? 5.75 : 11.3;
  checks.forEach((check, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 0.95 + col * 6.0;
    const y = 1.85 + row * (3.8 / rows);
    addRect(slide, x, y, cardW, 0.82, C.greenSoft);
    addText(slide, '✓', x + 0.18, y + 0.2, 0.34, 0.3, { fontSize: 15, bold: true, color: C.green, align: 'center' });
    addText(slide, check, x + 0.68, y + 0.15, cardW - 0.9, 0.48, { fontSize: 14.5, bold: true });
  });
  addText(slide, data.footer, 0.95, 6.35, 11.3, 0.42, { fontSize: 14, bold: true, color: C.green, align: 'center' });
}

function renderSlide(data) {
  const slide = pptx.addSlide('BASE');
  slide.background = { color: data.kind === 'cover' || data.kind === 'section' ? phaseColor[data.phase] : C.paper };
  slide.addNotes(data.notes || '');

  if (data.kind === 'cover' || data.kind === 'section') {
    const isCover = data.kind === 'cover';
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: phaseColor[data.phase] }, line: { transparency: 100 } });
    slide.addShape(pptx.ShapeType.arc, { x: 8.5, y: -1.0, w: 5.7, h: 5.7, adjustPoint: 0.25, rotate: 30, fill: { color: C.yellow, transparency: 2 }, line: { transparency: 100 } });
    addText(slide, data.phase, 0.8, 0.72, 3.0, 0.3, { fontSize: 11, bold: true, color: C.yellow, charSpacing: 2 });
    addText(slide, data.title, 0.8, isCover ? 1.75 : 2.0, 9.8, isCover ? 1.55 : 1.1, { fontSize: isCover ? 44 : 42, bold: true, color: C.white, valign: 'top' });
    addText(slide, data.subtitle, 0.82, isCover ? 3.62 : 3.38, 9.2, 0.75, { fontSize: isCover ? 22 : 24, color: C.white, valign: 'top' });
    addText(slide, data.tag, 0.82, 5.95, 6.0, 0.42, { fontSize: 13, bold: true, color: C.yellow });
    return;
  }

  addHeader(slide, data);
  const accent = phaseColor[data.phase] || C.navy;

  switch (data.kind) {
    case 'statement':
      addText(slide, data.statement, 0.75, 2.15, 11.8, 1.85, { fontSize: 38, bold: true, color: accent, align: 'center' });
      addSupporting(slide, data.supporting);
      break;
    case 'split':
    case 'do-dont':
    case 'access':
      addSplit(slide, data);
      break;
    case 'process':
    case 'figma-flow':
    case 'verification':
    case 'repair':
    case 'delivery':
      addFlow(slide, data.steps);
      addSupporting(slide, data.supporting);
      break;
    case 'agenda':
    case 'frameworks':
    case 'retention':
      addBulletCards(slide, data.items, { y: 1.75, columns: 1, color: C.white });
      addSupporting(slide, data.supporting);
      break;
    case 'structure':
      addStructure(slide, data.stage);
      addSupporting(slide, data.supporting);
      break;
    case 'comparison':
      addBulletCards(slide, data.comparisons, { y: 1.75, columns: data.comparisons.length > 3 ? 2 : 1, color: C.white });
      break;
    case 'prompt':
      addRect(slide, 0.9, 1.95, 11.55, 3.45, C.white, 0.1, C.blue);
      addText(slide, 'PROMPT IN AGENT', 1.25, 2.28, 3.0, 0.3, { fontSize: 11, bold: true, color: accent, charSpacing: 1.5 });
      addText(slide, data.prompt, 1.25, 2.9, 10.85, 1.8, { fontSize: 21, bold: true, color: C.ink, valign: 'mid' });
      addSupporting(slide, data.supporting);
      break;
    case 'assessment':
      addAssessment(slide, data);
      break;
    case 'qna':
      addBulletCards(slide, data.categories, { y: 1.9, columns: data.categories.length > 4 ? 3 : 2, color: C.white });
      addSupporting(slide, data.supporting);
      break;
    case 'state':
      addState(slide, data.state === 'true');
      addSupporting(slide, data.supporting);
      break;
    case 'states':
    case 'brain-detail':
    case 'quality':
    case 'showcase':
      addBulletCards(slide, data.items, { y: 1.85, columns: data.items.length > 5 ? 3 : 2, color: C.white });
      addSupporting(slide, data.supporting);
      break;
    case 'brain':
    case 'modus-map':
    case 'catalog':
      addBulletCards(slide, data.items, { y: 1.75, columns: data.items.length > 5 ? 3 : 2, color: data.kind === 'brain' ? C.purpleSoft : C.white });
      break;
    case 'building-blocks': {
      const levels = data.levels;
      levels.forEach((level, i) => {
        const w = 2.2 + i * 1.55;
        const x = 6.67 - w / 2;
        const y = 5.9 - i * 0.78;
        addRect(slide, x, y, w, 0.6, i === levels.length - 1 ? C.yellow : [C.blueSoft, C.greenSoft, C.purpleSoft, C.quiet][i % 4]);
        addText(slide, level, x + 0.12, y + 0.1, w - 0.24, 0.34, { fontSize: 14, bold: true, align: 'center' });
      });
      addSupporting(slide, data.supporting);
      break;
    }
    case 'rubric':
      addBulletCards(slide, data.dimensions, { y: 1.75, columns: 2, color: C.white });
      addSupporting(slide, data.supporting);
      break;
    default:
      addBulletCards(slide, data.items || data.checks || [], { y: 1.85, columns: 2, color: C.white });
  }
}

slides.forEach(renderSlide);

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderList(items = [], className = 'cards') {
  return `<div class="${className}">${items.map((item) => {
    const label = Array.isArray(item) ? item[0] : item;
    const detail = Array.isArray(item) ? item[1] : '';
    return `<div class="card"><strong>${escapeHtml(label)}</strong>${detail ? `<span>${escapeHtml(detail)}</span>` : ''}</div>`;
  }).join('')}</div>`;
}

function renderHtmlContent(data) {
  if (data.kind === 'cover' || data.kind === 'section') {
    return `<div class="section-content"><p class="eyebrow">${escapeHtml(data.phase)}</p><h1>${escapeHtml(data.title)}</h1><h2>${escapeHtml(data.subtitle)}</h2><p class="tag">${escapeHtml(data.tag)}</p></div><div class="orb"></div>`;
  }
  const title = `<p class="eyebrow">${escapeHtml(data.phase)}</p><h1>${escapeHtml(data.title)}</h1>`;
  let body = '';
  switch (data.kind) {
    case 'statement':
      body = `<div class="big-statement">${escapeHtml(data.statement)}</div>`;
      break;
    case 'split':
    case 'do-dont':
    case 'access':
      body = `<div class="split"><div class="panel good"><h3>${escapeHtml(data.leftTitle)}</h3>${renderList(data.left, 'list')}</div><div class="panel ${data.kind === 'access' ? 'bad' : ''}"><h3>${escapeHtml(data.rightTitle)}</h3>${renderList(data.right, 'list')}</div></div>`;
      break;
    case 'process':
    case 'figma-flow':
    case 'verification':
    case 'repair':
    case 'delivery':
      body = `<div class="flow">${data.steps.map((s, i) => `<div class="step" style="--i:${i}"><small>${i + 1}</small><strong>${escapeHtml(s)}</strong></div>`).join('')}</div>`;
      break;
    case 'agenda':
    case 'frameworks':
    case 'retention':
      body = renderList(data.items, 'cards single');
      break;
    case 'structure':
      body = `<div class="structure stage-${data.stage}"><div class="region hero">${data.stage >= 2 ? 'Title region' : ''}</div><div class="region controls">${data.stage >= 2 ? 'Controls' : ''}</div><div class="region content">${data.stage >= 2 ? 'Content' : ''}${data.stage === 3 ? '<i></i><i></i><b></b>' : ''}</div></div>`;
      break;
    case 'comparison':
      body = renderList(data.comparisons, 'cards');
      break;
    case 'prompt':
      body = `<div class="prompt"><small>PROMPT IN AGENT</small><blockquote>${escapeHtml(data.prompt)}</blockquote></div>`;
      break;
    case 'assessment':
      body = `${renderList(data.checks, 'checks')}<div class="gate">${escapeHtml(data.footer)}</div>`;
      break;
    case 'qna':
      body = renderList(data.categories, 'cards');
      break;
    case 'state': {
      const open = data.state === 'true';
      body = `<div class="state-demo"><div class="memory"><span>One living screen</span><strong>open: ${open}</strong><button>${open ? 'Panel opened' : 'Person clicks'}</button></div><div class="arrow">→</div><div class="ui"><span>Interface</span><i></i><div class="${open ? 'open' : ''}">${open ? 'Open panel / modal / selection' : 'Closed / default state'}</div></div></div>`;
      break;
    }
    case 'states':
    case 'brain-detail':
    case 'quality':
    case 'showcase':
    case 'brain':
    case 'modus-map':
    case 'catalog':
      body = renderList(data.items, 'cards');
      break;
    case 'building-blocks':
      body = `<div class="pyramid">${data.levels.map((level, i) => `<div style="width:${32 + i * 14}%">${escapeHtml(level)}</div>`).join('')}</div>`;
      break;
    case 'rubric':
      body = renderList(data.dimensions, 'cards');
      break;
    default:
      body = renderList(data.items || data.checks || [], 'cards');
  }
  const supporting = data.supporting ? `<p class="supporting">${escapeHtml(data.supporting)}</p>` : '';
  return `${title}<div class="body">${body}</div>${supporting}`;
}

function generateHtml() {
  const sections = slides.map((data, index) => {
    const sectionClass = data.kind === 'cover' || data.kind === 'section' ? 'section-slide' : '';
    return `<section class="slide ${sectionClass}" data-index="${index}" data-phase="${escapeHtml(data.phase)}" data-notes="${escapeHtml(data.notes)}">${renderHtmlContent(data)}<span class="number">${index + 1} / ${slides.length}</span></section>`;
  }).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(meta.title)}</title>
<style>
:root{--ink:#1b242b;--muted:#53636f;--paper:#f8f9fa;--white:#fff;--yellow:#f9c74f;--orange:#f47f20;--blue:#0063a3;--blue-soft:#d9ebf7;--navy:#003e63;--green:#2d7a58;--green-soft:#ddefe6;--red:#b83b3b;--red-soft:#f7e2e2;--purple:#7252a3;--purple-soft:#ebe3f5}
*{box-sizing:border-box}body{margin:0;background:#111;color:var(--ink);font-family:Arial,Helvetica,sans-serif;overflow:hidden}.slide{position:absolute;inset:0;margin:auto;width:min(100vw,177.78vh);height:min(100vh,56.25vw);background:var(--paper);padding:4.5% 5.5%;opacity:0;transform:translateX(3%);transition:opacity .35s ease,transform .35s ease;pointer-events:none;overflow:hidden;border-left:.8vw solid var(--yellow)}.slide.active{opacity:1;transform:none;pointer-events:auto}.slide h1{font-size:4.2vh;line-height:1.08;margin:.7vh 0 2vh;max-width:90%;letter-spacing:-.03em}.eyebrow{font-size:1.4vh;letter-spacing:.18em;text-transform:uppercase;color:var(--blue);font-weight:800;margin:0}.body{height:65%;display:flex;align-items:center;justify-content:center}.supporting{position:absolute;left:6%;right:6%;bottom:5.5%;font-size:1.9vh;color:var(--muted);font-style:italic;text-align:center}.number{position:absolute;right:3%;bottom:2.2%;font-size:1.15vh;color:#77848d}.section-slide{background:var(--navy);color:white;border:0}.section-slide .section-content{position:absolute;left:7%;top:12%;width:70%}.section-slide .eyebrow{color:var(--yellow)}.section-slide h1{font-size:7vh;margin-top:8vh}.section-slide h2{font-size:3.1vh;font-weight:400;max-width:80%}.section-slide .tag{position:absolute;top:60vh;color:var(--yellow);font-size:1.8vh;font-weight:700}.orb{position:absolute;width:44vh;height:44vh;border-radius:50%;background:var(--yellow);right:-8vh;top:-12vh}.big-statement{font-size:5.5vh;line-height:1.13;font-weight:800;text-align:center;color:var(--blue);max-width:90%}.split{display:grid;grid-template-columns:1fr 1fr;gap:2.5%;width:100%;height:92%}.panel{background:white;border-radius:1.2vw;padding:5%;}.panel.good{background:var(--green-soft)}.panel.bad{background:var(--red-soft)}.panel h3{font-size:2.5vh;color:var(--green);margin:0 0 2vh}.panel.bad h3{color:var(--red)}.list{display:flex;flex-direction:column;gap:1vh}.list .card{font-size:1.8vh;background:transparent;padding:.25vh}.cards{width:100%;display:grid;grid-template-columns:repeat(2,1fr);gap:1.3vh 1.3vw}.cards.single{grid-template-columns:1fr}.card{background:white;border-radius:.8vw;padding:1.35vh 1.5vw;min-height:6.3vh;display:flex;flex-direction:column;justify-content:center;box-shadow:0 .2vh 1vh #0000000a}.card strong{font-size:2.05vh}.card span{font-size:1.45vh;color:var(--muted);margin-top:.5vh}.flow{display:flex;align-items:stretch;gap:.55vw;width:100%}.step{flex:1;background:var(--green-soft);border-radius:.7vw;padding:1.4vh .5vw;text-align:center;opacity:0;transform:translateY(2vh);animation:reveal .4s ease forwards;animation-delay:calc(var(--i)*.08s)}.step:nth-child(even){background:var(--blue-soft)}.step small{display:block;color:var(--orange);font-weight:800}.step strong{display:block;font-size:1.65vh;margin-top:.6vh}.structure{display:grid;grid-template:1fr 3fr/1fr 3fr;gap:2vh 2vw;width:82%;height:80%;padding:2.5vh;background:#f0f2f4;border:2px dashed #aab5bc;border-radius:1vw}.region{background:#e1e5e8;border-radius:.6vw;display:flex;align-items:center;justify-content:center;font-size:2vh;font-weight:800;transition:all .45s}.hero{grid-column:1/3}.stage-2{border-style:solid}.stage-2 .region{background:white}.stage-3{background:white;border:2px solid var(--blue)}.stage-3 .hero{background:var(--navy);color:white;justify-content:flex-start;padding-left:2vw;font-size:2.7vh}.stage-3 .controls{background:var(--blue-soft)}.stage-3 .content{background:var(--green-soft);position:relative}.stage-3 .content i,.stage-3 .content b{position:absolute;left:9%;right:9%;height:9%;background:white;border-radius:1vw}.stage-3 .content i:first-of-type{top:40%}.stage-3 .content i:nth-of-type(2){top:58%;right:40%}.stage-3 .content b{top:76%;right:65%;background:var(--yellow)}.prompt{background:white;border:2px solid var(--blue);border-radius:1vw;width:96%;padding:3vh 3vw}.prompt small{font-weight:800;letter-spacing:.15em;color:var(--blue)}blockquote{font-size:2.5vh;line-height:1.4;font-weight:700;margin:2vh 0 0}.checks{display:grid;grid-template-columns:repeat(2,1fr);gap:1.2vh 1.3vw;width:100%}.checks .card{background:var(--green-soft);position:relative;padding-left:3.3vw}.checks .card:before{content:'✓';position:absolute;left:1.1vw;color:var(--green);font-weight:900}.gate{position:absolute;bottom:8%;font-size:1.7vh;color:var(--green);font-weight:800}.state-demo{width:95%;height:82%;background:white;border-radius:1vw;display:grid;grid-template-columns:1fr .22fr 2fr;gap:2vw;align-items:center;padding:4vh 3vw}.memory{height:80%;background:var(--blue-soft);border-radius:.8vw;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2vh}.memory span{font-size:2.2vh;font-weight:800}.memory strong{font-size:2.5vh;color:var(--green)}.memory button{border:0;border-radius:1vw;padding:1.1vh 1.3vw;background:var(--yellow);font-weight:800}.arrow{font-size:5vh;color:var(--orange);font-weight:900}.ui{height:80%;background:var(--paper);border-radius:.8vw;padding:2.3vh 2vw}.ui span{font-size:2vh;font-weight:800}.ui i{display:block;height:1vh;background:#dce1e4;border-radius:1vh;margin:2vh 0}.ui div{height:48%;width:45%;background:var(--blue-soft);border-radius:.6vw;display:flex;align-items:center;justify-content:center;text-align:center;font-size:1.7vh;font-weight:800;color:var(--blue);transition:width .5s,background .5s}.ui div.open{width:100%;background:var(--green-soft);color:var(--green)}.pyramid{width:100%;height:82%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:.8vh}.pyramid div{background:var(--blue-soft);padding:1.1vh;text-align:center;border-radius:.6vw;font-size:1.8vh;font-weight:800}.pyramid div:last-child{background:var(--yellow)}#notes{position:fixed;z-index:20;left:2vw;right:2vw;bottom:2vh;background:#111e;color:white;padding:1.5vh 2vw;border-radius:.7vw;font-size:1.8vh;display:none}#notes.show{display:block}#help{position:fixed;z-index:20;right:1vw;top:1vh;color:#fff8;font-size:1.3vh}.phase-PHASE-1 .eyebrow{color:var(--blue)}@keyframes reveal{to{opacity:1;transform:none}}
</style>
</head>
<body>
${sections}
<div id="notes"></div>
<div id="help">← → / Space · N notes · F fullscreen</div>
<script>
const slides=[...document.querySelectorAll('.slide')];let current=0;let updatingHash=false;const notes=document.getElementById('notes');
function indexFromHash(){const n=Number(location.hash.replace('#slide-',''));return Number.isFinite(n)&&n>0?n-1:0}
function show(i,{updateHash=true}={}){current=Math.max(0,Math.min(slides.length-1,i));slides.forEach((s,n)=>s.classList.toggle('active',n===current));notes.textContent=slides[current].dataset.notes;scrollTo(0,0);if(updateHash&&location.hash!=='#slide-'+(current+1)){updatingHash=true;history.replaceState(null,'','#slide-'+(current+1));updatingHash=false}}
function toggleNotes(){notes.classList.toggle('show')}
addEventListener('keydown',e=>{if(['ArrowRight',' ','PageDown'].includes(e.key)){e.preventDefault();show(current+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(current-1)}if(e.key==='Home'){e.preventDefault();show(0)}if(e.key==='End'){e.preventDefault();show(slides.length-1)}if(e.key.toLowerCase()==='n'){e.preventDefault();toggleNotes()}if(e.key.toLowerCase()==='f'){e.preventDefault();document.documentElement.requestFullscreen?.()}});
addEventListener('hashchange',()=>{if(!updatingHash)show(indexFromHash(),{updateHash:false})});
addEventListener('click',e=>{if(!e.target.closest('#notes'))show(current+1)});
show(indexFromHash(),{updateHash:false});
</script>
</body>
</html>`;
}

function generateGuide() {
  const phaseTitles = new Map();
  slides.forEach((slide, index) => {
    if (!phaseTitles.has(slide.phase)) phaseTitles.set(slide.phase, []);
    phaseTitles.get(slide.phase).push({ ...slide, index: index + 1 });
  });
  const lines = [
    `# ${meta.title}`,
    '',
    `${meta.subtitle}. This is the editable facilitator companion to the PowerPoint and HTML deck.`,
    '',
    '## Files',
    '',
    '- `zero-to-production-vibe-coder.pptx` — import into Google Slides.',
    '- `index.html` — animated local presentation (`N` toggles notes, `F` fullscreen).',
    '- `slides.mjs` — single editable content source.',
    '- `generate.mjs` — regenerates all outputs with `npm run build`.',
    '',
    '## Google Slides import',
    '',
    '1. Open Google Drive.',
    '2. New → File upload → select the `.pptx`.',
    '3. Open with Google Slides.',
    '4. File → Save as Google Slides.',
    '5. Progressive “animations” are duplicate slides (HTML → meaning → CSS and state closed → open), so they survive import.',
    '6. Speaker notes are included in the `.pptx`; verify them after import.',
    '',
    '## Presenter controls (HTML)',
    '',
    '- Right arrow / Space: next slide.',
    '- Left arrow: previous slide.',
    '- `N`: speaker notes.',
    '- `F`: fullscreen.',
    '',
    '## Workshop principles',
    '',
    '- Agent window and Browser preview only—no Cmd+K, code reading, or terminal teaching.',
    '- Explain → Agent → Preview → Assess → Reflect.',
    '- No specimen UI: participants apply the process to a real design problem.',
    '- Assess running behavior and evidence, never code literacy.',
    '- Q&A after every assessment.',
    '',
  ];
  for (const [phase, entries] of phaseTitles) {
    lines.push(`## ${phase}`, '');
    for (const slide of entries) {
      lines.push(`### Slide ${slide.index} — ${slide.title}`, '');
      if (slide.subtitle) lines.push(`**On slide:** ${slide.subtitle}`, '');
      if (slide.statement) lines.push(`**On slide:** ${slide.statement}`, '');
      if (slide.prompt) lines.push('**Participant prompt:**', '', `> ${slide.prompt}`, '');
      if (slide.checks) lines.push('**Assessment checks:**', ...slide.checks.map((x) => `- ${x}`), '');
      lines.push(`**Say/do:** ${slide.notes}`, '');
    }
  }
  lines.push(
    '## Required live links',
    '',
    '- Modus AI: https://modus.trimble.com/modus-ai',
    '- One-step setup: https://modus.trimble.com/setup',
    '- Product & Design Workflow: https://modus.trimble.com/modus-ai/product-design-workflow',
    '- Vibe Coding Guide: https://modus.trimble.com/modus-ai/vibe-coding-guide/process',
    '- AI PDLC Playbook: https://modus.trimble.com/modus-ai/ai-pdlc-playbook',
    '- Cursor rules: https://modus.trimble.com/modus-ai/rules/cursor',
    '- Cursor skills: https://modus.trimble.com/modus-ai/skills/cursor',
    '- Components: https://modus.trimble.com/components/',
    '- Patterns: https://modus.trimble.com/patterns',
    '- Templates: https://modus.trimble.com/templates',
    '- Accessibility: https://modus.trimble.com/foundations/accessibility/overview',
    '- Figma Cursor setup: https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server',
    '',
    '## Edit workflow',
    '',
    'Edit slide wording and notes in `slides.mjs`, then run:',
    '',
    '```bash',
    'npm run build',
    '```',
    '',
    'For a one-off Google Slides change, edit directly after import. For changes that should remain synchronized with HTML and notes, edit `slides.mjs` and regenerate.',
    '',
  );
  return lines.join('\n');
}

await pptx.writeFile({ fileName: outputPptx });
fs.writeFileSync(outputHtml, generateHtml());
fs.writeFileSync(outputGuide, generateGuide());
console.log(`Generated ${slides.length} slides:`);
console.log(outputPptx);
console.log(outputHtml);
console.log(outputGuide);
