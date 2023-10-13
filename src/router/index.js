import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('../views/Review.vue')
    },
    {
      path: '/contect',
      name: 'contect',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      component: () => import('../components/Planning.vue')
    },
    {
      path: '/date',
      name: 'date',
      component: () => import('../UX/date.vue')
    },
    {
      path: '/graph',
      name: 'graph',
      component: () => import('../UX/GraphBar.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/planner',
      name: 'planner',
      component: () => import('../views/Planner.vue')
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../components/Weather.vue')
    },

  ]
})

export default router
