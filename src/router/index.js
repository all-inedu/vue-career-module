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
    path: '/admin/student',
    name: 'Admin-Student',
    component: () => import('../views/Admin/Student')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
