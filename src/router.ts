import { createRouter, createWebHashHistory } from 'vue-router'
import AmaruInicialPage from './Amaru/AmaruInicialPage.vue'
import AmaruPrimariaPage from './Amaru/AmaruPrimariaPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/primaria' },
    { path: '/inicial', component: AmaruInicialPage },
    { path: '/primaria', component: AmaruPrimariaPage },
  ],
})

export default router
