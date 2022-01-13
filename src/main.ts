import { createApp } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import zuFormItem from './components/zu-form-item.jsx'
import router from './route'
import '../src/style/index.scss'
import '../src/style/common.scss'
import store, { key } from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts'
import svgIcon from './components/svgIcon.vue'
import eventBus from 'vue3-eventbus'
const app = createApp(App)
app.component('svg-icon', svgIcon)
app.use(router)
app.use(store, key)
app.use(eventBus)
app.component('zu-form-item',zuFormItem)
app.use(ElementPlus, { locale: zhCn})
app.mount('#app')
app.config.globalProperties.$echarts = echarts
