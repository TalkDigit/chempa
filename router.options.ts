import type { RouterConfig } from '@nuxt/schema'

const home = () => import('~/pages/index.vue').then(r => r.default || r)

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: home
    }
    
  ],
}