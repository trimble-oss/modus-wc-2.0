# Modus Vue Components

The [Modus Vue Component](https://modus-web-components.trimble.com/) library provides encapsulated UI elements that adhere to Trimble UX Standards.

## Getting Started

### 1. Install Package

```bash
npm install @trimble-oss/moduswebcomponents-vue@latest
```

**Important**: Lock the installed package versions to avoid unintended breakages on future npm installs.

### 2. Set up the styling

Import the Modus CSS file in your main JavaScript or CSS file:

```js
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
```

### 3. Import and use the components

```vue
<template>
  <ModusWcButton label="Click Me" />
</template>

<script setup lang="ts">
import { ModusWcButton } from '@trimble-oss/moduswebcomponents-vue';
</script>
```

## Documentation

For full documentation, visit [Modus Web Components Storybook](https://modus-web-components.trimble.com/). 