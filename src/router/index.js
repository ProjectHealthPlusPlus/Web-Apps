import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/patients',
    name: 'patients',
    component: () => import('@/components/us_pacient/pacientPage')
  },
  {
    path: '/diagnostics',
    name: 'diagnostics',
    component: () => import('@/diagnostics/pages/diagnostics')
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('@/doctors/pages/doctors')
  },
  {
    path: '/doctors/content',
    name: 'doctors/content',
    component: () => import('@/doctors/layout/content')
  },
  {
    path: '/MedicalCenter',
    name: 'MedicalCenter',
    component: () => import('@/MedicalCenter/pages/medicalCenter')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/Register')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
