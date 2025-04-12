import { common } from './common';

const commonOverrides = { ...common };

export const modusModern = {
  light: {
    ...commonOverrides,

    // Primary Colors (Primary Palette)
    primary: '#0063A3', // Trimble Blue
    'primary-focus': '#004F83', // Trimble Blue Dark
    'primary-content': '#FFFFFF', // White

    // Secondary Colors (Yellow Progression)
    secondary: '#252a2e', // Neutral Gray 10
    'secondary-focus': '#464B52', // Neutral Gray 8
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
    success: '#1E8A44', // Green
    'success-content': '#FFFFFF', // White
    warning: '#FBAD26', // Yellow
    'warning-content': '#252A2E', // Trimble Gray
    error: '#DA212C', // Red
    'error-content': '#FFFFFF', // White
  },
  dark: {
    ...commonOverrides,

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
