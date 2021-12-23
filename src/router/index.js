import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Career Exploration Module' }
  },
  {
    path: '/reset/:token',
    name: 'About',
    component: () => import('../components/Home/Auth/Reset')
  },



  // HOME 
  {
    path: '/module/:slug/:outline_id?',
    name: 'Module',
    component: () => import('../views/Home/ModuleDetail')
  },


  // USER 
  {
    path: '/user/dashboard',
    name: 'User Dashboard',
    component: () => import('../views/User/Dashboard')
  },

  {
    path: '/user/edit',
    name: 'User Edit',
    component: () => import('../components/User/EditProfile')
  },

  {
    path: '/user/module/answer/:slug',
    name: 'User Answer',
    component: () => import('../views/User/Answer')
  },


  // ADMIN 
  {
    path: '/admin',
    name: 'Admin Login',
    component: () => import('../views/Auth/Admin')
  },
  {
    path: '/admin/dashboard',
    name: 'Admin Dashboard',
    component: () => import('../views/Admin/Dashboard')
  },
  {
    path: '/admin/module',
    name: 'Admin Module',
    component: () => import('../views/Admin/Module')
  },
  {
    path: '/admin/module/create',
    name: 'Admin Module Create',
    component: () => import('../views/Admin/ModuleCreate')
  },
  {
    path: '/admin/module/create/:module_id/:outline_id?/:part_id?',
    name: 'Admin Module ID',
    component: () => import('../views/Admin/ModuleCreate')
  },
  {
    path: '/admin/user',
    name: 'Admin User',
    component: () => import('../views/Admin/User')
  },
  {
    path: '/admin/user/:id',
    name: 'Admin User Detail',
    component: () => import('../views/Admin/UserDetail')
  },
  {
    path: '/admin/user/:id/answer/:slug',
    name: 'Admin User Progress',
    component: () => import('../views/Admin/UserAnswer')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
