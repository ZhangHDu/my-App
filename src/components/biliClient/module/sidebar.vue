<template>
  <div class='sidebar'>
    <div class="top">
        <div class="light">
            <div class="red" @click="off"></div>
            <div class="yellow"></div>
            <div class="green"></div>
        </div>
        <div class="imgIcon">
            <div class="item"  @click="to('Index')">
                <svg class="icon" aria-hidden="true" v-show="thisPath!=='Index'">
                    <use xlink:href="#icon-home-smile-fill"></use>
                </svg>
                <svg class="icon" aria-hidden="true" v-show="thisPath==='Index'">
                    <use xlink:href="#icon-home-smile-fill-copy"></use>
                </svg>
                <p v-show="thisPath!=='Index'">首页</p>
                <p style="color:#ed456d;" v-show="thisPath==='Index'">首页</p>
            </div>
            <div class="item" @click="to('Dynamic')">
                <svg class="icon" aria-hidden="true" v-show="thisPath!=='Dynamic'" >
                    <use xlink:href="#icon-fengche"></use>
                </svg>
                <svg class="icon" aria-hidden="true" v-show="thisPath==='Dynamic'">
                    <use xlink:href="#icon-fengche-copy"></use>
                </svg>
                <p v-show="thisPath!=='Dynamic'">动态</p>
                <p style="color:#ed456d;" v-show="thisPath==='Dynamic'">动态</p>
            </div>
            <div class="item" @click="to('User')">
                <svg class="icon" aria-hidden="true" v-show="thisPath!=='User'" >
                    <use xlink:href="#icon-bilibili-line"></use>
                </svg>
                <svg class="icon" aria-hidden="true" v-show="thisPath==='User'">
                    <use xlink:href="#icon-bilibili-line-copy"></use>
                </svg>
                <p v-show="thisPath!=='User'">我的</p>
                <p style="color:#ed456d;" v-show="thisPath==='User'">我的</p>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="imgIcon">
            <div class="item">
                <div class="head"></div>
            </div>
            <div class="item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youjian"></use>
                </svg>
            </div>
            <div class="item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yueliang"></use>
                </svg>
            </div>
            <div class="item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shezhi"></use>
                </svg>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {useStore} from '../../../store'
import {useRouter} from 'vue-router'
import {ref,onMounted} from 'vue'
const store = useStore()
const router = useRouter()
let {appType,thisPath} = storeToRefs(store)
// const thisPath = ref('Index')
// 关闭软件
const off = function(){
    appType.value = 0
}
// 路由跳转
const to = function(path:string){
    router.push(`/${path}`)
    // 保存当前路由路径
    thisPath.value = path
}

onMounted(():void=>{
    // 挂载之后路由跳转至首页
    router.push('/Index')
    
})
</script>

<style lang='less' scoped>
.sidebar{
    background:rgb(242, 242, 242);
    width:67px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .top{
        width:67px;
        .light{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 100%;
            height: 25px;
            div{
                width: 12px;
                height: 12px;
                border-radius: 50%;
            }
            .red{
                background-color: rgb(248, 62, 62);
            }
            .yellow{
                background-color: rgb(255, 194, 89);
            }
            .green{
                background-color: rgb(38, 220, 38);
            }
        }
        .imgIcon{
            padding-top: 90px;
            .item{
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #5a5a5a;
                .icon{
                    width: 27px;
                    height: 27px;
                }

                margin-bottom: 29px;
            }
        }
    }
    .bottom{
       
        .imgIcon{
            .item{
                margin: 15px 0;
                display: flex;
                justify-content: center;
                .head{
                    width: 25px;
                    height: 25px;
                    background-color: red;
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>