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
    component: () => import('../components/Home/Auth/Reset')
  },
  {
    path: '/admin',
    name: 'Admin Login',
    component: () => import('../views/Auth/Admin')
  },
  {
    path: '/admin/dashboard',
    name: 'Admin-Dashboard',
    component: () => import('../views/Admin/Dashboard')
  },
  {
    path: '/admin/module',
    name: 'Admin-Dashboard',
    component: () => import('../views/Admin/Module')
  },
  {
    path: '/admin/user',
    name: 'Admin-User',
    component: () => import('../views/Admin/User')
  },
  {
    path: '/admin/user/:id',
    name: 'Admin-User-Detail',
    component: () => import('../views/Admin/UserDetail')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
