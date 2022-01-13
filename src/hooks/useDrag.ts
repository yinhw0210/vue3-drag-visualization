import { onMounted, reactive, ref } from 'vue'
import { ChartConfig } from './userCharts'
import Bus from 'vue3-eventbus'
export function useDrag(data) {
  const activeObject = {}
  let dragMethod = {
    //组件按下
    onActivated(item) {
      ChartConfig.chartList.forEach((el) => {
        if (item.id === el.id) {
          el.enble = true
        }
      })
      ChartConfig.isSelect = true
      data.isBorShow = true
    },
    //失去焦点
    onDeactivated(item) {
      ChartConfig.chartList.forEach((el) => {
        if (item.id === el.id) {
          el.enble = false
        }
      })
      ChartConfig.isSelect = false
      data.isBorShow = false
    },
    //组件拖动开始
    onDrag(e) {
      data.isGridShow = true
    },
    //组件拖动中-持续触发
    onDraging(event, item) {
      ChartConfig.chartList.forEach((el) => {
        if (item.id === el.id) {
          el.x = event.x
          el.y = event.y
        }
      })
    },
    //组件拖动完成
    onDragstop() {
      data.list = []
      data.isGridShow = false
      data.isBorShow = false
    },
    //改变组件大小开始
    onResize(e) {},
    //改变组件大小中-持续触发
    onResizeIng(event, item) {
      ChartConfig.chartList.forEach((el) => {
        if (item.id === el.id) {
          el.x = event.x
          el.y = event.y
          el.w = event.w
          el.h = event.h
        }
      })
    },
    //改变组件大小结束
    onResizeStop(e) {}
  }
  return {
    ...dragMethod
  }
}
