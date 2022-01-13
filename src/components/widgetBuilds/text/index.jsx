import { defineComponent, onMounted, ref, watch, reactive } from 'vue'
import { ChartConfig } from '@/hooks/userCharts'
export default defineComponent({
  props: {
    id: Number, //活跃状态的组件
    options: String
  },
  emits: [],
  components: {},
  setup(props, ctx) {
    const formData = reactive(JSON.parse(props.options))
    watch(formData, (val) => {
      ChartConfig.chartList.forEach((item, index) => {
        if (item.id === props.id) {
          item.options = JSON.stringify(formData)
        }
      })
    })
    return () => (
      <div style={{ marginTop: '20px' }}>
        <zu-form-item label="文本内容">
          <el-input v-model={formData.name} size="mini"></el-input>
        </zu-form-item>
        <zu-form-item label="字体大小">
          <el-slider v-model={formData.fontSize}></el-slider>
        </zu-form-item>
        <zu-form-item label="字体颜色">
          <el-input
            v-model={formData.fontColor}
            size="mini"
            v-slots={{
              suffix: () => {
                return <el-color-picker v-model={formData.fontColor} size="mini" />
              }
            }}
          ></el-input>
        </zu-form-item>
        <zu-form-item label="字体间距">
          <el-slider v-model={formData.letterSpacing}></el-slider>
        </zu-form-item>
        <zu-form-item label="字体背景">
          <el-input
            v-model={formData.backColor}
            size="mini"
            v-slots={{
              suffix: () => {
                return <el-color-picker v-model={formData.backColor} size="mini" />
              }
            }}
          ></el-input>
        </zu-form-item>
        <zu-form-item label="文字粗细">
          <el-select v-model={formData.fontWeight} placeholder="Select" size="mini">
            <el-option label="正常" value="500"></el-option>
            <el-option label="粗体" value="bold"></el-option>
            <el-option label="特粗" value="bolder"></el-option>
            <el-option label="细体" value="lighter"></el-option>
          </el-select>
        </zu-form-item>
        <zu-form-item label="对齐方式">
          <el-select v-model={formData.textAlign} placeholder="Select" size="mini">
            <el-option label="居左" value="left"></el-option>
            <el-option label="居中" value="center"></el-option>
            <el-option label="居右" value="right"></el-option>
          </el-select>
        </zu-form-item>
        <zu-form-item label="行高">
          <el-input-number v-model={formData.lineHeight} size="mini" />
        </zu-form-item>
      </div>
    )
  }
})
