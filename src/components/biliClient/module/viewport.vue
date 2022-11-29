<template>
  <div class='viewport'>
    <div class="top">
        <div class="left">
            <img src="../../../assets/images/homeIcon/logo.png" alt="">
            <div class="leftRouter" v-show="showRouter">
                <div class="name" v-if="thisPath =='Index'">
                    <div class="item" v-for="item in state.home.path" @click="toView(item)">{{item.name}}</div>
                </div>
                <div class="name" v-if="thisPath =='Dynamic'">
                    <div class="item" v-for="item in state.other.path" @click="toView(item)">{{item.name}}</div>
                </div>
                <div class="long" ref="long" v-show="thisPath!=='User'"></div>
               
            </div>
        </div>
        <div class="right" ref="box" :style="changeRight">
           <input type="text" :style="changeInput" placeholder="搜索你感兴趣的视频" @blur="blur" @focus="focus">
          
        </div>
        <!-- 隐藏组件 -->
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"> 
import {useRouter,useRoute} from 'vue-router'
import {useStore} from '../../../store'
import { storeToRefs } from 'pinia'
const router = useRouter()
const route = useRoute()
const store = useStore()
let {thisPath} = storeToRefs(store)
import {ref,reactive, watch} from 'vue'
// 右侧盒子
const box = ref(null)
// 改变右侧盒子
const changeRight = ref('')
// 改变输入框
const changeInput = ref('width: 200px;')
// 是否显示顶部路由
const showRouter = ref(true)
// 路由滑块
const long = ref(null)
// 当前位置
const now = ref('home')
const state = reactive({
    home:{
        path:[
            {
                name:'直播',
                path:'/Live',
                id:0
            },
            {
                name:'推荐',
                path:'/Index',
                id:1
            },
            {
                name:'热门',
                path:'/Hot',
                id:2
            },
            {
                name:'追番',
                path:'/Video',
                id:3
            },
            {
                name:'影视',
                path:'/Movie',
                id:4
            }
        ]
    },
    other:{
        path:[
            {
                name:'综合',
                path:'/Dynamic',
                id:0
            },
            {
                name:'视频',
                path:'/OnlyVideos',
                id:1
            }
        ]
    }
})
// 输入框聚事件
const focus = function(){
    changeRight.value = 'margin-right:350px'
    changeInput.value = 'width: 350px;'
    showRouter.value = false
}
// 输入框失焦事件
const blur = function(){
    changeRight.value = 'margin-right:0'
    changeInput.value = 'width: 200px;'
    setTimeout(()=>{
        showRouter.value = true
    },300)
}
// 跳转路由
const toView = function(item){
    router.push(item.path)
    long.value.style.left = 62*item.id+'px'
   
}
// 监听路由路径，实现滑块位置定义
watch(()=>route.path,()=>{
    if(route.path==='/Index'){
        long.value.style.left = 62*1+'px'
    }else if(route.path==='/Dynamic'){
        long.value.style.left = 0+'px'
    }
})
</script>

<style lang="less" scoped>
.viewport{
    background-color: #fff;
    width: 1133px;
    height: 100%;
    
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(242, 242, 242);
        padding: 20px 35px;
        overflow: hidden;
        height: 85px;
        .left{
            display: flex;
            align-items: center;
            .leftRouter{
                position: relative;
                margin-left: 40px;
                .name{
                    display: flex;
                    font-weight: bold;
                    .item{
                        margin: 15px;
                    }
                }
                .long{
                    transition: left 0.3s ease;
                    width: 22px;
                    height: 3px;
                    background-color: #ed456d;
                    margin: 0 20px;
                    position: absolute;
                    left: 62px;
                }
                
            }
            img{
                width: 70px;
            }
        }
        .right{
            transition: all 0.3s linear ;
            input{
                transition: all 0.3s linear ;
                background-color: rgb(245, 245, 245);
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                background: url(../../../assets/images/homeIcon/搜索.png) no-repeat;
                background-color: rgb(245, 245, 245);
                background-position: 97% center;
            }
            input[type='text']:focus,select:focus{
                border: 1px solid #ed456d;
                outline: none;
                background-color: #fff;
            }
            input:hover{
                background-color: rgb(230, 230, 230);
            }
        }
    }
}
</style>