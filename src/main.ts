import { createApp } from 'vue'
import App from './app.vue'
import routes from './route.config';
import { createRouter, createWebHashHistory } from 'vue-router'
import Cell from '../packages/cell';

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.component(Cell.name, Cell)
app.use(router)
app.mount('#app')
