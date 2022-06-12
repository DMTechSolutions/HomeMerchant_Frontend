export default [
  {
    path: '/buyer',
    component: () => import('./layouts/MainLayout.vue'),
    children: [{
      name: 'buyer',
      path: '',
      component: () => import('./pages/IndexPage.vue')
    }]
  }
]
