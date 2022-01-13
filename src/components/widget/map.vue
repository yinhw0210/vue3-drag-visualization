<script lang="ts" setup>
import {
  inject,
  onMounted,
  toRef,
  defineExpose,
  reactive,
  ref,
  nextTick,
  watch,
  computed
} from 'vue'
import chartBuild from '@/components/widgetBuilds/index'
import { ChartConfig } from '@/hooks/userCharts'
import { borderImg } from '@/utils/tool'
import chinaJson from '@/json/china.json'
let echarts: any = inject('ec')
const props = defineProps({
  width: {
    type: Number,
    default: 0
  },
  height: Number,
  type: String,
  id: Number,
  options: String,
  active: Boolean,
  border: Object,
  code: Number
})
let Chart: any
const drawLine = () => {
  echarts.registerMap('china', chinaJson)
  Chart = echarts.init(document.getElementById(`echarts${props.id}`))
  Chart.resize()
  Chart.setOption(chartBuild.build(props.type!, props.code!))
  ChartConfig.chartList.forEach((el) => {
    if (el.id === props.id) {
      el.options = JSON.stringify(chartBuild.build(props.type!, props.code!))
    }
  })
}
watch(
  () => props.width,
  (val) => {
    Chart.resize()
  }
)
watch(
  () => props.options,
  (val) => {
    if (props.active) Chart.setOption(JSON.parse(val!))
  }
)
onMounted(() => {
  drawLine()
})
const echartStyle = computed(() => {
  if (props.border!.type === '1') {
    return {
      width: `${props.width}px`,
      height: `${props.height}px`,
      border: `${props.border!.width}px ${props.border!.style} ${props.border!.color}`
    }
  } else if (props.border!.type === '2') {
    return {
      borderStyle: 'solid',
      borderWidth: '10px',
      width: `${props.width}px`,
      height: `${props.height}px`,
      borderImageSource: 'url(' + borderImg(props.border!.num) + ')',
      borderImageSlice: '8 fill'
    }
  } else {
    return {
      width: `${props.width}px`,
      height: `${props.height}px`
    }
  }
})
</script>
<template>
  <div :id="`echarts${props.id}`" :style="echartStyle"></div>
</template>