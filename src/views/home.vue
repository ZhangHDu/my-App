<template>
  <div class="table">
    
    <div class="apps">
        <div class="item" @click="openApp(1)">
            <img src="../assets/images/tableIcon/bili.png" alt="">
            <div v-if="appType==1"></div>
        </div>
    </div>
    <biliClient v-if="appType==1"/>
  </div>
</template>

<script setup lang="ts">
import biliClient from '../components/biliClient/home.vue'
import { storeToRefs } from 'pinia'
import {useStore} from '../store'
const store = useStore()
let {appType} = storeToRefs(store)
const openApp = function(id:number):void{
    appType.value = id
    
}
</script>

<style lang="less">
html{
    background: #4FBCFD;
    background-size: 100% 100%;
   
}
.table{
    position: relative;
    width: 1vw;
    height: 1vh;
    overflow-y: hidden;
    .apps{
        display: flex;
        position: fixed;
        z-index:999;
        left: 0;
        top: 50%;
        width: 100px;
        height: 600px;
        transform: translateY(-50%);
        border-radius: 0 20px 20px 0;
        background-color: rgba(249, 249, 249, 0.721);
        backdrop-filter: blur(200px);
        .item{
            margin: 15px;
            position: relative;
            height: 60px;
            img{
                width: 60px;
                height: 60px;
            }
            div{
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #fff;
                position: absolute;
                top: 50%;
                left: -10px;
                transform: translateY(-50%);
            }
        }
    }
}
</style>