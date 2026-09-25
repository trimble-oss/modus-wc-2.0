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

export function tokenizeIllustrationSvg(svg) {
  const tokenized = svg
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(
      /preserveAspectRatio="none"/gi,
      'preserveAspectRatio="xMidYMid meet"'
    )
    .replace(/\soverflow="visible"/gi, '')
    .replace(/\swidth="[^"]*"/gi, '')
    .replace(/\sheight="[^"]*"/gi, '')
    .replace(/fill="#0063A3"/gi, 'class="illustration-primary"')
    .replace(/fill="#217CBB"/gi, 'class="illustration-primary"')
    .replace(/fill="#DCEDF9"/gi, 'class="illustration-fill-pale"')
    .replace(/fill="#E1F0FF"/gi, 'class="illustration-fill-pale"')
    .replace(
      /(<(?!mask\b)[^>]*?)\sfill="white"/gi,
      '$1 class="illustration-fill-surface"'
    )
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
      /stroke="white"/gi,
      'class="illustration-stroke-surface" stroke="currentColor"'
    );

  return mergeDuplicateClassAttributes(tokenized);
}
