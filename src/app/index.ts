import { createApp } from 'vue'
import './style.css'
import App from './ui.vue'

import {worker} from "../__mocks__";

await worker.start();

createApp(App).mount('#app')
