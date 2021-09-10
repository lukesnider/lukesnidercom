import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "roll" */ '../views/Roll.vue'),
      },
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
      },
    ],
  },
  // {
  //   path: '/site-administration',
  //   component: () => import(/* webpackChunkName: "administration" */ '../views/Admin/Main.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'AdminDashboard',
  //       component: () => import(/* webpackChunkName: "administration" */ '../views/Admin/Dashboard.vue'),
  //     },
  //     {
  //       path: 'pages',
  //       name: 'Pages',
  //       component: () => import(/* webpackChunkName: "administration" */ '../views/Admin/Pages.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
