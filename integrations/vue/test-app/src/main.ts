import { createApp } from 'vue'
import App from './App.vue'
import { ComponentLibrary } from './plugin'
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css'

createApp(App).use(ComponentLibrary).mount('#app') 