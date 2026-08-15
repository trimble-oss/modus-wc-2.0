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
  paper: 'F8F9FA',
  white: 'FFFFFF',
  yellow: 'F9C74F',
  blue: '0063A3',
  blueSoft: 'D9EBF7',
  navy: '003E63',
  greenSoft: 'DDEFE6',
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

function renderSlide(data, index) {
  const slide = pptx.addSlide('BASE');
  const isHero = data.kind === 'cover' || data.kind === 'close';

  if (isHero) {
    slide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
      fill: { color: C.navy },
      line: { transparency: 100 },
    });
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 9.4,
      y: -1.4,
      w: 5.4,
      h: 5.4,
      fill: { color: C.yellow, transparency: 78 },
      line: { transparency: 100 },
    });
    addText(slide, `${index + 1} / 10`, 11.4, 6.95, 1.4, 0.24, {
      fontSize: 12,
      color: C.yellow,
      align: 'right',
    });
    addText(slide, data.title, 0.8, 1.35, 10.4, 1.7, {
      fontSize: 40,
      bold: true,
      color: C.white,
      valign: 'top',
    });
    data.points.forEach((point, i) => {
      addText(slide, point, 0.82, 3.35 + i * 0.72, 10.8, 0.6, {
        fontSize: 22,
        color: C.white,
        valign: 'top',
      });
    });
    return;
  }

  addText(slide, data.title, 0.7, 0.55, 11.9, 1.05, {
    fontSize: 32,
    bold: true,
    color: C.ink,
    valign: 'top',
  });

  if (data.kind === 'journey') {
    data.points.forEach((item, i) => {
      const y = 1.85 + i * 1.2;
      addRect(slide, 0.7, y, 11.9, 1.05, i % 2 ? C.greenSoft : C.blueSoft);
      addText(slide, item[0], 0.98, y + 0.28, 1.7, 0.5, { fontSize: 18, bold: true, color: C.blue });
      addText(slide, item[1], 2.85, y + 0.28, 9.4, 0.5, { fontSize: 20, bold: true });
    });
    return;
  }

  data.points.forEach((point, i) => {
    const y = 1.85 + i * 1.2;
    addRect(slide, 0.7, y, 11.9, 1.05, i % 2 ? C.greenSoft : C.blueSoft);
    addText(slide, point, 1.0, y + 0.22, 11.3, 0.62, { fontSize: 22, bold: true });
  });
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
  const isHero = data.kind === 'cover' || data.kind === 'close';
  const items = data.points
    .map((point) => {
      if (Array.isArray(point)) {
        return `<li><strong>${escapeHtml(point[0])}</strong> ${escapeHtml(point[1])}</li>`;
      }
      return `<li>${escapeHtml(point)}</li>`;
    })
    .join('');
  return `${isHero ? `<h1>${escapeHtml(data.title)}</h1>` : `<h1>${escapeHtml(data.title)}</h1>`}<ul>${items}</ul>`;
}

const sections = slides
  .map((data, index) => {
    const hero = data.kind === 'cover' || data.kind === 'close' ? 'hero' : '';
    return `<section class="slide ${hero}" data-index="${index}">${renderHtmlContent(data)}<span class="number">${index + 1} / 10</span></section>`;
  })
  .join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(meta.title)}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; background: #003E63; font-family: Arial, sans-serif; }
  .deck { height: 100%; overflow: hidden; }
  .slide {
    display: none;
    height: 100%;
    padding: 7vh 8vw 10vh;
    background: #F8F9FA;
    color: #1B242B;
    position: relative;
  }
  .slide.active { display: flex; flex-direction: column; justify-content: center; animation: rise .35s ease; }
  .slide.hero { background: #003E63; color: #fff; }
  .slide.hero::after {
    content: "";
    position: absolute;
    top: -8vh;
    right: -4vw;
    width: 38vw;
    height: 38vw;
    border-radius: 50%;
    background: #F9C74F;
    opacity: .18;
  }
  h1 { font-size: clamp(2.2rem, 4.4vw, 3.6rem); margin: 0 0 4vh; max-width: 22ch; line-height: 1.12; }
  ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 1.4vh; }
  li {
    background: #D9EBF7;
    border-radius: 16px;
    padding: 2.2vh 2vw;
    font-size: clamp(1.15rem, 2.1vw, 1.7rem);
    font-weight: 700;
    line-height: 1.3;
  }
  li:nth-child(even) { background: #DDEFE6; }
  .hero li { background: transparent; padding: 0; font-weight: 500; }
  .hero li:nth-child(even) { background: transparent; }
  .number { position: absolute; right: 3vw; bottom: 3vh; font-size: .95rem; color: #77848D; }
  .hero .number { color: #F9C74F; }
  @keyframes rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
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
