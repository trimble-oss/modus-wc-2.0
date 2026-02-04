import { createApp } from 'vue'
import App from './App.vue'
import { ComponentLibrary } from '@trimble-oss/moduswebcomponents-vue'
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css'

createApp(App).use(ComponentLibrary).mount('#app') 