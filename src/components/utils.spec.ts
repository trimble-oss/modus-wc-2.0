import {
  applySpinbuttonFeedbackName,
  resolveControlFeedbackAria,
  sanitizeUrl,
} from './utils';

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

describe('resolveControlFeedbackAria', () => {
  it('should return no ids when feedback has no message', () => {
    expect(resolveControlFeedbackAria(undefined, 'field', {})).toEqual({
      messageId: undefined,
      describedBy: undefined,
      ariaInvalid: undefined,
    });
    expect(
      resolveControlFeedbackAria({ level: 'error', message: '  ' }, 'field', {
        'aria-invalid': 'grammar',
      })
    ).toEqual({
      messageId: undefined,
      describedBy: undefined,
      ariaInvalid: 'true',
    });
    expect(
      resolveControlFeedbackAria({ level: 'info', message: '  ' }, 'field', {
        'aria-invalid': 'grammar',
      }).ariaInvalid
    ).toBe('grammar');
  });

  it('should link an error message and force aria-invalid', () => {
    expect(
      resolveControlFeedbackAria(
        { level: 'error', message: 'Required' },
        'field',
        { 'aria-describedby': ' hint ', 'aria-invalid': 'grammar' },
        { extraDescribedBy: 'hint extra', ariaInvalid: 'spelling' }
      )
    ).toEqual({
      messageId: 'field-feedback',
      describedBy: 'hint field-feedback extra',
      ariaInvalid: 'true',
    });
  });

  it('should keep a non-error invalid state and omit the message id when asked', () => {
    expect(
      resolveControlFeedbackAria(
        { level: 'info', message: 'Hint' },
        'field',
        {},
        {
          ariaInvalid: 'spelling',
          omitMessageFromDescribedBy: true,
        }
      )
    ).toEqual({
      messageId: 'field-feedback',
      describedBy: undefined,
      ariaInvalid: 'spelling',
    });
  });
});

describe('applySpinbuttonFeedbackName', () => {
  it('should leave attributes unchanged when there is no message id', () => {
    const attributes = { 'aria-label': 'Quantity' };
    expect(
      applySpinbuttonFeedbackName(attributes, undefined, {
        nameId: 'qty-name',
      })
    ).toEqual({ attributes });
  });

  it('should append the feedback id to an existing aria-labelledby', () => {
    expect(
      applySpinbuttonFeedbackName(
        { 'aria-labelledby': '  name   field-feedback  ' },
        'field-feedback',
        { labelId: 'field-label', nameId: 'field-name' }
      )
    ).toEqual({
      attributes: { 'aria-labelledby': 'name field-feedback' },
      hiddenName: undefined,
      labelId: undefined,
    });
  });

  it('should move aria-label into a hidden name', () => {
    expect(
      applySpinbuttonFeedbackName(
        { 'aria-label': ' Quantity ' },
        'field-feedback',
        {
          labelId: 'field-label',
          nameId: 'field-name',
        }
      )
    ).toEqual({
      attributes: { 'aria-labelledby': 'field-name field-feedback' },
      hiddenName: { id: 'field-name', text: 'Quantity' },
      labelId: undefined,
    });
  });

  it('should use the visible label id when aria-label is blank', () => {
    expect(
      applySpinbuttonFeedbackName({ 'aria-label': '  ' }, 'field-feedback', {
        labelId: 'field-label',
        nameId: 'field-name',
      })
    ).toEqual({
      attributes: { 'aria-labelledby': 'field-label field-feedback' },
      hiddenName: undefined,
      labelId: 'field-label',
    });
  });

  it('should use only the feedback id when the field has no name', () => {
    expect(
      applySpinbuttonFeedbackName({}, 'field-feedback', {
        nameId: 'field-name',
      })
    ).toEqual({
      attributes: { 'aria-labelledby': 'field-feedback' },
      hiddenName: undefined,
      labelId: undefined,
    });
  });
});
