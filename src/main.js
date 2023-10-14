//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import "./firebase"

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import Chart from "vue-frappe-chart"


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VCalendar, {})
app.use(Chart)

app.mount('#app')

const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})

// npm i vue-chartjs chart.js
// npm i firebase
// npm i vuex
// npm i sweetalert2
// npm i google-map
// npm i map
// npm i moment
// npm i bootstrap
// npm i bootstrap-vue
// npm install v-calendar@next @popperjs/core
// npm install vue-frappe-chart
// npm i vue-inline-calendar -S
// npm install -D sass