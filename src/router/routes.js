import {routes as commonRoutes} from 'src/modules/buyer';
import {routes as authRoutes} from 'src/modules/auth';
import {routes as adminRoutes} from 'src/modules/seller';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default [
  ...routes,
  ...commonRoutes,
  ...authRoutes,
  ...adminRoutes
]
