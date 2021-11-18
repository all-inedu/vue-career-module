import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reset/:token',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/Home/Auth/Reset')
  },
  {
    path: '/admin',
    name: 'Admin Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/Admin')
  },
  {
    path: '/admin/dashboard',
    name: 'Admin-Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Dashboard')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
