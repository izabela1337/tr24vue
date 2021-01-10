import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  //static pages
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue')
  },
  //kinda-but-not-so-quite static pages
  {
    path: '/promo',
    name: 'Promocje',
    component: () => import('../views/Promo.vue')
  },
  //shop pages
  {
    path: '/shop',
    name: 'Sklep',
    component: () => import('../views/shop/Shop.vue')
  },
  {
    path: '/shop/item/:proID?',
    name: 'Product Page',
    component: () => import('../views/shop/Item.vue')
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
