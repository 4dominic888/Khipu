import { createRouter, createWebHashHistory } from 'vue-router'
import AmaruPage from './Amaru/AmaruPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/primaria' },
    {
      path: '/inicial',
      component: AmaruPage,
      props: {
        type: 'inicial',
      },
    },
    {
      path: '/primaria',
      component: AmaruPage,
      props: {
        type: 'primaria',
      },
    },
  ],
})

export default router
