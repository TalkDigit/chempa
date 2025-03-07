import type { RouterConfig } from '@nuxt/schema'

const home = () => import('~/pages/index.vue').then(r => r.default || r)
const weAreYou = () => import('~/pages/who-are-you.vue').then(r => r.default || r) 
const business = () => import('~/pages/business.vue').then(r => r.default || r) 
const productsList = () => import('~/pages/products.vue').then(r => r.default || r) 
const Carrers = () => import('~/pages/carrers.vue').then(r => r.default || r) 
const Contact = () => import('~/pages/contact.vue').then(r => r.default || r) 
const productsDetails = () => import('~/pages/productsDetails.vue').then(r => r.default || r) 


export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: home
    },
    {
      name: 'who-are-you',
      path: '/who-are-you',
      component: weAreYou
    },
    {
      name: 'business',
      path: '/business',
      component: business
    },
    {
      name: 'productsList',
      path: '/products',
      component: productsList
    },
    {
      name: 'Carrers',
      path: '/carrers',
      component: Carrers
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Contact
    },
    {
      name: 'productsDetails',
      path: '/productsDetails',
      component: productsDetails
    }
    
    
  ],
}