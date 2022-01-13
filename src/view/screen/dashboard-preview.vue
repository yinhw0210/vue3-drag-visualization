<script setup lang="ts">
import draggableBody from '../components/draggableBody.vue'
</script>
<template>
  <div class="main_body">
    <draggableBody status="preview"/>
  </div>
</template>
<style scoped lang="scss">
.main_body{
  width: 100%;
  height: 100%;
}
</style>