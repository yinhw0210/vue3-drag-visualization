<script setup lang="ts">
import { ref } from 'vue'
import Layout from '../src/layout/index.vue'
import * as echarts from 'echarts'
import { provide } from 'vue'
// const msg = ref('kaishi')
// import Layout form '@/layout/index'
components: {
  Layout
}
provide('ec',echarts)//provide
</script>
<template>
<router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
