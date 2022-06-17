import {routes as buyerRoutes} from 'src/modules/buyer';
import {routes as authRoutes} from 'src/modules/auth';
import {routes as sellerRoutes} from 'src/modules/seller';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {path: '/about', name: 'about', component: () => import('pages/AboutPage.vue')},
      {path: '/features', name: 'features', component: () => import('pages/FeaturesPage.vue')}
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
  ...buyerRoutes,
  ...authRoutes,
  ...sellerRoutes
]
