<script setup lang="ts">
import { reactive ,computed} from '@vue/reactivity'
import draggableHeader from '../components/draggableHeader.vue'
import draggableBody from '../components/draggableBody.vue'
import draggableLeft from '../components/draggableLeft.vue'
import draggableRight from '../components/draggableRight.vue'
import {config} from '@/hooks/useConfig'
const scale = computed({ 
  get: () => config.scale * 100,
  set: val => { 
    config.scale = val / 100
  } 
})
const formatTooltip = (val) => {
  return `${val}%`
}
</script>
<template>
  <draggableHeader></draggableHeader>
  <div id="main">
    <draggableLeft></draggableLeft>
    <div class="center_main">
      <draggableBody></draggableBody>
      <div class="_bottom">
        <el-slider v-model="scale" :format-tooltip="formatTooltip"></el-slider>
      </div>
    </div>
    <draggableRight></draggableRight>
  </div>
  <!-- <button class="get" @click="getHttp()">get请求</button>
  <span></span>
  <button class="post">get请求</button> -->
</template>
<style lang="scss" scoped>
#main {
  height: calc(100% - 45px);
  display: flex;
  justify-content: flex-start;
}
.center_main {
  height: 100%;
  width: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #1a1e20;
  padding-bottom: 32px;
  background-image: radial-gradient(#525d64 10%, rgba(0, 0, 0, 0) 0px),
    radial-gradient(#525d64 10%, rgba(0, 0, 0, 0) 0px);
  background-size: 12px 12px, 12px 12px;
  ._bottom{
    height: 32px;
    width: 100%;
    background-color: #222528;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;
    ::v-deep .el-slider{
      width: 200px;
      --el-slider-button-size:10px;
    }
  }
}
</style>
<style scoped>
</style>