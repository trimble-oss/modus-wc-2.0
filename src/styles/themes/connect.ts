import { common } from './common';

const commonOverrides = { ...common };

export const connect = {
  light: {
    ...commonOverrides,

    '--rounded-box': '0',
    '--rounded-btn': '2px',
    '--btn-focus-scale': '1',
    '--input-radius': '2px',
    '--rounded-badge': '2px',
    '--alert-border-left-width': '0',
    '--alert-border-width': '0',
    '--alert-border-radius': '4px',
    '--input-bottom-border-width': '2px',
    '--tab-radius': '0',

    // Primary Colors (Primary Palette)
    primary: '#005F9E', // Trimble Blue
    'primary-focus': '#00437B', // Trimble Blue Dark
    'primary-content': '#FFFFFF', // White

    // Secondary Colors (Yellow Progression)
    secondary: '#6A6976', // Neutral Gray 10
    'secondary-focus': '#474655', // Neutral Gray 8
    'secondary-content': '#FFFFFF', // Trimble Gray

    // Tertiary/Accent Colors (Neutral Progression)
    accent: '#6A6E79', // Gray 6
    'accent-focus': '#464B52', // Gray 8
    'accent-content': '#FFFFFF', // White

    // Neutral Colors
    neutral: '#CBCDD6', // Gray 1
    'neutral-focus': '#A3A6B1', // Gray 3
    'neutral-content': '#252A2E', // Trimble Gray

    // Base Colors
    'base-100': '#FFFFFF', // White
    'base-200': '#CBCDD6', // Gray 1
    'base-300': '#B7B9C3', // Gray 2
    'base-content': '#252A2E', // Trimble Gray

    // State/Feedback Colors
    info: '#0063A3', // Trimble Blue
    'info-content': '#FFFFFF', // White
    success: '#72A544', // Green
    'success-content': '#FFFFFF', // White
    warning: '#FFBE00', // Yellow
    'warning-content': '#252A2E', // Trimble Gray
    error: '#D52A33', // Red
    'error-content': '#FFFFFF', // White
  },
  dark: {
    ...commonOverrides,

    '--rounded-box': '0',
    '--rounded-btn': '2px',
    '--btn-focus-scale': '1',
    '--input-radius': '2px',
    '--rounded-badge': '2px',
    '--alert-border-left-width': '0',
    '--alert-border-width': '0',
    '--alert-border-radius': '4px',
    '--input-bottom-border-width': '2px',
    '--tab-radius': '0',

    // Primary Colors (Primary Palette)
    primary: '#019aeb', // Trimble Blue
    'primary-focus': '#004F83', // Trimble Blue Dark
    'primary-content': '#000000', // White

    // Secondary Colors (Gray Progression)
    secondary: '#f1f1f6', // Neutral Gray Light
    'secondary-focus': '#E49325', // Yellow Dark
    'secondary-content': '#000', // Trimble Black

    // Tertiary/Accent Colors (Neutral Progression)
    accent: '#6A6E79', // Gray 6
    'accent-focus': '#464B52', // Gray 8
    'accent-content': '#FFFFFF', // White

    // Neutral Colors
    neutral: '#353A40', // Gray 9
    'neutral-focus': '#171C1E', // Gray 10
    'neutral-content': '#FFFFFF', // White

    // Base Colors
    'base-100': '#171C1E', // Gray 10
    'base-200': '#353A40', // Gray 9
    'base-300': '#464B52', // Gray 8
    'base-content': '#FFFFFF', // White

    // State/Feedback Colors
    info: '#217CBB', // Trimble Blue
    'info-content': '#FFFFFF', // White
    success: '#4EA646', // Green
    'success-content': '#000', // Black
    warning: '#FEC157', // Yellow
    'warning-content': '#252A2E', // Trimble Gray
    error: '#E86363', // Red
    'error-content': '#000', // Black
  },
};
