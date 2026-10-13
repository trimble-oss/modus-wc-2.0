/**
 * Rewrites id="..." and url(#...) references in an SVG fragment so ids are unique
 * per component instance (document-scoped ids collide when the same art is used twice).
 */
export function prefixSvgFragmentIds(svg: string, prefix: string): string {
  const idPattern = /\bid="([^"]+)"/g;
  const ids = new Set<string>();
  let match = idPattern.exec(svg);

  while (match !== null) {
    ids.add(match[1]);
    match = idPattern.exec(svg);
  }

  const sortedIds = [...ids].sort((a, b) => b.length - a.length);
  let result = svg;

  for (const id of sortedIds) {
    const prefixed = `${prefix}__${id}`;
    const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(
      new RegExp(`id="${escapedId}"`, 'g'),
      `id="${prefixed}"`
    );
    result = result.replace(
      new RegExp(`url\\(#${escapedId}\\)`, 'g'),
      `url(#${prefixed})`
    );
  }

  return result;
}
