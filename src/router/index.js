import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/PartnersView.vue'),
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('../views/ProgramsView.vue'),
    },
    {
      path: '/program/:id',
      name: 'ProgramView',
      component: () => import('../views/ProgramsView.vue'),
      props: true, // Mengizinkan passing route params sebagai props
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
