import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'
import App from './ui.vue'

import { worker } from "@/__mocks__";

await worker.start();

const pinia = createPinia();
const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(pinia)
app.use(vuetify)
app.mount('#app')
