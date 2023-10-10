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
      component: () => import('../views/Contect.vue')
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('../components/Planning.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../UX/user.vue')
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

  ]
})

export default router
