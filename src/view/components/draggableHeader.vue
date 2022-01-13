<script setup lang="ts">
import { ref } from 'vue'
import headerMenu from '@/components/hader-menu/index.jsx'
import html2canvas from 'html2canvas'
import canvg from 'canvg'
import { base64ToBlob } from '../../utils/tool'
const logo = ref()
const CanvsChange = () => {
  canVg()
  html2canvas(document.getElementById('canvs_warp') as HTMLElement, {
    useCORS: true
  }).then((canvas) => {
    const dataURL = canvas.toDataURL('image/png')
    const aLink = document.createElement('a')
    const blob = base64ToBlob(dataURL)
    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', true, true)
    aLink.download = '图表.png'
    aLink.href = URL.createObjectURL(blob)
    aLink.click()
  })
}
const canVg = () => {
  //以下是对svg的处理
  let svgElem = document.getElementById('canvs_warp')!.querySelectorAll('svg')
  svgElem.forEach(function (node, index) {
    //获取svg的父节点
    var parentNode = node.parentNode
    //获取svg的html代码
    var svg = node.outerHTML.trim()
    //创建一个<canvas>，用于放置转换后的元素
    var canvas = document.createElement('canvas')
    //将svg元素转换为canvas元素
    new //将svg元素转换为canvas元素
    canvg(canvas, svg)
    //设置新canvas元素的位置
    if (node.style.position) {
      canvas.style.position += node.style.position
      canvas.style.left += node.style.left
      canvas.style.top += node.style.top
    }

    //删除svg元素
    parentNode!.removeChild(node)
    //增加canvas元素
    parentNode!.appendChild(canvas)
  })
}
</script>
<template>
  <div class="header_main">
    <div class="admin_logo" ref="logo">
      <svg-icon name="main_gods" color="#333"></svg-icon>
      <span>Zeus BI</span>
    </div>
    <div class="echarts_type">
      <headerMenu></headerMenu>
    </div>
    <div class="functional_area">
      <el-button type="primary" @click="CanvsChange" size="mini">生成图片</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header_main {
  height: 45px;
  width: 100%;
  background-color: #1d1e1f;
  display: flex;
  z-index: 999;
  position: relative;
  .admin_logo {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg-icon {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
    span {
      color: white;
      font-weight: 700;
      font-size: 22px;
      font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC',
        'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
    }
  }
  .echarts_type {
    width: calc(100% - 200px - 310px);
    padding: 0 50px;
    display: flex;
    // justify-content: center;
    align-items: center;
  }
  .functional_area {
    width: 310px;
    line-height: 45px;
  }
}
</style>