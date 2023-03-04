

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Minuman from '../views/Minuman.vue'
import Minuman_Detail from '../views/Minuman_Detail.vue'
import Keranjang from '../views/Keranjang.vue'
import Sukses_Pesanan from '../views/Sukses_Pesanan.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/minuman',
      name: 'Minuman',
      component: Minuman
    },
    {
      path: '/minuman/:id',
      name: 'Minuman_Detail',
      component: Minuman_Detail
    },
    {
      path: '/keranjang',
      name: 'Keranjang',
      component: Keranjang
    },
    {
      path: '/pesanan-sukses',
      name: 'Sukses_Pesanan',
      component: Sukses_Pesanan
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
