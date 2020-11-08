import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '../components/Home'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import MyVMs from '../components/Vms/MyVMs'
import NewVM from '../components/Vms/NewVM'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: AuthGuard
  },
  {
    path: '',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/myvms',
    name: 'myvms',
    component: MyVMs,
    beforeEnter: AuthGuard
  },
  {
    path: '/new',
    name: 'newvm',
    component: NewVM,
    beforeEnter: AuthGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
