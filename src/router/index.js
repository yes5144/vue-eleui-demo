import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'home',
    children: [
      { path: 'hello', name: 'hello', component: () => import('../components/HelloWorld.vue') }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Home,
    icon: '',
    children: [
      { path: 'dash01', name: 'dash01', component: () => import('../views/Dashboard/Dash01.vue') },
      { path: 'dash02', name: 'dash02', component: () => import('../views/Dashboard/Dash02.vue') }
    ]
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
