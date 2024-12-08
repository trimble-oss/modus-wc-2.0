export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type InputSize = Extract<Size, 'sm' | 'md' | 'lg'>;

export type Orientation = 'horizontal' | 'vertical';
