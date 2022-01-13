import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import layout from '@/layout/index.vue'
const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { title: '仪表盘' },
        component: () => import('../view/screen/dashboard.vue')
      },
      {
        path: '/dashboard-preview',
        name: 'dashboard-preview',
        meta: { title: '仪表盘预览' },
        component: () => import('../view/screen/dashboard-preview.vue')
      }
    ]
  }
]
const router = createRouter({
  history,
  routes: routes
})
router.beforeEach((to: any, from: any, next: any) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
