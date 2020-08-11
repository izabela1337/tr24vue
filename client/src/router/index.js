import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
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
    path: '/shop',
    name: 'Sklep',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/shop/item/:proID?',
    name: 'Product Page',
    component: () => import('../views/Item.vue')
  },
  //err pages
  {
    path:'/*',
    name: '404 error - strony nie znaleziono',
    component: () => import('../views/err/404.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
