export default [
  {
    path: '/seller',
    component: () => import('./layouts/MainLayout.vue'),
    children: [
      {
      name: 'Admin Dashboard',
      path: '',
      component: () => import('./pages/IndexPage.vue'),
      meta: {requireLogin: true}
      },
      {
        name: 'lead',
        path: '/lead',
        component: () => import('./pages/LeadPage.vue')
      },
      {
        name: 'feed',
        path: '/feed',
        component: () => import('./pages/FeedPage.vue')
      },
      {
        name: 'req',
        path: '/req',
        component: () => import('./pages/ReqPage.vue')
      },
      {
        name: 'catalog',
        path: '/catalog',
        component: () => import('./pages/CatalogPage.vue')
      }
    ]
  }
]
