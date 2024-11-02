const common = {
  // Design Tokens
  '--rounded-box': '0.5rem',
  '--rounded-btn': '0.25rem', // 4px
  '--rounded-badge': '0.25rem', // 4px

  // Animation
  '--animation-btn': '0.3s',
  '--animation-input': '0.3s',

  // Button
  '--btn-text-case': 'uppercase',
  '--btn-focus-scale': '0.95',

  // Border
  '--border-btn': '1px',

  // Padding
  '--navbar-padding': '1rem',
  '--padding-card': '2rem',
};

export const modusClassic = {
  light: {
    ...common,

    // Primary Colors
    primary: '#0063a3',
    'primary-focus': '#003054',
    'primary-content': '#ffffff',

    // Secondary Colors
    secondary: '#fcb647',
    'secondary-focus': '#d88228',
    'secondary-content': '#ffffff',

    // Tertiary/Accent Colors
    accent: '#95301f',
    'accent-focus': '#662a12',
    'accent-content': '#ffffff',

    // Neutral Colors
    neutral: '#464b52',
    'neutral-focus': '#252a2e',
    'neutral-content': '#ffffff',

    // Base Colors
    'base-100': '#ffffff',
    'base-200': '#e0e1e9',
    'base-300': '#b7b9c3',
    'base-content': '#171c1e',

    // State/Feedback Colors
    info: '#217cbb',
    'info-content': '#ffffff',
    success: '#1e8a44',
    'success-content': '#ffffff',
    warning: '#fbad26',
    'warning-content': '#000000',
    error: '#da212c',
    'error-content': '#ffffff',
  },
  dark: {
    ...common,

    // Primary Colors
    primary: '#368fc7',
    'primary-focus': '#217cbb',
    'primary-content': '#ffffff',

    // Secondary Colors
    secondary: '#fec157',
    'secondary-focus': '#fcb647',
    'secondary-content': '#000000',

    // Tertiary/Accent Colors
    accent: '#b44e2a',
    'accent-focus': '#95301f',
    'accent-content': '#ffffff',

    // Neutral Colors
    neutral: '#7d808d',
    'neutral-focus': '#464b52',
    'neutral-content': '#ffffff',

    // Base Colors
    'base-100': '#252a2e',
    'base-200': '#171c1e',
    'base-300': '#000000',
    'base-content': '#e0e1e9',

    // State/Feedback Colors
    info: '#6cb7e2',
    'info-content': '#000000',
    success: '#4ea646',
    'success-content': '#ffffff',
    warning: '#fec157',
    'warning-content': '#000000',
    error: '#e86363',
    'error-content': '#ffffff',
  },
};
