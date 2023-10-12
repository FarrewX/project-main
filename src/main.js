//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import "./firebase"

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VCalendar, {})

app.mount('#app')


// npm i v-calendar@next @popperjs/core
// npm i vue-chartjs chart.js
// npm i firebase
// npm i vuex
// npm i sweetalert2