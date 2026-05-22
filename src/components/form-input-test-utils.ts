/**
 * Shared assertions for form control label ↔ input id linkage.
 */
export function expectLabelLinkedToControl(
  root: HTMLElement,
  controlSelector: string
): void {
  const control = root.querySelector(controlSelector);
  const labelHost = root.querySelector('modus-wc-input-label');

  expect(control).not.toBeNull();
  expect(labelHost).not.toBeNull();
  expect(control!.id).toMatch(/^mwc_id_\d+$/);

  const nativeLabel = labelHost!.querySelector('label');
  expect(nativeLabel).not.toBeNull();

  const labelFor =
    nativeLabel!.htmlFor ||
    nativeLabel!.getAttribute('for') ||
    nativeLabel!.getAttribute('htmlfor') ||
    '';
  expect(labelFor).toBe(control!.id);
}
