import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: '/Project',
        name: 'Project',
        component: () => import('pages/ProjectPage.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
