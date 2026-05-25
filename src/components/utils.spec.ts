import { expectLabelLinkedToControl, sanitizeUrl } from './utils';

describe('sanitizeUrl', () => {
  it('should return trimmed allowed absolute URLs', () => {
    expect(sanitizeUrl(' https://trimble.com ')).toBe('https://trimble.com');
    expect(sanitizeUrl('mailto:test@trimble.com')).toBe(
      'mailto:test@trimble.com'
    );
    expect(sanitizeUrl('tel:+1234567890')).toBe('tel:+1234567890');
  });

  it('should allow relative URLs', () => {
    expect(sanitizeUrl('/products/table')).toBe('/products/table');
    expect(sanitizeUrl('./details')).toBe('./details');
    expect(sanitizeUrl('#section')).toBe('#section');
  });

  it('should reject unsafe URL protocols', () => {
    expect(sanitizeUrl(' javascript:alert(1) ')).toBeUndefined();
    expect(sanitizeUrl('data:text/html;base64,abcd')).toBeUndefined();
    expect(sanitizeUrl('VBScript:msgbox("x")')).toBeUndefined();
    expect(sanitizeUrl('file:///tmp/example.txt')).toBeUndefined();
  });

  it('should reject empty values', () => {
    expect(sanitizeUrl()).toBeUndefined();
    expect(sanitizeUrl('  ')).toBeUndefined();
  });
});

describe('expectLabelLinkedToControl', () => {
  function createRoot(controlTag, controlId, labelFor) {
    const root = document.createElement('div');

    const control = document.createElement(controlTag);
    control.id = controlId;
    root.appendChild(control);

    const labelHost = document.createElement('modus-wc-input-label');
    const label = document.createElement('label');
    label.htmlFor = labelFor;
    labelHost.appendChild(label);
    root.appendChild(labelHost);

    return root;
  }

  it('should pass when label for matches control id', () => {
    const root = createRoot('input', 'ctrl-1', 'ctrl-1');
    expect(() => expectLabelLinkedToControl(root, 'input')).not.toThrow();
  });

  it('should fail when control is missing', () => {
    const root = document.createElement('div');
    const labelHost = document.createElement('modus-wc-input-label');
    const label = document.createElement('label');
    label.htmlFor = 'ctrl-1';
    labelHost.appendChild(label);
    root.appendChild(labelHost);

    expect(() => expectLabelLinkedToControl(root, 'input')).toThrow();
  });

  it('should fail when label host is missing', () => {
    const root = document.createElement('div');
    const control = document.createElement('input');
    control.id = 'ctrl-1';
    root.appendChild(control);

    expect(() => expectLabelLinkedToControl(root, 'input')).toThrow();
  });

  it('should fail when control has no id', () => {
    const root = createRoot('input', '', 'ctrl-1');
    expect(() => expectLabelLinkedToControl(root, 'input')).toThrow();
  });

  it('should fail when native label is missing', () => {
    const root = document.createElement('div');
    const control = document.createElement('input');
    control.id = 'ctrl-1';
    root.appendChild(control);

    const labelHost = document.createElement('modus-wc-input-label');
    root.appendChild(labelHost);

    expect(() => expectLabelLinkedToControl(root, 'input')).toThrow();
  });

  it('should fail when label for does not match control id', () => {
    const root = createRoot('input', 'ctrl-1', 'wrong-id');
    expect(() => expectLabelLinkedToControl(root, 'input')).toThrow();
  });

  it('should read for from getAttribute when htmlFor is empty', () => {
    const root = document.createElement('div');

    const control = document.createElement('select');
    control.id = 'sel-1';
    root.appendChild(control);

    const labelHost = document.createElement('modus-wc-input-label');
    const label = document.createElement('label');
    label.setAttribute('for', 'sel-1');
    labelHost.appendChild(label);
    root.appendChild(labelHost);

    expect(() => expectLabelLinkedToControl(root, 'select')).not.toThrow();
  });
});
