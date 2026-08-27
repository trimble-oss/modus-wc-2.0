/** sRGB hex → CSS `oklch()` channel list for Daisy `oklch(var(--p) / 1)`. */

const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

function lin(c) {
  const x = c / 255;
  return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}

export function parseHexRgb(hex) {
  const v = hex.trim();
  if (!HEX.test(v)) return null;
  let h = v.slice(1);
  if (h.length === 3) {
    h = h
      .split('')
      .map((ch) => ch + ch)
      .join('');
  }
  const n = Number.parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function hexToOklchChannels(hex) {
  const rgb = parseHexRgb(hex);
  if (!rgb) return null;
  const r = lin(rgb.r);
  const g = lin(rgb.g);
  const b = lin(rgb.b);
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);
  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const A = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
  const C = Math.hypot(A, B);
  let H = (Math.atan2(B, A) * 180) / Math.PI;
  if (H < 0) H += 360;
  return `${(L * 100).toFixed(3)}% ${C.toFixed(4)} ${H.toFixed(3)}`;
}
