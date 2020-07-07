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
    path: '/assets',
    name: 'Assets',
    component: Home,
    icon: '',
    children: [
      { path: 'assetlist', name: 'assetlist', component: () => import('../views/Assets/AssetList.vue') },
      { path: 'assetstate', name: 'assetstate', component: () => import('../views/Assets/AssetState.vue') },
      { path: 'assetsync', name: 'assetsync', component: () => import('../views/Assets/AssetSync.vue') }
    ]
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Home,
    icon: '',
    children: [
      { path: 'projectlist', name: 'projectlist', component: () => import('../views/Projects/ProjectList.vue') },
      { path: 'appdeploy', name: 'appdeploy', component: () => import('../views/Deploy/AppDeploy.vue') },
    ]
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: Home,
    icon: '',
    children: [
      { path: 'monitorlist', name: 'monitorlist', component: () => import('../views/Monitor/MonitorList.vue') },
    ]
  },
  {
    path: '/alerm',
    name: 'Alerm',
    component: Home,
    icon: '',
    children: [
      { path: 'alermhistory', name: 'alermhistory', component: () => import('../views/Alerm/AlermHistory.vue') },
      { path: 'alermgroup', name: 'alermgroup', component: () => import('../views/Alerm/AlermGroup.vue') }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: Home,
    icon: '',
    children: [
      { path: 'account', name: 'account', component: () => import('../views/System/Account.vue') },
      { path: 'role', name: 'role', component: () => import('../views/System/Role.vue') },
      { path: 'setting', name: 'setting', component: () => import('../views/System/Setting.vue') },
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
