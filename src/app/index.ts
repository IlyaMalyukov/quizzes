import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './ui.vue'

import {worker} from "../__mocks__";

await worker.start();

const pinia = createPinia();

const app = createApp(App);

app.use(pinia)
app.mount('#app')
