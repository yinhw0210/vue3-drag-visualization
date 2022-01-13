<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { config, setWH } from '@/hooks/useConfig'
import background from '../../components/background.jsx'
import configBuilds from '../components/config-builds/index.vue'
import { ChartConfig } from '../../hooks/userCharts'
const options = [
  {
    label: '自适应宽高',
    value: 0
  },
  {
    label: '拉伸至全屏',
    value: 1
  },
  {
    label: '宽度铺满，高度按比例缩放',
    value: 2
  },
  {
    label: '高度铺满，宽度按比例缩放',
    value: 3
  }
]
onMounted(() => {})
</script>
<template>
  <div class="right_body">
    <div class="right_main" v-if="!ChartConfig.isSelect">
      <div class="right_top">
        {{ '页面设置' }}
      </div>
      <el-row>
        <el-col :span="24">
          <div class="config">
            <div class="header">大屏名称</div>
            <div class="content">
              <el-input v-model="config.name" size="mini" />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="config">
            <div class="header">屏幕宽度</div>
            <div class="content">
              <el-input-number v-model="config.width" size="mini" />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="config">
            <div class="header">屏幕高度</div>
            <div class="content">
              <el-input-number v-model="config.height" size="mini" />
            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="config">
            <div class="header">缩放方式</div>
            <div class="content">
              <el-select v-model="config.zoom" placeholder="Select" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="config">
            <div class="header">背景图片</div>
            <div class="content">
              <el-radio-group v-model="config.background" size="mini">
                <el-radio :label="0">内置背景</el-radio>
                <el-radio :label="1">自定义背景</el-radio>
                <el-radio :label="2">只使用背景色</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <background></background>
        </el-col>
      </el-row>
    </div>
    <configBuilds v-else></configBuilds>
  </div>
</template>
<style lang="scss" scoped>
.right_body {
  z-index: 999;
}
.right_main {
  background-color: #1d1f26;
  height: 100%;
  overflow-x: auto;
  max-width: 310px;
  .right_top {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background-color: #2e343c;
    border-bottom: 1px solid #1f1f1f;
    font-size: 14px;
  }
  .config {
    width: 100%;
    padding: 10px;
    .header {
      width: 100%;
      height: 21px;
      line-height: 21px;
      text-align: left;
      font-size: 12px;
      margin-bottom: 5px;
      color: white;
    }
    .content {
      width: 100%;
      text-align: left;
    }
    .el-radio {
      width: 100%;
      margin-right: 0px !important;
    }
  }
}
</style>