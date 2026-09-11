export function resolveReferencedAriaText(
  context: Document | HTMLElement,
  labelledBy: string
): string {
  const doc =
    (context as HTMLElement).nodeType === 9
      ? (context as Document)
      : (context as HTMLElement).ownerDocument;

  if (!doc?.getElementById) {
    return '';
  }

  return labelledBy
    .split(/\s+/)
    .map((id) => doc.getElementById(id)?.textContent?.trim() ?? '')
    .filter(Boolean)
    .join(' ');
}
