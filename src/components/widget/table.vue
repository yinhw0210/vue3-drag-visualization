<script lang="ts" setup>
import { computed, reactive, onMounted, watch, ref } from 'vue'
import { ChartConfig } from '@/hooks/userCharts'
import widgetBuild from '@/components/widgetBuilds/index'
import { borderImg } from '@/utils/tool'
const props = defineProps({
  width: Number,
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
onMounted(() => {
  renderDraw()
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
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No.'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No.'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No.'
  }
]
const tableHeader = [
  {
    label: '时间',
    prop: 'date'
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '地址',
    prop: 'address'
  }
]
const style = computed(() => {
  return {
    '--el-table-border-color': `${!data.isBorder ? 'transparent' : data.bgColor}`,
    fontSize: `${data.fontSize}px`,
    background: `${data.rowBackColor}`,
    height: `${props.height}px`
  }
})
const tableStyle = computed(() => {
  if (props.border!.type === '2') {
    return {
      borderStyle: 'solid',
      borderWidth: '10px',
      borderImageSource: 'url(' + borderImg(props.border!.num) + ')',
      borderImageSlice: '8 fill'
    }
  }
})
</script>
<template>
  <div :style="tableStyle">
    <el-table
      :data="tableData"
      class="_table"
      :border="data.isBorder"
      :show-header="data.showHeader"
      :header-cell-style="{
        background: `${data.headerBackColor}`,
        color: `${data.headerColor}`,
        borderColor: `${data.bgColor}`,
        textAlign: `${data.align}`
      }"
      :cell-style="{
        borderColor: `${data.bgColor}`,
        textAlign: `${data.align}`
      }"
      :row-style="{
        height: `${data.lineHeight}px`,
        color: `${data.rowColor}`,
        background: `${data.rowBackColor}`,
        borderColor: `${data.bgColor}`
      }"
      :style="style"
    >
      <template v-for="(item, index) in tableHeader" :key="index">
        <el-table-column :prop="item.prop" :label="item.label" />
      </template>
    </el-table>
  </div>
</template>
<style lang="scss" scoped>
._table {
  ::v-deep .el-table__cell {
    padding: 6px 0px !important;
  }
  ::v-deep tr:hover > td {
    background-color: transparent !important;
  }
}
</style>