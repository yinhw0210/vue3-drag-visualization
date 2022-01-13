<script lang="ts" setup>
import { ChartConfig } from '@/hooks/userCharts'
import coordinateConfig from './item/coordinateConfig.vue'
import interConfig from './item/interConfig.vue'
import themeConfig from './item/themeConfig.vue'
import dataConfig from './item/dataConfig.vue'
import { reactive } from 'vue'
const tabPan = [
  {
    label: '配置',
    code: themeConfig
  },
  {
    label: '数据',
    code: dataConfig
  },
  {
    label: '交互',
    code: interConfig
  },
  {
    label: '坐标',
    code: coordinateConfig
  }
]
const data = reactive({
  name: '',
  svg: 'Canvas'
})
</script>
<template>
  <div class="right_main">
    <el-tabs type="border-card">
      <el-tab-pane :label="item.label" v-for="(item, index) in tabPan" :key="index">
        <component :is="item.code"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="scss" scoped>
.right_main {
  background-color: #1d1f26;
  height: 100%;
  overflow-x: auto;
  width: 310px;
  .right_top {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #1d1f26;
    font-size: 14px;
  }
  ::v-deep .el-tabs {
    height: 100%;
    background-color: #1d1f26;
  }
  ::v-deep .el-tabs--border-card{
    border: none;
  }
  ::v-deep .el-tabs--border-card>.el-tabs__header{
    background-color: #1d1f26;
  }
  ::v-deep .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    background-color: #2d2e3c;
    border: none;
    color: white;
  }
}
</style>