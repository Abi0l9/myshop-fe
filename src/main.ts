import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import productStore from './store/productStore'

const app = createApp(App)

app.use(router)
app.use(productStore)

app.mount('#app')
