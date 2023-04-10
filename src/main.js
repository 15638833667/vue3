import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import mitt from 'mitt'
const $bus = mitt()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.config.globalProperties.$bus = $bus;
