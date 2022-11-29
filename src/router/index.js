import {createRouter,createWebHistory} from 'vue-router'
import home from '../views/home.vue'
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'home', // 桌面
      component:home,
      redirect:'index',
      children:[
        {
            path:'/Index',
            name:'index',
            component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/index/index.vue'),
        },
        {
            path:'/User',
            name:'user',
            component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/user.vue'),
        },
        {
            path:'/Dynamic',
            name:'dynamic',
            component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/dynamic/dynamic.vue'),
        },
        {
          path:'/Hot',
          name:'hot',
          component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/index/hot.vue'),
        },
        {
          path:'/Live',
          name:'live',
          component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/index/live.vue'),
        },
        {
          path:'/Movie',
          name:'movie',
          component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/index/movie.vue'),
        },
        {
          path:'/Video',
          name:'video',
          component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/index/video.vue'),
        },
        {
          path:'/OnlyVideos',
          name:'onlyVideos',
          component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/dynamic/onlyVideos.vue'),
        }
    ]
    }
  ]
})

export default router