import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)

app.use(router).use(autoAnimatePlugin).mount('#app')
