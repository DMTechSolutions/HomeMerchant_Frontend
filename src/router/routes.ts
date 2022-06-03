import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/LandingPage.vue')
      },
      {
        path: '/Project',
        name: 'Project',
        component: () => import('pages/ProjectPage.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('pages/RegistrationPage.vue')
      },
      {
        path: '/seller',
        name: 'seller',
        component: () => import('pages/SellerPage.vue')
      },
      {
        path: '/buyer',
        name: 'buyer',
        component: () => import('pages/BuyerPage.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
