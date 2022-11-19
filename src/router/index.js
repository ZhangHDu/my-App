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
            component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/index.vue'),
        },
        {
            path:'/User',
            name:'user',
            component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/user.vue'),
        },
        {
            path:'/Dynamic',
            name:'dynamic',
            component:()=>import(/* webpackChunkName: "nucleic" */ '../components/biliClient/views/dynamic.vue'),
        }
    ]
    }
  ]
})

export default router