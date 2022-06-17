export default [
  {
    path: '/buyer',
    component: () => import('./layouts/MainLayout.vue'),
    children: [{
      name: 'buyer',
      path: '',
      component: () => import('./pages/IndexPage.vue')
    },
      {
        name: 'profile',
        path: '/profile',
        component: () => import('./pages/ProfilePage.vue')
      },
      {
        name: 'collection',
        path: '/collection',
        component: () => import('./pages/CollectionPage.vue')
      },
      {
        name: 'req',
        path: '/req',
        component: () => import('./pages/ReqPage.vue')
      }
    ]
  }
]
