import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
  server: {
    fs: {
      allow: [
        path.resolve(__dirname),
        path.resolve(__dirname, '../v-latest/dist'),
        path.resolve(__dirname, 'node_modules')
      ]
    }
  },
  resolve: {
    alias: {
      '@trimble-oss/moduswebcomponents/loader': path.resolve(__dirname, '../../../dist/loader'),
      '@trimble-oss/moduswebcomponents/modus-wc-styles.css': path.resolve(__dirname, '../../../dist/modus-wc-styles.css'),
    }
  }
}) 