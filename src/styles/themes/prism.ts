import { common } from './common';

const commonOverrides = {
  ...common,

  '--rounded-badge': '0.75rem',
};

export const prism = {
  light: {
    ...commonOverrides,

    // Primary Colors (Blue progression)
    primary: '#0053B3', // Primary Blue Buttons
    'primary-focus': '#082F5D', // Primary Dark
    'primary-content': '#FFFFFF', // White

    // Secondary Colors (Purple progression)
    secondary: '#672CDD', // Purple Dark
    'secondary-focus': '#3F0AA9', // Purple Darker
    'secondary-content': '#FFFFFF', // White

    // Tertiary/Accent Colors (Orange progression)
    accent: '#CC4B00', // Orange Dark
    'accent-focus': '#FF640A', // Orange Darker
    'accent-content': '#FFFFFF', // White

    // Neutral Colors (Grey progression)
    neutral: '#4E555F', // Grey
    'neutral-focus': '#2F3336', // Grey Dark
    'neutral-content': '#FFFFFF', // White

    // Base Colors
    'base-100': '#E0E1E9', // Grey Light
    'base-200': '#B7BAC5', // Grey 2
    'base-300': '#7B808C', // Grey 3
    'base-content': '#0E1112', // Black

    // State/Feedback Colors
    info: '#267EE4', // Blue Between
    'info-content': '#FFFFFF', // White
    success: '#008516', // Green
    'success-content': '#FFFFFF', // White
    warning: '#FBAD26', // Yellow Warning
    'warning-content': '#0E1112', // Black
    error: '#CA0000', // Red
    'error-content': '#FFFFFF', // White
  },
  dark: {
    ...commonOverrides,

    // Primary Colors (Blue progression)
    primary: '#0053B3', // Primary Blue Buttons
    'primary-focus': '#082F5D', // Primary Dark
    'primary-content': '#FFFFFF', // White

    // Secondary Colors (Purple progression)
    secondary: '#672CDD', // Purple Dark
    'secondary-focus': '#3F0AA9', // Purple Darker
    'secondary-content': '#FFFFFF', // White

    // Tertiary/Accent Colors (Orange progression)
    accent: '#CC4B00', // Orange Dark
    'accent-focus': '#FF640A', // Orange Darker
    'accent-content': '#FFFFFF', // White

    // Neutral Colors (Grey progression)
    neutral: '#4E555F', // Grey
    'neutral-focus': '#2F3336', // Grey Dark
    'neutral-content': '#FFFFFF', // White

    // Base Colors
    'base-100': '#4E555F', // Grey
    'base-200': '#2F3336', // Gray Dark
    'base-300': '#0E1112', // Black
    'base-content': '#FFFFFF', // White

    // State/Feedback Colors
    info: '#267EE4', // Blue Between
    'info-content': '#FFFFFF', // White
    success: '#008516', // Green
    'success-content': '#FFFFFF', // White
    warning: '#FBAD26', // Yellow Warning
    'warning-content': '#0E1112', // Black
    error: '#CA0000', // Red
    'error-content': '#FFFFFF', // White
  },
};
