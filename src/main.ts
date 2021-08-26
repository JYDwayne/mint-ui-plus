import { createApp } from 'vue';
import App from './app.vue';
import routes from './route.config';
import { createRouter, createWebHashHistory } from 'vue-router';
import '../src/assets/font/iconfont.css';
import {install as Mint} from '../src/index';

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.use(Mint);

app.mount('#app')
