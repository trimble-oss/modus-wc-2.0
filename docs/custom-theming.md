# Custom Theming Guide for Modus Web Components

Modus Web Components support flexible theming options to match your application's design. Here's how you can customize the appearance of our components:

## 1. Override CSS Custom Properties

Our components use CSS custom properties for styling. You can override these globally:

```css
:root {
  --modus-wc-primary-color: #00ff00;
  --modus-wc-button-bg-color: #00ff00;
  --modus-wc-button-text-color: #000000;
}
```

## 2. Use Custom CSS Classes

Many components accept a `custom-class` attribute for additional styling:

```html
<modus-wc-button
  label="Custom Button"
  custom-class="my-custom-button"
></modus-wc-button>
```

```css
.my-custom-button {
  --modus-wc-button-bg-color: purple;
  --modus-wc-button-text-color: white;
}
```

## 3. Apply Direct CSS Overrides

Since Shadow DOM is disabled, you can directly target component classes:

```css
.modus-wc-button {
  background-color: yellow;
  color: black;
}
```

## 4. Implement Different Modes (Dark Mode, High Contrast Mode)

Our theming system supports different modes out of the box. You can switch between modes using utility functions provided by the library.

### Available Modes

- Default (Light) Mode
- Dark Mode
- High Contrast Mode

### Using Mode Switching Functions

Import the utility functions in your application:
import { setModusMode, toggleModusMode, getCurrentModusMode, initializeModusMode } from 'modus-web-components/utils/theme';

```typescript
import {
  getCurrentModusMode,
  initializeModusMode,
  setModusMode,
} from 'modus-web-components/utils/theme';
```

Initialize the mode based on user preferences:

```typescript
initializeModusMode();
```

Switch to a specific mode:

```typescript
setModusMode('dark'); // Options: 'default', 'dark', 'high-contrast'
```

Get the current mode:

```typescript
const currentMode = getCurrentModusMode();
```

## 5. Applying Modes in CSS

The mode switching functions apply CSS classes to the <html> element. You can use these classes to style your components for different modes:

```css
/* Default styles */
.modus-wc-button {
  background-color: var(--modus-wc-button-bg-color);
  color: var(--modus-wc-button-text-color);
}

/* Dark mode styles */
.modus-wc-dark-mode .modus-wc-button {
  --modus-wc-button-bg-color: #333333;
  --modus-wc-button-text-color: #ffffff;
}

/* High contrast mode styles */
.modus-wc-high-contrast-mode .modus-wc-button {
  --modus-wc-button-bg-color: #000000;
  --modus-wc-button-text-color: #ffffff;
  border: 2px solid #ffffff;
}
```

## 6. Component-Level Custom Properties

Fine-tune individual component instances:

```css
modus-wc-button {
  --modus-wc-button-padding: 15px 30px;
  --modus-wc-button-font-size: 18px;
}
```

## Best Practices

1. Use CSS variables for themeable properties to ensure consistency across your application.
2. Leverage the provided mode switching functions to implement a cohesive theming experience.
3. Always consider accessibility when creating custom themes or modes.
4. Test your custom themes and modes thoroughly across different browsers and devices.

For a complete list of customizable properties and more advanced theming options, please refer to our detailed documentation.
