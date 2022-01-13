<script setup lang="ts">
import Vue3DraggableResizable from '@/components/draggable/Vue3DraggableResizable'
import DraggableContainer from '@/components/draggable/DraggableContainer'
import chartParts from '@/components/widget/chart-parts.vue'
import widgetBuild from '@/components/widget/build'
import { onMounted, onUnmounted, reactive, ref, defineProps, computed } from 'vue'
import { useDrag } from '@/hooks/useDrag'
import { config, setWH } from '../../hooks/useConfig'
import { ChartConfig } from '../../hooks/userCharts'
import ruler from '@/components/ruler/index.vue'
import widget from '@/type/config'
const canvasPanelStyle = computed(() => {
  return {
    width: `${config.width}px`,
    height: `${config.height}px`,
    transform: `scale(${config.scale},${config.scale}) translate(0px, 0px)`,
    backgroundColor: config.color
  }
})
const props = defineProps({
  status: {
    type: String,
    required: true
  }
})
interface DATA {
  isGridShow: Boolean
  isBorShow: Boolean
  width: number
  height: number
}
const data: DATA = reactive({
  width: 1920,
  height: 1080,
  isGridShow: false,
  isBorShow: false
})
const judgeType = (type) => {
  return widget.chart.includes(type) ? chartParts : widgetBuild.build(type)
}
//拖拽事件
const useMethod = useDrag(data)
</script>
<template>
  <div class="body_main" id="canvas-wp">
    <ruler></ruler>
    <div :style="canvasPanelStyle" class="canvs_warp" id="canvs_warp">
      <div class="grid" v-show="data.isGridShow"></div>
      <DraggableContainer>
        <template v-for="(item, index) in ChartConfig.chartList" :key="index">
          <Vue3DraggableResizable
            :w="item.w"
            :h="item.h"
            :x="item.x"
            :y="item.y"
            :draggable="true"
            :isConflictCheck="false"
            :resizable="true"
            :min-width="200"
            :active="item.enble"
            :min-height="200"
            :parent="true"
            :grid="[10, 10]"
            :snap="true"
            @drag-start="useMethod.onDrag($event)"
            @dragging="useMethod.onDraging($event, item)"
            @drag-end="useMethod.onDragstop()"
            @resize-start="useMethod.onResize($event)"
            @resizing="useMethod.onResizeIng($event, item)"
            @resize-end="useMethod.onResizeStop($event)"
            @activated="useMethod.onActivated(item)"
            @deactivated="useMethod.onDeactivated(item)"
          >
            <component
              :is="judgeType(item.type)"
              :type="item.type"
              :id="item.id"
              :width="item.w"
              :height="item.h"
              :key="index"
              :options="item.options"
              :active="item.enble"
              :border="item.border"
              :code="item.code"
            ></component>
          </Vue3DraggableResizable>
        </template>
      </DraggableContainer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.body_main {
  position: relative;
  display: flex;
  height: 100%;
  padding: 0;
  user-select: none;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  .canvs_warp {
    position: absolute;
    border: 1px solid #333;
    margin: 60px 0 0 60px;
    transform-origin: 0px 0px;
  }
  .node_main {
    width: 100%;
    height: 100%;
  }
  .test3 {
    background-color: rgb(174, 213, 129);
  }
  .text-event {
    width: 100%;
    height: 100%;
  }
  .grid {
    float: left;
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) !important;
    background-size: 10px 10px, 10px 10px;
  }
  .p-event {
    float: left;
    height: 400px;
    width: 400px;
    /* border: 1px solid blue; */
    position: relative;
    margin-left: 20px;
  }

  .gogo {
    border: 1px solid #000;
    color: #000;
    position: absolute;
  }
  .aa {
    border: none;
    color: #000;
    position: absolute;
  }
}
</style>