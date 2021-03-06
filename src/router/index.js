import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/flex',
    name: 'flex',
    component: () => import(/* webpackChunkName: 'flex' */'@/views/flex/')
  },
  {
    path: '/wing-blank',
    name: 'wing-blank',
    component: () => import(/* webpackChunkName: 'wing-blank' */'@/views/wing-blank/')
  },
  {
    path: '/white-space',
    name: 'white-space',
    component: () => import(/* webpackChunkName: 'white-space' */'@/views/white-space/')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
