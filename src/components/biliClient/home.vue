<template>
  <div class="biliClient" draggable="true" ref="biliClient">
    <sidebar />
    <viewport />
  </div>
</template>

<script lang="ts" setup>
import viewport from './module/viewport.vue'
import sidebar from './module/sidebar.vue'
import {ref} from 'vue'
const biliClient = ref(null)
</script>

<style lang="less" scoped>
.biliClient{
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%) translateY(-30%);
    width: 1200px;
    height: 750px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(95, 93, 93, 0.313);
    display: flex;
    overflow: hidden;
}
</style>