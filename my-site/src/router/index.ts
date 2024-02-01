import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
    children: [
      {
        name:'homepage',
        path: '/homepage',
        component:()=>import('../components/HelloWorld.vue'),
      }
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 比赛资讯
  {
    path: '/news',
    name: 'News',
    component:()=>import('../views/News/News.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
