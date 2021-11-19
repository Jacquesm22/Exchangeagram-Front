import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Splash from '../views/Splash.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Splash',
    component: Splash
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: Photos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
