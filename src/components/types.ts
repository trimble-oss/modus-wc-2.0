// These are the supported sizes in DaisyUI
export type DaisySize = 'xs' | 'sm' | 'md' | 'lg';

export type Density = 'comfortable' | 'compact';

export type ModusSize = Extract<DaisySize, 'sm' | 'md' | 'lg'>;

export type Orientation = 'horizontal' | 'vertical';
