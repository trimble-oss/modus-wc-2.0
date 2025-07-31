# Modus Vue Components

Vue-specific wrapper components for [@trimble-oss/moduswebcomponents](https://www.npmjs.com/package/@trimble-oss/moduswebcomponents).

These components are automatically generated using the Stencil Vue Framework Integration.

## Installation

```bash
npm install @trimble-oss/moduswebcomponents-vue
```

## Usage

```vue
<template>
  <ModusWcButton label="Click Me" />
  <ModusWcBadge aria-label="Badge" content="Words" />
</template>

<script setup lang="ts">
import { ModusWcButton, ModusWcBadge } from '@trimble-oss/moduswebcomponents-vue';
</script>
```

## Styling

Make sure to import the Modus styles in your main application:

```js
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';
``` 