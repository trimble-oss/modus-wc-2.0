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

## 4. Utilize Style Modes (Currently unsupported)

Components support different style modes. Set the `mode` attribute and customize accordingly:

```html
<modus-wc-button label="Primary Button" mode="primary"></modus-wc-button>
```

```css
.modus-wc-button.mode-primary {
  --modus-wc-button-bg-color: #0056b3;
}
```

## 5. Component-Level Custom Properties

Fine-tune individual component instances:

```css
modus-wc-button {
  --modus-wc-button-padding: 15px 30px;
  --modus-wc-button-font-size: 18px;
}
```

For a complete list of customizable properties and more advanced theming options, please refer to our detailed documentation.
