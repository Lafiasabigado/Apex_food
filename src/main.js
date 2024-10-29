import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import { clerkPlugin } from 'vue-clerk'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createApp(App)
.use(router)
.use(clerkPlugin, {
  publishableKey: PUBLISHABLE_KEY
})
.mount('#app')

