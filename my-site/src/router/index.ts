import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import News from '../views/News/News.vue';
import { useStore } from "vuex";
import { ElMessage } from 'element-plus'

const routes: Array<RouteRecordRaw> = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
    
   
  },
  // 首页球星卡片信息
  {
    path: '/star/info/:id',
    name: 'StarInfo',
    component: () => import('../views/Home/StarInfo/StarInfo.vue'),
  },
  // 比赛资讯
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News/News.vue'),
    redirect:'/news/nba',
   
    children: [
      // NBA
      {
        
        path: '/news/nba',
        component: () => import('../views/News/NewsList/NBA.vue'),
        
      },
      // CBA
      {
        path: '/news/cba',
        component:()=>import('../views/News/NewsList/CBA.vue'),
      }
    ]
  },
  // Nba比赛资讯新闻具体内容
  {
    path: '/news/nba/:id',
    name: 'NewsDetailNba',
    component:()=>import('../views/News/NewsInterface/NewsInterface.vue'),
  },
  // Cba比赛资讯新闻具体内容
  {
    path: '/news/cba/:id',
    name: 'NewsDetailCba',
    component:()=>import('../views/News/NewsInterface/NewsInterface.vue'),
  },
  // 赛程排名
  {
    name: 'ranking',
    path: '/ranking',
    redirect:'/ranking/nba',
    component: () => import('../views/ScheduleRanking/ScheduleRanking.vue'),
    children: [
      // NBA
      {
      
        path: '/ranking/nba',
        component: () => import('../views/ScheduleRanking/RankingList/NBA.vue')
        
      },
      // CBA
      {
        
        path: '/ranking/cba',
        component:()=>import('../views/ScheduleRanking/RankingList/CBA.vue'),
      }
    ]
  },
  // 数据中心
  {
    name: 'data',
    path: '/data',
    redirect:'/data/nba/score',
    component: () => import('../views/DataCenter/DataCenter.vue'),
    children: [
      // NBA
      {
        path: '/data/nba',
        redirect:'/data/nba/score',
        component:()=>import('../views/DataCenter/DataCenterList/NBA.vue'),
        children: [
          {
            // 得分
            path: '/data/nba/score',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Score.vue'),
          },
          {
            // 投篮
            path: '/data/nba/shoot',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Shoot.vue'),
         
          },
          {
            // 三分
            path: '/data/nba/threepoint',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/ThreePoint.vue'),
         
          },
          {
            // 罚球
            path: '/data/nba/freethrow',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/FreeThrow.vue'),
         
          },
          {
            // 篮板
            path: '/data/nba/backboard',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/BackBoard.vue'),
         
          },
          {
            // 助攻
            path: '/data/nba/assisting',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Assisting.vue'),
         
          },
          {
            // 盖帽
            path: '/data/nba/blockshot',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/BlockShot.vue'),
         
          },
          {
            // 抢断
            path: '/data/nba/tackle',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Tackle.vue'),
         
          },
        ]
      },
      // CBA
      {
        path: '/data/cba',
        redirect:'/data/cba/score',
        component: () => import('../views/DataCenter/DataCenterList/CBA.vue'),
        children: [
          {
            // 得分
            path: '/data/cba/score',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Score.vue'),
          },
          {
            // 投篮
            path: '/data/cba/shoot',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Shoot.vue'),
         
          },
          {
            // 三分
            path: '/data/cba/threepoint',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/ThreePoint.vue'),
         
          },
          {
            // 罚球
            path: '/data/cba/freethrow',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/FreeThrow.vue'),
         
          },
          {
            // 篮板
            path: '/data/cba/backboard',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/BackBoard.vue'),
         
          },
          {
            // 助攻
            path: '/data/cba/assisting',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Assisting.vue'),
         
          },
          {
            // 盖帽
            path: '/data/cba/blockshot',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/BlockShot.vue'),
         
          },
          {
            // 抢断
            path: '/data/cba/tackle',
            component: () => import('../views/DataCenter/DataCenterList/DataDetail/Tackle.vue'),
         
          },
        ]
      }
    ]
  },
  // 留言板
  {
    name: 'message',
    path: '/message',
    component: () => import('../views/Message/Message.vue'),
    
  },
  // 精彩视频集锦
  {
    name: 'video',
    path: '/video',
    component:()=>import('../views/VideoHighlights/VideoHighlights.vue'),
  },
  // 登录注册界面
  // {
  //   name: 'login',
  //   path: '/login',
  //   component:()=>import('../views/Login/Login.vue'),
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => { 
  const store = useStore();
  if (to.path!=='/' && !localStorage.getItem('userData') && !localStorage.getItem('token')) {
    // 直接跳出登录框要求登录
    store.commit('changeLogin', true);
    // const open3 = () => {
    //   ElMessage({
    //     message: '该功能需要登录才能使用',
    //     type: 'warning',
    //   })
    // }
   
  }
  else { 
    next();
  }
  
      
  
    
})


export default router
