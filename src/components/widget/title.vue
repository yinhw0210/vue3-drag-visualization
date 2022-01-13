<script lang="ts" setup>
import { computed, reactive, onMounted, watch } from 'vue'
import { ChartConfig } from '@/hooks/userCharts'
import widgetBuild from '@/components/widgetBuilds/index'
import { borderImg } from '@/utils/tool'
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
  border: Object
})
const data = reactive(widgetBuild.build(props.type!))
const renderDraw = () => {
  ChartConfig.chartList.forEach((el) => {
    if (el.id === props.id) {
      el.options = JSON.stringify(widgetBuild.build(props.type!))
    }
  })
}
const textStyle = computed(() => {
  const _item = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    fontSize: `${data.fontSize}px`,
    color: `${data.fontColor}`,
    letterSpacing: `${data.letterSpacing}px`,
    backgroundColor: `${data.backColor}`,
    fontWeight: `${data.fontWeight}`,
    textAlign: `${data.textAlign}`,
    lineHeight: `${data.lineHeight}px`
  }
  if (props.border!.type === '1') {
    return {
      ..._item,
      border: `${props.border!.width}px ${props.border!.style} ${props.border!.color}`
    }
  } else if (props.border!.type === '2') {
    return {
      ..._item,
      borderStyle: 'solid',
      borderWidth: '10px',
      borderImageSource: 'url(' + borderImg(props.border!.num) + ')',
      borderImageSlice: '8 fill'
    }
  } else {
    return {
      ..._item
    }
  }
})
watch(
  () => props.options,
  (val) => {
    if (props.active) {
      const item = JSON.parse(val!)
      Object.assign(data, item)
    }
  }
)
onMounted(() => {
  renderDraw()
})
</script>
<template>
  <div class="_text" :style="textStyle">{{ data.name }}</div>
</template>
<style lang="scss" scoped>
</style>