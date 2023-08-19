import { createApp } from 'vue'
import { createPinia } from 'pinia'

//@ts-ignore
import App from '../src/App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
