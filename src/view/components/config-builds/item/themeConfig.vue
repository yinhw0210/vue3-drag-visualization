<script lang="ts" setup>
import { reactive } from 'vue'
import { ChartConfig } from '@/hooks/userCharts'
import { buildChange } from '../hooks/chartConfig'
import backImg from '@/components/widgetBuilds/share/backImg.jsx'
const configType: any = ChartConfig.chartList!.find((item, index) => item.enble)
const data = reactive({
  name: '',
  svg: 'Canvas'
})
</script>
<template>
  <div>
    <zu-form-item label="图层名称">
      <el-input v-model="data.name" placeholder="请输入图层名称" size="mini" />
    </zu-form-item>
    <zu-form-item label="渲染方式">
      <el-select v-model="data.svg" placeholder="请选择" size="mini" disabled>
        <el-option label="SVG" value="SVG"> </el-option>
        <el-option label="Canvas" value="Canvas"> </el-option>
      </el-select>
    </zu-form-item>
    <backImg :id="configType.id" :options="configType.border"></backImg>
    <component
      :is="buildChange(configType.type)"
      :id="configType.id"
      :options="configType.options"
    ></component>
  </div>
</template>
<style lang="scss" scoped>
.row_main {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  .chart_name {
    font-size: 12px;
    text-align: left;
  }
}
</style>
