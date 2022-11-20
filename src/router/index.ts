import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import routerList from './routers' // 1、引入路由数组
const routes: Array<RouteRecordRaw> = [
  ...routerList, // 2、将路由数组合并到vue路由配置中
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/imagesetbackground',
    name: 'ImageSetBackground',
    component: () => import('~@/views/ImageSetBackground.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('~@/views/slot/slot.vue')
  },
  {
    path: '/algorithm',
    name: 'algorithm',
    component: () => import('~@/views/algorithm/algorithm.vue')
  },
  {
    path: '/way',
    name: 'way',
    component: () => import('~@/views/way/way.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
