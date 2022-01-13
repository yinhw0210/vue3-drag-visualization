<script setup lang="ts">
import Bus from 'vue3-eventbus'
import chartsType from '@/utils/chartsType'
import { reactive, ref, onUnmounted, onMounted } from 'vue'
import { ChartConfig } from '../../hooks/userCharts'
</script>
<template>
  <div class="left_main">
    <h5 class="_header">图层</h5>
    <div
      class="main_item"
      v-for="(item, index) in ChartConfig.chartList"
      :key="index"
      :class="item.enble ? 'active' : ''"
    >
      <div><svg-icon :name="item.type" color="#909399"></svg-icon></div>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left_main {
  height: 100%;
  width: 200px;
  max-width: 310px;
  box-sizing: border-box;
  background-color: #1d1f26;
  z-index: 999;
  ._header {
    height: 35px;
    background-color: #2e343c;
    color: white;
    line-height: 35px;
    margin-bottom: 10px;
  }
  .active {
    color: white;
    background-color: #108cee;
  }
  .main_item {
    width: 100%;
    height: 40px;
    line-height: 40px;
    &:first-child{
      margin-top: 20px;
    }
    // border-bottom: 1px solid #ccc;
    // border: 1px solid transparent;
    // border-bottom-color: #ccc;
    text-align: left;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    &:hover {
      // border: 1px solid #108cee;
      background-color: #2d343c;
    }
    div{
      width: 53px;
      height: 30px;
      margin-right: 10px;
      border: 1px solid #3a4659;
    background: #282a30;
    text-align: center;
    line-height: 30px;
    }
    p{
      color: white;
    }
  }
}
</style>