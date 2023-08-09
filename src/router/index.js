import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.vue'
import AboutView from '@/views/aboout.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

routes.forEach((r) => {
  r.path = "/test" + r.path
})

const router = createRouter({
  // base: '/test',  // 重点4：qiankun进入子应用时，返回true,
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/test' : '/'),
  routes
})

export default router
