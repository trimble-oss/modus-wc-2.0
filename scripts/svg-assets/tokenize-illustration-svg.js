/* eslint-env node */

export function mergeDuplicateClassAttributes(svg) {
  let result = svg;
  let previous = '';

  while (result !== previous) {
    previous = result;
    result = result.replace(
      /class="([^"]*)"\s+class="([^"]*)"/g,
      'class="$1 $2"'
    );
  }

  return result;
}

function tokenizeColors(svg) {
  return svg
    .replace(/fill="#0063A3"/gi, 'class="illustration-primary"')
    .replace(/fill="#217CBB"/gi, 'class="illustration-primary"')
    .replace(/fill="#DCEDF9"/gi, 'class="illustration-fill-pale"')
    .replace(/fill="#E1F0FF"/gi, 'class="illustration-fill-pale"')
    .replace(/fill="white"/gi, 'class="illustration-fill-surface"')
    .replace(/fill="#FFFFFF"/gi, 'class="illustration-fill-surface"')
    .replace(/fill="#6A6E79"/gi, 'class="illustration-muted"')
    .replace(
      /stroke="#0063A3"/gi,
      'class="illustration-stroke-primary" stroke="currentColor"'
    )
    .replace(
      /stroke="#217CBB"/gi,
      'class="illustration-stroke-primary" stroke="currentColor"'
    )
    .replace(
      /stroke="(white|#FFFFFF)"/gi,
      'class="illustration-stroke-surface" stroke="currentColor"'
    );
}

export function tokenizeIllustrationSvg(svg) {
  const cleaned = svg
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(
      /preserveAspectRatio="none"/gi,
      'preserveAspectRatio="xMidYMid meet"'
    )
    .replace(/\soverflow="visible"/gi, '')
    .replace(/(<svg[^>]*?)\swidth="[^"]*"/i, '$1')
    .replace(/(<svg[^>]*?)\sheight="[^"]*"/i, '$1');

  // Mask luminance must stay black/white regardless of theme, so masks are not tokenized.
  const masks = [];
  const withoutMasks = cleaned.replace(/<mask\b[\s\S]*?<\/mask>/gi, (mask) => {
    masks.push(mask);
    return `__MASK_${masks.length - 1}__`;
  });

  const tokenized = tokenizeColors(withoutMasks).replace(
    /__MASK_(\d+)__/g,
    (_, index) => masks[Number(index)]
  );

  return mergeDuplicateClassAttributes(tokenized);
}
