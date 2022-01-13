<template>
    <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    }
})
const iconName = computed(() => `#icon-${ props.name }`)
const svgClass = computed(() => {
    if(props.name) return `svg-icon icon-${ props.name }`
    return 'svg-icon'
})
</script>

<style scoped>
.svg-icon{width: 1em;height: 1em;fill:currentColor; vertical-align: middle;}
</style>