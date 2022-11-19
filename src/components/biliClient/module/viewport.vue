<template>
  <div class='viewport'>
    <div class="top">
        <div class="left"><img src="../../../assets/images/homeIcon/logo.png" alt=""></div>
        <div class="right" ref="box" :style="changeRight">
           <input type="text" :style="changeInput" placeholder="搜索你感兴趣的视频" @blur="blur" @focus="focus">
          
        </div>
        
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"> 
import {ref} from 'vue'
// 右侧盒子
const box = ref(null)
// 改变右侧盒子
const changeRight = ref('')
// 改变输入框
const changeInput = ref('width: 200px;')
// 输入框聚事件
const focus = function(){
    changeRight.value = 'margin-right:350px'
    changeInput.value = 'width: 350px;'
}
// 输入框失焦事件
const blur = function(){
    changeRight.value = 'margin-right:0'
    changeInput.value = 'width: 200px;'
}
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
        .left{
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